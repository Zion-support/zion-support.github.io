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
