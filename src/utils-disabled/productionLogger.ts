export const logErrorToProduction = (message: string, error?: any) => {,
  if (process.env.NODE_ENV === 'production') {,
    // In production, you would typically send this to a logging service,
    // For now, we'll just log to console,
    console.error(message, error);
  } else {,
    // In development, log to console,
    console.error(message, error);
  }
};