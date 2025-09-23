import React from 'react';
import { SEO } from '@/components/SEO';

const EnterpriseSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Industry-focused enterprise solutions for scale, security, and performance."
      />
      <div className="container-responsive py-16">
        <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          We deliver scalable, secure, and reliable solutions tailored to enterprise needs across multiple industries.
        </p>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;

