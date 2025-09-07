import React from 'react';

const Health = () => {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.REACT_APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    platform: process.platform,
    nodeVersion: process.version
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Health Check</h1>
          <p className="text-gray-600">Your application is running smoothly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Status</h3>
            <p className="text-green-600 text-lg font-medium">{healthStatus.status}</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Environment</h3>
            <p className="text-blue-600 text-lg font-medium">{healthStatus.environment}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Version</h3>
            <p className="text-purple-600 text-lg font-medium">{healthStatus.version}</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Uptime</h3>
            <p className="text-orange-600 text-lg font-medium">
              {Math.floor(healthStatus.uptime / 60)}m {Math.floor(healthStatus.uptime % 60)}s
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">System Information</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Platform:</span>
              <span className="font-medium">{healthStatus.platform}</span>
            </div>
            <div className="flex justify-between">
              <span>Node.js Version:</span>
              <span className="font-medium">{healthStatus.nodeVersion}</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage:</span>
              <span className="font-medium">
                {Math.round(healthStatus.memory.heapUsed / 1024 / 1024)}MB
              </span>
            </div>
            <div className="flex justify-between">
              <span>Last Check:</span>
              <span className="font-medium">
                {new Date(healthStatus.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;