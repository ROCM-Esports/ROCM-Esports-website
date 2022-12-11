import Stripe from "stripe"
import { z } from "zod"
import { createRouter } from "../context"

const productsRouter = createRouter()
  .query("getAllProducts", {
    resolve: async ({ ctx }) => {
      const products = await ctx.stripe.products.list({})
      return products.data
    },
  })
  .query("getProductById", {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const { id } = input
      const product = await ctx.stripe.products.retrieve(id)
      return product
    },
  })
  .query("getProductsByName", {
    input: z.object({
      name: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const { name } = input
      const products = await ctx.stripe.products.search({ query: name })
      return products.data
    },
  })
  .query("getProductsWithPagination", {
    input: z.object({
      limit: z.number(),
      ending_before: z.string().optional(),
    }),
    resolve: async ({ ctx, input }) => {
      const { limit, ending_before } = input
      const products = await ctx.stripe.products.list({
        limit: 100,
        expand: ["data.prices"],
        starting_after: 'prod_MklsqlA7rCNGmN',
      }).autoPagingToArray({ limit: 20 })
      return products
    },
  })
  // a mutation that creates 100 products in Stripe with random names and prices between $1 and $100
  .mutation("createProducts", {
    input: z.object({
      count: z.number().min(1).max(100),
    }),
    resolve: async ({ ctx, input }) => {
      const { count } = input
      const products = []
      for (let i = 0; i < count; i++) {
        const product = await ctx.stripe.products.create({
          name: `product ${Math.random().toString(36).substring(2, 15)}`,
          description: "A product",
          images: ["https://picsum.photos/200"],
          active: true,
          attributes: ["size", "color"],
          metadata: {
            color: "blue",
            size: "large",
          },
        })
        const price = await ctx.stripe.prices.create({
          product: product.id,
          unit_amount: Math.floor(Math.random() * 10000),
          currency: "eur",
        })
        products.push({ product, price })
      }
      return products
    },
  })
export default productsRouter
