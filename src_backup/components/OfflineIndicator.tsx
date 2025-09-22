:src/components/OfflineIndicator.tsx
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),

import { useState, useEffect } from 'react';

import { WifiOff, Wifi } from 'lucide-react'

      if (!online) {
            if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
:src/components/OfflineIndicator.tsx
setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
:src/components/OfflineIndicator.tsx
import { Alert, AlertDescription } from '@/components/ui/alert',;
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
      const online = navigator.onLine,;
      setIsOnline(online),;
      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
:src/components/OfflineIndicator.tsx
setTimeout(() => setShowOfflineAlert(false), 3000);
      }
    },;
    // Set initial status;
    updateOnlineStatus(),;
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus),;
    window.addEventListener('offline', updateOnlineStatus),;
    return () => {;
      window.removeEventListener('online', updateOnlineStatus),;
      window.removeEventListener('offline', updateOnlineStatus);
    }
  }, [showOfflineAlert]),

      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
    }
  }, [showOfflineAlert]),


  if (!showOfflineAlert) return null,


  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = null;
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          ) : (
            <WifiOff className="h-4 w-4" />
:src/components/OfflineIndicator.tsx
)}
<AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) : (;
              'You are offline. Some features may not work.';
            )}
          </AlertDescription>;

        </div>;
      </Alert>;
    </div>;
  );

};
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;
      <Alert variant={is_online ? 'default' : 'destructive'}>;
        <div className='flex items - center gap - 2'>;
            <Wifi className='h - 4 w - 4' />) : (
            <WifiOff className='h - 4 w - 4' />)}
          <AlertDescription>;
            {is_online;
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {is_online ? (
              'Connection restored') : (
              'You are offline. Some features may not work.')}
        </div>;
      </Alert>;
    </div>);
} }
};
:src/components/OfflineIndicator.tsx

);
};

);
};
origin/cursor/automate-test-improve-and-merge-code-2533
