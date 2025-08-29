import React from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Brain, 
  Truck, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Calendar,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  BookOpen,
  MessageSquare,
  Share2,
  Analytics,
  Palette,
  Clock,
=======
  Network, 
  Brain, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Settings,
  Users,
  MessageCircle,
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
  DollarSign,
  FileText,
  Heart,
  Cloud,
  Cpu,
  Lock,
  Atom,
  Leaf,
  Satellite,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  Globe,
  Truck,
  Package,
  Route,
<<<<<<< HEAD
  Warehouse,
  Factory,
  Ship,
  Plane,
  Car,
  Train
=======
  MapPin,
  Clock,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Database,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Smartphone as PhoneIcon,
  Mail,
  Phone
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
<<<<<<< HEAD
    "AI-powered demand forecasting and planning",
    "Real-time inventory optimization and management",
    "Intelligent route optimization and logistics",
    "Supplier performance monitoring and analytics",
    "Risk assessment and mitigation strategies",
    "Cost optimization and budget management",
    "Multi-warehouse network optimization",
    "Real-time tracking and visibility",
    "Automated reorder point calculations",
    "Supply chain disruption prediction",
    "Sustainability and carbon footprint tracking",
    "Compliance and regulatory monitoring"
  ];

  const benefits = [
    "Reduce inventory costs by 25-40%",
    "Improve delivery times by 30-50%",
    "Increase supply chain efficiency by 35%",
    "Reduce stockouts by 60%",
    "Lower transportation costs by 20-30%"
  ];

  const useCases = [
    "E-commerce fulfillment",
    "Manufacturing supply chains",
    "Retail inventory management",
    "Healthcare supply chains",
    "Food and beverage distribution",
    "Automotive parts management",
    "Pharmaceutical logistics",
    "Cold chain management"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain needs",
      features: [
        "AI demand forecasting (up to 100 SKUs)",
        "Basic inventory optimization",
        "Route optimization (up to 50 routes/day)",
        "Basic analytics dashboard",
        "Email support",
        "API access (1,000 calls/month)"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses with complex supply chains",
      features: [
        "AI demand forecasting (up to 1,000 SKUs)",
        "Advanced inventory optimization",
        "Route optimization (unlimited routes)",
        "Supplier performance monitoring",
        "Risk assessment tools",
        "Advanced analytics and reporting",
        "Priority support",
        "API access (10,000 calls/month)",
        "Custom integrations (up to 5)",
        "Training and onboarding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large enterprises with complex global supply chains",
      features: [
        "Unlimited AI demand forecasting",
        "Multi-warehouse optimization",
        "Global route optimization",
        "Advanced risk management",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "Unlimited API access",
        "Custom integrations",
        "On-site training and implementation",
        "SLA guarantees",
        "Custom reporting and dashboards"
      ],
      cta: "Contact Sales",
      popular: false
=======
    {
      title: 'AI-Powered Demand Forecasting',
      description: 'Predict customer demand with 95% accuracy using advanced machine learning algorithms.',
      icon: Brain,
      benefits: ['Reduce stockouts by 60%', 'Optimize inventory levels', 'Improve cash flow', 'Enhance customer satisfaction']
    },
    {
      title: 'Real-Time Supply Chain Visibility',
      description: 'Track every component from supplier to customer with end-to-end transparency.',
      icon: Network,
      benefits: ['Real-time tracking', 'Proactive issue detection', 'Improved collaboration', 'Risk mitigation']
    },
    {
      title: 'Intelligent Route Optimization',
      description: 'Optimize delivery routes using AI to reduce costs and improve delivery times.',
      icon: Route,
      benefits: ['Reduce fuel costs by 25%', 'Faster delivery times', 'Lower carbon footprint', 'Better resource utilization']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures before they happen with AI-driven predictive analytics.',
      icon: Activity,
      benefits: ['Reduce downtime by 40%', 'Lower maintenance costs', 'Extend equipment life', 'Improve safety']
    },
    {
      title: 'Supplier Performance Analytics',
      description: 'Monitor and optimize supplier relationships with comprehensive performance metrics.',
      icon: BarChart3,
      benefits: ['Better supplier selection', 'Improved quality control', 'Cost optimization', 'Risk reduction']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Automatically adjust inventory levels based on demand patterns and lead times.',
      icon: Package,
      benefits: ['Optimal stock levels', 'Reduced carrying costs', 'Improved turnover', 'Better space utilization']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 30% through intelligent optimization.',
      icon: DollarSign,
      metric: '30%',
      metricLabel: 'Cost Savings'
    },
    {
      title: 'Efficiency Improvement',
      description: 'Increase operational efficiency by 40% with AI-powered automation.',
      icon: TrendingUp,
      metric: '40%',
      metricLabel: 'Efficiency Gain'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction scores by 50% with better delivery performance.',
      icon: Star,
      metric: '50%',
      metricLabel: 'Satisfaction Boost'
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce supply chain risks by 70% with predictive analytics.',
      icon: Shield,
      metric: '70%',
      metricLabel: 'Risk Reduction'
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
    }
  ];

  const industries = [
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Automotive',
    'Food & Beverage',
    'Pharmaceuticals',
    'Electronics',
    'Logistics'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze current supply chain operations and identify optimization opportunities.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop comprehensive AI implementation roadmap tailored to your business needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with expert guidance and continuous monitoring.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and scale AI capabilities for maximum impact.',
      icon: TrendingUp
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization solutions. Reduce costs, improve efficiency, and enhance visibility across your entire network."
        keywords="AI supply chain, supply chain optimization, inventory management, logistics optimization, demand forecasting, supply chain AI"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain operations with cutting-edge AI technology. 
              Optimize inventory, streamline logistics, and reduce costs while improving 
              customer satisfaction and operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                25-40% Cost Reduction
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                30-50% Faster Delivery
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                35% Efficiency Increase
              </span>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive supply chain optimization 
              capabilities designed to transform your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable improvements across all aspects 
              of your supply chain operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl font-semibold text-white">{benefit}</p>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain optimization solutions are designed to work across 
              diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 font-medium">{useCase}</p>
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
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
=======
    <>
      <SEO
        title="AI Supply Chain Optimization | Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization solutions. Reduce costs, improve efficiency, and enhance customer satisfaction."
        keywords="AI supply chain, supply chain optimization, AI logistics, predictive analytics, inventory management, Zion Tech Group"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your supply chain operations with cutting-edge AI solutions that deliver unprecedented 
                efficiency, cost savings, and customer satisfaction. Our intelligent optimization platform 
                revolutionizes how you manage inventory, forecast demand, and coordinate logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Start Optimization
                </a>
                <a 
                  href="/solutions" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have already transformed their supply chain operations with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Need help choosing the right plan? Contact our sales team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <span>📞 +1 302 464 0950</span>
            <span>📧 kleber@ziontechgroup.com</span>
            <span>🌐 https://ziontechgroup.com</span>
=======
        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our comprehensive AI supply chain optimization platform includes advanced features designed 
                to transform every aspect of your operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Measurable Results
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI supply chain optimization delivers quantifiable improvements that directly impact 
                your bottom line and operational excellence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{benefit.metric}</div>
                  <div className="text-slate-400 text-sm">{benefit.metricLabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI supply chain optimization solutions are tailored for diverse industries, 
                each with unique challenges and requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-cyan-400 font-semibold">{industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful AI implementation and maximum ROI from your 
                supply chain optimization investment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Let our AI experts transform your supply chain operations with intelligent optimization 
                solutions that deliver measurable results. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="/solutions" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default AISupplyChainOptimization;
=======
}
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
