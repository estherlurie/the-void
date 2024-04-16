import prisma from '$lib/prisma';
import { getSupportInfo } from 'prettier';
import { redirect } from '@sveltejs/kit';

import { AuthError } from './types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (username.length == 0) {
			return { success: false, error: AuthError.EmptyUsername };
		}
		if (password.length == 0) {
			return { success: false, error: AuthError.EmptyPassword };
		}

		const user = await prisma.users.findFirst({ where: { name: username } });
		if (!user) {
			return { success: false, error: AuthError.DoesNotExist };
		}

		const sign_in_res = await prisma.passwords.findFirst({
			where: {
				user_id: user.id,
				password: password
			}
		});

		console.log("HERE ESTI\n")
		console.log(sign_in_res);
		if (!sign_in_res) {
			return { success: false, error: AuthError.IncorrectPassword };
		}

		return { success: true, data: username };
	}
};
