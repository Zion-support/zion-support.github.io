import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Heart,
  Building,
  Rocket,
  Atom,
  Cpu,
  Database,
  Network,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lightbulb,
  Code,
  BarChart3,
  Activity,
  Eye,
  Lock,
  Cloud,
  Server
} from 'lucide-react';

export function AISolutionsPage() {
  const aiServices = [
    {
      category: 'AI Business Intelligence',
      services: [
        {
          name: 'AI-Powered Analytics Platform',
          description: 'Advanced business intelligence with machine learning insights',
          icon: BarChart3,
          href: '/services/ai-business-intelligence',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports']
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead scoring',
          icon: Users,
          href: '/services/ai-sales-copilot',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights']
        },
        {
          name: 'AI Marketing Automation',
          description: 'Smart marketing campaigns with AI optimization',
          icon: TrendingUp,
          href: '/services/ai-marketing-automation',
          features: ['Campaign Optimization', 'Audience Targeting', 'ROI Analysis']
        }
      ]
    },
    {
      category: 'AI Healthcare Solutions',
      services: [
        {
          name: 'AI Healthcare Platform',
          description: 'Comprehensive healthcare AI solutions',
          icon: Heart,
          href: '/services/ai-healthcare-platform',
          features: ['Diagnostic Support', 'Patient Monitoring', 'Treatment Planning']
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Advanced healthcare data analytics',
          icon: BarChart3,
          href: '/services/ai-healthcare-analytics-platform',
          features: ['Population Health', 'Clinical Outcomes', 'Resource Optimization']
        }
      ]
    },
    {
      category: 'AI Enterprise Solutions',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Enterprise-wide AI integration platform',
          icon: Building,
          href: '/services/ai-enterprise-orchestrator',
          features: ['System Integration', 'Workflow Automation', 'Performance Monitoring']
        },
        {
          name: 'AI Project Management',
          description: 'Intelligent project management with AI insights',
          icon: Target,
          href: '/services/ai-project-management',
          features: ['Resource Allocation', 'Risk Assessment', 'Timeline Optimization']
        },
        {
          name: 'AI Workflow Automation',
          description: 'Automate complex business processes with AI',
          icon: Rocket,
          href: '/services/ai-workflow-automation',
          features: ['Process Optimization', 'Error Reduction', 'Efficiency Gains']
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Advanced AI-powered security solutions',
          icon: Shield,
          href: '/services/ai-cybersecurity-suite',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response']
        },
        {
          name: 'AI Penetration Testing',
          description: 'Automated security testing with AI',
          icon: Lock,
          href: '/services/ai-penetration-testing',
          features: ['Vulnerability Assessment', 'Security Auditing', 'Compliance Testing']
        }
      ]
    },
    {
      category: 'AI Infrastructure & DevOps',
      services: [
        {
          name: 'AI DevOps Automation',
          description: 'AI-powered DevOps and infrastructure management',
          icon: Cpu,
          href: '/services/ai-devops-automation-platform',
          features: ['CI/CD Automation', 'Infrastructure Monitoring', 'Performance Optimization']
        },
        {
          name: 'AI IoT Edge Computing',
          description: 'Intelligent edge computing solutions',
          icon: Activity,
          href: '/services/ai-iot-edge-computing-platform',
          features: ['Edge AI Processing', 'Real-time Analytics', 'Device Management']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Data-driven insights for strategic planning'
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and improved satisfaction'
    }
  ];

  const technologies = [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing',
    'Computer Vision', 'Predictive Analytics', 'Neural Networks',
    'Reinforcement Learning', 'Federated Learning', 'Edge AI',
    'Quantum AI', 'AutoML', 'Explainable AI'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From automation to insights, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 font-medium"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable business value with 
              cutting-edge technology and proven methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our extensive portfolio of AI solutions designed to address 
              every aspect of your business needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center space-x-3">
                  <category.icon className="w-6 h-6" />
                  <span>{category.category}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest advancements in artificial intelligence to deliver 
              innovative solutions that keep you ahead of the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our AI solutions can drive innovation, efficiency, 
              and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium inline-flex items-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 font-medium"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AISolutionsPage;