import React from 'react';

interface SitemapPageProps {
  className?: string;
  children?: React.ReactNode;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ className = '', children }) => {
  return (
    <div className={`sitemappage ${className}`}>
      {children}
    </div>
  );
};

export default SitemapPage;