import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Help: React.FC = () => {
  return (
    <MainLayout title="Help Center - Zion Tech Group" description="Find answers to your questions and get the support you need.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Help Center</h1>
        <p className="text-lg">This is the Help Center page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Help;