import React from "react";
import MainLayout from "../components/layout/MainLayout";

const FAQ: React.FC = () => {
  return (
    <MainLayout title="FAQ - Zion Tech Group" description="Find answers to common questions about our services.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <p className="text-lg">This is the FAQ page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default FAQ;