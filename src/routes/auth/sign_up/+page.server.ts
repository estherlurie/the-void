import prisma from '$lib/prisma';
import { getSupportInfo } from 'prettier';

import { SignUpError } from './types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (username.length == 0) {
			return { success: false, error: SignUpError.EmptyUsername };
		}
		if (password.length == 0) {
			return { success: false, error: SignUpError.EmptyPassword };
		}

		const user = await prisma.users.findFirst({ where: { name: username } });
		if (user) {
			return { success: false, error: SignUpError.AlreadyExists };
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

		console.log(password_res);
		return { success: true, data: username };
	}
};
