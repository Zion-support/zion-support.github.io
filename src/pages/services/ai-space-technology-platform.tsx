import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  Rocket, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Target,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Network,
  Orbit,
  Eye,
  Planet,
  Comet,
  Meteor,
  Sun,
  Moon
} from 'lucide-react';

const AISpaceTechnologyPlatform: React.FC = () => {
  const features = [
    {
      icon: Satellite,
      title: "Satellite Constellation Management",
      description: "AI-powered management of satellite networks with autonomous orbital optimization and collision avoidance."
    },
    {
      icon: Eye,
      title: "Space Observation & Analytics",
      description: "Advanced AI algorithms for processing astronomical data and space imagery with unprecedented accuracy."
    },
    {
      icon: Orbit,
      title: "Orbital Mechanics AI",
      description: "Intelligent trajectory planning and orbital maneuver optimization for space missions."
    },
    {
      icon: Network,
      title: "Space Communication Networks",
      description: "AI-optimized inter-satellite communication and ground station coordination systems."
    },
    {
      icon: Zap,
      title: "Real-time Space Monitoring",
      description: "Continuous monitoring of space debris, solar activity, and cosmic events with predictive analytics."
    },
    {
      icon: Shield,
      title: "Space Security & Defense",
      description: "Advanced threat detection and space situational awareness for national security applications."
    }
  ];

  const pricingPlans = [
    {
      name: "Space Explorer",
      price: "$2,999",
      period: "/month",
      description: "For space research institutions and universities",
      features: [
        "Up to 100 satellite observations/month",
        "Basic orbital calculations",
        "Space weather monitoring",
        "Email support",
        "Research data access"
      ],
      popular: false
    },
    {
      name: "Space Enterprise",
      price: "$7,999",
      period: "/month",
      description: "For commercial space companies and startups",
      features: [
        "Up to 1,000 satellite operations/month",
        "Advanced AI space analytics",
        "Custom mission planning",
        "API access",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Space Command",
      price: "$19,999",
      period: "/month",
      description: "For government and military applications",
      features: [
        "Unlimited space operations",
        "Full AI space autonomy",
        "Custom space algorithms",
        "White-label options",
        "Dedicated space engineers",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Satellite tracking accuracy"
    },
    {
      metric: "1000x",
      description: "Faster space data processing"
    },
    {
      metric: "24/7",
      description: "Continuous space monitoring"
    },
    {
      metric: "Global",
      description: "Coverage and reach"
    }
  ];

  const useCases = [
    {
      icon: Satellite,
      title: "Satellite Operations",
      description: "Autonomous satellite constellation management and mission control."
    },
    {
      icon: Eye,
      title: "Astronomy Research",
      description: "AI-powered analysis of astronomical data and space phenomena."
    },
    {
      icon: Globe,
      title: "Earth Observation",
      description: "Environmental monitoring and climate change analysis from space."
    },
    {
      icon: Rocket,
      title: "Space Missions",
      description: "Mission planning and execution for interplanetary exploration."
    },
    {
      icon: Network,
      title: "Space Communications",
      description: "Global communication networks and internet connectivity from space."
    },
    {
      icon: Shield,
      title: "Space Defense",
      description: "National security and space situational awareness systems."
    }
  ];

  const spaceTechnologies = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Advanced algorithms for space data processing and autonomous decision-making."
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Processing massive amounts of space data in real-time."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure for space applications."
    },
    {
      icon: Network,
      title: "5G & IoT",
      description: "Next-generation communication networks for space connectivity."
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Advanced security protocols for space systems and communications."
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting systems for space operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Space Technology Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize space technology with our AI-powered platform. Achieve 99.9% satellite tracking accuracy and 1000x faster space data processing with autonomous space operations." />
        <meta name="keywords" content="AI space technology, satellite management, space analytics, orbital mechanics, space communication, space monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-space-technology-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Satellite className="w-4 h-4" />
              <span>AI Space Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Space Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Platform</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pioneer the future of space exploration with our revolutionary AI-powered space technology platform. 
              Achieve 99.9% satellite tracking accuracy and unlock autonomous space operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Launch Space Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Space Technology Performance That Reaches for the Stars
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI Space Technology Platform delivers performance metrics that push the boundaries of what's possible in space.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <div className="text-zion-slate-light">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Space Technology Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience the cutting-edge capabilities that make our platform the most advanced space technology solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Space Operations with AI
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform is revolutionizing multiple space applications with unprecedented AI capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-purple/30 transition-all duration-300">
                  <useCase.icon className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-zion-slate-light">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Built with the latest technologies to ensure maximum performance and reliability in space applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-zion-slate-light">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Space Technology Pricing Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Access the power of AI space technology with flexible pricing designed for every level of space operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/20'
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple hover:bg-zion-purple hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 text-center border border-zion-cyan/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch into the Future of Space Technology?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the space revolution and unlock the full potential of AI-powered space operations. 
              Start your space technology journey today with our cutting-edge platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Launch Space Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Space Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Ready to explore the final frontier? Our space technology experts are here to guide you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan font-medium">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPlatform;