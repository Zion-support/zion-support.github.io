import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  FileText, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Cpu,
  Network,
  BookOpen,
  GraduationCap,
  Building2,
  Heart,
  Atom,
  Satellite
} from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Research",
      description: "AI-powered research that works 24/7, continuously gathering and analyzing data from multiple sources"
    },
    {
      icon: Search,
      title: "Multi-Source Intelligence",
      description: "Aggregates data from academic papers, industry reports, news sources, and proprietary databases"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Identifies emerging trends and opportunities before they become mainstream"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Enables team collaboration with shared research workspaces and real-time updates"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Generates comprehensive reports and summaries in seconds, not hours"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with encrypted data transmission and secure storage"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Market Research",
      description: "Comprehensive market analysis and competitive intelligence for business strategy"
    },
    {
      icon: GraduationCap,
      title: "Academic Research",
      description: "Literature reviews, citation analysis, and research gap identification"
    },
    {
      icon: Heart,
      title: "Healthcare Research",
      description: "Medical literature analysis, drug discovery research, and clinical trial data"
    },
    {
      icon: DollarSign,
      title: "Financial Research",
      description: "Investment research, economic analysis, and regulatory compliance monitoring"
    },
    {
      icon: Atom,
      title: "Scientific Research",
      description: "Cross-disciplinary research connections and breakthrough identification"
    },
    {
      icon: Satellite,
      title: "Technology Research",
      description: "Emerging tech trends, patent analysis, and innovation tracking"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for individual researchers and small teams",
      features: [
        "Up to 100 research queries/month",
        "Basic AI analysis",
        "Standard report templates",
        "Email support",
        "Basic integrations"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for research teams and growing organizations",
      features: [
        "Up to 500 research queries/month",
        "Advanced AI analysis",
        "Custom report templates",
        "Priority support",
        "Advanced integrations",
        "Team collaboration tools",
        "API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations with complex research needs",
      features: [
        "Unlimited research queries",
        "Custom AI models",
        "White-label reports",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Compliance features",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "10x Faster Research",
      description: "Complete research projects in hours instead of weeks"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Save up to 70% on research costs compared to traditional methods"
    },
    {
      icon: Target,
      title: "Higher Accuracy",
      description: "AI-powered analysis reduces human bias and improves accuracy"
    },
    {
      icon: Rocket,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with real-time insights and trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Research Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous Research
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Assistant</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your research capabilities with AI that works autonomously 24/7. 
              Discover insights faster, analyze data smarter, and stay ahead of the competition 
              with our intelligent research platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant combines cutting-edge technology with intuitive design 
              to deliver unprecedented research efficiency and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to finance, our AI research assistant transforms how organizations 
              gather, analyze, and act on information across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your research needs and scale as you grow. 
              All plans include our core AI research capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of research with AI-powered insights that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of researchers and organizations who are already using our AI platform 
              to accelerate their discoveries and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}