
interface ResourceError {
url: string;
type: "script" | "stylesheet" | "image" | "font" | "other";,
error: string;,
timestamp: number;
}
}
}
error: string;,
timestamp: number;}
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
this.retryAttempts.set(url, attempts + 1);
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
total: this.errors.length;,
byType: {} as Record<string, number>,
recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute;
};
recent: this.errors.filter(e => Date.now() - e.timestamp < 60000).length // Last minute;};
