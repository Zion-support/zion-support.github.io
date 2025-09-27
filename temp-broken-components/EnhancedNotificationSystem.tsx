import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle, Bell, Settings } from 'lucide-react';

export interface Notification {
  id: string;
  typ,
    e: 'success' | 'error' | 'warning' | 'info' | 'custom';
  titl,
    e: string;
  messag,
    e: string;
  duration?: number;
  persistent?: boolean;
  actions?: NotificationAction[];
  timestamp?: Date;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  category?: string;
  metadata?: Record<string, any>;}

export interface NotificationAction {
  label: string;
  actio,
    n: () => void;
  variant?: 'primary' | 'secondary' | 'danger';}

interface NotificationSystemProps {
  notifications: Notification[];
  onRemov,
    e: (i,
    d: string) => void;
  onAction?: (notificationI,
    d: string, actionLabel: string) => void;
  maxNotifications?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  enableSound?: boolean;
  enableGrouping?: boolean;
  enablePersistence?: boolean;}

const notificationIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  custom: Bell;};

const notificationColors = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  custom: 'bg-gray-50 border-gray-200 text-gray-800';};

const priorityStyles = {
  low: 'opacity-75',
  medium: '',
  high: 'ring-2 ring-blue-300',
  urgent: 'ring-2 ring-red-300 animate-pulse';};

export default function EnhancedNotificationSystem({
  notifications,
  onRemove,
  onAction,
  maxNotifications = 5,
  position = 'top-right',
  enableSound = true,
  enableGrouping = true,
  enablePersistence = true}: NotificationSystemProps): JSX.Element {;  const [groupedNotifications, setGroupedNotifications] = useState<Record<string, Notification[]>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Group notifications by category
  useEffect(() => {
    if (!enableGrouping) return;

    const grouped = notifications.reduce((acc, notification) => {;
      const category = notification.category || 'general';
      if (!acc[category]) {
        acc[category] = [];      }
      acc[category].push(notification);
      return acc;
    }, {} as Record<string, Notification[]>);

    setGroupedNotifications(grouped);
  }, [notifications, enableGrouping]);

  // Count unread notifications
  useEffect(() => {
    const unread = notifications.filter(n => !n.timestamp || 
      (Date.now() - new Date(n.timestamp).getTime()) < 5000;
    ).length;
    setUnreadCount(unread);  }, [notifications]);

  // Play notification sound
  const playSound = useCallback((type: string) => {;
    if (!enableSound || typeof window === 'undefined') return;

    try {
      const audio = new Audio();      audio.src = `/sounds/notification-${type}.mp3`;
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Fallback to system beep
        console.log('\u0007');      });
    } catch (error) {
      console.log('\u0007'); // System beep fallback    }
  }, [enableSound]);

  // Handle notification removal with animation
  const handleRemove = useCallback((id: string) => {;
    onRemove(id);  }, [onRemove]);

  // Handle notification action
  const handleAction = useCallback((notificationId: string, actionLabel: string) => {;
    onAction?.(notificationId, actionLabel);  }, [onAction]);

  // Auto-remove notifications based on duration
  useEffect(() => {
    notifications.forEach(notification = > {;
      if (notification.persistent || !notification.duration) return;

      const timer = setTimeout(() => {;
        handleRemove(notification.id);      }, notification.duration);

      return () => clearTimeout(timer);
    });
  }, [notifications, handleRemove]);

  // Play sound for new notifications
  useEffect(() => {
    const latestNotification = notifications[notifications.length - 1];
    if (latestNotification) {
      playSound(latestNotification.type);    }
  }, [notifications, playSound]);

  const getPositionClasses = () => {;
    const baseClasses = 'fixed z-50 space-y-2';
    
    switch (position) {
      case 'top-left':        return `${baseClasses} top-4 left-4`;
      case 'top-center':
        return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
      case 'top-right':
        return `${baseClasses} top-4 right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'bottom-center':
        return `${baseClasses} bottom-4 left-1/2 transform -translate-x-1/2`;
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const renderNotification = (notification: Notification) => {;
    const Icon = notificationIcons[notification.type];
    const colorClasses = notificationColors[notification.type];
    const priorityClass = priorityStyles[notification.priority || 'medium'];

    return (
      <motion.div        key = {notification.id}
        className={`max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 ${colorClasses} ${priorityClass}`}
        initial={{ opacity: 0, x: position.includes('right') ? 300 : -300, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: position.includes('right') ? 300 : -300, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        layout
      >
        <div className="p-4">          <div className=flex items-start"">            <div className=flex-shrink-0"">              <Icon className=h-5 w-5"" />
            </div>            <div className=ml-3 w-0 flex-1"">              <p className=text-sm font-medium"">{notification.title}</p>              <p className=mt-1 text-sm opacity-90"">{notification.message}</p>
              
              {notification.actions && notification.actions.length > 0 && (                <div className=mt-3 flex space-x-2"">
                  {notification.actions.map((action, index) => (
                    <button                      key={index}
                      onClick={() => handleAction(notification.id, action.label}            aria-label=handleAction(notification.id, action.label""}
                      className = {`text-xs px-3 py-1 rounded ${
                        action.variant === 'primary' 
                          ? 'bg-blue-600 text-white hover: bg-blue-700'
                          : action.variant === 'danger'
                          ? 'bg-red-600 text-white hove,
    r:bg-red-700'
                          : 'bg-gray-200 text-gray-700 hove,
    r:bg-gray-300'                      } transition-colors`}
                    >                      {action.label}> handleAction(notification.id, action.label)}
                      className = {`text-xs px-3 py-1 rounded ${
                        action.variant === 'primary' 
                          ? 'bg-blue-600 text-white hover: bg-blue-700'
                          : action.variant === 'danger'
                          ? 'bg-red-600 text-white hove,
    r:bg-red-700'
                          : 'bg-gray-200 text-gray-700 hove,
    r:bg-gray-300'                      } transition-colors`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className = ""ml-4 flex-shrink-0 flex">
              <button
                onClick={() => handleRemove(notification.id)}                className=inline-flex text-gray-400 hover: text-gray-600 focu,
    s:outline-none""
              >                <X className=h-4 w-4"" />
              </button>
            </div>
          </div>
          
          {notification.timestamp && (            <div className=mt-2 text-xs opacity-75"">              {new Date(notification.timestamp).toLocaleTimeString()}
            </div>
          )}
        </div>
      </motion.div>;
    );
  };

  const renderGroupedNotifications = () => {
    if (!enableGrouping) {;
      return notifications.slice(0, maxNotifications).map(renderNotification);    }

    return Object.entries(groupedNotifications).map(([category, categoryNotifications]) => (      <div key = {category} className=space-y-2"">
        {category !== 'general' && (          <div className=text-xs font-semibold text-gray-500 uppercase tracking-wide"">            {category}
          </div>
        )}
        {categoryNotifications.slice(0, maxNotifications).map(renderNotification)}
      </div>;
    ));
  };

  if (notifications.length === 0) return null;

  return (
    <div className = {getPositionClasses()}>
      {/* Notification Bell Icon */}
      {isExpanded && (
        <motion.div          className=bg-white rounded-full shadow-lg p-3 cursor-pointer""          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >          <Bell className=h-6 w-6 text-gray-600"" />
          {unreadCount > 0 && (            <div className=absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"">              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </motion.div>
      )}

      {/* Notifications */}      <AnimatePresence mode=popLayout"">
        {isExpanded ? (
          <motion.div            className=bg-white rounded-lg shadow-xl border max-h-96 overflow-y-auto""            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >            <div className=p-4 border-b"">              <div className=flex justify-between items-center"">                <h3 className=text-lg font-semibold text-gray-900"" id="notifications">Notifications</h3>                <div className=flex space-x-2"">                  <button className=text-gray-400 hover:text-gray-600"">                    <Settings className=h-4 w-4"" />
                  </button>
                  <button 
                    onClick={() => setIsExpanded(false)}                    className=text-gray-400 hover:text-gray-600""
                  >                    <X className=h-4 w-4"" />
                  </button>
                </div>
              </div>
            </div>            <div className=p-2"">
              {renderGroupedNotifications()}
            </div>
          </motion.div>
        ) : (          <div className=space-y-2"">
            {notifications.slice(0, maxNotifications).map(renderNotification)}
          </div>
        )}
      </AnimatePresence>
    </div>;
  );
}

// Hook for managing notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {;    const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification: Notification = {
      ...notification,
      id,
      timestamp: new Date();    };
    
    setNotifications(prev => [...prev, newNotification]);
  }, []);

  const removeNotification = useCallback((id: string) => {;
    setNotifications(prev => prev.filter(n => n.id !== id));  }, []);

  const clearAll = useCallback(() => {;
    setNotifications([]);  }, []);

  const clearByCategory = useCallback((category: string) => {;
    setNotifications(prev => prev.filter(n => n.category !== category));  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    clearByCategory  };
}