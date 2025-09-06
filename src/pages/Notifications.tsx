import React from 'react';
import { Badge } from '@/components/ui/badge';
      return <Badge className="bg-blue-500">Message</Badge>;
      return <Badge className="bg-orange-500">Order</Badge>;    default:;
      return <Badge variant="outline">Notification</Badge>;

interface NotificationProps {
  type: 'message' | 'order' | 'default';

return <Badge className="bg - blue - 500">Message</Badge>;
      return <Badge className="bg - orange - 500">Order</Badge>;    default:;
      return <Badge variant="outline">Notification</Badge>;
interface Notification {
  id: string;
  type: 'message' | 'order' | 'system' | 'promotion';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action_url?: string;
