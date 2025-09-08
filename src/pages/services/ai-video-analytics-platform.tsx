import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  Users, 
  Globe,
  Eye,
  Lock,
  Cpu,
  Database,
  Cloud,
  Workflow,
  Target,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MapPin,
  Activity,
  AlertTriangle,
  Camera,
  Play,
  Pause,
  Settings,
  BarChart,
  PieChart,
  LineChart,
  Target2,
  Zap as ZapIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIVideoAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-time AI Analysis",
      description: "Advanced computer vision algorithms that analyze video streams in real-time with sub-second latency"
    },
    {
      icon: Eye,
      title: "Object Detection",
      description: "Identify and track people, vehicles, objects, and behaviors across multiple camera feeds"
    },
    {
      icon: Activity,
      title: "Behavioral Analytics",
      description: "Analyze movement patterns, dwell times, and interaction behaviors for insights"
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Automatically detect unusual activities, security threats, and operational issues"
    },
    {
      icon: BarChart,
      title: "Advanced Reporting",
      description: "Comprehensive dashboards with real-time metrics, trends, and actionable insights"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Built-in privacy protection with GDPR compliance and anonymized data processing"
    }
  ];

  const useCases = [
    {
      title: "Retail Analytics",
      description: "Track customer behavior, optimize store layouts, and improve conversion rates",
      icon: Target,
      benefits: ["Foot traffic analysis", "Heat mapping", "Conversion optimization"]
    },
    {
      title: "Security & Surveillance",
      description: "Intelligent threat detection and automated incident response",
      icon: Shield,
      benefits: ["Real-time alerts", "Behavioral analysis", "Automated response"]
    },
    {
      title: "Manufacturing Quality",
      description: "Monitor production lines and detect quality issues in real-time",
      icon: Cpu,
      benefits: ["Defect detection", "Process optimization", "Quality assurance"]
    },
    {
      title: "Traffic Management",
      description: "Analyze traffic patterns and optimize flow for smart cities",
      icon: Activity,
      benefits: ["Traffic flow analysis", "Congestion prediction", "Route optimization"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and single locations",
      features: [
        "Up to 4 camera feeds",
        "Basic object detection",
        "Standard analytics",
        "Email support",
        "Basic reporting",
        "Cloud storage (30 days)"
      ]
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with multiple locations",
      features: [
        "Up to 16 camera feeds",
        "Advanced AI analytics",
        "Behavioral analysis",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Cloud storage (90 days)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited camera feeds",
        "Custom AI models",
        "On-premise deployment",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Unlimited storage"
      ]
    }
  ];

  const industries = [
    {
      name: "Retail",
      description: "Customer behavior analysis and store optimization",
      icon: Target,
      metrics: ["Foot traffic", "Dwell time", "Conversion rates"]
    },
    {
      name: "Manufacturing",
      description: "Quality control and process optimization",
      icon: Cpu,
      metrics: ["Defect detection", "Efficiency metrics", "Safety compliance"]
    },
    {
      name: "Healthcare",
      description: "Patient monitoring and facility management",
      icon: Shield,
      metrics: ["Patient flow", "Wait times", "Safety monitoring"]
    },
    {
      name: "Transportation",
      description: "Traffic analysis and infrastructure optimization",
      icon: Activity,
      metrics: ["Traffic flow", "Congestion patterns", "Safety incidents"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Video className="w-4 h-4 mr-2" />
              AI-Powered Video Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              AI Video Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your video feeds into actionable intelligence with AI-powered analytics. 
              Detect objects, analyze behaviors, and gain insights in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-gray-400">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">&lt;500ms</div>
              <div className="text-gray-400">Real-time Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Continuous Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Object Types</div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Advanced Video Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform transforms raw video into actionable insights, enabling 
              data-driven decisions and automated responses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored video analytics solutions for retail, manufacturing, healthcare, 
              and transportation industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized video analytics solutions designed for specific industry needs 
              and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-gray-500">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start with a free trial and scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/25 scale-105'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to See Your Video Data in Action?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join hundreds of organizations that have already transformed their video 
                feeds into actionable intelligence. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Setup in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Enterprise security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to revolutionize your video analytics? Our AI experts are here 
                to help you get started and answer any questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your video analytics needs"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoAnalyticsPlatform;