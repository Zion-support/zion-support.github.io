import React from 'react';
import { 
  Building, 
  Shield, 
  Users, 
  Globe, 
  Zap, 
  Lock, 
  BarChart3, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function EnterpriseSolutions() {
  const features = [
    {
      icon: Building,
      title: 'Enterprise Architecture',
      description: 'Scalable, secure infrastructure designed for large organizations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security with compliance and governance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Advanced role-based access control and identity management',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Multi-region, multi-cloud deployment capabilities',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for enterprise-scale workloads and users',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Built-in compliance for SOC2, ISO, GDPR, and more',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {
      title: 'Enterprise AI Platform',
      description: 'Scalable AI infrastructure for enterprise applications',
      features: ['Machine Learning Pipeline', 'Model Management', 'AI Governance', 'Enterprise Integration']
    },
    {
      title: 'Enterprise Data Platform',
      description: 'Unified data platform for enterprise analytics and insights',
      features: ['Data Lake', 'Data Warehouse', 'ETL/ELT', 'Data Governance']
    },
    {
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions for enterprise protection',
      features: ['Threat Detection', 'Vulnerability Management', 'Identity & Access', 'Compliance Monitoring']
    },
    {
      title: 'Enterprise DevOps Platform',
      description: 'Enterprise-grade DevOps and CI/CD platform',
      features: ['Pipeline Management', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Scanning']
    }
  ];

  const benefits = [
    'Reduce operational costs by 40%',
    'Improve security posture by 60%',
    'Accelerate time-to-market by 50%',
    'Ensure regulatory compliance',
    'Scale globally with confidence',
    'Enable digital transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with AI-powered solutions designed for scale, security, and success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for the most demanding enterprise environments with security, scalability, and reliability at the core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address enterprise challenges and drive digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for enterprise organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-800 p-6 rounded-lg border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises that have already transformed their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Contact Sales
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
