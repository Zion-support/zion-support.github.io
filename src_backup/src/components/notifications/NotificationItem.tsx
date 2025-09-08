
;
import React from 'react';'
// Use the centralized icon wrapper to avoid missing icons;
import { Check, Trash2, ChevronRight  } from 'lucide-react';'
import { Button   } from '@/components/ui/button';'
import { Badge   } from '@/components/ui/badge';'
import { formatDistanceToNow   } from 'date-fns';'
import { cn  } from '@/lib/utils';'
import { Tooltip;
  }
  TooltipContent;
  TooltipProvider;
  TooltipTrigger  } from '@/components/ui/tooltip';'
import { useRouter   } from 'next/router';'
import { Notification, NotificationType  } from '@/context/notifications';'
export const getTypeIcon = null;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';'
import { useRouter  } from 'next/router';'
      return <span className="text-blue-500">💬</span>;"
      return <span className="text-orange-500">📦</span>;"
    "default":;
      return <span className="text-gray-500">📣</span>;"
  "notification": Notification;
  "onMarkAsRead": ("id": string) => Promise<void>;
  "onDismiss": ("id": string) => Promise<void>;
  onMarkAsRead;
  onDismiss;
}) => {className={cn(onMarkAsRead(notification.id)import React from 'react';'
// Use the centralized icon wrapper to avoid missing icons;
}
import { Button  } from '@/components/ui/button';'
import { Badge  } from '@/components/ui/badge';'
import { formatDistanceToNow  } from 'date-fns';'
  Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from '@/components/ui/tooltip';'
export const getTypeIcon = ("type": NotificationType,) => {switch (type) {case 'message':;'
      }
      return <span className="text-blue-500">💬</span>;"
    case 'quote_request':;'
      return <span className="text-purple-500">📝</span>;"
    case 'booking_confirmation':;'
      return <span className="text-green-500">✅</span>;"
    case 'hire_request':;'
      return <span className="text-zion-purple">🤝</span>;"
    case 'onboarding':;'
      return <span className="text-zion-cyan">🚀</span>;"
    case 'system':;'
      return <span className="text-yellow-500">⚠️</span>;"
    case 'project_update':;'
      return <span className="text-indigo-400">📌</span>;"
    case 'milestone_complete':;'
      return <span className="text-green-500">🏁</span>;"
    case 'order_status':;'
      return <span className="text-orange-500">📦</span>;"
    "default":;
      return <span className="text-gray-500">📣</span>;"
import React from 'react',// Use the centralized icon wrapper to avoid missing icons;'
import { Button } from '@/components/ui/button',import { Badge } from '@/components/ui/badge',import { formatDistanceToNow } from 'date-fns',import { cn } from '@/lib/utils',Tooltip,TooltipContent,TooltipProvider,// Use the centralized icon wrapper to avoid missing icons;'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip',import { useRouter } from 'next/router',import { Notification, NotificationType } from '@/context/notifications',export const getTypeIcon = ("type": NotificationType) => {switch (type) {case 'message':;'
      }
      return <span className="text-blue-500">💬</span>,case 'quote_request':;'
      return <span className="text-purple-500">📝</span>,case 'booking_confirmation':;'
      return <span className="text-green-500">✅</span>,case 'hire_request':;'
      return <span className="text-zion-purple">🤝</span>,case 'onboarding':;'
      return <span className="text-zion-cyan">🚀</span>,case 'system':;'
      return <span className="text-yellow-500">⚠️</span>,case 'project_update':;'
      return <span className="text-indigo-400">📌</span>,case 'milestone_complete':;'
      return <span className="text-green-500">🏁</span>,case 'order_status':;'
      return <span className="text-orange-500">📦</span>,"default":;"
  Tooltip,TooltipContent,TooltipProvider,TooltipTrigger;
} from '@/components/ui/tooltip';'
export const getTypeIcon = ("type": NotificationType) => {switch (type) {case 'message':;'
      }
      return <span className="text-blue-500">💬</span>;"
    case 'quote_request':;'
      return <span className="text-purple-500">📝</span>;"
    case 'booking_confirmation':;'
      return <span className="text-green-500">✅</span>;"
    case 'hire_request':;'
      return <span className="text-zion-purple">🤝</span>;"
    case 'project_update':;'
      return <span className="text-orange-500">📦</span>;"
    "default":;
      return <span className="text-gray-500">📣</span>;"
  }
}
interface NotificationItemProps  {"notification": Notification;
  }
  "onMarkAsRead": ("id": string,) => Promise<void>;
  "onDismiss": ("id": string,) => Promise<void>;
}
export const "NotificationItem": React.FC<NotificationItemProps> = ({notification;
  }
  onMarkAsRead;
  onDismiss},) => {const router = useRouter(), // Changed from useNavigate to useRouter;
  }
  const handleClick = () => {if (!notification.read) {onMarkAsRead(notification.id)}
    // If there's an action URL, navigate to it;'
    if (notification.action_url) {router.push(notification.action_url), // Changed to router.push;
    }return (<div;
      className = {cn('p-3 border-b border-zion-blue-light relative group';'
        !notification.read ? 'bg-zion-blue-dark/30' : '')}'
  },return (<div;
      className={cn('p-3 border-b border-zion-blue-light relative group',!notification.read ? 'bg-zion-blue-dark/30' : '')}>;'
      <div className="flex items-start gap-2">;"
        <div className="text-xl">{getTypeIcon(notification.type)}</div>;"
        <div className="flex-1">;"
          <div className="flex justify-between items-center mb-1">;"
            <h4 className="font-medium text-white">;"
            </h4>;
            {!notification.read && (<Badge className="bg-zion-cyan text-xs">New</Badge>;"
            )}
          </div>;
          <p className="text-sm text-zion-slate-light">;"
          </p>;
          <div className="flex justify-between items-center mt-1">;"
            <p className="text-xs text-zion-slate">;"
              {notification.created_at;
                ? formatDistanceToNow(new Date(notification.created_at), {"addSuffix": true}): 'Just now'}'
            </p>;
            {notification.action_url && notification.action_text && (<Button;
                }
                variant="link";"
                size="sm";"
                className="text-zion-cyan p-0 h-auto";"
                {notification.action_text}
                <ChevronRight className="h-3 w-3 ml-1" />;"
              </Button>;
            )}
          </div>;
        </div>;
      </div>;
      {/* Action buttons that appear on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-"hover": opacity-100 transition-opacity flex gap-1">;"
        <TooltipProvider>;
          <Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";"
                size="icon";"
                className="h-6 w-6";"
                onClick={(e) => {onClick={(e) => {e.stopPropagation(),onMarkAsRead(notification.id)}
                aria-label="Mark as read";"
              >;
                <Check className="h-3.5 w-3.5 text-green-400" />;"
              </Button>;
            </TooltipTrigger>;
            <TooltipContent>;
              <p>Mark as read</p>;
            </TooltipContent>;
          </Tooltip>;
        </TooltipProvider>;
        <TooltipProvider>;
  }const handleMarkAsRead = ("e": React.MouseEvent) => {e.stopPropagation()onMarkAsRead(notification.id)}const handleDismiss = ("e": React.MouseEvent) => {e.stopPropagation()onDismiss(notification.id)}return (<TooltipProvider>;
      <div;
        className={cn('flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors "hover":bg-gray-50',!notification.read && 'bg-blue-50 border-l-4 border-blue-500';'
        )}
        onClick={handleClick}
      >;
        <div className="flex-shrink-0 mt-1">;"
          {getTypeIcon(notification.type)}
        </div>;
        <div className="flex-1 min-w-0">;"
          <div className="flex items-start justify-between">;"
            <div className="flex-1">;"
              <p className={cn('text-sm font-medium text-gray-900',!notification.read && 'font-semibold';'
              )}>;
                {notification.title}
              </p>;
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">;"
                {notification.message}
              </p>;
            </div>;
            <div className="flex items-center space-x-2 ml-2">;"
              {!notification.read && (<Badge variant="secondary" className="text-xs">;"
                  }
                  New;
                </Badge>;
              )}
              <span className="text-xs text-gray-500">;"
                {formatDistanceToNow(new Date(notification.createdAt), { "addSuffix": true })}
              </span>;
            </div>;
          </div>;
          {notification.actionUrl && (<div className="flex items-center mt-2 text-xs text-blue-600">;"
              <span>View details</span>;
              <ChevronRight className="h-3 w-3 ml-1" />;"
            </div>;
          )}
        </div>;
        <div className="flex items-center space-x-1">;"
          {!notification.read && (<Tooltip>;
              <TooltipTrigger asChild>;
                <Button;
                  }
                  variant="ghost";"
                  size="sm";"
                  onClick={handleMarkAsRead}
                  className="h-8 w-8 p-0";"
                >;
                  <Check className="h-4 w-4" />;"
                </Button>;
              </TooltipTrigger>;
              <TooltipContent>;
                <p>Mark as read</p>;
              </TooltipContent>;
            </Tooltip>;
          )}<Tooltip>;
            <TooltipTrigger asChild>;
              <Button;
                variant="ghost";"
                size="sm";"
                onClick={handleDismiss}
                className="h-8 w-8 p-0 text-gray-400 "hover":text-red-500";"
              >;
                <Trash2 className="h-4 w-4" />;"
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
  )})}interface NotificationItemProps  {"notification": Notification;
}
"onMarkAsRead": ("id": string) => Promise<void>;
"onDismiss": ("id": string) => Promise<void> ;
}export const "NotificationItem": React.FC<NotificationItemProps> = ({notification;
}
onMarkAsRead;
onDismiss ;
}) => {const router = useRouter (), //Changed from useNavigate to useRouter if (!notification.read) {"addSuffix": true ';'
}) : 'Just now' ;'
}</p> {notification.action url && notification.action text && (<Button variant="link" size="sm" className="text-zion-cyan p-0 h-auto" onClick={handleClick ;"
}> </Button>) ";"
}</div> </div> </div> h-3.5 w-3.5 text-green-400"/> </Button> </TooltipTrigger> <TooltipContent> <p>Mark as read</p> </TooltipContent> </Tooltip> </TooltipProvider> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button > <Trash2 className=" h-3.5 w-3.5 text-red-400" /> </Button> </TooltipTrigger> <TooltipContent> <p>Dismiss</p> </TooltipContent> </Tooltip> </TooltipProvider> </div> </div>)}'";