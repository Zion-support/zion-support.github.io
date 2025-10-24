import React from 'react';

interface InstantMessagingProps {
  className?: string;
  children?: React.ReactNode;
}

export const InstantMessaging: React.FC<InstantMessagingProps> = ({ className = '', children }) => {
  return (
    <div className={`instantmessaging ${className}`}>
      {children}
    </div>
  );
};

export default InstantMessaging;