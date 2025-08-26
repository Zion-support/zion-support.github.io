import React from 'react';
import { Link } from 'react-router-dom';

const CloudDevOps: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: ["AWS Migration", "Azure Migration", "Google Cloud Migration", "Hybrid Cloud Solutions"]
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and deployment with CI/CD pipelines",
      features: ["Jenkins Integration", "GitLab CI/CD", "Docker Containers", "Kubernetes Orchestration"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage infrastructure through code for consistency and scalability",
      features: ["Terraform", "CloudFormation", "Ansible", "Chef/Puppet"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security measures for cloud environments",
      features: ["Identity & Access Management", "Network Security", "Data Encryption", "Compliance Monitoring"]
    }
  ];

  const platforms = [
    {
      name: "Amazon Web Services",
      logo: "☁️",
      services: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"]
    },
    {
      name: "Microsoft Azure",
      logo: "☁️",
      services: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"]
    },
    {
      name: "Google Cloud Platform",
      logo: "☁️",
      services: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"]
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 60%",
    "Improve deployment frequency by 10x",
    "Reduce lead time for changes by 50%",
    "Increase system reliability and uptime",
    "Enable rapid scaling and flexibility",
    "Improve team collaboration and productivity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accelerate your development and deployment with modern cloud infrastructure and DevOps practices
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Modernize Your Infrastructure</h2>
                <p className="text-gray-300 mb-6">
                  Transform your IT operations with cloud-native solutions, automated deployments, and scalable infrastructure that grows with your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Faster time to market with automated deployments</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Scalable infrastructure that adapts to demand</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Reduced operational overhead and costs</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">☁️</div>
                <p className="text-gray-300 text-lg">Cloud-First Infrastructure Solutions</p>
              </div>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to modernize your infrastructure
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
                  
                  <div className="mb-4">
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

          {/* Cloud Platforms */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Supported Cloud Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solution for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="text-6xl mb-4">{platform.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                  <div className="space-y-2">
                    {platform.services.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-300 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Cloud & DevOps?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development and operations with proven benefits
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DevOps Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our DevOps Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing DevOps practices and cloud infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assess</h3>
                <p className="text-gray-300 text-sm">Evaluate current infrastructure and processes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Plan</h3>
                <p className="text-gray-300 text-sm">Design cloud architecture and DevOps strategy</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implement</h3>
                <p className="text-gray-300 text-sm">Build and configure cloud infrastructure</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Automate</h3>
                <p className="text-gray-300 text-sm">Set up CI/CD pipelines and automation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimize</h3>
                <p className="text-gray-300 text-sm">Monitor, improve, and scale solutions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how cloud and DevOps can accelerate your business growth
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudDevOps;