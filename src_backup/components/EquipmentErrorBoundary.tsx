<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {logErrorToProduction} from '@/utils/productionLogger',;
=======
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface Props {;
  children: React.ReactNode;
}
<<<<<<< HEAD
;
interface State {;
  hasError: boolean,;
  error?: Error;
}
;
export class EquipmentErrorBoundary extends React.Component<Props State> {;
  constructor(props: Props) {;
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false }
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
;
  static getDerivedStateFromError(error: Error): State {;
=======
import { AlertTriangle, RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { logErrorToProduction } from '@/utils/productionLogger'
interface Props {
  children: React.ReactNode
interface State {
  hasError: boolean
  error?: Error
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  hasError: boolean
  error?: Error
}
import {logErrorToProduction} from '@/utils/productionLogger'

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
origin/cursor/automate-test-improve-and-merge-code-2533
interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
  error?: Error
}
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): State {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return { hasError: true, error }
  }
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="container py-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
              <p className="text-red-700 mb-4">
                We're having trouble loading the equipment listings. This might be a temporary issue.
              </p>
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={() => this.setState({ hasError: false, error: undefined })} 
                  variant="outline"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <div className='container py-8'>
=======
<div className='container py-8'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <Card className='border-red-200 bg-red-50'>
            <CardContent className='p-8 text-center'>
              <AlertTriangle className='mx-auto mb-4 h-12 w-12 text-red-600' />
              <h2 className='text-2xl font-bold text-red-900 mb-2'>
                Something went wrong
              </h2>
              <p className='text-red-700 mb-4'>
                We're having trouble loading the equipment listings. This might
                be a temporary issue.
              </p>
              <div className='flex gap-2 justify-center'>
                <Button
                  onClick={() =>
                    this.setState({ hasError: false, error: undefined })
                  }
                  variant='outline'                >
                  <RefreshCw className='h-4 w-4 mr-2' />
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant='default'
<<<<<<< HEAD
                >                  Refresh Page
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Button onClick={() => window.location.reload()} variant="default">
              </p>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => this.setState({ hasError: false, error: undefined })}
                  variant="outline"
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >
<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
        <div className="container py-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
              <p className="text-red-700 mb-4">
                We're having trouble loading the equipment listings. This might be a temporary issue.
              </p>
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={() => this.setState({ hasError: false, error: undefined })} 
                  variant="outline"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>                <Button onClick={() => window.location.reload()} variant="default">
=======

                <Button onClick={() => window.location.reload()} variant="default">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
}

interface State {;
  hasError: boolean,;
  error?: Error;
}

export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);


  }

  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }



  }

  render() {;
    if (this && this.state.hasError) {;
      return (



                <Button onClick={() => window.location.reload()} variant="default">
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD
      )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx

    return this.props.children
  }      )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
<<<<<<< HEAD
<<<<<<< HEAD
;
    return this.props.children;
<<<<<<< HEAD
  }
=======
  };
=======

    return this.props.children
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} ;
=======

    return this.props.children;
  };
} ;

<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  onClick={() => window && window.location.reload()}
                  variant='default';
                >                  Refresh Page;
                <Button onClick={() => window && window.location.reload()} variant="default">;
              </p>;
              <div className="flex gap-2 justify-center">;
                <Button
                  onClick={() => this && this.setState({ hasError: false, error: undefined })} ;
                  variant="outline";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
                <Button onClick={() => window && window.location.reload()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      );
    }

    return this && this.props.children;
  }      );

    }

<<<<<<< HEAD
    return this && this.props.children
};
=======
    return this && this.props.children;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {
    logErrorToProduction ('Equipment page error:', error, { component_stack: error_info.component_stack });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      return (
        <div className='container py - 8'>;
          <Card className='border - red - 200 bg - red - 50'>;
            <CardContent className='p - 8 text - center'>;
              <AlertTriangle className='mx - auto mb - 4 h - 12 w - 12 text - red - 600' />;
              <h2 className='text - 2xl font - bold text - red - 900 mb - 2'>;
                Something went wrong;
              </h2>;
              <p className='text - red - 700 mb - 4'>;
                We're having trouble loading the equipment listings. This might;
                be a temporary issue.;
              </p>;
              <div className='flex gap - 2 justify - center'>;
                <Button;
                  on_click={() =>;
                    this.set_state ({ has_error: false, error: undefined });
                  }
                  variant='outline'                >;
                  <RefreshCw className='h - 4 w - 4 mr - 2' />;
                  Try Again;
                </Button>;
                <Button;
                  on_click={() => window.location.reload ()}
                  variant='default';
                >                  Refresh Page;
                <Button on_click={() => window.location.reload ()} variant="default">;
              </p>;
              <div className="flex gap - 2 justify-center">;
                <Button;
                  on_click={() => this.set_state ({ has_error: false, error: undefined })}
                  variant="outline";
                >;
                  <RefreshCw className="h - 4 w - 4 mr-2" />;
                  Try Again;
                </Button>;
                <Button on_click={() => window.location.reload ()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>);
    }
    return this.props.children;
  }      );
    }
<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
    return this.props.children;
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} ;
<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD
=======
} ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
);
    }

    return this.props.children;
  }
<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/EquipmentErrorBoundary.tsx
