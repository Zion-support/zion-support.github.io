import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Monitor,
  Smartphone,
  Globe,
  Lightbulb,
  Code,
  Palette,
  Search,
  MessageSquare,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Fingerprint,
  Key,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  WifiOff,
  BluetoothOff,
  SatelliteOff,
  RadioOff,
  SignalOff,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Brain,
  Cog,
  Settings,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  WrenchIcon,
  CogIcon,
  SettingsIcon,
  ToolIcon,
  HammerIcon,
  ScrewdriverIcon,
  WrenchIcon2,
  CogIcon2,
  SettingsIcon2,
  ToolIcon2,
  HammerIcon2,
  ScrewdriverIcon2,
  CreditCard
} from 'lucide-react';

const microSaaSServices = [
  {
    category: 'Platform Development',
    services: [
      {
        name: 'SaaS Architecture',
        description: 'Design scalable, multi-tenant SaaS platforms with modern architecture patterns',
        features: ['Multi-tenancy', 'Microservices', 'API-first design', 'Scalable infrastructure'],
        icon: Layers,
        color: 'from-blue-400 to-cyan-500'
      },
      {
        name: 'User Management',
        description: 'Comprehensive user authentication, authorization, and profile management systems',
        features: ['SSO integration', 'Role-based access', 'User provisioning', 'Security compliance'],
        icon: Users,
        color: 'from-green-400 to-emerald-500'
      },
      {
        name: 'Subscription Management',
        description: 'Flexible subscription plans with billing, upgrades, and downgrades',
        features: ['Billing integration', 'Plan management', 'Usage tracking', 'Payment processing'],
        icon: CreditCard,
        color: 'from-purple-400 to-pink-500'
      }
    ]
  },
  {
    category: 'Core Features',
    services: [
      {
        name: 'Dashboard & Analytics',
        description: 'Interactive dashboards with real-time data visualization and insights',
        features: ['Custom widgets', 'Real-time updates', 'Export capabilities', 'Mobile responsive'],
        icon: BarChart3,
        color: 'from-indigo-400 to-purple-500'
      },
      {
        name: 'Data Management',
        description: 'Robust data storage, processing, and management capabilities',
        features: ['Data validation', 'Import/export', 'Backup systems', 'Data security'],
        icon: Database,
        color: 'from-cyan-400 to-blue-500'
      },
      {
        name: 'Integration APIs',
        description: 'RESTful APIs and webhook systems for third-party integrations',
        features: ['API documentation', 'Rate limiting', 'Authentication', 'Webhook support'],
        icon: GitBranch,
        color: 'from-teal-400 to-cyan-500'
      }
    ]
  },
  {
    category: 'Business Features',
    services: [
      {
        name: 'Customer Portal',
        description: 'Self-service customer portal with account management and support',
        features: ['Account settings', 'Support tickets', 'Knowledge base', 'Billing history'],
        icon: Globe,
        color: 'from-orange-400 to-red-500'
      },
      {
        name: 'Reporting & Analytics',
        description: 'Advanced reporting with customizable metrics and business intelligence',
        features: ['Custom reports', 'Scheduled exports', 'Data visualization', 'KPI tracking'],
        icon: LineChart,
        color: 'from-yellow-400 to-orange-500'
      },
      {
        name: 'Workflow Automation',
        description: 'Automate business processes and user workflows',
        features: ['Process builder', 'Trigger automation', 'Approval workflows', 'Integration hooks'],
        icon: Workflow,
        color: 'from-red-400 to-pink-500'
      }
    ]
  },
  {
    category: 'Technical Features',
    services: [
      {
        name: 'Security & Compliance',
        description: 'Enterprise-grade security with compliance certifications',
        features: ['Data encryption', 'SOC 2 compliance', 'GDPR readiness', 'Security audits'],
        icon: Shield,
        color: 'from-green-400 to-emerald-500'
      },
      {
        name: 'Performance Optimization',
        description: 'High-performance systems with caching and optimization',
        features: ['CDN integration', 'Database optimization', 'Caching strategies', 'Load balancing'],
        icon: Zap,
        color: 'from-blue-400 to-indigo-500'
      },
      {
        name: 'Monitoring & Alerting',
        description: 'Comprehensive monitoring with proactive alerting and incident management',
        features: ['Real-time monitoring', 'Performance metrics', 'Alert systems', 'Incident response'],
        icon: Monitor,
        color: 'from-purple-400 to-pink-500'
      }
    ]
  }
];

const developmentPhases = [
  {
    phase: 'Discovery & Planning',
    duration: '1-2 weeks',
    deliverables: ['Requirements gathering', 'Technical architecture', 'Project roadmap', 'Resource planning'],
    icon: Search,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    phase: 'Design & Prototyping',
    duration: '2-3 weeks',
    deliverables: ['UI/UX design', 'Technical specifications', 'Interactive prototypes', 'Design system'],
    icon: Palette,
    color: 'from-purple-400 to-pink-500'
  },
  {
    phase: 'Development',
    duration: '8-16 weeks',
    deliverables: ['Core platform', 'User management', 'Core features', 'API development'],
    icon: Code,
    color: 'from-green-400 to-emerald-500'
  },
  {
    phase: 'Testing & QA',
    duration: '2-3 weeks',
    deliverables: ['Unit testing', 'Integration testing', 'User acceptance', 'Performance testing'],
    icon: Shield,
    color: 'from-orange-400 to-red-500'
  },
  {
    phase: 'Deployment & Launch',
    duration: '1-2 weeks',
    deliverables: ['Production deployment', 'User training', 'Documentation', 'Go-live support'],
    icon: Rocket,
    color: 'from-indigo-400 to-purple-500'
  }
];

const technologyStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    icon: Monitor,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Java', 'Go', 'Ruby on Rails'],
    icon: Server,
    color: 'from-green-400 to-emerald-500'
  },
  {
    category: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    icon: Database,
    color: 'from-purple-400 to-pink-500'
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    icon: Cloud,
    color: 'from-indigo-400 to-purple-500'
  },
  {
    category: 'Security',
    technologies: ['OAuth 2.0', 'JWT', 'HTTPS', 'Data encryption', 'Security headers'],
    icon: Lock,
    color: 'from-red-400 to-pink-500'
  },
  {
    category: 'Monitoring',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'Datadog'],
    icon: Activity,
    color: 'from-yellow-400 to-orange-500'
  }
];

const pricingModels = [
  {
    model: 'Fixed Price',
    description: 'Predictable pricing for well-defined project scope',
    pros: ['Budget certainty', 'Clear deliverables', 'Fixed timeline'],
    cons: ['Less flexibility', 'Change requests cost extra'],
    bestFor: 'Well-defined requirements with clear scope'
  },
  {
    model: 'Time & Materials',
    description: 'Flexible pricing based on actual development time',
    pros: ['Adaptable to changes', 'Transparent billing', 'Iterative development'],
    cons: ['Uncertain final cost', 'Requires active management'],
    bestFor: 'Evolving requirements and agile development'
  },
  {
    model: 'Retainer Model',
    description: 'Ongoing development and maintenance services',
    pros: ['Consistent availability', 'Long-term partnership', 'Priority support'],
    cons: ['Monthly commitment', 'May include unused hours'],
    bestFor: 'Ongoing development and maintenance needs'
  }
];

const successStories = [
  {
    company: 'TechStart Inc.',
    industry: 'SaaS Platform',
    challenge: 'Needed a scalable user management system for 10,000+ users',
    solution: 'Built custom SaaS platform with multi-tenancy and advanced user management',
    results: ['50% reduction in user onboarding time', '99.9% uptime achieved', 'Scaled to 25,000 users'],
    icon: Users,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    company: 'DataFlow Solutions',
    industry: 'Data Analytics',
    challenge: 'Required real-time dashboard for complex data visualization',
    solution: 'Developed interactive dashboard with real-time updates and custom widgets',
    results: ['Real-time data processing', 'Custom reporting capabilities', 'Improved decision making'],
    icon: BarChart3,
    color: 'from-purple-400 to-pink-500'
  },
  {
    company: 'SecureNet Systems',
    industry: 'Cybersecurity',
    challenge: 'Needed compliance-ready platform with enterprise security',
    solution: 'Built SOC 2 compliant platform with advanced security features',
    results: ['SOC 2 certification achieved', 'Zero security incidents', 'Enterprise client acquisition'],
    icon: Shield,
    color: 'from-green-400 to-emerald-500'
  }
];

export default function MicroSaaS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="MicroSaaS Development - Zion Tech Group"
        description="Build scalable, feature-rich SaaS platforms with our expert development team. From concept to launch, we deliver enterprise-grade solutions."
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
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              MicroSaaS Development
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business idea into a scalable SaaS platform. We build feature-rich, enterprise-grade solutions that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-400/25"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-colors duration-300"
              >
                Talk to Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and successful delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">{phase.phase}</h4>
                <div className="text-emerald-400 font-medium mb-3">{phase.duration}</div>
                
                <div className="space-y-2 text-left">
                  {phase.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 text-xs">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MicroSaaS Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive SaaS Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to build a successful, scalable SaaS platform
            </p>
          </motion.div>

          {microSaaSServices.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for performance, scalability, and security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{tech.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Models
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the pricing structure that best fits your project needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingModels.map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{model.model}</h4>
                <p className="text-slate-300 mb-4">{model.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-emerald-400 font-medium mb-2">Pros:</h5>
                  <ul className="space-y-1">
                    {model.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-red-400 font-medium mb-2">Cons:</h5>
                  <ul className="space-y-1">
                    {model.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-sm text-slate-400">
                  <span className="font-medium">Best for:</span> {model.bestFor}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've helped companies build successful SaaS platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${story.color} rounded-lg flex items-center justify-center`}>
                    <story.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{story.company}</h4>
                    <p className="text-slate-400 text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-emerald-400 font-medium mb-2">Challenge:</h5>
                  <p className="text-slate-300 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-emerald-400 font-medium mb-2">Solution:</h5>
                  <p className="text-slate-300 text-sm">{story.solution}</p>
                </div>
                
                <div>
                  <h5 className="text-emerald-400 font-medium mb-2">Results:</h5>
                  <ul className="space-y-1">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            transition={{ duration: 0.6, delay: 2.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your vision and create a roadmap to bring your SaaS idea to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-400/25"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

