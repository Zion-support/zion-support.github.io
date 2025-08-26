import React from 'react';
    "Improved operational efficiency and productivity",
    "Enhanced security and compliance",
    "Scalable infrastructure for business growth",
    "Reduced IT costs and complexity",
    "Better disaster recovery and business continuity",
    "24/7 monitoring and proactive support"
  ];

  const industries = [
    {
      title: "Financial Services",
      description: "Secure, compliant IT infrastructure for banks, insurance, and fintech companies",
      icon: TrendingUp
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant systems for hospitals, clinics, and medical research",
      icon: Shield
    },
    {
      title: "Manufacturing",
      description: "Industrial IT solutions for smart factories and supply chain management",
      icon: Building
    },
    {
      title: "Retail",
      description: "E-commerce platforms and retail management systems",
      icon: Users
    },
    {
      title: "Education",
      description: "Learning management systems and campus IT infrastructure",
      icon: Globe
    },
    {
      title: "Government",
      description: "Secure, compliant systems for public sector organizations",
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Enterprise IT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive enterprise IT services that provide the foundation for business success, 
              from infrastructure design to ongoing management and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Enterprise IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end enterprise IT solutions designed to optimize operations, 
              enhance security, and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
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

      {/* Technology Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with leading technology vendors to deliver best-in-class 
              enterprise solutions and support.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored enterprise IT solutions designed for the unique challenges 
              and compliance requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Enterprise IT?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Enterprise IT solutions provide the foundation for business success, 
                enabling organizations to operate efficiently, securely, and at scale.
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
                <Cpu className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Ready</h3>
                <p className="text-gray-300 mb-6">
                  Our solutions are built to enterprise standards with 
                  enterprise-grade security, scalability, and reliability.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• 99.9% uptime guarantee</p>
                  <p>• 24/7 support and monitoring</p>
                  <p>• Compliance and security certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A proven methodology for successful enterprise IT implementations 
            that minimize disruption and maximize value.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Current state analysis and requirements gathering</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">Solution architecture and implementation planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Phased deployment with minimal business disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-300">Ongoing management, monitoring, and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our enterprise IT solutions can help optimize your operations, 
            enhance security, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Solutions
            </a>
          </div>
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $service: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This service page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default $service;
};

export default $service;
