import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building, 
  BookOpen, 
  MessageCircle, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart, 
  BarChart3, 
  Code, 
  Globe, 
  ArrowRight, 
  Star,
  FileText,
  Calendar,
  HelpCircle,
  Settings,
  Target,
  TrendingUp,
  Heart,
  Award,
  Rocket,
  Atom,
  Sparkles,
  Truck,
  Satellite,
  Cpu
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Core Pages',
      icon: Zap,
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'Company information' },
        { name: 'Contact', href: '/contact', description: 'Get in touch' },
        { name: 'Team', href: '/team', description: 'Our leadership team' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', description: 'Partnership programs' },
        { name: 'News', href: '/news', description: 'Latest updates' },
        { name: 'Blog', href: '/blog', description: 'Industry insights' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'White Papers', href: '/white-papers', description: 'Research papers' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Training', href: '/training', description: 'Learning programs' },
        { name: 'Support', href: '/support', description: 'Technical assistance' },
        { name: 'Help Center', href: '/help', description: 'Self-service help' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Documentation', href: '/documentation', description: 'Technical docs' },
        { name: 'Developers', href: '/developers', description: 'Developer resources' },
        { name: 'API', href: '/api', description: 'API documentation' },
        { name: 'Developer Portal', href: '/developer-portal', description: 'Developer tools' },
        { name: 'Status', href: '/status', description: 'Service status' },
        { name: 'Security', href: '/security', description: 'Security information' },
        { name: 'Privacy', href: '/privacy', description: 'Privacy policy' },
        { name: 'Terms', href: '/terms', description: 'Terms of service' },
        { name: 'Cookies', href: '/cookies', description: 'Cookie policy' },
        { name: 'Pricing', href: '/pricing', description: 'Service pricing' },
        { name: 'Request Quote', href: '/request-quote', description: 'Get a quote' },
        { name: 'Dashboard', href: '/dashboard', description: 'User dashboard' },
        { name: 'Login', href: '/login', description: 'User login' },
        { name: 'Signup', href: '/signup', description: 'User registration' }
      ]
    },
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'AI-powered business insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated compliance management' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales automation' },
        { name: 'AI Content Optimizer', href: '/services/ai-content-optimizer', description: 'Content optimization with AI' },
        { name: 'AI Project Manager', href: '/services/ai-project-manager', description: 'AI-powered project management' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', description: 'Automated customer service' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics', description: 'Advanced data analysis' },
        { name: 'AI Legal Assistant', href: '/services/ai-legal-assistant', description: 'Legal document analysis' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics', description: 'Medical imaging analysis' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'Marketing campaign automation' },
        { name: 'AI Recruitment Platform', href: '/services/ai-recruitment-platform', description: 'Intelligent hiring solutions' },
        { name: 'AI Financial Advisor', href: '/services/ai-financial-advisor', description: 'Financial planning assistance' }
      ]
    },
    {
      title: 'Cloud & DevOps Services',
      icon: Cloud,
      links: [
        { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'DevOps Automation', href: '/services/devops-automation', description: 'Automated deployment pipelines' },
        { name: 'Container Orchestration', href: '/services/container-orchestration', description: 'Kubernetes management' },
        { name: 'Serverless Architecture', href: '/services/serverless-architecture', description: 'Serverless solutions' },
        { name: 'Microservices Development', href: '/services/microservices-development', description: 'Scalable microservices' },
        { name: 'API Development', href: '/services/api-development', description: 'RESTful API services' },
        { name: 'Database Optimization', href: '/services/database-optimization', description: 'Database performance tuning' },
        { name: 'Infrastructure as Code', href: '/services/infrastructure-as-code', description: 'IaC implementation' },
        { name: 'Monitoring & Logging', href: '/services/monitoring-logging', description: 'System monitoring solutions' },
        { name: 'Disaster Recovery', href: '/services/disaster-recovery', description: 'Business continuity planning' },
        { name: 'Performance Optimization', href: '/services/performance-optimization', description: 'System performance tuning' },
        { name: 'Security Auditing', href: '/services/security-auditing', description: 'Security assessment services' }
      ]
    },
    {
      title: 'Cybersecurity Services',
      icon: Shield,
      links: [
        { name: 'Threat Detection', href: '/services/threat-detection', description: 'Advanced threat monitoring' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-security', description: 'Zero trust architecture' },
        { name: 'Compliance Management', href: '/services/compliance-management', description: 'Regulatory compliance' },
        { name: 'Incident Response', href: '/services/incident-response', description: 'Security incident handling' },
        { name: 'Penetration Testing', href: '/services/penetration-testing', description: 'Security vulnerability assessment' },
        { name: 'Security Training', href: '/services/security-training', description: 'Employee security awareness' },
        { name: 'Data Protection', href: '/services/data-protection', description: 'Data security solutions' },
        { name: 'Identity Management', href: '/services/identity-management', description: 'IAM solutions' },
        { name: 'Network Security', href: '/services/network-security', description: 'Network protection' },
        { name: 'Endpoint Security', href: '/services/endpoint-security', description: 'Device security' },
        { name: 'Cloud Security', href: '/services/cloud-security', description: 'Cloud protection' },
        { name: 'Security Consulting', href: '/services/security-consulting', description: 'Security strategy' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum solutions' },
        { name: 'Blockchain Development', href: '/services/blockchain-development', description: 'Blockchain applications' },
        { name: 'IoT Solutions', href: '/services/iot-solutions', description: 'Internet of Things' },
        { name: 'Edge Computing', href: '/services/edge-computing', description: 'Edge processing' },
        { name: '5G Applications', href: '/services/5g-applications', description: '5G technology' },
        { name: 'Augmented Reality', href: '/services/augmented-reality', description: 'AR development' },
        { name: 'Virtual Reality', href: '/services/virtual-reality', description: 'VR experiences' },
        { name: 'Metaverse Development', href: '/services/metaverse-development', description: 'Metaverse platforms' },
        { name: 'Autonomous Systems', href: '/services/autonomous-systems', description: 'Self-driving technology' },
        { name: 'Space Technology', href: '/services/space-technology', description: 'Space applications' },
        { name: 'Green Technology', href: '/services/green-technology', description: 'Sustainable solutions' },
        { name: 'Biotechnology', href: '/services/biotechnology', description: 'Bio-tech applications' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services and resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-400">{link.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}