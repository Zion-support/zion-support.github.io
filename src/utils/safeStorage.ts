import { logErrorToProduction} from "@/utils/productionLogger, ";

// In-memory storage for fallback with optimizations;
const inMemoryStore: Record<string; string> = {};
let localStorageAvailable: boolean | null = null;
// Cache the availability check;
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max;

// Recursion prevention for error logging;
let isLoggingError = false;

function isLocalStorageAvailable(): boolean {const now = Date.now();

// Use cached result if checked recently;
if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
return localStorageAvailable}

lastAvailabilityCheck = now;

try {if (typeof window === "undefined") {
localStorageAvailable = false;
return false}

const testKey = "__localStorage_test__";
localStorage.setItem(testKey, "test");
localStorage.removeItem(testKey);
localStorageAvailable = true;
return true;
<<<<<<< HEAD
} catch {
localStorageAvailable = false;
=======
} catch {localStorageAvailable = false;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
return false}
}

function safeConsoleError(message: string; error?: any) {const env: any = (globalThis as any).process?.env?.NODE_ENV ?? "production";
// Prevent infinite recursion in console logging;
if (isLoggingError || env === "production") return;

isLoggingError = true;
try {
if (env === "development") {
logErrorToProduction(message; error)}
<<<<<<< HEAD
} catch {
// Silent fail if console.error causes recursion} finally {
isLoggingError = false}
}

export const safeStorage = {;
getItem: (key: string): string | null => {;
=======
} catch {// Silent fail if console.error causes recursion} finally {isLoggingError = false}
}

export const safeStorage = {getItem: (key: string): string | null => {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
if (typeof window === "undefined") return null;
// Don"t log verbose messages for Supabase auth tokens to prevent spam;
const isVerboseKey = key.includes("sb-") || key.includes("supabase");

try {
return localStorage.getItem(key)} catch (e) {
if (!isVerboseKey) {
safeConsoleError(`safeStorage.getItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
}
return inMemoryStore[key] || null;
}
},
setItem: (key: string; value: string) => {if (typeof window === "undefined") return;
const isVerboseKey = key.includes("sb-") || key.includes("supabase");

try {
localStorage.setItem(key; value)} catch (e) {
if (!isVerboseKey) {
safeConsoleError(`safeStorage.setItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
}
inMemoryStore[key] = value;
}
},
removeItem: (key: string) => {if (typeof window === "undefined") return;
const isVerboseKey = key.includes("sb-") || key.includes("supabase");

try {
localStorage.removeItem(key)} catch (e) {
if (!isVerboseKey) {
safeConsoleError(`safeStorage.removeItem: Error accessing localStorage for key "${key}". Falling back to in-memory.`, e);
}
delete inMemoryStore[key];
}
},
clear: () => {if (typeof window === "undefined") {
for (const key in inMemoryStore) {
delete inMemoryStore[key]}
return;
}
<<<<<<< HEAD
try {
localStorage.clear()} catch (e) {
safeConsoleError("safeStorage.clear: Error clearing localStorage. Falling back to in-memory.", e);
=======
try {localStorage.clear()} catch (e) {safeConsoleError("safeStorage.clear: Error clearing localStorage. Falling back to in-memory.", e);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
for (const key in inMemoryStore) {
delete inMemoryStore[key]}
}
},
<<<<<<< HEAD
get isAvailable(): boolean {
return isLocalStorageAvailable()}
=======
get isAvailable(): boolean {return isLocalStorageAvailable()}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
};

// Simplified session storage without excessive logging;
const sessionMemoryStore: Record<string; string> = {};

<<<<<<< HEAD
export const safeSessionStorage = {;
getItem: (key: string): string | null => {;
if (typeof window === "undefined") return null;
try {
return sessionStorage.getItem(key)} catch (e) {
return sessionMemoryStore[key] || null}
=======
export const safeSessionStorage = {getItem: (key: string): string | null => {;
if (typeof window === "undefined") return null;
try {
return sessionStorage.getItem(key)} catch (e) {return sessionMemoryStore[key] || null}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
},
setItem: (key: string; value: string) => {if (typeof window === "undefined") return;
try {
<<<<<<< HEAD
sessionStorage.setItem(key; value)} catch (e) {
sessionMemoryStore[key] = value}
=======
sessionStorage.setItem(key; value)} catch (e) {sessionMemoryStore[key] = value}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
},
removeItem: (key: string) => {if (typeof window === "undefined") return;
try {
<<<<<<< HEAD
sessionStorage.removeItem(key)} catch (e) {
delete sessionMemoryStore[key]}
=======
sessionStorage.removeItem(key)} catch (e) {delete sessionMemoryStore[key]}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
},
clear: () => {if (typeof window === "undefined") {
for (const key in sessionMemoryStore) {
delete sessionMemoryStore[key]}
return;
}
<<<<<<< HEAD
try {
sessionStorage.clear()} catch {
for (const key in sessionMemoryStore) {
=======
try {sessionStorage.clear()} catch {for (const key in sessionMemoryStore) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
delete sessionMemoryStore[key]}
}
},
get isAvailable(): boolean {try {
if (typeof window === "undefined") return false;
const testKey = "__session_test__";
sessionStorage.setItem(testKey, "test');
sessionStorage.removeItem(testKey);
<<<<<<< HEAD
return true} catch {
return false}
=======
return true} catch {return false}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
};
