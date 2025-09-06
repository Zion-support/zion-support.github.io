import React from "react";
import MainLayout from "../components/layout/MainLayout";

const NotFound: React.FC = () => {
  return (
    <MainLayout title="404 - Page Not Found - Zion Tech Group" description="The page you're looking for doesn't exist.">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Go Home
        </a>
      </div>
    </MainLayout>
  );
};

export default NotFound;