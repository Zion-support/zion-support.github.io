<<<<<<< HEAD
/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
<<<<<<< HEAD

  present.  They purposefully model just enough surface - area used throughout;
  the code - base.  If you have `@types / react` available in `node_modules`,

  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;

  present.  They purposefully model just enough surface - area used throughout;
  the code - base.  If you have `@types / react` available in `node_modules`,
  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;


  the code-base.  If you have `@types/react` available in `node_modules`,;

  These definitions are **not** a replacement for `@types/react` – they only;
  exist so that isolated compilation of individual files (e.g., in CI or code;
  review bots) will not fail when full React type declarations are not;
  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
    type: T;
    props: P;
    key: React.Key | null;
  }
  // Function Component (very trimmed-down).;
  export interface FC<P = Record<string, unknown>> {(props: P): ReactElement | null;
  }
  // Common hooks we rely on.;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
}
declare namespace React {// Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;
  the code-base.  If you have `@types/react` available in `node_modules`,;
=======
  These definitions are **not** a replacement for `@types / react` – they only;
  exist so that isolated compilation of individual files (e.g., in CI or code;
  review bots) will not fail when full React type declarations are not;

  present.  They purposefully model just enough surface - area used throughout;
  the code - base.  If you have `@types / react` available in `node_modules`,

  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;

declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement < P = any, T extends string | React.JSXElementConstructor < any> = any> {
    type: T,
    props: P,
    key: React.Key | null;
=======


=======
  the code-base.  If you have `@types/react` available in `node_modules`,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;
<<<<<<< HEAD
;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
   ;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
    type:T;
    props:P;
    key:React.Key | null;
  }
;
  // Function Component (very trimmed-down).;
   ;
  export interface FC<P = Record<string, unknown>> {;
    (props:P):ReactElement | null;
  }
;
  // Common hooks we rely on.;
  export function useMemo<T>(factory:() => T, deps:readonly unknown[]):T;
;
  export type Key = string | number;
;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
=======
/*
  Minimal React type declarations.
  ---------------------------------------------------------------------------
  These definitions are **not** a replacement for `@types/react` – they only
  exist so that isolated compilation of individual files (e.g., in CI or code
  review bots) will not fail when full React type declarations are not
  present.  They purposefully model just enough surface-area used throughout
  the code-base.  If you have `@types/react` available in `node_modules`,
  TypeScript will prefer those and ignore this file, because paths declared in
  `typeRoots` are merged with normal type resolution.
*/

declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    type: T;
    props: P;
    key: React.Key | null;
  }
<<<<<<< HEAD
;
  // Function Component (very trimmed-down).;
  export interface FC<P = Record<string, unknown>> {;
    (props: P): ReactElement | null;
  }
;
  // Common hooks we rely on.;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {;
    useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
}
=======
  }
  // Common hooks we rely on.;
  export function useMemo < T>(factory: () => T, deps: readonly unknown[]): T,
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {
    useMemo: typeof useMemo;
  } & Record < string, unknown>;
  export default React;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    type: T,;
    props: P,;
    key: React.Key | null;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types / react` is not present.;
  export interface IntrinsicElements {
    [elem_name: string]: any;
  const React:{;
    useMemo:typeof useMemo;
  } & Record<string, unknown>;
;
  export default React;
}
;
declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
   ;
  export interface IntrinsicElements {;
    [elemName:string]:any;
  }
}/* Minimal React type declarations. --------------------------------------------------------------------------- These definitions are **not** a replacement for `@types/react` – they only exist so that isolated compilation of individual files (e.g., in CI or code review bots) will not fail when full React type declarations are not present. They purposefully model just enough surface-area used throughout the code-base. If you have `@types/react` available in `node modules`;
TypeScript will prefer those and ignore this file, because paths declared in `typeRoots` are merged with normal type resolution. */ export type Key = string | number;
// Default export so `import React from 'react'` keeps working even without // the real react package being installed. export default React 
}declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements" // errors when `@types/react` is not present. export interface IntrinsicElements {
  
}
;
  // Function Component (very trimmed-down).;
  export interface FC<P = Record<string, unknown>> {;
    (props: P): ReactElement | null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  // Common hooks we rely on.;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T,;
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {;
    useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
  }
}
=======


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Function Component (very trimmed-down).
  export interface FC<P = Record<string, unknown>> {
    (props: P): ReactElement | null;
  }
  // Common hooks we rely on.
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without
  // the real react package being installed.
  const React: {
    useMemo: typeof useMemo;
  } & Record<string, unknown>;
  export default React;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
