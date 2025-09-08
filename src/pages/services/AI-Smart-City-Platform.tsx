import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Building,
  TrafficCone,
  Lightbulb,
  Leaf,
  Wifi,
  Camera,
  Car,
  Bus,
  Train,
  Bike,
  Database,
  Network,
  Cpu,
  Server,
  Cloud
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISmartCityPlatform() {
  const features = [
    {
      title: "Intelligent Traffic Management",
      description: "AI-powered traffic optimization reducing congestion by up to 40%",
      icon: TrafficCone,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Energy Grid",
      description: "Real-time energy monitoring and optimization for sustainable cities",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Environmental Monitoring",
      description: "AI sensors track air quality, noise, and environmental factors",
      icon: Leaf,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Public Safety AI",
      description: "Advanced surveillance and emergency response systems",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Transportation",
      description: "Connected vehicles and intelligent public transit systems",
      icon: Car,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Urban Analytics",
      description: "Data-driven insights for city planning and optimization",
      icon: BarChart3,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "City Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small cities and municipalities",
      features: [
        "Basic traffic management",
        "Energy monitoring",
        "Environmental sensors",
        "Email support",
        "Mobile dashboard",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Smart City Pro",
      price: "$8,999",
      period: "/month",
      description: "Ideal for medium-sized cities",
      features: [
        "Advanced traffic optimization",
        "Smart energy grid",
        "Public safety systems",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Metropolitan",
      price: "$24,999",
      period: "/month",
      description: "For large cities and metropolitan areas",
      features: [
        "Full smart city suite",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Advanced security",
        "Custom deployments",
        "Training & certification"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "40% Traffic Reduction",
      description: "AI-optimized traffic flow reduces congestion and travel time",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "30% Energy Savings",
      description: "Smart grid optimization reduces energy consumption and costs",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "50% Faster Emergency Response",
      description: "AI-powered systems improve public safety and emergency services",
      icon: Shield,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "25% Cost Reduction",
      description: "Efficient city operations reduce municipal expenses",
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="AI Smart City Platform - Zion Tech Group"
        description="Revolutionary AI-powered smart city platform that optimizes urban infrastructure, traffic, energy, and public services for sustainable and efficient cities."
        keywords="smart city, AI urban planning, traffic optimization, smart energy grid, environmental monitoring, public safety AI"
        canonicalUrl="https://ziontechgroup.com/services/ai-smart-city-platform"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Smart City AI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart City
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your city into a smart, sustainable, and efficient urban ecosystem with 
              AI-powered infrastructure management and citizen services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Building className="w-5 h-5 mr-2" />
                City Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions for every aspect of modern urban management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your City
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in urban efficiency, sustainability, and citizen satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for cities of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build a Smart City?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the smart city revolution with AI-powered urban management that creates 
                sustainable, efficient, and citizen-friendly cities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-2">Contact Information</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}