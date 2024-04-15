import prisma from '$lib/prisma';
import { getSupportInfo } from 'prettier';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (username.length == 0) {
			return { error: 'Empty username' };
		}
		if (password.length == 0) {
			return { error: 'Empty password' };
		}

		const user = await prisma.users.findFirst({ where: { name: username } });
		if (user) {
			return { already_exists: true };
		}

		const sign_up_res = await prisma.users.create({
			data: {
				name: username
			}
		});

		const password_res = await prisma.passwords.create({
			data: {
				user_id: sign_up_res.id,
				password: password
			}
		});

		console.log('password_res');
	}
};
