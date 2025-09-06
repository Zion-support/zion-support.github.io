import React from 'react';

interface InteractiveCardProps {
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InteractiveCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InteractiveCard;