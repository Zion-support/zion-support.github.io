import React from "react";
import MainLayout from "../components/layout/MainLayout";

const HiringTracker: React.FC = () => {
  return (
    <MainLayout title="Hiring Tracker - Zion Tech Group" description="Track and manage your hiring process efficiently.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Hiring Tracker</h1>
        <p className="text-lg">This is the Hiring Tracker page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default HiringTracker;