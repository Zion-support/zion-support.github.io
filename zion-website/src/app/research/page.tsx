import React from 'react';

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Page;