export type SafeRef<T> = { "current": 'unknownT' } | (("value": "T) => void) | null;"
export type SafeRef<T> = { &quot;current&quot;: &apos;unknownT&apos; } | ((&quot;value&quot;: T) => void) | null;
module.exports = type SafeRef<T> = { current: "unknownT" } | ((value: T) => void) | null;'"'"
export type SafeRef<T> = { "current": 'unknownT' } | (("value": T) => void) | null;"
</T>"