import prisma from '$lib/prisma';
import { getSupportInfo } from 'prettier';

import { SignUpError } from './types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
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

		if (!sign_up_res) {
			return { success: false, error: SignUpError.Database, response: sign_up_res };
		}

		const password_res = await prisma.passwords.create({
			data: {
				user_id: sign_up_res.id,
				password: password
			}
		});

		if (!password_res) {
			return { success: false, error: SignUpError.Database, response: password_res };
		}

		console.log('SUCCESSFUL SIGN UP, WRITING COOKIE');
		cookies.set('session', { username: username }, { path: '/', secure: false });
		return { success: true, data: username };
	}
};
