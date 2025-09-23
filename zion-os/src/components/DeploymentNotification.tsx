'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface DeploymentUpdate {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  status: 'deploying' | 'completed' | 'failed';
  action?: {
    label: string;
    url: string;
  };
}

interface DeploymentNotificationProps {
  updates: DeploymentUpdate[];
  onDismiss?: (id: string) => void;
  onAction?: (id: string, action: string) => void;
}

export function DeploymentNotification({ 
  updates, 
  onDismiss, 
  onAction 
}: DeploymentNotificationProps) {
  const [visibleUpdates, setVisibleUpdates] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Show new updates
    updates.forEach(update => {
      if (!visibleUpdates.has(update.id)) {
        setVisibleUpdates(prev => new Set(prev).add(update.id));
        
        // Auto-dismiss after 10 seconds
        setTimeout(() => {
          setVisibleUpdates(prev => {
            const newSet = new Set(prev);
            newSet.delete(update.id);
            return newSet;
          });
        }, 10000);
      }
    });
  }, [updates, visibleUpdates]);

  const handleDismiss = (id: string) => {
    setVisibleUpdates(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    onDismiss?.(id);
  };

  const handleAction = (update: DeploymentUpdate) => {
    if (update.action) {
      onAction?.(update.id, update.action.label);
      window.open(update.action.url, '_blank');
    }
  };

  const getStatusColor = (status: DeploymentUpdate['status']) => {
    switch (status) {
      case 'deploying':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: DeploymentUpdate['status']) => {
    switch (status) {
      case 'deploying':
        return '🚀';
      case 'completed':
        return '✅';
      case 'failed':
        return '❌';
      default:
        return 'ℹ️';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {updates
        .filter(update => visibleUpdates.has(update.id))
        .map(update => (
          <div
            key={update.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(update.status)} mt-2`} />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getStatusIcon(update.status)}</span>
                    <h4 className="font-semibold text-gray-900">{update.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {update.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDismiss(update.id)}
                className="text-gray-400 hover:text-gray-600 ml-2"
              >
                ×
              </button>
            </div>
            
            {update.action && (
              <div className="mt-3 flex space-x-2">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => handleAction(update)}
                >
                  {update.action.label}
                </Button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default DeploymentNotification;