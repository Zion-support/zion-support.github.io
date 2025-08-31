import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Space,
  Technology,
  AI,
  Cloud,
  Security,
  Analytics,
  Integration,
  Zap,
  Brain,
  Cpu,
  Database,
  Network,
  Orbit,
  Planet,
  Star,
  Telescope,
  Navigation,
  Communication
} from 'lucide-react';

const AISpaceTechnologyPlatform: React.FC = () => {
  const features = [
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Satellite Intelligence",
      description: "AI-powered satellite data analysis for Earth observation, weather forecasting, and environmental monitoring"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch Optimization",
      description: "Machine learning algorithms for optimal launch windows, trajectory planning, and fuel efficiency"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Space Traffic Management",
      description: "AI-driven collision avoidance and orbital debris tracking for safe space operations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Space Security",
      description: "Advanced threat detection and cybersecurity for space assets and communications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mission Control AI",
      description: "Intelligent mission planning and real-time decision support for space operations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Autonomous Operations",
      description: "Self-managing space systems with minimal human intervention for deep space missions"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$4,999",
      period: "/month",
      description: "Perfect for research institutions and space startups",
      features: [
        "Basic satellite data analysis",
        "Launch window optimization",
        "Standard space traffic monitoring",
        "Email support",
        "25GB data storage",
        "Basic mission planning tools"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$12,999",
      period: "/month",
      description: "Ideal for space agencies and commercial space companies",
      features: [
        "Advanced satellite intelligence",
        "Full launch optimization suite",
        "Comprehensive space traffic management",
        "Priority support",
        "100GB data storage",
        "Advanced mission control AI",
        "Custom space security protocols"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$39,999",
      period: "/month",
      description: "For large space organizations requiring maximum capabilities",
      features: [
        "Full AI space technology suite",
        "Custom satellite constellations",
        "Advanced space security systems",
        "Dedicated support team",
        "Unlimited storage",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Space className="w-8 h-8" />,
      title: "Space Innovation",
      description: "Pioneer the future of space exploration with cutting-edge AI technology"
    },
    {
      icon: <Technology className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "Leverage the latest AI breakthroughs for space applications"
    },
    {
      icon: <AI className="w-8 h-8" />,
      title: "Intelligent Operations",
      description: "Automate complex space operations with AI-driven decision making"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Native",
      description: "Built for modern cloud infrastructure with seamless scaling and deployment"
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: "Space Security",
      description: "Bank-grade security with advanced threat detection for space assets"
    },
    {
      icon: <Analytics className="w-8 h-8" />,
      title: "Deep Insights",
      description: "Gain unprecedented insights into space operations and satellite data"
    }
  ];

  const useCases = [
    {
      title: "Earth Observation",
      description: "Climate monitoring, disaster response, and environmental protection",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Satellite Communications",
      description: "Global connectivity, IoT networks, and emergency communications",
      icon: <Satellite className="w-6 h-6" />
    },
    {
      title: "Space Exploration",
      description: "Mars missions, asteroid mining, and deep space exploration",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Space Tourism",
      description: "Commercial space travel, orbital hotels, and space experiences",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const technologies = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for space data analysis and mission optimization",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Computer Vision",
      description: "AI-powered image recognition for satellite imagery and space object identification",
      icon: <Telescope className="w-6 h-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecasting models for space weather, orbital mechanics, and mission planning",
      icon: <Analytics className="w-6 h-6" />
    },
    {
      title: "Autonomous Systems",
      description: "Self-managing space systems with minimal human intervention",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Space Technology Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize space exploration with AI-powered technology. From satellite intelligence to 
              autonomous mission control, experience the future of space operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Call +1 302 464 0950
              </a>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of space exploration with AI-powered technology
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming space exploration and operations
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
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technologies powering the future of space exploration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Space Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your space operations with cutting-edge AI technology
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
                className="text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your space technology needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-indigo-500 ring-2 ring-indigo-500/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Future of Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the space technology revolution and transform your space operations today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-white hover:text-indigo-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-indigo-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Address</h4>
              <p className="text-white">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPlatform;