<<<<<<< HEAD
export type ApiHandler = (req: any, res: any) => any;
import { captureException } from "./sentry, ";

export function withErrorLogging(handler: ApiHandler): ApiHandler {return async (req, res) => {
try {
return await handler(req, res)} catch (err: any) {
=======

return await handler(req; res)} catch (err: any) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
captureException(err?.stack ? err.stack : err);
if (res && !res.headersSent) {
res.statusCode = 500;
if (typeof res.json === "function") {
res.json({ error: "Internal server error" });
} else if (typeof res.end === "function") {res.end("Internal server error")}
}
}
};
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
