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
  DollarSign
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIContentIntelligencePlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Analysis",
      description: "Advanced machine learning algorithms analyze content performance, sentiment, and engagement patterns"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive insights into content performance, audience behavior, and ROI metrics"
    },
    {
      icon: TrendingUp,
      title: "Predictive Content Optimization",
      description: "AI-driven recommendations for content improvement and audience engagement"
    },
    {
      icon: Target,
      title: "Audience Intelligence",
      description: "Deep insights into audience demographics, preferences, and content consumption patterns"
    },
    {
      icon: Users,
      title: "Multi-platform Integration",
      description: "Seamless integration with social media, websites, and content management systems"
    },
    {
      icon: Zap,
      title: "Automated Content Scheduling",
      description: "Smart scheduling based on optimal posting times and audience activity patterns"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 10,000 content pieces analyzed",
        "Basic analytics dashboard",
        "5 social media integrations",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 100,000 content pieces analyzed",
        "Advanced analytics & AI insights",
        "Unlimited social media integrations",
        "Priority support",
        "Custom reporting",
        "API access",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex content needs",
      features: [
        "Unlimited content analysis",
        "Custom AI models",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Increased Content Visibility",
      description: "Boost your content reach by up to 300% with AI-optimized strategies"
    },
    {
      icon: PenTool,
      title: "Content Quality Improvement",
      description: "AI-powered suggestions improve content quality and engagement rates"
    },
    {
      icon: Analytics,
      title: "Data-Driven Decisions",
      description: "Make informed content decisions based on real-time analytics and insights"
    },
    {
      icon: MessageSquare,
      title: "Better Audience Engagement",
      description: "Understand your audience better and create more engaging content"
    },
    {
      icon: Calendar,
      title: "Optimized Publishing Schedule",
      description: "Publish content at the perfect time for maximum engagement"
    },
    {
      icon: DollarSign,
      title: "Improved ROI",
      description: "Increase content marketing ROI by up to 400% with intelligent optimization"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Content Intelligence Platform | Zion Tech Group"
        description="Transform your content strategy with AI-powered intelligence. Analyze, optimize, and engage your audience with cutting-edge machine learning technology."
        keywords="AI content analysis, content intelligence, content optimization, audience analytics, content marketing AI"
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
                <span>AI-Powered Content Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Content
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Intelligence Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your content strategy with cutting-edge AI technology. Analyze performance, 
                optimize engagement, and drive results with intelligent content insights.
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
                Powerful Features for Content Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides everything you need to create, analyze, and optimize 
                content that drives real business results.
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

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their content strategy 
                with our AI-powered platform.
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
        <section className="py-20 px-6">
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
                Ready to Transform Your Content Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI to create better content and drive real results.
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

export default AIContentIntelligencePlatform;