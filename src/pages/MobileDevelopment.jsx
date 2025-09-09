import React from 'react';
import { Smartphone } from 'lucide-react';
import SEO from "@/components/SEO";

const MobileDevelopment = () => {
  return (
    <>
      <SEO
        title="Mobile App Development"
        description="Professional mobile app development services"
        canonical="/mobile-development"
      />
      <div className="min-h-screen bg-gray-50">
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              Transform your ideas into powerful mobile applications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileDevelopment;