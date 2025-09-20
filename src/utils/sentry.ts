import React from "react";

let nodeSentry: any;
<<<<<<< HEAD
try {
// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {
nodeSentry = null}
=======
try {// Optional dependency for server-side logging;
nodeSentry = require("@sentry/node")} catch {nodeSentry = null}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export function captureException(error: unknown) {
if (process.env.NODE_ENV === "development") {
if (typeof console !== "undefined") {

}
<<<<<<< HEAD
} else {
if (typeof window !== "undefined" && (window as any).Sentry?.captureException) {
(window as any).Sentry.captureException(error)} else if (nodeSentry?.captureException) {
nodeSentry.captureException(error)}
=======
} else {if (typeof window !== "undefined" && (window as any).Sentry?.captureException) {
(window as any).Sentry.captureException(error)} else if (nodeSentry?.captureException) {nodeSentry.captureException(error)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
}
