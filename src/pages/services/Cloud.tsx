import React from 'react';
import { Cloud, Server, Shield, Zap, Database, Globe, Cpu, BarChart3 } from 'lucide-react';

const CloudServices = () => {
  const cloudServices = [
    {
      title: "Cloud Migration & Strategy",
      description: "Comprehensive cloud migration services with multi-cloud strategy and cost optimization.",
      price: "From $8,500/project",
      features: ["Cloud readiness assessment", "Multi-cloud strategy planning", "Migration roadmap development", "Cost optimization analysis"],
      icon: Cloud
    },
    {
      title: "Cloud-Native Development",
      description: "Build scalable applications using cloud-native technologies and microservices architecture.",
      price: "From $12,000/project",
      features: ["Microservices architecture", "Serverless development", "API-first design", "Cloud-native databases"],
      icon: Server
    },
    {
      title: "Cloud Security & Compliance",
      description: "Enterprise-grade security solutions with compliance frameworks and threat protection.",
      price: "From $6,500/month",
      features: ["Identity and access management", "Data encryption", "Compliance monitoring", "Security auditing"],
      icon: Shield
    }
  ];

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive cloud services and infrastructure",
      icon: Cloud,
      features: ["EC2, S3, Lambda", "RDS, DynamoDB", "CloudFormation", "CloudWatch"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise cloud platform with hybrid capabilities",
      icon: Server,
      features: ["Virtual Machines", "Azure SQL", "Functions", "Monitor"]
    },
    {
      name: "Google Cloud Platform",
      description: "AI-first cloud platform with advanced analytics",
      icon: Globe,
      features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery"]
    }
  ];

  const benefits = [
    "Scalable infrastructure that grows with your business",
    "Reduced capital expenditure and operational costs",
    "Enhanced security and compliance capabilities",
    "Faster time to market with cloud-native tools",
    "Global availability and disaster recovery",
    "Automated scaling and resource management"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2"/>
              Cloud & DevOps
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your digital transformation with modern cloud infrastructure, 
              DevOps practices, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end cloud solutions designed to modernize your infrastructure 
              and accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-400 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platforms We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expertise across all major cloud providers to ensure you get the best 
              solutions for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <platform.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Cloud Solutions?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Cloud computing provides numerous advantages that can transform 
                your business operations and drive innovation.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <Zap className="w-24 h-24 text-blue-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-2">Cloud Expertise</h3>
                <p className="text-gray-300 mb-6">
                  Our team has extensive experience with cloud platforms and 
                  can help you navigate the complex cloud landscape.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Certified cloud professionals</p>
                  <p>• Multi-cloud expertise</p>
                  <p>• Industry best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with cloud-native solutions and modern DevOps practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </a>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;