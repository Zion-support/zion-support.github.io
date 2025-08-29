import React from 'react';
import { 
  Shield, 
  Building, 
  Users, 
  Globe, 
  Lock, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Globe2,
  Settings,
  Heart
} from 'lucide-react';

export default function GovernmentSolutions() {
  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'FedRAMP, FISMA, and SOC2 compliant security measures',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building,
      title: 'Government Architecture',
      description: 'Built for government scale and compliance requirements',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Multi-Agency Support',
      description: 'Solutions that work across different government entities',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'National Deployment',
      description: 'Solutions that can scale across the entire nation',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description: 'Ensure data stays within government control and jurisdiction',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Compliance Reporting',
      description: 'Built-in reporting for all government compliance requirements',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const solutions = [
    {
      title: 'Digital Government Platform',
      description: 'Comprehensive platform for modernizing government services',
      features: ['Citizen Services', 'Internal Operations', 'Data Management', 'Compliance']
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions for government protection',
      features: ['Threat Detection', 'Vulnerability Management', 'Incident Response', 'Compliance']
    },
    {
      title: 'Data Analytics Platform',
      description: 'Government-wide data insights and decision support',
      features: ['Data Integration', 'Analytics Tools', 'Reporting', 'Visualization']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure, compliant cloud solutions for government',
      features: ['Multi-Cloud', 'Security', 'Compliance', 'Scalability']
    }
  ];

  const agencies = [
    {
      title: 'Federal Agencies',
      description: 'Solutions for federal government departments',
      icon: Building
    },
    {
      title: 'State Governments',
      description: 'State-level government modernization',
      icon: Globe2
    },
    {
      title: 'Local Governments',
      description: 'City and county government solutions',
      icon: Users
    },
    {
      title: 'Defense & Security',
      description: 'Military and security agency support',
      icon: Shield
    }
  ];

  const benefits = [
    'Improve citizen services by 50%',
    'Reduce operational costs by 30%',
    'Enhance security posture by 70%',
    'Ensure regulatory compliance',
    'Modernize legacy systems',
    'Enable digital transformation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Government Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform government operations with secure, compliant, and scalable AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              Government-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for government organizations with security, compliance, and scalability at the core
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
              Government Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address government challenges and modernize operations
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

      {/* Agencies Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Government Agencies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different government entities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencies.map((agency, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <agency.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{agency.title}</h3>
                <p className="text-gray-300 text-sm">{agency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Government Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for government organizations
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
            Ready to Modernize Government?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading government organizations that have already transformed their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200">
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