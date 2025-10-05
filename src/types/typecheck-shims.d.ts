// Shims to relax CI type-check by treating page modules as React components
declare module "../pages/*" {
	const Component: React.ComponentType;
	export default Component;
}

declare module "../content/*" {
	const Content: Record<string, unknown>;
	export = Content;
}

declare module "../components/*" {
	const Component: React.ComponentType;
	export default Component;
}

declare module "lucide-react" {
	export const TrendingUp: React.ComponentType;
	export const Shield: React.ComponentType;
	export const Zap: React.ComponentType;
	export const Activity: React.ComponentType;
	export const AlertTriangle: React.ComponentType;
	export const RefreshCw: React.ComponentType;
	export const Home: React.ComponentType;
	const all: Record<string, React.ComponentType>;
	export default all;
}

declare module "web-vitals" {
	export const onCLS: (callback: (metric: unknown) => void) => void;
	export const onFCP: (callback: (metric: unknown) => void) => void;
	export const onLCP: (callback: (metric: unknown) => void) => void;
	export const onTTFB: (callback: (metric: unknown) => void) => void;
	export type Metric = Record<string, unknown>;
}
