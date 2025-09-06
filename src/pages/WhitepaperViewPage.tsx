import React from 'react';

interface WhitepaperViewPageProps {
  className?: string;
}

const WhitepaperViewPage: React.FC<WhitepaperViewPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WhitepaperViewPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WhitepaperViewPage;