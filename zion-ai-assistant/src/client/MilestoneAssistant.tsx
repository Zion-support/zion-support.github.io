import React from 'react';

interface MilestoneAssistantProps {
  className?: string;
}

const MilestoneAssistant: React.FC<MilestoneAssistantProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MilestoneAssistant</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MilestoneAssistant;