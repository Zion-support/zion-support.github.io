import React from 'react';

interface SearchProps {
  className?: string;
  children?: React.ReactNode;
}

const Search: React.FC<SearchProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`search ${className}`}>
      {children}
    </div>
  );
};

export default Search;