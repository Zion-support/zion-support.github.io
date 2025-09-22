:src/components/NotificationCenter.tsx
unreadCount, ;
    markAsRead, ;

const handleFilterChange = (newFilter: FilterType,) => {;



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
:src/components/NotificationCenter.tsx
} from '@/components/notifications',
import { FilterType } from '@/components/notifications/NotificationFilter',
export const NotificationCenter: React.FC = () => {
  const { 
    filteredNotifications,
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
          setError("Couldn't load notifications"),
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
          setError("Couldn't load notifications"),;
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
      enqueueSnackbar("All notifications marked as read", { variant: 'success' })
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
    }
  },

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>
 } from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;
origin/cursor/automate-test-improve-and-merge-code-2533


  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(),
      enqueueSnackbar("All notifications marked as read", { variant: 'success' })
    } catch (err) {
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' })
    }
  },

:src/components/NotificationCenter.tsx
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">

:src/components/NotificationCenter.tsx
  }, [open, loadedOnce, fetchNotifications]),;
  const handleMarkAllAsRead = async () => {;
    try {;
      await markAllAsRead(),;
      enqueueSnackbar("All notifications marked as read", { variant: 'success' });
    } catch (err) {;
      logErrorToProduction('Failed to mark notifications as read:', { data: err }),;
      enqueueSnackbar((err as any)?.response?.data?.message || (err instanceof Error ? err.message : String(err)), { variant: 'error' });
    }
  },;
  const handleFilterChange = (newFilter: FilterType) => {;
:src/components/NotificationCenter.tsx
setFilter(newFilter as any);
  };
  return (;
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>;
      <PopoverTrigger asChild>;
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">;
          <Bell className="h-5 w-5 text-zion-slate-light" />;
          {unreadCount > 0 && (;
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">;
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>;
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
        <NotificationHeader
        />;

        <NotificationList

          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}
:src/components/NotificationCenter.tsx
        />
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  )
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
        />;

        </Button>;
      </PopoverTrigger>;
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">;
        <NotificationHeader
          unreadCount = {unreadCount,}
          onMarkAllAsRead = {handleMarkAllAsRead,}
        />;

:src/components/NotificationCenter.tsx
        <NotificationFilter
          filter = {filter as FilterType,}
          onFilterChange = {handleFilterChange,}
        />;

        <NotificationList
          loading = {loading,}
          error = {error,}
          notifications = {filteredNotifications,}
          onMarkAsRead = {markAsRead,}
          onDismiss = {dismissNotification,}
          onRetry = {fetchNotifications,}

        />;

        <NotificationFooter onClose={() => setOpen(false)} />;
      </PopoverContent>;
    </Popover>;
  );
};
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any)
  },

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v ?? false)}>      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
        <NotificationHeader

  );
};

}, [open, loadedOnce, fetchNotifications]);
}catch (err) {;
  logErrorToProduction ('Failed to mark notifications as read:', {;
  data: err ;
});
enqueueSnackbar ( (err as any) ?.response?.data?.message || (err instanceof Error ? err.message : String (err) ), {';
  variant: 'error' ;
}) ;

};

  (v) => setOpen (v ?? false) ;
}> <PopoverTrigger asChild> {';
  unreadCount > 9 ? '9+' : unreadCount ;
}</span>) ;
}</Button> </PopoverTrigger> <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col" > <NotificationHeader unreadCount= {;
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
};
'"
:src/components/NotificationCenter.tsx
