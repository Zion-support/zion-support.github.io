export function logInfo(message: string, data?: any) {
  console.log(`[INFO] ${message}`, data);

export function logWarn(message: string, data?: any) {
  console.warn(`[WARN] ${message}`, data);

export function logErrorToProduction(message: string, error?: any) {
  console.error(`[ERROR] ${message}`, error);
