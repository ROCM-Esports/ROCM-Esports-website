import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { stripeRouter } from "./routers/stripe";
import databaseRouter from "./routers/database";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  stripe: stripeRouter,
  db: databaseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
