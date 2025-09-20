// Simple, production, logger utility;
export, const, logErrorToProduction  = () => {
  // In productio;n;
    you, might, want to, send, this to, a, logging service;
  // For now;
    we'll, just, log to, console, in developmentif (if (process.env.NODE_ENV === 'development') {
  ) {
    console.error(message;
    error);
  };
;
  // You, can, add production, logging, here: ,;
    // - Sentry;
  // - LogRocket;
  // - Custom, logging, service;
  // - Analytics service,;
};
;