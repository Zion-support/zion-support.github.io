import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Orders: React.FC = () => {
  return (
    <MainLayout title="Orders - Zion Tech Group" description="Manage your orders and track their status.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Orders</h1>
        <p className="text-lg">This is the Orders page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Orders;