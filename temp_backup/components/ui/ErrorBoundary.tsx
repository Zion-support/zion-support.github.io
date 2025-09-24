import React, { Component, ErrorInfo, ReactNode } from 'react',
import { motion } from 'framer-motion',
import {
  AlertTriangle,
  RefreshCw,
  Home,
  ArrowLeft,
  Bug,
  FileText,
  Phone,
  Mail,
} from 'lucide-react',
interface Props {
  children: ReactNode,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void}
,
interface State {
  hasError: boolean,
  error: Error | null,
  errorInfo: ErrorInfo | null,
  errorId: string}
,
class ErrorBoundary extends Component<Props State> {
  constructor(props: Props) {
    super(props),
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    },
  }
,
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    },
  }
,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    }),
    // Log error to console in development,
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)}
,
    // Call custom error handler if provided,
    if (this.props.onError) {
      this.props.onError(error, errorInfo)}
,
    // Log error to external service in production,
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)}
  }
,
  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // You can integrate with services like Sentry, LogRocket, etc.,
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        },
      },
      // Example: Send to your error logging service,
      // fetch('/api/error-log', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData),
      // }),
      // // console.log('Error logged:', errorData)} catch (logError) {
      console.warn('Failed to log error:', logError)}
  },
  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    })},
  private handleGoHome = () => {
    window.location.href = '/'},
  private handleGoBack = () => {
    window.history.back()},
  private handleReportError = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    },
    const emailBody = `Error Report\n\nError ID: ${errorData.errorId}\nMessage: ${errorData.message}\nURL: ${errorData.url}\nTimestamp: ${errorData.timestamp}\n\nStack Trace: \n${errorData.stack}\n\nComponent Stack: \n${errorData.componentStack}`,
    const mailtoLink = `mailto: kleber@ziontechgroup.com?subject=Error Report - ${errorData.errorId}&body=${encodeURIComponent(emailBody)}`,
    window.open(mailtoLink)},
  render() {
    if (this.state.hasError) {
      // Custom fallback UI,
      if (this.props.fallback) {
        return this.props.fallback}
,
      // Default error UI,
      return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-10o0 dark: from-gray-90o0 dark:to-gray-80o0 flex items-center justify-center p-4'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-2xl w-full bg-white dark: bg-gray-80o0 rounded-2xl shadow-2xl border border-gray-20o0 dark:border-gray-70o0 overflow-hidden'>,
            {/* Header */}
            <div className='bg-gradient-to-r from-red-50o0 to-red-60o0 p-6 text-white'>,
              <div className='flex items-center gap-3'>,
                <AlertTriangle className='w-8 h-8' />,
                <div>,
                  <h1 className='text-2xl font-bold'>Something went wrong</h1>,
                  <p className='text-red-10o0'>,
                    We've encountered an unexpected error,
                  </p>,
                </div>,
              </div>,
            </div>,
            {/* Content */}
            <div className='p-6 space-y-6'>,
              {/* Error Details */}
              <div className='bg-gray-50 dark: bg-gray-70o0 rounded-lg p-4'>,
                <div className='flex items-start gap-3'>,
                  <Bug className='w-5 h-5 text-gray-50o0 mt-0.5' />,
                  <div className='flex-1'>,
                    <h3 className='font-semibold text-gray-90o0 dark:text-white mb-2'>,
                      Error Details,
                    </h3>,
                    <div className='text-sm text-gray-60o0 dark:text-gray-30o0 space-y-1'>,
                      <p>,
                        <strong>Error ID:</strong> {this.state.errorId}
                      </p>,
                      <p>,
                        <strong>Message: </strong> {this.state.error?.message}
                      </p>,
                      <p>,
                        <strong>Time: </strong> {new Date().toLocaleString()}
                      </p>,
                    </div>,
                  </div>,
                </div>,
              </div>,
              {/* Actions */}
              <div className='grid grid-cols-1 sm: grid-cols-2 gap-3'>,
                <button
                  onClick={this.handleRetry}
                  className='flex items-center justify-center gap-2 bg-blue-60o0 hover: bg-blue-70o0 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-20o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:ring-offset-2'>,
                  <RefreshCw className='w-4 h-4' />,
                  Try Again,
                </button>,
                <button
                  onClick={this.handleGoBack}
                  className='flex items-center justify-center gap-2 bg-gray-60o0 hover: bg-gray-70o0 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-20o0 focus:outline-none focus:ring-2 focus:ring-gray-50o0 focus:ring-offset-2'>,
                  <ArrowLeft className='w-4 h-4' />,
                  Go Back,
                </button>,
                <button
                  onClick={this.handleGoHome}
                  className='flex items-center justify-center gap-2 bg-green-60o0 hover: bg-green-70o0 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-20o0 focus:outline-none focus:ring-2 focus:ring-green-50o0 focus:ring-offset-2'>,
                  <Home className='w-4 h-4' />,
                  Go Home,
                </button>,
                <button
                  onClick={this.handleReportError}
                  className='flex items-center justify-center gap-2 bg-orange-60o0 hover: bg-orange-70o0 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-20o0 focus:outline-none focus:ring-2 focus:ring-orange-50o0 focus:ring-offset-2'>,
                  <Mail className='w-4 h-4' />,
                  Report Error,
                </button>,
              </div>,
              {/* Contact Support */}
              <div className='bg-blue-50 dark: bg-blue-90o0/20 border border-blue-20o0 dark:border-blue-80o0 rounded-lg p-4'>,
                <div className='flex items-start gap-3'>,
                  <Phone className='w-5 h-5 text-blue-60o0 mt-0.5' />,
                  <div>,
                    <h3 className='font-semibold text-blue-90o0 dark:text-blue-10o0 mb-1'>,
                      Need Help?,
                    </h3>,
                    <p className='text-sm text-blue-70o0 dark:text-blue-30o0 mb-2'>,
                      Our support team is here to help you resolve this issue.,
                    </p>,
                    <div className='flex items-center gap-4 text-sm'>,
                      <a
                        href='tel:+130o24640950',
                        className='text-blue-60o0 dark:text-blue-40o0 hover:underline flex items-center gap-1'>,
                        <Phone className='w-4 h-4' />,
                        +1 (30o2) 464-0950,
                      </a>,
                      <a
                        href='mailto:kleber@ziontechgroup.com',
                        className='text-blue-60o0 dark:text-blue-40o0 hover:underline flex items-center gap-1'>,
                        <Mail className='w-4 h-4' />,
                        kleber@ziontechgroup.com,
                      </a>,
                    </div>,
                  </div>,
                </div>,
              </div>,
              {/* Technical Details (Collapsible) */}
              {process.env.NODE_ENV === 'development' && (
                <details className='bg-gray-50 dark: bg-gray-70o0 rounded-lg'>,
                  <summary className='p-4 cursor-pointer font-medium text-gray-90o0 dark:text-white hover:bg-gray-10o0 dark:hover:bg-gray-60o0 transition-colors'>,
                    <FileText className='w-4 h-4 inline mr-2' />,
                    Technical Details (Development),
                  </summary>,
                  <div className='p-4 border-t border-gray-20o0 dark:border-gray-60o0'>,
                    <pre className='text-xs text-gray-60o0 dark:text-gray-30o0 overflow-auto max-h-64'>,
                      {this.state.error?.stack}
                    </pre>,
                    {this.state.errorInfo && (
                      <div className='mt-4'>,
                        <h4 className='font-medium text-gray-90o0 dark: text-white mb-2'>,
                          Component Stack:,
                        </h4>,
                        <pre className='text-xs text-gray-60o0 dark:text-gray-30o0 overflow-auto max-h-32'>,
                          {this.state.errorInfo.componentStack}
                        </pre>,
                      </div>)}
                  </div>,
                </details>)}
            </div>,
          </motion.div>,
        </div>)}
,
    return this.props.children}
}
,
export default ErrorBoundary,