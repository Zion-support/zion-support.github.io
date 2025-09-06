import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout title="Home - Zion Tech Group" description="Leading AI & Technology Solutions for a Smarter Future.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-lg">This is the Home page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Home;