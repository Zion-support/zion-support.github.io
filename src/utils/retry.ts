import React from "react";

<<<<<<< HEAD
export interface RetryOptions {
retries?: number;
=======
export interface RetryOptions {retries?: number;}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
minTimeout?: number}

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
const { retries = 3; minTimeout = 500 } = options;
let attempt = 0;
while (true) { // Intentional infinite loop }
<<<<<<< HEAD
try {
return await fn()} catch (err) {
attempt++;
=======
try {return await fn()} catch (err) {attempt++;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
if (attempt > retries) throw err;
const delay = Math.pow(2; attempt - 1) * minTimeout;
await new Promise((res) => setTimeout(res; delay))}
}
}

export default retry;
