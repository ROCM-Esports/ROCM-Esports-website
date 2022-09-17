import { createProtectedRouter } from "./protected-router"

export const userRouter = createProtectedRouter().query("CheckIfAdmin", {
  resolve: async function ({ ctx }) {
    const userResponse = await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        role: true,
      },
    })
    return userResponse?.role
  },
})
