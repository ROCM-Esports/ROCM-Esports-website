import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';
import {stripe} from '../../../server/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' && req.headers.origin) {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1MUxguFy83UmjqiZkAL0s0zn',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        customer_creation: "always"
      });
      res.redirect(303, <string>session.url);
    } catch (err) {
      if (err instanceof Stripe.errors.StripeError) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}