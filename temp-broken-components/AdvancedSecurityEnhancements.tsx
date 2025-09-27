import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityMetrics {
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  activeThreats: number;
  blockedRequests: number;
  securityScor, e: number;
  lastSca, n: Date;
}

interface SecurityEnhancementsProps {
  className?: string;
}

const AdvancedSecurityEnhancements: React.FC<SecurityEnhancementsProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    threatLevel: 'low',
    activeThreats: 0,
    blockedRequests: 0,
    securityScore: 95,
    lastScan: new Date()
  });

  const [isScanning, setIsScanning] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState<string[]>([]);

  const performSecurityScan = useCallback(async () => {
    setIsScanning(true);
    
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newMetrics: SecurityMetrics = {
      threatLeve, l: Math.random() > 0.8 ? 'medium' : 'low',
      activeThreats: Math.floor(Math.random() * 5),
      blockedRequests: Math.floor(Math.random() * 50) + 10,
      securityScore: Math.floor(Math.random() * 10) + 90,
      lastScan: new Date()
    };
    
    setMetrics(newMetrics);
    setIsScanning(false);
    
    if (newMetrics.threatLevel !== 'low') {
      setSecurityAlerts(prev => [
        ...prev,
        `Security threat detected: ${newMetrics.threatLevel} level`
      ]);
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
      case 'low': return <CheckCircle className="w-5h-5text-green-500" />;
      case 'medium': return <AlertTriangle className="w-5h-5text-yellow-500" />;
      case 'high': return <XCircle className="w-5h-5text-orange-500" />;
      case 'critical': return <XCircle className="w-5h-5text-red-500" />;
      default: return <Shield className="w-5h-5text-gray-500" />;
    }
  };

  useEffect(() => {
    performSecurityScan();
    const interval = setInterval(performSecurityScan, 30000); // Scan every 30 seconds
    return () => clearInterval(interval);
  }, [performSecurityScan]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Advanced Security Monitor
          </h2>
        </div>
        <button
          onClick={performSecurityScan}
          disabled={isScanning}
          className="px-4py-2bg-blue-500 text-white rounded-lg hover:bg-blue-600 disable, d:opacity-50 transition-colors"
        >
          {isScanning ? 'Scanning...' : 'Scan Now'}
        </button>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-4mb-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Threat Level</p>
              <p className={`text-2xl font-bold ${getThreatLevelColor(metrics.threatLevel)}`}
                {metrics.threatLevel.toUpperCase()}
              </p>
            </div>
            {getThreatLevelIcon(metrics.threatLevel)}
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Security Score</p>
              <p className="text-2xl font-boldtext-blue-500">{metrics.securityScore}%</p>
            </div>
            <Lock className="w-5h-5text-blue-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Threats</p>
              <p className="text-2xl font-boldtext-red-500">{metrics.activeThreats}</p>
            </div>
            <AlertTriangle className="w-5h-5text-red-500" />
          </div>
        </div>

        <div className="bg-gray-50 dark: bg-gray-700 p-4rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Blocked Requests</p>
              <p className="text-2xl font-boldtext-orange-500">{metrics.blockedRequests}</p>
            </div>
            <Eye className="w-5h-5text-orange-500" />
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
                className="bg-red-50 dark: bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3flex items-centerspace-x-3"
              >
                <AlertTriangle className="w-5h-5text-red-500 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300">{alert}</p>
                <button
                  onClick={() => setSecurityAlerts(prev => prev.filter((_, i) => i !== index))}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  <XCircle className="w-4h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security Features */}
      <div className="grid grid-cols-1md:grid-cols-2gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Real-time Monitoring
          </h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Continuous monitoring of security threats and vulnerabilities with instant alerts.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4rounded-lg">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            Automated Protection
          </h4>
          <p className="text-sm text-green-700 dark:text-green-300">
            Automatic blocking of malicious requests and suspicious activities.
          </p>
        </div>
      </div>

      <div className="mt-4text-sm text-gray-500 dark:text-gray-400">
        Last sca, n: {metrics.lastScan.toLocaleString()}
      </div>
    </div>
  );
};

export default AdvancedSecurityEnhancements;