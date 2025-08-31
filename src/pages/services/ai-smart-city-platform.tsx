import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrafficCone, 
  Zap, 
  Globe, 
  Shield, 
  BarChart3, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Lightbulb,
  Wifi,
  Car,
  Tree
} from 'lucide-react';

const AISmartCityPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Powered Traffic Management",
      description: "Intelligent traffic flow optimization using real-time data, predictive analytics, and adaptive signal control"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Smart Energy Management",
      description: "AI-driven energy distribution, renewable integration, and demand response optimization for sustainable cities"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Public Safety & Security",
      description: "Advanced surveillance, emergency response coordination, and predictive crime prevention using AI analytics"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: "Environmental Monitoring",
      description: "Real-time air quality, noise pollution, and environmental impact tracking with predictive modeling"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Waste Management Optimization",
      description: "Smart waste collection routes, recycling optimization, and landfill reduction through AI algorithms"
    },
    {
      icon: <Wifi className="w-6 h-6 text-indigo-500" />,
      title: "IoT Infrastructure Management",
      description: "Centralized management of smart sensors, connected devices, and city-wide IoT networks"
    }
  ];

  const pricingPlans = [
    {
      name: "City Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small cities and municipalities beginning their smart city transformation",
      features: [
        "Up to 50,000 residents",
        "Basic traffic management",
        "Energy monitoring",
        "Public safety alerts",
        "Email support",
        "Mobile dashboard",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "City Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for medium-sized cities with growing smart infrastructure needs",
      features: [
        "Up to 500,000 residents",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced security",
        "Multi-department integration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "City Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large metropolitan areas requiring comprehensive smart city solutions",
      features: [
        "Unlimited residents",
        "Custom AI models",
        "Multi-city management",
        "Dedicated account manager",
        "24/7 support",
        "Advanced compliance tools",
        "White-label solutions",
        "International deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Reduce traffic congestion by up to 30% with AI-optimized flow management",
    "Lower energy costs by 25-40% through smart grid optimization",
    "Improve public safety response times by 50% with predictive analytics",
    "Enhance citizen satisfaction through better service delivery",
    "Achieve sustainability goals with data-driven environmental management",
    "Generate new revenue streams through smart infrastructure monetization"
  ];

  const useCases = [
    {
      category: "Traffic & Transportation",
      solutions: [
        "Smart traffic lights with AI optimization",
        "Public transit route optimization",
        "Parking management and guidance",
        "Emergency vehicle priority routing"
      ]
    },
    {
      category: "Energy & Utilities",
      solutions: [
        "Smart grid management and optimization",
        "Renewable energy integration",
        "Demand response programs",
        "Street lighting automation"
      ]
    },
    {
      category: "Public Safety",
      solutions: [
        "AI-powered surveillance and monitoring",
        "Emergency response coordination",
        "Predictive crime prevention",
        "Natural disaster early warning"
      ]
    },
    {
      category: "Environmental Management",
      solutions: [
        "Air quality monitoring and alerts",
        "Noise pollution tracking",
        "Waste management optimization",
        "Green space monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Building2 className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Smart City Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your city into an intelligent, sustainable, and efficient urban ecosystem 
              with AI-driven infrastructure management and citizen services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Intelligent Urban Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform integrates all aspects of city operations, from traffic management 
              to environmental monitoring, creating a truly connected and intelligent urban environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform addresses every major aspect of urban management, providing integrated 
              solutions that work together to create a smarter, more livable city.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <TrafficCone className="w-6 h-6 text-orange-500 mr-3" />}
                  {index === 1 && <Zap className="w-6 h-6 text-yellow-500 mr-3" />}
                  {index === 2 && <Shield className="w-6 h-6 text-red-500 mr-3" />}
                  {index === 3 && <Tree className="w-6 h-6 text-green-500 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.category}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Smart City Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of cities worldwide in their transformation toward intelligent, 
              sustainable, and citizen-centric urban environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on the latest AI, IoT, and cloud technologies to ensure scalability, 
              security, and performance for cities of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Advanced algorithms for predictive analytics, optimization, and intelligent decision-making
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Wifi className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT & Sensors</h3>
              <p className="text-gray-600">
                Comprehensive network of smart sensors and connected devices for real-time data collection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Big Data Analytics</h3>
              <p className="text-gray-600">
                Real-time processing and analysis of massive urban datasets for actionable insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600">
                Enterprise-grade security with end-to-end encryption and compliance frameworks
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your city's size and smart infrastructure needs. 
              All plans include our core AI-powered urban management capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of cities worldwide in their transformation toward intelligent, 
              sustainable, and citizen-centric urban environments. Our team of experts is ready to help you get started.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-blue-300" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-300" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Website
            </h3>
            <p className="text-gray-300 mb-6">
              Learn more about our comprehensive smart city solutions and explore our full service portfolio.
            </p>
            <a 
              href="https://ziontechgroup.com/services/ai-smart-city-platform"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCityPlatform;