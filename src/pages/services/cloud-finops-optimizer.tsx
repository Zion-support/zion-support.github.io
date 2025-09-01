import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Brain, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
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
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageSquare,
  BarChart,
  Users2,
  Settings,
  Palette,
  Calculator,
  PieChart,
  Target,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  Monitor,
  Gauge,
  TrendingUp
} from 'lucide-react';

export default function CloudFinOpsOptimizer() {
  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Cost Analytics & Reporting",
      description: "Real-time cost tracking and detailed financial reporting across all cloud services and resources."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Automated Cost Optimization",
      description: "AI-powered recommendations to reduce cloud spending while maintaining performance and reliability."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Resource Utilization Insights",
      description: "Deep visibility into resource usage patterns to identify waste and optimization opportunities."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Budget Management",
      description: "Set and enforce budgets with automated alerts and cost control mechanisms."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Track cost-performance metrics to ensure optimal resource allocation and efficiency."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Optimization",
      description: "Optimize costs across AWS, Azure, Google Cloud, and other cloud providers."
    }
  ];

  const benefits = [
    "Reduce cloud costs by 30-50%",
    "Improve resource utilization by 40%",
    "Eliminate wasted cloud spending",
    "Automate cost optimization processes",
    "Provide real-time cost visibility",
    "Enable data-driven cloud decisions"
  ];

  const useCases = [
    {
      industry: "Enterprise",
      description: "Large-scale cloud cost management and optimization for enterprise organizations"
    },
    {
      industry: "Startups",
      description: "Cost-effective cloud scaling and resource optimization for growing companies"
    },
    {
      industry: "E-commerce",
      description: "Dynamic resource scaling and cost optimization for seasonal traffic patterns"
    },
    {
      industry: "SaaS Companies",
      description: "Multi-tenant cost allocation and optimization for SaaS platforms"
    }
  ];

  const optimizationStrategies = [
    "Right-sizing instances and resources",
    "Reserved instance and spot instance optimization",
    "Storage lifecycle management",
    "Network cost optimization",
    "Container and serverless cost management",
    "Cross-region cost optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded-full mb-6">
              <Cloud className="w-5 h-5" />
              <span className="text-sm font-medium">Cloud Cost Optimization</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud FinOps Optimizer
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your cloud financial operations with intelligent cost optimization, 
              automated resource management, and comprehensive financial visibility across all cloud platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive FinOps Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our Cloud FinOps Optimizer provides everything you need to master cloud financial operations 
              and maximize your cloud investment returns.
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
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Cloud FinOps Optimizer?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience unprecedented control over your cloud costs with our intelligent 
              optimization platform and expert FinOps practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-4">
                    <h4 className="font-semibold text-zion-cyan mb-2">{useCase.industry}</h4>
                    <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Optimization Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Optimization Strategies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform implements industry-leading FinOps practices to maximize your cloud cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-zion-slate-light font-medium">{strategy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of organizations who have already transformed their cloud financial 
              operations and achieved significant cost savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}