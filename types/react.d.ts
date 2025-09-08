TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;


<<<<<<< HEAD
import 'react';'
/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;`*/;declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"


}
  the code-base.  If you have `@types/react` available in `node_modules`,TypeScript will prefer those and ignore this file, because paths declared in;`  `typeRoots` are merged with normal type resolution.;`*/;
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}

export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any>  {}
  // Function Component (very trimmed - down).;

export interface FC < P = Record < string, unknown>>  {("props": P): ReactElement | null;
  }
  // Common hooks we rely on.;

export function useMemo < T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

  } & Record < string, unknown>;

export default React;
}"type": T,"props": P,"key": React.Key | null;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}// Function Component (very trimmed-down).;

export interface FC<P = Record<string, unknown>>  {("props": P): ReactElement | null;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}// Common hooks we rely on.;

export function useMemo<T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;


=======
  export interface FC<P = Record<string, unknown>> {(props: P): ReactElement | null;
  }
  // Common hooks we rely on.;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {useMemo: typeof useMemo;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } & Record<string, unknown>;
  export default React;
}
declare namespace React {// Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;
  the code-base.  If you have `@types/react` available in `node_modules`,;

  the code-base.  If you have `@types/react` available in `node_modules`,;

  the code-base.  If you have `@types/react` available in `node_modules`,;
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

import 'react';'
/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;`*/;declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}

export interface ReactElement < P = any, T extends string | React.JSXElementConstructor < any> = any>  {"type": T,"props": P,"key": React.Key | null;the code-base.  If you have `@types/react` available in `node_modules`,TypeScript will prefer those and ignore this file, because paths declared in;`  `typeRoots` are merged with normal type resolution.;`*/;
}
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}

export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any>  {}
}// Function Component (very trimmed - down).;

  }

export function useMemo < T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

const "React": {"useMemo": typeof useMemo;
  } & Record < string, unknown>;

;
    type: T,;
    props: P,;
    key: React.Key | null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;

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
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;

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

;

    type: T,;
    props: P,;
    key: React.Key | null;

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
  // Function Component (very trimmed-down).;

export interface FC<P = Record<string, unknown>> {("props": P): ReactElement | null;
  }
}
;
  // Common hooks we rely on.;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T,;
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
  the code-base.  If you have `@types/react` available in `node_modules`,TypeScript will prefer those and ignore this file, because paths declared in;`  `typeRoots` are merged with normal type resolution.;`*/;
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}
;
declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;

  }
}
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

}

import 'react';
/* Minimal React type declarations.
 * ---------------------------------------------------------------------------
 * These definitions are **not** a replacement for `@types/react` – they only
 * exist so that isolated compilation of individual files (e.g., in CI or code
 * review bots) will not fail when full React type declarations are not present.
 * They purposefully model just enough surface-area used throughout the code-base.
 * If you have `@types/react` available in `node_modules`, TypeScript will prefer
 * those and ignore this file, because paths declared in `typeRoots` are merged
 * with normal type resolution.
 */

export type Key = string | number;

`;
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;`;
  `typeRoots` are merged with normal type resolution.;
*/;"
declare module "react" {;"
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;

  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;
  }
}

  // Common hooks we rely on.;
  export function useMemo < T>(factory: () => T, deps: readonly unknown[]): T,
  export type Key = string | number;"`;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;
  const React: {,
  useMemo: typeof useMemo;
  } & Record < string, unknown>;
  export default React;

;
    type: T,;
    props: P,;
    } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
  // Function Component (very trimmed-down).;
  export interface FC<P = Record<string, unknown>> {(props: P): ReactElement | null;

  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;

  } & Record<string, unknown>;
</string>

  // Common hooks we rely on.;
  // Default export so `import React from 'react'` keeps working even without;
  // the real react package being installed.;

  // Function Component (very trimmed-down).;
  export interface FC<P = Record<string, unknown>> {;

  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T,;

</string>"`;
// Default export so `import React from 'react'` keeps working even without
// the real react package being installed.
export default React;

<<<<<<< HEAD

export interface ReactElement < P = any, T extends string | React.JSXElementConstructor < any> = any>  {"type": T,"props": P,"key": React.Key | null;the code-base.  If you have `@types/react` available in `node_modules`,TypeScript will prefer those and ignore this file, because paths declared in;`  `typeRoots` are merged with normal type resolution.;`*/;
}
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}

export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any>  {}
}// Function Component (very trimmed - down).;

export interface FC < P = Record < string, unknown>>  {("props": P): ReactElement | null;
  }

export function useMemo < T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

const "React": {"useMemo": typeof useMemo;
  } & Record < string, unknown>;

export default React;
}"type": T,"props": P,"key": React.Key | null;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" },"
}
  // Function Component (very trimmed-down).;

export interface FC<P = Record<string, unknown>> {("props": P): ReactElement | null;
  }

export function useMemo<T>("factory": () => T, "deps": readonly unknown[]): T;

export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

const "React": {"useMemo": typeof useMemo;
  } & Record<string, unknown>;

export default React;
}
  the code-base.  If you have `@types/react` available in `node_modules`,TypeScript will prefer those and ignore this file, because paths declared in;`  `typeRoots` are merged with normal type resolution.;`*/;
declare module "react" {// Basic ReactElement stub (JSX trees ultimately compile into this).;"

}
=======
declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements"
  // errors when `@types/react` is not present.
  export interface IntrinsicElements {
    [elemName: string]: any;
  }

  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;

  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;
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

;
    type: T,;
    props: P,;
    key: React.Key | null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;

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
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
  }
  // Function Component (very trimmed - down).;
  export interface FC < P = Record < string, unknown>> {
    (props: P): ReactElement | null;

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

;

}

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
;

declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;

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

>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any>  {}
  // Function Component (very trimmed - down).;

export interface FC < P = Record < string, unknown>>  {("props": P): ReactElement | null;
  }
  // Common hooks we rely on.;

export function useMemo < T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

const "React": {"useMemo": typeof useMemo;
  } & Record < string, unknown>;

export default React;
}"type": T,"props": P,"key": React.Key | null;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}// Function Component (very trimmed-down).;

export interface FC<P = Record<string, unknown>>  {("props": P): ReactElement | null;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}// Common hooks we rely on.;

export function useMemo<T>("factory": () => T, "deps": readonly unknown[]): T,export type Key = string | number;
  // Default export so `import React from 'react'` keeps working even without;`  // the real react package being installed.;

const "React": {"useMemo": typeof useMemo;
  } & Record<string, unknown>;

export default React;
  } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })},"
}declare namespace React {// Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";"
  // errors when `@types/react` is not present.;`
}

export interface IntrinsicElements  {["elemName": string]: any;
    } catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
 
} catch (error) {console.error(""Error":", error)return res.status(500).json({ "error": "Internal server error" })}"
}
}
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;`
*/;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
