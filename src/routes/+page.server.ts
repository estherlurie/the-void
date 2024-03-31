import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

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