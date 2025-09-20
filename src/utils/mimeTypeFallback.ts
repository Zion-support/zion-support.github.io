
export class MimeTypeFallback {
  private supportedTypes: Set<string>;

  constructor() {
    this.supportedTypes = new Set([
      "text/html",
      "text/css",
      "text/javascript",
      "application/javascript",
      "application/json",
      "text/xml",
      "application/xml",
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/svg+xml",
      "image/webp",
      "font/woff",
      "font/woff2",
      "application/font-woff",
      "application/font-woff2"
    ]);
  }

  /**
   * Check if MIME type is supported
   */
  isSupported(type: string): boolean {
    return this.supportedTypes.has(type);
  }

  /**
   * Get fallback MIME type for unsupported types
   */
  getFallbackType(type: string): string {
    const typeMap: Record<string, string> = {
      "application/x-javascript": "text/javascript",
      "text/js": "text/javascript",
      "application/xml": "text/xml",
      "text/xml": "text/xml",
      "application/x-shockwave-flash": "application/x-shockwave-flash"
    };

    return typeMap[type] || "application/octet-stream";
  }

  /**
   * Handle resource loading with fallback
   */
  async loadResource(url: string, type: string): Promise<any> {
    try {
      const response = await fetch(url);
      const contentType = response.headers.get("content-type") || type;

      if (!this.isSupported(contentType)) {
        const fallbackType = this.getFallbackType(contentType);
        console.warn(`Unsupported MIME type ${contentType}, using fallback: ${fallbackType}`);
      }

      return response;
    } catch (error) {
      console.error(`Failed to load resource ${url}:`, error);
      throw error;
    }
  }

  /**
   * Create resource element with proper type handling
   */
  createResourceElement(url: string, type: "script" | "stylesheet"): HTMLElement {
    if (type === "script") {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.type = "text/javascript";
      return script;
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.type = "text/css";
      return link;
    }
  }

  /**
   * Inject resource with error handling
   */
  injectResource(url: string, type: "script" | "stylesheet"): Promise<void> {
    return new Promise((resolve, reject) => {
      const element = this.createResourceElement(url, type);

      element.onload = () => resolve();
      element.onerror = () => reject(new Error(`Failed to load ${type}: ${url}`));

      document.head.appendChild(element);
    });
  }
}

// Create singleton instance
const mimeTypeFallback = new MimeTypeFallback();
export default mimeTypeFallback;

