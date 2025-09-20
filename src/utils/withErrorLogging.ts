import { captureException } from "@sentry/browser";

<<<<<<< HEAD
return await handler(req; res)} catch (err: any) {
captureException(err?.stack ? err.stack : err);
if (res && !res.headersSent) {
res.statusCode = 500;
if (typeof res.json === "function") {
res.json({ error: "Internal server error" });
} else if (typeof res.end === "function") {res.end("Internal server error")}
} else if (typeof res.end === "function") {
res.end("Internal server error")}
}
}
};
}

=======
export function withErrorLogging<T extends (...args: any[]) => any>(
  handler: T
): T {
  return (async (...args: any[]) => {
    try {
      return await handler(...args);
    } catch (err: any) {
      captureException(err?.stack ? err.stack : err);
      if (args[1] && !args[1].headersSent) {
        args[1].statusCode = 500;
        if (typeof args[1].json === "function") {
          args[1].json({ error: "Internal server error" });
        } else if (typeof args[1].end === "function") {
          args[1].end("Internal server error");
        }
      }
      throw err;
    }
  }) as T;
}
>>>>>>> pr-22703
