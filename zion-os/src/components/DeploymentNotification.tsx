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
    <DeploymentNotification
      updates={updates}
      onDismiss={handleDismiss}
      onAction={handleAction}
    />
  );
}

 
