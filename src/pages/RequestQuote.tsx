import React from "react";
import MainLayout from "../components/layout/MainLayout";

const RequestQuote: React.FC = () => {
  return (
    <MainLayout title="Request a Quote - Zion Tech Group" description="Get a personalized quote for our services.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
        <p className="text-lg">This is the Request Quote page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default RequestQuote;