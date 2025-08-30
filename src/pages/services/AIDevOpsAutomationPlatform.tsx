import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Workflow,
  GitBranch,
  Server,
  Monitor,
  Lock,
  BarChart3,
  Settings,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

export default function AIDevOpsAutomationPlatform() {
  const features = [
    "AI-Powered Code Review & Analysis",
    "Intelligent CI/CD Pipeline Optimization",
    "Automated Security Vulnerability Detection",
    "Smart Resource Scaling & Management",
    "Predictive Performance Monitoring",
    "Automated Testing & Quality Assurance",
    "Intelligent Deployment Strategies",
    "Real-time Incident Response & Recovery"
  ];

  const benefits = [
    "Reduce deployment time by 80% through intelligent automation",
    "Eliminate 95% of human errors in deployment processes",
    "Cut infrastructure costs by 40% with smart resource management",
    "Improve code quality by 60% with AI-powered analysis",
    "Achieve 99.9% uptime with predictive monitoring",
    "Reduce security incidents by 90% with automated scanning",
    "Accelerate time-to-market by 3x",
    "Enable 24/7 autonomous operations"
  ];

  const capabilities = [
    {
      category: "Code Management",
      items: [
        "AI-powered code review and suggestions",
        "Automated code quality analysis",
        "Intelligent refactoring recommendations",
        "Security vulnerability scanning",
        "Performance optimization suggestions"
      ]
    },
    {
      category: "Build & Deploy",
      items: [
        "Smart CI/CD pipeline orchestration",
        "Automated testing and validation",
        "Intelligent deployment strategies",
        "Rollback automation",
        "Multi-environment management"
      ]
    },
    {
      category: "Infrastructure",
      items: [
        "Auto-scaling based on demand",
        "Cost optimization algorithms",
        "Resource allocation intelligence",
        "Cloud provider optimization",
        "Disaster recovery automation"
      ]
    },
    {
      category: "Monitoring & Operations",
      items: [
        "Predictive performance monitoring",
        "Automated incident response",
        "Intelligent alerting systems",
        "Root cause analysis automation",
        "Performance trend analysis"
      ]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29,999",
      period: "one-time setup",
      features: [
        "Basic AI DevOps automation",
        "Up to 10 applications",
        "Standard CI/CD pipelines",
        "Basic monitoring & alerting",
        "Email support",
        "Cloud deployment"
      ]
    },
    {
      name: "Professional",
      price: "$59,999",
      period: "one-time setup",
      features: [
        "Advanced AI automation",
        "Up to 50 applications",
        "Custom CI/CD workflows",
        "Advanced monitoring & analytics",
        "Priority support",
        "On-premise deployment option",
        "Advanced security features"
      ]
    },
    {
      name: "Enterprise",
      price: "$119,999",
      period: "one-time setup",
      features: [
        "Full AI DevOps platform",
        "Unlimited applications",
        "Custom automation workflows",
        "24/7 dedicated support",
        "Hybrid deployment options",
        "Advanced analytics & reporting",
        "Custom integrations",
        "White-label solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEO 
        title="AI DevOps Automation Platform | Zion Tech Group"
        description="Revolutionary AI-powered DevOps automation platform that transforms software development, deployment, and operations with intelligent automation."
        keywords="AI DevOps, automation platform, CI/CD, deployment automation, intelligent operations, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-8 border border-blue-400/30">
              <Cpu className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI DevOps
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Automation Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              The future of DevOps is here. Our AI-powered automation platform revolutionizes software development, 
              deployment, and operations with intelligent automation that learns, adapts, and optimizes continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven DevOps automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements across your entire development lifecycle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI-powered DevOps automation across all aspects of software delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mr-4 border border-blue-400/30">
                    {index === 0 && <Code className="w-6 h-6 text-blue-400" />}
                    {index === 1 && <GitBranch className="w-6 h-6 text-blue-400" />}
                    {index === 2 && <Server className="w-6 h-6 text-blue-400" />}
                    {index === 3 && <Monitor className="w-6 h-6 text-blue-400" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your DevOps automation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                    : 'border-blue-400/20'
                } hover:border-blue-400/40 transition-all duration-300`}
              >
                {plan.name === 'Professional' && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn how our AI DevOps automation platform can transform your development workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008, Middletown DE 19709</p>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View on Map
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}