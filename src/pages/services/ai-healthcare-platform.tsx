import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Server,
  Smartphone,
  Monitor,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcarePlatform() {
  const features = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast health outcomes and identify risk factors before they become critical',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Personalized Treatment Plans',
      description: 'AI-generated treatment recommendations based on individual patient data',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous health monitoring with instant alerts for critical changes',
      icon: Monitor,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Secure Data Management',
      description: 'HIPAA-compliant data handling with enterprise-grade security',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Integration Ready',
      description: 'Seamlessly integrates with existing healthcare systems and EHR platforms',
      icon: Server,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const useCases = [
    {
      title: 'Hospitals & Clinics',
      description: 'Streamline patient care with AI-powered diagnostic support and workflow optimization',
      icon: Building,
      benefits: ['Reduced diagnostic errors', 'Faster patient processing', 'Improved resource allocation']
    },
    {
      title: 'Research Institutions',
      description: 'Accelerate medical research with AI-driven data analysis and pattern recognition',
      icon: Flask,
      benefits: ['Faster research cycles', 'Better data insights', 'Improved collaboration']
    },
    {
      title: 'Pharmaceutical Companies',
      description: 'Optimize drug development with AI-powered clinical trial analysis and patient stratification',
      icon: Pill,
      benefits: ['Faster drug discovery', 'Better trial outcomes', 'Reduced costs']
    },
    {
      title: 'Insurance Providers',
      description: 'Improve risk assessment and fraud detection with AI-powered claims analysis',
      icon: Shield,
      benefits: ['Better risk assessment', 'Reduced fraud', 'Improved customer service']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for pattern recognition and prediction' },
    { name: 'Natural Language Processing', description: 'Process and understand medical text and reports' },
    { name: 'Computer Vision', description: 'Analyze medical images and scans for abnormalities' },
    { name: 'Predictive Analytics', description: 'Forecast health outcomes and identify risk factors' },
    { name: 'IoT Integration', description: 'Connect with wearable devices and medical equipment' },
    { name: 'Blockchain Security', description: 'Ensure data integrity and secure sharing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Platform - Zion Tech Group"
        description="Transform healthcare delivery with our AI-powered platform. Advanced diagnostics, predictive analytics, and personalized treatment plans."
        keywords="AI healthcare, medical AI, healthcare platform, diagnostic AI, predictive healthcare, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare AI Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with our comprehensive AI platform. 
              From advanced diagnostics to personalized treatment plans, we're transforming 
              how healthcare providers deliver care and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-xl">
              <div className="text-3xl font-bold text-red-400 mb-2">99.2%</div>
              <div className="text-gray-300">Diagnostic Accuracy</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Diagnosis</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with healthcare expertise 
              to deliver unprecedented accuracy and efficiency in patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-2xl hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to serve the entire healthcare ecosystem, 
              from individual practitioners to large healthcare networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-2xl hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-red-400/30">
                    <useCase.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest advancements in AI, machine learning, and healthcare technology 
              to ensure the highest standards of accuracy and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-xl hover:border-red-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the healthcare revolution with our AI platform. 
              Improve patient outcomes, reduce costs, and enhance operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Flask = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Pill = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);