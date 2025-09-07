import React, { useState } from 'react';
import { useNotifications } from '@/context/notifications/NotificationContext';
import {
  NotificationType,
  NotificationContextType} from '@/context/notifications',
import { formatDistanceToNow } from 'date-fns';
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings, Package } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';
import { SEO } from '@/components/SEO';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
const getNotificationIcon = $2;
  className: string = 'h-5 w-5') => {
  switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, 'text-blue-500')} />,
    case 'quote_request':
      return <Briefcase className={cn(className, 'text-purple-500')} />,
    case 'booking_confirmation':
      return <CheckCircle className={cn(className, 'text-green-500')} />,
    case 'hire_request':
      return <UserCheck className={cn(className, 'text-zion-purple')} />,
    case 'onboarding':
      return <Settings className={cn(className, 'text-zion-cyan')} />,
    case 'system':
      return <AlertCircle className={cn(className, 'text-yellow-500')} />,
    case 'project_update':
      return <Briefcase className={cn(className, 'text-indigo-400')} />,
    case 'milestone_complete':
      return <CheckCircle className={cn(className, 'text-green-500')} />,
    case 'order_status':
      return <Package className={cn(className, 'text-orange-500')} />,
    default:
      return <Bell className={cn(className, 'text-gray-500')} />
  }
},

const getNotificationTypeBadge = $2;
    case 'quote_request':
      return <Badge className = $2;
    case 'booking_confirmation':
      return <Badge className = $2;
    case 'hire_request':
      return <Badge className = $2;
    case 'onboarding':
      return <Badge className = $2;
    case 'system':
      return <Badge className = $2;
    case 'project_update':
      return <Badge className = $2;
    case 'milestone_complete':
      return <Badge className = $2;
    case 'order_status':
      return <Badge className = $2;
    default:
      return <Badge variant = $2;
const NotificationCard: React.FC<{
  notification: {
    id: string,
    title: string,
    message: string,
    type: NotificationType,
    read: boolean,
    created_at: string,
    action_url?: string,
    action_text?: string
  },
  onMarkAsRead: (id: string) => Promise<void>,
  onDismiss: (id: string) => Promise<void>
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const router = useRouter($2);
  const handleAction = $2;
  return (<div
      className = $2;
        notification.read
          ? 'border-zion-blue-light bg-zion-blue-dark/10'
          : 'border-zion-cyan bg-zion-blue-dark/30')}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {getNotificationIcon(notification.type, 'h-6 w-6')}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-medium text-white">{notification.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">
                  {formatDistanceToNow(new Date(notification.created_at), {
                    addSuffix: true})}
                </span>
                {!notification.read && (
                  <Badge
                    variant = $2;
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
                  </p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map((notification) => (
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
  )
}
