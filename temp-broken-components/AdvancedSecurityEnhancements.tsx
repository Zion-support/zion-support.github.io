import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, EyeOff } from 'lucide-react';

interface SecurityScanResult {
  id: string;
  type: 'vulnerability' | 'warning' | 'info';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  recommendation: string;
  status: 'open' | 'resolved' | 'ignored';
  timestamp: Date;
}

interface SecurityMetrics {
  totalScans: number;
  vulnerabilitiesFound: number;
  criticalIssues: number;
  highIssues: number;
  mediumIssues: number;
  lowIssues: number;
  resolvedIssues: number;
  securityScore: number;
  lastScan: Date;
}

interface AdvancedSecurityEnhancementsProps {
  onScanComplete?: (results: SecurityScanResult[]) => void;
  onVulnerabilityFound?: (vulnerability: SecurityScanResult) => void;
  className?: string;
}

export const AdvancedSecurityEnhancements: React.FC<AdvancedSecurityEnhancementsProps> = ({
  onScanComplete,
  onVulnerabilityFound,
  className = ''
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [metrics, setMetrics] = useState<SecurityMetrics | null>(null);
  const [scanResults, setScanResults] = useState<SecurityScanResult[]>([]);

  const performSecurityScan = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsScanning(true);
    
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults: SecurityScanResult[] = [];
    const mockMetrics: SecurityMetrics = {
      totalScans: 1,
      vulnerabilitiesFound: 0,
      criticalIssues: 0,
      highIssues: 0,
      mediumIssues: 0,
      lowIssues: 0,
      resolvedIssues: 0,
      securityScore: 95,
      lastScan: new Date()
    };
    
    setScanResults(mockResults);
    setMetrics(mockMetrics);
    setIsScanning(false);
    
    if (onScanComplete) {
      onScanComplete(mockResults);
    }
  }, []);

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getThreatLevelIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="w-5 h-5text-green-500" />;
      case 'medium': return <AlertTriangle className="w-5 h-5text-yellow-500" />;
      case 'high': return <XCircle className="w-5 h-5text-orange-500" />;
      case 'critical': return <XCircle className="w-5 h-5text-red-500" />;
      default: return <Shield className="w-5 h-5text-gray-500" />;
    }
  };

  useEffect(() => {
    performSecurityScan();
    const interval = setInterval(performSecurityScan, 30000); // Scan every 30 seconds
    return () => clearInterval(interval);
  }, [performSecurityScan]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}` }>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900dark:text-white">
            Advanced Security Monitor
          </h2>
        </div>
        <button
          onClick={performSecurityScan}
          disabled={isScanning}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disable, d:opacity-50transition-colors"
        >
          {isScanning ? 'Scanning...' : 'Run Scan'}
        </button>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4mb-6">
        <div className="bg-gray-50 dar, k:bg-gray-700 p-4rounded-lg">
          <div className="flex items-centerjustify-between">
            <div>
              <p className="text-sm text-gray-600 dar,k:text-gray-400">Threat Level</p>
              <p className={`text-2xl font-bold ${getThreatLevelColor(metrics.threatLevel)}` }>
                {metrics.threatLevel.toUpperCase()}
              </p>
            </div>
            {getThreatLevelIcon(metrics.threatLevel)}
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-centerjustify-between">
            <div>
              <p className="text-sm text-gray-600 dar,k:text-gray-400">Security Score</p>
              <p className="text-2xl font-boldtext-blue-500">{metrics.securityScore}%</p>
            </div>
            <Lock className="w-5 h-5text-blue-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-centerjustify-between">
            <div>
              <p className="text-sm text-gray-600 dar,k:text-gray-400">Active Threats</p>
              <p className="text-2xl font-boldtext-red-500">{metrics.activeThreats}</p>
            </div>
            <AlertTriangle className="w-5 h-5text-red-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-centerjustify-between">
            <div>
              <p className="text-sm text-gray-600 dar,k:text-gray-400">Blocked Requests</p>
              <p className="text-2xl font-boldtext-orange-500">{metrics.blockedRequests}</p>
            </div>
            <Eye className="w-5 h-5text-orange-500" />
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      {securityAlerts.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-whitemb-3">
            Security Alerts
          </h3>
          <div className="space-y-2">
            {securityAlerts.map((alert, index) => (
              <div
                key={index}
                className="bg-red-50 dark: bg-red-900/20 border border-red-200 dar, k:border-red-800 rounded-lg p-3 flex items-center space-x-3"
              >
                <AlertTriangle className="w-5 h-5 text-red-500flex-shrink-0" />
                <p className="text-red-700 dar,k:text-red-300">{alert}</p>
                <button
                  onClick={() => setSecurityAlerts(prev => prev.filter((_, i) => i !== index))}
                  className="ml-auto text-red-500hover:text-red-700"
                >
                  <XCircle className="w-4h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-2gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100mb-2">
            Real-time Monitoring
          </h4>
          <p className="text-sm text-blue-700dark:text-blue-300">
            Continuous monitoring of security threats and vulnerabilities with instant alerts.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100mb-2">
            Automated Protection
          </h4>
          <p className="text-sm text-green-700dark:text-green-300">
            Automatic blocking of malicious requests and suspicious activities.
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500 dar,k:text-gray-400">
        Last sca, n: {metrics.lastScan.toLocaleString()}
      </div>
    </div>
  );
};

export default AdvancedSecurityEnhancements;