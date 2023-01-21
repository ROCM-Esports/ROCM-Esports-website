import { z } from "zod"
import { createRouter } from "../context"

const productsRouter = createRouter()
  .query("getAllProducts", {
    input: z.object({
      limit: z.number().optional().default(10),
    }),
    async resolve({input, ctx}) {
      const { limit } = input
      const products = await ctx.stripe.products.list({
        limit: limit,
      })
      return products
    }
  })
  .query("getProductPrices", {
    input: z.object({
      productId: z.string(),
    }),
    async resolve({ input, ctx }) {
      // get the product ID from the input
      const { productId } = input

      // call the Stripe API to get the prices for this product
      const prices = await ctx.stripe.prices.list({
        product: productId,
        active: true,

      })

      // return the prices to the client
      return prices
    }
  })
  .query("getProduct", {
    input: z.object({
      productId: z.string(),
    }),
    async resolve({ input, ctx }) {
      const { productId } = input
      const product = await ctx.stripe.products.retrieve(productId)
      return product
    }
  })
  .query("getAllProductsAndPrices", {
    input: z.object({
      limit: z.number().optional().default(10),
    }),
    async resolve({ input, ctx }) {
      const { limit } = input
      const products = await ctx.stripe.products.list({
        limit: limit,
      })
      const productsWithPrices = await Promise.all(products.data.map(async (product) => {
        const prices = await ctx.stripe.prices.list({
          product: product.id,
          active: true,
        })
        return {
          ...product,
          prices: prices.data
        }
      }))
      return productsWithPrices
    }
  })

export default productsRouter
