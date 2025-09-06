import React from "react";
import MainLayout from "../components/layout/MainLayout";

const MobileDevelopment: React.FC = () => {
  return (
    <MainLayout title="Mobile Development - Zion Tech Group" description="Professional mobile app development services.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mobile Development</h1>
        <p className="text-lg">This is the Mobile Development page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default MobileDevelopment;