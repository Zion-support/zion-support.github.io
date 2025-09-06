import React from 'react';

interface OrdersProps {
  className?: string;
}

const Orders: React.FC<OrdersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Orders</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Orders;