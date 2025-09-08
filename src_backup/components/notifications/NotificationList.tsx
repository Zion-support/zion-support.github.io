
;
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
import { ScrollArea  } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';



;
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react;
import { ScrollArea  } from @/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton;





origin/cursor/automate-test-improve-and-merge-code-2533



origin/cursor/expand-services-advertise-and-build-project-c28b

main

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

main

interface NotificationListProps {
  loading: boolean;
import React from react';
import { ScrollArea } from '@/components/ui/scroll-area;
import Skeleton from @/components/ui/skeleton';
import { Button } from '@/components/ui/button;


main


  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}export const NotificationList: React.FC<NotificationListProps> = ({loading,notifications,onMarkAsRead,onMarkAllAsRead,onClearAll;
  onClearAll;
}) => {if (loading) {return (<div className="space-y-3>;
        {[...Array(5)].map((_, i) => (<div key={i} className=flex items-start space-x-3 p-3">;
            <Skeleton className="h-4 w-4 rounded-full />;
            <div className=flex-1 space-y-2">;
              <Skeleton className="h-4 w-3/4 />;
              <Skeleton className=h-3 w-1/2" />;
            </div>;
          </div>;
        ))}
      </div>;
    )}if (notifications.length === 0) {return (<div className="text-center py-8>;
        <Bell className=mx-auto h-12 w-12 text-gray-400" />;
        <h3 className="mt-2 text-sm font-medium text-gray-900>No notifications</h3>;
        <p className=mt-1 text-sm text-gray-500">;
          Youre all caught up! Check back later for updates.;
        </p>;
      </div>;
    )}return (<div className="space-y-3>;
      <div className=flex justify-between items-center">;
        <h3 className="text-lg font-semibold>Notifications</h3>;
        <div className=space-x-2">;
          <Button;
            variant="outline;
            size=sm";
            onClick={onMarkAllAsRead}
            disabled={notifications.every(n => n.read)}
          >;
            Mark all as read;
          </Button>;
          <Button;
            variant="outline;
            size=sm";
            onClick={onClearAll}
          >;
            Clear all;
          </Button>;
        </div>;
      </div>;
      <ScrollArea className="h-96>;
        <div className=space-y-2">;
          {notifications.map((notification) => (<div;
              key={notification.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${notification.read;
                  ? 'bg-gray-50 border-gray-200';
                  : bg-blue-50 border-blue-200;
              }`}
              onClick={() => onMarkAsRead(notification.id)}
            >;
              <div className="flex items-start justify-between>;
                <div className=flex-1">;
                  <h4 className="text-sm font-medium text-gray-900>;
                    {notification.title}
                  </h4>;
                  <p className=text-sm text-gray-600 mt-1">;
                    {notification.message}
                  </p>;
                  <p className="text-xs text-gray-500 mt-2>;
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>;
                </div>;
                <div className={`w-2 h-2 rounded-full ${notification.type === 'error' ? bg-red-500 :;
                  notification.type === 'warning' ? bg-yellow-500 :;
                  notification.type === 'success' ? bg-green-500 :;
                  'bg-blue-500';
                }`} />;
              </div>;
            </div>;
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
import { NotificationItem } from './NotificationItem';
import { NotificationItem } from ./NotificationItem;
import { Notification } from '@/context/notifications';
import { EmptyState } from @/components/ui/empty-state;
import { Bell } from 'lucide-react'
interface NotificationListProps {


onRetry
},) => {
} import React from 'react';
import { ScrollArea } from '@/components/ui/ scroll - area';
import Skeleton from '@/components/ui/ skeleton';
import { Button } from '@/components/ui/ button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context / notifications';
import { EmptyState } from '@/components/ui/ empty - state';
import { Bell } from 'lucide-react';
interface NotificationListProps {
  loading: boolean,
  error: string | null,
  notifications: Notification[],
  onMarkAsRead: (id: string, ) => Promise < void>,
  on_dismiss: (id: string, ) => Promise < void>,
  on_retry: () => void;
}
export const NotificationList: React.FC < NotificationListProps> = ({
  loading;
        </div>;
      </ScrollArea>;
    </div>;
  )}ursor/automate-test-improve-and-merge-code-646c;
interface NotificationListProps {}import React from 'react';
interface NotificationListProps {}import React from 'react';
interface NotificationListProps {}import React from 'react';
interface NotificationListProps  {loading: boolean,error: string | null,notifications: Notification[],onMarkAsRead: (id: string,) => Promise<void>,onDismiss: (id: string,) => Promise<void>,onRetry: () => void;
}export const NotificationList: React.FC<NotificationListProps> = ({loading;
  error;
  notifications;
  onMarkAsRead;
import React from react,import { ScrollArea } from '@/components/ui/scroll-area',import Skeleton from @/components/ui/skeleton,import { Button } from '@/components/ui/button',import { NotificationItem } from ./NotificationItem,import { Notification } from '@/context/notifications',import { EmptyState } from @/components/ui/empty-state,interface NotificationListProps  {loading: boolean,error: string | null,notifications: Notification[],onMarkAsRead: (id: string) => Promise<void>,onDismiss: (id: string) => Promise<void>,onRetry: () => void;
}onRetry;
},) => {} import React from 'react';
import { ScrollArea  } from @/components / ui / scroll - area;
import Skeleton from '@/components / ui / skeleton';
import { Button  } from @/components / ui / button;
import { Notification  } from '@/context / notifications';
import { EmptyState  } from @/components / ui / empty - state;
},) => {} import React from 'react';
},) => {} import React from react;
interface NotificationListProps  {loading: boolean,error: string | null,notifications: Notification[],onMarkAsRead: (id: string, ) => Promise < void>,on_dismiss: (id: string, ) => Promise < void>,on_retry: () => void;
}
export const NotificationList: React.FC < NotificationListProps> = ({loading;
  error;
  notifications;
  onMarkAsRead;
  on_dismiss,on_retry;
}, ) => {return (<ScrollArea className=flex - 1 overflow - y-auto max - h-[350px]">;
      {error ? (interface NotificationListProps  {loading: boolean,error: string | null,notifications: Notification[],onMarkAsRead: (id: string) => Promise<void>,onDismiss: (id: string) => Promise<void>,onRetry: () => void;
}loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string,) => Promise<void>;
  onDismiss: (id: string,) => Promise<void>;
  onRetry: () => void;
}
export const NotificationList: React.FC<NotificationListProps> = ({onDismiss,onRetry;
}) => {return (<ScrollArea className="flex-1 overflow-y-auto max-h-[350px]>;
      {error ? (<div className=p-8 text-center text-amber-500">;
          <p>{error}</p>;
          <Button;
            className="mt-2;
            onClick={onRetry}
          >;
            Try Again;
          </Button>;
        </div>;
      ) : loading ? (<div className=p-4 space-y-4">;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50 />;
          <Skeleton className=h-12 w-full bg-zion-blue-dark/50" />;
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50 />;
        </div>;
      ) : notifications.length === 0 ? (<div className=p-8">;
          <EmptyState;
            icon={<Bell className="h-8 w-8 />}
            title=No Notifications";
            description="You're all caught up.;
            action={{ text: 'Refresh, onClick: onRetry }}
            className=border-none bg-transparent";
          />;
        </div>;
      ) : (notifications.map((notification) => (<NotificationItem;
  )}<div className="p - 8 text - center text - amber - 500>;
          <p>{error}</p>;
          <Button;
            variant=outline";
            size="sm;
            className=mt - 2";
            on_click = {on_retry }
            on_click = {on_retry }
            on_click = {on_retry }
          >;
            Try Again;
          </Button>;
        </div>) : loading ? (<div className="p - 4 space - y-4>;
          <Skeleton className=h - 12 w - full bg - zion - blue - dark / 50" />;
          <Skeleton className="h - 12 w - full bg - zion - blue - dark / 50 />;
          <Skeleton className=h - 12 w - full bg - zion - blue - dark / 50" />;
        </div>) : notifications.length === 0 ? (<div className="p - 8>;
          <EmptyState;
            icon = {<Bell className=h - 8 w - 8" /> }
            icon = {<Bell className="h - 8 w - 8 /> }
            icon = {<Bell className=h - 8 w - 8" /> }
            title="No Notifications;
            description=Youre all caught up.";
            action={{ text: 'Refresh', on_click: on_retry }}
            className="border - none bg - transparent;
          />;
        </div>) : (notifications.map ((notification, ) => (<NotificationItem;
            key = {notification.id }
            notification = {notification }
            onMarkAsRead = {onMarkAsRead }
            on_dismiss = {on_dismiss }
            key = {notification.id }
            notification = {notification }
            onMarkAsRead = {onMarkAsRead }
            on_dismiss = {on_dismiss }
            key = {notification.id }
            notification = {notification }
            onMarkAsRead = {onMarkAsRead }
            on_dismiss = {on_dismiss }
          />)))}
    </ScrollArea>)}
;)}";
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        )))}
    </ScrollArea>;
  );
};

import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';


import { Bell } from 'lucide-react';

interface NotificationListProps {
  )}interface NotificationListProps  {loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void;
}export const NotificationList: React.FC<NotificationListProps> = ({loading,error,notifications,onMarkAsRead,onDismiss,onRetry;
}) => {if (loading) {return (<div className="space-y-3>;
        {[...Array(5)].map((_, i) => (<div key={i} className=flex items-start space-x-3 p-3">;
            <Skeleton className="h-8 w-8 rounded-full />;
            <div className=flex-1 space-y-2">;
              <Skeleton className="h-4 w-3/4 />;
              <Skeleton className=h-3 w-1/2" />;
            </div>;
          </div>;
        ))}
      </div>;
    )}if (error) {return (<div className="text-center py-8>;
        <div className=text-red-500 mb-4">;
          <Bell className="h-12 w-12 mx-auto mb-2 />;
          <p className=text-sm">Failed to load notifications</p>;
        </div>;
        <Button onClick={onRetry} variant="outline size=sm">;
          Try Again;
        </Button>;
      </div>;
    )}if (notifications.length === 0) {return (<EmptyState;
        icon={Bell}
        title="No notifications;
        description=You're all caught up! Check back later for updates.";
      />;
    )}return (<ScrollArea className="h-96>;
      <div className=space-y-1">;
        {notifications.map((notification) => (<NotificationItem;
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />;
        ))}
      </div>;
    </ScrollArea>;
  )}ursor/integrate-build-improve-and-re-verify-9d47;
ursor/automate-test-improve-and-merge-code-646c;
  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  loading,
  error,
  notifications,
  onMarkAsRead,
  onDismiss,
  onRetry
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-start space-x-3 p-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">
          <Bell className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">Failed to load notifications</p>
        </div>
        <Button onClick={onRetry} variant="outline" size="sm">
          Try Again
        </Button>
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <EmptyState
        icon={Bell}
        title="No notifications"
        description="You're all caught up! Check back later for updates."
      />
    );
  }

  return (
    <ScrollArea className="h-96">
      <div className="space-y-1">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDismiss={onDismiss}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
origin/cursor/expand-services-advertise-and-build-project-c28b


origin/cursor/expand-services-advertise-and-build-project-c28b

main


  loading: boolean;
  error: string | null;
  notifications: Notification[];
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onRetry: () => void
}
export const NotificationList: React.FC<NotificationListProps> = ({
origin/cursor/automate-test-improve-and-merge-code-2533
export const NotificationList: React.FC<NotificationListProps> = ({
