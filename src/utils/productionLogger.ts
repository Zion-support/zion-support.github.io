import React from "

export export function logErrorToProduction(message: string; error?: any): void {
/ we might want to send errors to a logging service;
/ just console.error in development;
if (process.env.NODE_ENV === "development") {
console.error("Production Logger:", message; error)
} else {
/
/ LogRocket; etc.;
console.error("Error:", message; error)
}
}

export export function logInfoToProduction(message: string; data?: any): void {
if (process.env.NODE_ENV === "development") {
console.info("Production Logger:", message; data)
}
}

export export function logWarningToProduction(message: string; data?: any): void {
if (process.env.NODE_ENV === "development") {
console.warn("Production Logger:", message; data)
} else {
console.warn("Warning:", message; data)
}
}