export interface LinkHealthResult {
  url: string;
  status: "healthy" | "unhealthy" | "error";
  statusCode?: number;
  responseTime?: number;
  error?: string;
  lastChecked: Date;
}

export class LinkHealthChecker {
  private config = {
    timeout: 10000,
    retries: 3,
    userAgent: "ZionTechGroup-LinkChecker/1.0",
    followRedirects: true
  };

  async checkLink(url: string): Promise<LinkHealthResult> {
    const startTime = Date.now();

    try {
      const response = await fetch(url, {
        method: "HEAD",
        signal: AbortSignal.timeout(this.config.timeout),
        headers: {
          "User-Agent": this.config.userAgent
        },
        redirect: this.config.followRedirects ? "follow" : "manual"
      });
      const responseTime = Date.now() - startTime;

      if (response.ok || response.status < 400) {
        return {
          url,
          status: "healthy",
          statusCode: response.status,
          responseTime,
          lastChecked: new Date()
        };
      } else {
        return {
          url,
          status: "unhealthy",
          statusCode: response.status,
          responseTime,
          error: `HTTP ${response.status}: ${response.statusText}`,
          lastChecked: new Date()
        };
      }
    } catch (error) {
      return {
        url,
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
        lastChecked: new Date()
      };
    }
  }

  async checkMultipleLinks(urls: string[]): Promise<LinkHealthResult[]> {
    const results: LinkHealthResult[] = [];

    for (const url of urls) {
      try {
        const result = await this.checkLink(url);
        results.push(result);
      } catch (error) {
        results.push({
          url,
          status: "error",
          error: error instanceof Error ? error.message : "Unknown error",
          lastChecked: new Date()
        });
      }
    }
    return results;
  }

  async checkLinksWithRetry(url: string): Promise<LinkHealthResult> {
    let lastError: string | undefined;

    for (let attempt = 1; attempt <= this.config.retries; attempt++) {
      try {
        const result = await this.checkLink(url);
        if (result.status === "healthy") {
          return result;
        }
        lastError = result.error;
      } catch (error) {
        lastError = error instanceof Error ? error.message : "Unknown error";
      }
      
      if (attempt < this.config.retries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }

    return {
      url,
      status: "error",
      error: lastError || "All retry attempts failed",
      lastChecked: new Date()
    };
  }

  getHealthSummary(results: LinkHealthResult[]): {
    total: number;
    healthy: number;
    unhealthy: number;
    errors: number;
    averageResponseTime: number;
  } {
    const summary = {
      total: results.length,
      healthy: 0,
      unhealthy: 0,
      errors: 0,
      totalResponseTime: 0,
      responseCount: 0
    };

    results.forEach(result => {
      if (result.status === "healthy") summary.healthy++;
      else if (result.status === "unhealthy") summary.unhealthy++;
      else summary.errors++;

      if (result.responseTime) {
        summary.totalResponseTime += result.responseTime;
        summary.responseCount++;
      }
    });

    return {
      total: summary.total,
      healthy: summary.healthy,
      unhealthy: summary.unhealthy,
      errors: summary.errors,
      averageResponseTime: summary.responseCount > 0 
        ? Math.round(summary.totalResponseTime / summary.responseCount) 
        : 0
    };
  }

  generateReport(results: LinkHealthResult[]): string {
    const summary = this.getHealthSummary(results);
    let report = `Link Health Report\n`;
    report += `================\n\n`;
    report += `Total URLs checked: ${summary.total}\n`;
    report += `Healthy: ${summary.healthy}\n`;
    report += `Unhealthy: ${summary.unhealthy}\n`;
    report += `Errors: ${summary.errors}\n`;
    report += `Average response time: ${summary.averageResponseTime}ms\n\n`;

    if (results.length > 0) {
      report += `Detailed Results:\n`;
      report += `----------------\n`;
      results.forEach((result, index) => {
        report += `${index + 1}. ${result.url}\n`;
        report += `   Status: ${result.status}\n`;
        if (result.statusCode) report += `   HTTP Status: ${result.statusCode}\n`;
        if (result.responseTime) report += `   Response Time: ${result.responseTime}ms\n`;
        if (result.error) report += `   Error: ${result.error}\n`;
        report += `   Last Checked: ${result.lastChecked.toISOString()}\n\n`;
      });
    }

    return report;
  }

  static async checkMultipleLinks(urls: string[]): Promise<LinkHealthResult[]> {
    const checker = new LinkHealthChecker();
    return checker.checkMultipleLinks(urls);
  }
}