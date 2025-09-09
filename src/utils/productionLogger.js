export const logErrorToProduction = (message, error) => {
    // In production, you might want to send this to a logging service
    // For now, we'll just console.error in development
    if (process.env.NODE_ENV === 'development') {
        console.error(message, error);
    }
};