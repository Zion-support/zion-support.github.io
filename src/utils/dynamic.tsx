<<<<<<< HEAD
'use client'
interface DynamicOptions {
    // TODO: Add content
  }
  loading?: () => React.ReactElement
  ssr?: boolean
=======
'use client';
interface DynamicOptions {// TODO: Add content;}
}
  loading?: () => React.ReactElement;
  ssr?: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
export function dynamic;
          <T extends ComponentType<unknown>>()
  importFunc: () => Promise;
          <{ default: T }>,
  _options: DynamicOptions = {}
): ComponentType<unknown> {return (props: unknown) => (}
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}><LazyComponent {...props} /></Suspense>
  )
}