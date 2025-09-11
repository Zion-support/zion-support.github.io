export interface Notification {
  id: string;
  user_id: string;
  type: 'message' | 'onboarding' | 'system';
  title: string;
  message: string;
  read: boolean;
  created_at: string;
  updated_at?: string;
}

export type FilterType =
  | 'all'
  | 'unread'
  | 'messages'
  | 'onboarding'
  | 'system';

export interface NotificationContextType {
  notifications: Notification[];
  filteredNotifications: Notification[];
  unreadCount: number;
  loading: boolean;
  filter: FilterType;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  dismissNotification: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchNotifications: () => Promise<void>;
}
