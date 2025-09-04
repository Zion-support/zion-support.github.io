import React from 'react';

const HealthcareTechServices: Reac t.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Healthcare Technology Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          HIPAA-ready data platforms, AI diagnostics, and patient experience solutions
          built for security, reliability, and compliance.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>AI predictive analytics and triage</li>
          <li>Secure interoperability and FHIR integration</li>
          <li>Patient engagement and experience platforms</li>
          <li>Compliance automation and audit tooling</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthcareTechServices;
