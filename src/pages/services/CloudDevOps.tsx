import React from 'react';
import SEO from '../../components/SEO';

const CloudDevOps: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cloud & DevOps Services - Zion Tech Group"
        description="Transform your infrastructure with cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices."
        keywords="cloud migration, devops, aws, azure, gcp, ci cd, infrastructure"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Cloud & DevOps Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your infrastructure with cloud migration and DevOps services. 
                Scale efficiently, deploy faster, and maintain reliability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our cloud and DevOps services are currently under development. These services will include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Cloud migration and strategy
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  CI/CD pipeline implementation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Infrastructure as Code (IaC)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Container orchestration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Monitoring and observability
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Security and compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudDevOps;