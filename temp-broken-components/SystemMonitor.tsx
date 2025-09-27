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

interface SystemMonitorProps {
  onMetricsUpdate?: (metrics: SystemMetrics) => void;
  refreshInterval?: number;
  className?: string;
}

export const SystemMonitor: React.FC<SystemMonitorProps> = ({
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
      uptime: 99.9,
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
    <div className="space-y-6">
      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CPU Usage</h3>
            <Cpu className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {metrics?.cpu.usage || 0}%
          </div>
          <p className="text-gray-600 dark:text-gray-400">CPU Usage</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Memory</h3>
            <Activity className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {metrics?.memory.percentage || 0}%
          </div>
          <p className="text-gray-600 dark:text-gray-400">Memory Usage</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disk Usage</h3>
            <HardDrive className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {metrics?.disk.percentage || 0}%
          </div>
          <p className="text-gray-600 dark:text-gray-400">Disk Usage</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Uptime</h3>
            <Monitor className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {metrics?.uptime || 0}%
          </div>
          <p className="text-gray-600 dark:text-gray-400">System Uptime</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemMonitor;