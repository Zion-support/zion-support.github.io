import { Cloud } from 'lucide-react';
const features = [];
const solutions = [];


export default function SolutionsPage() {
  const _solutions = [
    {
      title: "Enterprise AI Platform",
      description: "Comprehensive AI solution for large enterprises",
      features: ["Machine Learning Pipeline", "Data Processing", "Model Deployment", "Monitoring & Analytics"],
      price: "Custom Pricing"
    },
    {
      title: "Quantum Computing Suite",
      description: "Advanced quantum computing solutions for complex problems",
      features: ["Quantum Algorithms", "Simulation Tools", "Optimization Engine", "API Integration"],
      price: "Starting at $10K/month"
    },
    {
      title: "Cybersecurity Framework",
      description: "Complete security solution for your digital infrastructure",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"],
      price: "Starting at $5K/month"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless migration to cloud infrastructure",
      features: ["Infrastructure Assessment", "Migration Planning", "Data Transfer", "Post-Migration Support"],
      price: "Project-based"
    },
    {
      title: "Data Analytics Platform",
      description: "Transform your data into actionable insights",
      features: ["Real-time Analytics", "Data Visualization", "Predictive Modeling", "Custom Dashboards"],
      price: "Starting at $3K/month"
    },
    {
      title: "Blockchain Development",
      description: "Custom blockchain solutions for your business",
      features: ["Smart Contract Development", "DeFi Solutions", "NFT Platforms", "Blockchain Consulting"],
      price: "Project-based"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-cyan-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{solution.price}</div>
                  <button className="w-full px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can create tailored solutions to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}