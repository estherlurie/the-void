import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

async function sign_up(username: any): number {
		console.log('sign up username=' + username)
		const sign_up_res = await prisma.users.create({
			data: {
				name: username
			}
		})
		console.log(sign_up_res);
}

async function get_user_id(username: String): Promise<number|null> {
	const user = await prisma.users.findFirst({where:{name:username}});
	if (user && user.id) { return user.id } else { return null; }
}

/** @type {import('./$types').Actions} */
export const actions = {
	new_post: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
    console.log("about to find user = " + username)
		let user = await prisma.users.findFirst({where: {name: username}});
		let user_id: number|null;
		if (!user) {
			console.log("No user found")
			sign_up(cookies.get('username'));
		}
		console.log("getting user_id ");
		user_id = await get_user_id(username);
		if (!user_id) {
			console.log("No user_id, not posting");
			return;
		}
		console.log("user_id=" + user_id);

		const text = data.get('text');
		await prisma.posts.create({
			data: {
				user_id: user_id,
				text: text
			}
		});
	},
};

export const load = (async ({cookies}) => {
	// 1.
	let void_threshold = new Date();
	const hours_ago = 2;
	void_threshold.setHours(void_threshold.getHours() - hours_ago);

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
	return { feed: response };
}) satisfies PageServerLoad;
