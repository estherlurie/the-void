import prisma from '$lib/prisma';
import { AuthError } from './types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// Validation
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

		if (!sign_in_res) {
			return { success: false, error: AuthError.IncorrectPassword };
		}

		console.log('SUCCESSFUL SIGN IN, SETTING COOKIE');
		// Successful sign in!
		cookies.set('session', { username: username }, { path: '/', secure: false });
		const session = cookies.get('session', { path: '/' });
		console.log(session);
		return { success: true, data: username };
	}
};
