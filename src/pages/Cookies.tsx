import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Cookies: React.FC = () => {
  return (
    <MainLayout title="Cookie Policy - Zion Tech Group" description="Learn about how we use cookies and similar technologies.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-lg">This is the Cookie Policy page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Cookies;