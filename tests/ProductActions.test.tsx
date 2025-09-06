import React from 'react';

interface ProductActions.testProps {
  className?: string;
}

const ProductActions.test: React.FC<ProductActions.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductActions.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductActions.test;