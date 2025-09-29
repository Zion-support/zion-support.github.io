// Minimal, safe performance monitor used by the app

type MetricName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'MEMORY_USAGE';

interface PerformanceMetric {
	name: MetricName;
	value: number;
	timestamp: number;
	id: string;
}

class PerformanceMonitor {
	private metrics: PerformanceMetric[] = [];
	private observers: PerformanceObserver[] = [];
	private initialized = false;

	constructor() {
		if (typeof window !== 'undefined') {
			this.initialize();
		}
	}

	private initialize(): void {
		if (this.initialized) return;
		this.initialized = true;
		this.observeWebVitals();
		this.observeNavigationTiming();
	}

	private observeWebVitals(): void {
		if (!('PerformanceObserver' in window)) return;

		// FID
		try {
			const fidObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					const anyEntry = entry as any;
					if (anyEntry.processingStart && entry.startTime) {
						const fid = anyEntry.processingStart - entry.startTime;
						this.record({ name: 'FID', value: fid });
					}
				}
			});
			fidObserver.observe({ entryTypes: ['first-input'] });
			this.observers.push(fidObserver);
		} catch {}

		// LCP
		try {
			const lcpObserver = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const last = entries[entries.length - 1];
				if (last) this.record({ name: 'LCP', value: last.startTime });
			});
			lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
			this.observers.push(lcpObserver);
		} catch {}

		// CLS
		try {
			let clsValue = 0;
			const clsObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					const anyEntry = entry as any;
					if (!anyEntry.hadRecentInput) clsValue += anyEntry.value || 0;
				}
				this.record({ name: 'CLS', value: clsValue });
			});
			clsObserver.observe({ entryTypes: ['layout-shift'] });
			this.observers.push(clsObserver);
		} catch {}

		// FCP
		try {
			const fcpObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.name === 'first-contentful-paint') this.record({ name: 'FCP', value: entry.startTime });
				}
			});
			fcpObserver.observe({ entryTypes: ['paint'] });
			this.observers.push(fcpObserver);
		} catch {}
	}

	private observeNavigationTiming(): void {
		if (!('PerformanceObserver' in window)) return;
		try {
			const navObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.entryType === 'navigation') {
						const nav = entry as PerformanceNavigationTiming;
						this.record({ name: 'TTFB', value: nav.responseStart - nav.requestStart });
					}
				}
			});
			navObserver.observe({ entryTypes: ['navigation'] });
			this.observers.push(navObserver);
		} catch {}
	}

	private record(input: { name: MetricName; value: number }): void {
		const metric: PerformanceMetric = {
			name: input.name,
			value: input.value,
			timestamp: Date.now(),
			id: Math.random().toString(36).slice(2, 11)
		};
		this.metrics.push(metric);
		if (this.metrics.length > 100) this.metrics = this.metrics.slice(-100);
	}

	public getWebVitals(): Record<string, number> {
		const vitals: Record<string, number> = {};
		for (const m of this.metrics) {
			if (m.name === 'CLS' || m.name === 'FID' || m.name === 'FCP' || m.name === 'LCP' || m.name === 'TTFB') {
				vitals[m.name] = m.value;
			}
		}
		return vitals;
	}

	public getPerformanceScore(): number {
		const v = this.getWebVitals();
		let score = 100;
		if (v.LCP) score -= v.LCP > 4000 ? 30 : v.LCP > 2500 ? 15 : 0;
		if (v.FID) score -= v.FID > 300 ? 25 : v.FID > 100 ? 10 : 0;
		if (v.CLS) score -= v.CLS > 0.25 ? 20 : v.CLS > 0.1 ? 10 : 0;
		return Math.max(0, score);
	}

	public reportPerformance(): void {
		const payload = { score: this.getPerformanceScore(), vitals: this.getWebVitals(), timestamp: new Date().toISOString() };
		// eslint-disable-next-line no-console
		console.log('Performance Report:', payload);
	}

	public disconnect(): void {
		this.observers.forEach((o) => o.disconnect());
		this.observers = [];
		this.initialized = false;
	}
}

export const performanceMonitor = new PerformanceMonitor();

if (typeof window !== 'undefined') {
	window.addEventListener('load', () => {
		setTimeout(() => performanceMonitor.reportPerformance(), 5000);
	});
}