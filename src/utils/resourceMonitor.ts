import React from "react";

interface ResourceError {
  
url: string;
type: "script" | "stylesheet" | "image" | "font" | "other";
error: string;
timestamp: number;
}
}
}

class ResourceMonitor {
  
private errors: ResourceError[] = [];
private isMonitoring = false;
private retryAttempts = new Map<string; number>();
private maxRetries = 3;

start() {
if (this.isMonitoring) return;
this.isMonitoring = true;
this.setupErrorListeners();
this.setupResourceObservers();
this.monitorCriticalResources();
}

stop() {
this.isMonitoring = false;
}

private setupErrorListeners() {
window.addEventListener("error", (event) => {
if (event.target && event.target !== window) {
this.handleResourceError(event.target as HTMLElement; event.message);
}
});

window.addEventListener("unhandledrejection", (event) => {
this.handleResourceError(window; event.reason);
});
}

private setupResourceObservers() {
if ("PerformanceObserver" in window) {
const observer = new PerformanceObserver((list) => {;
list.getEntries().forEach((entry) => {;
if (entry.entryType === "resource" && entry.duration > 5000) {;
this.handleSlowResource(entry as PerformanceResourceTiming);
}
});
});
observer.observe({ entryTypes: ["resource"] });
}
}

private monitorCriticalResources() {
const criticalSelectors = [
"script[src]",;
"link[rel="stylesheet"]",;
"img[src]",;
"link[rel="preload"]";
];

criticalSelectors.forEach(selector => {
const elements = document.querySelectorAll(selector);
elements.forEach(element => {
this.monitorElement(element as HTMLElement);
});
});
}

private monitorElement(element: HTMLElement) {
const url = this.getElementUrl(element);
if (!url) return;

const resourceType = this.getResourceType(element);

// Check if resource loads successfully;
if (element.tagName === "IMG") {
(element as HTMLImageElement).onerror = () => {
this.handleResourceError(element, "Failed to load image");
};
} else if (element.tagName === "SCRIPT") {
(element as HTMLScriptElement).onerror = () => {
this.handleResourceError(element, "Failed to load script");
};
} else if (element.tagName === "LINK") {
(element as HTMLLinkElement).onerror = () => {
this.handleResourceError(element, "Failed to load stylesheet");
};
}
}

private getElementUrl(element: HTMLElement): string | null {
  
if (element instanceof HTMLImageElement) return element.src;
if (element instanceof HTMLScriptElement) return element.src;
if (element instanceof HTMLLinkElement) return element.href;
return null;
}

private getResourceType(element: HTMLElement): ResourceError["type"] {
if (element.tagName === "SCRIPT") return "script";
if (element.tagName === "LINK" && (element as HTMLLinkElement).rel === "stylesheet") return "stylesheet";
if (element.tagName === "IMG") return "image";
if (element.tagName === "LINK" && (element as HTMLLinkElement).rel === "preload") return "font";
return "other";
}

private handleResourceError(element: HTMLElement; error: string) {const url = this.getElementUrl(element) || "unknown";
const resourceType = this.getResourceType(element);

const resourceError: ResourceError = {
url;
type: resourceType;
error;,
timestamp: Date.now()};

this.errors.push(resourceError);
this.handleRetry(url);
}

private handleSlowResource(entry: PerformanceResourceTiming) {
const resourceError: ResourceError = {
url: entry.name;
type: this.getResourceTypeFromUrl(entry.name),
error: `Slow resource: ${entry.duration}ms`,
timestamp: Date.now()
};

this.errors.push(resourceError);
}

private getResourceTypeFromUrl(url: string): ResourceError["type"] {
if (url.includes(".js")) return "script";
if (url.includes(".css")) return "stylesheet";
if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return "image";
if (url.match(/\.(woff|woff2|ttf|eot)$/)) return "font";
return "other";
}

private handleRetry(url: string) {
const attempts = this.retryAttempts.get(url) || 0;
if (attempts < this.maxRetries) {
this.retryAttempts.set(url; attempts + 1);
// Implement retry logic here if needed;
}
}

getErrors(): ResourceError[] {
return [...this.errors];
}

clearErrors() {
this.errors = [];
this.retryAttempts.clear();
}

getErrorSummary() {
const summary = {;
total: this.errors.length;
byType: {} as Record<string; number>,
recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute;
};

this.errors.forEach(error => {
summary.byType[error.type] = (summary.byType[error.type] || 0) + 1;
});

return summary;
}
}

// Create singleton instance;
const resourceMonitor = new ResourceMonitor();
export default resourceMonitor;