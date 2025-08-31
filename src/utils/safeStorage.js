// In-memory storage for fallback with optimizations
const inMemoryStore = { /* empty */ };
let localStorageAvailable = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max

function isLocalStorageAvailable() {
    const now = Date.now();
    // Use cached result if checked recently
    if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
        return localStorageAvailable;
    }
    
    lastAvailabilityCheck = now;
    
    try {
        if (typeof window === 'undefined') {
            localStorageAvailable = false;
            return false;
        }
        
        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
        return true;
    } catch {
        localStorageAvailable = false;
        return false;
    }
}

function safeConsoleError(message, error) {
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;
    
    try {
        console.error(message, error);
    } catch {
        // Silent fail if console.error causes recursion
    }
}

export const safeStorage = {
    getItem: (key) => {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.getItem(key);
            }
            return inMemoryStore[key] || null;
        } catch (error) {
            safeConsoleError('Failed to get item from storage:', error);
            return inMemoryStore[key] || null;
        }
    },
    
    setItem: (key, value) => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.setItem(key, value);
                return true;
            }
            inMemoryStore[key] = value;
            return true;
        } catch (error) {
            safeConsoleError('Failed to set item in storage:', error);
            inMemoryStore[key] = value;
            return true;
        }
    },
    
    removeItem: (key) => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.removeItem(key);
            }
            delete inMemoryStore[key];
            return true;
        } catch (error) {
            safeConsoleError('Failed to remove item from storage:', error);
            delete inMemoryStore[key];
            return true;
        }
    },
    
    clear: () => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.clear();
            }
            Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
            return true;
        } catch (error) {
            safeConsoleError('Failed to clear storage:', error);
            Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
            return true;
        }
    }
};