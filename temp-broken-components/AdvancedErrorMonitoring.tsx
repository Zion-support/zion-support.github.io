import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bug, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

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

interface AdvancedErrorMonitoringProps {
  onErrorReport?: (error: ErrorInfo) => void;
  onErrorResolve?: (errorId: string) => void;
  maxErrors?: number;
  autoResolve?: boolean;
  className?: string;
}

export const AdvancedErrorMonitoring: React.FC<AdvancedErrorMonitoringProps> = ({
  onErrorReport,
  onErrorResolve,
  maxErrors = 100,
  autoResolve = false,
  className = ''
}) => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [stats, setStats] = useState<ErrorStats>({
    totalErrors: 0,
    criticalErrors: 0,
    highErrors: 0,
    mediumErrors: 0,
    lowErrors: 0,
    resolvedErrors: 0,
    unresolvedErrors: 0
  });

  const resolveError = (errorId: string) => {
    setErrors(prev => prev.map(error => 
      error.id === errorId ? { ...error, resolved: true } : error
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-centerjustify-between">
            <div className="flex items-center space-x-2">
              <Bug className="h-6 w-6text-red-600" />
              <span>Advanced Error Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}` }></div>
              <span className="text-smtext-gray-600">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time error tracking and performance issue detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Stats Grid */}
          <div className="grid grid-cols-2md:grid-cols-4gap-4 mb-6">
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-red-600">{stats.totalErrors}</div>
              <div className="text-sm text-gray-600">Total Errors</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-orange-600">{stats.errorsLast24 h}</div>
              <div className="text-sm text-gray-600">Last24 h</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-purple-600">{stats.criticalErrors}</div>
              <div className="text-sm text-gray-600">Critical</div>
            </div>
            <div className="p-4border rounded-lgtext-center">
              <div className="text-2xl font-boldtext-green-600">{stats.resolvedErrors}</div>
              <div className="text-sm text-gray-600">Resolved</div>
            </div>
          </div>

          {/* Top Error Types */}
          <div className="mb-6">
            <h3 className="text-lg font-semiboldmb-3">Top Error Types</h3>
            <div className="space-y-2">
              {stats.topErrorTypes.map((errorType, index) => (
                <div key={index} className="flex items-center justify-between p-3 borderrounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{errorType.type}</span>
                    <span className="text-sm text-gray-600">{errorType.count} occurrences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-fullh-2">
                      <div 
                        className="bg-blue-600 h-2rounded-full" 
                        style={{ width: `${errorType.percentage}%` }}</p></div>
                    </div>
                    <span className="text-sm text-gray-600">{errorType.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1lg:grid-cols-2gap-6">
        {/* Recent Errors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5text-red-600" />
              <span>Recent Errors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {errors.slice(0, 5).map((error) => (
                <div 
                  key={error.id} 
                  className={`p-3border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedError?.id === error.id ? 'bg-blue-50 border-blue-200' : ''
                  }` }
                  onClick={() => setSelectedError(error)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(error.severity)}` }>
                      {error.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-500">{formatTimeAgo(error.timestamp)}</span>
                  </div>
                  <div className="flex items-center space-x-2mb-1">
                    <span className={`text-sm font-medium ${getTypeColor(error.type)}` }>
                      {error.type.toUpperCase()}
                    </span>
                    {error.resolved && (
                      <span className="text-xs bg-green-100 text-green-800 px-2py-1rounded">RESOLVED</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{error.message}</p>
                  <div className="flex items-center justify-between text-xstext-gray-500">
                    <span>{error.url}</span>
                    <div className="flexspace-x-1">
                      {error.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 px-2py-1rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Issues */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5text-orange-600" />
              <span>Performance Issues</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {performanceIssues.map((issue) => (
                <div key={issue.id} className="p-3 borderrounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(issue.severity)}` }>
                      {issue.severity.toUpperCase()}
                    </span>
                    <span className="text-xstext-gray-500">{formatTimeAgo(issue.detectedAt)}</span>
                  </div>
                  <h4 className="font-mediummb-1">{issue.description}</h4>
                  <p className="text-sm text-gray-600 mb-2">{issue.impact}</p>
                  <div className="text-xs text-blue-600 bg-blue-50 p-2rounded">
                    <strong>Solution:</strong> {issue.solution}
                  </div>
                  {issue.resolved && (
                    <div className="mt-2text-xs text-green-600 bg-green-50 p-2rounded">
                      ✓ Resolved
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Error Details Modal */}
      {selectedError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-centerz-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lgfont-semibold">Error Details</h3>
              <button 
                onClick={() => setSelectedError(null)}
                className="text-gray-500hover:text-gray-700"
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Message</label>
                <p className="text-smtext-gray-900">{selectedError.message}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Stack Trace</label>
                <pre className="text-xs bg-gray-100 p-3 roundedoverflow-x-auto">
                  {selectedError.stack || 'No stack trace available'}
                </pre>
              </div>
              <div className="grid grid-cols-2gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">URL</label>
                  <p className="text-smtext-gray-900">{selectedError.url}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">User Agent</label>
                  <p className="text-sm text-gray-900truncate">{selectedError.userAgent}</p>
                </div>
              </div>
              <div className="flex justify-endspace-x-2">
                <button 
                  onClick={() => setSelectedError(null)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 roundedhover:bg-gray-50"
                </button>
                {!selectedError.resolved && (
                  <button 
                    onClick={() => {
                      resolveError(selectedError.id);
                      setSelectedError(null);
                    }}
                    className="px-4py-2bg-green-600 text-white roundedhover:bg-green-700"
                  </button>
                )}
              </div>
            </div>          </div>
        </div>
        <div className="p-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">
              {stats.totalErrors}
            </div>
            <p className="text-gray-600 dark:text-gray-400">Total Errors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedErrorMonitoring;