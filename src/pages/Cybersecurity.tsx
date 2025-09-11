import React from 'react';

const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cybersecurity Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Protect your digital assets with our comprehensive cybersecurity solutions. 
              We provide advanced threat detection, compliance management, and security audits.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Cybersecurity Solutions</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Advanced Threat Detection and Response</li>
              <li>Compliance Management (SOC 2, GDPR, HIPAA)</li>
              <li>Security Audits and Penetration Testing</li>
              <li>Incident Response and Recovery</li>
              <li>Security Awareness Training</li>
              <li>Vulnerability Assessment and Management</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Cybersecurity Services?</h2>
            <p className="text-gray-600 mb-6">
              Our team of certified security experts uses cutting-edge tools and methodologies 
              to protect your business from evolving cyber threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;