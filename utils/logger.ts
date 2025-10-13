// Logger utility

export function logger(message: string, level: 'info' | 'warn' | 'error' = 'info') {
  console[level](message);
}

export default logger;
