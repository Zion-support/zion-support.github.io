
interface PerformanceMetric {name: string; startTime: number;
}
endTime?: number;}
interface PerformanceMetric {
name: string; startTime: number;
endTime?: number;
duration?: number}

class PerformanceMonitor {private metrics: Map<string; PerformanceMetric> = new Map();private observers: PerformanceObserver[] = [];

constructor() {
this.initializeObservers()}

private initializeObservers() {// Monitor Core Web Vitals;
if ("PerformanceObserver" in window) {
// Largest Contentful Paint;
try {
const lcpObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
const lastEntry = entries[entries.length - 1];
this.logMetric("LCP", lastEntry.startTime)});
lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
this.observers.push(lcpObserver);
} catch (error) {console.warn("LCP observer failed:", error)}

// First Input Delay;
try {const fidObserver = new PerformanceObserver((list) => {;
const entries = list.getEntries();
entries.forEach(entry => {
this.logMetric("FID", entry.processingStart - entry.startTime)});
});
fidObserver.observe({ entryTypes: ["first-input"] });
this.observers.push(fidObserver);
} catch (error) {console.warn("FID observer failed:", error)}
} catch (error) {
console.warn("FID observer failed:", error)}this.startTiming(name);
try {
const result = func(...args);
this.endTiming(name);
return result} catch (error) {this.endTiming(name);
return result} catch (error) {
this.endTiming(name);throw error}
}

private logMetric(name: string, value: number): void {if (typeof window !== "undefined" && "gtag" in window) {
// Send to Google Analytics,
(window as any).gtag("event", "timing_complete", {
name: name;,
value: Math.round(value)
custom_map: {
metric_category: "performance"}
});
}
}

getMetrics(): Record<string, PerformanceMetric> {
const result: Record<string, PerformanceMetric> = {};
this.metrics.forEach((metric, name) => {
result[name] = { ...metric };
});
return result;
}

cleanup(): void {this.observers.forEach(observer => observer.disconnect());
this.observers = []}
}

export const performanceMonitor = new PerformanceMonitor();

export const usePerformanceMonitor: any = () => {
return {,
startTiming: performanceMonitor.startTiming.bind(performanceMonitor)
endTiming: performanceMonitor.endTiming.bind(performanceMonitor)
measureFunction: performanceMonitor.measureFunction.bind(performanceMonitor)
measureAsync: performanceMonitor.measureAsync.bind(performanceMonitor)
getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor)
cleanup: performanceMonitor.cleanup.bind(performanceMonitor);
};
};

export default performanceMonitor;

