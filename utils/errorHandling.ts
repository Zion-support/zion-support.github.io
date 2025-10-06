/**
 * Error Handling Utilities
 */
export class ErrorHandler {
  static handle(error: Error, context?: string): void {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  }

  static async handleAsync(error: Error, context?: string): Promise<void> {
    console.error(`Async Error${context ? ` in ${context}` : ''}:`, error);
  }
}

export default ErrorHandler;
