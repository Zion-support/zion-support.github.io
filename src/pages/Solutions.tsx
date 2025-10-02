import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, Database, Cloud } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI and automation solutions for large organizations',
      features: ['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Advanced Analytics'],
      path: '/solutions/enterprise',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'SMB Solutions',
      description: 'Affordable, powerful solutions designed for small and medium businesses',
      features: ['Quick Deployment', 'Cost-Effective', 'Easy Management', 'ROI Tracking'],
      path: '/solutions/smb',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Startup Solutions',
      description: 'Innovative solutions to help startups scale rapidly and efficiently',
      features: ['Rapid Prototyping', 'Flexible Pricing', 'Expert Mentorship', 'Growth Analytics'],
      path: '/solutions/startup',
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'Government Solutions',
      description: 'Secure, compliant solutions meeting government standards and requirements',
      features: ['Security Compliance', 'Data Sovereignty', 'Audit Trails', 'Regulatory Support'],
      path: '/solutions/government',
      color: 'red'
    },
    {
      icon: Database,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for healthcare organizations',
      features: ['HIPAA Compliance', 'Patient Privacy', 'Clinical Integration', 'Real-time Analytics'],
      path: '/solutions/healthcare',
      color: 'teal'
    },
    {
      icon: Cloud,
      title: 'Financial Solutions',
      description: 'Secure, compliant solutions for financial institutions and fintech companies',
      features: ['PCI Compliance', 'Fraud Detection', 'Risk Management', 'Regulatory Reporting'],
      path: '/solutions/financial',
      color: 'indigo'
    }
  ];

  const industrySolutions = [
    {
      title: 'Manufacturing Solutions',
      description: 'Smart manufacturing with AI-powered predictive maintenance and quality control',
      path: '/solutions/manufacturing'
    },
    {
      title: 'Retail Solutions',
      description: 'Personalized customer experiences and intelligent inventory management',
      path: '/solutions/retail'
    },
    {
      title: 'Education Solutions',
      description: 'AI-powered learning platforms and educational analytics',
      path: '/solutions/education'
    },
    {
      title: 'Transportation Solutions',
      description: 'Autonomous systems and intelligent logistics optimization',
      path: '/solutions/transportation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive AI Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your business with our industry-leading AI and automation solutions. 
              From startups to enterprises, we have the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed to meet the unique needs of your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-lg bg-${solution.color}-100 flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${solution.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={solution.path}
                    className={`inline-flex items-center text-${solution.color}-600 hover:text-${solution.color}-700 font-semibold transition-colors`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions crafted for specific industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <Link
                  to={solution.path}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your specific needs and find the perfect solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/case-studies"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
=======
import { Helmet } from 'react-helmet-async';

const Solutions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and technology solutions for modern enterprises. Discover our cutting-edge AI platforms and services." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI and technology solutions designed for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Workflow Automation</h3>
              <p className="text-gray-600">
                Streamline your business processes with intelligent automation solutions that adapt and learn from your operations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">
                Get instant insights from your data with our advanced AI-powered analytics and reporting solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity AI</h3>
              <p className="text-gray-600">
                Protect your organization with advanced AI-driven security solutions that detect and prevent threats in real-time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Virtual Assistants</h3>
              <p className="text-gray-600">
                Deploy intelligent virtual assistants that can handle customer inquiries, schedule appointments, and provide support.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Processing</h3>
              <p className="text-gray-600">
                Automate document processing and data extraction with our intelligent document processing solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Optimize your scheduling with AI-powered appointment systems that reduce conflicts and improve efficiency.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss how our AI solutions can help your organization achieve its goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-b747
  );
};

export default Solutions;