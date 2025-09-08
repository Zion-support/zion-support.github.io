import React, { createContext, useContext, ReactNode } from 'react';
import { useNotificationOperations } from './useNotificationOperations';
import { NotificationContextType } from './types';
import { useAuthState } from '../auth/useAuthState';

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { user } = useAuthState();
  const notificationOperations = useNotificationOperations(user?.id);

  return (
    <NotificationContext.Provider value={notificationOperations}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};