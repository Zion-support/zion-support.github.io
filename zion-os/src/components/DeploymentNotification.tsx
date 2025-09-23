import React from 'react';

export interface DeploymentNotificationProps {
  message?: string;
}

export function DeploymentNotification({ message = 'New version deployed' }: DeploymentNotificationProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg border border-white/10">
      {message}
    </div>
  );
}

export default DeploymentNotification;
