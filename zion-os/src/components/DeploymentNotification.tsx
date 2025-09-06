import React from 'react';

interface DeploymentNotificationProps {
  className?: string;
}

const DeploymentNotification: React.FC<DeploymentNotificationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DeploymentNotification</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DeploymentNotification;