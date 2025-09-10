import React from 'react';
import { Cloud, Settings, Zap, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const CloudDevOps = () => {
  const features = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with zero downtime",
      icon: <Cloud className="h-8 w-8 text-blue-400" />
    },
    {
      title: "DevOps Automation",
      description: "Automated CI/CD pipelines and deployment processes",
      icon: <Settings className="h-8 w-8 text-green-400" />
    },
    {
      title: "Performance Optimization",
      description: "Optimize cloud resources for maximum performance and cost efficiency",
      icon: <Zap className="h-8 w-8 text-yellow-400" />
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance management",
      icon: <Shield className="h-8 w-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud DevOps - Zion Tech Group"
        description="Comprehensive cloud and DevOps solutions for modern businesses."
        keywords={["cloud computing", "DevOps", "cloud migration", "automation"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud DevOps</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Accelerate your cloud journey with our comprehensive DevOps solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS, Azure, and GCP migration</li>
                <li>• Multi-cloud architecture design</li>
                <li>• Cloud cost optimization</li>
                <li>• Disaster recovery planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">DevOps Practices</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CI/CD pipeline implementation</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring and logging</li>
                <li>• Security automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;