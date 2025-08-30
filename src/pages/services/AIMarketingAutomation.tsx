import React from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { Target, BarChart3, Users, Zap, Check, ExternalLink, Phone, Mail, ArrowRight, TrendingUp, MessageSquare, Mail as MailIcon, Share2, Filter export default function AIMarketingAutomation() {
=======
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Clock, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle,
  Brain,
  Workflow,
  MessageSquare,
  Mail,
  Smartphone,
  Globe,
  Star,
  ArrowRight,
  Play,
  Cpu,
  Heart,
  Eye
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AIMarketingAutomation = () => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Audience Targeting",
      description: "Machine learning algorithms identify and target your ideal customers with precision",
      price: "$59/month"
    },
    {
      icon: Target,
      title: "Smart Campaign Optimization",
      description: "AI continuously optimizes campaigns for maximum ROI and engagement",
      price: "$79/month"
    },
    {
<<<<<<< HEAD
      name: 'Enterprise',
      price: '$799',
      period: '/mo',
      contacts: 'Unlimited contacts',
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom integrations', 'Advanced reporting']

=======
      icon: MessageSquare,
      title: "Personalized Content Generation",
      description: "AI creates personalized marketing content for each customer segment",
      price: "$69/month"
    },
    {
      icon: Workflow,
      title: "Automated Marketing Workflows",
      description: "Intelligent automation that nurtures leads and converts prospects",
      price: "$89/month"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI predicts customer behavior and campaign performance",
      price: "$99/month"
    },
    {
      icon: Users,
      title: "Multi-Channel Orchestration",
      description: "Seamlessly coordinate campaigns across email, social, and web",
      price: "$119/month"
    }
=======;
      name: 'Enterprise',;
      price: '$799',;
      period: '/mo',;
      contacts: 'Unlimited contacts',;
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom integrations', 'Advanced reporting'];
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$59",
      period: "/month",
      description: "Perfect for small businesses starting with AI marketing",
      features: [
        "Basic audience targeting",
        "Email automation",
        "Social media posting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses with multiple marketing channels",
      features: [
        "All Starter features",
        "Advanced AI targeting",
        "Multi-channel campaigns",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex marketing needs",
      features: [
        "All Professional features",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "300% Higher ROI",
      description: "AI-optimized campaigns deliver significantly better returns"
    },
    {
      icon: Clock,
      title: "80% Time Savings",
      description: "Automate repetitive marketing tasks and focus on strategy"
    },
    {
      icon: Target,
      title: "5x Better Targeting",
      description: "AI identifies and reaches your ideal customers with precision"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Every customer receives relevant, personalized content"
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="AI-Powered Marketing Automation Platform - Zion Tech Group"
        description="Revolutionary AI marketing automation platform that personalizes campaigns, optimizes performance, and maximizes ROI through intelligent automation."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-6">
            <Target className="w-4 h-4 mr-2" /> AI Marketing Automation Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            AI Marketing Automation
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your marketing with AI that understands your audience, personalizes content,
            and optimizes campaigns in real-time for maximum engagement and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"

              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-purple-400/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center"

              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Marketing Automation?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes marketing by providing intelligent automation,
              personalization, and optimization that traditional tools simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Marketing Impact</h2>
            <p className="text-xl text-slate-300">See how AI transforms your marketing performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How AI Marketing Automation Works</h2>
            <p className="text-xl text-slate-300">Intelligent, automated, and personalized marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audience Analysis</h3>
              <p className="text-slate-300">AI analyzes customer behavior, preferences, and engagement patterns</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Personalization</h3>
              <p className="text-slate-300">AI automatically personalizes content and messaging for each segment</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-slate-300">Continuous optimization based on real-time performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Multi-Channel Marketing</h2>
            <p className="text-xl text-slate-300">Reach your audience across all channels with unified AI automation</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {channels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300">
                <p className="text-sm font-medium text-slate-300">{channel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your marketing needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  tier.name === 'Professional'
                    ? 'border-purple-500/50 bg-purple-500/5'
                    : 'border-slate-700/50'
                }`}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {tier.price}<span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-400">{tier.contacts}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                      : 'bg-slate-700 hover:bg-slate-600 border border-slate-600'
                  }`}

                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
=======
    <>
      <SEO 
        title="AI Marketing Automation - Zion Tech Group"
        description="Revolutionary AI-powered marketing automation platform that personalizes campaigns, optimizes performance, and delivers exceptional ROI through intelligent automation."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                AI Marketing Automation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                  AI Marketing Automation
                </span>
                <br />
                <span className="text-white">That Converts</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your marketing with AI that personalizes campaigns, optimizes performance, and delivers 
                exceptional ROI. Automate what you can, personalize what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Marketing Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See measurable improvements in ROI, customer engagement, and campaign performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Features That Revolutionize Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI doesn't just automate—it personalizes, optimizes, and delivers results that matter
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="text-pink-400 font-semibold">{feature.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your AI Marketing Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as you grow. All plans include our core AI features.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-pink-400 shadow-lg shadow-pink-400/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features Deep Dive</h2>
            <p className="text-xl text-slate-300">Advanced capabilities that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Filter className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Segmentation</h3>
              <p className="text-slate-300 mb-4">
                Our AI automatically segments your audience based on behavior, preferences,
                and engagement patterns, ensuring each customer receives the most relevant content.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Behavioral segmentation</li>
                <li>• Predictive analytics</li>
                <li>• Dynamic audience groups</li>
                <li>• Real-time updates</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Content Personalization</h3>
              <p className="text-slate-300 mb-4">
                AI automatically personalizes email content, subject lines, and send times
                for each individual customer to maximize engagement and conversions.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Dynamic content blocks</li>
                <li>• Personalized subject lines</li>
                <li>• Optimal send time optimization</li>
                <li>• A/B testing automation</li>
              </ul>
=======
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to create personalized,
            high-converting marketing campaigns that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"

              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-purple-400/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center"

              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-purple-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-purple-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Website</h4>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 inline-flex items-center"

                  ziontechgroup.com <ExternalLink className="w-4 h-4 ml-1" />
                </a>
=======
        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI to create personalized, high-converting campaigns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}}}
=======
};

export default AIMarketingAutomation;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
