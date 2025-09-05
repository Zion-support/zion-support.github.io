export function logErrorToProduction(message: string,error?: unknown): void { if (process.env[&apos;NODE_ENV&apos;] === &apos;development&apos;) { } }
