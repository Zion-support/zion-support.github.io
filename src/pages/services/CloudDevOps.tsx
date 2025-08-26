import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Multi-cloud Strategy"],
      icon: "☁️"
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with automated pipelines",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
      icon: "⚡"
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications efficiently",
      features: ["Kubernetes", "Docker", "Service Mesh", "Microservices Architecture"],
      icon: "📦"
    },
    {
      title: "Infrastructure as Code",
      description: "Version-controlled infrastructure management and deployment",
      features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Automation"],
      icon: "🏗️"
    }
  ];

  const cloudPlatforms = [
    { name: "Amazon Web Services", icon: "🔶", description: "Enterprise-grade cloud solutions" },
    { name: "Microsoft Azure", icon: "🔷", description: "Hybrid cloud and enterprise integration" },
    { name: "Google Cloud Platform", icon: "🔸", description: "AI-first cloud infrastructure" },
    { name: "Multi-Cloud", icon: "🌈", description: "Best-of-breed cloud strategy" }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services</title>
        <meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud migration and DevOps automation services. AWS, Azure, GCP, and container orchestration." />
        <meta property="og:title" content="Cloud & DevOps — Zion Tech Group" />
        <meta property="og:description" content="Leading cloud migration, DevOps automation, and infrastructure as code services." />
        <meta property="og:url" content="https://ziontechgroup.com/services/cloud" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud" />
      </Helmet>

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
              Accelerate your digital transformation with modern cloud infrastructure, 
              automated DevOps practices, and scalable solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Cloud Consultation
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

        {/* Cloud Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Certified experts across all major cloud platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to modernize your infrastructure and accelerate delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud & DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and best practices to maximize your cloud investment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Faster Deployment</h3>
                <p className="text-gray-300">Automated pipelines reduce deployment time from days to minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300">Right-size resources and implement cost management strategies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reliability</h3>
                <p className="text-gray-300">High availability and disaster recovery for business continuity</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud and DevOps solutions can accelerate your digital transformation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Cloud Journey
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudDevOps;