import React from 'react';
import { motion } from 'framer-motion';
import {

  Zap, 
  Code, 
  Cloud, 
  Database, 
  Server, 
  Shield, 
  BarChart3, 
  Target, 
  CheckCircle,
  Star,
  ArrowRight,
  Headphones,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin,
  GitBranch,
  Monitor,
  Settings,
  Workflow
} from 'lucide-react';

export default function AIDevOpsAutomationPlatform() {

  const features = [
    {

      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation of CI/CD pipelines and deployment processes'
    },
    {

      icon: Code,
      title: 'Smart Code Analysis',
      description: 'Automated code review, testing, and quality assurance'
    },
    {

      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, GCP, and on-premise'
    },
    {

      icon: Database,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and configuration management'
    }
  ];

  const capabilities = [
    {

      title: 'Intelligent CI/CD Pipelines',
      description: 'AI-optimized build, test, and deployment workflows with automatic optimization',
      icon: Workflow
    },
    {

      title: 'Automated Testing & QA',
      description: 'Machine learning-powered test generation and quality assurance automation',
      icon: CheckCircle
    },
    {

      title: 'Smart Infrastructure Management',
      description: 'Automated scaling, monitoring, and optimization of cloud resources',
      icon: Server
    },
    {

      title: 'Security & Compliance',
      description: 'Automated security scanning, vulnerability assessment, and compliance checks',
      icon: Shield
    },
    {

      title: 'Performance Monitoring',
      description: 'Real-time application performance monitoring and optimization',
      icon: Monitor
    },
    {

      title: 'Disaster Recovery',
      description: 'Automated backup, recovery, and business continuity solutions',
      icon: Database
    }
  ];

  const benefits = [
    'Reduce deployment time by up to 80%',
    'Decrease infrastructure costs by 40%',
    'Improve code quality by 60%',
    'Achieve 99.9% deployment success rate',
    'Automate 90% of DevOps tasks',
    'Real-time monitoring and alerting'
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$399',
      period: '/month',
      features: [
        'Up to 10 applications',
        'Basic CI/CD pipelines',
        'Cloud monitoring',
        'Email support',
        'Standard integrations',
        'Basic reporting'
      ],
      popular: false
    },
    {

      plan: 'Professional',
      price: '$999',
      period: '/month',
      features: [
        'Up to 50 applications',
        'Advanced AI automation',
        'Multi-cloud support',
        'Priority support',
        'Custom dashboards',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {

      plan: 'Enterprise',
      price: '$2,499',
      period: '/month',
      features: [
        'Unlimited applications',
        'Custom AI models',
        'White-label solution',
        'Dedicated DevOps team',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const devopsMetrics = [
    { metric: '80%', label: 'Faster Deployments' },
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '99.9%', label: 'Uptime SLA' },
    { metric: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI DevOps Automation Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your development operations with intelligent automation, AI-powered insights, and seamless multi-cloud management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Automate Your DevOps
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                DevOps Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DevOps Metrics Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {devopsMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{item.metric}</div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary DevOps Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to streamline your development and operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced DevOps Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive DevOps tools designed for modern development teams and enterprises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <capability.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven DevOps Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your development operations and achieve measurable improvements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent DevOps Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the automation level that fits your development needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 p-8 rounded-xl border ${

                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://ziontechgroup.com/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading development teams that trust our AI-powered DevOps platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}