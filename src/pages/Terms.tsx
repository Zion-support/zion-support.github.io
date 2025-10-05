import React from 'react';
// import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Last updated: January 1, 2024
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-lg text-gray-300 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p className="text-lg text-gray-300 mb-6">
              Permission is granted to temporarily download one copy of our materials for personal, 
              non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p className="text-lg text-gray-300 mb-6">
              The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
            <p className="text-lg text-gray-300 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
            <p className="text-lg text-gray-300 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws 
              of the State of California.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Terms;