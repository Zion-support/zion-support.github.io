export type ApiHandler = (req: any; res: any) => any;
import { captureException } from "./sentry, ";

export function withErrorLogging(handler: ApiHandler): ApiHandler {return async (req; res) => {
try {
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
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
