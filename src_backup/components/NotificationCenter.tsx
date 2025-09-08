<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/NotificationCenter.tsx
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState, useEffect } from 'react;
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533

// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components/ui/popover';
import { useNotifications  } from '@/context/notifications/NotificationContext';
import { useEnqueueSnackbar  } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';
import { NotificationFilter;
  NotificationHeader;
  NotificationList;
  NotificationFooter 
 } from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;

    unreadCount
    markAsRead
  const handleFilterChange = (newFilter: FilterType,) => {
    setFilter(newFilter as any)
  }
  return (
    <Popover open={open} onOpenChange={(v,) => setOpen(v ?? false)}>
<<<<<<< HEAD
unreadCount, ;
    markAsRead, ;
=======
unreadCount,
    markAsRead,
<<<<<<< HEAD

=======
=======
unreadCount, ;
    markAsRead, ;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { useNotifications } from '@/context/notifications/NotificationContext',
import { useEnqueueSnackbar } from '@/context',
import {logErrorToProduction} from '@/utils/productionLogger',
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 

    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications(),
  
  const [open, setOpen] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [loadedOnce, setLoadedOnce] = useState(false),
  const enqueueSnackbar = useEnqueueSnackbar(),

  // Refresh notifications when popover opens, but avoid duplicate
  useEffect(() => {
    if (open && !loadedOnce) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications(),
          setError(null)
        } catch (err) {
          logErrorToProduction('Failed to fetch notifications:', { data: err }),
          setError('Couldn't load notifications'),
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
        } finally {
          setLoadedOnce(true)
import React, { useState, useEffect } from 'react',;
// Use the shared icon wrapper;
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { useEnqueueSnackbar } from '@/context',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  NotificationFilter,;
  NotificationHeader,;
  NotificationList,;
  NotificationFooter;
} from '@/components/notifications',;
import { FilterType } from '@/components/notifications/NotificationFilter',;
export const NotificationCenter: React.FC = () => {;
  const {;
    filteredNotifications,;
    unreadCount,;
    markAsRead,;
    markAllAsRead,;
    dismissNotification,;
    loading,;
    filter,;
    setFilter,;
    fetchNotifications;
  } = useNotifications(),;
  const [open, setOpen] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const [loadedOnce, setLoadedOnce] = useState(false),;
  const enqueueSnackbar = useEnqueueSnackbar(),;
  // Refresh notifications when popover opens, but avoid duplicate;
  useEffect(() => {;
    if (open && !loadedOnce) {;
      const loadNotifications = async () => {;
        try {;
          await fetchNotifications(),;
          setError(null);
        } catch (err) {;
          logErrorToProduction('Failed to fetch notifications:', { data: err }),;
          setError('Couldn't load notifications'),;
          enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
        } finally {;
          setLoadedOnce(true);
        }
      },;
      loadNotifications();
    }
  }, [open, loadedOnce, fetchNotifications]),

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      enqueueSnackbar('All notifications marked as read', { variant: 'success' })
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
    }
  },

      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='relative' aria-label='Open notifications'>
          <Bell className='h-5 w-5 text-zion-slate-light' />
          {unreadCount > 0 && (
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <span className='absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium'>
=======
<<<<<<< HEAD
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium>
>>>>>>> origin/resolved-merge-conflicts
:src/components/NotificationCenter.tsx
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col'>
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />
        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />
        <NotificationList
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">


  }, [open, loadedOnce, fetchNotifications]),;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      enqueueSnackbar('All notifications marked as read', { variant: 'success' });
    } catch (err) {;
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),;
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },;
  const handleFilterChange = (newFilter: FilterType) => {;
=======
<<<<<<< HEAD
  },
  const handleFilterChange = (newFilter: FilterType) => {
>>>>>>> origin/resolved-merge-conflicts
    setFilter(newFilter as any);
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },;
  const handleFilterChange = (newFilter: FilterType) => {;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        />;

        <NotificationList

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
<<<<<<< HEAD

;
unreadCount,markAsRead,const handleFilterChange  = (newFilter: FilterType,) => {import React, { useState, useEffect } from 'react',import React, { useState, useEffect } from 'react';
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          loading = {loading}
          error = {error}
          notifications = {filteredNotifications}
          onMarkAsRead = {markAsRead}
          onDismiss = {dismissNotification}
          onRetry = {fetchNotifications}
unreadCount,markAsRead,const handleFilterChange  = (newFilter: FilterType,) => {import React, { useState, useEffect } from 'react,import React, { useState, useEffect } from react';
>>>>>>> origin/resolved-merge-conflicts
// Use the shared icon wrapper;
import { Bell  } from 'lucide-react';
import { Button } from '@/components/ui/button',import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',import { useNotifications } from '@/context/notifications/NotificationContext',import { useEnqueueSnackbar } from '@/context',import {logErrorToProduction} from '@/utils/productionLogger',import {NotificationFilter,NotificationHeader,NotificationList,NotificationFooter;
} from '@/components/notifications',import { FilterType } from '@/components/notifications/NotificationFilter',export const NotificationCenter: React.FC = () => {const {filteredNotifications,unreadCount,markAsRead,markAllAsRead,dismissNotification,loading,filter,setFilter,fetchNotifications;
  } = useNotifications(),const [open, setOpen] = useState(false),const [error, setError] = useState<string | null>(null),const [loadedOnce, setLoadedOnce] = useState(false),const enqueueSnackbar = useEnqueueSnackbar(),// Refresh notifications when popover opens, but avoid duplicate;
  useEffect(() => {if (open && !loadedOnce) {const loadNotifications = async () => {try {await fetchNotifications(),setError(null)} catch (err) {logErrorToProduction('Failed to fetch notifications:', { data: err }),setError('Couldn't load notifications'),enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })} finally {setLoadedOnce(true)// Use the shared icon wrapper;
  NotificationFilter,NotificationHeader,NotificationList,NotificationFooter;
} from '@/components/notifications',export const NotificationCenter: React.FC = () => {const {filteredNotifications,unreadCount,markAsRead,markAllAsRead,dismissNotification,loading,filter,setFilter,fetchNotifications;
  } = useNotifications(),const [open, setOpen] = useState(false),const [error, setError] = useState<string | null>(null),const [loadedOnce, setLoadedOnce] = useState(false),const enqueueSnackbar = useEnqueueSnackbar(),// Refresh notifications when popover opens, but avoid duplicate;
  useEffect(() => {if (open && !loadedOnce) {const loadNotifications = async () => {try {await fetchNotifications(),setError(null)} catch (err) {logErrorToProduction('Failed to fetch notifications:', { data: err }),setError('Couldn't load notifications'),enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })} finally {setLoadedOnce(true)}
      },loadNotifications()}
  }, [open, loadedOnce, fetchNotifications]),const handleMarkAllAsRead = async () => {try {await markAllAsRead(),enqueueSnackbar('All notifications marked as read', { variant: 'success' })} catch (err) {logErrorToProduction('Failed to mark notifications as read:', { data: err }),enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })}
  },const handleFilterChange = (newFilter: FilterType) => {setFilter(newFilter as any)},return (<Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>;
 } from '@/components/notifications';
import { FilterType  } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;<PopoverTrigger asChild>;
        <Button variant='ghost' size='icon' className='relative' aria-label='Open notifications'>;
          <Bell className='h-5 w-5 text-zion-slate-light' />;
          {unreadCount > 0 && (<span className='absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium'>;
  }, [open, loadedOnce, fetchNotifications]),const handleMarkAllAsRead = async () => {try {await markAllAsRead(),enqueueSnackbar('All notifications marked as read', { variant: 'success' })} catch (err) {logErrorToProduction('Failed to mark notifications as read:', { data: err }),enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })}
  },const handleFilterChange  = (newFilter: FilterType) => {setFilter(newFilter as any)}return ()}</Button>;
      </PopoverTrigger>;
      <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col'>;
        <NotificationHeader;
          unreadCount = {unreadCount}
          onMarkAllAsRead = {handleMarkAllAsRead}
        />;<NotificationFilter;
          filter = {filter as FilterType}
          onFilterChange = {handleFilterChange})}
        </Button>;
      </PopoverTrigger>;
      <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col'>;
        />;<NotificationList;
          loading = {loading}
          error = {error}
          notifications = {filteredNotifications}
          onMarkAsRead = {markAsRead}
          onDismiss = {dismissNotification}
          onRetry = {fetchNotifications}/>;
        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  )unreadCount={unreadCount}onMarkAllAsRead={handleMarkAllAsRead}/>;
        <NotificationFilter;
          filter={filter as FilterType}onFilterChange={handleFilterChange}/>;
        <NotificationList;
>>>>>>> merged-prs-20250907-203621
:src/components/NotificationCenter.tsx
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
}
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
        
        <NotificationList 
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
=======
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </Button>;
      </PopoverTrigger>;
      <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col'>;
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />;

        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/NotificationCenter.tsx
<<<<<<< HEAD
};
=======
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  );
};

}, [open, loadedOnce, fetchNotifications]);
}catch (err) {;
  logErrorToProduction ('Failed to mark notifications as read:', {;
  data: err ;
});
<<<<<<< HEAD


=======
<<<<<<< HEAD
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
    </Popover>)},;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {;
    </Popover>)},
>>>>>>> origin/resolved-merge-conflicts
        <NotificationHeader;
  )}, [open, loadedOnce, fetchNotifications])}catch (err) {logErrorToProduction ('Failed to mark notifications as read:', {data: err ;
})enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
  variant: 'error' ;
})}(v) => setOpen (v ?? false)}> <PopoverTrigger asChild> {';
  unreadCount > 9 ? '9+' : unreadCount ;
<<<<<<< HEAD
=======
=======
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  variant: 'error' ;
});

};

  (v) => setOpen (v ?? false) ;
}> <PopoverTrigger asChild> {';
  unreadCount > 9 ? '9+' : unreadCount ;
}</span>) ;
}</Button> </PopoverTrigger> <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col' > <NotificationHeader unreadCount= {;
  unreadCount ;
}onMarkAllAsRead= {;
  handleMarkAllAsRead ;
}/> <NotificationFilter filter= {;
  filter as FilterType ;
}onFilterChange= {;
  handleFilterChange ;
}/> <NotificationList loading= {;
  loading ;
}error= {;
  error ;
}notifications= {;
  filteredNotifications ;
}onMarkAsRead= {;
  markAsRead ;
}onDismiss= {;
  dismissNotification ;
}onRetry= {;
  fetchNotifications ;
}/> <NotificationFooter onClose= {;
  () => setOpen (false) ;
}/> </PopoverContent> </Popover>) ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
''
}</span>)}</Button> </PopoverTrigger> <PopoverContent className='w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col' > <NotificationHeader unreadCount= {unreadCount ;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
'"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
'
}</span>)}</Button> </PopoverTrigger> <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col" > <NotificationHeader unreadCount= {unreadCount ;
>>>>>>> origin/resolved-merge-conflicts
}onMarkAllAsRead= {handleMarkAllAsRead ;
}/> <NotificationFilter filter= {filter as FilterType ;
}onFilterChange= {handleFilterChange ;
}/> <NotificationList loading= {loading ;
}error= {error ;
}notifications= {filteredNotifications ;
}onMarkAsRead= {markAsRead ;
}onDismiss= {dismissNotification ;
}onRetry= {fetchNotifications ;
<<<<<<< HEAD
}/> <NotificationFooter onClose= {() => setOpen (false)}/> </PopoverContent> </Popover>)}'';
=======
}/> <NotificationFooter onClose= {() => setOpen (false)}/> </PopoverContent> </Popover>)}'";
=======
};
'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
