'use client';
interface DynamicOptions {;
    // TODO: Add content;
 , }
  }
}
  loading?: () => React.ReactElement;
  ssr?: boolean;
}
export function dynamic;
          <T extends ComponentType<unknown>>();
  importFunc: () => Promise;
          <{ default: T, }>,;
  _options: DynamicOptions = {
    
    }
): ComponentType<unknown> ;{;
    return (props: unknown) => (;
 , }
  }
  }
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}><LazyComponent {...props
    } /></Suspense>
  );
}
