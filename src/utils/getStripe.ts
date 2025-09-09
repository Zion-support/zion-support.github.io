import { loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<any>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "");
  }
  return stripePromise;
};

export const isProdDomain = () => {
  return process.env.NODE_ENV === 'production' && !window.location.hostname.includes('localhost');
};
