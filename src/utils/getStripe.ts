import { loadStripe, Stripe } from '@stripe/stripe-js';
let stripePromise: Promise<Stripe | null>;
export function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env.PROD;
        ? (import.meta.env['VITE_STRIPE_PUBLISHABLE_KEY'] as string);
        : (import.meta.env['VITE_STRIPE_TEST_KEY'] as string);
    stripePromise = loadStripe(key);
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  return stripePromise;
}}