<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight  } from 'lucide-react';
import { Button   } from '@/components/ui/button';
import { Badge   } from '@/components/ui/badge';
import { formatDistanceToNow   } from 'date-fns';
import { cn  } from '@/lib/utils';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger  } from '@/components/ui/tooltip';
import { useRouter   } from 'next/router';
import { Notification, NotificationType  } from '@/context/notifications';
export const getTypeIcon = null;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import { useRouter  } from 'next/router';
<<<<<<< HEAD
import React from 'react';
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import React from react';
>>>>>>> origin/resolved-merge-conflicts
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { formatDistanceToNow  } from 'date-fns';
import { cn } from '@/lib/utils';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import { useRouter  } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';
export const getTypeIcon = null;
import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger} from '@/components/ui/tooltip'
import { useRouter } from 'next/router'
import { Notification, NotificationType } from '@/context/notifications'
      return <span className='text-blue-500'>💬</span>
      return <span className='text-orange-500'>📦</span>
    default:
      return <span className='text-gray-500'>📣</span>
  notification: Notification
  onMarkAsRead: (id: string) => Promise<void>
  onDismiss: (id: string) => Promise<void>
  onMarkAsRead
  onDismiss
}) => {
      className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  onMarkAsRead(notification.id); import React from 'react'
=======
<<<<<<< HEAD
                  onMarkAsRead(notification.id); import React from react'
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onMarkAsRead(notification.id); import React from 'react'


// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { cn } from '@/lib/utils'
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger} from '@/components/ui/tooltip'
export const getTypeIcon = (type: NotificationType,) => {
  switch (type) {
    case 'message':
      return <span className='text-blue-500'>💬</span>
    case 'quote_request':
      return <span className='text-purple-500'>📝</span>
    case 'booking_confirmation':
      return <span className='text-green-500'>✅</span>
    case 'hire_request':
      return <span className='text-zion-purple'>🤝</span>
    case 'onboarding':
      return <span className='text-zion-cyan'>🚀</span>
    case 'system':
      return <span className='text-yellow-500'>⚠️</span>
    case 'project_update':
      return <span className='text-indigo-400'>📌</span>
    case 'milestone_complete':
      return <span className='text-green-500'>🏁</span>
    case 'order_status':
      return <span className='text-orange-500'>📦</span>
    default:
<<<<<<< HEAD

=======
<<<<<<< HEAD
      return <span className='text-gray-500'>📣</span>
=======
<<<<<<< HEAD
      return <span className="text-gray-500>📣</span>
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
import React from 'react',;
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { formatDistanceToNow } from 'date-fns',;
import { cn } from '@/lib/utils',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import { useRouter } from 'next/router',;
import { Notification, NotificationType } from '@/context/notifications',;
export const getTypeIcon = (type: NotificationType) => {;
  switch (type) {;
    case 'message':;
      return <span className='text-blue-500'>💬</span>,;
    case 'quote_request':;
      return <span className='text-purple-500'>📝</span>,;
    case 'booking_confirmation':;
      return <span className='text-green-500'>✅</span>,;
    case 'hire_request':;
      return <span className='text-zion-purple'>🤝</span>,;
    case 'onboarding':;
      return <span className='text-zion-cyan'>🚀</span>,;
    case 'system':;
      return <span className='text-yellow-500'>⚠️</span>,;
    case 'project_update':;
      return <span className='text-indigo-400'>📌</span>,;
    case 'milestone_complete':;
      return <span className='text-green-500'>🏁</span>,;
    case 'order_status':;
      return <span className='text-orange-500'>📦</span>,;
    default:;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return <span className="text-gray-500">📣</span>


import React from 'react',
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { formatDistanceToNow } from 'date-fns',
import { cn } from '@/lib/utils',

import React from 'react';
import { Check, Trash2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useRouter } from 'next/router';
import { Notification, NotificationType } from '@/context/notifications';

export const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case 'message':
<<<<<<< HEAD
      return <span className='text-blue-500'>💬</span>;
      return <span className='text-orange-500'>📦</span>;
=======
      return <span className="text-blue-500">💬</span>;
    case 'quote_request':
      return <span className="text-purple-500">📝</span>;
    case 'booking_confirmation':
      return <span className="text-green-500">✅</span>;
    case 'hire_request':
      return <span className="text-zion-purple">🤝</span>;
    case 'project_update':
      return <span className="text-orange-500">📦</span>;
>>>>>>> origin/resolved-merge-conflicts
    default:

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    default:;
      return <span className='text-gray-500'>📣</span>;
  notification: Notification;
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
  onMarkAsRead;
  onDismiss;
}) => {className={cn(onMarkAsRead(notification.id)import React from 'react';
// Use the centralized icon wrapper to avoid missing icons;
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { formatDistanceToNow  } from 'date-fns';
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components/ui/tooltip';
export const getTypeIcon = (type: NotificationType,) => {switch (type) {case 'message':;
      return <span className='text-blue-500'>💬</span>;
    case 'quote_request':;
      return <span className='text-purple-500'>📝</span>;
    case 'booking_confirmation':;
      return <span className='text-green-500'>✅</span>;
    case 'hire_request':;
      return <span className='text-zion-purple'>🤝</span>;
    case 'onboarding':;
      return <span className='text-zion-cyan'>🚀</span>;
    case 'system':;
      return <span className='text-yellow-500'>⚠️</span>;
    case 'project_update':;
      return <span className='text-indigo-400'>📌</span>;
    case 'milestone_complete':;
      return <span className='text-green-500'>🏁</span>;
    case 'order_status':;
      return <span className='text-orange-500'>📦</span>;
    default:;
      return <span className='text-gray-500'>📣</span>;
import React from 'react',// Use the centralized icon wrapper to avoid missing icons;
import { Button } from '@/components/ui/button',import { Badge } from '@/components/ui/badge',import { formatDistanceToNow } from 'date-fns',import { cn } from '@/lib/utils',Tooltip,TooltipContent,TooltipProvider,// Use the centralized icon wrapper to avoid missing icons;
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',import { useRouter } from 'next/router',import { Notification, NotificationType } from '@/context/notifications',export const getTypeIcon = (type: NotificationType) => {switch (type) {case 'message':;
      return <span className='text-blue-500'>💬</span>,case 'quote_request':;
      return <span className='text-purple-500'>📝</span>,case 'booking_confirmation':;
      return <span className='text-green-500'>✅</span>,case 'hire_request':;
      return <span className='text-zion-purple'>🤝</span>,case 'onboarding':;
      return <span className='text-zion-cyan'>🚀</span>,case 'system':;
      return <span className='text-yellow-500'>⚠️</span>,case 'project_update':;
      return <span className='text-indigo-400'>📌</span>,case 'milestone_complete':;
      return <span className='text-green-500'>🏁</span>,case 'order_status':;
      return <span className='text-orange-500'>📦</span>,default:;
  Tooltip,TooltipContent,TooltipProvider,TooltipTrigger;
} from '@/components/ui/tooltip';
export const getTypeIcon = (type: NotificationType) => {switch (type) {case 'message':;
      return <span className='text-blue-500'>💬</span>;
    case 'quote_request':;
      return <span className='text-purple-500'>📝</span>;
    case 'booking_confirmation':;
      return <span className='text-green-500'>✅</span>;
    case 'hire_request':;
      return <span className='text-zion-purple'>🤝</span>;
    case 'project_update':;
      return <span className='text-orange-500'>📦</span>;
    default:;
<<<<<<< HEAD
      return <span className='text-gray-500'>📣</span>;
=======
      return <span className=text-gray-500">📣</span>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return <span className="text-gray-500">📣</span>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
},;
interface NotificationItemProps {;
  notification: Notification,;
  onMarkAsRead: (id: string) => Promise<void>,;
  onDismiss: (id: string) => Promise<void>;
}
;
export const NotificationItem: React.FC<NotificationItemProps> = ({;
  notification,;
  onMarkAsRead,;
  onDismiss}) => {;
  const router = useRouter(), // Changed from useNavigate to useRouter;
  const handleClick = () => {;
    if (!notification.read) {;
      onMarkAsRead(notification.id);
    }
    // If there's an action URL, navigate to it;
    if (notification.action_url) {;
      router.push(notification.action_url), // Changed to router.push;
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const NotificationItem: React.FC<NotificationItemProps> = ({notification;
  onMarkAsRead;
  onDismiss},) => {const router = useRouter(), // Changed from useNavigate to useRouter;
  const handleClick = () => {if (!notification.read) {onMarkAsRead(notification.id)}
    // If there's an action URL, navigate to it;
    if (notification.action_url) {router.push(notification.action_url), // Changed to router.push;
    }return (<div;
      className = {cn('p-3 border-b border-zion-blue-light relative group';
        !notification.read ? 'bg-zion-blue-dark/30' : '')}
  },return (<div;
      className={cn('p-3 border-b border-zion-blue-light relative group',!notification.read ? 'bg-zion-blue-dark/30' : '')}>;
      <div className='flex items-start gap-2'>;
        <div className='text-xl'>{getTypeIcon(notification.type)}</div>;
        <div className='flex-1'>;
          <div className='flex justify-between items-center mb-1'>;
            <h4 className='font-medium text-white'>;
            </h4>;
            {!notification.read && (<Badge className='bg-zion-cyan text-xs'>New</Badge>;
            )}
          </div>;
          <p className='text-sm text-zion-slate-light'>;
          </p>;
          <div className='flex justify-between items-center mt-1'>;
            <p className='text-xs text-zion-slate'>;
              {notification.created_at;
                ? formatDistanceToNow(new Date(notification.created_at), {addSuffix: true}): 'Just now'}
            </p>;
            {notification.action_url && notification.action_text && (<Button;
<<<<<<< HEAD
                variant='link';
                size='sm';
                className='text-zion-cyan p-0 h-auto';
=======
                variant=link";
                size="sm;
                className=text-zion-cyan p-0 h-auto";
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
  }

  return (<div
      className = {cn(
        'p-3 border-b border-zion-blue-light relative group'
        !notification.read ? 'bg-zion-blue-dark/30' : ''),}
:src/components/notifications/NotificationItem.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  },;
  return (;
    <div;
      className={cn(;
        'p-3 border-b border-zion-blue-light relative group',;
        !notification.read ? 'bg-zion-blue-dark/30' : '')}

    >
<<<<<<< HEAD

=======
<<<<<<< HEAD
      <div className='flex items-start gap-2'>
        <div className='text-xl'>{getTypeIcon(notification.type)}</div>
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-1'>
            <h4 className='font-medium text-white'>
:src/components/notifications/NotificationItem.tsx
              {notification.title |'Notification'}
=======
<<<<<<< HEAD
      <div className="flex items-start gap-2>
        <div className=text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1>
          <div className=flex justify-between items-center mb-1">
            <h4 className="font-medium text-white>
:src/components/notifications/NotificationItem.tsx
              {notification.title |'Notification}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="flex items-start gap-2">
        <div className="text-xl">{getTypeIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-white">
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </h4>
            {!notification.read && (
              <Badge className='bg-zion-cyan text-xs'>New</Badge>
            )}
          </div>
<<<<<<< HEAD

          <p className="text-sm text-zion-slate-light">

=======
<<<<<<< HEAD
          <p className='text-sm text-zion-slate-light'>
:src/components/notifications/NotificationItem.tsx
            {notification.message |'You have a new notification'}
=======
<<<<<<< HEAD
          <p className="text-sm text-zion-slate-light>
:src/components/notifications/NotificationItem.tsx
            {notification.message |You have a new notification'}
=======
          <p className="text-sm text-zion-slate-light">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </p>
          <div className='flex justify-between items-center mt-1'>
            <p className='text-xs text-zion-slate'>
              {notification.created_at
                ? formatDistanceToNow(new Date(notification.created_at), {
                    addSuffix: true})
                : 'Just now'}
            </p>

            {notification.action_url && notification.action_text && (
              <Button
<<<<<<< HEAD

=======
<<<<<<< HEAD
                variant='link'
                size='sm'
                className='text-zion-cyan p-0 h-auto'
=======
<<<<<<< HEAD
                variant=link"
                size="sm
                className=text-zion-cyan p-0 h-auto"
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
                onClick = {handleClick,}
              >

                {notification.action_text}
<<<<<<< HEAD
                <ChevronRight className='h-3 w-3 ml-1' />;
=======
<<<<<<< HEAD
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <ChevronRight className="h-3 w-3 ml-1 />;
>>>>>>> origin/resolved-merge-conflicts
              </Button>;

<<<<<<< HEAD
=======
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}

      {/* Action buttons that appear on hover */}
      <div className='absolute right-2 top-2 opacity-0 group-hover: opacity-100 transition-opacity flex gap-1'>;
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button
<<<<<<< HEAD

=======
<<<<<<< HEAD
                variant='ghost'
                size='icon'
                className='h-6 w-6'
=======
<<<<<<< HEAD
                variant="ghost
                size=icon"
                className="h-6 w-6
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
                onClick={(e,) => {
                  e.stopPropagation()
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                variant="ghost"
                size="icon"
                className="h-6 w-6"


                  e.stopPropagation(),
                  onMarkAsRead(notification.id)
                }
                aria-label='Mark as read'
              >
                <Check className='h-3.5 w-3.5 text-green-400' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as read</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

  };

  const handleMarkAsRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMarkAsRead(notification.id);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss(notification.id);
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50',
          !notification.read && 'bg-blue-50 border-l-4 border-blue-500'
        )}
        onClick={handleClick}
      >
        <div className='flex-shrink-0 mt-1'>
          {getTypeIcon(notification.type)}
        </div>
        
        <div className='flex-1 min-w-0'>
          <div className='flex items-start justify-between'>
            <div className='flex-1'>
              <p className={cn(
                'text-sm font-medium text-gray-900',
                !notification.read && 'font-semibold'
              )}>
                {notification.title}
              </p>
              <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
                {notification.message}
              </p>
            </div>
            
            <div className='flex items-center space-x-2 ml-2'>
              {!notification.read && (
                <Badge variant='secondary' className='text-xs'>
                  New
                </Badge>
              )}
              <span className='text-xs text-gray-500'>
                {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
          
          {notification.actionUrl && (
            <div className='flex items-center mt-2 text-xs text-blue-600'>
              <span>View details</span>
              <ChevronRight className='h-3 w-3 ml-1' />
            </div>
          )}
        </div>
        
        <div className='flex items-center space-x-1'>
          {!notification.read && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={handleMarkAsRead}
                  className='h-8 w-8 p-0'
                >
                  <Check className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mark as read</p>
              </TooltipContent>
            </Tooltip>
          )}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
<<<<<<< HEAD

                variant="ghost"
                size="sm"

=======
<<<<<<< HEAD
                variant='ghost'
=======
<<<<<<< HEAD
                variant=ghost"
>>>>>>> origin/resolved-merge-conflicts
:src/components/notifications/NotificationItem.tsx
                size='icon'
                className='h-6 w-6'
                onClick={(e,) => {
                  e.stopPropagation()
                  e.stopPropagation(),
                  onDismiss(notification.id)
<<<<<<< HEAD
                }
                aria-label='Dismiss notification'
                size='sm'
=======
                }}
                aria-label="Dismiss notification
                size=sm"
=======
                variant="ghost"
                size="sm"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                onClick={handleDismiss}
                className='h-8 w-8 p-0 text-gray-400 hover:text-red-500'
              >
                <Trash2 className='h-4 w-4' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dismiss</p>
            </TooltipContent>
          </Tooltip>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/notifications/NotificationItem.tsx
        </TooltipProvider>
      </div>;
    </div>;
  );
<<<<<<< HEAD
};
=======
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </div>);
},
;

      </div>
    </div>

        </div>
      </div>
    </TooltipProvider>
  );
};

  );
};
interface NotificationItemProps {;
  notification: Notification;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                  className='h-8 w-8 p-0';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className="h-8 w-8 p-0;
>>>>>>> origin/resolved-merge-conflicts
                >;
                  <Check className='h-4 w-4' />;
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Mark as read</p>;
              </TooltipContent>;
            </Tooltip>;
          )}<Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant='ghost';
                size='sm';
                onClick={handleDismiss}
                className='h-8 w-8 p-0 text-gray-400 hover:text-red-500';
              >;
                <Trash2 className='h-4 w-4' />;
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Dismiss</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
    </div>)},;
      </div>;
    </div>;
  )</div>;
      </div>;
    </TooltipProvider>;
  )})}interface NotificationItemProps  {notification: Notification;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> ;
}export const NotificationItem: React.FC<NotificationItemProps> = ({;
  notification;
onMarkAsRead;
onDismiss ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}) => {const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {addSuffix: true ';
}) : 'Just now' ;
}</p> {notification.action url && notification.action text && (<Button variant='link' size='sm' className='text-zion-cyan p-0 h-auto' onClick={handleClick ;
}> </Button>) ';
}</div> </div> </div> h-3.5 w-3.5 text-green-400'/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=' h-3.5 w-3.5 text-red-400' /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
};
''
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> </div> </div> h-3.5 w-3.5 text-green-400'/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=' h-3.5 w-3.5 text-red-400' /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>)}'';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}) => {;
  const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {;
  addSuffix: true ';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}) => {const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {addSuffix: true ;
=======
}) => {;
  const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {;
  addSuffix: true ';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}) : 'Just now' ;
}</p> {;
  notification.action url && notification.action text && (<Button variant="link" size="sm" className="text-zion-cyan p-0 h-auto" onClick={;
  handleClick ;
}> </Button>) ";
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
};
<<<<<<< HEAD

=======
<<<<<<< HEAD
'"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400 /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>) ;
}
'
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>)}'";
<<<<<<< HEAD

=======
=======
'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
