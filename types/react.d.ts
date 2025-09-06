/*;
  Minimal React type declarations.;
  ---------------------------------------------------------------------------;
  These definitions are **not** a replacement for `@types / react` – they only;
  exist so that isolated compilation of individual files (e.g., in CI or code;
  review bots) will not fail when full React type declarations are not;
<<<<<<< HEAD

  present.  They purposefully model just enough surface-area used throughout;
  the code-base.  If you have `@types/react` available in `node_modules`;

=======

  present.  They purposefully model just enough surface - area used throughout;
  the code - base.  If you have `@types / react` available in `node_modules`,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  TypeScript will prefer those and ignore this file, because paths declared in;
  `type_roots` are merged with normal type resolution.;
*/;

declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement < P = any, T extends string | React.JSXElementConstructor < any> = any> {
    type: T,
    props: P,
    key: React.Key | null;
<<<<<<< HEAD


=======
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  the code-base.  If you have `@types/react` available in `node_modules`,;
  TypeScript will prefer those and ignore this file, because paths declared in;
  `typeRoots` are merged with normal type resolution.;
*/;
declare module "react" {;
  // Basic ReactElement stub (JSX trees ultimately compile into this).;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {;
<<<<<<< HEAD

    type: T;
    props: P;
    key: React.Key | null;


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
    type: T,;
    props: P,;
    key: React.Key | null;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
declare namespace React {;
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements";
  // errors when `@types/react` is not present.;
  export interface IntrinsicElements {;
    [elemName: string]: any;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
