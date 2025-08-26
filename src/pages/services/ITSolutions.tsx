import React from 'react';
import { SEO } from "@/components/SEO";
import Link from 'next/link';
import { Check, Server, Shield, Cloud, Database, Network, Monitor, Zap } from 'lucide-react';

export default function ITSolutions() {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and ongoing management.',
      features: [
        'Server and network architecture',
        'Virtualization and containerization',
        'High availability solutions',
        'Performance optimization'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'End-to-end cloud solutions for modern business needs.',
      features: [
        'Cloud migration and strategy',
        'Multi-cloud management',
        'Cost optimization',
        'Security and compliance'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      features: [
        'Threat detection and response',
        'Vulnerability assessments',
        'Security audits and compliance',
        'Employee security training'
      ]
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions for business intelligence and analytics.',
      features: [
        'Database design and optimization',
        'Data backup and recovery',
        'Business intelligence systems',
        'Data governance and compliance'
      ]
    },
    {
      icon: Network,
      title: 'Network Solutions',
      description: 'Robust networking infrastructure for seamless connectivity.',
      features: [
        'Network design and implementation',
        'Wireless and wired solutions',
        'Network security and monitoring',
        'Bandwidth optimization'
      ]
    },
    {
      icon: Monitor,
      title: 'Monitoring & Support',
      description: '24/7 monitoring and proactive support for your IT environment.',
      features: [
        'Real-time system monitoring',
        'Proactive issue resolution',
        'Help desk support',
        'Performance reporting'
      ]
    }
  ];

  const benefits = [
    'Reduced IT costs and improved efficiency',
    'Enhanced security and compliance',
    'Scalable solutions that grow with your business',
    'Expert support and maintenance',
    'Latest technology and best practices',
    'Minimal downtime and business disruption'
  ];

  const technologies = [
    'Microsoft Azure & AWS',
    'VMware & Hyper-V',
    'Cisco & Juniper Networks',
    'Microsoft 365 & Google Workspace',
    'Docker & Kubernetes',
    'SQL Server & PostgreSQL',
    'Active Directory & LDAP',
    'SCCM & Intune'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="IT Solutions - Zion Tech Group Infrastructure & Technology Services" 
        description="Comprehensive IT solutions including infrastructure management, cloud services, cybersecurity, and data management for modern businesses."
        keywords="IT solutions, infrastructure management, cloud services, cybersecurity, data management, network solutions"
        canonical="https://ziontechgroup.com/services/it-solutions"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology infrastructure solutions that power modern businesses. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end IT solutions that help businesses operate efficiently, 
              securely, and cost-effectively in today's digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our IT solutions are designed to give your business a competitive edge 
                through improved efficiency, enhanced security, and reduced operational costs.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a Free IT Assessment</h3>
              <p className="text-gray-600 mb-6">
                Let our experts evaluate your current IT infrastructure and provide 
                recommendations for improvement.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're certified experts in leading enterprise technologies and platforms, 
              ensuring you get the best solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Solution Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering reliable, scalable, and secure IT solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We evaluate your current IT infrastructure, identify pain points, 
                  and understand your business objectives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">
                  We design a comprehensive solution architecture that aligns with 
                  your business goals and budget constraints.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our certified engineers implement the solution with minimal disruption 
                  to your business operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support, monitoring, and maintenance to ensure 
                  your IT infrastructure runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology 
            foundation for your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}