import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Activity,
  Eye,
  Shield,
  Mail,
  Phone,
  MapPin,
  Play,
  Calendar,
  Target,
  Cpu,
  Database,
  Network,
  MessageCircle,
  Mail as MailIcon,
  Smartphone,
  Globe,
  Search,
  Filter,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  UserCheck,
  UserPlus,
  ShoppingCart,
  CreditCard
} from 'lucide-react';

const AIPoweredMarketingAutomation = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate personalized marketing content with AI that adapts to your audience and brand voice",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Smart Audience Segmentation",
      description: "AI-powered audience analysis and segmentation for hyper-targeted marketing campaigns",
      icon: Target,
      color: "text-green-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast campaign performance and optimize marketing strategies with machine learning",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Multi-Channel Automation",
      description: "Automate campaigns across email, social media, SMS, and web channels seamlessly",
      icon: Network,
      color: "text-orange-500"
    },
    {
      title: "Real-time Optimization",
      description: "Continuously optimize campaigns in real-time based on performance data and AI insights",
      icon: Activity,
      color: "text-yellow-500"
    },
    {
      title: "Advanced Attribution",
      description: "Track customer journey and attribute conversions across all touchpoints accurately",
      icon: BarChart3,
      color: "text-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting with marketing automation",
      features: [
        "Up to 5,000 contacts",
        "Basic AI content generation",
        "Email automation",
        "Email support",
        "Basic analytics dashboard",
        "Social media integration",
        "5 email templates",
        "3 user accounts"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with advanced marketing needs",
      features: [
        "Up to 25,000 contacts",
        "Advanced AI content generation",
        "Multi-channel automation",
        "Priority support",
        "Advanced analytics",
        "A/B testing",
        "Unlimited templates",
        "Unlimited users",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for large organizations with unlimited contacts",
      features: [
        "Unlimited contacts",
        "Custom AI model training",
        "Advanced automation",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "Advanced security features",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Increase Conversion Rates by 300%",
      description: "AI-powered personalization and optimization drive significantly higher conversion rates",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      title: "Save 80% on Marketing Time",
      description: "Automate repetitive tasks and focus on strategy and creative work",
      icon: Clock,
      color: "text-green-500"
    },
    {
      title: "Reduce Customer Acquisition Costs by 50%",
      description: "Better targeting and automation lead to more efficient customer acquisition",
      icon: DollarSign,
      color: "text-purple-500"
    },
    {
      title: "Improve Customer Lifetime Value",
      description: "Personalized experiences and better engagement increase customer loyalty",
      icon: Users,
      color: "text-orange-500"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Marketing",
      description: "Automate product recommendations, abandoned cart recovery, and customer retention",
      icon: ShoppingCart,
      examples: ["Abandoned cart recovery", "Product recommendations", "Customer retention", "Loyalty programs"]
    },
    {
      title: "B2B Lead Generation",
      description: "Automate lead nurturing, qualification, and conversion across the sales funnel",
      icon: Building2,
      examples: ["Lead nurturing", "Lead scoring", "Sales funnel automation", "Account-based marketing"]
    },
    {
      title: "Content Marketing",
      description: "Automate content distribution, social media posting, and audience engagement",
      icon: MessageCircle,
      examples: ["Content scheduling", "Social media automation", "Audience engagement", "Content optimization"]
    },
    {
      title: "Customer Success",
      description: "Automate onboarding, support, and success campaigns for better customer experience",
      icon: UserCheck,
      examples: ["Onboarding automation", "Support workflows", "Success campaigns", "Customer feedback"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Marketing Automation
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Transform your marketing with AI-powered automation. Generate personalized content, 
                optimize campaigns, and drive 300% higher conversion rates with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Marketing AI Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge marketing technology with comprehensive 
              automation to transform how you engage with your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-slate-600/50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Marketing Results
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Stop spending hours on manual marketing tasks and start focusing on 
              what matters most - growing your business and serving your customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`p-3 rounded-lg bg-slate-600/50 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered marketing automation platform is designed to serve businesses 
              across various industries and marketing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-pink-600/20 text-pink-400 mr-4">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Platform Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that fits your marketing needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-700/50 p-8 rounded-xl border ${
                  tier.popular 
                    ? 'border-pink-500/50 bg-gradient-to-br from-slate-700/50 to-pink-900/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-400">{tier.period}</span>
                  </div>
                  <p className="text-zinc-300 mb-4">{tier.description}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-semibold">{tier.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their marketing results 
              with our AI-powered automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zinc-300 hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zinc-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredMarketingAutomation;