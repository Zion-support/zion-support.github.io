import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageCircle, 
  Brain, 
  Clock, 
  Users, 
  Shield, 
  Globe,
  CheckCircle,
  Play,
  Settings,
  Cpu,
  Database,
  Cloud,
  Lock,
  Target,
  Rocket,
  Star,
  Zap,
  Phone,
  Mail,
  Calendar,
  FileText,
  Search,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIVirtualAssistant() {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced NLP for human-like conversations and understanding context",
      price: "$199/month"
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Support",
      description: "Seamless integration across chat, email, phone, and social media",
      price: "$149/month"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always-on virtual assistant that never sleeps or takes breaks",
      price: "$99/month"
    },
    {
      icon: Users,
      title: "Personalized Interactions",
      description: "AI learns user preferences and adapts responses accordingly",
      price: "$179/month"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards",
      price: "$299/month"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for 50+ languages with cultural context awareness",
      price: "$129/month"
    }
  ];

  const capabilities = [
    "Customer support and inquiry handling",
    "Appointment scheduling and calendar management",
    "Order processing and tracking",
    "Technical troubleshooting and guidance",
    "Document processing and form filling",
    "Real-time language translation",
    "Voice recognition and speech synthesis",
    "Predictive analytics and insights"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI responses",
        "Email and chat support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI capabilities",
        "Multi-channel support",
        "Custom integrations",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      features: [
        "Unlimited conversations",
        "Full AI capabilities",
        "Custom development",
        "White-label options",
        "Advanced security",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries 24/7 with intelligent responses",
      icon: MessageCircle,
      benefit: "Reduce response time by 90%"
    },
    {
      title: "Sales Support",
      description: "Qualify leads and provide product information automatically",
      icon: Target,
      benefit: "Increase conversion rates by 40%"
    },
    {
      title: "HR Operations",
      description: "Automate recruitment, onboarding, and employee support",
      icon: Users,
      benefit: "Save 30+ hours per week"
    },
    {
      title: "IT Helpdesk",
      description: "Resolve common technical issues without human intervention",
      icon: Cpu,
      benefit: "Reduce ticket volume by 60%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Virtual Assistant - Zion Tech Group"
        description="Transform your business with intelligent AI virtual assistants. Provide 24/7 support, automate customer interactions, and enhance user experience with cutting-edge AI technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Virtual Assistant
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Virtual Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet your new AI team member that works 24/7, never gets tired, and 
              provides exceptional customer experiences. Our intelligent virtual 
              assistants handle everything from customer support to complex business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-400 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by cutting-edge artificial intelligence for natural, intelligent interactions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="text-purple-400 font-semibold text-lg">{feature.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI virtual assistants can revolutionize different aspects of your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-3">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                      {useCase.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Your AI Assistant Can Do
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive capabilities that cover all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-xl border border-purple-500/20 bg-slate-800/30 hover:border-purple-500/40 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to fit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-slate-800 to-slate-700' 
                    : 'border-slate-600 bg-slate-800/50'
                } backdrop-blur-sm`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy Your AI Assistant?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their customer experience with AI virtual assistants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-400 font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}