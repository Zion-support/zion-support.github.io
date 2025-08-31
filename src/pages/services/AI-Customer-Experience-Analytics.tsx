import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  BarChart3,
  MessageSquare,
  Calendar,
  DollarSign,
  Heart,
  Smile,
  ThumbsUp,
  UserCheck,
  Monitor,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICustomerExperienceAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced NLP algorithms analyze customer feedback, reviews, and interactions in real-time"
    },
    {
      icon: BarChart3,
      title: "360° Customer Journey Mapping",
      description: "Complete visibility into customer touchpoints across all channels and devices"
    },
    {
      icon: TrendingUp,
      title: "Predictive Customer Behavior",
      description: "Machine learning models predict customer needs and potential churn before it happens"
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "AI-driven recommendations for personalized customer experiences and product suggestions"
    },
    {
      icon: Users,
      title: "Multi-channel Integration",
      description: "Seamless integration with websites, mobile apps, social media, and customer support systems"
    },
    {
      icon: Zap,
      title: "Real-time Alerts & Notifications",
      description: "Instant notifications for critical customer experience issues and opportunities"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses starting their CX journey",
      features: [
        "Up to 50,000 customer interactions/month",
        "Basic sentiment analysis",
        "3 channel integrations",
        "Email support",
        "Standard reporting",
        "Basic dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with multiple customer touchpoints",
      features: [
        "Up to 500,000 customer interactions/month",
        "Advanced AI analytics & insights",
        "Unlimited channel integrations",
        "Priority support",
        "Custom reporting & dashboards",
        "API access",
        "Team collaboration tools",
        "Advanced segmentation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "/month",
      description: "For large organizations with complex customer experience needs",
      features: [
        "Unlimited customer interactions",
        "Custom AI models & algorithms",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations & APIs",
        "Advanced security & compliance",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Increased Customer Satisfaction",
      description: "Boost customer satisfaction scores by up to 45% with data-driven insights"
    },
    {
      icon: Smile,
      title: "Better Customer Retention",
      description: "Reduce customer churn by up to 60% with proactive experience optimization"
    },
    {
      icon: ThumbsUp,
      title: "Improved Customer Lifetime Value",
      description: "Increase CLV by up to 300% through personalized experiences and proactive engagement"
    },
    {
      icon: UserCheck,
      title: "Faster Issue Resolution",
      description: "Identify and resolve customer issues 5x faster with AI-powered detection"
    },
    {
      icon: Monitor,
      title: "Real-time Performance Monitoring",
      description: "Monitor customer experience metrics in real-time across all channels"
    },
    {
      icon: DollarSign,
      title: "Higher Revenue Growth",
      description: "Drive revenue growth of up to 25% through improved customer experiences"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "E-commerce & Retail",
      description: "Optimize online shopping experiences, reduce cart abandonment, and increase conversions"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Enhance mobile user experience, reduce app uninstalls, and increase engagement"
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Improve support quality, reduce response times, and increase customer satisfaction"
    },
    {
      icon: Globe,
      title: "Multi-language Markets",
      description: "Optimize experiences for global customers with localized insights and recommendations"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Experience Analytics | Zion Tech Group"
        description="Transform your customer experience with AI-powered analytics. Understand, predict, and optimize every customer interaction with cutting-edge machine learning."
        keywords="AI customer experience, CX analytics, customer sentiment analysis, customer journey mapping, predictive analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Customer Experience Analytics</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Customer
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Experience Analytics
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer experience with AI-powered analytics. Understand, predict, 
                and optimize every customer interaction with cutting-edge machine learning technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Customer Experience Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides everything you need to understand, measure, and 
                optimize your customer experience across all touchpoints.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered customer experience analytics platform is designed to work 
                across various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Experience Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their customer experience 
                with our AI-powered analytics platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business needs. 
                Start free and upgrade as you grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI to create exceptional customer experiences and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerExperienceAnalytics;