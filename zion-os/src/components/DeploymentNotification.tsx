'use client';

import React, { useState, useEffect } from 'react';
import Button from './Button';

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
    <div className="fixed bottom-6 right-6 z-50 space-y-3 w-full max-w-md">
      {updates.filter(u => visibleUpdates.has(u.id)).map(update => (
        <div key={update.id} className="bg-zinc-800/90 border border-zinc-700/60 rounded-xl p-4 shadow-xl backdrop-blur">
          <div className="flex items-start gap-3">
            <div className={`mt-1 w-2 h-2 rounded-full ${getStatusColor(update.status)}`} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <span>{getStatusIcon(update.status)}</span>
                  <h4 className="font-semibold">{update.title}</h4>
                </div>
                <button aria-label="Dismiss" onClick={() => handleDismiss(update.id)} className="text-zinc-400 hover:text-white">×</button>
              </div>
              <p className="text-sm text-zinc-300 mt-1">{update.description}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                <span>{new Date(update.timestamp).toLocaleTimeString()}</span>
                {update.action && (
                  <Button onClick={() => handleAction(update)} size="sm" variant="outline">
                    {update.action.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

 
