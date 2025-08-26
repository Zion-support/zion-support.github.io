export function withErrorLogging<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  context: string = 'Unknown'
) {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error(`Error in ${context}:`, error);
      throw error;
    }
  };
}