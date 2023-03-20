import z from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const stripeRouter = createTRPCRouter({
  allProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.stripe.products.list();
    return products;
  }),
  allPrices: publicProcedure.query(async ({ ctx }) => {
    const prices = await ctx.stripe.prices.list();
    return prices;
  }),

  singlePrice: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(
    async ({ ctx, input }) => {
      const price = await ctx.stripe.prices.retrieve(input.id);
      return price;
    }
  ),

  singleProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(
      async ({ ctx, input }) => {
        const product = await ctx.stripe.products.retrieve(input.id);
        return product;
      }
  ),

  

});