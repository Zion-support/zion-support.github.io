import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { RefreshCcw, AlertCircle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps {
  // Additional props if needed

import React from 'react';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = null;
  return (
    <ErrorBoundary 

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      resetErrorBoundary()
    } catch (retryError) {
      logErrorToProduction('Error during retry:', { data: retryError })
      Sentry.captureException(retryError)
import React from 'react';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';

function MarketplaceErrorFallback({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {
  const handleRetry = null;
  return (
    <ErrorBoundary 
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
            variant='outline'
            className='w-full'          >
            Reload Page
          </Button>
        </div>            variant='outline'
            className='w-full'
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            variant='outline'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            variant='outline
            className=w-full'          >
            Reload Page
          </Button>
        </div>            variant="outline
            className=w-full"
import {ErrorBoundary, FallbackProps} from 'react-error-boundary;
=======
            variant='outline'
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { mutate } from 'swr';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle } from 'lucide-react';

  return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {;

  const handleRetry = async () => {;
    try {;
      // Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true }),;
      resetErrorBoundary();
<<<<<<< HEAD

    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;

=======
<<<<<<< HEAD
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
    }
=======
<<<<<<< HEAD
    } catch (retryError) {
      logErrorToProduction(Error during retry:', { data: retryError })}
=======
    } catch (retryError) {;
      logErrorToProduction('Error during retry:', { data: retryError }),;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className='flex items-center justify-center min-h-[400px] p-6'>
      <div className='max-w-md w-full space-y-4'>
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>
          <AlertDescription className='mt-2'>
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>
        </Alert>
        
        <div className='flex flex-col space-y-2'>
          <Button 
            onClick={handleRetry}
            className='w-full'
            variant='default'
          >
            <RefreshCcw className='mr-2 h-4 w-4' />
            Retry
          </Button>

            variant='outline'
            className='w-full'
            className='w-full'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            Reload Page
          </Button>

        <div className='text-center text-sm text-muted-foreground'>

          If the problem persists, please{' '}
          <a
            href='mailto: support@example.com'
            className='text-primary hover:underline'

          >

        <div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a 
            href='mailto: support@example.com' 
            className='text-primary hover:underline'

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<div className='text-center text-sm text-muted-foreground'>
          If the problem persists, please{' '}
          <a
            href='mailto:support@example.com'
            className='text-primary hover:underline'
          >
origin/cursor/automate-test-improve-and-merge-code-2533
            contact support
          </a>
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
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

;
import { mutate  } from 'swr';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { RefreshCcw, AlertCircle  } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps  {// Additional props if needed;
import { ErrorBoundary, FallbackProps } from 'react - error - boundary';
import * as Sentry from '@sentry / nextjs';
import { Button  } from '@/components / ui / button';
import { Alert, AlertDescription, AlertTitle  } from '@/components / ui / alert';
import { logErrorToProduction  } from '@/utils / production_logger';
interface MarketplaceErrorFallbackProps extends FallbackProps  {// Additional props if needed;
/**;
 * MarketplaceErrorFallback - Function description;
 */;
function MarketplaceErrorFallback() {  const handle_retry = async () => {try {// Re - call SWR mutate ('*') to refresh all cached data;
      await mutate (() => true, undefined, { revalidate: true })resetErrorBoundary ()} catch (retry_error) {logErrorToProduction ('Error during retry:', { data: retry_error })Sentry.capture_exception (retry_error) }
  }
  return (/**;
 * MarketplaceErrorFallback - Function description;
 */;
function MarketplaceErrorFallback() {const handle_retry = async () => {try {function MarketplaceErrorFallback() {const handleRetry = async () => {try {// Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true })resetErrorBoundary()} catch (retryError) {logErrorToProduction('Error during retry:', { data: retryError })Sentry.captureException(retryError)import React from 'react';
import { ErrorBoundary, FallbackProps   } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';
function MarketplaceErrorFallback() {const handleRetry = null;
  return (<ErrorBoundary;
    }
  }
  return (<div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
          <AlertDescription className='mt-2'>;
            {error?.message |;
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className='flex flex-col space-y-2'>;
          <Button onClick={handleRetry} className='w-full' variant='default'>;
            <RefreshCcw className='mr-2 h-4 w-4' />;
            Retry;
          </Button>;
          <Button;
            onClick={() => window.location.reload()}
            variant='outline';
            className='w-full'          >;
            Reload Page;
          </Button>;
        </div>            variant='outline';
            className='w-full';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { logErrorToProduction  } from '@/utils/productionLogger';
interface MarketplaceErrorFallbackProps extends FallbackProps  {// Additional props if needed;function MarketplaceErrorFallback(): any ({error,resetErrorBoundary}: MarketplaceErrorFallbackProps) {  const handleRetry = async () => {try {// Re-call SWR mutate('*') to refresh all cached data;
      await mutate(() => true, undefined, { revalidate: true })resetErrorBoundary()} catch (retryError) {logErrorToProduction('Error during retry:', { data: retryError })Sentry && Sentry.captureException(retryError)}
    }return (function MarketplaceErrorFallback(): any ({ error, resetErrorBoundary }: MarketplaceErrorFallbackProps) {const handleRetry = async () => {try {// Re-call SWR mutate('*') to refresh all cached data;
      await mutate((,) => true, undefined, { revalidate: true }),resetErrorBoundary()} catch (retryError) {logErrorToProduction('Error during retry:', { data: retryError }),Sentry && Sentry.captureException(retryError)}
    <div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className='mt-2'>;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className='flex flex-col space-y-2'>;
          <Button;
            onClick={handleRetry}
            className='w-full';
            variant='default';
          >;
            <RefreshCcw className='mr-2 h-4 w-4' />;
            Retry;
          </Button>;
          <Button;
    }
  }
  return (onClick={() => window.location.reload()}
            variant='outline';
            className='w-full';
            className='w-full';
          >;
            Reload Page;
          </Button>;
        </div>;
        <div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto: support@example.com';
            className='text-primary hover:underline';
          >;
        <div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto: support@example.com';
            className='text-primary hover:underline';
<div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto:support@example.com';
            className='text-primary hover:underline';
          >;
            contact support;
          </a>;
        </div>;
      </div>;
    </div>;
      // Re - call SWR mutate ('*') to refresh all cached data;
      await mutate ((, ) => true, undefined, { revalidate: true }),resetErrorBoundary ()} catch (retry_error) {logErrorToProduction ('Error during retry:', { data: retry_error }),Sentry.capture_exception (retry_error)}
  }
  return (<div className='flex items - center justify - center min - h-[400px] p - 6'>;
      <div className='max - w-md w - full space - y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h - 4 w - 4' />;
          <AlertDescription className='mt - 2'>;
            {error?.message ||;
              'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
        <div className='flex flex - col space - y-2'>;
          <Button on_click={handle_retry} className='w - full' variant='default'>;
            <RefreshCcw className='mr - 2 h - 4 w - 4' />;
            Retry;
          </Button>;
          <Button;
            on_click={() => window.location.reload ()}
            variant='outline';
            className='w - full'          >;
            Reload Page;
          </Button>;
        </div>            variant='outline';
            className='w - full';
            on_click={() => window.location.reload ()}
<<<<<<< HEAD
            variant='outline';
            className='w - full';)interface MarketplaceErrorBoundaryProps  {children: React.ReactNode;
=======
            variant="outline";
            className="w - full";)interface MarketplaceErrorBoundaryProps  {children: React.ReactNode;
            className=w - full";)interface MarketplaceErrorBoundaryProps  {children: React.ReactNode;
>>>>>>> origin/resolved-merge-conflicts
export function MarketplaceErrorBoundary() {const handleError = (error: Error, errorInfo: React.ErrorInfo) => {// Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {componentStack: errorInfo.componentStack;
    })Sentry.withScope(scope => {scope.setTag('errorBoundary', 'marketplace')scope.setContext('errorInfo', {componentStack: errorInfo.componentStack |undefined;
      })scope.setLevel('error')Sentry.captureException(error)})}
    <ErrorBoundary;
          >;
            Reload Page;
          </Button>;
        </div>;
        <div className='text - center text - sm text - muted - foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto:support@example.com';
            className='text - primary hover:underline'          >;
        <div className='text - center text - sm text - muted - foreground'>;
          If the problem persists, please{' '}
          <a;
            href='mailto: support@example.com';
            className='text - primary hover:underline';
            contact support;
          </a>;
        </div>;
      </div>;
    </div>)interface MarketplaceErrorBoundaryProps  {children: React.ReactNode;
export /**;
 * MarketplaceErrorBoundary - Function description;
 */;
function MarketplaceErrorBoundary() {const handle_error = (error: Error, error_info: React.ErrorInfo) =>: any {// Log boundary errors to Sentry;
    logErrorToProduction ('MarketplaceErrorBoundary caught an error:', error, {component_stack: error_info.component_stack})Sentry.with_scope (scope => {scope.set_tag ('error_boundary', 'marketplace')scope.set_context ('error_info', {component_stack: error_info.component_stack || undefined})scope.set_level ('error')Sentry.capture_exception (error)})}
      >;
      {children}
    </ErrorBoundary>)}   return (<div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
          <AlertDescription className='mt-2'>;
            {error?.message ||;
              'An unexpected error occurred while loading marketplace content.'}
  )

    <ErrorBoundary 


<<<<<<< HEAD
            className='w - full';
=======
            className=w - full";
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  },;

  return (;
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className='flex items-center justify-center min-h-[400px] p-6'>;
  )<ErrorBoundary;
  },return (<div className='flex items-center justify-center min-h-[400px] p-6'>;
      <div className='max-w-md w-full space-y-4'>;
        <Alert variant='destructive'>;
          <AlertCircle className='h-4 w-4' />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="flex items-center justify-center min-h-[400px] p-6>;
  )<ErrorBoundary;
  },return (<div className=flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4>;
        <Alert variant=destructive">;
          <AlertCircle className="h-4 w-4 />;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="flex items-center justify-center min-h-[400px] p-6">;
      <div className="max-w-md w-full space-y-4">;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <AlertTitle>Something went wrong in the marketplace</AlertTitle>;
          <AlertDescription className='mt-2'>;
            {error?.message || 'An unexpected error occurred while loading marketplace content.'}
          </AlertDescription>;
        </Alert>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
        </Alert>;<div className='flex flex-col space-y-2'>;
        <div className='flex flex-col space-y-2'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Alert>;<div className="flex flex-col space-y-2>;
        <div className=flex flex-col space-y-2">;
>>>>>>> origin/resolved-merge-conflicts
          <Button;
            onClick={handleRetry}
            className='w-full';
            variant='default';
          >;
            <RefreshCcw className='mr-2 h-4 w-4' />;
            Retry;
          </Button>;
          <Button;
            onClick={() => window.location.reload()}<div className='flex flex-col space-y-2'>;
          <Button onClick={handleRetry} className='w-full' variant='default'>;
            <RefreshCcw className='mr-2 h-4 w-4' />;
<<<<<<< HEAD
=======
            onClick={() => window.location.reload()}<div className=flex flex-col space-y-2'>;
          <Button onClick={handleRetry} className='w-full variant=default'>;
            <RefreshCcw className='mr-2 h-4 w-4 />;
>>>>>>> origin/resolved-merge-conflicts
            Retry;
          </Button>;<Button;
            onClick={() => window && window.location.reload()}
            variant='outline';
            className='w-full'          >;
            Reload Page;
          </Button>;
<<<<<<< HEAD
        </div>            variant='outline';
            className='w-full';
            onClick={() => window && window.location.reload()}

            onClick={() => window.location.reload()}
            variant='outline';
            onClick={() => window && window.location.reload()}variant='outline';
=======
        </div>            variant="outline";
            className="w-full";
            onClick={() => window && window.location.reload()}

            onClick={() => window.location.reload()}
            variant=outline";
            onClick={() => window && window.location.reload()}variant="outline;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            variant='outline';

            className='w-full';
          >;
            Reload Page;
          </Button>;
        </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
        </div>;<div className='text-center text-sm text-muted-foreground'>;
        <div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>;<div className=text-center text-sm text-muted-foreground">;
        <div className="text-center text-sm text-muted-foreground>;
          If the problem persists, please{ '}
>>>>>>> origin/resolved-merge-conflicts
          <a;
            href='mailto: support@example.com';
            className='text-primary hover:underline';
          >;
            contact support;<div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
<<<<<<< HEAD
          <a;
            href='mailto:support@example && example.com';
            className='text-primary hover:underline'>        ;
        <div className='text-center text-sm text-muted-foreground'>;
          If the problem persists, please{' '}
=======
          <a;
            href='mailto:support@example && example.com';
            className='text-primary hover:underline'>        ;
        <div className="text-center text-sm text-muted-foreground">;
          If the problem persists, please{' '}
            contact support;<div className='text-center text-sm text-muted-foreground>;
          If the problem persists, please{ '}
          <a;
            href='mailto:support@example && example.com;
            className=text-primary hover:underline'>        ;
        <div className=text-center text-sm text-muted-foreground">;
          If the problem persists, please{' }
>>>>>>> origin/resolved-merge-conflicts
          <a
            href='mailto: support@example && example.com' 
            className='text-primary hover:underline'
            contact support

          <a;
            href='mailto: support@example && example.com';
            className='text-primary hover:underline';
            contact support;
            contact support;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </a>;

        </div>;
      </div>;
    </div>;
  );

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}interface MarketplaceErrorBoundaryProps  {children: React && React.ReactNode;export function MarketplaceErrorBoundary(): any ({children}: MarketplaceErrorBoundaryProps) {const handleError = (error: Error, errorInfo: React && React.ErrorInfo) => {// Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, {componentStack: errorInfo && errorInfo.componentStack})Sentry && Sentry.withScope(scope => {scope && scope.setTag('errorBoundary', 'marketplace')scope && scope.setContext('errorInfo', {componentStack: errorInfo && errorInfo.componentStack || undefined})scope && scope.setLevel('error')Sentry && Sentry.captureException(error)})}>;{children}
    </ErrorBoundary>;
  )}   return (<ErrorBoundary;
        componentStack: errorInfo.componentStack || undefined})scope.setLevel('error')Sentry.captureException(error)})}>;
      {children}
    </ErrorBoundary>;
  )}FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}</ErrorBoundary>;
  )})}interface MarketplaceErrorBoundaryProps  {children: React.ReactNode}export function MarketplaceErrorBoundary() {const handleError = (error: Error, errorInfo: React.ErrorInfo) => {// Log boundary errors to Sentry;
    logErrorToProduction('MarketplaceErrorBoundary caught an error:', error, { componentStack: errorInfo.componentStack })Sentry.withScope((scope) => {scope.setTag('errorBoundarymarketplace')scope.setContext('errorInfo', {componentStack: errorInfo.componentStack || undefined})scope.setLevel('error')Sentry.captureException(error)})}return (<ErrorBoundary;
    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      on_error={handle_error}
    >;
      {children}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    </ErrorBoundary>);
}

    </ErrorBoundary>
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
      {children}</ErrorBoundary>)}</ErrorBoundary>;
  )}
}
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}>;
      {children}

    <ErrorBoundary;
      FallbackComponent={MarketplaceErrorFallback}
      onError={handleError}
    >;
      {children}