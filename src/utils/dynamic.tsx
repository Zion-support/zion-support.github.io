'use client'
interface DynamicOptions {
    <T extends ComponentType<unknown>>()
  importFunc: () => Promise;
          <{ default: T }>,
  _options: DynamicOptions = {}
): ComponentType<unknown> {return (props: unknown) => (}
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}><LazyComponent {...props} /><Suspense>
  )
}