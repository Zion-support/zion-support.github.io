import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Workflow, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  TrendingUp,
  Target,
  Rocket,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIBusinessProcessAutomationPlatform() {
  const features = [
    "Intelligent Workflow Design & Orchestration",
    "AI-Powered Decision Making & Routing",
    "Real-time Process Monitoring & Analytics",
    "Automated Document Processing & Extraction",
    "Smart Form Generation & Validation",
    "Multi-department Process Coordination",
    "Compliance & Audit Trail Management",
    "Integration with 100+ Business Systems",
    "Mobile-First Process Execution",
    "Predictive Process Optimization"
  ];

  const benefits = [
    "Reduce manual processing time by 85%",
    "Increase process accuracy to 99.5%",
    "Cut operational costs by 60%",
    "Improve employee productivity by 75%",
    "Accelerate decision-making by 90%",
    "Ensure 100% compliance adherence"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams and basic automation needs",
      features: [
        "Up to 10 automated workflows",
        "Basic AI decision making",
        "Standard integrations",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex processes",
      features: [
        "Up to 50 automated workflows",
        "Advanced AI decision making",
        "100+ system integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom workflow templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with enterprise-scale automation",
      features: [
        "Unlimited automated workflows",
        "Custom AI model training",
        "Unlimited integrations",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security features",
        "Multi-tenant architecture"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "HR Onboarding Automation",
      description: "Streamline employee onboarding with automated document processing, task assignments, and compliance checks",
      icon: Users,
      savings: "Save 15 hours per new hire"
    },
    {
      title: "Invoice Processing",
      description: "Automate invoice capture, approval workflows, and payment processing with AI-powered validation",
      icon: DollarSign,
      savings: "Reduce processing time by 80%"
    },
    {
      title: "Customer Service Routing",
      description: "Intelligently route customer inquiries to the right agents based on complexity and expertise",
      icon: Monitor,
      savings: "Improve response time by 70%"
    },
    {
      title: "Sales Process Management",
      description: "Automate lead scoring, follow-up scheduling, and opportunity tracking",
      icon: Target,
      savings: "Increase conversion rates by 40%"
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Automated', icon: Users },
    { number: '10,000+', label: 'Workflows Created', icon: Workflow },
    { number: '99.5%', label: 'Process Accuracy', icon: CheckCircle },
    { number: '85%', label: 'Time Savings', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Process Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business operations with our AI-powered process automation platform. Reduce costs by 60%, improve accuracy to 99.5%, and accelerate decision-making by 90%." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, process optimization, AI decision making" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-business-process-automation-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2 text-blue-400" />
                AI-Powered Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Business Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automation Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionize your business operations with intelligent automation that learns, adapts, and optimizes 
                your processes in real-time. Achieve unprecedented efficiency and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate, optimize, and transform your business processes with AI intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the real impact of AI-powered automation on your business performance and bottom line.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how leading companies are transforming their operations with our AI automation platform.
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
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    {useCase.savings}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business automation needs. Start free, scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20 scale-105' 
                      : 'border-white/10 hover:border-blue-400/50'
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
                    <div className="text-4xl font-bold text-cyan-400 mb-1">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of companies that have transformed their operations with AI-powered automation. 
                Start your free trial today and see the results in just 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Need Help Getting Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our automation experts are here to help you design and implement the perfect automation strategy for your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="inline-flex items-center px-6 py-3 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}