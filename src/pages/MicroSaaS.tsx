import React from "react";
import MainLayout from "../components/layout/MainLayout";

const MicroSaaS: React.FC = () => {
  return (
    <MainLayout title="Micro SaaS - Zion Tech Group" description="Scalable software-as-a-service solutions for modern businesses.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Micro SaaS Solutions</h1>
        <p className="text-lg">This is the Micro SaaS page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default MicroSaaS;