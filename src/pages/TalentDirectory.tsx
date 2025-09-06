import React from 'react';

interface TalentDirectoryProps {
  className?: string;
}

const TalentDirectory: React.FC<TalentDirectoryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDirectory</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDirectory;