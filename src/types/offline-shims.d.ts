/**
 * Offline shims for external dependencies;
 * These provide minimal type definitions for when packages are not available;
 */

declare module 'framer-motion' {}
  import * as React from 'react';
  
  export interface MotionProps {}
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    drag?: any;
    dragConstraints?: any;
    onDragEnd?: any;
    layout?: any;
    layoutId?: any;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

  export interface MotionComponent extends React.ComponentType<MotionProps & any> {}

  export const motion: {}
    div: MotionComponent;
    span: MotionComponent;
    p: MotionComponent;
    h1: MotionComponent;
    h2: MotionComponent;
    h3: MotionComponent;
    button: MotionComponent;
    img: MotionComponent;
    section: MotionComponent;
    article: MotionComponent;
    header: MotionComponent;
    footer: MotionComponent;
    nav: MotionComponent;
    ul: MotionComponent;
    li: MotionComponent;
    a: MotionComponent;
    form: MotionComponent;
    input: MotionComponent;
    [key: string]: MotionComponent;
  };

  export const AnimatePresence: React.ComponentType<{}
    children?: React.ReactNode;
    mode?: string;
    initial?: boolean;
  }>;

  export const useAnimation: () => any;
  export const useMotionValue: (value: any) => any;
  export const useTransform: (value: any, input: any[], output: any[]) => any;
  export const useSpring: (value: any, config?: any) => any;
}

declare module 'lucide-react' {}
  import * as React from 'react';
  
  export interface LucideProps {}
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    className?: string;
    style?: React.CSSProperties;
  }

  export const Menu: React.ComponentType<LucideProps>;
  export const X: React.ComponentType<LucideProps>;
  export const ChevronDown: React.ComponentType<LucideProps>;
  export const ArrowRight: React.ComponentType<LucideProps>;
  export const Star: React.ComponentType<LucideProps>;
  export const Check: React.ComponentType<LucideProps>;
  export const Plus: React.ComponentType<LucideProps>;
  export const Minus: React.ComponentType<LucideProps>;
  export const Search: React.ComponentType<LucideProps>;
  export const Filter: React.ComponentType<LucideProps>;
  export const Settings: React.ComponentType<LucideProps>;
  export const User: React.ComponentType<LucideProps>;
  export const Mail: React.ComponentType<LucideProps>;
  export const Phone: React.ComponentType<LucideProps>;
  export const MapPin: React.ComponentType<LucideProps>;
  export const Calendar: React.ComponentType<LucideProps>;
  export const Clock: React.ComponentType<LucideProps>;
  export const Download: React.ComponentType<LucideProps>;
  export const Upload: React.ComponentType<LucideProps>;
  export const Edit: React.ComponentType<LucideProps>;
  export const Trash: React.ComponentType<LucideProps>;
  export const Eye: React.ComponentType<LucideProps>;
  export const EyeOff: React.ComponentType<LucideProps>;
  export const Lock: React.ComponentType<LucideProps>;
  export const Unlock: React.ComponentType<LucideProps>;
  export const [key: string]: React.ComponentType<LucideProps>;
}

declare module 'jspdf' {}
  export class jsPDF {}
    constructor(orientation?: string, unit?: string, format?: string | number[]);
    text(text: string, x: number, y: number): this;
    addPage(): this;
    save(filename: string): void;
    internal: {}
      pageSize: {}
        width: number;
        height: number;
      };
    };
    [key: string]: any;
  }
}

declare module 'path' {}
  const path: {}
    join: (...paths: string[]) => string;
    resolve: (...paths: string[]) => string;
    dirname: (path: string) => string;
    basename: (path: string, ext?: string) => string;
    extname: (path: string) => string;
    sep: string;
    delimiter: string;
  };
  export default path;
}

declare module 'jspdf-autotable' {}
  const autotable: {}
    (doc: any, options: any): void;
  };
  export default autotable;
}

declare module 'zod' {}
  export type ZodInfer<T> = T extends ZodType<infer U> ? U : never;
  
  export interface ZodType<T = any> {}
    parse(data: unknown): T;
    safeParse(data: unknown): { success: true; data: T } | { success: false; error: any };
    optional(): ZodOptional<this>;
    nullable(): ZodNullable<this>;
  }

  export interface ZodString extends ZodType<string> {}
    min(length: number, message?: string): this;
    max(length: number, message?: string): this;
    email(message?: string): this;
    url(message?: string): this;
  }

  export interface ZodNumber extends ZodType<number> {}
    min(value: number, message?: string): this;
    max(value: number, message?: string): this;
    int(message?: string): this;
    positive(message?: string): this;
  }

  export interface ZodBoolean extends ZodType<boolean> {}

  export interface ZodObject<T> extends ZodType<T> {}
    shape: any;
    extend<U>(schema: U): ZodObject<T & U>;
    pick<K extends keyof T>(keys: Record<K, true>): ZodObject<Pick<T, K>>;
    omit<K extends keyof T>(keys: Record<K, true>): ZodObject<Omit<T, K>>;
  }

  export interface ZodArray<T> extends ZodType<T[]> {}
    element: ZodType<T>;
    min(length: number, message?: string): this;
    max(length: number, message?: string): this;
  }

  export interface ZodOptional<T> extends ZodType<T | undefined> {}
  export interface ZodNullable<T> extends ZodType<T | null> {}

  const z: {}
    string(): ZodString;
    number(): ZodNumber;
    boolean(): ZodBoolean;
    object<T>(schema: { [K in keyof T]: ZodType<T[K]> }): ZodObject<T>;
    array<T>(schema: ZodType<T>): ZodArray<T>;
    literal<T>(value: T): ZodType<T>;
    union<T extends [ZodType, ZodType, ...ZodType[]]>(types: T): ZodType<T[number]>;
    enum<T extends string>(values: T[]): ZodType<T>;
    record<T>(schema: ZodType<T>): ZodType<Record<string, T>>;
    any(): ZodType<any>;
    unknown(): ZodType<unknown>;
    void(): ZodType<void>;
    undefined(): ZodType<undefined>;
    null(): ZodType<null>;
    [key: string]: any;
  };

  export { z };
  export default z;
}