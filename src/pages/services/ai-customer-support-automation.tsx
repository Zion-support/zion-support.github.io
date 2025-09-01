import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Bot, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Calculator,
  PieChart,
  Target,
  Scale,
  Gavel,
  Clipboard,
  BookOpen,
  LineChart,
  Clock,
  Globe,
  Headphones,
  Phone,
  Video,
  TrendingUp,
  BarChart3,
  Heart,
  Monitor,
  Laptop,
  ShoppingBag
} from 'lucide-react';

export default function AICustomerSupportAutomation
export { AICustomerSupportAutomation }() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that understand context and provide accurate responses 24/7"
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Support",
      description: "Seamless support across email, chat, social media, and phone channels"
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced NLP that understands customer intent and provides relevant solutions"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Lightning-fast response times with automated ticket routing and escalation"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR and HIPAA compliance built-in"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into support performance and customer satisfaction"
    }
  ];

  const benefits = [
    "Reduce response time by 90% with instant automated support",
    "Handle 80% of customer inquiries without human intervention",
    "Improve customer satisfaction scores by 40%",
    "Reduce support costs by 60% through automation",
    "Scale support operations without proportional cost increases",
    "Provide 24/7 customer support across all time zones"
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time chat support with instant responses",
      features: ["Instant responses", "Context awareness", "File sharing", "Screen sharing"]
    },
    {
      icon: Phone,
      title: "Voice Support",
      description: "AI-powered voice assistants and call routing",
      features: ["Voice recognition", "Call routing", "Voice analytics", "Call recording"]
    },
    {
      icon: Video,
      title: "Video Support",
      description: "Video chat with AI assistance and screen sharing",
      features: ["Video calls", "Screen sharing", "Recording", "AI assistance"]
    },
    {
      icon: Globe,
      title: "Social Media",
      description: "Multi-platform social media support integration",
      features: ["Multi-platform", "Sentiment analysis", "Auto-responses", "Escalation"]
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      icon: ShoppingBag,
      applications: [
        "Order status inquiries and tracking",
        "Product recommendations and support",
        "Return and refund processing",
        "Payment and billing assistance"
      ]
    },
    {
      industry: "SaaS",
      icon: Cpu,
      applications: [
        "Technical support and troubleshooting",
        "Account management and billing",
        "Feature requests and feedback",
        "Onboarding and training support"
      ]
    },
    {
      industry: "Healthcare",
      icon: Heart,
      applications: [
        "Appointment scheduling and reminders",
        "Medical information and FAQs",
        "Insurance and billing support",
        "Patient portal assistance"
      ]
    },
    {
      industry: "Financial Services",
      icon: Coins,
      applications: [
        "Account balance and transaction inquiries",
        "Fraud detection and security alerts",
        "Loan and credit applications",
        "Investment advice and portfolio management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>AI-Powered Customer Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer support with intelligent automation, 24/7 availability, 
              and personalized assistance that delights your customers and reduces costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered customer support tools designed to enhance 
              customer experience and streamline support operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in customer satisfaction and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Channel Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Provide seamless support across all customer touchpoints with 
              unified AI-powered assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <channel.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
                    <p className="text-gray-400">{channel.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI customer support automation transforms operations across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>

                <ul className="space-y-3">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start leveraging the power of AI customer support automation today and see 
              immediate improvements in customer satisfaction and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}