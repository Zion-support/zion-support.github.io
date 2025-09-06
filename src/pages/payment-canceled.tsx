import React from 'react';

interface Payment-canceledProps {
  className?: string;
}

const Payment-canceled: React.FC<Payment-canceledProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Payment-canceled</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Payment-canceled;