import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const databaseRouter = createTRPCRouter({
  createProduct: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().optional(),
      metadata: z.object({}),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, name, description, metadata } = input;
      const product = await ctx.prisma.product.create({
        data: {
          id,
          name,
          description,
          metadata,
        }
      });
      return product;
    }),
        

});

export default databaseRouter;