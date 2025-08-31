import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Truck, 
  TrendingUp, 
  Globe, 
  Calculator, 
  BarChart3, 
  CheckCircle, 
  Brain,
  Search,
  Clock,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  Package,
  Route,
  Warehouse,
  Zap,
  Lock,
  Globe2,
  Award,
  Rocket,
  Briefcase,
  LineChart,
  PieChart,
  AlertTriangle,
  Eye,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Laptop
} from 'lucide-react';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Predict demand with 95% accuracy using machine learning and historical data"
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered route planning reducing delivery costs by 30%"
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description: "Smart inventory optimization reducing stockouts by 80%"
    },
    {
      icon: Globe2,
      title: "Global Visibility",
      description: "Real-time tracking across your entire supply chain network"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "AI-driven risk assessment and mitigation strategies"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive KPIs and performance dashboards"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 SKUs",
        "Basic demand forecasting",
        "Route optimization",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for mid-size companies",
      features: [
        "Up to 1,000 SKUs",
        "Advanced AI analytics",
        "Multi-location support",
        "Priority support",
        "Advanced dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large corporations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction reducing forecast errors by 60%",
      benefits: ["60% accuracy improvement", "Reduced stockouts", "Better planning"]
    },
    {
      title: "Route Optimization",
      description: "Intelligent route planning saving 30% on delivery costs",
      benefits: ["30% cost reduction", "Faster delivery", "Fuel savings"]
    },
    {
      title: "Inventory Optimization",
      description: "Smart inventory management reducing carrying costs by 25%",
      benefits: ["25% cost reduction", "Reduced waste", "Better cash flow"]
    },
    {
      title: "Supplier Management",
      description: "AI-driven supplier performance monitoring and optimization",
      benefits: ["Better relationships", "Cost savings", "Quality improvement"]
    }
  ];

  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: Target },
    { number: "30%", label: "Cost Reduction", icon: TrendingUp },
    { number: "80%", label: "Stockout Reduction", icon: Package },
    { number: "100+", label: "Countries Served", icon: Globe2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>AI Supply Chain Optimization Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize supply chain management with AI-powered optimization. 95% forecast accuracy, 30% cost reduction, and global visibility. Start from $499/month." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, route optimization, inventory management, logistics AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-supply-chain-optimization-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Truck className="w-12 h-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-driven optimization. 95% forecast accuracy, 
              30% cost reduction, and real-time global visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Supply Chain Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with deep supply chain expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI optimization can revolutionize your operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-300" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading companies using AI to transform their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg text-white transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Questions? We're Here to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}