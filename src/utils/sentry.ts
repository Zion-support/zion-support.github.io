let nodeSentry: any = null;

try {// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {nodeSentry = null}
try {
// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {
nodeSentry = null}}
}
