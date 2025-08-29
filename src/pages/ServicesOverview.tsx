import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Star,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  Clock,
  Globe2,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Server,
  ShieldCheck,
  Zap as Lightning
} from 'lucide-react';

const serviceCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Transform your business with intelligent automation and data-driven insights',
    services: [
      {
        name: 'AI Business Intelligence',
        href: '/services/ai-business-intelligence',
        description: 'Advanced analytics and business intelligence powered by machine learning',
        icon: BarChart3,
        features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization']
      },
      {
        name: 'AI Sales Copilot',
        href: '/services/ai-sales-copilot',
        description: 'AI-driven sales automation and customer relationship optimization',
        icon: Users,
        features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups']
      },
      {
        name: 'AI Compliance Assistant',
        href: '/services/ai-compliance-assistant',
        description: 'Automated regulatory compliance and risk management',
        icon: ShieldCheck,
        features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Support']
      },
      {
        name: 'LLM Content Studio',
        href: '/services/llm-content-studio',
        description: 'AI-powered content creation and brand management',
        icon: BookOpen,
        features: ['Content Generation', 'Brand Consistency', 'SEO Optimization', 'Multi-format Output']
      }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Scalable cloud infrastructure and automated development workflows',
    services: [
      {
        name: 'Cloud DevOps',
        href: '/services/cloud-devops',
        description: 'End-to-end cloud infrastructure and DevOps automation',
        icon: Server,
        features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration', 'Performance Optimization']
      },
      {
        name: 'Cloud FinOps Optimizer',
        href: '/services/cloud-finops-optimizer',
        description: 'Cloud cost optimization and financial operations management',
        icon: DollarSign,
        features: ['Cost Monitoring', 'Resource Optimization', 'Budget Management', 'ROI Analysis']
      },
      {
        name: 'FinOps Advisor',
        href: '/services/finops-advisor',
        description: 'Strategic financial operations consulting and implementation',
        icon: Target,
        features: ['Cost Strategy', 'Resource Planning', 'Optimization Roadmap', 'Best Practices']
      }
    ]
  },
  {
    name: 'Digital Transformation',
    icon: Rocket,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge digital solutions that revolutionize business operations',
    services: [
      {
        name: 'Digital Twin',
        href: '/services/digital-twin',
        description: 'Real-time digital replicas for simulation and monitoring',
        icon: Globe2,
        features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics']
      },
      {
        name: 'IT Infrastructure',
        href: '/services/it-infrastructure',
        description: 'Enterprise-grade infrastructure and network solutions',
        icon: Network,
        features: ['Network Design', 'Security Implementation', 'Scalability Planning', '24/7 Support']
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        description: 'Comprehensive data analysis and business intelligence',
        icon: Database,
        features: ['Data Mining', 'Statistical Analysis', 'Interactive Dashboards', 'Custom Reports']
      }
    ]
  },
  {
    name: 'IoT & Edge Computing',
    icon: Cpu,
    color: 'from-orange-600 to-red-600',
    description: 'Connected devices and edge intelligence for modern enterprises',
    services: [
      {
        name: 'IoT Edge Computing',
        href: '/services/iot-edge',
        description: 'Edge computing solutions for IoT applications',
        icon: Smartphone,
        features: ['Edge Processing', 'Real-time Analytics', 'Low-latency Operations', 'Offline Capability']
      },
      {
        name: 'Smart Device Management',
        href: '/services/smart-device-management',
        description: 'Comprehensive IoT device lifecycle management',
        icon: Cpu,
        features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates', 'Security Management']
      }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-indigo-600 to-purple-600',
    description: 'Advanced security and compliance solutions for enterprise protection',
    services: [
      {
        name: 'AI Compliance Copilot',
        href: '/services/ai-compliance-copilot',
        description: 'AI-powered security compliance automation',
        icon: ShieldCheck,
        features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Auditing']
      },
      {
        name: 'Zero Trust Architecture',
        href: '/services/zero-trust-network-architecture',
        description: 'Modern security framework implementation',
        icon: Lock,
        features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring']
      }
    ]
  },
  {
    name: 'Specialized Solutions',
    icon: Star,
    color: 'from-yellow-600 to-orange-600',
    description: 'Industry-specific and specialized technology solutions',
    services: [
      {
        name: 'Healthcare Technology',
        href: '/services/healthcare-tech',
        description: 'AI-powered healthcare solutions and compliance',
        icon: Heart,
        features: ['HIPAA Compliance', 'Patient Analytics', 'Clinical Decision Support', 'Telemedicine']
      },
      {
        name: 'Blockchain Solutions',
        href: '/services/blockchain-enterprise-solutions',
        description: 'Enterprise blockchain and DeFi solutions',
        icon: Lock,
        features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Tokenization']
      },
      {
        name: 'Sustainability Solutions',
        href: '/services/sustainability',
        description: 'Green IT and environmental technology',
        icon: Globe,
        features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'ESG Reporting']
      }
    ]
  }
];

const featuredSolutions = [
  {
    name: 'Micro SaaS Solutions',
    href: '/services/micro-saas-solutions',
    description: 'Scalable software solutions for niche markets',
    icon: ShoppingCart,
    color: 'from-cyan-400 to-blue-500',
    benefits: ['Rapid Deployment', 'Custom Features', 'Scalable Architecture', '24/7 Support']
  },
  {
    name: 'AI Auto Email Responder',
    href: '/services/ai-auto-email-responder',
    description: 'Intelligent email automation and CRM integration',
    icon: MessageCircle,
    color: 'from-purple-400 to-pink-500',
    benefits: ['Smart Responses', 'CRM Integration', 'Analytics Tracking', 'Custom Templates']
  },
  {
    name: 'Customer Feedback Surveys',
    href: '/services/mobile-feedback-surveys',
    description: 'AI-powered feedback collection and analysis',
    icon: Users,
    color: 'from-green-400 to-emerald-500',
    benefits: ['Survey Creation', 'Response Analysis', 'Sentiment Analysis', 'Actionable Insights']
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: '15+ years of technology innovation and successful project delivery',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Clock,
    title: 'Rapid Implementation',
    description: 'Quick turnaround times without compromising quality or security',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'ISO 27001 certified with SOC 2 Type II compliance',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Globe2,
    title: 'Global Support',
    description: '24/7 support available across multiple time zones',
    color: 'from-purple-400 to-pink-500'
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of Zion Tech Group's technology services including AI, cloud computing, cybersecurity, digital transformation, and specialized solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services Overview
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services designed to transform your business
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/30"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={solution.href}
                  className="block bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.name}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + serviceIndex * 0.05 }}
                      className="group"
                    >
                      <Link
                        to={service.href}
                        className="block bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 h-full"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                        </div>
                        
                        <p className="text-slate-300 text-sm mb-4">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                              <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Explore Service</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with the latest technologies and frameworks for optimal performance and scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
              { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-500' },
              { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-500' },
              { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-indigo-500' },
              { name: 'Kubernetes', icon: '⚓', color: 'from-blue-400 to-purple-500' },
              { name: 'TensorFlow', icon: '🧠', color: 'from-orange-400 to-red-500' },
              { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-indigo-500' },
              { name: 'Redis', icon: '🔴', color: 'from-red-400 to-pink-500' },
              { name: 'GraphQL', icon: '🔷', color: 'from-pink-400 to-purple-500' },
              { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-cyan-500' },
              { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-emerald-500' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.05 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h4 className="text-sm font-medium text-white">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}