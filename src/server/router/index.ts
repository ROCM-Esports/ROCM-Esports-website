// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { userRouter } from "./userRouter";
import { authRouter } from "./auth/authRouter";
import { cmsRouter } from "./cms";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("user.", userRouter)
  .merge("auth.", authRouter)
  .merge("cms.", cmsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
