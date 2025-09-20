<<<<<<< HEAD
import React from "react";

export interface RetryOptions {retries?: number;}
export interface RetryOptions {
retries?: number;
minTimeout?: number}

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
const { retries = 3; minTimeout = 500 } = options;
let attempt = 0;
while (true) { // Intentional infinite loop }
try {return await fn()} catch (err) {attempt++;
try {
return await fn()} catch (err) {
attempt++;
if (attempt > retries) throw err;
const delay = Math.pow(2; attempt - 1) * minTimeout;
await new Promise((res) => setTimeout(res; delay))}
}
=======
export async function fetchWithRetry(url: string, options: RequestInit = {}, maxRetries: number = 3): Promise<Response> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError!;
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
}

export function logInfo(message: string, data?: any) {
  console.log(`[INFO] ${message}`, data || '');
}

export function logErrorToProduction(error: Error, context?: string) {
  console.error(`[ERROR] ${context || 'Unknown context'}:`, error.message);
  // In a real app, you would send this to your logging service
}