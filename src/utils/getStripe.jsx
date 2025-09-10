import { loadStripe } from '@stripe/stripe-js';
let stripePromise;
export function getStripe() {
    if (!stripePromise) {
        const key = import.meta.env.NODE_ENV === 'production'
            ? import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
            : import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
        stripePromise = loadStripe(key, { advancedFraudSignals: false });
    }
    return stripePromise;
}
