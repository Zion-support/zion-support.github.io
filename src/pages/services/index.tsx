import React from 'react';
import Link from 'next/link';
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Cpu, Headphones, Calendar, Send, Layers } from 'lucide-react';

export default function Index() {
  const services = [
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business automation and intelligence',
      icon: Brai n,
      href: '/services/ai-machine-learning',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Specialized software solutions for specific business needs',
      icon: Cp u,
      href: '/services/micro-saas',
      features: ['Custom Applications', 'API Integration', 'Scalable Infrastructure', 'Multi-tenant Support']
    },
    {
      name: 'AI Content Creation',
      description: 'Generate high-quality content at scale with AI-powered tools',
      icon: FileTex t,
      href: '/services/ai-content-creation',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization']
    },
    {
      name: 'Email Automation',
      description: 'Automate email marketing campaigns with intelligent sequences',
      icon: Sen d,
      href: '/services/email-automation',
      features: ['Lead Nurturing', 'Behavioral Triggers', 'A/B Testing', 'Analytics']
    },
    {
      name: 'Customer Support Platform',
      description: 'AI-powered customer support with chatbots and ticketing',
      icon: Headphone s,
      href: '/services/customer-support',
      features: ['Live Chat', 'Ticket Management', 'Knowledge Base', 'Analytics']
    },
    {
      name: 'Event Management',
      description: 'Complete event planning and management solution',
      icon: Calenda r,
      href: '/services/event-management',
      features: ['Registration', 'Ticketing', 'Analytics', 'Mobile App']
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and deployment automation',
      icon: Databas e,
      href: '/services/cloud-devops',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring']
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital protection',
      icon: Shiel d,
      href: '/services/cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    }
  ];

  const benefits = [
    'Reduce operational costs by 50%',
    'Increase productivity by 70%',
    'Improve business efficiency by 60%',
    'Scale operations without proportional cost increase',
    'Enhance customer experience and satisfaction',
    'Accelerate time-to-market for new features'
  ];

  const useCases = [
    'E-commerce & Retail',
    'SaaS & Technology',
    'Financial Services',
    'Healthcare & Medical',
    'Real Estate',
    'Professional Services',
    'Education & Training',
    'Non-profit Organizations'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Layers className="w-4 h-4 mr-2"  />
            Comprehensive Technology Solutions
          </div>
          <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-indigo-100 text-xl">
            Transform your business with cutting-edge AI, micro SaaS, and technology solutions that drive growth and efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Service Portfolio</h2>
        <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover: shado w-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white"  />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"  />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover: b g-indigo-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2"  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover: shado w-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive technology solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our comprehensive technology solutions today.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover: b g-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover: b g-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
