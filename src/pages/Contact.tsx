import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Contact: React.FC = () => {
  return (
    <MainLayout title="Contact Us - Zion Tech Group" description="Get in touch with our team for your technology needs.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg">This is the Contact page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Contact;