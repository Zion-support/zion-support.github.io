import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, HardDrive, Wifi, Battery, Monitor } from 'lucide-react';

interface SystemMetrics {
  cpu: {
    usage: number;
    cores: number;
    temperature: number;
  };
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  disk: {
    used: number;
    total: number;
    percentage: number;
  };
  network: {
    upload: number;
    download: number;
    latency: number;
  };
  uptime: number;
  timestamp: Date;
}

interface AdvancedSystemMonitorProps {
  onMetricsUpdate?: (metrics: SystemMetrics) => void;
  refreshInterval?: number;
  className?: string;
}

export const AdvancedSystemMonitor: React.FC<AdvancedSystemMonitorProps> = ({
  onMetricsUpdate,
  refreshInterval = 5000,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const collectSystemMetrics = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsMonitoring(true);
    
    // Simulate metrics collection
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockMetrics: SystemMetrics = {
      cpu: {
        usage: 45,
        cores: 8,
        temperature: 65
      },
      memory: {
        used: 8.5,
        total: 16,
        percentage: 53
      },
      disk: {
        used: 250,
        total: 500,
        percentage: 50
      },
      network: {
        upload: 12.5,
        download: 45.2,
        latency: 25
      },
      uptime: 86400,
      timestamp: new Date()
    };
    
    setMetrics(mockMetrics);
    setIsMonitoring(false);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(mockMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    collectSystemMetrics();
    const interval = setInterval(collectSystemMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [collectSystemMetrics, refreshInterval]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Monitor className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">System Monitor</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span className="text-sm text-gray-600">
            {isMonitoring ? 'Monitoring' : 'Stopped'}
          </span>
        </div>
      </div>
      
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">CPU Usage</span>
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.cpu.usage}%
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Memory</span>
              <Activity className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.memory.percentage}%
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Disk Usage</span>
              <HardDrive className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.disk.percentage}%
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Network</span>
              <Wifi className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metrics.network.latency}ms
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSystemMonitor;