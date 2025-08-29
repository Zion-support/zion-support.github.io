import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  Users, 
  DollarSign, 
  Zap, 
  Rocket, 
  Star, 
  Award,
  TrendingUp,
  Activity,
  Calendar,
  MessageCircle,
  BookOpen,
  Settings,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Heart,
  BarChart3,
  Target,
  Cpu,
  Network,
  Database,
  Monitor,
  Smartphone,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Server as ServerIcon,
  Users as UsersIcon,
  DollarSign as DollarIcon,
  Zap as ZapIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Award as AwardIcon,
  TrendingUp as TrendingIcon,
  Activity as ActivityIcon,
  Calendar as CalendarIcon,
  MessageCircle as MessageIcon,
  BookOpen as BookIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckIcon,
  ArrowRight as ArrowIcon,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Heart as HeartIcon,
  BarChart3 as ChartIcon,
  Target as TargetIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Database as DataIcon,
  Monitor as MonitorIcon,
  Smartphone as MobileIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Advanced artificial intelligence and machine learning solutions',
      services: [
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          description: 'Machine Learning & Data Science',
          icon: Brain,
          features: ['Predictive Analytics', 'Data Mining', 'Business Insights']
        },
        {
          name: 'AI Project Management',
          href: '/services/ai-project-management',
          description: 'Intelligent project orchestration',
          icon: Calendar,
          features: ['Task Prioritization', 'Risk Management', 'Team Collaboration']
        },
        {
          name: 'AI Workflow Orchestrator',
          href: '/services/ai-workflow-orchestrator',
          description: 'Intelligent Process Automation',
          icon: Settings,
          features: ['Process Optimization', 'Automated Workflows', 'Efficiency Gains']
        },
        {
          name: 'AI Data Governance',
          href: '/services/ai-data-governance',
          description: 'AI-Powered Data Protection',
          icon: Shield,
          features: ['Data Security', 'Compliance', 'Quality Management']
        },
        {
          name: 'AI Customer Success Platform',
          href: '/services/ai-customer-success-platform',
          description: 'Proactive Customer Engagement',
          icon: Users,
          features: ['Customer Insights', 'Success Metrics', 'Engagement Automation']
        },
        {
          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          description: 'AI-powered sales automation',
          icon: TrendingUp,
          features: ['Lead Scoring', 'Sales Intelligence', 'Pipeline Optimization']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security solutions and regulatory compliance',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          href: '/services/ai-cybersecurity-platform',
          description: 'Advanced threat protection',
          icon: Shield,
          features: ['Threat Detection', 'Zero Trust', 'Incident Response']
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          description: 'Regulatory compliance automation',
          icon: CheckCircle,
          features: ['Compliance Monitoring', 'Audit Automation', 'Risk Assessment']
        },
        {
          name: 'Zero Trust Network Architecture',
          href: '/services/zero-trust-network-architecture',
          description: 'Advanced security framework',
          icon: Lock,
          features: ['Identity Verification', 'Micro-segmentation', 'Access Control']
        },
        {
          name: 'SOC2 Compliance Tracker',
          href: '/services/soc2-compliance-tracker',
          description: 'Automated compliance management',
          icon: Award,
          features: ['SOC2 Compliance', 'Audit Trails', 'Security Controls']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Cloud infrastructure and development operations',
      services: [
        {
          name: 'Cloud DevOps',
          href: '/services/cloud-devops',
          description: 'Infrastructure & Automation',
          icon: Cloud,
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring']
        },
        {
          name: 'Cloud FinOps Optimizer',
          href: '/services/cloud-finops-optimizer',
          description: 'Cost optimization',
          icon: DollarSign,
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management']
        },
        {
          name: 'FinOps Advisor',
          href: '/services/finops-advisor',
          description: 'Financial operations',
          icon: DollarSign,
          features: ['Financial Planning', 'Cost Control', 'ROI Analysis']
        },
        {
          name: 'MLOps Pipeline',
          href: '/services/mlops-pipeline',
          description: 'Machine learning operations',
          icon: Settings,
          features: ['Model Training', 'Deployment', 'Monitoring']
        }
      ]
    },
    {
      title: 'Edge & IoT Solutions',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Edge computing and Internet of Things solutions',
      services: [
        {
          name: 'IoT & Edge Computing',
          href: '/services/iot-edge',
          description: 'Smart Devices & Networks',
          icon: Cpu,
          features: ['Device Management', 'Data Processing', 'Network Optimization']
        },
        {
          name: 'Edge Computing Platform',
          href: '/services/edge-computing-platform',
          description: 'Ultra-Low Latency Processing',
          icon: Server,
          features: ['Edge Analytics', 'Real-time Processing', 'Distributed Computing']
        },
        {
          name: 'Digital Twin',
          href: '/services/digital-twin',
          description: 'Simulation & Monitoring',
          icon: Monitor,
          features: ['Virtual Replication', 'Real-time Monitoring', 'Predictive Maintenance']
        }
      ]
    },
    {
      title: 'Specialized AI Solutions',
      icon: Brain,
      color: 'from-emerald-600 to-teal-600',
      description: 'Industry-specific AI solutions and analytics',
      services: [
        {
          name: 'AI Healthcare Analytics',
          href: '/services/ai-healthcare-analytics',
          description: 'Healthcare intelligence',
          icon: Heart,
          features: ['Clinical Decision Support', 'Patient Monitoring', 'Predictive Analytics']
        },
        {
          name: 'AI Financial Analytics',
          href: '/services/ai-financial-analytics',
          description: 'Financial insights',
          icon: DollarSign,
          features: ['Risk Assessment', 'Portfolio Optimization', 'Market Analysis']
        },
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          description: 'Business analytics',
          icon: BarChart3,
          features: ['Performance Metrics', 'Trend Analysis', 'Strategic Insights']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Scalable software-as-a-service solutions for specific niches',
      services: [
        {
          name: 'Affiliate Marketing Tracker',
          href: '/services/affiliate-marketing-tracker',
          description: 'Advanced affiliate tracking & analytics',
          icon: TrendingUp,
          features: ['Performance Tracking', 'Commission Management', 'Analytics Dashboard']
        },
        {
          name: 'Uptime SLA Monitor',
          href: '/services/uptime-sla-monitor',
          description: 'Professional uptime monitoring',
          icon: Activity,
          features: ['Uptime Monitoring', 'SLA Tracking', 'Alert Management']
        },
        {
          name: 'Employee Scheduling SaaS',
          href: '/services/employee-scheduling-saas',
          description: 'AI-powered workforce management',
          icon: Calendar,
          features: ['Shift Planning', 'Resource Allocation', 'Compliance Management']
        },
        {
          name: 'AI Support Helpdesk',
          href: '/services/ai-support-helpdesk',
          description: 'Intelligent customer support',
          icon: MessageCircle,
          features: ['Ticket Management', 'AI Responses', 'Knowledge Base']
        },
        {
          name: 'AI Content Generator',
          href: '/services/ai-content-generator',
          description: 'AI-powered content creation',
          icon: BookOpen,
          features: ['Content Creation', 'Brand Consistency', 'SEO Optimization']
        },
        {
          name: 'Website AI Chatbot',
          href: '/services/website-ai-chatbot',
          description: '24/7 on-site assistant',
          icon: MessageCircle,
          features: ['Customer Support', 'Lead Generation', 'Conversation Analytics']
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Project Management',
      href: '/services/ai-project-management',
      description: 'Revolutionize your project management with AI-driven insights and automation',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600',
      features: ['AI Task Prioritization', 'Predictive Risk Management', 'Team Collaboration']
    },
    {
      name: 'AI Cybersecurity Platform',
      href: '/services/ai-cybersecurity-platform',
      description: 'Protect your organization with next-generation AI cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Zero Trust Architecture', 'Behavioral Analytics', 'Automated Response']
    },
    {
      name: 'AI Financial Analytics',
      href: '/services/ai-financial-analytics',
      description: 'Transform financial decision-making with AI-powered insights',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      features: ['Predictive Modeling', 'Risk Assessment', 'Portfolio Optimization']
    }
  ];

  return (
    <>
      <SEO 
        title="Complete Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and micro SaaS services. From cybersecurity to healthcare analytics, discover innovative solutions for your business needs."
        canonical="/services-overview"
        url="https://ziontechgroup.com/services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Complete Services Overview
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                  Discover our comprehensive portfolio of AI-powered solutions, IT services, and innovative micro SaaS platforms designed to transform your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#services" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Services
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Featured Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our most innovative and impactful solutions that are transforming industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-slate-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Categories */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Organized by category for easy navigation and discovery
              </p>
            </div>
            
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-slate-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                        className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                        <ul className="space-y-1 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-slate-500 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          View Details <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our comprehensive portfolio of AI-powered solutions and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}