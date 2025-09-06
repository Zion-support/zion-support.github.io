import React from 'react';

interface RatingStars.testProps {
  className?: string;
}

const RatingStars.test: React.FC<RatingStars.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RatingStars.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RatingStars.test;