class ErrorBoundary extends React.Component {
  constructor(props) {

    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React from 'react';'
import Link from 'next/link';
'
import { Button } from '@/components/ui/button';'
import { Alert, AlertDescription } from '@/components/ui/alert';

import React from 'react'
import Link from 'next/link'
import {

  AlertTriangle,

  ExternalLink,
  RefreshCw,;
  Settings,;
  CheckCircle;

} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react',
import Link from 'next/link';
=======
import React from 'react,
=======
=======
=======
<<<<<<< HEAD

import React from 'react,
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react',
import Link from 'next/link';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';

import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthConfigurationErrorProps {;
  onRetry?: () => void;

  showSetupButton?: boolean;
export function AuthConfigurationError(): any ({;
  onRetry,;
  showSetupButton = true,;
}: AuthConfigurationErrorProps) {;

  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry();
    } else {;

}

export function AuthConfigurationError({ onRetry, showSetupButton;
export function AuthConfigurationError({
  onRetry
  showSetupButton = true
}: AuthConfigurationErrorProps) {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload();

      window && window.location.reload();    }
      window.location.reload()'
import React from 'react';'
import Link from 'next / link';
import {}
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Settings,
  CheckCircle,';
} from 'lucide-react'; import { Button } from '@/components / ui / button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';'
import { Button } from '@/components / ui / button';'
import { Alert, AlertDescription } from '@/components / ui / alert';'
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
interface AuthConfigurationErrorProps {}
  on_retry?: () => void;
  showSetupButton?: boolean;
export /**;
 * AuthConfigurationError - Function description;
 */
function AuthConfigurationError() {}
  const handle_refresh = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      on_retry ();
    } else {}
      window.location.reload () }
  }

    }
  },

  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>
        {/* Main Error Card */}        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>
          <div className='text-center mb-6'>
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>
              <AlertTriangle className='h-8 w-8 text-red-600' />
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4>
      <div className=max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6>
        {/* Main Error Card */}        <div className=bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6>
            <div className=mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600 />
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Authentication Service Unavailable
            </h1>
            <p className='text-gray-600'>
              The sign-up system needs to be configured before users can create accounts
            </p>
          </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
<div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
=======
<div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4>
      <div className=max-w-2xl w-full'>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        {/* Main Error Card */}

          <Alert variant='destructive' className='mb-6'>

            <AlertTriangle className='h-4 w-4' />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>

          {/* Technical Details */}

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>


;
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return { hasError: true }componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
    }return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import {AlertTriangle,ExternalLink,RefreshCw,Settings,CheckCircle;} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle  } from 'lucide-react';
import React from 'react',import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle  } from 'lucide-react';
import { Button   } from '@/components/ui/button';
interface AuthConfigurationErrorProps  {onRetry?: () => void;import Link from 'next/link',import { Button } from '@/components/ui/button',import { Alert, AlertDescription } from '@/components/ui/alert',interface AuthConfigurationErrorProps  {onRetry?: () => void,showSetupButton?: boolean;
}export function AuthConfigurationError() {interface AuthConfigurationErrorProps  {onRetry?: () => void;showSetupButton?: boolean;
export function AuthConfigurationError(): any ({onRetry,showSetupButton = true}: AuthConfigurationErrorProps) {const handleRefresh = () => {if (onRetry) {onRetry()} else {}export function AuthConfigurationError() {const handleRefresh = () => {if (onRetry) {onRetry()} else {window.location.reload()}
  },return (<div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
        {/* Main Error Card */}window && window.location.reload()}
      window.location.reload()import Link from 'next / link';
  AlertTriangle,ExternalLink,RefreshCw,Settings,CheckCircle} from 'lucide-react'; import { Button } from '@/components / ui / button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle  } from 'lucide-react';
import { Button  } from '@/components / ui / button';
import { Alert, AlertDescription  } from '@/components / ui / alert';
interface AuthConfigurationErrorProps  {on_retry?: () => void;
  showSetupButton?: boolean;
export /**;
 * AuthConfigurationError - Function description;
 */;
function AuthConfigurationError() {const handle_refresh = () =>: any {// Check condition;
if ( {) {$2;
}
      on_retry ()} else {window.location.reload () }
  }
  return (<div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;
      <div className='max - w-2xl w - full'>;
export /**;
 * AuthConfigurationError - Function description;
 */;
function AuthConfigurationError() {const handle_refresh = () =>: any {// Check condition;
if ( {) {$2;
}
      on_retry ()} else {window.location.reload ()}
  }return (<div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;

<<<<<<< HEAD
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
=======
          <div className=bg-gray-50 rounded-lg p-4 mb-6">
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

<div className='flex flex-col sm:flex-row gap-3 mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {showSetupButton && (
              <Button '
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'
              >'
                <Settings className='w-4 h-4 mr-2' />
                Setup Guide;
              </Button>

  };
  return (;'
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>;'
      <div className='max-w-2xl w-full'>;
        {/* Main Error Card */}'
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;'
          <div className='text-center mb-6'>;'
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;'
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;'
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              Authentication Service Unavailable;
            </h1>;'
            <p className='text-gray-600'>;
              The sign-up system needs to be configured before users can create accounts;
            </p>;
          </div>;

          <Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.;

          <Alert variant='destructive' className='mb-6'>;

            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
          {/* Technical Details */}<div className='bg-gray-50 rounded-lg p-4 mb-6'>;
            <h3 className='font-semibold text-gray-900 mb-2'>Missing Configuration:</h3>;
            <ul className='text-sm text-gray-700 space-y-1'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {/* Technical Details */}<div className=bg-gray-50 rounded-lg p-4 mb-6>;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className=text-sm text-gray-700 space-y-1>;
>>>>>>> origin/resolved-merge-conflicts
<div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
        {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              Authentication Service Unavailable;
            </h1>;
            <p className='text-gray-600'>;
              The sign-up system needs to be configured before users can create;
              accounts;
            </p>;
          </div>;
          <Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.;
            </AlertDescription>;
          </Alert>;


          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}



                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'
              >
                <Settings className='w-4 h-4 mr-2' />
                Setup Guide
              </Button>



  };
  return (;
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>;
          {/* Technical Details */}
<div className='bg-gray-50 rounded-lg p-4 mb-6'>;
            <h3 className='font-semibold text-gray-900 mb-2'>;
              Missing Configuration:;
            </h3>;
            <ul className='text-sm text-gray-700 space-y-1'>;
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              Authentication Service Unavailable;
            </h1>;
            <p className='text-gray-600'>;
              The sign-up system needs to be configured before users can create;
              accounts;
            </p>;
          </div>;<Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;{/* Technical Details */}        {/* Main Error Card */}
          {/* Action Buttons */}<div className='flex flex-col sm:flex-row gap-3 mb-6'>;
<div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            {showSetupButton && (<Button;
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}className='bg-blue-600 hover:bg-blue-700 text-white flex-1';
              >;
                <Settings className='w-4 h-4 mr-2' />;
                Setup Guide;
              </Button>;
  }return (<div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>;
      <div className='max-w-2xl w-full'>;
        {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              Authentication Service Unavailable;
            </h1>;
            <p className='text-gray-600'>;
              The sign-up system needs to be configured before users can create accounts;
            </p>;
          </div>;


          <Alert variant='destructive' className='mb-6'>;
          </div>;<Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;{/* Technical Details */}
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;
<<<<<<< HEAD
          {/* Technical Details */}'
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;'
            <h3 className='font-semibold text-gray-900 mb-2'>;
=======
          {/* Technical Details */}
          <div className=bg-gray-50 rounded-lg p-4 mb-6'>;'
            <h3 className=font-semibold text-gray-900 mb-2>;
=======

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {/* Technical Details */}'
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;'
            <h3 className='font-semibold text-gray-900 mb-2'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Missing Configuration:;
            </h3>;''
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;'
            <h3 className='font-semibold text-gray-900 mb-2'>Missing Configuration:</h3>;'
            <ul className='text-sm text-gray-700 space-y-1'>;'
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;'
      <div className='max - w-2xl w - full'>;
        {/* Main Error Card */}'
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;'
          <div className='text - center mb - 6'>;'
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;'
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;
            </div>;'
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;
              Authentication Service Unavailable;
            </h1>;'
            <p className='text - gray - 600'>;
              The sign - up system needs to be configured before users can create;
              accounts;
            </p>;
          </div>;'
          <Alert variant='destructive' className='mb - 6'>;'
            <AlertTriangle className='h - 4 w - 4' />;
            <AlertDescription>;
              <strong > Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;

            <AlertDescription>;
              <strong > Critical Issue #1:</strong> Auth0 environment variables are not configured.;

              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;

<<<<<<< HEAD
            <ul className='text - sm text - gray - 700 space - y-1'>;

              <li>• AUTH0_SECRET</li>;
            <ul className='text - sm text - gray - 700 space - y-1'>;<li>• AUTH0_SECRET</li>;
=======
            <ul className="text - sm text - gray - 700 space - y-1">;

              <li>• AUTH0_SECRET</li>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
            <ul className=text - sm text - gray - 700 space - y-1">;<li>• AUTH0_SECRET</li>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
            <ul className=text - sm text - gray - 700 space - y-1">;<li>• AUTH0_SECRET</li>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;

                className='bg-blue-600 hover:bg-blue-700 text-white flex-1';
              >;'
                <Settings className='w-4 h-4 mr-2' />;
                Setup Guide;
              </Button>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}

            <Button
              onClick={handleRefresh}
              variant='outline'

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onClick={handleRefresh}
<<<<<<< HEAD
              variant='outline' 
=======
              variant=outline" 
              className="flex-1
            >
              <RefreshCw className=w-4 h-4 mr-2" />

>>>>>>> origin/resolved-merge-conflicts
              className='flex-1'
            >
              <RefreshCw className='w-4 h-4 mr-2' />

              className='flex-1'
            >
              <RefreshCw className='w-4 h-4 mr-2' />
origin/cursor/automate-test-improve-and-merge-code-2533

              className='flex-1'
            >
              <RefreshCw className='w-4 h-4 mr-2' />
              Check Again
            </Button>
          </div>
              </Button>;)}
            <Button;
              onClick={handleRefresh}
              variant='outline';
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>;
            {showSetupButton && (<Button;
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className='bg-blue-600 hover:bg-blue-700 text-white flex-1';
              >;
                <Settings className='w-4 h-4 mr-2' />;
                Setup Guide;
              </Button>;
            )}<Button;
              onClick={handleRefresh}
              variant='outline';
              className='flex-1';
            >;
              <RefreshCw className='w-4 h-4 mr-2' />;
              className='flex-1';
            >;
              <RefreshCw className='w-4 h-4 mr-2' />;
              Check Again;
            </Button>;
          </div>;
              className='flex-1'>;
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className='w-4 h-4 mr-2' />;
              Check Again;
            </Button>;
          </div>;

          {/* Quick Setup Steps */}




<<<<<<< HEAD
          <div className='border-t pt-6'>
            <h3 className='font-semibold text-gray-900 mb-3'>Quick Setup Steps:</h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
=======
          <div className=border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3>Quick Setup Steps:</h3>
            <ol className=space-y-3 text-sm">
              <li className="flex items-start gap-3>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}

                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>1</span>

<div className='border-t pt-6'>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Quick Setup Steps:
            </h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  1
                </span>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<div className='border-t pt-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='border-t pt-6'>
<div className=border-t pt-6>
>>>>>>> origin/resolved-merge-conflicts
            <h3 className='font-semibold text-gray-900 mb-3'>
              Quick Setup Steps:
            </h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
                  <a '
                    href='https://manage.auth0.com/' '
                    target='_blank' '
                    rel='noopener noreferrer''
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'
                  >'
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />

                  </Link>
                </div>
              </li>

                  <a
                    href='https://manage.auth0.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'
                  >
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />

<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <li className='flex items-start gap-3'>

              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a 'Regular Web Application' named 'Zion AI Marketplace'
                </div>
              </li>
              
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>3</span>






<li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
          </div>;{/* Quick Setup Steps */}<div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>Quick Setup Steps:</h3>;
            <ol className='space-y-3 text-sm'>;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>1</span>;
<div className='border-t pt-6'>;
            <h3 className='font-semibold text-gray-900 mb-3'>;
              Quick Setup Steps:;
            </h3>;
            <ol className='space-y-3 text-sm'>;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  1;
                </span>;
                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
                  <a;
                    href='https://manage.auth0.com/';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text-blue-600 hover:underline inline-flex items-center gap-1';
                  >;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </Link>;
                </div>;
              </li>;
                  <a;
                    href='https://manage.auth0.com/';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text-blue-600 hover:underline inline-flex items-center gap-1';
                  >;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>2</span>;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  2;
                </span>;
                <div>;
                  <strong>Create Application:</strong>;
                  <br />;
                  Create a 'Regular Web Application' named 'Zion AI Marketplace';
                </div>;
              </li>;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>3</span>;
<li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  3;
                </span>;
                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'>;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
                </div>;
              </li>;<li className='flex items-start gap-3'>;

<<<<<<< HEAD
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>3</span>
=======
                <span className=flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold>3</span>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts

>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>
                  <strong>Configure Environment:</strong>

                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
                </div>;
              </li>;
'
              <li className='flex items-start gap-3'>;'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  2;
                </span>                <div>                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
                  <a'
                    href='https://manage && manage.auth0.com/' '
                    target='_blank' '
                    rel='noopener noreferrer''
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'>;'
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
                </div>;
              </li>;
'
              <li className='flex items-start gap-3'>;'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>2</span>;
                <div>;
                  <strong>Create Application:</strong>;
          {/* Action Buttons */}'
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            {showSetupButton && (
              <Button;
                on_click={() =>;'
                  window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank');
                }'
                className='bg - blue - 600 hover:bg - blue - 700 text - white flex - 1'              <Button;'
                on_click = {(, ) => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }'
                className='bg - blue - 600 hover:bg - blue - 700 text - white flex - 1';
              >;'
                <Settings className='w - 4 h - 4 mr - 2' />;
                Setup Guide;
              </Button>)}
            <Button;
              on_click={handle_refresh}'
              variant='outline';'
              className='flex - 1'            >;''
              <RefreshCw className='w - 4 h - 4 mr - 2' />              Check Again              <RefreshCw className='w - 4 h - 4 mr - 2' />;
              Check Again;
            </Button>;
          </div>;
          {/* Quick Setup Steps */}'
          <div className='border - t pt - 6'>;'
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              Quick Setup Steps:;
            </h3>;'
            <ol className='space - y-3 text - sm'>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  1;
                </span>;
                <div>;
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
                  <a;'
                    href='https://manage.auth0.com/';'
                    target='_blank';'
                    rel='noopener noreferrer';'
                    className='text - blue - 600 hover:underline inline - flex items - center gap - 1';
                  >;'
                    Visit Auth0 Dashboard <ExternalLink className='w - 3 h - 3' />;
                  </a>;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  2;
                </span>                <div>                <div>;
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
                  <a;'
                    href='https://manage.auth0.com/';'
                    target='_blank';'
                    rel='noopener noreferrer';'
                    className='text - blue - 600 hover:underline inline - flex items - center gap - 1';
                  >;'
                    Visit Auth0 Dashboard <ExternalLink className='w - 3 h - 3' />;
                  </a>;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>2</span>;
                <div>;
                  <strong > Create Application:</strong>;
<<<<<<< HEAD
                  <br />;'
                  Create a 'Regular Web Application' named 'Zion AI Marketplace';
=======
                  <br />;"
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  Create a "Regular Web Application" named "Zion AI Marketplace";
>>>>>>> origin/resolved-merge-conflicts
                </div>;
              </li>;

                  file;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Create a "Regular Web Application named Zion AI Marketplace";

                </div>;
              </li>;

                  file;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </div>;
              </li>;
'
              <li className='flex items-start gap-3'>;'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  4;
                </span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
'
                  Run{' '}'
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;'
                  </code>{' '}

                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>3</span>
                <div>

                  <strong>Configure Environment:</strong>
                  <br />'
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env.local</code> file;
                </div>
<<<<<<< HEAD
              </li>'
              <li className='flex items-start gap-3'>
=======
              </li>"
              <li className="flex items-start gap-3">
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

              
              <li className='flex items-start gap-3'>

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env.local</code> file
                </div>
              </li>
<<<<<<< HEAD
                  Run <code className='bg-gray-100 px-1 rounded'>npm run dev</code> to apply changes
=======
                  Run <code className=bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  to apply changes
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </li>
            </ol>
          </div>
        </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                  </code>{' '}<li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>3</span>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </code>{' '}<li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>;
                  </code>{' }<li className="flex items-start gap-3>;
                <span className=flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>;
>>>>>>> origin/resolved-merge-conflicts
                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env.local</code> file;
                </div>;
              </li>;
              <li className='flex items-start gap-3'>;
              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env.local</code> file;
                </div>;
              </li>;
                  Run <code className='bg-gray-100 px-1 rounded'>npm run dev</code> to apply changes;
                  to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;
                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env && env.local</code> file;
                </div>;
              </li>;<li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
<<<<<<< HEAD
                  Run <code className='bg-gray-100 px-1 rounded'>npm run dev</code> to apply changes;
=======
                  Run <code className=bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;
              <li className=flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold>;
                  3;
                </span>;
                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to{ '}
                  <code className='bg - gray - 100 px - 1 rounded>;
                    .env.local;
                  </code>{ '}
                  file;
                </div>;
              </li>;
              <li className='flex items - start gap - 3>;
                <span className=flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  4;
                </span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run{' }
                  <code className=bg - gray - 100 px - 1 rounded'>;
                    npm run dev;
                  </code>{' }
                  to apply changes                </div>                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg - gray - 100 px - 1 rounded>.env.local</code> file;
                </div>;
              </li>;
              <li className=flex items - start gap - 3">;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold>4</span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run <code className=bg - gray - 100 px - 1 rounded">npm run dev</code> to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6>
          <h3 className=font-semibold text-blue-900 mb-3">Alternative Actions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3>
            <Link 
              href=/marketplace" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800


                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;
                </div>;
              </li>;

              <li className=flex items-start gap-3">;"
                <span className=flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold>4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;"
                  Run <code className="bg-gray-100 px-1 rounded>npm run dev</code> to apply changes;
>>>>>>> origin/resolved-merge-conflicts
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  3;
                </span>;
                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to{' '}
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    .env.local;
                  </code>{' '}
                  file;
                </div>;
              </li>;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  4;
                </span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run{' '}
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    npm run dev;
                  </code>{' '}
                  to apply changes                </div>                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className='bg - gray - 100 px - 1 rounded'>.env.local</code> file;
                </div>;
              </li>;
<<<<<<< HEAD
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>4</span>;
=======
              <li className="flex items - start gap - 3">;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">4</span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run <code className="bg - gray - 100 px - 1 rounded">npm run dev</code> to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/marketplace" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;"
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;
                </div>;
              </li>;
"
              <li className="flex items-start gap-3">;"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;"
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  3;
                </span>;
                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;'
                  Copy credentials to{' '}'
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    .env.local;'
                  </code>{' '}
                  file;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  4;
                </span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;'
                  Run{' '}'
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    npm run dev;'
                  </code>{' '}
                  to apply changes                </div>                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;"
                  Copy credentials to <code className="bg - gray - 100 px - 1 rounded">.env.local</code> file;
                </div>;
              </li>;"
              <li className="flex items - start gap - 3">;"
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">4</span>;
>>>>>>> origin/resolved-merge-conflicts
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run <code className='bg - gray - 100 px - 1 rounded'>npm run dev</code> to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;

        <div className='bg-blue-50 rounded-xl border border-blue-200 p-6'>
          <h3 className='font-semibold text-blue-900 mb-3'>Alternative Actions:</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <Link 
              href='/marketplace' 
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'


                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;'
                  Copy credentials to <code className='bg-gray-100 px-1 rounded'>.env && env.local</code> file;
                </div>;
              </li>;
'
              <li className='flex items-start gap-3'>;'
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;'
                  Run <code className='bg-gray-100 px-1 rounded'>npm run dev</code> to apply changes;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  3;
                </span>;
                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;'
                  Copy credentials to{' '}'
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    .env.local;'
                  </code>{' '}
                  file;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  4;
                </span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;'
                  Run{' '}'
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    npm run dev;'
                  </code>{' '}
                  to apply changes                </div>                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;'
                  Copy credentials to <code className='bg - gray - 100 px - 1 rounded'>.env.local</code> file;
                </div>;
              </li>;'
              <li className='flex items - start gap - 3'>;'
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>4</span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;'
                  Run <code className='bg - gray - 100 px - 1 rounded'>npm run dev</code> to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <Link '
              href='/marketplace' '
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'

        {/* Alternative Actions Card */}
<div className='bg-blue-50 rounded-xl border border-blue-200 p-6'>
          <h3 className='font-semibold text-blue-900 mb-3'>
            Alternative Actions:
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <Link
              href='/marketplace'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'

            >
              <span>Browse Marketplace</span>'
              <ExternalLink className='w-4 h-4' />
            </Link>
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
              href='/talent' 
=======
              href=/talent 
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'

            >
              <span>View Talent Pool</span>'
              <ExternalLink className='w-4 h-4' />
            </Link>

            <Link 
              href='/help' 

              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>Contact Support</span>'
              <ExternalLink className='w-4 h-4' />
            </Link>

<<<<<<< HEAD


=======
<<<<<<< HEAD
        </div>;<div className='bg-blue-50 rounded-xl border border-blue-200 p-6'>;
          <h3 className='font-semibold text-blue-900 mb-3'>Alternative Actions:</h3>;
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>;<div className="bg-blue-50 rounded-xl border border-blue-200 p-6">;
          <h3 className=font-semibold text-blue-900 mb-3>Alternative Actions:</h3>;
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">;
>>>>>>> origin/resolved-merge-conflicts
            <Link;
              href='/marketplace';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
        {/* Alternative Actions Card */}
<div className='bg-blue-50 rounded-xl border border-blue-200 p-6'>;
          <h3 className='font-semibold text-blue-900 mb-3'>;
            Alternative Actions:;
          </h3>;
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>;
            <Link;
              href='/marketplace';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link;
              href='/talent';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link;
              href='/help';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
<<<<<<< HEAD
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;'
              <ExternalLink className='w-4 h-4' />;
=======
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;"
              <ExternalLink className="w-4 h-4" />;
>>>>>>> origin/resolved-merge-conflicts
            </Link>;

            <Link 
              href='/status' 

              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>System Status</span>

<<<<<<< HEAD


=======
<<<<<<< HEAD
              <ExternalLink className='w-4 h-4' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <ExternalLink className=w-4 h-4' />
>>>>>>> origin/resolved-merge-conflicts
            </Link>
            <Link
              href='/talent'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>View Talent Pool</span>
              <ExternalLink className='w-4 h-4' />
            </Link>
            <Link
              href='/help'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>Contact Support</span>
              <ExternalLink className='w-4 h-4' />
            </Link>
            <Link
              href='/status'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>System Status</span>
              <ExternalLink className='w-4 h-4' />
            </Link>
              <ExternalLink className='w-4 h-4' />
            </Link>
          </div>
        </div>
        {/* Setup Script Info */}
        {showSetupButton && (
<<<<<<< HEAD
          <div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
=======
          <div className="mt-6 text-center>
            <div className=bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2>
                <CheckCircle className=w-5 h-5" />
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
        </div>
        {/* Setup Script Info */}

                <span className='font-semibold'>Automated Setup Available</span>

              </div>

              <p className='text-sm text-green-600 mb-3'>
                Run the setup script to configure Auth0 interactively:
              </p>

<<<<<<< HEAD


=======
<<<<<<< HEAD
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm>

<div className=mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4>
              <div className=flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5 />
                <span className=font-semibold'>Automated Setup Available</span>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
>>>>>>> origin/resolved-merge-conflicts
<div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
                <span className='font-semibold'>Automated Setup Available</span>
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>
              <p className='text-sm text-green-600 mb-3'>
                Run the setup script to configure Auth0 interactively:
              </p>
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
                npm run setup:auth0

              </code>
            </div>
          </div>
        )}

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <Link
              href='/talent' 
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;

            <Link
              href='/help' 
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;

            <Link
              href='/status' 
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
            </Link>;<Link;
              href='/status';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link;
              href='/talent';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link;
              href='/help';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link;
              href='/status';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800';
            >;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
          </div>;
        </div>;
        {/* Setup Script Info */}
        {showSetupButton && (</div>;
        </div>;
        {/* Setup Script Info */}
        {showSetupButton && (<div className='mt-6 text-center'>;
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;
                <CheckCircle className='w-5 h-5' />;
                <span className='font-semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>;
<div className='mt-6 text-center'>;
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;
                <CheckCircle className='w-5 h-5' />;
                <span className='font-semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>;
                npm run setup:auth0;
              </code>;
            </div>;
          </div>;
        )}<Link;
              href='/talent';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;<Link;
              href='/help';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;<Link;
              href='/status';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;<Link;
              href='/talent';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;<Link;
              href='/help';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;<Link;
              href='/status';
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />            </Link>              <ExternalLink className='w-4 h-4' />;
            </Link>;
          </div>;
        </div>;{/* Setup Script Info */}
        {showSetupButton && (<div className='mt-6 text-center'>;
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;
                <CheckCircle className='w-5 h-5' />;
                <span className='font-semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>;
                npm run setup:auth0;
              </code>;
            </div>;
          </div>;
        )}
        {/* Footer */}
<div className='mt-6 text-center text-sm text-gray-500'>
<<<<<<< HEAD
=======
<div className='mt-6 text-center text-sm text-gray-500>
>>>>>>> origin/resolved-merge-conflicts
          <p>
            For detailed instructions, see{' '}
            <button
              onClick={() =>
                window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
              }
              className='text-blue-600 hover:underline'
            >
origin/cursor/automate-test-improve-and-merge-code-2533



<<<<<<< HEAD
        <div className='mt-6 text-center text-sm text-gray-500'>
=======
        <div className="mt-6 text-center text-sm text-gray-500>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="mt-6 text-center text-sm text-gray-500">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p>
            For detailed instructions, see{' '}

            <button 
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className='text-blue-600 hover: underline'
            >

            </button>
          </p>
        </div>
      </div>
    </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
export default AuthConfigurationError };
;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default AuthConfigurationError };
;
export default AuthConfigurationError }
>>>>>>> origin/resolved-merge-conflicts
export default AuthConfigurationError;
}
}


<<<<<<< HEAD
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
=======
              onClick = {() => window && window.open(/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

export default AuthConfigurationError };
;
export default AuthConfigurationError;
}
}

        <div className='mt-6 text-center text-sm text-gray-500'>;
          <p>;'
            For detailed instructions, see{' '}
            <button;'
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

              className='text-blue-600 hover: underline';
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;

        {/* Footer */}<div className='mt-6 text-center text-sm text-gray-500'>;
          <p>;
            For detailed instructions, see{' '}>;
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className='text-blue-600 hover: underline';
            >;
<div className='mt-6 text-center text-sm text-gray-500'>;
          <p>;
            For detailed instructions, see{' '}
            <button;
<<<<<<< HEAD
=======
              onClick={() => window.open(/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

              className="text-blue-600 hover: underline";
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;

        {/* Footer */}<div className="mt-6 text-center text-sm text-gray-500>;
          <p>;
            For detailed instructions, see{' }>;
            <button;
              onClick={() => window.open(/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className=text-blue-600 hover: underline";
            >;
<div className='mt-6 text-center text-sm text-gray-500>;
          <p>;
            For detailed instructions, see{ '}
            <button;
>>>>>>> origin/resolved-merge-conflicts
              onClick={() =>;
                window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')}
              className='text-blue-600 hover:underline';
            >;
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </button>;
          </p>;
        </div>;
      </div>;
    </div>;
  );

  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}export default AuthConfigurationError }export default AuthConfigurationError;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onClick = {() => window && window.open(/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank)}export default AuthConfigurationError }export default AuthConfigurationError;
>>>>>>> origin/resolved-merge-conflicts
}
})<div className='mt-6 text-center text-sm text-gray-500'>;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}className='text-blue-600 hover: underline';AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;</button>;
          </p>;
        </div>;
      </div>;
    </div>;
  ))}export default AuthConfigurationError;}export default AuthConfigurationError;{/* Alternative Actions Card */}
        <div className='bg - blue - 50 rounded - xl border border - blue - 200 p - 6'>;
          <h3 className='font - semibold text - blue - 900 mb - 3'>;
            Alternative Actions:;
          </h3>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 3'>;
            <Link;
              href='/marketplace';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Browse Marketplace</span>            >;
              <span > Browse Marketplace</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/talent';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > View Talent Pool</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/help';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Contact Support</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/status';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > System Status</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/talent';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > View Talent Pool</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/help';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Contact Support</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/status';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > System Status</span>;
              <ExternalLink className='w - 4 h - 4' />            </Link>              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
          </div>;
        </div>;
        {/* Setup Script Info */}
        {showSetupButton && (<div className='mt - 6 text - center'>;
            <div className='bg - green - 50 rounded - lg border border - green - 200 p - 4'>;
              <div className='flex items - center justify - center gap - 2 text - green - 700 mb - 2'>;
                <CheckCircle className='w - 5 h - 5' />;
                <span className='font - semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text - sm text - green - 600 mb - 3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>                npm run setup:auth0              </div>;
              <p className='text - sm text - green - 600 mb - 3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>;
                npm run setup:auth0;
              </code>;
            </div>;
          </div>)}
        {/* Footer */}
        <div className='mt - 6 text - center text - sm text - gray - 500'>;
          <p>;
            For detailed instructions, see{' '}
            <button;
              on_click={() =>;
                window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')}
              className='text - blue - 600 hover:underline'            >        <div className='mt - 6 text - center text - sm text - gray - 500'>;
          <p>;
            For detailed instructions, see{' '}
            <button;
              on_click = {() => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank') }
              className='text - blue - 600 hover: underline';
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>);
export default AuthConfigurationError }
export default AuthConfigurationError,
}
;
export default AuthConfigurationError;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  );
export default AuthConfigurationError;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export default AuthConfigurationError;}

export default AuthConfigurationError;

        {/* Alternative Actions Card */}'
        <div className='bg - blue - 50 rounded - xl border border - blue - 200 p - 6'>;'
          <h3 className='font - semibold text - blue - 900 mb - 3'>;
            Alternative Actions:;
          </h3>;'
          <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 3'>;
            <Link;'
              href='/marketplace';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Browse Marketplace</span>            >;
              <span > Browse Marketplace</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/talent';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > View Talent Pool</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/help';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Contact Support</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/status';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > System Status</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/talent';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > View Talent Pool</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/help';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Contact Support</span>;'
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;'
              href='/status';'
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > System Status</span>;''
              <ExternalLink className='w - 4 h - 4' />            </Link>              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
          </div>;
        </div>;
        {/* Setup Script Info */}
        {showSetupButton && ('
          <div className='mt - 6 text - center'>;'
            <div className='bg - green - 50 rounded - lg border border - green - 200 p - 4'>;'
              <div className='flex items - center justify - center gap - 2 text - green - 700 mb - 2'>;'
                <CheckCircle className='w - 5 h - 5' />;'
                <span className='font - semibold'>Automated Setup Available</span>;
              </div>;'
              <p className='text - sm text - green - 600 mb - 3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;'
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>                npm run setup:auth0              </div>;'
              <p className='text - sm text - green - 600 mb - 3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;'
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>;
                npm run setup:auth0;
              </code>;
            </div>;
          </div>)}
        {/* Footer */}'
        <div className='mt - 6 text - center text - sm text - gray - 500'>;
          <p>;'
            For detailed instructions, see{' '}
            <button;
              on_click={() =>;'
                window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank');
              }''
              className='text - blue - 600 hover:underline'            >        <div className='mt - 6 text - center text - sm text - gray - 500'>;
          <p>;'
            For detailed instructions, see{' '}
            <button;'
              on_click = {() => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }'
              className='text - blue - 600 hover: underline';
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>);
export default AuthConfigurationError }
export default AuthConfigurationError,