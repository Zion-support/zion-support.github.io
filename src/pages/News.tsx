import React from "react";
import MainLayout from "../components/layout/MainLayout";

const News: React.FC = () => {
  return (
    <MainLayout title="News & Updates - Zion Tech Group" description="Stay informed with the latest news and updates from our team.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">News & Updates</h1>
        <p className="text-lg">This is the News page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default News;