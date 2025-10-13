import React from 'react';

interface InstantMessagingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function InstantMessaging({ className = '', children }: InstantMessagingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}