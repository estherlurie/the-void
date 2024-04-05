import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

const DISPLAY_HOURS_AGO = 24;

async function sign_up(username: any): number {
	console.log('sign up username=' + username);
	const sign_up_res = await prisma.users.create({
		data: {
			name: username
		}
	});
	console.log('signupres=');
	console.log(sign_up_res);
}

async function get_user_id(username: String): Promise<number | null> {
	const user = await prisma.users.findFirst({ where: { name: username } });
	if (user && user.id) {
		return user.id;
	} else {
		return null;
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	new_post: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');

		console.log('about to find user = ' + username);
		let user = await prisma.users.findFirst({ where: { name: username } });

		if (!user) {
			console.log('No user found');
			sign_up(username);
			const delay_ms = 50;
			await new Promise((resolve) => setTimeout(resolve, delay_ms));
		}
		console.log('getting user_id ');
		const user_id = await get_user_id(username);
		if (!user_id) {
			console.log('No user_id, not posting');
			return;
		}
		console.log('user_id=' + user_id);

		const text = data.get('text');
		await prisma.posts.create({
			data: {
				user_id: user_id,
				text: text
			}
		});
	}
};

export const load = (async ({}) => {
	// 1.
	const void_threshold = new Date();
	void_threshold.setHours(void_threshold.getHours() - DISPLAY_HOURS_AGO);

	const response = await prisma.posts.findMany({
		where: {
			create_time: {
				gt: void_threshold
			}
		},
		include: {
			users: true
		},
		orderBy: {
			create_time: 'desc'
		}
	});

	// 2.
	return { feed: response, threshold_hours: DISPLAY_HOURS_AGO };
}) satisfies PageServerLoad;
