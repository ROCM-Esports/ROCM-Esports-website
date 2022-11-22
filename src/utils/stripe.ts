import Stripe from 'stripe';
const stripe = new Stripe(<string>process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  typescript: true,
});

export default stripe;