
:src/components/OfflineIndicator.tsx
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'


:src/components/OfflineIndicator.tsx
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
import { WifiOff, Wifi } from 'lucide-react'


        // Show brief 'back online' message then hide
        // Show brief "back online message then hide
:src/components/OfflineIndicator.tsx
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
      }
    }
    // Set initial status
    updateOnlineStatus()
    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    } }, [showOfflineAlert]);      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert])
  if (!showOfflineAlert) return null
  return (
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
          ) : (
            <WifiOff className='h-4 w-4' />
          )}
          <AlertDescription>
            {isOnline
              ? 'Connection restored'
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {isOnline ? (
              'Connection restored'
            ) : (
              'You are offline. Some features may not work.'
            )}
        </div>
      </Alert>
    </div>
  )
} }

        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';

;
import { WifiOff, Wifi  } from 'lucide-react';
import { useState, useEffect } from 'react',import { Alert, AlertDescription } from '@/components/ui/alert',import { Alert, AlertDescription  } from '@/components/ui/alert';
export const OfflineIndicator = () => {export const OfflineIndicator = () => {const [isOnline, setIsOnline] = useState(true),const [showOfflineAlert, setShowOfflineAlert] = useState(false),useEffect(() => {const updateOnlineStatus = () => {const online = navigator.onLine,setIsOnline(online),import { useState, useEffect  } from 'react';
      if (!online) {setShowOfflineAlert(true)} else if (showOfflineAlert) {// Show brief 'back online' message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000)import { Alert, AlertDescription  } from '@/components / ui / alert';
        // Show brief 'back online' message then hide;
            <WifiOff className='h-4 w-4' />
            <WifiOff className=h-4 w-4" />
          )}

};
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;
        set_timeout (() => setShowOfflineAlert (false), 3000) }        set_timeout ((, ) => setShowOfflineAlert (false), 3000)set_timeout (() => setShowOfflineAlert (false), 3000)}
export const OfflineIndicator = () => {const [isOnline, setIsOnline] = useState(true)const [showOfflineAlert, setShowOfflineAlert]  = useState(false)useEffect((,) => {const updateOnlineStatus = () => {const online = navigator && navigator.onLine;
      setIsOnline(online)if (!online) {setShowOfflineAlert(true)} else if (showOfflineAlert) {// Show brief 'back online' message then hide;}
  }, [showOfflineAlert])}, [showOfflineAlert]),if (!showOfflineAlert) return null;
  if (!showOfflineAlert) return null,setTimeout(() => setShowOfflineAlert(false), 3000)}        setTimeout((,) => setShowOfflineAlert(false), 3000)setTimeout(() => setShowOfflineAlert(false), 3000)}
    }// Set initial status;
    updateOnlineStatus()// Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus)window && window.addEventListener('offline', updateOnlineStatus)}
  }, [showOfflineAlert])// Check condition;
if (return null) {$2;
}
  return (if (!showOfflineAlert) return null;return (<div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>;
      <Alert variant={isOnline ? 'default' : 'destructive'}>;
        <div className='flex items-center gap-2'>;
          {isOnline ? (<Wifi className='h-4 w-4' />;
export const OfflineIndicator = null;
      <Alert variant={isOnline ? 'default' : 'destructive'}>;
        <div className='flex items-center gap-2'>;
            <Wifi className='h-4 w-4' />;
          ) : (<WifiOff className='h-4 w-4' />;
          )}
          <AlertDescription>{isOnline ? ('Connection restored';
            ) : ('You are offline. Some features may not work.';
            )}{isOnline;
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}</AlertDescription>;


};
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>)} }
})}
