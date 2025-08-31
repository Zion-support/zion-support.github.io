import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  Package, 
  Globe, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Lock,
  BarChart3,
  Search,
  TrendingUp,
  Eye,
  FileText,
  Calendar,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Database,
  Zap,
  Cpu,
  Network,
  Cloud,
  Server,
  Activity,
  PieChart,
  LineChart,
  Gauge,
  AlertCircle,
  TrendingDown,
  Percent,
  Calculator,
  Monitor,
  Smartphone,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train
} from 'lucide-react';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      title: "Real-Time Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with 99.9% accuracy",
      icon: Eye,
      benefits: ["Live tracking of shipments", "Inventory level monitoring", "Supplier performance tracking", "Real-time alerts"]
    },
    {
      title: "AI-Powered Demand Forecasting",
      description: "Advanced ML algorithms predict demand with 96.3% accuracy",
      icon: Brain,
      benefits: ["Seasonal demand patterns", "Market trend analysis", "Inventory optimization", "Production planning"]
    },
    {
      title: "Route Optimization & Logistics",
      description: "Intelligent route planning and logistics optimization",
      icon: Route,
      benefits: ["Multi-modal transportation", "Fuel cost optimization", "Delivery time reduction", "Carbon footprint reduction"]
    },
    {
      title: "Inventory Management",
      description: "Smart inventory control and warehouse optimization",
      icon: Warehouse,
      benefits: ["Just-in-time inventory", "Safety stock optimization", "Warehouse space utilization", "Stock-out prevention"]
    },
    {
      title: "Supplier Risk Management",
      description: "Comprehensive supplier assessment and risk monitoring",
      icon: Shield,
      benefits: ["Supplier performance scoring", "Risk assessment", "Alternative sourcing", "Compliance monitoring"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration with existing ERP and supply chain systems",
      icon: Database,
      benefits: ["ERP integration", "API connectivity", "Data synchronization", "Custom workflows"]
    }
  ];

  const pricingTiers = [
    {
      name: "Small Business",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Supply chain visibility (up to 50 locations)",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Basic security features",
        "Mobile app access",
        "Standard integrations"
      ],
      popular: false,
      savings: null
    },
    {
      name: "Growing Company",
      price: "$899",
      period: "/month",
      description: "Ideal for growing companies and mid-size businesses",
      features: [
        "Everything in Small Business",
        "Supply chain visibility (up to 200 locations)",
        "Advanced demand forecasting",
        "Inventory optimization",
        "Supplier risk management",
        "Priority support",
        "Advanced security",
        "API access",
        "Custom dashboards",
        "Team collaboration (25 users)"
      ],
      popular: true,
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Comprehensive solution for large enterprises",
      features: [
        "Everything in Growing Company",
        "Unlimited locations",
        "Advanced AI models",
        "Custom algorithm development",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom integrations",
        "White-label solutions",
        "Unlimited users",
        "Advanced analytics",
        "Compliance reporting"
      ],
      popular: false,
      savings: "Save 25% annually"
    }
  ];

  const useCases = [
    {
      title: "Manufacturing Optimization",
      description: "Streamline manufacturing processes and reduce production costs",
      icon: Factory,
      benefits: ["Reduce production costs by 30%", "Improve efficiency by 25%", "Reduce waste by 40%", "Optimize production schedules"]
    },
    {
      title: "Retail Supply Chain",
      description: "Optimize retail inventory and improve customer satisfaction",
      icon: Package,
      benefits: ["Reduce stock-outs by 60%", "Improve inventory turnover", "Reduce carrying costs", "Enhance customer experience"]
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize transportation routes and reduce logistics costs",
      icon: Truck,
      benefits: ["Reduce transportation costs by 35%", "Improve delivery times", "Reduce fuel consumption", "Optimize fleet utilization"]
    },
    {
      title: "Global Supply Chain",
      description: "Manage complex global supply chains with real-time visibility",
      icon: Globe,
      benefits: ["Global visibility", "Risk mitigation", "Compliance management", "Cost optimization"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Supply Chain Director",
      company: "Global Manufacturing Corp",
      content: "This platform has transformed our supply chain. We've reduced costs by 30% and improved efficiency significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Operations Manager",
      company: "Retail Chain Inc",
      content: "The AI-powered demand forecasting is incredibly accurate. We've reduced stock-outs by 60% and improved customer satisfaction.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Logistics Director",
      company: "Transport Solutions",
      content: "Route optimization has reduced our transportation costs by 35% and improved delivery times dramatically.",
      rating: 5
    }
  ];

  const benefits = [
    {
      metric: "30%",
      description: "Reduction in supply chain costs",
      icon: TrendingDown
    },
    {
      metric: "60%",
      description: "Reduction in stock-outs",
      icon: TrendingUp
    },
    {
      metric: "96.3%",
      description: "Demand forecasting accuracy",
      icon: Target
    },
    {
      metric: "$3.8M",
      description: "Annual cost savings",
      icon: DollarSign
    }
  ];

  const supplyChainMetrics = [
    {
      name: "Order Fulfillment Rate",
      description: "Percentage of orders delivered on time",
      value: "98.7%",
      trend: "up",
      icon: TrendingUp
    },
    {
      name: "Inventory Turnover",
      description: "How quickly inventory is sold",
      value: "12.3x",
      trend: "up",
      icon: TrendingUp
    },
    {
      name: "Supply Chain Cost",
      description: "Total supply chain cost as % of revenue",
      value: "8.2%",
      trend: "down",
      icon: TrendingDown
    },
    {
      name: "Supplier Performance",
      description: "Average supplier performance score",
      value: "94.5",
      trend: "up",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimization Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization, real-time visibility, and intelligent demand forecasting. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI supply chain optimization, supply chain management, demand forecasting, logistics optimization, inventory management" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-supply-chain-optimization-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Leading Supply Chain Optimization Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Supply Chain
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Optimization Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with cutting-edge AI technology. Optimize operations, 
              reduce costs, and improve efficiency with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Eye className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of supply chain management with AI-powered optimization that reduces costs, 
              improves efficiency, and enhances visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Metrics Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Supply Chain Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor key performance indicators in real-time with our advanced analytics dashboard
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplyChainMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  metric.trend === 'up' ? 'bg-green-500/20 border border-green-500/30' :
                  metric.trend === 'down' ? 'bg-red-500/20 border border-red-500/30' :
                  'bg-blue-500/20 border border-blue-500/30'
                }`}>
                  <metric.icon className={`w-6 h-6 ${
                    metric.trend === 'up' ? 'text-green-400' :
                    metric.trend === 'down' ? 'text-red-400' :
                    'text-blue-400'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supply Chain-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include our core AI features 
              with enterprise-grade security and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                  {tier.savings && (
                    <div className="mt-2">
                      <span className="text-cyan-400 text-sm font-medium">{tier.savings}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading companies are transforming their supply chains 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supply Chain Leaders Trust Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of supply chain professionals who have transformed operations 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of supply chain management. Start your free trial today and experience 
              the power of AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}