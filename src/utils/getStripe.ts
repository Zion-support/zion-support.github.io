import { loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<unknown>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "");
  }
  return stripePromise;
};

export const isProdDomain = () => {
  return window.location.hostname === 'ziontechgroup.com' || 
         window.location.hostname === 'www.ziontechgroup.com';
};
