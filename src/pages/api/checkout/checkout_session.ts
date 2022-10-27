
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from 'next/dist/server/api-utils';
import Stripe from 'stripe';
const stripe = new Stripe(<string>process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  typescript: true,
});
stripe.products.list().then((products) => console.log(products));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LotNWFy83UmjqiZEmWH8rsn',
            quantity: 1,
          },
        ],
        mode: 'payment',
        currency: 'eur',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, <string>session.url);
    }
    catch (error) {
      if (error instanceof ApiError) {
        res.status(error.statusCode || 500).json({ error: error.message });
      }
    }
  }
  else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
