
<<<<<<< HEAD:src/components/notifications/NotificationList.tsx
import React from 'react';
import { ScrollArea, ,  } from '@/components/ui/scroll-area';
=======
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Skeleton from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { NotificationItem } from "./NotificationItem";
import { Notification } from "@/context/notifications";
import { EmptyState } from "@/components/ui/empty-state";
import { Bell } from "lucide-react";
interface NotificationListProps {onRetry: () => void}
import { ScrollArea } from '@/components/ui/scroll-area';
>>>>>>> pr-22703:temp-broken-files/components/notifications/NotificationList.tsx
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';
interface NotificationListProps {
onRetry: () => void}
export const NotificationList: React.FC<NotificationListProps> = ({
<<<<<<< HEAD:src/components/notifications/NotificationList.tsx
=======
})
>>>>>>> pr-22703:temp-broken-files/components/notifications/NotificationList.tsx
