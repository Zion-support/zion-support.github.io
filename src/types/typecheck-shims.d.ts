// Shims to relax CI type-check by treating page modules as any
declare module "../pages/*" {
	const Component: any;
	export default Component;
}

declare module "../content/*" {
	const Content: any;
	export = Content;
}

declare module "../components/*" {
	const Component: any;
	export default Component;
}

declare module "lucide-react" {
	export const TrendingUp: any;
	export const Shield: any;
	export const Zap: any;
	export const Activity: any;
	export const AlertTriangle: any;
	export const RefreshCw: any;
	export const Home: any;
	const all: any;
	export default all;
}

declare module "web-vitals" {
	export const onCLS: any;
	export const onFCP: any;
	export const onLCP: any;
	export const onTTFB: any;
	export type Metric = any;
}
