<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Bell, Check, X, AlertCircle, Info, CheckCircle } from 'lucide-react';
=======
import React, { useState } from 'react';
import { useNotifications } from '@/context/notifications/NotificationContext';
import {
  NotificationType,
  NotificationContextType,;
} from '@/context/notifications';
import { formatDistanceToNow } from 'date-fns';
import {
  Bell,
  Check,
  Trash2,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Briefcase,
  UserCheck,
  Settings,
  Package,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2c83
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface Notification {
  id: string;
  type: 'message' | 'order' | 'system' | 'promotion';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'message':
      return <Bell className="h-4 w-4 text-blue-500" />;
    case 'order':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'system':
      return <AlertCircle className="h-4 w-4 text-orange-500" />;
    case 'promotion':
      return <Info className="h-4 w-4 text-purple-500" />;
    default:
      return <Bell className="h-4 w-4 text-gray-500" />;
  }
}
const getNotificationBadge = (type: string) => {
  switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>;
    case 'order':
      return <Badge className="bg-orange-500">Order</Badge>;
    default:
      return <Badge variant="outline">Notification</Badge>;
  }
<<<<<<< HEAD
}
export default function Notifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Mock data - replace with actual API call
    const mockNotifications: Notification[] = [
      {
        id: '1'
        type: 'message'
        title: 'New Message'
        message: 'You have received a new message from John Doe'
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        read: false
        actionUrl: '/messaging'
      }
      {
        id: '2'
        type: 'order'
        title: 'Order Update'
        message: 'Your order #12345 has been shipped'
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        read: true
        actionUrl: '/orders'
      }
      {
        id: '3'
        type: 'system'
        title: 'System Maintenance'
        message: 'Scheduled maintenance will occur tonight at 2 AM'
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        read: false
      }
    ];
    setNotifications(mockNotifications);
    setLoading(false);
  }, []);
  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
    toast({
      title: "Success"
      description: "All notifications marked as read"
    });
  }
  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }
  const unreadCount = notifications.filter(n => !n.read).length;
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
=======
};

const NotificationCard: React.FC<{
  notification: {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;
    action_text?: string;
  };
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const router = useRouter();

  const handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }

    if (notification.action_url) {
      router.push(notification.action_url);
    }
  };

    >
      <div className='flex items-start gap-4'>
        <div className='mt-1'>
          {getNotificationIcon(notification.type, 'h-6 w-6')}
        </div>
        <div className='flex-1'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-medium text-white'>{notification.title}</h3>
              <div className='flex items-center gap-2 mb-2'>
                {getNotificationTypeBadge(notification.type)}
                <span className='text-xs text-zion-slate-light'>
                  {formatDistanceToNow(new Date(notification.created_at), {
                    addSuffix: true,
                  })}
                </span>
                {!notification.read && (
                  <Badge
                    variant='outline'
                    className='bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs'
                  >
                    New
                  </Badge>
                )}
              </div>
            </div>

            <div className='flex items-center gap-2'>
              {!notification.read && (
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0'
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className='h-4 w-4 text-green-400' />
                  <span className='sr-only'>Mark as read</span>
                </Button>
              )}
              <Button
                variant='ghost'
                size='sm'
                className='h-8 w-8 p-0'
                onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className='h-4 w-4 text-red-400' />
                <span className='sr-only'>Dismiss</span>
              </Button>
            </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
  }
<<<<<<< HEAD

=======
import React, { useState } from 'react';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { NotificationType;
  NotificationContextType } from '@/context/notifications';
import { formatDistanceToNow  } from 'date-fns';
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings, Package } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';
import { Badge  } from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';
import { SEO  } from '@/components/SEO';
import { useRouter  } from 'next/router';
import { cn } from '@/lib/utils';
const getNotificationIcon = null;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline">
            <Check className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
        )}
      </div>
      {notifications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Bell className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all hover:shadow-md ${
                !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        {getNotificationBadge(notification.type)}
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-2c83
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    </div>
  );
};
}
}

export default function NotificationsPage() {
  const {
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
    setFilter,
  } = useNotifications() as NotificationContextType;

  return (
    <>
      <SEO
        title='Notifications | Zion AI Marketplace'
        description='View and manage your notifications on the Zion AI Marketplace.'
      />
      <main className='container mx-auto px-4 py-8 min-h-screen'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className='text-3xl font-bold flex items-center'>
              <Bell className='mr-3 h-7 w-7' /> Notifications
              {unreadCount > 0 && (
                <Badge className='ml-3 bg-zion-cyan'>
                  {unreadCount} unread
                </Badge>
              )}
            </h1>
            <p className='text-muted-foreground'>
              Stay updated with the latest activities and reminders
            </p>
          </div>

          {unreadCount > 0 && (
            <Button variant='outline' onClick={() => markAllAsRead()}>
              <Check className='mr-2 h-4 w-4' />
              Mark all as read
            </Button>
          )}
        </div>

        <div className='mb-8'>
          <Tabs
            defaultValue={filter}
            onValueChange={value => setFilter(value as any)}
          >
            <TabsList className='grid w-full max-w-md grid-cols-6'>
              <TabsTrigger value='all'>All</TabsTrigger>
              <TabsTrigger value='unread'>Unread</TabsTrigger>
              <TabsTrigger value='onboarding'>Onboarding</TabsTrigger>
              <TabsTrigger value='messages'>Messages</TabsTrigger>
              <TabsTrigger value='system'>System</TabsTrigger>
              <TabsTrigger value='orders'>Orders</TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className='mt-6'>
              {loading ? (
                <div className='space-y-4'>
                  <Skeleton className='h-24 w-full rounded-lg' />
                  <Skeleton className='h-24 w-full rounded-lg' />
                  <Skeleton className='h-24 w-full rounded-lg' />
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className='text-center py-12 bg-muted rounded-lg'>
                  <Bell className='mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30' />
                  <h3 className='text-xl font-medium'>
                    No notifications found
                  </h3>
                  <p className='text-muted-foreground mt-1'>
                    {filter === 'all'
                      ? "You don't have any notifications yet"
                      : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map(notification => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );

};
const getNotificationTypeBadge = (type: NotificationType) => {;
  switch (type) {;
  case 'message': ;

};
const NotificationCard: React.FC< {;
  notification: {;
  id: string;
title: string;
message: string;
type: NotificationType;
read: boolean;
created at: string;
action url?: string;
action text?: string ;
};
onMarkAsRead: (id: string) => Promise<void>;
onDismiss: (id: string) => Promise<void> ;
}> = ({;
  notification,  onMarkAsRead, onDismiss ;
}) => {;
  const router = useRouter ();
if (!notification.read) {;

}</span> {;
  !notification.read && (<Badge variant="outline" className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs" > New </Badge>) ;
}</div> </div> onClick={;
  () => onMarkAsRead (notification.id) ";
}> <Check className="h-4 w-4 text-green-400" /> <span className="sr-only" >Mark as read</span> </Button>) ";
}<Button > <Trash2 className="h-4 w-4 text-red-400" /> <span className="sr-only" >Dismiss</span> </Button> </div> </div> {";
  notification.action url && notification.action text && (<Button variant="outline" size="sm" className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black" onClick={;
  handleAction ;
}> </Button>) ;
}</div> </div> </div>) ;
};";
return (<> <SEO title="Notifications | Zion AI Marketplace" description="View and manage your notifications on the Zion AI Marketplace." /> <main className="container mx-auto px-4 py-8 min-h-screen" > <div className="flex justify-between items-center mb-6" > <div> {;
  unreadCount ;
}unread </Badge>) ";
}</h1> <p className="text-muted-foreground" > Stay updated with the latest activities and reminders </p> </div> Mark all as read </Button>) ";
}</div> <div className="mb-8" > <Tabs defaultValue= {;
  filter ;
}onValueChange= {;
  (value) => setFilter (value as any) ";
}> <TabsList className="grid w-full max-w-md grid-cols-6" > <TabsTrigger value="all" >All</TabsTrigger> <TabsTrigger value="unread" >Unread</TabsTrigger> <TabsTrigger value="onboarding" >Onboarding</TabsTrigger> <TabsTrigger value="messages" >Messages</TabsTrigger> <TabsTrigger value="system" >System</TabsTrigger> <TabsTrigger value="orders" >Orders</TabsTrigger> </TabsList> </div>) : filteredNotifications.length === 0 ? (<div className="text-center py-12 bg-muted rounded-lg" > <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" /> <h3 className="text-xl font-medium" > No notifications found </h3> <p className="text-muted-foreground mt-1" > {'";
  filter === 'all' ? "You don't have any notifications yet" : `You don't have any $ {;
  filter ;
}notifications` ;
}</p> </div>) : (<div> {;
  filteredNotifications.map ( (notification) => (<NotificationCard key= {;
  notification.id ;
}notification= {;
  notification ;
}onMarkAsRead= {;
  markAsRead ;
}onDismiss= {;
  dismissNotification ;
}/>) ) ;
}</div>) ;
}</TabsContent> </Tabs> </div> </main> </>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
