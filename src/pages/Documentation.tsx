import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  BookOpen,
  Code,
  FileText,
  Video,
  Download,
  Users,
  Zap,
  Shield,
  Cloud,
  Brain,
  Atom,
  Rocket,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  Network,
  Briefcase,
  DollarSign,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Cpu,
  Database,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Server,
  Lock,
  BarChart3,
  Globe,
  Award,
  Target,
  Lightbulb,
  Handshake,
  ChevronDown,
  ChevronUp,
  Tag,
  ExternalLink,
  Github,
  Terminal,
  Settings,
  Database as DatabaseIcon,
  Api,
  Key,
  Lock as LockIcon,
  HelpCircle,
  MessageCircle,
  Book,
  Play,
  Download as DownloadIcon,
  Copy,
  Check as CheckIcon
} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  articles: number;
  color: string;
  subsections: DocSubsection[];
}

interface DocSubsection {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToRead: string;
  tags: string[];
}

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and onboarding information',
      icon: Rocket,
      articles: 15,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      subsections: [
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          difficulty: 'beginner',
          timeToRead: '5 min',
          tags: ['onboarding', 'setup', 'first-steps']
        },
        {
          id: 'installation',
          title: 'Installation & Setup',
          description: 'Complete installation guide for all platforms and environments',
          difficulty: 'beginner',
          timeToRead: '15 min',
          tags: ['installation', 'setup', 'configuration']
        },
        {
          id: 'first-project',
          title: 'Your First Project',
          description: 'Build your first AI application with step-by-step guidance',
          difficulty: 'beginner',
          timeToRead: '20 min',
          tags: ['tutorial', 'first-project', 'examples']
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and reference guides',
      icon: Api,
      articles: 28,
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      subsections: [
        {
          id: 'authentication',
          title: 'Authentication',
          description: 'Learn how to authenticate with our APIs using various methods',
          difficulty: 'beginner',
          timeToRead: '10 min',
          tags: ['authentication', 'security', 'api-keys']
        },
        {
          id: 'endpoints',
          title: 'API Endpoints',
          description: 'Complete reference of all available API endpoints and parameters',
          difficulty: 'intermediate',
          timeToRead: '45 min',
          tags: ['endpoints', 'parameters', 'reference']
        },
        {
          id: 'rate-limits',
          title: 'Rate Limits & Quotas',
          description: 'Understand API rate limits and how to handle them gracefully',
          difficulty: 'intermediate',
          timeToRead: '8 min',
          tags: ['rate-limits', 'quotas', 'best-practices']
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Documentation for AI and machine learning services',
      icon: Brain,
      articles: 22,
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      subsections: [
        {
          id: 'ai-platforms',
          title: 'AI Platform Integration',
          description: 'Integrate AI services into your applications and workflows',
          difficulty: 'intermediate',
          timeToRead: '25 min',
          tags: ['AI', 'integration', 'platforms']
        },
        {
          id: 'model-training',
          title: 'Custom Model Training',
          description: 'Train and deploy custom AI models for your specific use cases',
          difficulty: 'advanced',
          timeToRead: '60 min',
          tags: ['training', 'custom-models', 'deployment']
        },
        {
          id: 'ai-workflows',
          title: 'AI Workflow Automation',
          description: 'Automate complex AI workflows and decision-making processes',
          difficulty: 'advanced',
          timeToRead: '40 min',
          tags: ['workflows', 'automation', 'decision-making']
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Quantum computing platform documentation and guides',
      icon: Atom,
      articles: 18,
      color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      subsections: [
        {
          id: 'quantum-basics',
          title: 'Quantum Computing Basics',
          description: 'Introduction to quantum computing concepts and principles',
          difficulty: 'beginner',
          timeToRead: '30 min',
          tags: ['quantum', 'basics', 'concepts']
        },
        {
          id: 'quantum-algorithms',
          title: 'Quantum Algorithms',
          description: 'Implement quantum algorithms for various computational problems',
          difficulty: 'advanced',
          timeToRead: '90 min',
          tags: ['algorithms', 'quantum', 'implementation']
        },
        {
          id: 'quantum-simulation',
          title: 'Quantum Simulation',
          description: 'Run quantum simulations and analyze results',
          difficulty: 'intermediate',
          timeToRead: '35 min',
          tags: ['simulation', 'quantum', 'analysis']
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Security platform documentation and best practices',
      icon: Shield,
      articles: 16,
      color: 'bg-red-500/20 text-red-400 border-red-500/30',
      subsections: [
        {
          id: 'security-setup',
          title: 'Security Setup',
          description: 'Configure security features and compliance requirements',
          difficulty: 'intermediate',
          timeToRead: '25 min',
          tags: ['security', 'compliance', 'configuration']
        },
        {
          id: 'threat-detection',
          title: 'Threat Detection',
          description: 'Set up and configure AI-powered threat detection systems',
          difficulty: 'advanced',
          timeToRead: '45 min',
          tags: ['threat-detection', 'AI', 'security']
        },
        {
          id: 'compliance',
          title: 'Compliance & Auditing',
          description: 'Meet regulatory requirements and maintain audit trails',
          difficulty: 'intermediate',
          timeToRead: '30 min',
          tags: ['compliance', 'auditing', 'regulations']
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Cloud services and infrastructure documentation',
      icon: Cloud,
      articles: 25,
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      subsections: [
        {
          id: 'cloud-deployment',
          title: 'Cloud Deployment',
          description: 'Deploy applications to various cloud platforms and environments',
          difficulty: 'intermediate',
          timeToRead: '35 min',
          tags: ['deployment', 'cloud', 'infrastructure']
        },
        {
          id: 'scaling',
          title: 'Scaling & Performance',
          description: 'Optimize performance and scale your applications effectively',
          difficulty: 'advanced',
          timeToRead: '50 min',
          tags: ['scaling', 'performance', 'optimization']
        },
        {
          id: 'monitoring',
          title: 'Monitoring & Observability',
          description: 'Monitor applications and infrastructure with comprehensive tools',
          difficulty: 'intermediate',
          timeToRead: '25 min',
          tags: ['monitoring', 'observability', 'logging']
        }
      ]
    }
  ];

  const filteredSections = docSections.filter(section => {
    if (selectedSection !== 'all' && section.id !== selectedSection) return false;
    if (searchQuery) {
      return section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             section.subsections.some(sub => 
               sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               sub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
               sub.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
             );
    }
    return true;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const quickLinks = [
    {
      icon: BookOpen,
      title: 'Quick Start Guide',
      description: 'Get started in 5 minutes',
      link: '/documentation/quick-start',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation',
      link: '/documentation/api-reference',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/documentation/video-tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      title: 'SDKs & Tools',
      description: 'Download development tools',
      link: '/documentation/sdks-tools',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resources = [
    {
      icon: Github,
      title: 'GitHub Repositories',
      description: 'Open source code and examples',
      link: 'https://github.com/ziontechgroup',
      external: true
    },
    {
      icon: Terminal,
      title: 'CLI Tools',
      description: 'Command line interface tools',
      link: '/documentation/cli-tools',
      external: false
    },
    {
      icon: DatabaseIcon,
      title: 'Data Schemas',
      description: 'Database and API schemas',
      link: '/documentation/schemas',
      external: false
    },
    {
      icon: Settings,
      title: 'Configuration',
      description: 'Configuration guides and examples',
      link: '/documentation/configuration',
      external: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Developer <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Everything you need to build with Zion Tech Group services. 
                From quick start guides to advanced API references.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation, APIs, or guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>
            <p className="text-xl text-gray-300">Get started quickly with these essential resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={link.link}
                  className="block bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Documentation Sections</h2>
            <p className="text-xl text-gray-300">Explore our comprehensive documentation organized by topic</p>
          </motion.div>

          <div className="space-y-6">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{section.title}</h3>
                        <p className="text-gray-300">{section.description}</p>
                        <p className="text-sm text-gray-400 mt-1">{section.articles} articles</p>
                      </div>
                    </div>
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-slate-700/50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {section.subsections.map((subsection) => (
                        <div
                          key={subsection.id}
                          className="bg-slate-700/20 rounded-lg p-4 border border-slate-600/50 hover:border-cyan-500/30 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white">{subsection.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(subsection.difficulty)}`}>
                              {subsection.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{subsection.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{subsection.timeToRead}</span>
                            <div className="flex flex-wrap gap-1">
                              {subsection.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-slate-600/50 text-gray-300 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Developer Resources</h2>
            <p className="text-xl text-gray-300">Additional tools and resources to help you build</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={resource.link}
                  target={resource.external ? '_blank' : '_self'}
                  rel={resource.external ? 'noopener noreferrer' : ''}
                  className="block bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                  {resource.external && (
                    <ExternalLink className="w-4 h-4 text-cyan-400 mx-auto mt-2" />
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our developer support team is here to help. 
              Get answers to your questions and guidance on implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/help"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Visit Help Center
              </a>
              <a
                href="mailto:dev-support@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Developer Support
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300">Available 24/7</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300">dev-support@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;