<<<<<<< HEAD
=======
<<<<<<< HEAD:src/utils/getStripe.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { loadStripe,Stripe } from '@stripe/stripe-js'; let "stripePromise": "Promise<Stripe | null> export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key",{ "advancedFraudSignals": 'false' })} return stripePromise} export default getStripe;
import { loadStripe, Stripe } from '@stripe/stripe-js';
let "stripePromise": Promise<Stripe | null>;
export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = import.meta.env.PROD
      ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string)
      : (import.meta.env.VITE_STRIPE_TEST_KEY as string);
    stripePromise = loadStripe(key, { advancedFraudSignals: false }
    );
  }
  return stripePromise;
}
export default getStripe;
    stripePromise = loadStripe(key, { "advancedFraudSignals": false })}
  return stripePromise}
';
export default getStripe;;';;';
import { loadStripe,Stripe } from '@stripe/stripe-js'; let stripePromise: Promise<Stripe | null> export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key,{ advancedFraudSignals: 'false' })} return stripePromise} export default getStripe;
export default getStripe;';';
import { loadStripe,Stripe } from '@stripe/stripe-js'; let stripePromise: Promise<Stripe | null>; export function getStripe(): Promise<Stripe | null> { if (!stripePromise) { const key = import.meta.env.PROD ? (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string) : (import.meta.env.VITE_STRIPE_TEST_KEY as string); stripePromise = loadStripe(key,{ advancedFraudSignals: false })} return stripePromise} export default getStripe;';';
>>>>>>> main
>>>>>>> main:src_backup_temp/utils/getStripe.ts
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
