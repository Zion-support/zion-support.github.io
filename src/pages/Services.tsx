import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Cloud, Shield, Users, Code, Database, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const services = {
    ai: {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Zap,
      features: [
        'Custom AI model development',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive Analytics',
        'Chatbot and virtual assistants',
        'AI-powered automation',
      ],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce manual errors and processing time',
        'Gain actionable insights from your data',
        'Improve customer experience and engagement',
      ],
      useCases: [
        'Customer service automation',
        'Predictive maintenance',
        'Fraud detection',
        'Content generation',
        'Image and video analysis',
        'Recommendation systems',
      ],
    },
    cloud: {
      title: 'Cloud Services',
      description: 'Scalable, secure, and cost-effective cloud solutions for modern businesses.',
      icon: Cloud,
      features: [
        'Cloud migration and strategy',
        'Multi-cloud architecture',
        'DevOps and CI/CD pipelines',
        'Container orchestration',
        'Serverless applications',
        'Cloud security and compliance',
      ],
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Scale resources based on demand',
        'Improve reliability and uptime',
        'Enhance security and compliance',
      ],
      useCases: [
        'Application modernization',
        'Data center migration',
        'Disaster recovery solutions',
        'Global content delivery',
        'Big data processing',
        'IoT platform development',
      ],
    },
    security: {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      icon: Shield,
      features: [
        'Security assessments and audits',
        'Threat detection and response',
        'Identity and access management',
        'Data encryption and protection',
        'Compliance and governance',
        'Security training and awareness',
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks and vulnerabilities',
        'Build customer trust and confidence',
      ],
      useCases: [
        'SOC 2 compliance',
        'GDPR and privacy regulations',
        'Penetration testing',
        'Security monitoring',
        'Incident response planning',
        'Employee security training',
      ],
    },
    consulting: {
      title: 'Technology Consulting',
      description: 'Strategic guidance to help you make the right technology decisions.',
      icon: Users,
      features: [
        'Technology strategy and planning',
        'Digital transformation roadmaps',
        'Architecture design and review',
        'Technology selection and evaluation',
        'Process optimization',
        'Change management',
      ],
      benefits: [
        'Align technology with business goals',
        'Reduce technology risks',
        'Optimize IT investments',
        'Accelerate digital transformation',
      ],
      useCases: [
        'Digital transformation strategy',
        'Technology stack evaluation',
        'Process automation planning',
        'Vendor selection and management',
        'IT governance and policies',
        'Team training and development',
      ],
    },
  };

  const additionalServices = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications.',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Data management, analytics, and business intelligence solutions.',
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide deployment and support for your applications.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current state, challenges, and goals to understand your needs.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and roadmap tailored to your objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution using best practices and methodologies.',
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test and optimize the solution to ensure peak performance.',
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support and maintenance.',
    },
  ];

  const activeService = services[activeTab as keyof typeof services];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a service to learn more about our capabilities and how we can help you.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <activeService.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeService.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {activeService.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      What We Offer
                    </h4>
                    <ul className="space-y-2">
                      {activeService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {activeService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Common Use Cases
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.useCases.map((useCase, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700 font-medium">{useCase}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also offer specialized services to complement our core offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;