import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Globe, 
  TrendingUp, 
  Users, 
  Database, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Lock,
  Search,
  Calendar,
  MessageSquare,
  Bell,
  Phone,
  Mail,
  MapPin,
  Scale,
  AlertTriangle,
  BookOpen,
  CreditCard,
  Building,
  Eye,
  Clock,
  Award,
  Gauge,
  PieChart,
  Route,
  Package,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  ShoppingCart,
  Heart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISupplyChainOptimization() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Truck,
      title: 'AI-Powered Route Optimization',
      description: 'Intelligent route planning that reduces delivery times by 30% and fuel costs by 25%'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'Real-time tracking across all suppliers, warehouses, and distribution centers worldwide'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Demand Forecasting',
      description: 'Advanced AI algorithms predict demand patterns with 95% accuracy up to 12 months ahead'
    },
    {
      icon: Users,
      title: 'Supplier Performance Analytics',
      description: 'Comprehensive supplier scoring and performance monitoring with automated alerts'
    },
    {
      icon: Database,
      title: 'Inventory Optimization',
      description: 'AI-driven inventory management that reduces stockouts by 80% and excess inventory by 60%'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics Dashboard',
      description: 'Live insights into supply chain performance, costs, and efficiency metrics'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by 25-40%',
    'Improve delivery performance by 35%',
    'Cut inventory carrying costs by 30%',
    'Enhance supplier collaboration by 50%',
    'Reduce lead times by 20-30%',
    'Increase customer satisfaction by 45%'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 locations',
        'Basic route optimization',
        'Standard analytics',
        'Email support',
        'Basic reporting',
        'Up to 10 user licenses',
        'Core integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,599',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: [
        'Up to 25 locations',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom reporting',
        'Up to 50 user licenses',
        'Advanced integrations',
        'API access',
        'Custom workflows',
        'Advanced AI models'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'For large enterprises with complex supply chains',
      features: [
        'Unlimited locations',
        'Premium AI optimization',
        '24/7 dedicated support',
        'Custom dashboards',
        'Unlimited user licenses',
        'Enterprise integrations',
        'Advanced AI models',
        'On-premise deployment option',
        'Dedicated supply chain consultant',
        'Custom training programs',
        'White-label solutions',
        'Multi-tenant architecture'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const optimizationAreas = [
    {
      title: 'Transportation',
      description: 'Optimize routes, modes, and carriers for maximum efficiency',
      icon: Route
    },
    {
      title: 'Warehousing',
      description: 'Smart warehouse layout and inventory placement optimization',
      icon: Warehouse
    },
    {
      title: 'Manufacturing',
      description: 'Production planning and capacity optimization',
      icon: Factory
    },
    {
      title: 'Procurement',
      description: 'Supplier selection and procurement strategy optimization',
      icon: Package
    },
    {
      title: 'Logistics',
      description: 'End-to-end logistics network optimization',
      icon: Ship
    },
    {
      title: 'Last Mile',
      description: 'Final delivery optimization and customer experience enhancement',
      icon: Truck
    }
  ];

  const useCases = [
    {
      title: 'E-commerce & Retail',
      description: 'Optimize fulfillment networks and last-mile delivery for online retailers',
      icon: ShoppingCart
    },
    {
      title: 'Manufacturing',
      description: 'Streamline production planning and supplier management for manufacturers',
      icon: Factory
    },
    {
      title: 'Healthcare & Pharma',
      description: 'Ensure critical supplies reach healthcare facilities on time',
      icon: Heart
    },
    {
      title: 'Food & Beverage',
      description: 'Optimize cold chain logistics and perishable goods management',
      icon: Package
    }
  ];

  const industries = [
    'E-commerce & Retail',
    'Manufacturing',
    'Healthcare & Pharmaceuticals',
    'Food & Beverage',
    'Automotive',
    'Electronics',
    'Fashion & Apparel',
    'Logistics & Transportation',
    'Construction',
    'Energy & Utilities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization Platform | Zion Tech Group"
        description="Revolutionize your supply chain with AI-powered optimization. Reduce costs by 25-40%, improve delivery performance, and gain real-time visibility across your entire network."
        keywords="AI supply chain optimization, supply chain management, logistics optimization, inventory optimization, demand forecasting, supplier management"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/10 border border-green-200/20 text-green-200 text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Optimization
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Optimization
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization. Reduce costs by 25-40%, improve delivery performance by 35%, 
              and gain real-time visibility across your entire network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-200/20 text-green-200 font-semibold rounded-lg hover:bg-green-200/10 transition-all duration-300">
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
              Comprehensive Supply Chain Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to optimize your supply chain from end to end
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              End-to-End Optimization
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Optimize every aspect of your supply chain for maximum efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-slate-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose AI Supply Chain Optimization?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your supply chain and unlock new levels of efficiency and cost savings
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{benefit}</span>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From retail to manufacturing, our platform adapts to your specific industry needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Trusted Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform serves businesses across all major industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <span className="text-slate-300 font-medium">{industry}</span>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your organization size and supply chain complexity
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-gradient-to-br from-green-900/20 to-emerald-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of companies who have already transformed their supply chains with AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-200/20 text-green-200 font-semibold rounded-lg hover:bg-green-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-slate-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our supply chain experts are here to help you get started and answer any questions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}