type CaptureOptions = { extra?: Record<string, unknown> };

const LogRocket = {
  init: (_id?: string) => undefined,
  identify: (_userId?: string, _traits?: Record<string, unknown>) => undefined,
  captureException: (_error: unknown, _options?: CaptureOptions) => undefined,
  log: (..._args: unknown[]) => undefined,
};

export default LogRocket;

