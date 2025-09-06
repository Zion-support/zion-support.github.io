import React from 'react';

interface StarRating.testProps {
  className?: string;
}

const StarRating.test: React.FC<StarRating.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StarRating.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StarRating.test;