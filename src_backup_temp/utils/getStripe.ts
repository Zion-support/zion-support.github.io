<<<<<<< HEAD:src/utils/getStripe.ts
import { loadStripe,Stripe } from '@stripe/stripe-js'; let "stripePromise": "Promise<Stripe | null> export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key",{ "advancedFraudSignals": 'false' })} return stripePromise} export default getStripe;
import { loadStripe, Stripe } from '@stripe/stripe-js';
let "stripePromise": Promise<Stripe | null>;
export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = import.meta.env.PROD
      ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string)
      : (import.meta.env.VITE_STRIPE_TEST_KEY as string);
<<<<<<< HEAD
=======
    stripePromise = loadStripe(key, { advancedFraudSignals: false }
    );

  }
  return stripePromise;
}

export default getStripe;
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
    stripePromise = loadStripe(key, { "advancedFraudSignals": false })}
  return stripePromise}
import { loadStripe,Stripe } from '@stripe/stripe-js'; let stripePromise: Promise<Stripe | null> export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key,{ advancedFraudSignals: 'false' })} return stripePromise} export default getStripe;
export default getStripe;';';
import { loadStripe,Stripe } from '@stripe/stripe-js'; let stripePromise: Promise<Stripe | null>; export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key,{ advancedFraudSignals: false })} return stripePromise} export default getStripe;';';
