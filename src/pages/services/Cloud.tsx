import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const CloudServices: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to leading cloud platforms",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Multi-Cloud Strategy"]
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with automated CI/CD pipelines",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"]
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications with Kubernetes and Docker",
      features: ["Kubernetes Management", "Docker Implementation", "Microservices Architecture", "Auto-scaling"]
    },
    {
      title: "Infrastructure as Code",
      description: "Define and manage infrastructure using code for consistency and reliability",
      features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cloud &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}DevOps
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Scalable cloud infrastructure and automated development operations for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud & DevOps Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions and DevOps practices to accelerate your development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud & DevOps Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Faster Deployment</h3>
              <p className="text-gray-300">Automated pipelines reduce deployment time from days to minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>
              <p className="text-gray-300">Optimize cloud costs and reduce infrastructure overhead</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable</h3>
              <p className="text-gray-300">Auto-scaling infrastructure that grows with your business needs</p>
=======
const CloudDevOps: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud & DevOps Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Accelerate your digital transformation with modern cloud infrastructure.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cloud Migration</h3>
              <p className="text-slate-600">Seamlessly migrate to AWS, Azure, or Google Cloud.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">DevOps Automation</h3>
              <p className="text-slate-600">Implement CI/CD pipelines and infrastructure as code.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Container Orchestration</h3>
              <p className="text-slate-600">Deploy and manage applications with Kubernetes.</p>
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud and DevOps solutions can accelerate your development
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Contact Us Today
          </Link>
=======
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">Get Started</Link>
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default CloudServices;
=======
export default CloudDevOps;
>>>>>>> 74265048d1cf68c9d39ff50c17bc7dd25683f253
