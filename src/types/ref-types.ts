
// A type that safely handles all possible reference types without relying on React types
export type SafeRef<T> = { current: anyanyanyanyanyanyanyanyanyT } | ((value: T)          => void) | null;
