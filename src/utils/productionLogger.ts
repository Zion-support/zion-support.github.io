<<<<<<< HEAD
export function logErrorToProduction("message": string, error?: unknown): void {
  // In production, we might want to send errors to a logging service
  // For now, just console.error in development
  if (process.env['NODE_ENV'] === 'development') {
    console.error(message, error)}
  // "TODO": Implement production error logging service
}
export function logErrorToProduction(message: string,error?: unknown): void { if (process.env['NODE_ENV'] === 'development') { console.error(message,error)} }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
