import React, {_useState} from 'react';
import {_NotificationType, _NotificationContextType} from '@/context/notifications';
import Skeleton from '@/components/ui/skeleton';

const _getNotificationIcon = (_type: NotificationType, _className: string = 'h-5 w-5', ) => {_switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, _'text-blue-500')} />;
    case 'quote_request':
      return <Briefcase className={_cn(className, _'text-purple-500')} />;
    case 'booking_confirmation':
      return <CheckCircle className={_cn(className, _'text-green-500')} />;
    case 'hire_request':
      return <UserCheck className={_cn(className, _'text-zion-purple')} />;
    case 'onboarding':
      return <Settings className={_cn(className, _'text-zion-cyan')} />;
    case 'system':
      return <AlertCircle className={_cn(className, _'text-yellow-500')} />;
    case 'project_update':
      return <Briefcase className={_cn(className, _'text-indigo-400')} />;
    case 'milestone_complete':
      return <CheckCircle className={_cn(className, _'text-green-500')} />;
    case 'order_status':
      return <Package className={_cn(className, _'text-orange-500')} />;
    default:
      return <Bell className={_cn(className, _'text-gray-500')} />;
  }
};

const _getNotificationTypeBadge = (_type: NotificationType) => {_switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>;
    case 'quote_request':
      return <Badge className="bg-purple-500">Quote Request</Badge>;
    case 'booking_confirmation':
      return <Badge className="bg-green-500">Booking</Badge>;
    case 'hire_request':
      return <Badge className="bg-zion-purple">Hire Request</Badge>;
    case 'onboarding':
      return <Badge className="bg-zion-cyan">Onboarding</Badge>;
    case 'system':
      return <Badge className="bg-yellow-500">System</Badge>;
    case 'project_update':
      return <Badge className="bg-indigo-500">Project</Badge>;
    case 'milestone_complete':
      return <Badge className="bg-green-500">Milestone</Badge>;
    case 'order_status':
      return <Badge className="bg-orange-500">Order</Badge>;
    default:
      return <Badge variant="outline">Notification</Badge>;}
};

const NotificationCard: React.FC<{_notification: {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;
    action_text?: string;};
  onMarkAsRead: (_id: string) => Promise<void>;
  onDismiss: (_id: string) => Promise<void>;
}> = (_{_notification, _onMarkAsRead, _onDismiss}) => {_const _router = useRouter();

  const _handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);}

    if (notification.action_url) {_router.push(notification.action_url);}
  };

  return (
    <div
      className={_cn(
        'border rounded-lg shadow-sm p-4 mb-3 group transition-colors', _notification.read
          ? 'border-zion-blue-light bg-zion-blue-dark/10'
          : 'border-zion-cyan bg-zion-blue-dark/30', _)}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {_getNotificationIcon(notification.type, _'h-6 w-6')}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-medium text-white">{_notification.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {_getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">
                  {_formatDistanceToNow(new Date(notification.created_at), _{
                    addSuffix: true})}
                </span>
                {_!notification.read && (
                  <Badge
                    variant="outline"
                    className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs"
                  >
                    New
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {_!notification.read && (_<Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="sr-only">Mark as read</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={_() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>

          <p className="text-zion-slate-light mb-3">{_notification.message}</p>

          {_notification.action_url && notification.action_text && (
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
              onClick={handleAction}
            >
              {_notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function NotificationsPage() {_const {
    filteredNotifications, _unreadCount, _markAsRead, _markAllAsRead, _dismissNotification, _loading, _filter, _setFilter} = useNotifications() as NotificationContextType;

  return (
    <>
      <SEO
        title="Notifications | Zion AI Marketplace"
        description="View and manage your notifications on the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Bell className="mr-3 h-7 w-7" /> Notifications
              {_unreadCount > 0 && (
                <Badge className="ml-3 bg-zion-cyan">
                  {unreadCount} unread
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground">
              Stay updated with the latest activities and reminders
            </p>
          </div>

          {_unreadCount > 0 && (_<Button variant="outline" onClick={() => markAllAsRead()}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue={_filter}
            onValueChange={_(_value) => setFilter(value as any)}
          >
            <TabsList className="grid w-full max-w-md grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value={_filter} className="mt-6">
              {_loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />
                  <h3 className="text-xl font-medium">
                    No notifications found
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {filter === 'all'
                      ? "You don't have any notifications yet"
                      : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (_<div>
                  {_filteredNotifications.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={_notification}
                      onMarkAsRead={_markAsRead}
                      onDismiss={_dismissNotification}
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
}
