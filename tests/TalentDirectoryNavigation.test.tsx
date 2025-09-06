import React from 'react';

interface TalentDirectoryNavigation.testProps {
  className?: string;
}

const TalentDirectoryNavigation.test: React.FC<TalentDirectoryNavigation.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentDirectoryNavigation.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentDirectoryNavigation.test;