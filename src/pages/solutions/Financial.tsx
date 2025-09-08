import React from 'react';
import { 
  DollarSign, 
  Shield, 
  Users, 
  BarChart3, 
  Lock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Building,
  Globe,
  Settings,
  Heart,
  CreditCard,
  PieChart
} from 'lucide-react';

export default function FinancialSolutions() {
  const features = [
    {
      icon: DollarSign,
      title: 'Financial Excellence',
      description: 'AI-powered financial management and optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Full compliance with financial regulations and standards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Enhanced customer service and financial products',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: BarChart3,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Bank-grade security for financial data protection',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time financial performance insights',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const solutions = [
    {
      title: 'AI Financial Platform',
      description: 'Comprehensive AI-powered financial management system',
      features: ['Portfolio Management', 'Risk Assessment', 'Compliance Monitoring', 'Analytics Dashboard']
    },
    {
      title: 'Digital Banking Solutions',
      description: 'Modern digital banking and payment platforms',
      features: ['Mobile Banking', 'Payment Processing', 'Account Management', 'Security']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting',
      features: ['KYC/AML', 'Regulatory Reporting', 'Audit Trails', 'Compliance Dashboard']
    },
    {
      title: 'Financial Analytics',
      description: 'Advanced analytics for financial decision making',
      features: ['Risk Modeling', 'Performance Analysis', 'Predictive Analytics', 'Reporting']
    }
  ];

  const sectors = [
    {
      title: 'Banks',
      description: 'Traditional and digital banking solutions',
      icon: Building
    },
    {
      title: 'Credit Unions',
      description: 'Member-focused financial services',
      icon: Users
    },
    {
      title: 'Investment Firms',
      description: 'Portfolio and wealth management',
      icon: PieChart
    },
    {
      title: 'Fintech Startups',
      description: 'Innovative financial technology',
      icon: TrendingUp
    }
  ];

  const benefits = [
    'Improve operational efficiency by 40%',
    'Reduce compliance costs by 35%',
    'Enhance customer satisfaction by 50%',
    'Accelerate digital transformation',
    'Ensure regulatory compliance',
    'Enable innovation and growth'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Financial Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform financial services with AI-powered solutions that enhance security, compliance, and customer experience
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
              Financial-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for financial institutions with security, compliance, and performance at the forefront
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
              Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address financial industry challenges and drive innovation
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

      {/* Sectors Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial Sectors
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different financial institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{sector.title}</h3>
                <p className="text-gray-300 text-sm">{sector.description}</p>
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
              Why Choose Financial Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for financial institutions
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
            Ready to Transform Financial Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions that have already modernized their operations with our solutions
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