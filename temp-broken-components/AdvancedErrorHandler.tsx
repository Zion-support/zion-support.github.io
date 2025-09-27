import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Bug, Activity, Shield, Database } from 'lucide-react';

interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  timestamp: Date;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: 'javascript' | 'network' | 'validation' | 'permission' | 'system';
  userAgent: string;
  url: string;
  line?: number;
  column?: number;
  resolved: boolean;
}

interface ErrorStats {
  totalErrors: number;
  criticalErrors: number;
  highErrors: number;
  mediumErrors: number;
  lowErrors: number;
  resolvedErrors: number;
  unresolvedErrors: number;
}

interface AdvancedErrorHandlerProps {
  onErrorReport?: (error: ErrorInfo) => void;
  onErrorResolve?: (errorId: string) => void;
  maxErrors?: number;
  autoResolve?: boolean;
  className?: string;
}

export const AdvancedErrorHandler: React.FC<AdvancedErrorHandlerProps> = ({
  onErrorReport,
  onErrorResolve,
  maxErrors = 100,
  autoResolve = false,
  className = ''
}) => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<ErrorStats>({
    totalErrors: 0,
    criticalErrors: 0,
    highErrors: 0,
    mediumErrors: 0,
    lowErrors: 0,
    resolvedErrors: 0,
    unresolvedErrors: 0
  });
  const errorHandlerRef = useRef<HTMLDivElement>(null);

  // Helper functions
  const retryError = useCallback((errorId: string) => {
    setErrors(prev => prev.map(error => {
      if (error.id === errorId && error.retryCount < maxRetries) {
        return {
          ...error,
          retryCount: error.retryCount + 1,
          lastRetry: new Date()
        };
      }
      return error;
    }));
  }, [maxRetries]);

  // Error handling functions
  const handleError = useCallback((error: Error, errorInfo?: any) => {
    const errorData: ErrorInfo = {
      id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message: error.message,
      stack: error.stack,
      component: errorInfo?.componentStack || 'Unknown',
      timestamp: new Date(),
      severity: determineSeverity(error),
      category: categorizeError(error),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: getUserId(),
      sessionId: getSessionId(),
      resolved: false,
      retryCount: 0
    };

    setErrors(prev => [errorData, ...prev]);
    onError?.(errorData);

    // Auto-retry for certain types of errors
    if (enableAutoRetry && shouldRetry(error)) {
      setTimeout(() => retryError(errorData.id), 1000);
    }
  }, [onError, enableAutoRetry, retryError]);

  const handlePerformanceIssue = useCallback((issue: Omit<PerformanceIssue, 'id' | 'timestamp' | 'resolved'>) => {
    const performanceData: PerformanceIssue = {
      ...issue,
      id: `perf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      resolved: false
    };

    setPerformanceIssues(prev => [performanceData, ...prev]);
    onPerformanceIssue?.(performanceData);
  }, [onPerformanceIssue]);

  // Helper functions
  const determineSeverity = (error: Error): ErrorInfo['severity'] => {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) return 'medium';
    if (error.message.includes('Network') || error.message.includes('fetch')) return 'medium';
    if (error.message.includes('Permission') || error.message.includes('403')) return 'high';
    if (error.message.includes('Critical') || error.message.includes('Fatal')) return 'critical';
    return 'low';
  };

  const categorizeError = (error: Error): ErrorInfo['category'] => {
    if (error.name === 'TypeError' || error.name === 'ReferenceError') return 'javascript';
    if (error.message.includes('Network') || error.message.includes('fetch')) return 'network';
    if (error.message.includes('validation') || error.message.includes('required')) return 'validation';
    if (error.message.includes('Permission') || error.message.includes('403')) return 'permission';
    return 'system';
  };

  const shouldRetry = (error: Error): boolean => {
    return error.name === 'ChunkLoadError' || 
           error.message.includes('Network') || 
           error.message.includes('timeout');
  };

  const getUserId = (): string | undefined => {
    return localStorage.getItem('userId') || undefined;
  };

  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  const resolveError = useCallback((errorId: string) => {
    setErrors(prev => prev.map(error => 
      error.id === errorId ? { ...error, resolved: true } : error
    ));
  }, []);

  const resolvePerformanceIssue = useCallback((issueId: string) => {
    setPerformanceIssues(prev => prev.map(issue => 
      issue.id === issueId ? { ...issue, resolved: true } : issue
    ));
  }, []);

  const clearResolvedErrors = useCallback(() => {
    setErrors(prev => prev.filter(error => !error.resolved));
    setPerformanceIssues(prev => prev.filter(issue => !issue.resolved));
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          const duration = entry.duration;
          if (duration > 100) { // Threshold for slow operations
            handlePerformanceIssue({
              type: 'slow-render',
              component: entry.name,
              duration,
              threshold: 100,
              details: { entry }
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => observer.disconnect();
  }, [enablePerformanceMonitoring, handlePerformanceIssue]);

  // Global error handler
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      handleError(new Error(event.message), { componentStack: 'Global' });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(new Error(event.reason), { componentStack: 'Promise' });
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleError]);

  // Update stats
  useEffect(() => {
    const totalErrors = errors.length;
    const criticalErrors = errors.filter(e => e.severity === 'critical').length;
    const resolvedErrors = errors.filter(e => e.resolved).length;
    const performanceIssuesCount = performanceIssues.length;
    const avgResolutionTime = resolvedErrors > 0 ? 
      errors.filter(e => e.resolved).reduce((acc, e) => acc + (Date.now() - e.timestamp.getTime()), 0) / resolvedErrors : 0;

    setStats({
      totalErrors,
      criticalErrors,
      resolvedErrors,
      performanceIssues: performanceIssuesCount,
      avgResolutionTime
    });
  }, [errors, performanceIssues]);

  const getSeverityColor = (severity: ErrorInfo['severity']) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCategoryIcon = (category: ErrorInfo['category']) => {
    switch (category) {
      case 'javascript': return <Bug className="w-4h-4" />;
      case 'network': return <Activity className="w-4h-4" />;
      case 'validation': return <Shield className="w-4h-4" />;
      case 'permission': return <Shield className="w-4h-4" />;
      case 'system': return <Database className="w-4h-4" />;
      default: return <AlertTriangle className="w-4h-4" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={errorHandlerRef}>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AlertTriangle className="w-6 h-6" />
        {stats.totalErrors > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {stats.totalErrors}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96overflow-hidden"
          >
            <div className="p-4 border-bborder-gray-200">
              <div className="flex items-centerjustify-between">
                <h3 className="text-lg font-semiboldtext-gray-900" id="error-monitor">Error Monitor</h3>
                <div className="flexspace-x-2">
                  <button
                    onClick={clearResolvedErrors}
                    className="text-sm text-gray-500hover:text-gray-700"
                   aria-label="Clear Resolved">
                    Clear Resolved
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400hover:text-gray-600"
                  >
                    <X className="w-4h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-3text-sm">
                <div className="text-center">
                  <div className="text-2xl font-boldtext-red-600">{stats.totalErrors}</div>
                  <div className="text-gray-500">Total Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-orange-600">{stats.criticalErrors}</div>
                  <div className="text-gray-500">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-green-600">{stats.resolvedErrors}</div>
                  <div className="text-gray-500">Resolved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-blue-600">{stats.performanceIssues}</div>
                  <div className="text-gray-500">Performance</div>
                </div>
              </div>
            </div>

            <div className="overflow-y-automax-h-64">
              {errors.length === 0 && performanceIssues.length === 0 ? (
                <div className="p-4 text-centertext-gray-500">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2text-green-500" />
                  No issues detected
                </div>
              ) : (
                <div className="space-y-2p-2">
                  {errors.slice(0, 10).map((error) => (
                    <motion.div
                      key={error.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${
                        error.resolved ? 'opacity-50' : ''
                      }` }
                      onClick={() => setSelectedError(error)}
                    >
                      <div className="flex items-startspace-x-3">
                        <div className={`p-1 rounded ${getSeverityColor(error.severity)}` }>
                          {getCategoryIcon(error.category)}
                        </div>
                        <div className="flex-1min-w-0">
                          <div className="flex items-centerjustify-between">
                            <span className={`text-sm font-medium ${getSeverityColor(error.severity).split(' ')[0]}` }>
                              {error.severity.toUpperCase()}
                            </span>
                            <span className="text-xstext-gray-500">
                              {error.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1truncate">
                            {error.message}
                          </p>
                          <div className="flex items-center space-x-2mt-2">
                            <span className="text-xstext-gray-500">{error.category}</span>
                            {error.retryCount > 0 && (
                              <span className="text-xstext-blue-500">
                                Retry {error.retryCount}/{maxRetries}
                              </span>
                            )}
                            {!error.resolved && (
                              <button
                                onClick={(e) =>{
                                  e.stopPropagation();
                                  resolveError(error.id);
                                }}
                                className="text-xs text-green-600 hover:text-green-800"
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Details Modal */}
      <AnimatePresence>
        {selectedError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-centerz-50"
            onClick={() => setSelectedError(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lgfont-semibold" id="error-details">Error Details</h3>
                <button
                  onClick={() => setSelectedError(null)}
                  className="text-gray-400hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-2rounded">
                    {selectedError.message}
                  </p>
                </div>
                
                {selectedError.stack && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Stack Trace</label>
                    <pre className="mt-1 text-xs text-gray-900 bg-gray-50 p-2 roundedoverflow-x-auto">
                      {selectedError.stack}
                    </pre>
                  </div>
                )}
                
                <div className="grid grid-cols-2gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Severity</label>
                    <p className="mt-1 text-smtext-gray-900">{selectedError.severity}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <p className="mt-1 text-smtext-gray-900">{selectedError.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Component</label>
                    <p className="mt-1 text-smtext-gray-900">{selectedError.component}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Timestamp</label>
                    <p className="mt-1 text-smtext-gray-900">
                      {selectedError.timestamp.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedErrorHandler;