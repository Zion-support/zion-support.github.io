import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Cloud, Database, Code } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Services: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes and gain insights from your data.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
      href: '/services/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Data Warehousing'],
      href: '/services/data-analytics'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your business needs.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      href: '/services/custom-development'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance to help you make informed technology decisions.',
      features: ['Technology Strategy', 'Architecture Review', 'Process Optimization', 'Training'],
      href: '/services/consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, _index) => (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={service.href} className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;