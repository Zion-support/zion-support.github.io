import { Bell } from 'lucide-react';
import React from 'react';

export const NotificationBell: React.FC = () => {
  return (
    <div aria-label="notifications" title="Notifications">
      <Bell size={18} className="text-zion-cyan" />
    </div>
  );
};

export default NotificationBell;

