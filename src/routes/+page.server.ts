import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
	// Auth
	console.log('LOADING ROOT');
	const session = cookies.get('session', { path: '/' });

	// TODO AUTH
	if (!session) {
		console.log('REDIRECTING TO AUTH');
		redirect(307, '/auth');
	} else {
		console.log('REDIRECTING TO THE VOID');
		redirect(307, '/void');
	}
}) satisfies PageServerLoad;
