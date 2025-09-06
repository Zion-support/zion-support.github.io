import React from 'react';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Layout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Layout;