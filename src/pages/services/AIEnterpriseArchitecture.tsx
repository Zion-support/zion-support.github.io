import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Building, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart3,
  Workflow,
  Bot,
  Sparkles
} from 'lucide-react';

export default function AIEnterpriseArchitecture() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Engine",
      description: "Real-time decision making using advanced machine learning algorithms and predictive analytics"
    },
    {
      icon: Building,
      title: "Enterprise Integration Hub",
      description: "Seamless integration with existing ERP, CRM, and legacy systems"
    },
    {
      icon: Zap,
      title: "Intelligent Process Automation",
      description: "End-to-end automation of complex business processes with AI oversight"
    },
    {
      icon: Shield,
      title: "Advanced Security Framework",
      description: "Multi-layered security with AI threat detection and response"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of system performance and resource utilization"
    },
    {
      icon: Users,
      title: "Collaborative AI Workspace",
      description: "Team-based AI development and deployment platform"
    }
  ];

  const benefits = [
    "50% reduction in decision-making time",
    "40% improvement in operational efficiency",
    "Real-time business intelligence insights",
    "Scalable architecture for enterprise growth",
    "Reduced IT infrastructure costs",
    "Enhanced security and compliance"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$15,000",
      period: "/month",
      description: "Perfect for mid-size enterprises",
      features: [
        "AI Decision Engine",
        "Basic Integration Hub",
        "Standard Security",
        "Email Support",
        "Monthly Reports"
      ]
    },
    {
      name: "Professional",
      price: "$35,000",
      period: "/month",
      description: "Ideal for large enterprises",
      features: [
        "Advanced AI Decision Engine",
        "Full Integration Hub",
        "Advanced Security Framework",
        "Priority Support",
        "Real-time Analytics",
        "Custom Workflows"
      ]
    },
    {
      name: "Enterprise",
      price: "$75,000",
      period: "/month",
      description: "For Fortune 500 companies",
      features: [
        "Custom AI Architecture",
        "Full Enterprise Integration",
        "Military-grade Security",
        "24/7 Dedicated Support",
        "Custom AI Models",
        "On-premise Deployment"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "AI-powered risk assessment, fraud detection, and automated trading systems",
      benefits: ["Real-time risk monitoring", "Fraud prevention", "Automated compliance"]
    },
    {
      industry: "Healthcare",
      description: "Patient data analysis, treatment optimization, and predictive diagnostics",
      benefits: ["Improved patient outcomes", "Cost reduction", "Predictive healthcare"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      benefits: ["Reduced downtime", "Quality improvement", "Cost optimization"]
    },
    {
      industry: "Retail",
      description: "Customer behavior analysis, inventory optimization, and personalized marketing",
      benefits: ["Increased sales", "Better inventory management", "Customer satisfaction"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Enterprise Architecture - Zion Tech Group"
        description="Transform your enterprise with AI-powered architecture solutions. Scalable, secure, and intelligent business systems."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
              <Brain className="w-4 h-4 mr-2" />
              AI Enterprise Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Enterprise Architecture
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with intelligent, scalable, and secure AI-powered architecture solutions. 
              Build the future of business technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
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
              Powerful Features for Enterprise Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Enterprise Architecture provides everything you need to build intelligent, 
              scalable, and secure business systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, decision-making, and business outcomes.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Enterprise Architecture is designed to meet the unique needs of various industries.
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
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your enterprise needs and scale as you grow.
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
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600 text-white text-sm font-medium mb-4">
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
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join leading enterprises that have already transformed their business with our AI architecture solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services-overview"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
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