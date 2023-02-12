import type { NextApiResponse, NextApiRequest } from "next"
import { buffer } from "micro"
import Stripe from "stripe";
import { env } from "@/env/server.mjs";
import { api } from "@/utils/api";
const stripe = new Stripe(
  env.STRIPE_SECRET_KEY,
  {
    apiVersion: "2022-11-15",
  }
)


const webhookSecret: string = env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const payload = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;
    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, webhookSecret) as Stripe.DiscriminatedEvent;
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send(`Webhook Error: ${err.message}`);
      }
      return;
    }

    res.json({ received: true });
    const eventObject = event.data;

    switch (event.type) {
      case "product.created":
      case "product.updated":
        const product = eventObject.object as {
          id: string;
          name: string;
          description: string;
          metadata: Record<string, string>;
        };
        const mutation = api.db[event.type === "product.created" ? "createProduct" : "updateProduct"].useMutation();
        mutation.mutate({
          id: product.id,
          name: product.name,
          description: product.description,
          metadata: product.metadata,
        });
        break;
      default:
        break;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

};

export default handler;