import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Mail, 
  MessageSquare, 
  Zap,
  Brain,
  Globe,
  Rocket,
  Star,
  Palette,
  Monitor,
  Smartphone
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const services = [
    {
      title: 'AI-Powered Campaign Management',
      description: 'Intelligent campaign automation that optimizes performance in real-time using machine learning algorithms.',
      icon: Target,
      features: [
        'Automated campaign optimization',
        'Real-time performance tracking',
        'A/B testing automation',
        'Dynamic content personalization',
        'Predictive analytics',
        'Cross-channel coordination'
      ],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'Smart Content Generation',
      description: 'AI-driven content creation that generates personalized marketing materials across all channels.',
      icon: Palette,
      features: [
        'Automated content creation',
        'Personalized messaging',
        'Multi-language support',
        'Brand voice consistency',
        'SEO optimization',
        'Content performance analytics'
      ],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Customer Journey Automation',
      description: 'Intelligent journey mapping and automation that delivers personalized experiences at every touchpoint.',
      icon: Users,
      features: [
        'Behavioral tracking',
        'Predictive journey mapping',
        'Automated touchpoint delivery',
        'Personalization engines',
        'Conversion optimization',
        'Customer lifetime value tracking'
      ],
      price: 'Starting at $3,499/month'
    },
    {
      title: 'Marketing Analytics & Insights',
      description: 'Advanced analytics platform that provides actionable insights and ROI measurement.',
      icon: BarChart3,
      features: [
        'Real-time performance metrics',
        'ROI tracking and attribution',
        'Customer segmentation',
        'Predictive modeling',
        'Competitive analysis',
        'Custom reporting dashboards'
      ],
      price: 'Starting at $1,799/month'
    }
  ];

  const channels = [
    {
      title: 'Email Marketing',
      description: 'AI-powered email campaigns with personalization and automation',
      icon: Mail,
      features: ['Smart segmentation', 'Behavioral triggers', 'A/B testing', 'Performance optimization']
    },
    {
      title: 'Social Media',
      description: 'Automated social media management with intelligent content scheduling',
      icon: MessageSquare,
      features: ['Content scheduling', 'Engagement tracking', 'Trend analysis', 'Community management']
    },
    {
      title: 'Digital Advertising',
      description: 'Programmatic advertising with AI-driven optimization',
      icon: Monitor,
      features: ['Bid optimization', 'Audience targeting', 'Creative testing', 'Performance tracking']
    },
    {
      title: 'Mobile Marketing',
      description: 'Mobile-first marketing automation and push notification optimization',
      icon: Smartphone,
      features: ['Push notifications', 'In-app messaging', 'Location targeting', 'Mobile analytics']
    }
  ];

  const benefits = [
    {
      title: 'Increased ROI',
      description: 'Optimize campaigns in real-time for maximum return on investment',
      icon: TrendingUp
    },
    {
      title: 'Personalized Experiences',
      description: 'Deliver tailored content and offers to each customer segment',
      icon: Users
    },
    {
      title: 'Time Savings',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: Zap
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed marketing decisions based on real-time analytics',
      icon: Brain
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
              AI Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your marketing with AI-powered automation that personalizes experiences, 
              optimizes campaigns, and drives measurable results across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
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
            <h2 className="text-4xl font-bold mb-4">AI Marketing Automation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions that combine artificial intelligence with marketing expertise
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
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Marketing Channels Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Omnichannel Marketing Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate and automate marketing across all customer touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{channel.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                  <ul className="space-y-2 text-sm">
                    {channel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400">
                        • {feature}
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
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Marketing Automation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of marketing with intelligent automation and AI-powered insights
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
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the marketing revolution with AI-powered automation that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
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