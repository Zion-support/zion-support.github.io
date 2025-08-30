<<<<<<< HEAD
import React from 'react.ts';
import { SEO  } from "../../components/SEO";
import { motion  } from 'framer-motion.ts';
import { Truck, 
  Brain, 
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "../../components/SEO";
import { 
  Truck, 
  TrendingUp, 
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Zap,
  Target,
  Cpu,
  Package,
  Route,
  Warehouse,
  Route,
  Clock,
  DollarSign,
  Globe2,
  MapPin,
  Activity,
  Gauge,
  Shield,
  RefreshCw
 } from 'lucide-react';

export default function AISupplyChainOptimization(...args[]):  {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predictive analytics for accurate demand forecasting and inventory optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Intelligent route planning and logistics optimization for cost reduction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Smart inventory tracking and automated reorder point management',
      color: 'from-purple-500 to-pink-500'
    },
    {
<<<<<<< HEAD
=======
      icon: Target,
      title: "Supplier Performance Analytics",
      description: "Monitor supplier performance, quality metrics, and delivery reliability with predictive insights."
    },
    {
      icon: PieChart,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities across transportation, warehousing, and procurement."
    },;
    {;
      icon: Activity,;
      title: "Real-time Visibility",;
      description: "End-to-end supply chain visibility with real-time tracking and predictive analytics.";
    };
  ];

  const benefits = [
    {
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Live supply chain visibility and proactive issue detection',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk assessment and mitigation strategies',
      color: 'from-red-500 to-pink-500'
    },
    {
<<<<<<< HEAD
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive KPIs and supply chain performance insights',
      color: 'from-indigo-500 to-purple-500'
    }
=======
      icon: Globe,
      title: "Global Optimization",
      description: "Manage complex global supply chains with multi-location optimization and risk mitigation."
    },
    {
      icon: Lock,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with predictive analytics and contingency planning."
    },
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Improve customer satisfaction and increase sales through better inventory availability and faster delivery."
    },;
    {;
      icon: Clock,;
      title: "Time Savings",;
      description: "Automate routine supply chain tasks and focus on strategic decision-making.";
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const services = [
    {
      title: 'Supply Chain Assessment',
      description: 'Comprehensive analysis of current supply chain operations and optimization opportunities',
      price: 'From $5,500',
      features['Process mapping', 'Bottleneck identification', 'Cost analysis', 'Optimization roadmap']
    },
    {
      title: 'AI Platform Implementation',
      description: 'Full implementation of AI-powered supply chain optimization platform',
      price: 'From $15,000',
      features['Platform setup', 'AI model training', 'Integration configuration', 'Team training']
    },
    {
<<<<<<< HEAD
      title: 'Ongoing Optimization',
      description: 'Continuous improvement and optimization of supply chain operations',
      price: 'From $4,500/month',
      features['Performance monitoring', 'AI model updates', 'Process optimization', 'Analytics reports']
    },
    {
      title: 'Enterprise Supply Chain Suite',
      description: 'Complete enterprise supply chain management with advanced AI capabilities',
      price: 'From $25,000',
      features['Multi-location management', 'Advanced AI models', 'Custom integrations', '24/7 support']
    }
=======
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade supply chain solutions",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting",
        "On-premise deployment",
        "SLA guarantees",;
        "24/7 support";
      ],;
      cta: "Contact Sales",;
      popular: false;
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const useCases = [
    {
      title: 'Manufacturing Optimization',
      description: 'Streamline production processes and reduce lead times',
      benefits['Reduce lead times by 40%', 'Improve production efficiency', 'Lower operational costs']
    },
    {
      title: 'Retail Inventory Management',
      description: 'Optimize stock levels and reduce inventory carrying costs',
      benefits['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow']
    },
    {
      title: 'Logistics Optimization',
      description: 'Optimize transportation routes and reduce delivery costs',
      benefits['Reduce transportation costs by 30%', 'Improve delivery times', 'Enhance customer satisfaction']
    },
    {
      title: 'Supplier Management',
      description: 'Intelligent supplier selection and performance monitoring',
      benefits['Improve supplier performance', 'Reduce supply chain risks', 'Optimize procurement costs']
    };
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for demand forecasting and optimization' },
    { name: 'Predictive Analytics', description: 'Forecast supply chain disruptions and demand patterns' },
    { name: 'IoT Integration', description: 'Real-time data collection from connected devices and sensors' },
    { name: 'Blockchain', description: 'Secure and transparent supply chain tracking and verification' },
    { name: 'Cloud Computing', description: 'Scalable and secure cloud-based optimization platform' },
    { name: 'API Integration', description: 'Seamless integration with existing ERP and logistics systems' };
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 20-30% through intelligent optimization',
      icon: DollarSign
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline operations and eliminate bottlenecks for better performance',
      icon: TrendingUp
    },
<<<<<<< HEAD
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate supply chain risks before they impact operations',
      icon: Shield
    },
    {
      title: 'Enhanced Visibility',
      description: 'Real-time visibility into supply chain operations for better decision-making',
      icon: Activity
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
=======;
    {;
      industry: "Healthcare",;
      description: "Optimize medical supply chains, ensure availability, and reduce costs",;
      icon: Shield;
    };
  ];

  const integrations = [
    {
      name: "ERP Systems",
      platforms: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"]
    },
    {
      name: "WMS Systems",
      platforms: ["Manhattan Associates", "HighJump", "Softeon", "JDA"]
    },
    {
      name: "Transportation",
      platforms: ["FedEx", "UPS", "DHL", "TMS Systems"]
    },
    {
      name: "E-commerce",
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      name: "Analytics",
      platforms: ["Tableau", "Power BI", "Google Analytics", "Custom APIs"];
    },;
    {;
      name: "IoT & Sensors",;
      platforms: ["RFID", "GPS Tracking", "Temperature Sensors", "IoT Platforms"];
    };
  ];

  const keyMetrics = [
    {
      metric: "30%",
      label: "Cost Reduction",
      description: "Average reduction in supply chain costs"
    },
    {
      metric: "50%",
      label: "Lead Time Reduction",
      description: "Faster delivery and reduced lead times"
    },
    {
      metric: "95%",
      label: "Forecast Accuracy",
      description: "AI-powered demand prediction accuracy"
    },;
    {;
      metric: "40%",;
      label: "Inventory Optimization",;
      description: "Reduction in excess inventory levels";
    };
  ];

  const optimizationAreas = [
    {
      category: "Demand Planning",
      areas: ["Forecasting", "Seasonal Analysis", "Trend Prediction", "Demand Shaping"]
    },
    {
      category: "Inventory Management",
      areas: ["Stock Optimization", "Reorder Points", "Safety Stock", "ABC Analysis"]
    },
    {
      category: "Transportation",
      areas: ["Route Optimization", "Load Planning", "Carrier Selection", "Freight Optimization"];
    },;
    {;
      category: "Supplier Management",;
      areas: ["Performance Tracking", "Risk Assessment", "Cost Analysis", "Quality Monitoring"];
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization, demand forecasting, and intelligent logistics. Reduce costs, improve efficiency, and enhance visibility across your operations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
=======
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Truck className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your supply chain with AI-powered optimization, demand forecasting, and intelligent logistics that drive efficiency and cost savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Optimize Supply Chain
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Supply Chain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers intelligent optimization across every aspect of your supply chain
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={feature.title}
<<<<<<< HEAD
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
=======
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial assessment to ongoing optimization, we provide end-to-end supply chain transformation
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {services.map((service, index)  => (
              <motion.div
                key={category.category}
<<<<<<< HEAD
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
=======
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered supply chain optimization can transform your operations and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10' 
                    : 'border-white/10 hover:border-orange-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
=======
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI-powered supply chain optimization transforms different industries
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-green-400">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered Optimization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of intelligent supply chain management
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and optimization technologies for maximum efficiency
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their supply chain operations with AI-powered optimization and intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Optimization
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
=======
      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing supply chain and logistics tools for a unified optimization experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial = {
  { opacity: 0,
  y: 20 





}}
                whileInView = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 





}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {integration.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 





}}
            whileInView = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered supply chain optimization 
              to reduce costs and improve operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
