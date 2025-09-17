"use client";

import { useState } from "react";
import { Rocket, CheckCircle, AlertCircle, Clock, X } from "lucide-react";

interface DeploymentNotificationProps {
  deployment: {
    id: string;
    name: string;
    status: 'pending' | 'running' | 'success' | 'failed';
    progress: number;
    timestamp: string;
  };
  onClose?: () => void;
}

export function DeploymentNotification({ deployment, onClose }: DeploymentNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const statusConfig = {
    pending: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    running: { icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    success: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
    failed: { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-500/10' }
  };

  const config = statusConfig[deployment.status];
  const Icon = config.icon;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className={`${config.bg} border border-gray-700 rounded-lg p-4 shadow-lg`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Icon className={`w-5 h-5 ${config.color}`} />
            <div>
              <h4 className="font-semibold text-white">{deployment.name}</h4>
              <p className="text-sm text-gray-400 capitalize">{deployment.status}</p>
              {deployment.status === 'running' && (
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${deployment.progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeploymentNotification;