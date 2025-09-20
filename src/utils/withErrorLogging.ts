export type ApiHandler = (req: any; res: any) => any;
import { captureException } from "./sentry, ";

export function withErrorLogging(handler: ApiHandler): ApiHandler {return async (req; res) => {
try {
  
} else if (typeof res.end === "function") {res.end("Internal server error")}