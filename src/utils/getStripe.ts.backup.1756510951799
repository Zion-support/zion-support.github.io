import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export function getStripe() {
  if (!stripePromise) {
    const key =
      import.meta.env.PROD
        ? (import.meta.env['VITE_STRIPE_PUBLISHABLE_KEY'] as string)
        : (import.meta.env['VITE_STRIPE_TEST_KEY'] as string);
    stripePromise = loadStripe(key, { advancedFraudSignals: false });
  }
  return stripePromise;
}
