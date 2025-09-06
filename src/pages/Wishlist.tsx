import React from 'react';

interface WishlistProps {
  className?: string;
}

const Wishlist: React.FC<WishlistProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Wishlist</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Wishlist;