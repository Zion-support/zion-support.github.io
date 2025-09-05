/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />

<<<<<<< HEAD
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  export default content
}

declare module '*.png' {
  const content: string,
  export default content
}

declare module '*.jpg' {
  const content: string,
  export default content
}

declare module '*.jpeg' {
  const content: string,
  export default content
}

declare module '*.gif' {
  const content: string,
  export default content
}

declare module '*.webp' {
  const content: string,
  export default content
}

declare module '*.ico' {
  const content: string,
  export default content
}

declare module '*.bmp' {
  const content: string,
  export default content
}

declare module '*.json' {
  const content: Record<string unknown>,
  export default content
}

declare module '*.md' {
  const content: string,
  export default content
}

declare module '*.txt' {
  const content: string,
  export default content
}

// Global type augmentations
declare global {
  interface Window {
    __NEXT_DATA__: Record<string unknown>,
    __NEXT_PRELOADREADY__: (() => void) | undefined,
    __NEXT_REGISTER_PAGE__: (() => void) | undefined,
    __NEXT_WEBPACK_CHUNKS__: string[],
    __NEXT_WEBPACK_RUNTIME__: Record<string unknown>
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test',
      [key: string]: string | undefined
    }
=======
declare module '*.svg' {_const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;}

declare module '*.png' {_const content: string;
  export default content;}

declare module '*.jpg' {_const content: string;
  export default content;}

declare module '*.jpeg' {_const content: string;
  export default content;}

declare module '*.gif' {_const content: string;
  export default content;}

declare module '*.webp' {_const content: string;
  export default content;}

declare module '*.ico' {_const content: string;
  export default content;}

declare module '*.bmp' {_const content: string;
  export default content;}

declare module '*.json' {_const content: Record<string, _unknown>;
  export default content;}

declare module '*.md' {_const content: string;
  export default content;}

declare module '*.txt' {_const content: string;
  export default content;}

// Global type augmentations
declare global {_interface Window {
    __NEXT_DATA__: Record<string, _unknown>;
    __NEXT_PRELOADREADY__: __(() => void) | undefined;
    __NEXT_REGISTER_PAGE__: __(() => void) | undefined;
    __NEXT_WEBPACK_CHUNKS__: string[];
    __NEXT_WEBPACK_RUNTIME__: Record<string, _unknown>;}

  namespace NodeJS {_interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      [key: string]: string | undefined;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

export {},