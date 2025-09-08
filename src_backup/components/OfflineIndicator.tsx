<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/OfflineIndicator.tsx
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
=======
import { useState, useEffect  } from 'react;
import { WifiOff, Wifi } from lucide-react'
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/OfflineIndicator.tsx
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
<<<<<<< HEAD
import { WifiOff, Wifi } from 'lucide-react'
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),

      if (!online) {

        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
        // Show brief 'back online' message then hide
=======
<<<<<<< HEAD
        // Show brief "back online message then hide
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';

;
import { WifiOff, Wifi  } from 'lucide-react';
import { useState, useEffect } from 'react',import { Alert, AlertDescription } from '@/components/ui/alert',import { Alert, AlertDescription  } from '@/components/ui/alert';
export const OfflineIndicator = () => {export const OfflineIndicator = () => {const [isOnline, setIsOnline] = useState(true),const [showOfflineAlert, setShowOfflineAlert] = useState(false),useEffect(() => {const updateOnlineStatus = () => {const online = navigator.onLine,setIsOnline(online),import { useState, useEffect  } from 'react';
      if (!online) {setShowOfflineAlert(true)} else if (showOfflineAlert) {// Show brief 'back online' message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000)import { Alert, AlertDescription  } from '@/components / ui / alert';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from react',
import { WifiOff, Wifi } from 'lucide-react;
import { WifiOff, Wifi  } from lucide-react';
import { useState, useEffect } from 'react,import { Alert, AlertDescription } from @/components/ui/alert',import { Alert, AlertDescription  } from '@/components/ui/alert;
export const OfflineIndicator = () => {export const OfflineIndicator = () => {const [isOnline, setIsOnline] = useState(true),const [showOfflineAlert, setShowOfflineAlert] = useState(false),useEffect(() => {const updateOnlineStatus = () => {const online = navigator.onLine,setIsOnline(online),import { useState, useEffect  } from react';
      if (!online) {setShowOfflineAlert(true)} else if (showOfflineAlert) {// Show brief back online" message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000)import { Alert, AlertDescription  } from '@/components / ui / alert;
>>>>>>> origin/resolved-merge-conflicts
export const OfflineIndicator = () =>: any {const [is_online, setIsOnline] = useState (true)const [showOfflineAlert, setShowOfflineAlert] = useState (false)useEffect ((, ) => {const updateOnlineStatus = () =>: any {const online = navigator.on_line;
      setIsOnline (online)// Check condition;
if ( {) {$2;
}
        setShowOfflineAlert (true)} else // Check condition;
if ( {) {$2;
}
<<<<<<< HEAD
        // Show brief 'back online' message then hide;
=======
        // Show brief "back online" message then hide;
>>>>>>> origin/resolved-merge-conflicts
        set_timeout (() => setShowOfflineAlert (false), 3000) }        set_timeout ((, ) => setShowOfflineAlert (false), 3000);
        set_timeout (() => setShowOfflineAlert (false), 3000);

      }
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

<<<<<<< HEAD
=======
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),
  useEffect(() => {

<<<<<<< HEAD
=======
        setTimeout(() => setShowOfflineAlert(false), 3000)
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';

>>>>>>> origin/resolved-merge-conflicts
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

      if (!online) {;
        setShowOfflineAlert(true);
      } else if (showOfflineAlert) {;
        // Show brief 'back online' message then hide;

      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);

    }
  }, [showOfflineAlert]),

  return (
    <div className='fixed top-4 right-4 z-50 max-w-sm pointer-events-none'>
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
          {isOnline ? (
            <Wifi className='h-4 w-4' />
import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = null;
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <WifiOff className='h-4 w-4' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <WifiOff className="h-4 w-4" />
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <WifiOff className=h-4 w-4" />
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}</AlertDescription>;
=======
              ? 'Connection restored;
              : You are offline. Some features may not work.'}</AlertDescription>;
=======
            <WifiOff className="h-4 w-4" />

          )}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>)} }
})}
=======
};
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
