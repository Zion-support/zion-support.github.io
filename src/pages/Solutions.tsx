import React from 'react';
import { _Link } from 'react-router-dom';
import { 

import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { Check } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
const features = [];
const industries = [];
const services = [];
const solutions = [];
  Building2, 
  Heart, 
  DollarSign, 
  Target,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  TrendingUp,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';

export default function Solutions() {
  const _solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed for large organizations and complex business requirements.',
      icon: Building2,
      color: 'from-blue-600 to-purple-600',
      features: [
        'Scalable Architecture',
        'Enterprise Security',
        'Integration Services',
        '24/7 Support',
        'Compliance Management',
        'Custom Development'
      ],
      href: '/solutions/enterprise'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'Specialized technology solutions for healthcare organizations, ensuring compliance and patient data security.',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      features: [
        'HIPAA Compliance',
        'Patient Data Management',
        'Telemedicine Platforms',
        'AI Diagnostics',
        'Electronic Health Records',
        'Secure Communication'
      ],
      href: '/solutions/healthcare'
    },
    {
      id: 'financial',
      title: 'Financial Solutions',
      description: 'Advanced fintech solutions for banks, credit unions, and financial service providers.',
      icon: DollarSign,
      color: 'from-green-600 to-blue-600',
      features: [
        'Payment Processing',
        'Risk Management',
        'Fraud Detection',
        'Regulatory Compliance',
        'Digital Banking',
        'Blockchain Integration'
      ],
      href: '/solutions/financial'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Solutions',
      description: 'Industry 4.0 solutions to optimize production, improve quality, and reduce costs.',
      icon: Target,
      color: 'from-orange-600 to-red-600',
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Quality Control',
        'Supply Chain Optimization',
        'Automation',
        'Real-time Monitoring'
      ],
      href: '/solutions/manufacturing'
    },
    {
      id: 'retail',
      title: 'Retail Solutions',
      description: 'Omnichannel retail solutions to enhance customer experience and drive sales.',
      icon: Users,
      color: 'from-purple-600 to-pink-600',
      features: [
        'E-commerce Platforms',
        'Inventory Management',
        'Customer Analytics',
        'Personalization',
        'Mobile Commerce',
        'Supply Chain'
      ],
      href: '/solutions/retail'
    },
    {
      id: 'education',
      title: 'Education Solutions',
      description: 'Technology solutions for educational institutions to enhance learning and administrative efficiency.',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      features: [
        'Learning Management Systems',
        'Student Information Systems',
        'Online Assessment',
        'Virtual Classrooms',
        'Data Analytics',
        'Accessibility Tools'
      ],
      href: '/solutions/education'
    }
  ];

  const _industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Energy',
    'Transportation',
    'Real Estate'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry's unique challenges and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We have deep expertise across multiple industries and understand the unique challenges each faces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:border-blue-500 transition-all duration-300 group">
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We can create tailored solutions for any industry or specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Discuss Your Needs
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}