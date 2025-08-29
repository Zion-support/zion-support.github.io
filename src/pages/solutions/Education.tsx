import React from 'react';
import { 
  BookOpen, 
  Users, 
  Brain, 
  Globe, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Building,
  GraduationCap,
  Lightbulb,
  Target,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function EducationSolutions() {
  const features = [
    {
      icon: BookOpen,
      title: 'Learning Excellence',
      description: 'AI-powered personalized learning experiences',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Student Engagement',
      description: 'Interactive tools to increase student participation',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'AI that adapts to individual student needs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Remote learning capabilities for worldwide access',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights into student progress and performance',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Comprehensive analytics for educational outcomes',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {
      title: 'AI Learning Platform',
      description: 'Comprehensive AI-powered educational management system',
      features: ['Personalized Learning', 'Student Analytics', 'Content Management', 'Assessment Tools']
    },
    {
      title: 'Virtual Classroom',
      description: 'Advanced virtual learning environment with collaboration tools',
      features: ['Video Conferencing', 'Interactive Whiteboards', 'Breakout Rooms', 'Recording']
    },
    {
      title: 'Learning Analytics',
      description: 'Data-driven insights to improve educational outcomes',
      features: ['Student Progress', 'Performance Metrics', 'Predictive Analytics', 'Reporting']
    },
    {
      title: 'Content Creation',
      description: 'AI-powered tools for creating engaging educational content',
      features: ['Interactive Content', 'Multimedia Support', 'Accessibility', 'Localization']
    }
  ];

  const institutions = [
    {
      title: 'K-12 Schools',
      description: 'Elementary and secondary education solutions',
      icon: Building
    },
    {
      title: 'Universities',
      description: 'Higher education and research institutions',
      icon: GraduationCap
    },
    {
      title: 'Corporate Training',
      description: 'Professional development and skills training',
      icon: Users
    },
    {
      title: 'Online Learning',
      description: 'Digital education platforms and MOOCs',
      icon: Globe
    }
  ];

  const benefits = [
    'Improve student engagement by 60%',
    'Increase learning outcomes by 40%',
    'Reduce administrative workload by 35%',
    'Enable personalized learning paths',
    'Support remote and hybrid learning',
    'Provide data-driven insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Education Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform education with AI-powered solutions that enhance learning, engagement, and outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center gap-2">
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
              Education-Focused Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built specifically for educational institutions with learning, engagement, and outcomes in mind
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
              Education Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions designed to address educational challenges and improve learning outcomes
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

      {/* Institutions Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Educational Institutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions are designed to meet the unique needs of different educational settings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <institution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{institution.title}</h3>
                <p className="text-gray-300 text-sm">{institution.description}</p>
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
              Why Choose Education Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for educational institutions
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
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading educational institutions that have already improved learning outcomes with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
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