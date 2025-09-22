:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import { ErrorBoundary, FallbackProps } from 'react-error-boundary',;
import * as Sentry from '@sentry/nextjs',;
import { mutate } from 'swr',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { RefreshCcw, AlertCircle } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

:src/components/MarketplaceErrorBoundary.tsx
import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed
:src/components/MarketplaceErrorBoundary.tsx
} catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
<<<<<<< HEAD
import React from 'react';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = null;
  return (
    <ErrorBoundary 
:src/components/MarketplaceErrorBoundary.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }
  return (
<div className='flex items-center justify-center min-h-[400px] p-6'>
      <div className='max-w-md w-full space-y-4'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertDescription className='mt-2'>
            {error?.message |
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>
        <div className='flex flex-col space-y-2'>
          <Button onClick={handleRetry} className='w-full' variant='default'>
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant='outline'
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
            className='w-full'          >
            Reload Page
          </Button>
        </div>            variant="outline"
            className="w-full"
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface MarketplaceErrorFallbackProps extends FallbackProps {;
  // Additional props if needed;
}
;
function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;

import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';
:src/components/MarketplaceErrorBoundary.tsx
  return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      Sentry.captureException(retryError);
    }
  },

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-[400px] p-6">
      <div className="max-w-md w-full space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className="mt-2">
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>

        <div className="flex flex-col space-y-2">
          <Button 
            onClick={handleRetry}
            className="w-full"
            variant="default"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Retry
          </Button>

<Button

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            onClick={() => window.location.reload()}
=======
          <Button             onClick={() => window.location.reload()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            variant="outline"
            className="w-full"
            className='w-full'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            Reload Page
          </Button>
</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/MarketplaceErrorBoundary.tsx
        <div className="text-center text-sm text-muted-foreground">
=======
        </div>        <div className="text-center text-sm text-muted-foreground">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          If the problem persists, please{' '}
          <a
            href="mailto: support@example.com"
            className="text-primary hover:underline"

          >

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{' '}
          <a 
            href="mailto: support@example.com" 
            className="text-primary hover:underline"
>
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'
          >
:src/components/MarketplaceErrorBoundary.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            contact support
          </Link>
        </div>
      </div>
    </div>
:src/components/MarketplaceErrorBoundary.tsx
)
  },;
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className="mt-2">;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className="flex flex-col space-y-2">;
          <Button;
            onClick={handleRetry}
            className="w-full";
            variant="default";
          >;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Retry;
          </Button>;
          <Button;
onClick={() => window.location.reload()}
            variant="outline";
            className="w-full";
          >;
            Reload Page;
          </Button>;
        </div>;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text-primary hover:underline";
          >;
            contact support;
          </a>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
;
interface MarketplaceErrorBoundaryProps {;
  children: React.ReactNode;
}
;
export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
    // Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack }),;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundarymarketplace'),;
      scope.setContext('errorInfo', {;
        componentStack: errorInfo.componentStack || undefined}),;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/MarketplaceErrorBoundary.tsx
interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode
export function MarketplaceErrorBoundary({
  children
}: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {
      componentStack: errorInfo.componentStack
    })
    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'marketplace')
      scope.setContext('errorInfo', {
:src/components/MarketplaceErrorBoundary.tsx
componentStack: errorInfo.componentStack |undefined
      })
      scope.setLevel('error')
      Sentry.captureException(error)
    })
  }
    <ErrorBoundary   },;
  },;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (;
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className="mt-2">;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
        <div className="flex flex-col space-y-2">;
          <Button;
            onClick={handleRetry}
            className="w-full";
            variant="default";
          >;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Retry;
          </Button>;
          <Button;
            onClick={() => window.location.reload()}            variant="outline";
            variant="outline";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            className="w-full";
          >;
            Reload Page;
          </Button>;
        </div>;
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
          <a;
            href="mailto: support@example.com";
            className="text-primary hover:underline";
          >;
            contact support;          </a>;
          </a>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </div>;
      </div>;
    </div>;
  );
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD
}
<<<<<<< HEAD

interface MarketplaceErrorBoundaryProps {;
  children: React && React.ReactNode;

export function MarketplaceErrorBoundary(): any ({;
  children,;
}: MarketplaceErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React && React.ErrorInfo) => {;
    // Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {;
      componentStack: errorInfo && errorInfo.componentStack,;
    });
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('errorBoundary', 'marketplace');
      scope && scope.setContext('errorInfo', {;
        componentStack: errorInfo && errorInfo.componentStack || undefined,;
      });
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
  };

      >;

      {children}
    </ErrorBoundary>;
  );
}   return (
    <ErrorBoundary

        componentStack: errorInfo.componentStack || undefined,
      });
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };
    >
      {children}
    </ErrorBoundary>
  );
} 
origin/cursor/automate-test-improve-and-merge-code-2533
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}
:src/components/MarketplaceErrorBoundary.tsx
<<<<<<< HEAD

    </ErrorBoundary>;
  );
} ;

  );
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

interface MarketplaceErrorBoundaryProps {
  children: React.ReactNode,
}

export function MarketplaceErrorBoundary({ children }: MarketplaceErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log boundary errors to Sentry
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack });
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundarymarketplace');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack || undefined});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };
<<<<<<< HEAD
  return (;
    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >;
      {children}
</ErrorBoundary>;
  );
} ;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    </ErrorBoundary>
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    </ErrorBoundary>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/MarketplaceErrorBoundary.tsx
