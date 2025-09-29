/**
 * Resource Preloader
 * Handles preloading of critical resources for improved performance
 */

interface PreloadOptions {
  priority?: "high" | "low";
  crossorigin?: "anonymous" | "use-credentials";
  as?: "script" | "style" | "image" | "font" | "fetch" | "document";
  media?: string;
  type?: string;
}

interface PreloadResource {
  href: string;
  options?: PreloadOptions;
}

class ResourcePreloader {
  private static instance: ResourcePreloader;
  private preloadedResources = new Set<string>();
  private preloadQueue: PreloadResource[] = [];
  private isProcessing = false;

  static getInstance(): ResourcePreloader {
    if (!ResourcePreloader.instance) {
      ResourcePreloader.instance = new ResourcePreloader();
    }
    return ResourcePreloader.instance;
  }

  /**
   * Preload a single resource
   */
  preloadResource(resource: PreloadResource): Promise<void> {
    return new Promise((resolve, reject) => {
      const { href, options = {} } = resource;

      if (this.preloadedResources.has(href)) {
        resolve();
        return;
      }

      const link = document.createElement("link");
      link.rel = "preload";
      link.href = href;

      // Set options
      if (options.as) link.setAttribute("as", options.as);
      if (options.crossorigin)
        link.setAttribute("crossorigin", options.crossorigin);
      if (options.media) link.setAttribute("media", options.media);
      if (options.type) link.setAttribute("type", options.type);

      // Handle load events
      link.onload = () => {
        this.preloadedResources.add(href);
        resolve();
      };

      link.onerror = () => {
        console.warn(`Failed to preload resource: ${href}`);
        reject(new Error(`Failed to preload resource: ${href}`));
      };

      // Add to document head
      document.head.appendChild(link);
    });
  }

  /**
   * Preload multiple resources
   */
  async preloadResources(resources: PreloadResource[]): Promise<void> {
    const promises = resources.map((resource) =>
      this.preloadResource(resource),
    );
    await Promise.allSettled(promises);
  }

  /**
   * Preload critical CSS
   */
  preloadCriticalCSS(cssFiles: string[]): Promise<void> {
    const resources = cssFiles.map((href) => ({
      href,
      options: {
        as: "style" as const,
        priority: "high" as const,
      },
    }));
    return this.preloadResources(resources);
  }

  /**
   * Preload critical JavaScript
   */
  preloadCriticalJS(jsFiles: string[]): Promise<void> {
    const resources = jsFiles.map((href) => ({
      href,
      options: {
        as: "script" as const,
        priority: "high" as const,
      },
    }));
    return this.preloadResources(resources);
  }

  /**
   * Preload critical images
   */
  preloadCriticalImages(imageFiles: string[]): Promise<void> {
    const resources = imageFiles.map((href) => ({
      href,
      options: {
        as: "image" as const,
        priority: "high" as const,
      },
    }));
    return this.preloadResources(resources);
  }

  /**
   * Preload fonts
   */
  preloadFonts(fontFiles: string[]): Promise<void> {
    const resources = fontFiles.map((href) => ({
      href,
      options: {
        as: "font" as const,
        crossorigin: "anonymous" as const,
        priority: "high" as const,
      },
    }));
    return this.preloadResources(resources);
  }

  /**
   * Preload API endpoints
   */
  preloadAPIEndpoints(endpoints: string[]): Promise<void> {
    const resources = endpoints.map((href) => ({
      href,
      options: {
        as: "fetch" as const,
        crossorigin: "anonymous" as const,
        priority: "low" as const,
      },
    }));
    return this.preloadResources(resources);
  }

  /**
   * Add resource to preload queue
   */
  queuePreload(resource: PreloadResource): void {
    this.preloadQueue.push(resource);
  }

  /**
   * Process preload queue
   */
  async processQueue(): Promise<void> {
    if (this.isProcessing || this.preloadQueue.length === 0) {
      return;
    }

    this.isProcessing = true;
    const resources = [...this.preloadQueue];
    this.preloadQueue = [];

    try {
      await this.preloadResources(resources);
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Preload based on viewport intersection
   */
  preloadOnIntersection(resource: PreloadResource, element: Element): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.preloadResource(resource);
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: "50px" },
    );

    observer.observe(element);
  }

  /**
   * Preload on user interaction
   */
  preloadOnInteraction(
    resource: PreloadResource,
    event: "hover" | "click" | "focus" = "hover",
  ): void {
    const preloadHandler = () => {
      this.preloadResource(resource);
    };

    // Add event listener to document
    document.addEventListener(event, preloadHandler, { once: true });
  }

  /**
   * Get preloaded resources
   */
  getPreloadedResources(): string[] {
    return Array.from(this.preloadedResources);
  }

  /**
   * Check if resource is preloaded
   */
  isPreloaded(href: string): boolean {
    return this.preloadedResources.has(href);
  }

  /**
   * Clear preloaded resources cache
   */
  clearCache(): void {
    this.preloadedResources.clear();
  }
}

// Export singleton instance
export const resourcePreloader = ResourcePreloader.getInstance();

// Export class for custom instances
export { ResourcePreloader };
export type { PreloadResource, PreloadOptions };
