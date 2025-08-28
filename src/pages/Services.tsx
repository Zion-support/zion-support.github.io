import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Atom, 
  ShoppingCart, 
  Star,
  Rocket,
  Building,
  Heart,
  Truck,
  Network,
  Eye,
  Lock,
  BarChart3,
  MessageCircle,
  Target,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Cpu,
  PenTool,
  GitFork,
  Users,
  FileText,
  HelpCircle,
  DollarSign,
  Mail,
  Video,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServiceCategory {
  title: string;
  icon: any;
  description: string;
  color: string;
  services: Array<{
    name: string;
    path: string;
    description: string;
    featured?: boolean;
  }>;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Advanced AI-powered solutions and automation',
    color: 'from-zion-cyan to-zion-purple',
    services: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation', featured: true },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', description: 'AI-powered data governance', featured: true },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', description: 'AI-powered customer insights' },
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', description: 'Advanced analytics & ML insights' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', description: 'Automated content creation' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
      { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project optimization' },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', description: 'AI-powered financial risk assessment' },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', description: 'Automated code security analysis' },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', description: 'AI-driven DevOps automation' },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', description: 'Enhanced customer experience' },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing automation' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration platform' },
      { name: 'AI Quantum Financial Trading', path: '/services/ai-quantum-financial-trading', description: 'Quantum-AI trading platform' },
      { name: 'AI Autonomous Supply Chain', path: '/services/ai-autonomous-supply-chain', description: 'AI-powered supply chain automation' },
      { name: 'AI Cybersecurity Threat Intelligence', path: '/services/ai-cybersecurity-threat-intelligence', description: 'AI-powered threat detection' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infrastructure, automation, and cloud solutions',
    color: 'from-blue-500 to-cyan-500',
    services: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', description: 'Infrastructure automation & scaling', featured: true },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
      { name: 'IT Consulting', path: '/it-consulting', description: 'Technology strategy & planning' },
      { name: 'Cybersecurity Solutions', path: '/services/cybersecurity', description: 'Security & compliance services' },
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence & insights' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'End-to-end digital transformation' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Zap,
    description: 'Specialized software-as-a-service applications',
    color: 'from-green-500 to-emerald-500',
    services: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Lightweight customer relationship management', featured: true },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Comprehensive website insights' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile-first survey platform' },
      { name: 'Customer Feedback Surveys', path: '/services/customer-feedback-surveys', description: 'Customer insights & feedback' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Automated email campaigns' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio content transcription' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Streamlined returns processing' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Cutting-edge technology solutions',
    color: 'from-purple-500 to-pink-500',
    services: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions', featured: true },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Edge computing for IoT' },
      { name: 'Space Technology', path: '/services/space-tech', description: 'Space and aerospace solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Blockchain Solutions', path: '/services/blockchain', description: 'Blockchain & Web3 solutions' },
      { name: 'Green IT Solutions', path: '/services/green-it', description: 'Sustainable technology solutions' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Modern security architecture' },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Building,
    description: 'Industry-specific technology solutions',
    color: 'from-orange-500 to-red-500',
    services: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions', featured: true },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
      { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial technology solutions' },
      { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Smart manufacturing technology' },
      { name: 'Retail Solutions', path: '/retail-solutions', description: 'Retail technology solutions' },
      { name: 'Education Solutions', path: '/education-solutions', description: 'Educational technology solutions' },
      { name: 'Government Solutions', path: '/government-solutions', description: 'Public sector technology' },
      { name: 'Non-Profit Solutions', path: '/nonprofit-solutions', description: 'Technology for social impact' }
    ]
  },
  {
    title: 'Support & Resources',
    icon: HelpCircle,
    description: 'Training, support, and educational resources',
    color: 'from-indigo-500 to-purple-500',
    services: [
      { name: 'Training Programs', path: '/training', description: 'Professional training programs', featured: true },
      { name: 'Support Center', path: '/support', description: 'Technical support and help' },
      { name: 'Documentation', path: '/documentation', description: 'Technical documentation' },
      { name: 'API Documentation', path: '/api', description: 'API reference and guides' },
      { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources' },
      { name: 'White Papers', path: '/white-papers', description: 'Technical documentation' },
      { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
      { name: 'Research & Development', path: '/research', description: 'Innovation and research' }
    ]
  }
];

const featuredServices = [
  { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
  { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { name: 'Micro CRM', href: '/services/micro-crm', icon: Zap, color: 'from-green-500 to-emerald-500' },
  { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, color: 'from-purple-500 to-pink-500' }
];

const featuredCategories = [
  { title: 'AI & Machine Learning', desc: 'Advanced AI solutions and automation', href: '/ai-services' },
  { title: 'Cloud & Infrastructure', desc: 'Scalable cloud solutions', href: '/it-services' },
  { title: 'Micro SaaS Platform', desc: 'Specialized SaaS applications', href: '/micro-saas' }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 mr-2" />
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization
            </p>
          </motion.div>
          
          <div className="mt-8 text-center space-y-4">
            <Link to="/comprehensive-services-showcase-2025" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Our Comprehensive Services Showcase 2025
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <div>
              <Link to="/innovative-ai-services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold">
                <TrendingUp className="w-5 h-5 ml-2" />
                Discover Our Innovative AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((c) => (
              <Link key={c.title} to={c.href} className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left">
                <div className="text-xs uppercase tracking-wide text-cyan-300/70">Featured</div>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={service.path}
                        className={`block p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 ${
                          service.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10' : 'bg-zion-slate/30'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          {service.featured && (
                            <Star className="w-5 h-5 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}