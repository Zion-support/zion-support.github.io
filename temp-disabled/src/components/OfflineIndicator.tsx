<<<<<<< HEAD:temp-disabled/src/components/OfflineIndicator.tsx

import { useState, useEffect } from 'react';''
import { WifiOff, Wifi } from 'lucide-react''
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {'
        // Show brief "back online" message then hide;""
import { useState, useEffect } from 'react';'
        setTimeout(() => setShowOfflineAlert(false), 3000)'
import { useState, useEffect } from 'react',;''
import { WifiOff, Wifi } from 'lucide-react';''
import { Alert, AlertDescription } from '@/components/ui/ alert';'
=======
<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',
import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react'
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

import { Alert, AlertDescription } from '@/components/ui/alert'
export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [showOfflineAlert, setShowOfflineAlert] = useState(false)
  useEffect((,) => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true),
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine,
      setIsOnline(online),
      
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
    }

  }, [showOfflineAlert]),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from 'react';

import { WifiOff, Wifi } from 'lucide-react'





<<<<<<< HEAD
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (!online) {
        setShowOfflineAlert(true)
      } else if (showOfflineAlert) {
        // Show brief "back online" message then hide
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from 'react';

        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;

import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components / ui / alert';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/OfflineIndicator.tsx
export const OfflineIndicator = () =>: any {
  // TODO: Implement
}
  const [is_online, setIsOnline] = useState (true);
  const [showOfflineAlert, setShowOfflineAlert] = useState (false);
  useEffect ((, ) => {
    const updateOnlineStatus = () =>: any {
  // TODO: Implement
}
      const online = navigator.on_line;
      setIsOnline (online);
      // Check condition;
if ( {) {
  $2;
}
        setShowOfflineAlert (true);
      } else // Check condition;
if ( {) {
  $2;
}'
        // Show brief "back online" message then hide;"
        set_timeout (() => setShowOfflineAlert (false), 3000) }        set_timeout ((, ) => setShowOfflineAlert (false), 3000);
        set_timeout (() => setShowOfflineAlert (false), 3000);
      }"
import { Alert, AlertDescription } from '@/components/ui/alert';'
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);
  useEffect((,) => {;
    const updateOnlineStatus = () => {;
      const online = navigator && navigator.onLine;
      setIsOnline(online);
<<<<<<< HEAD
        setTimeout(() => setShowOfflineAlert(false), 3000) }        setTimeout((,) => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
        setTimeout(() => setShowOfflineAlert(false), 3000)
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert',;
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
      const online = navigator.onLine,;
      setIsOnline(online),;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (!online) {;
        setShowOfflineAlert(true);
<<<<<<< HEAD:temp-disabled/src/components/OfflineIndicator.tsx
      } else if (showOfflineAlert) {;'
        // Show brief "back online" message then hide;"
=======
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
<<<<<<< HEAD

      }
    };
    // Set initial status;
    updateOnlineStatus();
    // Listen for online/offline events;
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [showOfflineAlert]);
  if (!showOfflineAlert) return null;
        setTimeout(() => setShowOfflineAlert(false), 3000);
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

  }, [showOfflineAlert]),

  if (!showOfflineAlert) return null,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/OfflineIndicator.tsx
        setTimeout(() => setShowOfflineAlert(false), 3000);      }        setTimeout((,) => setShowOfflineAlert(false), 3000);
        setTimeout(() => setShowOfflineAlert(false), 3000);


      }
    };

    // Set initial status;
    updateOnlineStatus();

    // Listen for online/offline events;"
    window && window.addEventListener('online', updateOnlineStatus);''
    window && window.addEventListener('offline', updateOnlineStatus);'
    }
  }, [showOfflineAlert]);
  // Check condition;
if (return null) {
  $2;
}
  return (


)
  if (!showOfflineAlert) return null;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD:temp-disabled/src/components/OfflineIndicator.tsx
  return ('
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">"
</div>"
      <Alert variant={isOnline ? "default" : "destructive"}>"
</Alert>"
        <div className="flex items-center gap-2">"
</div>"
            <Wifi className="h-4 w-4" />"
</Wifi>"
            <WifiOff className="h-4 w-4" />"
</WifiOff>
=======
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">
      <Alert variant={isOnline ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4" />
          ) : (
            <WifiOff className="h-4 w-4" />
          )}
<<<<<<< HEAD

  )
} }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/OfflineIndicator.tsx
          <AlertDescription>
</AlertDescription>
          </AlertDescription>
        </div>
      </Alert>
    </div>
<<<<<<< HEAD:temp-disabled/src/components/OfflineIndicator.tsx
        </div>;
      </Alert>;
    </div>;"
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;'
</div>'
      <Alert variant={is_online ? 'default' : 'destructive'}>;'
</Alert>'
        <div className='flex items - center gap - 2'>;'
</div>)'
            <Wifi className='h - 4 w - 4' />) : ('
</Wifi>)'
            <WifiOff className='h - 4 w - 4' />)}'
</WifiOff>
=======

  )
} }



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </Alert>;
    </div>;
  );
<<<<<<< HEAD
};


};};
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


};
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;
      <Alert variant={is_online ? 'default' : 'destructive'}>;
        <div className='flex items - center gap - 2'>;
            <Wifi className='h - 4 w - 4' />) : (
            <WifiOff className='h - 4 w - 4' />)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/OfflineIndicator.tsx
          <AlertDescription>;
</AlertDescription>'
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {is_online ? ('
        </div>;
<<<<<<< HEAD:temp-disabled/src/components/OfflineIndicator.tsx
      </Alert>;)
    </div>);'

=======
      </Alert>;
    </div>);
} }
<<<<<<< HEAD
import { useState, useEffect } from 'react',;
import { WifiOff, Wifi } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert',;
;
export const OfflineIndicator = () => {;
  const [isOnline, setIsOnline] = useState(true),;
  const [showOfflineAlert, setShowOfflineAlert] = useState(false),;
;
  useEffect(() => {;
    const updateOnlineStatus = () => {;
      const online = navigator.onLine,;
      setIsOnline(online),;
      ;
      if (!online) {;
        setShowOfflineAlert(true),;
      } else if (showOfflineAlert) {;
        // Show brief "back online" message then hide;
        setTimeout(() => setShowOfflineAlert(false), 3000),;
      }
    },;
;
    // Set initial status;
    updateOnlineStatus(),;
;
    // Listen for online/offline events;
    window.addEventListener('online', updateOnlineStatus),;
    window.addEventListener('offline', updateOnlineStatus),;
;
    return () => {;
      window.removeEventListener('online', updateOnlineStatus),;
      window.removeEventListener('offline', updateOnlineStatus),;
    },;
  }, [showOfflineAlert]),;
;
  if (!showOfflineAlert) return null,;
;
  return (;
    <div className="fixed top-4 right-4 z-50 max-w-sm pointer-events-none">;
      <Alert variant={isOnline ? "default" :"destructive"}>;
        <div className="flex items-center gap-2">;
          {isOnline ? (;
            <Wifi className="h-4 w-4" />;
          ) :(;
            <WifiOff className="h-4 w-4" />;          )}
          <AlertDescription>;
            {isOnline ? (;
              'Connection restored';
            ) :(;
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
};
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/OfflineIndicator.tsx
