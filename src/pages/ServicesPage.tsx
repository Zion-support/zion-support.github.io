import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  BarChart, 
  Smartphone, 
  Database,
  Target,
  Users,
  Settings,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      link: '/ai-services',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: ['Process Automation', 'Workflow Optimization', 'Exception Handling', 'Smart Decision Making'],
      price: 'Starting at $399/month',
      link: '/ai-automation',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your data and infrastructure from evolving threats.',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $999/month',
      link: '/cybersecurity',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $799/month',
      link: '/cloud-services',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const additionalServices = [
    {
      icon: BarChart,
      title: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation and optimization.',
      link: '/ai-marketing',
      price: '$199/month'
    },
    {
      icon: Smartphone,
      title: 'Micro SAAS',
      description: 'Affordable, powerful AI-driven tools for modern businesses.',
      link: '/micro-saas',
      price: '$79/month'
    },
    {
      icon: Database,
      title: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging and drug discovery.',
      link: '/ai-healthcare',
      price: '$1,999/month'
    },
    {
      icon: Target,
      title: 'AI Fintech',
      description: 'AI-powered financial services and trading solutions.',
      link: '/ai-fintech',
      price: '$1,499/month'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Complete digital transformation of your business processes.',
      link: '/digital-transformation',
      price: 'Custom Pricing'
    },
    {
      icon: Settings,
      title: 'IT Services',
      description: 'Comprehensive IT support and infrastructure management.',
      link: '/it-services',
      price: '$999/month'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous optimization to ensure maximum value.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, automation, cybersecurity, cloud services, and digital transformation solutions." />
        <meta name="keywords" content="AI services, IT solutions, automation, cybersecurity, cloud services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive AI and IT solutions designed to transform your business operations 
                and drive unprecedented growth.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Services</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our flagship services that deliver the most value to enterprise clients.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                        <Link
                          to={service.link}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Services</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Specialized solutions to meet your specific business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <Link
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;