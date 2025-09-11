import React from 'react';

const DevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">DevOps & SRE Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Streamline your development and operations with our modern DevOps practices and 
              Site Reliability Engineering (SRE) solutions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our DevOps Services</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>CI/CD Pipeline Implementation</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Container Orchestration (Kubernetes, Docker)</li>
              <li>Monitoring and Alerting Systems</li>
              <li>Performance Optimization</li>
              <li>Automated Testing and Deployment</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Site Reliability Engineering</h2>
            <p className="text-gray-600 mb-6">
              Our SRE team focuses on system reliability, performance, and scalability to ensure 
              your applications run smoothly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;