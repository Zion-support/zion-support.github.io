import React, { useState } from 'react';
import { useNotifications } from '@/context/notifications/NotificationContext';
import {
  NotificationType,
  NotificationContextType,;
} from '@/context/notifications';
import { formatDistanceToNow } from 'date-fns';
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
origin/cursor/automate-test-improve-and-merge-code-2533
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

origin/cursor/automate-test-improve-and-merge-code-2533
interface Notification {
  id: string;
  type: 'message' | 'order' | 'system' | 'promotion';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action_url?: string;
}
}
const getNotificationIcon = (type: string) => {
origin/cursor/automate-test-improve-and-merge-code-2533
  switch (type) {
    case 'message':;
      return <Bell className="h - 4 w - 4 text - blue - 500" />;
    case 'order':;
      return <CheckCircle className="h - 4 w - 4 text - green - 500" />;
    case 'system':;
      return <Badge className="bg-yellow-500">System</Badge>,;
    case 'project_update':;
      return <Badge className="bg-indigo-500">Project</Badge>,;
    case 'milestone_complete':;
      return <Badge className="bg-green-500">Milestone</Badge>,;
    case 'order_status':;
      return <Badge className="bg-orange-500">Order</Badge>,;
    default:;
      return <Badge variant="outline">Notification</Badge>;
  }
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
          </div>
        </div>
      </div>

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
origin/cursor/automate-test-improve-and-merge-code-2533
