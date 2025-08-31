import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Building2, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Lock,
  Activity,
  Target,
  Rocket,
  Cpu,
  ChartLine,
  Network,
  Database,
  Server,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Wifi,
  Car,
  Leaf,
  Eye,
  BarChart3,
  Settings,
  AlertTriangle,
  CheckSquare,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AISmartCityPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Urban Analytics",
      description: "Advanced machine learning algorithms that analyze city data for intelligent decision-making"
    },
    {
      icon: Building2,
      title: "Smart Infrastructure Management",
      description: "Real-time monitoring and optimization of city infrastructure systems"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Privacy",
      description: "Enterprise-grade security with citizen privacy protection and GDPR compliance"
    },
    {
      icon: Zap,
      title: "Real-time Response Systems",
      description: "Instant alerts and automated responses to urban incidents and emergencies"
    }
  ];

  const services = [
    {
      title: "Smart Transportation",
      description: "AI-powered traffic management, public transit optimization, and intelligent parking systems",
      icon: Car,
      features: ["Traffic flow optimization", "Smart parking management", "Public transit analytics", "Congestion prediction"]
    },
    {
      title: "Energy Management",
      description: "Intelligent grid management, renewable energy integration, and consumption optimization",
      icon: Lightbulb,
      features: ["Smart grid optimization", "Renewable energy integration", "Demand response", "Energy efficiency analytics"]
    },
    {
      title: "Public Safety",
      description: "AI-powered surveillance, emergency response, and crime prevention systems",
      icon: Shield,
      features: ["Predictive policing", "Emergency response optimization", "Surveillance analytics", "Crime hotspot detection"]
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time air quality, water quality, and environmental impact monitoring",
      icon: Leaf,
      features: ["Air quality monitoring", "Water quality tracking", "Noise pollution analysis", "Sustainability metrics"]
    }
  ];

  const technologies = [
    "Internet of Things (IoT)",
    "5G Network Infrastructure",
    "Edge Computing",
    "Machine Learning & AI",
    "Big Data Analytics",
    "Cloud Computing",
    "Blockchain Security",
    "Digital Twin Technology"
  ];

  const pricing = [
    {
      plan: "City Starter",
      price: "$15,000",
      period: "/month",
      features: [
        "Basic smart city modules",
        "IoT sensor integration",
        "Basic analytics dashboard",
        "Email support",
        "Standard security"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "City Professional",
      price: "$45,000",
      period: "/month",
      features: [
        "Full smart city platform",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "City Enterprise",
      price: "$125,000",
      period: "/month",
      features: [
        "Complete smart city solution",
        "Custom AI development",
        "White-label platform",
        "24/7 dedicated support",
        "Compliance consulting",
        "Full API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Reduce operational costs by 30-40% through intelligent automation and optimization"
    },
    {
      icon: Users,
      title: "Citizen Experience",
      description: "Improve quality of life with better services, reduced wait times, and enhanced accessibility"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Achieve environmental goals with smart resource management and green technology integration"
    },
    {
      icon: Shield,
      title: "Public Safety",
      description: "Enhance security and emergency response with AI-powered monitoring and prediction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Smart City Platform - Zion Tech Group"
        description="Transform your city with our AI-powered Smart City Platform. Intelligent infrastructure management, transportation optimization, and sustainable urban development."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Smart City Innovation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Smart City
              <span className="block bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your city into an intelligent, sustainable, and efficient urban ecosystem. 
              Our AI-powered platform integrates all aspects of city management for the future of urban living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-green-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Start Free Trial
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
              Smart City Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive smart city capabilities that transform 
              urban management and citizen experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-400/40 group-hover:to-green-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From transportation to environmental monitoring, our platform covers every aspect 
              of modern city management and citizen services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
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
              Smart City Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover how our AI Smart City Platform delivers measurable benefits for cities, 
              citizens, and the environment.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Smart City Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your city's needs. All plans include our core smart city 
              infrastructure and AI capabilities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/10 to-green-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-green-600 text-white hover:from-blue-400 hover:to-green-500 hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
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
              Advanced Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to create the most advanced smart city solution available.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-400/30 transition-all duration-200"
              >
                <Cpu className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Transform your city into a smart, sustainable, and efficient urban ecosystem. 
                Start your smart city journey today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-green-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  Start Free Trial
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
        </div>
      </section>
    </div>
  );
}