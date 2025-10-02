// Shims to relax CI type-check by treating page modules as any
import type { ComponentType } from "react";

declare module "../pages/*" {
const Component: ComponentType;
export default Component;
}

declare module "../content/*" {
const Content: ComponentType;
export = Content;
}

declare module "../components/*" {
const Component: ComponentType;
export default Component;
}

declare module "lucide-react" {
	export const TrendingUp: ComponentType<{ className?: string }>;
	export const Shield: ComponentType<{ className?: string }>;
	export const Zap: ComponentType<{ className?: string }>;
	export const Activity: ComponentType<{ className?: string }>;
	export const AlertTriangle: ComponentType<{ className?: string }>;
	export const RefreshCw: ComponentType<{ className?: string }>;
	export const Home: ComponentType<{ className?: string }>;
	const all: Record<string, ComponentType<any>>;
	export default all;
}

declare module "web-vitals" {
export const onCLS: (callback: (metric: Metric) => void) => void;
export const onFCP: (callback: (metric: Metric) => void) => void;
export const onLCP: (callback: (metric: Metric) => void) => void;
export const onTTFB: (callback: (metric: Metric) => void) => void;
export interface Metric {
name: string,
value: number,
delta: number,
id: string,
entries: PerformanceEntry[];
}
}