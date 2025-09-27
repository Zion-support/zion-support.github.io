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
<<<<<<< HEAD
      case 'javascript': return <Bug className="w-4h-4" />;
      case 'network': return <Activity className="w-4h-4" />;
      case 'validation': return <Shield className="w-4h-4" />;
      case 'permission': return <Shield className="w-4h-4" />;
      case 'system': return <Database className="w-4h-4" />;
      default: return <AlertTriangle className="w-4h-4" />;
=======
      case 'javascript': return <Bug className="w-4 h-4" />;
      case 'network': return <Activity className="w-4 h-4" />;
      case 'validation': return <Shield className="w-4 h-4" />;
      case 'permission': return <Shield className="w-4 h-4" />;
      case 'system': return <Database className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
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
    </div>
  );
};

export default AdvancedErrorHandler;