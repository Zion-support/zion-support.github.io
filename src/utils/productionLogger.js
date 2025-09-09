// Production logger utility
export const logWarn = (message, ...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, ...args);
  }
};

export const logError = (message, ...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, ...args);
  }
};

export const logInfo = (message, ...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.info(message, ...args);
  }
};

export const logErrorToProduction = (message, ...args) => {
  if (process.env.NODE_ENV === 'production') {
    console.error(message, ...args);
  }
};

export const logDebug = (message, ...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug(message, ...args);
  }
};