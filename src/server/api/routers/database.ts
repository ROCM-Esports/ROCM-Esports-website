import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const databaseRouter = createTRPCRouter({
  createProduct: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
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
  
  updateProduct: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      metadata: z.object({}),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, name, description, metadata } = input;
      const product = await ctx.prisma.product.update({
        where: {
          id,
        },
        data: {
          name,
          description,
          metadata,
        }
      });
      return product;
    }
  ),

  deleteProduct: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const product = await ctx.prisma.product.delete({
        where: {
          id,
        },
      });
      return product;
    }
  ),
  getProduct: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const product = await ctx.prisma.product.findUnique({
        where: {
          id,
        },
      });
      return product;
    }
  ),
        

});

export default databaseRouter;