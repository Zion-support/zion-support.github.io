import { loadStripe, Stripe              } from '@stripe/stripe-js';

let stripePromise: Promise<any>;

export function getStripe(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  if (!stripePromise) {
    const key = import.meta.env.PROD
      ? (import.meta.env['VITE_STRIPE_PUBLISHABLE_KEY'] as string)
      : (import.meta.env['VITE_STRIPE_TEST_KEY'] as string);
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}

export default getStripe;