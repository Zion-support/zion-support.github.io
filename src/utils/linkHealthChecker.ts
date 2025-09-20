export interface LinkHealthStatus {
  url: string;
  status: "healthy" | "unhealthy" | "error";
  statusCode?: number;
  responseTime?: number;
  error?: string;
  lastChecked: Date;
}

export class LinkHealthChecker {
  static async checkLinkHealth(url: string): Promise<LinkHealthStatus> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(url, { 
        method: "HEAD",
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });
      
      const responseTime = Date.now() - startTime;
      
      return {
        url,
        status: response.ok ? "healthy" : "unhealthy",
        statusCode: response.status,
        responseTime,
        lastChecked: new Date()
      };
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      return {
        url,
        status: "error",
        responseTime,
        error: error instanceof Error ? error.message : "Unknown error",
        lastChecked: new Date()
      };
    }
  }

  static async checkMultipleLinks(urls: string[]): Promise<LinkHealthStatus[]> {
    const results = await Promise.all(
      urls.map(url => this.checkLinkHealth(url))
    );
    
    return results;
  }
}