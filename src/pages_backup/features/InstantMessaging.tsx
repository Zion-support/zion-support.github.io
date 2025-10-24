import React from 'react';

interface InstantMessagingProps {
  className?: string;
}

export default function InstantMessaging({ className }: InstantMessagingProps) {
  return (
    <div className={className}>
      <h1>InstantMessaging</h1>
      <p>Component content</p>
    </div>
  );
}