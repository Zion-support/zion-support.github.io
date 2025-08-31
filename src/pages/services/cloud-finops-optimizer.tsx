import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  DollarSign,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Zap,
  Workflow,
  Eye,
  Code,
  Server,
  Network,
  Activity,
  FileText,
  Search,
  Settings,
  Palette,
  Calendar,
  Clock3,
  UserCheck,
  Presentation,
  Handshake,
  Award,
  Globe,
  Cpu,
  Database,
  Lock,
  AlertTriangle,
  FileCheck,
  Scale,
  Gavel,
  BookOpen,
  Clipboard,
  TrendingUp,
  Users,
  Building,
  Monitor,
  PieChart,
  BarChart,
  LineChart,
  Activity,
  Zap,
  Target,
  Shield,
  Settings,
  Cog,
  Wrench,
  Tool,
  Calculator,
  Receipt,
  CreditCard,
  PiggyBank,
  TrendingDown,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle
} from 'lucide-react';

const CloudFinOpsOptimizer: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Cost Optimization",
      description: "AI-powered cost analysis and optimization recommendations",
      benefits: ["Cost analysis", "Resource optimization", "Waste detection", "Automated scaling"]
    },
    {
      icon: BarChart3,
      title: "FinOps Analytics & Reporting",
      description: "Comprehensive cost visibility and financial operations insights",
      benefits: ["Cost dashboards", "Budget tracking", "Forecasting", "ROI analysis"]
    },
    {
      icon: Workflow,
      title: "Automated Cost Management",
      description: "Intelligent automation for cost control and optimization",
      benefits: ["Auto-scaling", "Resource scheduling", "Cost alerts", "Policy enforcement"]
    },
    {
      icon: Shield,
      title: "Multi-Cloud Management",
      description: "Unified cost management across AWS, Azure, and GCP",
      benefits: ["Multi-cloud visibility", "Cost comparison", "Unified billing", "Resource optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "For small cloud environments",
      features: [
        "Up to $50K monthly spend",
        "Basic cost optimization",
        "Cost dashboards",
        "Email support",
        "Standard reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "For growing organizations",
      features: [
        "Up to $500K monthly spend",
        "Advanced AI optimization",
        "Multi-cloud support",
        "Priority support",
        "Custom dashboards",
        "Advanced analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large cloud deployments",
      features: [
        "Unlimited cloud spend",
        "Full FinOps suite",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "On-premise option",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize cloud costs for seasonal traffic and dynamic scaling",
      icon: ShoppingCart,
      benefits: ["30% cost reduction", "Better performance", "Scalability", "Cost predictability"]
    },
    {
      industry: "SaaS Companies",
      description: "Manage cloud costs for multi-tenant applications and growth",
      icon: Code,
      benefits: ["25% cost savings", "Resource optimization", "Growth planning", "Customer profitability"]
    },
    {
      industry: "Financial Services",
      description: "Ensure cost compliance and optimization for critical applications",
      icon: DollarSign,
      benefits: ["Compliance reporting", "Cost transparency", "Risk management", "Budget control"]
    },
    {
      industry: "Healthcare",
      description: "Optimize cloud costs while maintaining security and compliance",
      icon: Shield,
      benefits: ["HIPAA compliance", "Cost optimization", "Security focus", "Audit trails"]
    }
  ];

  const optimizationAreas = [
    {
      title: "Compute Optimization",
      description: "Right-size instances and optimize compute resources",
      icon: Cpu,
      savings: "25-40%",
      strategies: ["Instance right-sizing", "Auto-scaling", "Spot instances", "Reserved capacity"]
    },
    {
      title: "Storage Optimization",
      description: "Optimize storage costs and data lifecycle management",
      icon: Database,
      savings: "30-50%",
      strategies: ["Data tiering", "Lifecycle policies", "Compression", "Deduplication"]
    },
    {
      title: "Network Optimization",
      description: "Reduce data transfer costs and optimize network usage",
      icon: Network,
      savings: "20-35%",
      strategies: ["CDN optimization", "Data transfer", "Region selection", "Traffic routing"]
    },
    {
      title: "Database Optimization",
      description: "Optimize database costs and performance",
      icon: Server,
      savings: "35-45%",
      strategies: ["Query optimization", "Indexing", "Connection pooling", "Resource scaling"]
    }
  ];

  const keyMetrics = [
    {
      title: "Cost Reduction",
      description: "Average cost savings achieved by our customers",
      icon: TrendingDown,
      metric: "35%",
      improvement: "Average savings"
    },
    {
      title: "ROI",
      description: "Return on investment for FinOps implementation",
      icon: DollarSign,
      metric: "400%",
      improvement: "Average ROI"
    },
    {
      title: "Time to Value",
      description: "Time to achieve first cost savings",
      icon: Clock3,
      metric: "30 days",
      improvement: "Quick results"
    },
    {
      title: "Customer Satisfaction",
      description: "Customer satisfaction with our FinOps platform",
      icon: Star,
      metric: "4.9/5",
      improvement: "Highly rated"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Financial Operations
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud FinOps Optimizer
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your cloud financial operations with our intelligent FinOps platform. 
              Optimize costs, improve visibility, and maximize cloud ROI with AI-powered 
              insights and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">1000+ Cloud Teams</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">$50M+ Cost Savings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven FinOps Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our Cloud FinOps Optimizer delivers measurable improvements across all key 
              financial operations metrics, helping organizations maximize cloud ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {metric.metric}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {metric.title}
                </h3>
                <p className="text-gray-400 mb-2 leading-relaxed">
                  {metric.description}
                </p>
                <div className="text-sm text-green-400 font-medium">
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Cost Optimization
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform optimizes costs across all major cloud service categories, 
              delivering significant savings while maintaining performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                    <div className="text-2xl font-bold text-blue-400">{area.savings}</div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-2">
                  {area.strategies.map((strategy) => (
                    <div key={strategy} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm">{strategy}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful FinOps Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform automates every aspect of cloud financial operations, 
              from cost optimization to budget management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent FinOps Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your cloud spend. All plans include our core 
              FinOps features with enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-slate-700/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our Cloud FinOps Optimizer is designed to work across industries, delivering 
              measurable improvements in cloud cost management and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your Cloud Costs?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of organizations that have already reduced their cloud costs 
                with our FinOps platform. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Missing icon component
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

export default CloudFinOpsOptimizer;