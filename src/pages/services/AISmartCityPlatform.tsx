import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Zap, 
  BarChart3, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Database,
  Cloud,
  Target,
  Activity,
  Shield,
  Brain,
  FileText,
  AlertTriangle,
  Lightbulb,
  Monitor,
  Cpu,
  Network,
  Workflow,
  Analytics,
  Rocket,
  Globe,
  Lock,
  RefreshCw,
  TrendingUp,
  Eye,
  Cog,
  Command,
  TrafficCone,
  Car,
  LightbulbIcon,
  Wifi,
  Camera,
  MapPin,
  Leaf,
  Droplets,
  Gauge
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISmartCityPlatform() {
  const features = [
    {
      icon: Building2,
      title: "Urban Intelligence",
      description: "AI-powered urban planning and infrastructure optimization for smarter cities"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of city systems with instant response and optimization"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that forecast urban trends and optimize city operations"
    },
    {
      icon: Settings,
      title: "Automated Management",
      description: "Intelligent automation of city services and infrastructure management"
    }
  ];

  const services = [
    {
      title: "Smart Traffic Management",
      description: "AI-powered traffic optimization with real-time signal control and congestion prediction",
      icon: TrafficCone,
      features: ["Real-time traffic monitoring", "Intelligent signal timing", "Congestion prediction", "Emergency vehicle routing"]
    },
    {
      title: "Energy Management",
      description: "Smart grid optimization and renewable energy integration for sustainable urban power",
      icon: Zap,
      features: ["Smart grid management", "Renewable integration", "Demand response", "Energy optimization"]
    },
    {
      title: "Public Safety & Security",
      description: "AI-powered surveillance and emergency response systems for enhanced urban security",
      icon: Shield,
      features: ["Intelligent surveillance", "Emergency response", "Crime prevention", "Public safety analytics"]
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time environmental monitoring and pollution control for healthier cities",
      icon: Leaf,
      features: ["Air quality monitoring", "Noise pollution tracking", "Waste management", "Green infrastructure"]
    }
  ];

  const technologies = [
    "Internet of Things (IoT)",
    "Machine Learning & AI",
    "Big Data Analytics",
    "5G & Edge Computing",
    "Blockchain Security",
    "Cloud Infrastructure",
    "Computer Vision",
    "Predictive Modeling"
  ];

  const pricing = [
    {
      name: "City Starter",
      price: "$2,999",
      period: "/month",
      description: "Essential smart city solutions for small municipalities",
      features: [
        "Basic traffic management",
        "Energy monitoring",
        "Public safety alerts",
        "Environmental sensors",
        "Basic analytics dashboard",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "City Pro",
      price: "$7,999",
      period: "/month",
      description: "Comprehensive smart city platform for medium-sized cities",
      features: [
        "Advanced traffic optimization",
        "Smart grid management",
        "AI-powered surveillance",
        "Environmental control",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "Multi-department access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Metropolitan",
      price: "$19,999",
      period: "/month",
      description: "Enterprise-grade smart city solution for large metropolitan areas",
      features: [
        "Full smart city suite",
        "Custom AI models",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security features",
        "Multi-city management",
        "Custom reporting & dashboards"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <SEO 
        title="AI Smart City Platform - Zion Tech Group"
        description="Transform your city with our AI-powered smart city platform. Intelligent traffic management, energy optimization, public safety, and environmental monitoring for sustainable urban development."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              AI-Powered Urban Intelligence
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Smart City
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionize urban living with intelligent city management that optimizes traffic, 
              energy, safety, and sustainability. Our AI platform transforms cities into smart, 
              efficient, and livable environments for all citizens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Transform Your City
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with urban planning expertise 
              to deliver comprehensive smart city solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-800/50 border border-blue-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-400/40 group-hover:to-cyan-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Smart City Services
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From traffic optimization to environmental monitoring, our AI services cover every aspect 
              of modern urban management.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-800/50 border border-blue-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Built on cutting-edge technologies to ensure reliability, scalability, and intelligence 
              in urban management.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-blue-800/50 border border-blue-700/50 rounded-lg hover:border-blue-400/30 transition-all duration-200"
              >
                <Cpu className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Choose the plan that fits your city's needs and scale as you grow.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-blue-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' 
                    : 'border-blue-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-blue-200 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-blue-100">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-400 hover:to-cyan-500'
                      : 'bg-blue-700/50 text-blue-100 hover:bg-blue-700/70'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover the advantages of AI-powered smart city management for your municipality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Efficiency Gains</h3>
              <p className="text-blue-100">Optimize city operations and reduce costs by up to 30% through intelligent automation</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
              <p className="text-blue-100">Reduce environmental impact and promote sustainable urban development</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Citizen Experience</h3>
              <p className="text-blue-100">Improve quality of life with better services and reduced wait times</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
              <p className="text-blue-100">Improve public safety with AI-powered surveillance and emergency response</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Economic Growth</h3>
              <p className="text-blue-100">Attract businesses and investment with modern, efficient city infrastructure</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Insights</h3>
              <p className="text-blue-100">Monitor city performance with live dashboards and predictive analytics</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build the City of Tomorrow?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading cities worldwide in leveraging AI for smarter, more sustainable urban development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Start Smart City Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-blue-100">
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <p>+1 302 464 0950</p>
              </div>
              <div className="text-blue-100">
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div className="text-blue-100">
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-blue-200">
                Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}