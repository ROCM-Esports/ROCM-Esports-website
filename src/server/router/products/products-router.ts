// trpc endpoint for stripe products

import { z } from "zod";
import { createRouter } from "../context";

const productsRouter = createRouter()
  .query("getAllProducts", {
  resolve: async ({ ctx }) => {
    const products = await ctx.stripe.products.list();
    return products.data;
  }
  }).query("getProductById", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const {id} = input;
      const product = await ctx.stripe.products.retrieve(id);
      return product;
    }
  });



export default productsRouter;