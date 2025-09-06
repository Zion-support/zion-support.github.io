import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Privacy: React.FC = () => {
  return (
    <MainLayout title="Privacy Policy - Zion Tech Group" description="How we collect, use, and protect your information.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg">This is the Privacy Policy page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Privacy;