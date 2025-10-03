import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-lg mb-4">
              We collect information you provide directly to us, such as when you 
              create an account, contact us, or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-lg mb-4">
              We use the information we collect to provide, maintain, and improve 
              our services, communicate with you, and ensure security.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-lg mb-4">
              We implement appropriate security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">
              If you have any questions about this Privacy Policy, please contact us 
              through our contact page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;