import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Services: React.FC = () => {
  return (
    <MainLayout title="Services - Zion Tech Group" description="Comprehensive technology services for your business.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-lg">This is the Services page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Services;