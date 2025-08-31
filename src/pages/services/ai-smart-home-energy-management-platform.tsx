import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  Zap, 
  TrendingDown, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Users, 
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Activity,
  Target,
  Award,
  Lock,
  Database,
  Globe,
  Sun,
  Battery,
  Wifi,
  Settings
} from 'lucide-react';

export default function AISmartHomeEnergyManagementPlatform() {
  const features = [
    {
      title: "AI Energy Optimization",
      description: "Intelligent algorithms automatically optimize your home's energy consumption in real-time",
      icon: Zap,
      benefits: ["Smart scheduling", "Peak demand management", "Weather integration", "Usage learning"]
    },
    {
      title: "Smart Device Integration",
      description: "Seamlessly connect and control all your smart home devices from one platform",
      icon: Home,
      benefits: ["IoT compatibility", "Voice control", "Mobile app", "Automation rules"]
    },
    {
      title: "Real-time Monitoring",
      description: "Track energy usage, costs, and efficiency with detailed analytics and insights",
      icon: BarChart3,
      benefits: ["Live dashboards", "Cost tracking", "Efficiency metrics", "Historical data"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting to predict energy needs and optimize consumption patterns",
      icon: Activity,
      benefits: ["Usage predictions", "Cost forecasting", "Maintenance alerts", "Optimization tips"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for small homes and apartments",
      features: [
        "Up to 10 smart devices",
        "Basic energy monitoring",
        "Mobile app access",
        "Email support",
        "Basic automation",
        "Energy reports"
      ],
      popular: false,
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Professional",
      price: "$39",
      period: "/month",
      description: "Ideal for medium to large homes",
      features: [
        "Up to 50 smart devices",
        "Advanced AI optimization",
        "Real-time monitoring",
        "Custom automation",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Weather integration"
      ],
      popular: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large properties and commercial buildings",
      features: [
        "Unlimited devices",
        "Enterprise AI features",
        "Multi-property management",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "Compliance reporting"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Energy Savings",
      description: "Reduce your energy bills by up to 30% with intelligent optimization",
      icon: TrendingDown,
      metric: "30%"
    },
    {
      title: "Cost Reduction",
      description: "Lower monthly utility costs through smart consumption management",
      icon: DollarSign,
      metric: "$200+"
    },
    {
      title: "Environmental Impact",
      description: "Reduce your carbon footprint and contribute to sustainability",
      icon: Globe,
      metric: "25%"
    },
    {
      title: "Convenience",
      description: "Automate your home and control everything from your smartphone",
      icon: Smartphone,
      metric: "24/7"
    }
  ];

  const useCases = [
    {
      homeType: "Single Family Homes",
      description: "Comprehensive energy management for houses with multiple rooms and appliances",
      savings: "25-35% reduction in energy costs"
    },
    {
      homeType: "Apartments & Condos",
      description: "Efficient energy monitoring and optimization for smaller living spaces",
      savings: "20-30% reduction in energy costs"
    },
    {
      homeType: "Smart Homes",
      description: "Integration with existing smart home ecosystems and automation",
      savings: "30-40% reduction in energy costs"
    },
    {
      homeType: "Vacation Homes",
      description: "Remote monitoring and energy management for secondary properties",
      savings: "40-50% reduction in energy costs"
    }
  ];

  const statistics = [
    { number: "50K+", label: "Homes Connected", icon: Home },
    { number: "30%", label: "Average Savings", icon: TrendingDown },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  const smartDevices = [
    {
      category: "Lighting",
      devices: ["Smart bulbs", "Dimmers", "Motion sensors", "Outdoor lights"],
      icon: Sun
    },
    {
      category: "Appliances",
      devices: ["Smart thermostats", "Refrigerators", "Washers", "Dryers"],
      icon: Home
    },
    {
      category: "Climate Control",
      devices: ["HVAC systems", "Fans", "Air purifiers", "Humidifiers"],
      icon: Activity
    },
    {
      category: "Security",
      devices: ["Cameras", "Door locks", "Alarms", "Motion detectors"],
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Smart Home Energy Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered smart home energy management platform. Optimize energy consumption, reduce costs by 30%, and control your smart home from anywhere. Start saving today." />
        <meta name="keywords" content="smart home, energy management, AI optimization, home automation, energy savings, smart devices, IoT, home energy" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-smart-home-energy-management-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                <Home className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart Home Energy
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Management Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your home into an intelligent, energy-efficient ecosystem. 
              Our AI platform optimizes energy consumption, reduces costs by up to 30%, 
              and gives you complete control over your smart home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Why Choose Our Smart Home Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of home energy management with AI-powered 
              optimization and seamless smart home integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-green-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Smart Homes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need to transform your home 
              into an intelligent, energy-efficient ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Device Integration */}
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
              Seamless Smart Device Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and control all your smart home devices from one unified platform 
              with AI-powered automation and optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartDevices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-green-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.category}</h3>
                <ul className="space-y-2">
                  {category.devices.map((device, deviceIndex) => (
                    <li key={deviceIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      {device}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Affordable Smart Home Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your home size and smart device needs. 
              All plans include our core AI energy optimization capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-lg border-2 ${
                  plan.popular 
                    ? 'border-green-400 bg-slate-700 scale-105' 
                    : 'border-slate-600 bg-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600'
                    : 'bg-slate-500 text-white hover:bg-slate-400'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect for Every Home Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique energy management needs 
              of different types of homes and properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.homeType}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  <TrendingDown className="h-5 w-5 mr-2" />
                  {useCase.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of homeowners already saving money and energy with 
              our AI-powered smart home platform. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your home into a smart, energy-efficient ecosystem? 
                Our team of experts is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-lg border border-slate-600"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Request a Demo
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <select className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-green-400">
                  <option value="">Select Plan Type</option>
                  <option value="starter">Starter</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
                <textarea
                  placeholder="Tell us about your home and energy goals"
                  rows={4}
                  className="w-full p-3 bg-slate-700 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                >
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
