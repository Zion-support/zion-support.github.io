// Performance monitoring and optimization utilities

export interface PerformanceMetrics {
	loadTime: number;
	renderTime: number;
	memoryUsage: number;
	bundleSize: number;
	cacheHitRate: number;
}

export interface PerformanceConfig {
	enableMonitoring: boolean;
	enablePreloading: boolean;
	enableCaching: boolean;
	enableCompression: boolean;
	maxCacheSize: number;
}

export class PerformanceMonitor {
	private metrics: PerformanceMetrics = {
		loadTime: 0,
		renderTime: 0,
		memoryUsage: 0,
		bundleSize: 0,
		cacheHitRate: 0,
	};

	private config: PerformanceConfig = {
		enableMonitoring: true,
		enablePreloading: true,
		enableCaching: true,
		enableCompression: true,
		maxCacheSize: 50 * 1024 * 1024, // 50MB
	};

	private cache = new Map<string, { value: unknown; timestamp: number; ttl: number }>();
	private preloadQueue = new Set<string>();

	constructor(config?: Partial<PerformanceConfig>) {
		this.config = { ...this.config, ...config };
		this.initializeMonitoring();
	}

	private initializeMonitoring(): void {
		if (typeof window === "undefined" || !this.config.enableMonitoring) return;

		window.addEventListener("load", () => {
			this.metrics.loadTime = performance.now();
			this.reportMetrics();
		});

		if ((performance as any).memory) {
			setInterval(() => {
				this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize ?? 0;
			}, 5000);
		}
	}

	preloadResource(url: string, type: "script" | "style" | "image" | "font" = "script"): void {
		if (!this.config.enablePreloading || this.preloadQueue.has(url) || typeof document === "undefined") return;
		this.preloadQueue.add(url);
		const link = document.createElement("link");
		link.rel = "preload";
		link.href = url;
		link.as = type;
		if (type === "font") link.crossOrigin = "anonymous";
		document.head.appendChild(link);
	}

	setCache(key: string, value: unknown, ttl: number = 300000): void {
		if (!this.config.enableCaching) return;
		this.cache.set(key, { value, timestamp: Date.now(), ttl });
		this.cleanupCache();
	}

	getCache<T = unknown>(key: string): T | null {
		if (!this.config.enableCaching) return null;
		const item = this.cache.get(key);
		if (!item) return null;
		if (Date.now() - item.timestamp > item.ttl) {
			this.cache.delete(key);
			return null;
		}
		return item.value as T;
	}

	private cleanupCache(): void {
		const now = Date.now();
		for (const [key, item] of this.cache.entries()) {
			if (now - item.timestamp > item.ttl) this.cache.delete(key);
		}
	}

	optimizeImage(src: string, width?: number, height?: number, quality: number = 80): string {
		if (src.startsWith("data:") || src.startsWith("blob:")) return src;
		const params = new URLSearchParams();
		if (width) params.set("w", String(width));
		if (height) params.set("h", String(height));
		params.set("q", String(quality));
		params.set("f", "auto");
		return `${src}?${params.toString()}`;
	}

	analyzeBundleSize(): void {
		if (typeof document === "undefined") return;
		const scripts = Array.from(document.querySelectorAll("script[src]"));
		let totalSize = 0;
		scripts.forEach((script) => {
			const s = script as HTMLScriptElement;
			if (s.src) totalSize += s.src.length * 2; // rough estimate only
		});
		this.metrics.bundleSize = totalSize;
	}

	private reportMetrics(): void {
		if (!this.config.enableMonitoring) return;
		// eslint-disable-next-line no-console
		console.log("Performance Metrics:", {
			loadTime: `${this.metrics.loadTime.toFixed(2)}ms`,
			renderTime: `${this.metrics.renderTime.toFixed(2)}ms`,
			memoryUsage: `${(this.metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB`,
			bundleSize: `${(this.metrics.bundleSize / 1024).toFixed(2)}KB`,
			cacheSize: this.cache.size,
		});

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", "performance_metrics", {
				load_time: this.metrics.loadTime,
				render_time: this.metrics.renderTime,
				memory_usage: this.metrics.memoryUsage,
				bundle_size: this.metrics.bundleSize,
			});
		}
	}

	getMetrics(): PerformanceMetrics {
		return { ...this.metrics };
	}

	clearCache(): void {
		this.cache.clear();
	}

	updateConfig(newConfig: Partial<PerformanceConfig>): void {
		this.config = { ...this.config, ...newConfig };
	}
}

export const performanceMonitor = new PerformanceMonitor();

export const preloadCriticalResources = (): void => {
	const criticalResources = ["/fonts/inter.woff2", "/images/hero-bg.webp", "/js/critical.js"];
	criticalResources.forEach((resource) => {
		const type = resource.endsWith(".woff2") ? "font" : resource.endsWith(".webp") ? "image" : "script";
		performanceMonitor.preloadResource(resource, type);
	});
};

export const optimizeImages = (images: NodeListOf<HTMLImageElement>): void => {
	images.forEach((img) => {
		if ((img as any).dataset.optimized) return;
		const optimizedSrc = performanceMonitor.optimizeImage(img.src, img.width || undefined, img.height || undefined);
		img.src = optimizedSrc;
		(img as any).dataset.optimized = "true";
	});
};

export const enableLazyLoading = (): void => {
	const images = document.querySelectorAll("img[data-src]");
	const lazyImages = Array.from(images) as HTMLImageElement[];
	lazyImages.forEach((img) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const image = entry.target as HTMLImageElement;
					if (image.dataset.src) {
						image.src = image.dataset.src;
						image.classList.remove("lazy");
						observer.unobserve(image);
					}
				}
			});
		});
		observer.observe(img);
	});
};

export const measurePerformance = (name: string, fn: () => void): number => {
	const start = performance.now();
	fn();
	const end = performance.now();
	return end - start;
};

export const reportWebVitals = (metric: { name: string; id: string; value: number }): void => {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag("event", metric.name, {
			event_category: "Web Vitals",
			event_label: metric.id,
			value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
			non_interaction: true,
		});
	}
};
