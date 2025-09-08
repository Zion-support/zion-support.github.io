import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react'
import { logErrorToProduction } from '@/utils/productionLogger';
import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger';
interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
origin/cursor/automate-test-improve-and-merge-code-2533
}

  },

<<<<<<< HEAD



            <p className='text-gray-600>;
              {isAuthConfigError;
                ? 'This page cannot load due to missing authentication configuration';
                : An unexpected error occurred while loading this page'}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (

        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



  return (

import React from 'react';
import Link from 'next / link';
import { ErrorBoundary, FallbackProps } from 'react - error - boundary';
import { AlertTriangle, Home, RefreshCw, Settings } from 'lucide-react';
import { logErrorToProduction } from '@/utils/ production_logger';
import {
  log_info,
  logErrorToProduction as prodLogError,
} from '@/utils/ production_logger';
interface PageErrorFallbackProps extends FallbackProps {
  page_name?: string;
/**
 * PageErrorFallback - Function description
 */
function PageErrorFallback() {
  const isAuthConfigError =;

;
import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps   } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw, Settings  } from 'lucide-react';
import { logErrorToProduction  } from '@/utils/productionLogger';
import { logInfo, logErrorToProduction as prodLogError  } from '@/utils/productionLogger';
interface PageErrorFallbackProps extends FallbackProps  {pageName?: string;
},return (<div className='min-h-screen bg-zion-blue flex items-center justify-center p-4'>;
    <div className='min-h-screen bg-zion-blue flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
        {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
            </h1>;
            <p className='text-gray-600'>;
              {isAuthConfigError;
                ? 'This page cannot load due to missing authentication configuration';
                : 'An unexpected error occurred while loading this page'}import { logInfo;
<<<<<<< HEAD
=======
                : An unexpected error occurred while loading this page'}import { logInfo;
>>>>>>> origin/resolved-merge-conflicts
  logErrorToProduction as prodLogError;
 } from '@/utils/productionLogger';
interface PageErrorFallbackProps extends FallbackProps  {pageName?: string;
function PageErrorFallback() {error?.message?.includes('environment')const handleRefresh = () => {if (resetErrorBoundary) {resetErrorBoundary()} else {window.location.reload()}
                : 'An unexpected error occurred while loading this page'}
import {
  logInfo
  logErrorToProduction as prodLogError
} from '@/utils/productionLogger'
interface PageErrorFallbackProps extends FallbackProps {
  pageName?: string
function PageErrorFallback({
  error
  resetErrorBoundary
  pageName
}: PageErrorFallbackProps) {
    error?.message?.includes('environment')
  const handleRefresh = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary()
    } else {
      window.location.reload()
    }
  }
import { ErrorBoundary, FallbackProps  } from 'react-error-boundary';
import {logErrorToProduction} from '@/utils/productionLogger',import { logInfo, logErrorToProduction as prodLogError } from '@/utils/productionLogger',interface PageErrorFallbackProps extends FallbackProps  {pageName?: string;
}function PageErrorFallback() {const isAuthConfigError = error?.message?.includes('Auth0') ||;
                           error?.message?.includes('AUTH0') ||;
                           error?.message?.includes('authentication') ||;
                           error?.message?.includes('environment'),const handleRefresh = () => {if (resetErrorBoundary) {resetErrorBoundary()} else {window.location.reload()}
  },return (<div className='min-h-screen bg-zion-blue flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
  return (

        {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
          {error?.message && (
            <details className='bg-gray-50 rounded-lg p-4 mb-6'>
              <summary className='cursor-pointer text-gray-700 font-medium'>
                Technical Details
              </summary>

=======
  return (
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {pageName ? `${pageName} Unavailable` : 'Page Unavailable'}
>>>>>>> origin/chore/fix-lint-and-merge

            <p className='text-gray-600'>;
              {isAuthConfigError;'
                ? 'This page cannot load due to missing authentication configuration';'
                : 'An unexpected error occurred while loading this page'}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {isAuthConfigError && (
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6'>
              <div className='flex'>
                <Settings className='h-5 w-5 text-yellow-600 mt-0.5 mr-3' />
                <div>
                  <h3 className='font-semibold text-yellow-800 mb-1'>Configuration Required</h3>
                  <p className='text-yellow-700 text-sm'>
                    This application requires Auth0 authentication to be properly configured. 
                    Please contact your system administrator.
                  </p>
                </div>
              </div>
            </div>
          )}

import { logErrorToProduction } from '@/utils / production_logger';
import {}
  log_info,
  logErrorToProduction as prodLogError,';
} from '@/utils / production_logger';
interface PageErrorFallbackProps extends FallbackProps {}
  page_name?: string;
/**
 * PageErrorFallback - Function description;
 */
function PageErrorFallback() {}
  const isAuthConfigError =;'
    error?.message?.includes ('Auth0') ||;'
    error?.message?.includes ('AUTH0') ||;'
    error?.message?.includes ('authentication') ||;'
    error?.message?.includes ('environment');
  const handle_refresh = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      resetErrorBoundary ();
    } else {}
      window.location.reload ();
    }
  }
  return ('
    <div className='min - h-screen bg - zion - blue flex items - center justify - center p - 4'>;'
      <div className='max - w-2xl w - full'>;
        {/* Main Error Card */}'
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;'
          <div className='text - center mb - 6'>;'
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;'
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;
            </div>;'
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;'`
              {page_name ? `${page_name} Unavailable` : 'Page Unavailable'}
            </h1>;'
            <p className='text - gray - 600'>;
              {isAuthConfigError;'
                ? 'This page cannot load due to missing authentication configuration';'
                : 'An unexpected error occurred while loading this page'}
            </p>;
          </div>;
          {isAuthConfigError && ('
            <div className='bg - yellow - 50 border border - yellow - 200 rounded - lg p - 4 mb - 6'>;'
              <div className='flex'>;'
                <Settings className='h - 5 w - 5 text - yellow - 600 mt - 0.5 mr - 3' />;
                <div>;'
                  <h3 className='font - semibold text - yellow - 800 mb - 1'>;
                    Configuration Required;
                  </h3>;'
                  <p className='text - yellow - 700 text - sm'>;
                    This application requires Auth0 authentication to be;
                    properly configured. Please contact your system;
                    administrator.;
                  </p>;
                </div>;
              </div>;
            </div>)}

          {error?.message && (

            </p>;
          </div>;

          {isAuthConfigError && (;'
            <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6'>;'
              <div className='flex'>;'
                <Settings className='h-5 w-5 text-yellow-600 mt-0 && 0.5 mr-3' />;
                <div>;'
                  <h3 className='font-semibold text-yellow-800 mb-1'>;
                    Configuration Required;
                  </h3>;'
                  <p className='text-yellow-700 text-sm'>;
                    This application requires Auth0 authentication to be;
                    properly configured. Please contact your system;
                    administrator.;
                  </p>;
                </div>;
              </div>;
            </div>;
          )}

          {error?.message && (;'
            <details className='bg-gray-50 rounded-lg p-4 mb-6'>;'
              <summary className='cursor-pointer text-gray-700 font-medium'>;
                Technical Details;
              </summary>;'
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>;
                {error && error.message}
              </pre>;
            </details>;

          )}
          {/* Action Buttons */}'
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            <button;
              onClick={handleRefresh}

              <summary className='cursor-pointer text-gray-700 font-medium'>
                Technical Details;
              </summary>

<<<<<<< HEAD


=======
<<<<<<< HEAD
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <pre className=mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">
>>>>>>> origin/resolved-merge-conflicts
            <button;
              onClick={handleRefresh}<details className='bg-gray-50 rounded-lg p-4 mb-6'>;
              <summary className='cursor-pointer text-gray-700 font-medium'>;
                Technical Details;
              </summary>;
<<<<<<< HEAD
              <pre className='mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto'>;
=======
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto>;
=======
              <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-all overflow-auto">
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {error.message}
              </pre>;
            </details>;
          )}

          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            <button;
              onClick={handleRefresh}'
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'
            >'
              <RefreshCw className='w-4 h-4 mr-2' />
              Try Again;
            </button>
<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            
            <Link 
<<<<<<< HEAD
              href='/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'
=======
              href="/"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"
>>>>>>> origin/resolved-merge-conflicts



            >
              <Home className='w-4 h-4 mr-2' />
              Go Home
            </Link>
          </div>
<<<<<<< HEAD
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
=======
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors";
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors;
>>>>>>> origin/resolved-merge-conflicts
            >;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;
            <Link;
              href='/';
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
            >;
<<<<<<< HEAD
=======
              <Home className="w-4 h-4 mr-2 />;
              Go Home;
            </Link>;
          </div>;

              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors             aria-label=Button">;
              <RefreshCw className=w-4 h-4 mr-2' />;
              Try Again;
            </button>;<Link;
              href='/;
              className=flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;
              <Home className='w-4 h-4 mr-2 />;
              Go Home;
            </Link>;
          </div>;{/* Navigation Options */}
          <div className=border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3>;
              You can also visit:;
            </h3>;
            <div className=grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;
              <Link;
                href='/marketplace;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Link 
              href="/

              className=flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors"

            >

              <Home className="w-4 h-4 mr-2 />
              Go Home;
            </Link>

              <RefreshCw className=w-4 h-4 mr-2' />;
              Try Again;
            </button>;

            <Link'
              href=/'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors>;
>>>>>>> origin/resolved-merge-conflicts
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;

              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'             aria-label='Button'>;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;<Link;
              href='/';
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;{/* Navigation Options */}
          <div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>;
              You can also visit:;
            </h3>;
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;
              <Link;
                href='/marketplace';

            <Link 
              href='/'

              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'

            >

              <Home className='w-4 h-4 mr-2' />
              Go Home;
            </Link>

              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;

            <Link'
              href='/''
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors'>;'
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;

                className='text-blue-600 hover:underline'>;
                Marketplace;
              </Link>;'
              <Link href='/talent' className='text-blue-600 hover:underline'>;
                Talent;
              </Link>;'
              <Link href='/services' className='text-blue-600 hover:underline'>;
                Services;
              </Link>;'
              <Link href='/about' className='text-blue-600 hover:underline'>;
              </pre>;
            </details>)}
          {/* Action Buttons */}'
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            <button;
              on_click={handle_refresh}'
              className='flex - 1 bg - blue - 600 hover:bg - blue - 700 text - white flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors'            >;'
              <RefreshCw className='w - 4 h - 4 mr - 2' />;
              Try Again;
            </button>;
            <Link;'
              href='/';'
              className='flex - 1 bg - gray - 100 hover:bg - gray - 200 text - gray - 700 flex items - center justify - center px - 4 py - 2 rounded - lg font - medium transition - colors';
            >;'
              <Home className='w - 4 h - 4 mr - 2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}'
          <div className='border - t pt - 6'>;'
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              You can also visit:;
            </h3>;'
            <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 3 text - sm'>;
              <Link;'
                href='/marketplace';'
                className='text - blue - 600 hover:underline';
              >;
                Marketplace;
              </Link>;'
              <Link href='/talent' className='text - blue - 600 hover:underline'>;
                Talent;
              </Link>;'
              <Link href='/services' className='text - blue - 600 hover:underline'>;
                Services;
              </Link>;'
              <Link href='/about' className='text - blue - 600 hover:underline'>;

                About;
              </Link>;
            </div>;
          </div>;
        </div>;

        {/* Support Information */}'
        <div className='bg - gray - 800 text - white rounded - lg p - 6 text - center'>;'
          <p className='mb - 3'>Need help? Contact our support team</p>;'
          <div className='flex flex - col sm:flex - row gap - 3 justify - center'>;
            <a;'
              href='mailto:support@zion.tech';'
              className='text - blue - 400 hover:underline';
            >;
              support@zion.tech;
            </a>;'
            <Link href='/status' className='text - blue - 400 hover:underline'>;
              Service Status;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>);
interface PageErrorBoundaryProps {}
  children: React.ReactNode;
  page_name?: string;
  fallback?: React.ComponentType < FallbackProps>;
export default /**;
 * PageErrorBoundary - Function description;
 */
function PageErrorBoundary() {}
  const handle_error = (error: Error, error_info: React.ErrorInfo) =>: any {}
    prodLogError ('`
      `PageErrorBoundary caught error on ${page_name || 'unknown page'}:`,
      error);
    logErrorToProduction (
      error instanceof Error ? error.message : String (error),
      error instanceof Error ? error : undefined,
      {'
        page: page_name || 'unknown',
        component_stack: error_info.component_stack || undefined,'
        error_boundary: 'PageErrorBoundary',
        timestamp: new Date ().toISOString (),

      });
  }

  const FallbackComponent = null;
    fallback ||

    ((props: FallbackProps) => (

      <PageErrorFallback {...props} pageName={pageName} />
    ))
      onReset={() => {        // Reset any application state if needed;
'
              href='mailto:support@zion && zion.tech''
              className='text-blue-400 hover:underline'>;
              support@zion && zion.tech;
<<<<<<< HEAD


=======
<<<<<<< HEAD
'`
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
'`
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
`
        logInfo(`Resetting error boundary for ${pageName || page'}`)
          <div className=flex flex-col sm:flex-row gap-3 mb-6">;
>>>>>>> origin/resolved-merge-conflicts
export default /**;
 * PageErrorBoundary - Function description;
 */;
function PageErrorBoundary() {const handle_error = (error: Error, error_info: React.ErrorInfo) =>: any {prodLogError (`PageErrorBoundary caught error on ${page_name || 'unknown page'}:`,error)logErrorToProduction (error instanceof Error ? error.message : String (error),error instanceof Error ? error : undefined,{page: page_name || 'unknown',component_stack: error_info.component_stack || undefined,error_boundary: 'PageErrorBoundary',timestamp: new Date ().toISOString ()}
    )}const FallbackComponent = null;
    fallback ||;
    ((props: FallbackProps) => (<PageErrorFallback {...props} pageName={pageName} />;
    ))onReset={() => {        // Reset any application state if needed;
<<<<<<< HEAD
              href='mailto:support@zion && zion.tech';
              className='text-blue-400 hover:underline'>;
              support@zion && zion.tech;logInfo(`Resetting error boundary for ${pageName || 'page'}`)<div className='flex flex-col sm:flex-row gap-3 mb-6'>;
=======
              href='mailto:support@zion && zion.tech;
              className=text-blue-400 hover:underline'>;
              support@zion && zion.tech;logInfo(`Resetting error boundary for ${pageName || 'page}`)<div className="flex flex-col sm:flex-row gap-3 mb-6>;
=======
'`
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;

            <button;
              onClick={handleRefresh}'
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
            >;'
              <RefreshCw className='w-4 h-4 mr-2' />;
              Try Again;
            </button>;
            <Link;'
              href='/';'
              className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
            >;'
              <Home className='w-4 h-4 mr-2' />;
              Go Home;
            </Link>;
          </div>;
          {/* Navigation Options */}'
          <div className='border-t pt-6'>;'
            <h3 className='font-semibold text-gray-900 mb-3'>You can also visit:</h3>;'
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>;'
              <Link href='/marketplace' className='text-blue-600 hover:underline'>;
                Marketplace;
              </Link>;'
              <Link href='/talent' className='text-blue-600 hover:underline'>;
                Talent;
              </Link>;'
              <Link href='/services' className='text-blue-600 hover:underline'>;
                Services;
              </Link>;'
              <Link href='/about' className='text-blue-600 hover:underline'>;
                About;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Support Information */}'
        <div className='bg-gray-800 text-white rounded-lg p-6 text-center'>;'
          <p className='mb-3'>Need help? Contact our support team</p>;'
          <div className='flex flex-col sm: flex-row gap-3 justify-center'>;
            <a;'
              href='mailto:support@zion.tech';'
              className='text-blue-400 hover:underline';
            >;
              support@zion.tech;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </a>;
            <Link href='/status' className='text-blue-400 hover:underline'>;
              Service Status;
              support@zion.tech;</a>;
<<<<<<< HEAD
            <Link href='/status' className='text-blue-400 hover:underline'>;</a>;
            <Link href='/status' className='text-blue-400 hover:underline'>;Service Status;
=======
            <Link href="/status" className="text-blue-400 hover:underline">;</a>;
            <Link href=/status' className='text-blue-400 hover:underline>;Service Status;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              Service Status;

            </Link>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}interface PageErrorBoundaryProps  {children: React.ReactNode,pageName?: string,fallback?: React.ComponentType<FallbackProps>;
}export default function PageErrorBoundary() {const handleError = (error: Error, errorInfo: React.ErrorInfo) => {prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error),logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {page: pageName || 'unknown',componentStack: errorInfo.componentStack || undefined,errorBoundary: 'PageErrorBoundary',timestamp: new Date().toISOString()})}const FallbackComponent = fallback || ((props: FallbackProps) => (<PageErrorFallback {...props} pageName={pageName} />;
  ))return (<ErrorBoundary;
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {// Reset any application state if needed;interface PageErrorBoundaryProps  {children: React && React.ReactNode;
  pageName?: string;
  fallback?: React && React.ComponentType<FallbackProps>;const Component = React && React.memo(function PageErrorBoundary(): any ({children,pageName,fallback}: PageErrorBoundaryProps) {const handleError = (error: Error, errorInfo: React && React.ErrorInfo) => {prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`,error;
    )logErrorToProduction(error instanceof Error ? error && error.message : String(error),error instanceof Error ? error : undefined,{page: pageName || 'unknown',componentStack: errorInfo && errorInfo.componentStack || undefined,errorBoundary: 'PageErrorBoundary',timestamp: new Date().toISOString()}
    )}const FallbackComponent =;
    fallback ||;
    ((props: FallbackProps) => (;
      <PageErrorFallback {...props} pageName={pageName} />;
    ));


      onReset={() => {        // Reset any application state if needed;

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

        logInfo(`Resetting error boundary for ${pageName || 'page'}`);

    >;
      {children}
    </ErrorBoundary>;
  );

} ;

interface PageErrorBoundaryProps {;
  children: React.ReactNode,;
  pageName?: string,;
  fallback?: React.ComponentType<FallbackProps>;
}
;
export default function PageErrorBoundary({;
  children,;
  pageName,;
  fallback;
}: PageErrorBoundaryProps) {;
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {;
    prodLogError(`PageErrorBoundary caught error on ${pageName || 'unknown page'}:`, error),;
    logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, {;
      page: pageName || 'unknown',;
      componentStack: errorInfo.componentStack || undefined,;
      errorBoundary: 'PageErrorBoundary',;
      timestamp: new Date().toISOString();
    })
};
  const FallbackComponent = fallback || ((props: FallbackProps) => (;
    <PageErrorFallback {...props} pageName={pageName} />;
  ));
  return (;
    <ErrorBoundary;
      FallbackComponent={FallbackComponent}
      onError={handleError}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      onReset={() => {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      onReset={() => {
>>>>>>> origin/resolved-merge-conflicts

    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {
        // Reset any application state if needed
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)
origin/cursor/automate-test-improve-and-merge-code-2533
      }
    >;
      {children}
>>>>>>> origin/cursor/delete-old-data-records-6bba



      }
    >
<<<<<<< HEAD
      {children}}
=======
      {children}
<<<<<<< HEAD
} ;
} ;
        // Reset any application state if needed;        logInfo(`Resetting error boundary for ${pageName || 'page'}`);
=======
}
}
        // Reset any application state if needed;        logInfo(`Resetting error boundary for ${pageName || 'page}`);
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      onReset={() => {;
        // Reset any application state if needed;        logInfo(`Resetting error boundary for ${pageName || 'page'}`);
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts

      }
    >
      {children} ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
} 
};
}

    </ErrorBoundary>;
  );
} ;

  const FallbackComponent =;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    fallback ||;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ((props: FallbackProps) => (<PageErrorFallback {...props} pageName={pageName} />;
    ))onReset={() => {        // Reset any application state if needed;logInfo(`Resetting error boundary for ${pageName || 'page'}`)<ErrorBoundary;
      FallbackComponent={FallbackComponent}
      onError={handleError}
      onReset={() => {// Reset any application state if needed;
        logInfo(`Resetting error boundary for ${pageName || 'page'}`)}>;
      {children}>;
      {children}}}</ErrorBoundary>;
  )}const FallbackComponent =;
    fallback ||;
  );}
;
interface PageErrorBoundaryProps {;
  children:React.ReactNode,;
  pageName?:string,;
  fallback?:React.ComponentType<FallbackProps>;
}

    </ErrorBoundary>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
    </ErrorBoundary>))}interface PageErrorBoundaryProps  {children:React.ReactNode,pageName?:string,fallback?:React.ComponentType<FallbackProps>;
}
}
}</ErrorBoundary>;
  )
=======
    fallback ||;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ((props: FallbackProps) => (
      <PageErrorFallback {...props} page_name={page_name} />));
      on_reset={() => {        // Reset any application state if needed;'`
        log_info (`Resetting error boundary for ${page_name || 'page'}`);
      }
    >;
      {children}
    </ErrorBoundary>);