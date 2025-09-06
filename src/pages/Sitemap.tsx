import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Sitemap: React.FC = () => {
  return (
    <MainLayout title="Sitemap - Zion Tech Group" description="Find all our pages and resources in one place.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <p className="text-lg">This is the Sitemap page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Sitemap;