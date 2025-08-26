import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Headphones, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  DollarSign,
  ArrowRight,
  Smartphone,
  Globe,
  Search,
  Edit3,
  Download,
  Eye,
  Lock,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle,
  FileText,
  Activity,
  Cpu,
  Network,
  Monitor,
  Target,
  TrendingUp,
  Phone,
  Mail,

  Bot
} from 'lucide-react';

export default function AICustomerServiceAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI Chatbots",
      description: "Intelligent chatbots that understand context and provide accurate responses 24/7"
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Support",
      description: "Seamless support across email, chat, phone, social media, and messaging platforms"
    },
    {
      icon: Users,
      title: "Smart Routing",
      description: "AI-powered ticket routing to the most qualified agents for faster resolution"
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Real-time emotion detection to prioritize urgent cases and improve customer satisfaction"
    },
    {
      icon: Zap,
      title: "Automated Responses",
      description: "Instant responses to common queries with human-like conversation flow"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with GDPR and SOC2 compliance for customer data protection"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI chatbot",
        "Email and chat support",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses and mid-size companies",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI chatbot",
        "Multi-channel support",
        "Priority support",
        "Advanced analytics",
        "API integration",
        "Custom workflows",
        "Sentiment analysis"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large corporations and global customer service teams",
      features: [
        "Unlimited conversations",
        "Custom AI models",
        "Omnichannel support",
        "Dedicated support team",
        "White-label solution",
        "Custom integrations",
        "On-premise deployment",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce customer service costs by 40-60% while improving response times and quality"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide instant support around the clock without increasing staff costs"
    },
    {
      icon: Users,
      title: "Improved Satisfaction",
      description: "Faster response times and accurate answers lead to higher customer satisfaction scores"
    },
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI handles routine queries while human agents focus on complex customer needs"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Handle customer volume spikes without proportional cost increases"
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Gain valuable insights into customer behavior and service optimization opportunities"
    }
  ];

  const channels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time chat support with instant AI responses and seamless human handoff"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Automated email categorization, routing, and intelligent response suggestions"
    },
    {
      icon: Phone,
      title: "Voice Support",
      description: "AI-powered call routing, transcription, and intelligent voice response systems"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "In-app support with push notifications and seamless mobile experience"
    },
    {
      icon: Globe,
      title: "Social Media",
      description: "Monitor and respond to customer inquiries across all social platforms"
    },
    {
      icon: Bot,
      title: "Messaging Apps",
      description: "Support for WhatsApp, Facebook Messenger, Slack, and other messaging platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            AI-Powered Customer Service Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Automation</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your customer service with AI-powered automation. Provide instant, intelligent support across all channels while reducing costs and improving satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-demo"
              className="px-8 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">60%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
            <div className="text-gray-400">Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">&lt;1s</div>
            <div className="text-gray-400">Response Time</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Customer Service Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Channels Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Multi-Channel Support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-500 bg-indigo-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  {plan.popular ? (
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white block">
                      {plan.cta}
                    </span>
                  ) : (
                    <span className="border border-gray-600 text-gray-300 block hover:border-indigo-500 hover:text-indigo-400">
                      {plan.cta}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Customer Service Automation?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies who are already leveraging AI to provide exceptional customer experiences while reducing operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}