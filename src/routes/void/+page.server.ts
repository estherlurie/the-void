import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const DISPLAY_HOURS_AGO = 24;

async function sign_up(username: string): Promise<number> {
	console.log('sign up username=' + username);
	const sign_up_res = await prisma.users.create({
		data: {
			name: username
		}
	});

	if (!sign_up_res) {
		return -1;
	}
	return 0;
}

async function get_user_id(username: string): Promise<number | null> {
	const user = await prisma.users.findFirst({ where: { name: username } });
	if (user && user.id) {
		return user.id;
	} else {
		return null;
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	new_post: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');

		console.log('about to find user = ' + username);
		const user = await prisma.users.findFirst({ where: { name: username } });

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

		redirect(303, '/void');
	}
};

export const load = (async ({ cookies }) => {
	// TODO AUTH
	console.log('HELLO FROM VOID');
	const session = cookies.get('session', { path: '/' });
	console.log('Session: ' + session);
	if (!session) {
		console.log('not authenticated, redirect to auth');
		redirect(307, '/auth');
	}

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
	return { feed: response, threshold_hours: DISPLAY_HOURS_AGO, username: session };
}) satisfies PageServerLoad;
