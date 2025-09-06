import React from "react";
import MainLayout from "../components/layout/MainLayout";

const WhitePapers: React.FC = () => {
  return (
    <MainLayout title="White Papers - Zion Tech Group" description="In-depth research and insights on technology trends and solutions.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">White Papers</h1>
        <p className="text-lg">This is the White Papers page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default WhitePapers;