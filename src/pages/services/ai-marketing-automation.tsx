import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  Brain, 
  Target, 
  Users, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  Star,
  ArrowRight,
  Mail,
  MessageCircle,
  Globe,
  Shield,
  Cloud,
  Rocket,
  Workflow,
  Calendar,
  Clock,
  Eye,
  Heart,
  ShoppingCart,
  Settings,
  Monitor,
  Filter,
  PieChart
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Audience Segmentation",
      description: "AI-powered customer segmentation based on behavior, preferences, and engagement patterns."
    },
    {
      icon: Target,
      title: "Personalized Campaigns",
      description: "Dynamic content and messaging that adapts to individual customer preferences and behavior."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up complex marketing workflows that trigger automatically based on customer actions."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast customer behavior and optimize campaigns for maximum ROI and engagement."
    },
    {
      icon: Shield,
      title: "Compliance & Privacy",
      description: "Built-in GDPR, CCPA, and other privacy compliance features for secure marketing operations."
    },
    {
      icon: Cloud,
      title: "Multi-Channel Integration",
      description: "Seamlessly integrate with email, social media, SMS, and other marketing channels."
    }
  ];

  const marketingChannels = [
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email campaigns with intelligent timing, personalization, and A/B testing."
    },
    {
      icon: MessageCircle,
      title: "Social Media",
      description: "Automated social media posting, engagement monitoring, and audience interaction."
    },
    {
      icon: Globe,
      title: "Web Personalization",
      description: "Dynamic website content that adapts to visitor behavior and preferences."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Automation",
      description: "Abandoned cart recovery, product recommendations, and purchase follow-ups."
    },
    {
      icon: Calendar,
      title: "Event Marketing",
      description: "Automated event promotion, registration, and follow-up communications."
    },
    {
      icon: Monitor,
      title: "Retargeting Campaigns",
      description: "Intelligent retargeting based on user behavior and engagement patterns."
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 50%",
    "Reduce marketing costs by 30%",
    "Improve customer engagement and retention",
    "Personalize customer experiences at scale",
    "Automate repetitive marketing tasks",
    "Optimize campaigns in real-time",
    "Gain deeper customer insights",
    "Scale marketing operations efficiently"
  ];

  const useCases = [
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Automated lead scoring and nurturing campaigns based on engagement behavior."
    },
    {
      icon: Heart,
      title: "Customer Retention",
      description: "Personalized retention campaigns and loyalty programs for existing customers."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Cross-selling and upselling automation based on customer purchase history."
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Automated campaigns for new market segments and geographic expansion."
    }
  ];

  return (
    <>
      <SEO 
        title="AI Marketing Automation - Zion Tech Group"
        description="Transform your marketing with AI-powered automation. Personalize campaigns, optimize ROI, and scale your marketing operations with intelligent automation."
        keywords="AI marketing automation, marketing automation, personalized marketing, customer segmentation, marketing ROI, AI campaigns"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Marketing Automation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Marketing Automation
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your marketing with intelligent AI automation. Personalize campaigns, 
                optimize ROI, and scale your marketing operations with data-driven insights and 
                predictive analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Intelligent Marketing Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI marketing automation platform combines advanced machine learning with 
                intelligent workflows to deliver personalized customer experiences at scale.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Channels Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Multi-Channel Marketing Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate your marketing across all channels with unified AI-powered workflows 
                and consistent customer experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-xl border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <channel.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Marketing Automation Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI marketing automation can transform your specific marketing 
                challenges and business objectives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Marketing Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and results in your marketing operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of marketers already using AI to automate and optimize their campaigns. 
                Start your free trial today and experience the future of marketing automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}