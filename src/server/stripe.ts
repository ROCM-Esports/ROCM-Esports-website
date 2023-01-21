import Stripe from "stripe";
import { env } from "../env/server.mjs";

declare global{
    // eslint-disable-next-line no-var
    var stripe: Stripe | undefined;
}

export const stripe = global.stripe || new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  typescript: true,
  port: 3000,
});
