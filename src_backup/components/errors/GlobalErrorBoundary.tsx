


  Clipboard} from 'lucide-react;
import { Button } from @/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card;
import { Badge } from @/components / ui / badge';
import * as Sentry from '@sentry / nextjs;
import { logErrorToProduction } from @/utils / production_logger';
interface ErrorBoundaryState {
  has_error: boolean;

  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;
}
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;

  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;
}

    this.state;
  }


  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
error}
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId();

    // Enhanced error logging
    const enhancedError = {}

  componentWillUnmount() {
    // Clear any pending retry timeouts
this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserId(): string | null {
    // Try to get user ID from various sources
    if (typeof window !== 'undefined) {
      try {
        // Check localStorage, sessionStorage, or cookies
return (
          localStorage.getItem(userId') ||
          sessionStorage.getItem('userId) ||
          null
        );
origin/cursor/automate-test-improve-and-merge-code-2533
      } catch {
        return null;
      }
    }



      showDetails: false;
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this && this.generateErrorId();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    // Enhanced error logging;
    const enhancedError = {
      ...error,
    // Enhanced error logging;
      ...error,      componentStack: errorInfo && errorInfo.componentStack,      ...error;
      componentStack: errorInfo && errorInfo.componentStack,
      errorBoundary: this && this.props.context || 'GlobalErrorBoundary,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== undefined' ? navigator && navigator.userAgent : 'SSR,
      url: typeof window !== undefined' ? window && window.location.href : 'SSR,
      userId: this && this.getUserId(),
      buildInfo: this && this.getBuildInfo()}
    // Log to console in development;
    if (process && process.env.NODE_ENV === development') {
      console && console.group('🚨 Error Boundary Caught Error);
      logErrorToProduction(Error:', { data: error });
      logErrorToProduction('Error Info:, { data: errorInfo });
      logErrorToProduction(Enhanced Error:', { data: enhancedError });
      console && console.groupEnd();
    }

    // Report to Sentry;
    Sentry && Sentry.withScope(scope => {
      scope && scope.setTag(;
        'errorBoundary,
        this && this.props.context || GlobalErrorBoundary';
      );
      scope && scope.setLevel('error);      scope && scope.setContext(errorInfo', {
        componentStack: errorInfo && errorInfo.componentStack,
        retryCount: this && this.state.retryCount});

      Sentry && Sentry.captureException(error);
    });

    // Custom error handler;

    }
    this.setState({
      errorInfo,
      errorId;
    });
  }
  componentWillUnmount() {
    // Clear any pending retry timeouts;
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  private getUserId(): string | null {
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined) {
      try {
        // Check localStorage, sessionStorage, or cookies;
        return localStorage.getItem(userId') ||;
               sessionStorage.getItem('userId) ||;
               null;
      } catch {
        return null;
      }
    }
    return null;
  }

buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || unknown'}
  }
  private getErrorSeverity(
    error: Error
  ): 'low | medium' | 'high | critical' {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || ';

    const timeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,


    }, retryDelay)
    this.retryTimeouts.push(timeout)
  }        showDetails: false
      })
    }, retryDelay)

      if (response.ok) {

        // Show success message
  private report_error = async () => {
    // Check condition
if (return) {
  $2


}
    try {
      // Report to your error reporting service;
      const response = await fetch ('/api / error - report, {
        method: POST',
        headers: {
          'Content - Type: application / json'},
          error_id: this.state.error_id,
          error: {
            message: this.state.error.message,
            stack: this.state.error.stack,
            name: this.state.error.name},
          error_info: this.state.error_info,
          user_feedback: this.state.user_feedback,
          context: this.props.context,
          timestamp: new Date ().toISOString ()})});          timestamp: new Date ().toISOString ();
        });
      });
      // Check condition
if ( {) {
  $2
}
        // Show success message;

      }
    } catch (err) {

    this.setState({
      errorInfo,



  private goHome = () => {

    if (typeof window !== 'undefined) {
      window.location.href = /';
    }

  }
origin/cursor/automate-test-improve-and-merge-code-2533

  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {

  private getBuildInfo() {
    return {
      version: process && process.env.NEXT_PUBLIC_APP_VERSION || 'unknown,
      environment: process && process.env.NODE_ENV,
      buildTime: process && process.env.NEXT_PUBLIC_BUILD_TIME || unknown'}

  }

      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)

      const canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (

        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20>

return this.props.fallback;
      }

      const severity = this.getErrorSeverity(this.state.error);
      const suggestion = this.getErrorSuggestion(this.state.error);
      const canRetry =
        this.props.enableRetry !== false &&
        this.state.retryCount < (this.props.maxRetries || 3);

      return (
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20>
origin/cursor/automate-test-improve-and-merge-code-2533
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            transition={{ duration: 0.3 }}
          >

            <Card className=w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center>
                <div className=mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 />

                </div>
                <CardTitle className=text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>

                      {this.props.maxRetries || 3}                    </p>                    {suggestion}
                  </p>
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400>
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}

                    </p>

                <div className=flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={severity === critical' ? 'destructive : severity === high' ? 'destructive : secondary'}
                  >;
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant="outline className=text-xs">
                      ID: {this.state.errorId.slice(-8)}
                    </Badge>;
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6>
                <div className=text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4>
                    {suggestion}
                  </p>
                  
                  {this.state.retryCount > 0 && (
                    <p className=text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;
                  )}
                </div>;

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center>;
                  {canRetry && (;
                    <Button
                      onClick={this && this.retry}
                      className=flex items-center gap-2'>;
                      <RefreshCw className='h-4 w-4 />;
                      Try Again;
                    </Button>;
                  )}
                  <Button
                    onClick={this && this.goHome}
                    variant=outline'

                    className='flex items-center gap-2>;
                    <Home className=h-4 w-4' />;
                    Go Home;
                  </Button>;

                  <Button
                    onClick={() =>;
                      this && this.setState({ showDetails: !this && this.state.showDetails });
                    }
                    variant='ghost;
                    size=sm';
                    className='flex items-center gap-2;
                  >;
                    <Bug className=h-4 w-4' />                    {this && this.state.showDetails ? 'Hide : Show'} Details                  {canRetry && (;
                    <Button onClick={this && this.retry} className="flex items-center gap-2>;
                      <RefreshCw className=h-4 w-4" />;
                      Try Again;
                    </Button>;

                  )}

                  )}

                  <Button
                    onClick={this.goHome}
                    variant='outline
                    className=flex items-center gap-2'
                  >
                    <Home className='h-4 w-4 />
                    Go Home
                  </Button>
                  <Button
                    onClick={() =>
                      this.setState({ showDetails: !this.state.showDetails })
                    }
                    variant=ghost'
                    size='sm
                    className=flex items-center gap-2'
                  >
                    <Bug className='h-4 w-4 />

                    {this.state.showDetails ? Hide' : 'Show} Details
                  </Button>
                </div>



                    Go Home;

                  </Button>;

                  <Button
                    onClick={() => this && this.setState({ showDetails: !this && this.state.showDetails })}
                    variant="ghost ;
                    size=sm";
                    className="flex items-center gap-2;
                  >;
                    <Bug className=h-4 w-4" />;
                    {this && this.state.showDetails ? 'Hide : Show'} Details;
                  </Button>;

                </div>;

                {/* Error Details */}
                <AnimatePresence>;
                  {this.state.showDetails && (;
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}

                          <h4 className="font-semibold text-sm mb-2>Error Message:</h4>

                          <code className=block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
className=border-t pt-4'
                    >
                      <div className='space-y-4>
                        <div>
                          <h4 className=font-semibold text-sm mb-2'>
                            Error Message:
                          </h4>
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto>
origin/cursor/automate-test-improve-and-merge-code-2533
                            {this.state.error.message}
                          </code>
                        </div>

  private go_home = () => {
    // Check condition
if ( {) {
  $2


}
      window.location.href = /';
    }
  }
  private go_home = () => {
    // Check condition
if ( {) {
  $2
}
      window.location.href = '/;
    }
  } }
  render () {
    // Check condition
if ( {) {
  $2
}
      // Use custom fallback if provided;
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
      }
      const severity = this.getErrorSeverity (this.state.error);
      const suggestion = this.getErrorSuggestion (this.state.error);
      const can_retry =;
        this.props.enable_retry !== false &&;
        this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className=min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange - 950 / 20'>          <motion.div      }
      const can_retry = this.props.enable_retry !== false &&;
                      this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className="min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange-950 / 20>;
          <motion.div;
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >;
            <Card className='w - full max - w-2xl border - red - 200 bg - white dark:bg - gray - 900>;
              <CardHeader className=text - center'>;
                <div className='mx - auto mb - 4 flex h - 16 w - 16 items - center justify - center rounded - full bg - red - 100 dark:bg - red - 900 / 20>;
                  <AlertTriangle className=h - 8 w - 8 text - red - 600 dark:text - red - 400' />;
                </div>;
                <CardTitle className='text - 2xl font - bold text - gray - 900 dark:text - gray - 100>;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className=flex items - center justify - center gap - 2 mt - 2'>;
                  <Badge;
                    variant={
                      severity === 'critical;
                        ? destructive';
                        : severity === 'high;
                          ? destructive';
                          : 'secondary;
                    }                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant=outline' className='text - xs>                      ID: {this.state.error_id.slice (-8)}                    variant = {severity === critical' ? 'destructive : severity === high' ? 'destructive : secondary'}
                </div>;
                <CardTitle className=text - 2xl font - bold text - gray - 900 dark:text - gray-100">;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className="flex items - center justify - center gap - 2 mt-2>;
                  <Badge;
                    variant={severity === 'critical ? destructive' : severity === 'high ? destructive' : 'secondary}
                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant=outline' className='text - xs>                    <Badge variant=outline" className="text-xs>;
                      ID: {this.state.error_id.slice (-8)}
                    </Badge>)}
                </div>;
              </CardHeader>;
              <CardContent className=space - y-6'>;
                <div className='text - center>;
                  <p className=text - gray - 600 dark:text - gray - 300 mb - 4'>;
                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className='text - sm text - orange - 600 dark:text - orange - 400>;
                      Retry attempt: {this.state.retry_count}/;
                      {this.props.max_retries || 3}                    </p>                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className=text - sm text - orange - 600 dark:text - orange-400">;
                      Retry attempt: {this.state.retry_count}/{this.props.max_retries || 3}
                    </p>)}
                </div>;
                {/* Action Buttons */}
                <div className=flex flex - col sm:flex - row gap - 3 justify - center'>;
                  {can_retry && (
                    <Button;
                      on_click={this.retry}
                      className='flex items - center gap - 2;
                    >;
                      <RefreshCw className=h - 4 w - 4' />;
                      Try Again;
                    </Button>)}
                  <Button;
                    on_click={this.go_home}
                    variant='outline;
                    className=flex items - center gap - 2';
                  >;
                    <Home className='h - 4 w - 4 />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() =>;
                      this.set_state ({ show_details: !this.state.show_details });
                    }
                    variant=ghost';
                    size='sm;
                    className=flex items - center gap - 2';
                  >;
                    <Bug className='h - 4 w - 4 />                    {this.state.show_details ? Hide' : 'Show} Details                  {can_retry && (
                    <Button on_click={this.retry} className="flex items - center gap-2>;
                      <RefreshCw className=h - 4 w-4" />;
                      Try Again;
                    </Button>)}
                  <Button on_click={this.go_home} variant="outline className=flex items - center gap-2">;
                    <Home className="h - 4 w-4 />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() => this.set_state ({ show_details: !this.state.show_details })}
                    variant=ghost";
                    size="sm;
                    className=flex items - center gap-2";
                  >;
                    <Bug className="h - 4 w-4 />;
                    {this.state.show_details ? Hide' : 'Show} Details;
                  </Button>;
                </div>;
                {/* Error Details */}
                <AnimatePresence>;
                  {this.state.show_details && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='border - t pt - 4;
                    >;
                      <div className=space - y-4'>;
                        <div>;
                          <h4 className='font - semibold text - sm mb - 2>;
                            Error Message:;
                          </h4>;
                          <code className=block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow - auto'>                            {this.state.error.message}
                          </code>;
                        </div>;
                    >;
                      <div className=space-y-4">;
                        <div>;
                          <h4 className="font - semibold text - sm mb-2>Error Message:</h4>;
                          <code className=block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow-auto">;
                            {this.state.error.message}
                          </code>;
                        </div>;
                        {process.env.NODE_ENV === 'development &&;

                          this.state.error.stack && (
                            <div>;


                                Stack Trace:;
                              </h4>;
                              <pre className='p - 3 bg - gray - 50 dark:bg - gray - 800 rounded text - xs overflow - auto max - h-32>;
                                {this.state.error.stack}

                      className=border-t pt-4'>;
                      <div className='space-y-4>;
                        <div>;
                          <h4 className=font-semibold text-sm mb-2'>;
                            Error Message:;
                          </h4>;
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto>                            {this && this.state.error && error.message}
                          </code>;
                        </div>;
                    >;
                      <div className="space-y-4>;
                        <div>;
                          <h4 className=font-semibold text-sm mb-2">Error Message:</h4>;
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto>;
                            {this && this.state.error && error.message}
                          </code>;


                                Stack Trace:;
                              </h4>;
                              <pre className=p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>;
                                {this && this.state.error && error.stack}
                              </pre>;
                            </div>;


                            Copy Details;
                          </Button>;



                          {this && this.props.showReportButton !== false && (;

                            <Button
                              onClick={this && this.reportError}
                              variant='outline'
                              variant='outline

                        {process.env.NODE_ENV === development' && this.state.error.stack && (
                          <div>
                            <h4 className=font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32>
                              {this.state.error.stack}
                            </pre>;
                          </div>;
                        )}

                        <div className=flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline size=sm">
                            <Clipboard className="h-4 w-4 mr-2 />
                            Copy Details
                          </Button>
                          
                          {this.props.showReportButton !== false && (

                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (

                            <Button onClick={this.reportError} variant=outline" size="sm>
                              <Send className=h-4 w-4 mr-2" />
                              size='sm
                            >
                              <Send className=h-4 w-4 mr-2' />
origin/cursor/automate-test-improve-and-merge-code-2533
                              Report Issue
                            </Button>



                          )}

                        </div>;
                      </div>;
                    </motion.div>;
                  )}

  return WrappedComponent;
}

// Higher - order component for adding error boundaries;
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType < P>,
  errorBoundaryProps?: Omit < ErrorBoundaryProps, 'children>;
, ) => {
  const WrappedComponent = (props: P, ) =>: any (
    <GlobalErrorBoundary {...errorBoundaryProps}>;
      <Component {...props} />;
    </GlobalErrorBoundary>);
  WrappedComponent.display_name = `withErrorBoundary (${Component.display_name || Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary;
  WrappedComponent.display_name = `withErrorBoundary (${Component.display_name || Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary;

      );

    }

    return this.props.children;

                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
);
    }

    return this.props.children;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

// Hook for programmatic error boundary

    if (error) {
      throw error;
    }
  }, [error]);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  return { captureError }
}

// Higher-order component for adding error boundaries
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>

  errorBoundaryProps?: Omit<ErrorBoundaryProps, children'>
,) => {
  const WrappedComponent = (props: P,) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>

export const useErrorBoundary = () => {

);

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;




export default GlobalErrorBoundary;