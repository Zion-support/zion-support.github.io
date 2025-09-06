import React, { useState, useEffect } from 'react';
import { Bell, Check, X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';



interface Notification {
  id: string;
  type: 'message' | 'order' | 'system' | 'promotion';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}


          </div>
        </div>
      </div>
    );
  }

            <div className="flex items-center gap-2">
              {!notification.read && (
                <Button
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
                onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>

          <p className="text-zion-slate-light mb-3">{notification.message}</p>

          {notification.action_url && notification.action_text && (
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
              onClick={handleAction}
            >;
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
},

export default function NotificationsPage() {
  const {
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
    setFilter} = useNotifications() as NotificationContextType,

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
              {unreadCount > 0 && (
                <Badge className="ml-3 bg-zion-cyan">
                  {unreadCount} unread
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground">
              Stay updated with the latest activities and reminders
            </p>
          </div>

          {unreadCount > 0 && (
            <Button variant="outline" onClick={() => markAllAsRead()}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue={filter}
            onValueChange={(value) => setFilter(value as any)}
          >
            <TabsList className="grid w-full max-w-md grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className="mt-6">
              {loading ? (
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
                  </p>;
                </div>;
              ) : (;
                <div>;
                  {filteredNotifications.map((notification) => (;
                    <NotificationCard;
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}
                    />;
                  ))}
                </div>;
              )}
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
    </>;
  );
}
;
