import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Wishlist: React.FC = () => {
  return (
    <MainLayout title="Wishlist - Zion Tech Group" description="Save your favorite services and solutions.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Wishlist</h1>
        <p className="text-lg">This is the Wishlist page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Wishlist;