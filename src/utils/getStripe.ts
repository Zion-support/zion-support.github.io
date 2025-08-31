import { loadStripe, Stripe } from '@stripe/stripe-js';
let stripePromise: Promise<Stripe | null>;
export function getStripe() {
  if (!stripePromise) {
<<<<<<< HEAD
    const key = import.meta.env.PROD
      ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string)
      : (import.meta.env.VITE_STRIPE_TEST_KEY as string);
    
    stripePromise = loadStripe(key, { 
      advancedFraudSignals: false 
    });
=======
    const key = import.meta.env.PROD;
        ? (import.meta.env['VITE_STRIPE_PUBLISHABLE_KEY'] as string);
        : (import.meta.env['VITE_STRIPE_TEST_KEY'] as string);
    stripePromise = loadStripe(key);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  }
  return stripePromise;
}

export default getStripe;