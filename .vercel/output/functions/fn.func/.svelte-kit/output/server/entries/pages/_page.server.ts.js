import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const actions = {
  new_post: async ({ cookies, request }) => {
    const data = await request.formData();
    const text = data.get("text");
    await prisma.posts.create({
      data: {
        user_id: 1,
        text
      }
    });
  }
};
const load = async () => {
  let void_threshold = /* @__PURE__ */ new Date();
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
    }
  });
  return { feed: response };
};
export {
  actions,
  load
};
