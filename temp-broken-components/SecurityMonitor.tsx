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

interface SecurityMonitorProps {
  onScanComplete?: (results: SecurityScanResult[]) => void;
  onVulnerabilityFound?: (vulnerability: SecurityScanResult) => void;
  className?: string;
}

export const SecurityMonitor: React.FC<SecurityMonitorProps> = ({
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
  }, [onScanComplete]);

  useEffect(() => {
    performSecurityScan();
  }, [performSecurityScan]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flexitems-center">
          <Shield className="w-6 h-6 mr-2text-red-600" />
          Security Monitor
        </h2>
        <div className="flex items-center text-smtext-gray-500">
          <Clock className="w-4 h-4mr-1" />
          Last scan: {metrics.lastScan.toLocaleTimeString()}
        </div>
        <button
          onClick={performSecurityScan}
          disabled={isScanning}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {isScanning ? 'Scanning...' : 'Run Scan'}
        </button>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-boldtext-red-600">{metrics.activeThreats}</div>
          <div className="text-smtext-gray-600">Active Threats</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-boldtext-green-600">{metrics.resolvedThreats}</div>
          <div className="text-smtext-gray-600">Resolved</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-boldtext-blue-600">{metrics.protectedAssets}</div>
          <div className="text-smtext-gray-600">Protected Assets</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-boldtext-purple-600">{metrics.blockedRequests}</div>
          <div className="text-smtext-gray-600">Blocked Requests</div>
        </div>
      </div>

      {/* Security Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Security Score</span>
          <span className="text-smtext-gray-500">{metrics.securityScore.toFixed(1)}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-fullh-2">
          <div 
            className={`h-2 rounded-full ${
              metrics.securityScore >= 80 ? 'bg-green-500' : 
              metrics.securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
            }` }
            style={{ width: `${metrics.securityScore}%` }}
          ></div>
        </div>
      </div>

      {/* Security Events */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900mb-4" id="recent-security-events">Recent Security Events</h3>
        <AnimatePresence>
          {events.slice(0, 5).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg p-4 ${getSeverityColor(event.severity)}` }
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flexitems-center">
                  {getTypeIcon(event.type)}
                  <span className="ml-2font-medium">{event.title}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${getStatusColor(event.status)}` }>
                  {event.status}
                </div>
              </div>
              <p className="text-sm text-gray-600mb-2">{event.description}</p>
              <div className="flex items-center justify-between text-xstext-gray-500">
                <span>Source: {event.source}</span>
                <span>{event.timestamp.toLocaleString()}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isLoading && (
        <div className="flex items-center justify-centerpy-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2border-red-600"></div>
        </div>
      )}
    </div>
  );
};

export default SecurityMonitor;