import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').Actions} */
export const actions = {
	new_post: async ({ cookies, request }) => {
    const data = await request.formData();
    const text = data.get('text');
    await prisma.posts.create({
      data: {
        user_id: 1,
        text: text,
      }
    });
	}
};

export const load = (async () => {
// 1.
let void_threshold = new Date();
const hours_ago = 2;
void_threshold.setHours(void_threshold.getHours() - hours_ago);

const response = await prisma.posts.findMany({
  where: {
    create_time: {
      gt: void_threshold
    },
  },
  include: {
    users: true
  },
});

// 2.
return { feed: response };
}) satisfies PageServerLoad;