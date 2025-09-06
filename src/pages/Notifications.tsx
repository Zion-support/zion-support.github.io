=======
interface NotificationProps {
  type: 'message' | 'order' | 'default';
}


export function NotificationBadge({ type }: NotificationProps) {
  switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>;
    case 'order':
      return <Badge className="bg-orange-500">Order</Badge>;
    default:
      return <Badge variant="outline">Notification</Badge>;
  }
}

export default function NotificationsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <p className="text-muted-foreground">Your notifications will appear here.</p>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Bell, Check, X, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';






>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


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
