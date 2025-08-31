import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Route, 
  Package, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAutonomousLogisticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Route Optimization",
      description: "Advanced machine learning algorithms that optimize delivery routes in real-time, reducing fuel costs and delivery times by up to 30%",
      benefits: ["Dynamic route planning", "Traffic prediction", "Weather-aware routing", "Multi-stop optimization"]
    },
    {
      icon: Truck,
      title: "Autonomous Fleet Management",
      description: "Intelligent fleet coordination with predictive maintenance, driver behavior analysis, and automated dispatching",
      benefits: ["Predictive maintenance", "Driver safety monitoring", "Automated dispatching", "Real-time fleet tracking"]
    },
    {
      icon: Package,
      title: "Smart Inventory Management",
      description: "AI-driven inventory forecasting and warehouse optimization that reduces stockouts and overstock situations",
      benefits: ["Demand forecasting", "Warehouse optimization", "Stock level alerts", "Supplier coordination"]
    },
    {
      icon: Route,
      title: "Real-time Supply Chain Visibility",
      description: "End-to-end visibility across your entire supply chain with predictive analytics and automated alerts",
      benefits: ["Real-time tracking", "Predictive delays", "Automated notifications", "Performance analytics"]
    },
    {
      icon: Globe,
      title: "Global Logistics Network",
      description: "Seamless integration with international shipping partners, customs automation, and multi-currency support",
      benefits: ["International shipping", "Customs automation", "Multi-currency", "Global compliance"]
    },
    {
      icon: Zap,
      title: "Automated Documentation",
      description: "AI-powered document processing for bills of lading, customs forms, and shipping documentation",
      benefits: ["Document automation", "Compliance checking", "Error detection", "Multi-language support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small logistics companies and e-commerce businesses",
      features: [
        "Up to 10 vehicles",
        "Basic route optimization",
        "Real-time tracking",
        "Email support",
        "Standard reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing logistics companies with multiple locations",
      features: [
        "Up to 50 vehicles",
        "Advanced AI optimization",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large logistics enterprises requiring maximum efficiency and customization",
      features: [
        "Unlimited vehicles",
        "Custom AI models",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom development",
        "Advanced analytics",
        "Multi-tenant support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce operational costs by 25-40% through optimized routes and predictive maintenance"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Improve delivery times by 30-50% with AI-powered route optimization"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security features including real-time monitoring and theft prevention"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Easily scale from 10 to 10,000+ vehicles with our cloud-based platform"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Fulfillment",
      description: "Optimize last-mile delivery for online retailers with intelligent routing and real-time customer updates"
    },
    {
      title: "Manufacturing Logistics",
      description: "Streamline supply chain operations with predictive analytics and automated inventory management"
    },
    {
      title: "Food & Beverage Delivery",
      description: "Ensure fresh delivery with temperature monitoring and time-sensitive routing optimization"
    },
    {
      title: "Healthcare Logistics",
      description: "Critical medical supply delivery with priority routing and compliance tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Logistics Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Logistics
              <span className="text-zion-cyan"> Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize your logistics operations with AI-powered route optimization, autonomous fleet management, 
              and intelligent supply chain visibility. Reduce costs by up to 40% while improving delivery efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
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
              Powerful Features for Modern Logistics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with industry expertise to deliver 
              unprecedented efficiency in logistics operations.
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
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your logistics needs. All plans include our core AI features 
              with enterprise-grade security and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
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
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join thousands of logistics companies that have transformed their operations 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-zion-cyan/20 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform is designed to handle the unique challenges of various industries 
              and logistics operations.
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
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
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
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of logistics with AI-powered optimization, real-time visibility, 
              and unprecedented efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}