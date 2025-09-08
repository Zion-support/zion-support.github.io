import React from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  Brain, 
  Activity, 
  Lock, 
  BarChart3, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  TestTube,
  Smartphone,
  Building
} from 'lucide-react';

export default function HealthcareSolutions() {
  const features = [
    {
      icon: Heart,
      title: 'Patient Care Excellence',
      description: 'AI-powered patient monitoring and personalized care plans',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Diagnostics',
      description: 'Advanced machine learning for accurate disease detection',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with full regulatory compliance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Care Team Collaboration',
      description: 'Seamless communication between healthcare providers',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous health monitoring with predictive analytics',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'End-to-end encryption and secure data handling',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const solutions = [
    {
      title: 'AI Healthcare Platform',
      description: 'Comprehensive AI-powered healthcare management system',
      features: ['Patient Monitoring', 'AI Diagnostics', 'Care Coordination', 'Analytics Dashboard']
    },
    {
      title: 'Telemedicine Solutions',
      description: 'Remote healthcare delivery and virtual consultations',
      features: ['Video Consultations', 'Remote Monitoring', 'Digital Prescriptions', 'Patient Portal']
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered recommendations for treatment plans',
      features: ['Treatment Guidelines', 'Drug Interactions', 'Risk Assessment', 'Clinical Pathways']
    },
    {
      title: 'Healthcare Analytics',
      description: 'Data-driven insights for improved patient outcomes',
      features: ['Population Health', 'Quality Metrics', 'Cost Analysis', 'Performance Tracking']
    }
  ];

  const useCases = [
    {
      industry: 'Hospitals',
      description: 'Comprehensive patient care and monitoring systems',
      icon: Building
    },
    {
      industry: 'Clinics',
      description: 'Streamlined patient management and diagnostics',
      icon: Stethoscope
    },
    {
      industry: 'Research',
      description: 'Advanced AI research and clinical trials support',
      icon: TestTube
    },
    {
      industry: 'Telemedicine',
      description: 'Remote healthcare delivery and monitoring',
      icon: Smartphone
    }
  ];

  const benefits = [
    'Improve patient outcomes by 40%',
    'Reduce diagnostic errors by 85%',
    'Cut healthcare costs by 30%',
    'Streamline clinical workflows',
    'Ensure regulatory compliance',
    'Enable remote patient monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered solutions that improve patient outcomes and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              Healthcare-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for healthcare organizations with compliance, security, and patient care at the forefront
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
              Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address healthcare challenges and improve patient care
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

      {/* Use Cases Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different healthcare organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
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
              Why Choose Healthcare Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for healthcare organizations
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
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare organizations that have already improved patient care with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200">
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
};

export default HealthcareSolutions;
