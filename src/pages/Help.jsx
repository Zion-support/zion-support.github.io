import React from 'react';
import SEO from "@/components/SEO";

const Help = () => {
  return (
    <>
      <SEO
        title="Help Center"
        description="Find answers to common questions"
        canonical="/help"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to your questions</p>
        </div>
      </div>
    </>
  );
};

export default Help;