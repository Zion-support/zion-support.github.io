import React from "react";
import MainLayout from "../components/layout/MainLayout";

const ForumCategoryPage: React.FC = () => {
  return (
    <MainLayout title="Forum - Zion Tech Group" description="Community forum for discussions and support.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Forum</h1>
        <p className="text-lg">This is the Forum page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default ForumCategoryPage;