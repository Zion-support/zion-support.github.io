<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import { Bell, Check, X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee




>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
interface Notification {
  id: string;
  type: 'message' | 'order' | 'system' | 'promotion';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action_url?: string;
}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from 'react',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import {;
  NotificationType,;
  NotificationContextType} from '@/context/notifications',;
import { formatDistanceToNow } from 'date-fns',;
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings, Package } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',;
import { Badge } from '@/components/ui/badge',;
import Skeleton from '@/components/ui/skeleton',;
import { SEO } from '@/components/SEO',;
import { useRouter } from 'next/router',;
import { cn } from '@/lib/utils',;
const getNotificationIcon = (;
  type: NotificationType,;
  className: string = 'h-5 w-5') => {;
  switch (type) {;
    case 'message':;
      return <MessageCircle className={cn(className, 'text-blue-500')} />,;
    case 'quote_request':;
      return <Briefcase className={cn(className, 'text-purple-500')} />,;
    case 'booking_confirmation':;
      return <CheckCircle className={cn(className, 'text-green-500')} />,;
    case 'hire_request':;
      return <UserCheck className={cn(className, 'text-zion-purple')} />,;
    case 'onboarding':;
      return <Settings className={cn(className, 'text-zion-cyan')} />,;
    case 'system':;
      return <AlertCircle className={cn(className, 'text-yellow-500')} />,;
    case 'project_update':;
      return <Briefcase className={cn(className, 'text-indigo-400')} />,;
    case 'milestone_complete':;
      return <CheckCircle className={cn(className, 'text-green-500')} />,;
    case 'order_status':;
      return <Package className={cn(className, 'text-orange-500')} />,;
    default:;
      return <Bell className={cn(className, 'text-gray-500')} />;
  }
},


>>>>>>> >>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
;
const getNotificationIcon = (type: string) =>: any {
  switch (type) {
    case 'message':;
      return <Bell className="h - 4 w - 4 text - blue - 500" />;
    case 'order':;
      return <CheckCircle className="h - 4 w - 4 text - green - 500" />;
    case 'system':;
      return <AlertCircle className="h - 4 w - 4 text - orange - 500" />;
    case 'promotion':;
      return <Info className="h - 4 w - 4 text - purple - 500" />;
    default:;
      return <Bell className="h - 4 w - 4 text - gray - 500" />;
  }
}
;
const getNotificationBadge = (type: string) =>: any {
  switch (type) {
    case 'message':;
      return <Badge className="bg - blue - 500">Message</Badge>;
    case 'order':;
      return <Badge className="bg - orange - 500">Order</Badge>;
    default:;
      return <Badge variant="outline">Notification</Badge>;
  }
}
;
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
