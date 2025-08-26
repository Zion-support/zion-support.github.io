import React from 'react';

interface OrderDetailProps {
  orderId: string;
}

export default function OrderDetail({ orderId }: OrderDetailProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>
      <p>Order ID: {orderId}</p>
      <p className="text-gray-400 mt-4">Order details will be displayed here.</p>
    </div>
  );
}
