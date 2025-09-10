// Minimal React type stubs for isolated type-checking
// If @types/react is installed, it will take precedence

declare namespace React {
	interface Attributes {
		key?: string | number;
	}
	interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = any> {
		type: T;
		props: P;
		key: string | number | null;
	}
	type JSXElementConstructor<P> = ((props: P) => any) | (new (props: P) => any);
	interface FC<P = Record<string, unknown>> {
		(props: P): ReactElement | null;
	}
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}

declare module "react" {
	export = React;
	export as namespace React;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}
