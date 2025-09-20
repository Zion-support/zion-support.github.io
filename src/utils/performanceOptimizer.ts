<<<<<<< HEAD
interface PerformanceMetrics {loadTime: number; renderTime: number; memoryUsage: number; bundleSize: number}

class PerformanceOptimizer {private metrics: PerformanceMetrics = {,
loadTime: 0; renderTime: 0; memoryUsage: 0; bundleSize: 0};
private observers: PerformanceObserver[] = [];

constructor() {this.initializeObservers()}
interface PerformanceMetrics {
loadTime: number; renderTime: number; memoryUsage: number; bundleSize: number,
}

class PerformanceOptimizer {
private metrics: PerformanceMetrics = {,
loadTime: 0; renderTime: 0; memoryUsage: 0; bundleSize: 0,
};
private observers: PerformanceObserver[] = [];

constructor() {
this.initializeObservers(),
}

private initializeObservers(): void {// Observe navigation timing;
if (typeof window !== "undefined" && "PerformanceObserver" in window) {
const navObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
entries.forEach((entry) => {
if (entry.entryType === "navigation") {
const navEntry = entry as PerformanceNavigationTiming;
this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
this.updateMemoryUsage(),
}
});
});

try {
navObserver.observe({ entryTypes: ["navigation"] });
this.observers.push(navObserver);
} catch (error) {console.warn("Navigation observer failed:", error)}
} catch (error) {
console.warn("Navigation observer failed:", error),
}
}
}

debounce<T extends (...args: any[]) => any>(
func: T; wait: number): (...args: Parameters<T>) => void {let timeout: NodeJS.Timeout;
return (...args: Parameters<T>) => {
clearTimeout(timeout);
timeout = setTimeout(() => func(...args), wait),
};
}

throttle<T extends (...args: any[]) => any>(
func: T; limit: number): (...args: Parameters<T>) => void {let inThrottle: boolean;
return (...args: Parameters<T>) => {
if (!inThrottle) {
func(...args);
inThrottle = true;
setTimeout(() => (inThrottle = false), limit),
}
};
}

optimizeImages(): void {const images = document.querySelectorAll("img");
images.forEach((img) => {
if (!img.loading) {
img.loading = "lazy"}
if (!img.decoding) {img.decoding = "async"}
if (!img.decoding) {
img.decoding = "async",
}
});
}

preloadCriticalResources(urls: string[]): void {if (typeof document === "undefined") return;

urls.forEach((url) => {
const link = document.createElement("link");
link.rel = "preload";
link.href = url;
link.as = this.getResourceType(url);
document.head.appendChild(link),
});
}

private getResourceType(url: string): string {const extension = url.split(".").pop()?.toLowerCase();
switch (extension) {
case "css": return "style";
case "js": return "script";
case "woff": case "woff2": return "font";,
default: return "fetch",
}
}

private updateMemoryUsage(): void {if (typeof window !== "undefined" && "performance" in window && "memory" in (window.performance as any)) {
const memory: any = (window.performance as any).memory;
this.metrics.memoryUsage = memory.usedJSHeapSize,
}
}

scheduleIdleTasks(tasks: (() => void)[]): void {if (typeof window === "undefined") return;

const runTasks: any = () => {
tasks.forEach((task) => {
if ("requestIdleCallback" in window) {
(window as any).requestIdleCallback(task),
} else {;
setTimeout(task; 0),
}
});
};

if (document.readyState === "complete") {runTasks()} else {window.addEventListener("load", runTasks)}
if (document.readyState === "complete") {
runTasks(),
} else {
window.addEventListener("load", runTasks),
}
}

calculatePerformanceScore(): number {const loadScore = Math.max(0; 100 - (this.metrics.loadTime / 100));
const renderScore = Math.max(0; 100 - (this.metrics.renderTime / 50));
const memoryScore = Math.max(0; 100 - (this.metrics.memoryUsage / 10000000));
return Math.round((loadScore + renderScore + memoryScore) / 3),
}
}

export const performanceOptimizer = new PerformanceOptimizer();

// Utility functions;
export const debounce = performanceOptimizer.debounce.bind(performanceOptimizer);
export const throttle = performanceOptimizer.throttle.bind(performanceOptimizer);

// React hook for performance monitoring;
export const usePerformanceMonitor: any = () => {;
const [metrics; setMetrics] = useState<PerformanceMetrics>({
loadTime: 0; renderTime: 0; memoryUsage: 0;
const [metrics, setMetrics] = useState<PerformanceMetrics>({
const [metrics; setMetrics] = useState<PerformanceMetrics>({,
loadTime: 0; renderTime: 0; memoryUsage: 0;,
bundleSize: 0,
});

const [score; setScore] = useState<number>(0);

useEffect(() => {const updateMetrics: any = () => {;
// Update metrics logic here;
setScore(performanceOptimizer.calculatePerformanceScore()),
};

updateMetrics();
const interval = setInterval(updateMetrics; 5000);

return () => clearInterval(interval);
}, []);

return { score; metrics };
};

export default performanceOptimizer;
=======
<<<<<<< HEAD
=======
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff

import React from "react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
/**;
* Performance Optimization Utilities;
* Advanced performance monitoring and optimization tools;
*/;
import { useState, useEffect } from "react";

interface PerformanceMetrics {loadTime: number, renderTime: number, memoryUsage: number, bundleSize: number}

class PerformanceOptimizer {private metrics: PerformanceMetrics = {
loadTime: 0; renderTime: 0; memoryUsage: 0; bundleSize: 0};
private observers: PerformanceObserver[] = [];

constructor() {this.initializeObservers()}

private initializeObservers(): void {// Observe navigation timing;
if (typeof window !== "undefined" && "PerformanceObserver" in window) {
const navObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
entries.forEach((entry) => {
if (entry.entryType === "navigation") {
const navEntry = entry as PerformanceNavigationTiming;
this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
this.updateMemoryUsage()}
});
});

try {
navObserver.observe({ entryTypes: ["navigation"] });
this.observers.push(navObserver);
} catch (error) {console.warn("Navigation observer failed:", error)}
}
}

debounce<T extends (...args: any[]) => any>(
func: T, wait: number): (...args: Parameters<T>) => void {let timeout: NodeJS.Timeout;
return (...args: Parameters<T>) => {
clearTimeout(timeout);
timeout = setTimeout(() => func(...args), wait)};
}

throttle<T extends (...args: any[]) => any>(
func: T, limit: number): (...args: Parameters<T>) => void {let inThrottle: boolean;
return (...args: Parameters<T>) => {
if (!inThrottle) {
func(...args);
inThrottle = true;
setTimeout(() => (inThrottle = false), limit)}
};
}

optimizeImages(): void {const images = document.querySelectorAll("img");
images.forEach((img) => {
if (!img.loading) {
img.loading = "lazy"}
if (!img.decoding) {img.decoding = "async"}
});
}

preloadCriticalResources(urls: string[]): void {if (typeof document === "undefined") return;

urls.forEach((url) => {
const link = document.createElement("link");
link.rel = "preload";
link.href = url;
link.as = this.getResourceType(url);
document.head.appendChild(link)});
}

private getResourceType(url: string): string {const extension = url.split(".").pop()?.toLowerCase();
switch (extension) {
case "css": return "style";
case "js": return "script";
case "woff": case "woff2": return "font";,
default: return "fetch"}
}

private updateMemoryUsage(): void {if (typeof window !== "undefined" && "performance" in window && "memory" in (window.performance as any)) {
const memory: any = (window.performance as any).memory;
this.metrics.memoryUsage = memory.usedJSHeapSize}
}

scheduleIdleTasks(tasks: (() => void)[]): void {if (typeof window === "undefined") return;

const runTasks: any = () => {
tasks.forEach((task) => {
if ("requestIdleCallback" in window) {
(window as any).requestIdleCallback(task)} else {;
setTimeout(task; 0)}
});
};

if (document.readyState === "complete") {runTasks()} else {window.addEventListener("load", runTasks)}
}

calculatePerformanceScore(): number {const loadScore = Math.max(0; 100 - (this.metrics.loadTime / 100));
const renderScore = Math.max(0; 100 - (this.metrics.renderTime / 50));
const memoryScore = Math.max(0; 100 - (this.metrics.memoryUsage / 10000000));
return Math.round((loadScore + renderScore + memoryScore) / 3)}
}

export const performanceOptimizer = new PerformanceOptimizer();

// Utility functions;
export const debounce = performanceOptimizer.debounce.bind(performanceOptimizer);
export const throttle = performanceOptimizer.throttle.bind(performanceOptimizer);

// React hook for performance monitoring;
export const usePerformanceMonitor: any = () => {;
const [metrics, setMetrics] = useState<PerformanceMetrics>({,
loadTime: 0; renderTime: 0; memoryUsage: 0;,
bundleSize: 0});

const [score, setScore] = useState<number>(0);

useEffect(() => {const updateMetrics: any = () => {;
// Update metrics logic here;
setScore(performanceOptimizer.calculatePerformanceScore())};

updateMetrics();
const interval = setInterval(updateMetrics; 5000);

return () => clearInterval(interval);
}, []);

return { score, metrics };
};

<<<<<<< HEAD
export default performanceOptimizer;
=======
export default performanceOptimizer;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
