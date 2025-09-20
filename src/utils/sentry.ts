import React from "react";

let nodeSentry: any;
<<<<<<< HEAD
try {// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {nodeSentry = null}
try {
// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {
nodeSentry = null}

export function captureException(error: unknown) {
if (process.env.NODE_ENV === "development") {
if (typeof console !== "undefined") {

}
} else {if (typeof window !== "undefined" && (window as any).Sentry?.captureException) {
(window as any).Sentry.captureException(error)} else if (nodeSentry?.captureException) {nodeSentry.captureException(error)}
} else {
if (typeof window !== "undefined" && (window as any).Sentry?.captureException) {
(window as any).Sentry.captureException(error)} else if (nodeSentry?.captureException) {
nodeSentry.captureException(error)}
}
}
=======
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
