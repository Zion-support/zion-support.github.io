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
  ArrowRight,
  Sparkles
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
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: Shield,
    description: 'Security, compliance, and data protection',
    color: 'from-red-500 to-orange-500',
    services: [
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', description: 'AI-powered security platform', featured: true },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Content security policy' },
      { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'Data subject rights portal' },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', description: 'Zero trust security model' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated compliance management' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and cutting-edge tech',
    color: 'from-purple-500 to-pink-500',
    services: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions', featured: true },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Edge computing infrastructure' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space technology solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Digital twin technology' },
      { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Digital transformation consulting' }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    description: 'Specialized software-as-a-service solutions',
    color: 'from-green-500 to-emerald-500',
    services: [
      { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management', featured: true },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support platform' },
      { name: 'Website Analytics', path: '/services/website-analytics', description: 'Website performance analytics' },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', description: 'IT support management' },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', description: 'Affiliate program management' },
      { name: 'Mobile Survey', path: '/services/mobile-survey', description: 'Mobile survey platform' },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', description: 'Audio transcription service' },
      { name: 'Email Sequencer', path: '/services/email-sequencer', description: 'Email automation platform' },
      { name: 'Returns Management', path: '/services/returns-management', description: 'Returns processing system' },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', description: 'AI content creation platform' }
    ]
  }
];

const featuredServices = [
  { name: 'AI Services', href: '/ai-services', icon: Brain, color: 'from-cyan-500 to-blue-500' },
  { name: 'IT Services', href: '/it-services', icon: Cpu, color: 'from-blue-500 to-indigo-500' },
  { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart, color: 'from-green-500 to-emerald-500' },
  { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
  { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-sky-500 to-cyan-500' },
  { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, color: 'from-purple-500 to-pink-500' }
];

const featuredCategories = [
  { title: 'AI & Machine Learning', desc: 'Advanced AI solutions and automation', href: '/ai-services' },
  { title: 'Cloud & Infrastructure', desc: 'Scalable cloud solutions and DevOps', href: '/services/cloud-devops' },
  { title: 'Cybersecurity', desc: 'Comprehensive security solutions', href: '/services/cybersecurity' }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <Link to="/revolutionary-services-2030" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Discover Our Revolutionary Services 2030
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
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={service.path}
                        className="block group bg-zion-slate/50 rounded-xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-zion-slate/70"
                      >
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Learn More</span>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/revolutionary-services-2030"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}