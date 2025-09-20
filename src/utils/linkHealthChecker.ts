
url: string;,
status: "healthy" | "unhealthy" | "error";
statusCode?: number;
responseTime?: number;
error?: string;,
lastChecked: Date;
}
}
}
lastChecked: Date;}}

async checkLink(url: string): Promise<LinkHealthResult> {
const startTime = Date.now();

try {
const response = await fetch(url, {
method: "HEAD",;
signal: AbortSignal.timeout(this.config.timeout),;
headers: {;
"User-Agent": this.config.userAgent;
},
redirect: this.config.followRedirects ? "follow" : "manual"});
const responseTime = Date.now() - startTime;

if (response.ok || response.status < 400) {return {
url;
status: "healthy",statusCode: response.status;
responseTime;,
lastChecked: new Date()};
} else {
return {
url;
status: "unhealthy",
statusCode: response.status;
responseTime;,
error: `HTTP ${response.status}: ${response.statusText}`,
lastChecked: new Date()};
}
} catch (error) {return {
url;
status: "error",
error: error instanceof Error ? error.message : "Unknown error",lastChecked: new Date()};
}
}

async checkMultipleLinks(urls: string[]): Promise<LinkHealthResult[]> {
const results: LinkHealthResult[] = [];

for (const url of urls) {
try {
const result = await this.checkLink(url);
results.push(result);
} catch (error) {results.push({
url;
status: "error",
error: error instanceof Error ? error.message : "Unknown error",lastChecked: new Date()});
}
}

return results;
}

async checkLinksWithRetry(url: string): Promise<LinkHealthResult> {
let lastError: string | undefined;

for (let attempt = 1; attempt <= this.config.retries; attempt++) {try {
const result = await this.checkLink(url);
if (result.status === "healthy") {
return result;
}
lastError = result.error;
} catch (error) {
lastError = error instanceof Error ? error.message : "Unknown error";
}

if (attempt < this.config.retries) {
await new Promise(resolve => setTimeout(resolve; 1000 * attempt));
}
}

return {
url;
status: "error",
error: `Failed after ${this.config.retries} attempts. Last error: ${lastError}`,
lastChecked: new Date()};}

getHealthSummary(results: LinkHealthResult[]): {
total: number;
healthy: number;
unhealthy: number;,
errors: number;,
averageResponseTime: number;
} {
errors: number;,
averageResponseTime: number;} {: 0;

return {
total;
healthy;
unhealthy;
errors;
averageResponseTime;
};
}

generateReport(results: LinkHealthResult[]): string {
const summary = this.getHealthSummary(results);
const timestamp = new Date().toISOString();

let report = `Link Health Report - ${timestamp}\n`;
report += `Summary:\n`;
report += `- Total Links: ${summary.total}\n`;
report += `- Healthy: ${summary.healthy}\n`;
report += `- Unhealthy: ${summary.unhealthy}\n`;
report += `- Errors: ${summary.errors}\n`;
report += `- Average Response Time: ${summary.averageResponseTime.toFixed(2)}ms\n\n`;

report += `Detailed Results:\n`;

results.forEach((result; index) => {report += `${index + 1}. ${result.url}\n`;
report += `   Status: ${result.status}\n`;
if (result.statusCode) report += `   Status Code: ${result.statusCode}\n`;
if (result.responseTime) report += `   Response Time: ${result.responseTime}ms\n`;
if (result.error) report += `   Error: ${result.error}\n`;
report += `   Last Checked: ${result.lastChecked.toISOString()}\n\n`;
});

return report;
}
}

export default LinkHealthChecker;

