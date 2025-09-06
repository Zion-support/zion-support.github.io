import React from "react";
import MainLayout from "../components/layout/MainLayout";

const ITServices: React.FC = () => {
  return (
    <MainLayout title="IT Services - Zion Tech Group" description="Comprehensive IT services for your business.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">IT Services</h1>
        <p className="text-lg">This is the IT Services page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default ITServices;