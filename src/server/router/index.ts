// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { userRouter } from "./userRouter";
import { authRouter } from "./auth/authRouter";
import { cmsRouter } from "./cms";
// import shopRouter from "./shop/shop-router";
import productsRouter from "./products/products-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("user.", userRouter)
  .merge("auth.", authRouter)
  .merge("cms.", cmsRouter)
  // .merge("shop.", shopRouter)
  .merge("products.", productsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
