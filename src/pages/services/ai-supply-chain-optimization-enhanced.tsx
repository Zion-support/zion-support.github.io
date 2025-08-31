import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  BarChart3,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Lightbulb,
  Activity,
  Workflow,
  Eye,
  Search,
  Settings,
  Palette,
  Users2,
  Cog,
  ShoppingCart,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  FileText,
  Briefcase,
  Globe,
  Building,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Motorcycle,
  Bus,
  Truck as TruckIcon,
  Ship as ShipIcon,
  Plane as PlaneIcon,
  Train as TrainIcon,
  Car as CarIcon,
  Bike as BikeIcon,
  Motorcycle as MotorcycleIcon,
  Bus as BusIcon,
  Package as PackageIcon,
  Route as RouteIcon,
  Warehouse as WarehouseIcon,
  Factory as FactoryIcon
} from 'lucide-react';

const AISupplyChainOptimizationEnhanced: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Demand Forecasting",
      description: "Predict demand patterns with 95% accuracy using machine learning algorithms"
    },
    {
      icon: Route,
      title: "Intelligent Route Optimization",
      description: "Optimize delivery routes reducing costs by up to 30% and improving delivery times"
    },
    {
      icon: Warehouse,
      title: "Smart Inventory Management",
      description: "Automated inventory tracking with real-time alerts and predictive restocking"
    },
    {
      icon: Truck,
      title: "Fleet Management & Tracking",
      description: "Real-time GPS tracking, fuel optimization, and maintenance scheduling"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into supply chain performance and optimization opportunities"
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Identify and mitigate supply chain risks with AI-powered threat detection"
    }
  ];

  const benefits = [
    "Reduce supply chain costs by 25-40%",
    "Improve delivery accuracy by 95%",
    "Reduce inventory carrying costs by 30%",
    "Increase supplier performance by 45%",
    "Reduce lead times by 35%",
    "Improve customer satisfaction by 60%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their supply chain optimization journey",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Route optimization",
        "Inventory tracking",
        "Email support",
        "Standard reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses with complex supply chain operations",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI forecasting",
        "Multi-modal optimization",
        "Real-time tracking",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations with global supply chain operations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "Global optimization",
        "White-label solution",
        "Dedicated account manager",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce & Retail",
      description: "Optimize inventory, reduce shipping costs, and improve delivery times",
      icon: ShoppingCart
    },
    {
      title: "Manufacturing",
      description: "Streamline production planning, reduce lead times, and optimize supplier networks",
      icon: Factory
    },
    {
      title: "Logistics & Transportation",
      description: "Optimize routes, reduce fuel costs, and improve fleet utilization",
      icon: Truck
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Ensure critical supplies availability and optimize distribution networks",
      icon: Shield
    }
  ];

  const industries = [
    {
      title: "Automotive",
      icon: Car,
      description: "Just-in-time manufacturing and global parts distribution"
    },
    {
      title: "Food & Beverage",
      icon: Package,
      description: "Cold chain optimization and perishable goods management"
    },
    {
      title: "Electronics",
      icon: Cog,
      description: "Component sourcing and global supply chain coordination"
    },
    {
      title: "Fashion & Apparel",
      icon: Palette,
      description: "Seasonal demand planning and fast fashion logistics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-zion-cyan"> Optimization</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered optimization, predictive analytics, 
              and intelligent automation that reduces costs, improves efficiency, and enhances customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
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
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to optimize your supply chain operations
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
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
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
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See the measurable impact of AI-powered supply chain optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                </div>
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored optimization strategies for your industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your supply chain needs
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
                className={`relative bg-zion-blue-dark/50 border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-zion-cyan text-slate-900 hover:bg-zion-cyan-light'
                      : 'bg-zion-purple text-white hover:bg-zion-purple-light'
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
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI supply chain optimization works across all business sizes and types
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
                <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
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
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of companies using AI to transform their supply chain operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-white text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizationEnhanced;