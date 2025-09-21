export function logInfo(message: string, data?: any) {
  console.log(message, data);
}

export function logErrorToProduction(message: string, error?: any) {
  console.error(message, error);
}