import React from "react";
import MainLayout from "../components/layout/MainLayout";

const EquipmentPage: React.FC = () => {
  return (
    <MainLayout title="Equipment - Zion Tech Group" description="Professional equipment and technology solutions.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Equipment</h1>
        <p className="text-lg">This is the Equipment page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default EquipmentPage;