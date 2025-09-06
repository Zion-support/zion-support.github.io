import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Helpdesk: React.FC = () => {
  return (
    <MainLayout title="Helpdesk - Zion Tech Group" description="Get the support you need, when you need it.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Helpdesk</h1>
        <p className="text-lg">This is the Helpdesk page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Helpdesk;