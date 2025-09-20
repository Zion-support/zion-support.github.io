export const isProdDomain = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.location.hostname === "ziontechgroup.com" || window.location.hostname === "app.ziontechgroup.com";
};

export const getStripePublishableKey = (): string => {
  return isProdDomain() 
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
    : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST || "";
};