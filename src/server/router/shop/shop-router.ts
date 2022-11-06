// import { createStripe } from "@utils/stripe"
// import { z } from "zod"
// import { createRouter } from "../context"

// const stripe = createStripe()
// const shopRouter = createRouter().query("getAllProducts", {
//   input: z.object({
//     limit: z.number().optional(),
//   }),
//   resolve: async (ctx) => {
//     const { limit } = ctx.input
//     const products = (await stripe.products.list({ limit })).data
//     return products
//   },
// })

// export default shopRouter
