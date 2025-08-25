import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Star,
  Briefcase,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function AIHRRecruitment() {
  const services = [
    {
      title: 'AI-Powered Talent Acquisition',
      description: 'Intelligent recruitment platform that automates candidate sourcing, screening, and matching using advanced AI algorithms.',
      icon: Search,
      features: [
        'Automated candidate sourcing',
        'AI-powered resume screening',
        'Skills-based matching',
        'Predictive candidate success',
        'Diversity and inclusion tracking',
        'Compliance monitoring'
      ],
      price: 'Starting at $3,999/month'
    },
    {
      title: 'Intelligent Candidate Assessment',
      description: 'Advanced assessment tools that evaluate candidates using AI-driven behavioral analysis and skill testing.',
      icon: Target,
      features: [
        'Behavioral assessment',
        'Skills testing automation',
        'Cultural fit analysis',
        'Cognitive ability testing',
        'Video interview analysis',
        'Predictive performance modeling'
      ],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'HR Process Automation',
      description: 'Streamlined HR operations with AI-powered automation for onboarding, performance management, and employee engagement.',
      icon: Zap,
      features: [
        'Automated onboarding workflows',
        'Performance review automation',
        'Employee engagement tracking',
        'Leave management automation',
        'Compliance documentation',
        'HR analytics dashboard'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Employee Development & Training',
      description: 'AI-driven learning platforms that personalize training programs and track employee development progress.',
      icon: TrendingUp,
      features: [
        'Personalized learning paths',
        'Skills gap analysis',
        'Training recommendation engine',
        'Progress tracking',
        'Certification management',
        'Learning analytics'
      ],
      price: 'Starting at $2,999/month'
    }
  ];

  const recruitmentFeatures = [
    {
      title: 'Smart Sourcing',
      description: 'AI-powered candidate discovery across multiple platforms and databases',
      icon: Search,
      benefits: ['Passive candidate identification', 'Skills-based matching', 'Market intelligence', 'Competitive analysis']
    },
    {
      title: 'Automated Screening',
      description: 'Intelligent filtering and ranking of candidates based on job requirements',
      icon: Target,
      benefits: ['Resume parsing', 'Keyword matching', 'Experience validation', 'Cultural fit assessment']
    },
    {
      title: 'Interview Automation',
      description: 'AI-driven interview scheduling, conducting, and evaluation',
      icon: MessageSquare,
      benefits: ['Automated scheduling', 'Video interview analysis', 'Response evaluation', 'Candidate scoring']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights for hiring decisions and candidate success prediction',
      icon: BarChart3,
      benefits: ['Success probability scoring', 'Retention prediction', 'Performance forecasting', 'Hiring ROI analysis']
    }
  ];

  const benefits = [
    {
      title: 'Faster Hiring',
      description: 'Reduce time-to-hire by up to 60% with AI-powered automation',
      icon: Zap
    },
    {
      title: 'Better Quality Hires',
      description: 'Improve candidate quality and retention with predictive analytics',
      icon: Star
    },
    {
      title: 'Cost Reduction',
      description: 'Lower recruitment costs through automation and efficiency gains',
      icon: TrendingUp
    },
    {
      title: 'Improved Diversity',
      description: 'Enhance diversity and inclusion with unbiased AI algorithms',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI HR & Recruitment Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your HR operations with AI-powered recruitment, talent management, and employee development solutions. 
              Find the best talent faster and build stronger teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI HR & Recruitment Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that revolutionize how you find, hire, and develop talent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recruitment Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Intelligent Recruitment Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that streamline every aspect of the recruitment process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recruitmentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI HR & Recruitment?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of human resources with intelligent automation and data-driven insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies that have revolutionized their HR with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}