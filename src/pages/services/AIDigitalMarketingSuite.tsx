import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Mail, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Rocket,
  Brain,
  Zap,
  Eye,
  MousePointer,
  Hash,
  Share2,
  Video,
  Image,
  FileText,
  Calendar,
  PieChart,
  Activity,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function AIDigitalMarketingSuite() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Automatically create engaging content for blogs, social media, and email campaigns"
    },
    {
      icon: Target,
      title: "Intelligent Audience Targeting",
      description: "AI-powered audience segmentation and personalized marketing campaigns"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast campaign performance and optimize marketing strategies in real-time"
    },
    {
      icon: MessageSquare,
      title: "Chatbot Marketing",
      description: "AI chatbots for lead generation, customer support, and sales conversion"
    },
    {
      icon: TrendingUp,
      title: "Automated A/B Testing",
      description: "Continuous optimization of marketing campaigns using machine learning"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "AI-powered scheduling, content curation, and engagement optimization"
    }
  ];

  const benefits = [
    "300% increase in marketing ROI",
    "50% reduction in content creation time",
    "Real-time campaign optimization",
    "Personalized customer experiences",
    "Automated lead nurturing",
    "Data-driven decision making"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generation (10 articles/month)",
        "Basic Audience Targeting",
        "Social Media Management (3 platforms)",
        "Email Marketing Automation",
        "Basic Analytics Dashboard",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited AI Content Generation",
        "Advanced Audience Targeting",
        "Social Media Management (all platforms)",
        "Advanced Email Marketing",
        "Predictive Analytics",
        "Chatbot Marketing",
        "Priority Support",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$15,000",
      period: "/month",
      description: "For large marketing teams",
      features: [
        "Custom AI Models",
        "Advanced Predictive Analytics",
        "Multi-channel Marketing Automation",
        "Advanced Chatbot Solutions",
        "Custom Reporting",
        "Dedicated Account Manager",
        "24/7 Support",
        "API Access"
      ]
    }
  ];

  const marketingChannels = [
    {
      name: "Social Media Marketing",
      description: "AI-powered social media management across all platforms",
      features: ["Content scheduling", "Engagement optimization", "Trend analysis", "Influencer identification"]
    },
    {
      name: "Email Marketing",
      description: "Intelligent email campaigns with personalization and automation",
      features: ["Behavioral triggers", "A/B testing", "Segmentation", "Performance tracking"]
    },
    {
      name: "Content Marketing",
      description: "AI-generated content that resonates with your audience",
      features: ["Blog writing", "Social posts", "Email content", "SEO optimization"]
    },
    {
      name: "Search Engine Marketing",
      description: "Data-driven PPC and SEO strategies",
      features: ["Keyword research", "Ad optimization", "Performance tracking", "ROI analysis"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Personalized product recommendations, abandoned cart recovery, and customer lifecycle marketing",
      results: ["25% increase in conversion rates", "40% reduction in cart abandonment", "60% improvement in customer retention"]
    },
    {
      industry: "B2B Services",
      description: "Lead generation, account-based marketing, and sales enablement",
      results: ["3x increase in qualified leads", "50% faster sales cycles", "80% improvement in lead scoring accuracy"]
    },
    {
      industry: "Healthcare",
      description: "Patient engagement, appointment reminders, and health education campaigns",
      results: ["30% increase in patient engagement", "45% reduction in no-shows", "Improved patient satisfaction scores"]
    },
    {
      industry: "Education",
      description: "Student recruitment, course marketing, and alumni engagement",
      results: ["40% increase in enrollment", "35% improvement in student retention", "Enhanced alumni relationships"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Digital Marketing Suite - Zion Tech Group"
        description="Revolutionize your marketing with AI-powered automation, content generation, and predictive analytics. Increase ROI and engagement."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-900/20 border border-pink-500/30 text-pink-300 text-sm font-medium mb-8">
              <Target className="w-4 h-4 mr-2" />
              AI Marketing Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Digital Marketing Suite
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your marketing with AI-powered automation, intelligent content generation, 
              and predictive analytics. Drive unprecedented ROI and engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-pink-500/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI-Powered Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Digital Marketing Suite provides everything you need to create, 
              optimize, and scale your marketing campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Multi-Channel Marketing Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your marketing channels from one intelligent platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{channel.name}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  {channel.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Marketing Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in ROI, engagement, and customer acquisition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries are achieving remarkable results with our AI marketing suite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a plan that fits your business size and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-pink-500/50 bg-gradient-to-b from-pink-900/20 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-600 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have transformed their marketing with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services-overview"
                className="inline-flex items-center px-8 py-4 border border-pink-500/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}