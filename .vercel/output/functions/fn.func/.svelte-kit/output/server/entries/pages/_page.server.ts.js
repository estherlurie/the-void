import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
  load
};
