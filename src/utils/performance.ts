import React from "react";

interface Service {
<<<<<<< HEAD
id: string;,
name: string;
}
}
}

/**;
* Performance utilities for measuring and optimizing app performance;
*/;

export const measurePerformance: any = (name: string; fn: () => void) => {
const start = performance.now();
fn();
const end = performance.now();
console.log(`${name} took ${end - start} milliseconds`);
};

export const debounce = <T extends (...args: any[]) => any>(;,
func: T; wait: number): ((...args: Parameters<T>) => void) => {let timeout: globalThis.Timeout;
return (...args: Parameters<T>) => {
clearTimeout(timeout);
timeout = setTimeout(() => func(...args), wait)};
};

export const throttle = <T extends (...args: any[]) => any>(;,
func: T; limit: number): ((...args: Parameters<T>) => void) => {let inThrottle: boolean;
return (...args: Parameters<T>) => {
if (!inThrottle) {
func(...args);
inThrottle = true;
setTimeout(() => (inThrottle = false), limit)}
};
};

export const getPerformanceMetrics: any = () => {;
const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
const paint = performance.getEntriesByType("paint");
<<<<<<< HEAD
return {
loadTime: navigation.loadEventEnd - navigation.loadEventStart; domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
=======
return {,
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
loadTime: navigation.loadEventEnd - navigation.loadEventStart; domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;,
firstPaint: paint.find(entry => entry.name === "first-paint")?.startTime || 0; firstContentfulPaint: paint.find(entry => entry.name === "first-contentful-paint")?.startTime || 0};
};

export const logPerformanceMetrics: any = () => {;
const metrics = getPerformanceMetrics();
console.log("Performance Metrics:", metrics)};
// TypeScript file;
export const placeholder = "placeholder";
=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
