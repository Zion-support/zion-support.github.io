interface NotificationProps {
  type: 'message' | 'order' | 'default';
}
}
return <Badge className="bg - blue - 500">Message</Badge>;
      return <Badge className="bg - orange - 500">Order</Badge>;    default:;
      return <Badge variant="outline">Notification</Badge>;
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
  action_url?: string;
}




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

;
const getNotificationIcon = (type: string) =>: any {
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
