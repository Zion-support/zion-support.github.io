import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Settings, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Database,
  Network,
  TrendingUp,
  AlertTriangle,
  Activity,
  Factory,
  Gauge,
  Wrench,
  BarChart3,
  Target,
  Cog,
  Monitor
} from 'lucide-react';

const AIAutonomousManufacturingOptimizationPlatform: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Production Optimization",
      description: "Advanced machine learning algorithms that optimize production processes in real-time",
      icon: Brain,
      benefits: ["25% increase in production efficiency", "Real-time process optimization", "Predictive maintenance scheduling"]
    },
    {
      title: "Autonomous Quality Control",
      description: "Computer vision and AI for automated quality inspection with 99.8% accuracy",
      icon: Eye,
      benefits: ["99.8% defect detection accuracy", "24/7 quality monitoring", "Automated quality reporting"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-driven predictive maintenance that prevents equipment failures and reduces downtime",
      icon: Wrench,
      benefits: ["90% reduction in unplanned downtime", "Predictive maintenance alerts", "Equipment lifecycle optimization"]
    },
    {
      title: "Supply Chain Integration",
      description: "Seamless integration with suppliers and logistics for optimal material flow",
      icon: Network,
      benefits: ["Real-time inventory tracking", "Automated reorder management", "Supplier performance analytics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Small Factory",
      price: "$499",
      period: "/month",
      description: "Perfect for small manufacturing facilities",
      features: [
        "Basic production optimization",
        "Quality control monitoring",
        "Maintenance scheduling",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Medium Factory",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing manufacturing companies",
      features: [
        "Advanced AI algorithms",
        "Real-time optimization",
        "Custom dashboards",
        "Priority support",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Large Factory",
      price: "$4,999",
      period: "/month",
      description: "For large manufacturing corporations",
      features: [
        "Full autonomous operations",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Automotive Manufacturing",
      description: "Optimize production lines and quality control for automotive components",
      icon: Car
    },
    {
      title: "Electronics Manufacturing",
      description: "Streamline PCB assembly and electronic device production",
      icon: Cpu
    },
    {
      title: "Food & Beverage",
      description: "Optimize food processing and packaging operations",
      icon: Package
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "Ensure quality and compliance in drug manufacturing",
      icon: Pill
    }
  ];

  const benefits = [
    {
      metric: "25%",
      description: "Efficiency Gain",
      detail: "Average increase in production efficiency"
    },
    {
      metric: "99.8%",
      description: "Quality Rate",
      detail: "Defect detection accuracy rate"
    },
    {
      metric: "90%",
      description: "Downtime Reduction",
      detail: "Reduction in unplanned equipment downtime"
    },
    {
      metric: "30%",
      description: "Cost Reduction",
      detail: "Average reduction in manufacturing costs"
    }
  ];

  const manufacturingProcesses = [
    "Production Planning",
    "Quality Control",
    "Inventory Management",
    "Maintenance Scheduling",
    "Supply Chain Management",
    "Performance Analytics",
    "Predictive Analytics",
    "Process Optimization"
  ];

  const industryStandards = [
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "Six Sigma",
    "Lean Manufacturing",
    "Industry 4.0",
    "Smart Factory",
    "Digital Twin"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEO 
        title="AI Autonomous Manufacturing Optimization Platform - Zion Tech Group"
        description="Revolutionary AI-powered manufacturing platform that autonomously optimizes production processes, quality control, and predictive maintenance for maximum efficiency."
        keywords="AI manufacturing, production optimization, quality control, predictive maintenance, smart factory, Industry 4.0"
        canonical="https://ziontechgroup.com/services/ai-autonomous-manufacturing-optimization-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                <Factory className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Manufacturing Optimization Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your manufacturing operations with the world's most advanced AI platform for autonomous production optimization, quality control, and predictive maintenance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform delivers measurable improvements across all manufacturing operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <div className="text-xl font-semibold text-white mb-2">{benefit.description}</div>
                <div className="text-slate-300">{benefit.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future of manufacturing with cutting-edge AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Manufacturing Processes Optimized
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform covers all aspects of modern manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {manufacturingProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="text-lg font-semibold text-white">{process}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Standards & Compliance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet international manufacturing standards and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <div className="text-lg font-semibold text-white">{standard}</div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your manufacturing facility's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how leading manufacturers are leveraging our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join the future of manufacturing with our AI Autonomous Optimization Platform. 
              Get in touch today to schedule a personalized demo and see how we can improve your production efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
            
            <div className="mt-8 text-slate-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousManufacturingOptimizationPlatform;