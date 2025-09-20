import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Globe
  Brain
  Cloud
  Shield
  Rocket
  Atom
  Zap
  Users
  Building
  Code
  Database
  Network
  Lock
  Eye
  Heart
  Factory
  ShoppingCart
  Leaf
  Gamepad2
  Coins
  Satellite
  TrendingUp
  BarChart3
  PenTool
  Server
  Smartphone
  Cpu
  Truck
  FileText
  BookOpen
  MessageCircle
  HelpCircle
  DollarSign
  Gauge
  Workflow
  Star
  Target
  CheckCircle
  ArrowRight
  Phone
  Mail
  MapPin
  Calendar
  Clock
  Award
  ChevronRight
} from "lucide-react"
import { SEO } from "@/components/SEO"
interface SitemapSection {
  tit,
  l: e: string,ic,
  o: n: React.ComponentType<any>,descripti,
  o: n: string,lin,
  k: s: SitemapLink[[],
  ],
  }

interface SitemapLink {
  na,
  m: e: string,pa,
  t: h: string
  description?: string
  featured?: boolean
}

const,
  Sitema: p: React.FC = () () => {
  const,
  sitemapSection: s: SitemapSection[] = [
  {
  titl,
  e: 'Main Pages',ic,
  o: n: Globe,descripti,
  o: n: 'Core website pages and information',lin,
  k: s: [
  { nam,
  e: 'Home', pa,
  t: h: '/', descripti,
  o: n: 'Main landing page', featur,
  e: d: true },
  },
  { na,
  m: e: 'About Us', pa,
  t: h: '/about', descripti,
  o: n: 'Company information and mission', featur,
  e: d: true },
  },
  { na,
  m: e: 'Our Team', pa,
  t: h: '/team', descripti,
  o: n: 'Meet our leadership and experts', featur,
  e: d: true },
  },
  { na,
  m: e: 'Contact', pa,
  t: h: '/contact', descripti,
  o: n: 'Get in touch with us', featur,
  e: d: true },
  },
  { na,
  m: e: 'News', pa,
  t: h: '/news', descripti,
  o: n: 'Latest updates and announcements', featur,
  e: d: true },
  },
  { na,
  m: e: 'Blog', pa,
  t: h: '/blog', descripti,
  o: n: 'Industry insights and articles' },
  },
  { na,
  m: e: 'Careers', pa,
  t: h: '/careers', descripti,
  o: n: 'Job opportunities' },
  },
  { na,
  m: e: 'Partners', pa,
  t: h: '/partners', descripti,
  o: n: 'Strategic partnerships' },
  },
  { na,
  m: e: 'FAQ', pa,
  t: h: '/faq', descripti,
  o: n: 'Frequently asked questions' },
  },
  { na,
  m: e: 'Search', pa,
  t: h: '/search', descripti,
  o: n: 'Search our content and services' },
  },
  ],
  },
  {
  tit,
  l: e: 'AI & Machine Learning',ic,
  o: n: Brain,descripti,
  o: n: 'Artificial intelligence and machine learning solutions',lin,
  k: s: [
  { nam,
  e: 'AI Services Overview', pa,
  t: h: '/ai-services', descripti,
  o: n: 'Comprehensive AI solutions', featur,
  e: d: true },
  },
  { na,
  m: e: 'AI Business Intelligence', pa,
  t: h: '/services/ai-business-intelligence', descripti,
  o: n: 'Advanced analytics and insights' },
  },
  { na,
  m: e: 'AI Compliance Assistant', pa,
  t: h: '/services/ai-compliance-assistant', descripti,
  o: n: 'Automated regulatory compliance' },
  },
  { na,
  m: e: 'AI Sales Copilot', pa,
  t: h: '/services/ai-sales-copilot', descripti,
  o: n: 'Intelligent sales optimization' },
  },
  { na,
  m: e: 'AI-Powered SEO', pa,
  t: h: '/services/ai-seo', descripti,
  o: n: 'Machine learning SEO optimization' },
  },
  { na,
  m: e: 'Interview Assessment AI', pa,
  t: h: '/services/interview-assessment', descripti,
  o: n: 'AI-powered candidate evaluation' },
  },
  { na,
  m: e: 'AI Content Generator', pa,
  t: h: '/services/ai-content-generator', descripti,
  o: n: 'Automated content creation' },
  },
  { na,
  m: e: 'AI Customer Support', pa,
  t: h: '/services/ai-customer-support', descripti,
  o: n: 'Intelligent support automation' },
  },
  { na,
  m: e: 'AI Autonomous Research', pa,
  t: h: '/services/ai-autonomous-research-assistant', descripti,
  o: n: 'Automated research capabilities' },
  },
  { na,
  m: e: 'AI Healthcare Platform', pa,
  t: h: '/services/ai-healthcare-platform', descripti,
  o: n: 'Healthcare AI solutions' },
  },
  { na,
  m: e: 'AI Project Management', pa,
  t: h: '/services/ai-project-management', descripti,
  o: n: 'AI-driven project management' },
  },
  { na,
  m: e: 'AI Marketing Automation', pa,
  t: h: '/services/ai-marketing-automation', descripti,
  o: n: 'Marketing automation with AI' },
  },
  ],
  },
  {
  tit,
  l: e: 'Quantum Computing',ic,
  o: n: Atom,descripti,
  o: n: 'Next-generation quantum computing solutions',lin,
  k: s: [
  { nam,
  e: 'Quantum Computing Services', pa,
  t: h: '/services/quantum-computing', descripti,
  o: n: 'Quantum computing solutions', featur,
  e: d: true },
  },
  { na,
  m: e: 'Quantum AI Hybrid Platform', pa,
  t: h: '/services/ai-quantum-hybrid-platform', descripti,
  o: n: 'AI and quantum computing integration' },
  },
  { na,
  m: e: 'Quantum Machine Learning', pa,
  t: h: '/services/quantum-machine-learning', descripti,
  o: n: 'Quantum-enhanced ML algorithms' },
  },
  { na,
  m: e: 'Quantum Financial Trading', pa,
  t: h: '/services/quantum-financial-trading', descripti,
  o: n: 'Quantum algorithms for finance' },
  },
  { na,
  m: e: 'Quantum Neural Networks', pa,
  t: h: '/services/quantum-neural-network-platform', descripti,
  o: n: 'Quantum neural network solutions' },
  },
  { na,
  m: e: 'Quantum Edge Computing', pa,
  t: h: '/services/quantum-edge-computing-platform', descripti,
  o: n: 'Edge computing with quantum capabilities' },
  },
  ],
  },
  {
  tit,
  l: e: 'Cloud & DevOps',ic,
  o: n: Cloud,descripti,
  o: n: 'Cloud infrastructure and DevOps automation',lin,
  k: s: [
  { nam,
  e: 'Cloud DevOps Services', pa,
  t: h: '/services/cloud-devops', descripti,
  o: n: 'Cloud and DevOps solutions', featur,
  e: d: true },
  },
  { na,
  m: e: 'IT Infrastructure', pa,
  t: h: '/services/it-infrastructure', descripti,
  o: n: 'Enterprise infrastructure solutions' },
  },
  { na,
  m: e: 'FinOps Advisor', pa,
  t: h: '/services/finops-advisor', descripti,
  o: n: 'Cloud cost optimization' },
  },
  { na,
  m: e: 'Cloud FinOps Optimizer', pa,
  t: h: '/services/cloud-finops-optimizer', descripti,
  o: n: 'Financial operations automation' },
  },
  { na,
  m: e: 'Cloud Migration', pa,
  t: h: '/services/cloud-migration', descripti,
  o: n: 'Seamless cloud transitions' },
  },
  { na,
  m: e: 'Container Orchestration', pa,
  t: h: '/services/kubernetes', descripti,
  o: n: 'Kubernetes and container management' },
  },
  { na,
  m: e: 'Infrastructure as Code', pa,
  t: h: '/services/infrastructure-as-code', descripti,
  o: n: 'Automated infrastructure deployment' },
  },
  ],
  },
  {
  tit,
  l: e: 'Cybersecurity',ic,
  o: n: Shield,descripti,
  o: n: 'Advanced security and compliance solutions',lin,
  k: s: [
  { nam,
  e: 'Cybersecurity Services', pa,
  t: h: '/services/cybersecurity', descripti,
  o: n: 'Comprehensive security solutions', featur,
  e: d: true },
  },
  { na,
  m: e: 'AI Cybersecurity Platform', pa,
  t: h: '/services/ai-cybersecurity-platform', descripti,
  o: n: 'AI-powered threat detection' },
  },
  { na,
  m: e: 'Security Headers & CSP', pa,
  t: h: '/services/security-headers-csp', descripti,
  o: n: 'Web security hardening' },
  },
  { na,
  m: e: 'DSR Privacy Portal', pa,
  t: h: '/services/dsr-portal', descripti,
  o: n: 'GDPR/CCPA compliance portal' },
  },
  { na,
  m: e: 'Zero Trust Network', pa,
  t: h: '/services/zero-trust-network-access', descripti,
  o: n: 'Zero trust security architecture' },
  },
  { na,
  m: e: 'Threat Intelligence', pa,
  t: h: '/services/ai-autonomous-threat-intelligence', descripti,
  o: n: 'AI-powered threat analysis' },
  },
  { na,
  m: e: 'Mobile Security', pa,
  t: h: '/services/ai-autonomous-mobile-security', descripti,
  o: n: 'Mobile device security' },
  },
  { na,
  m: e: 'Forensics & Investigation', pa,
  t: h: '/services/ai-autonomous-forensics', descripti,
  o: n: 'Digital forensics with AI' },
  },
  ],
  },
  {
  tit,
  l: e: 'Digital Transformation',ic,
  o: n: Rocket,descripti,
  o: n: 'Strategic technology consulting and transformation',lin,
  k: s: [
  { nam,
  e: 'Digital Transformation', pa,
  t: h: '/services/digital-transformation', descripti,
  o: n: 'Strategic transformation consulting', featur,
  e: d: true },
  },
  { na,
  m: e: 'IT Consulting', pa,
  t: h: '/services/it-consulting', descripti,
  o: n: 'Technology strategy and planning' },
  },
  { na,
  m: e: 'Digital Twin', pa,
  t: h: '/services/digital-twin', descripti,
  o: n: 'Virtual system replicas' },
  },
  { na,
  m: e: 'Business Intelligence', pa,
  t: h: '/services/business-intelligence', descripti,
  o: n: 'Performance metrics and reporting' },
  },
  { na,
  m: e: 'Data Analytics', pa,
  t: h: '/services/data-analytics', descripti,
  o: n: 'Business intelligence and insights' },
  },
  { na,
  m: e: 'Process Optimization', pa,
  t: h: '/services/process-optimization', descripti,
  o: n: 'Workflow and process improvement' },
  },
  { na,
  m: e: 'Change Management', pa,
  t: h: '/services/change-management', descripti,
  o: n: 'Organizational change support' },
  },
  ],
  },
  {
  tit,
  l: e: 'Micro SaaS Solutions',ic,
  o: n: Zap,descripti,
  o: n: 'Affordable software solutions for small businesses',lin,
  k: s: [
  { nam,
  e: 'Micro SaaS Platform', pa,
  t: h: '/micro-saas', descripti,
  o: n: 'Micro SaaS solutions overview', featur,
  e: d: true },
  },
  { na,
  m: e: 'Micro CRM', pa,
  t: h: '/services/micro-crm', descripti,
  o: n: 'Customer relationship management' },
  },
  { na,
  m: e: 'Helpdesk Platform', pa,
  t: h: '/services/helpdesk', descripti,
  o: n: 'Customer support system' },
  },
  { na,
  m: e: 'Project Management', pa,
  t: h: '/services/project-management', descripti,
  o: n: 'Project tracking and collaboration' },
  },
  { na,
  m: e: 'Inventory Management', pa,
  t: h: '/services/inventory-management', descripti,
  o: n: 'Stock and inventory tracking' },
  },
  { na,
  m: e: 'Accounting Software', pa,
  t: h: '/services/accounting-software', descripti,
  o: n: 'Financial management tools' },
  },
  { na,
  m: e: 'HR Platform', pa,
  t: h: '/services/ai-hr-platform', descripti,
  o: n: 'Human resources management' },
  },
  ],
  },
  {
  tit,
  l: e: 'Emerging Technologies',ic,
  o: n: TrendingUp,descripti,
  o: n: 'Cutting-edge and future technologies',lin,
  k: s: [
  { nam,
  e: 'IoT Edge Computing', pa,
  t: h: '/services/iot-edge-computing', descripti,
  o: n: 'Smart device networks', featur,
  e: d: true },
  },
  { na,
  m: e: 'Blockchain Solutions', pa,
  t: h: '/services/blockchain', descripti,
  o: n: 'Distributed ledger technology' },
  },
  { na,
  m: e: 'Space Technology', pa,
  t: h: '/services/space-tech', descripti,
  o: n: 'Space and satellite solutions' },
  },
  { na,
  m: e: 'Metaverse Development', pa,
  t: h: '/services/metaverse-development', descripti,
  o: n: 'Virtual world creation' },
  },
  { na,
  m: e: 'Sustainable Technology', pa,
  t: h: '/services/sustainable-technology', descripti,
  o: n: 'Green technology solutions' },
  },
  { na,
  m: e: 'Green Computing', pa,
  t: h: '/services/green-computing', descripti,
  o: n: 'Energy-efficient computing' },
  },
  { na,
  m: e: '5G Solutions', pa,
  t: h: '/services/5g-solutions', descripti,
  o: n: 'Next-generation network infrastructure' },
  },
  ],
  },
  {
  tit,
  l: e: 'Industry Solutions',ic,
  o: n: Building,descripti,
  o: n: 'Industry-specific technology solutions',lin,
  k: s: [
  { nam,
  e: 'Healthcare Solutions', pa,
  t: h: '/solutions/healthcare', descripti,
  o: n: 'Healthcare technology solutions', featur,
  e: d: true },
  },
  { na,
  m: e: 'Financial Services', pa,
  t: h: '/solutions/financial', descripti,
  o: n: 'Fintech and banking solutions' },
  },
  { na,
  m: e: 'Manufacturing', pa,
  t: h: '/solutions/manufacturing', descripti,
  o: n: 'Industry 4.0 and smart manufacturing' },
  },
  { na,
  m: e: 'Retail & E-commerce', pa,
  t: h: '/solutions/retail', descripti,
  o: n: 'Digital retail transformation' },
  },
  { na,
  m: e: 'Education Technology', pa,
  t: h: '/solutions/education', descripti,
  o: n: 'EdTech and learning platforms' },
  },
  { na,
  m: e: 'Government Solutions', pa,
  t: h: '/solutions/government', descripti,
  o: n: 'Public sector technology' },
  },
  { na,
  m: e: 'Energy & Utilities', pa,
  t: h: '/solutions/energy', descripti,
  o: n: 'Energy sector technology' },
  },
  ],
  },
  {
  tit,
  l: e: 'Resources & Support',ic,
  o: n: BookOpen,descripti,
  o: n: 'Documentation, support, and learning resources'
      lin,
  k: s: [
  { nam,
  e: 'Help Center', pa,
  t: h: '/help', descripti,
  o: n: 'Comprehensive help and support', featur,
  e: d: true },
  },
  { na,
  m: e: 'Case Studies', pa,
  t: h: '/case-studies', descripti,
  o: n: 'Success stories and examples' },
  },
  { na,
  m: e: 'Documentation', pa,
  t: h: '/docs', descripti,
  o: n: 'Technical documentation' },
  },
  { na,
  m: e: 'API Reference', pa,
  t: h: '/api', descripti,
  o: n: 'API documentation and guides' },
  },
  { na,
  m: e: 'Training Programs', pa,
  t: h: '/training', descripti,
  o: n: 'Skill development courses' },
  },
  { na,
  m: e: 'Webinars', pa,
  t: h: '/webinars', descripti,
  o: n: 'Educational webinars and events' },
  },
  { na,
  m: e: 'White Papers', pa,
  t: h: '/white-papers', descripti,
  o: n: 'Industry research and insights' },
  },
  { na,
  m: e: 'Video Tutorials', pa,
  t: h: '/tutorials', descripti,
  o: n: 'Step-by-step video guides' },
  },
  ],
  },
  {
  tit,
  l: e: 'Company & Legal',ic,
  o: n: Users,descripti,
  o: n: 'Company information and legal documents',lin,
  k: s: [
  { nam,
  e: 'Privacy Policy', pa,
  t: h: '/privacy', descripti,
  o: n: 'Data privacy and protection', featur,
  e: d: true },
  },
  { na,
  m: e: 'Terms of Service', pa,
  t: h: '/terms', descripti,
  o: n: 'Service terms and conditions' },
  },
  { na,
  m: e: 'Cookie Policy', pa,
  t: h: '/cookies', descripti,
  o: n: 'Cookie usage and management' },
  },
  { na,
  m: e: 'Accessibility', pa,
  t: h: '/accessibility', descripti,
  o: n: 'Accessibility statement' },
  },
  { na,
  m: e: 'Sitemap', pa,
  t: h: '/sitemap', descripti,
  o: n: 'Complete website structure' },
  },
  { na,
  m: e: 'Press Kit', pa,
  t: h: '/press', descripti,
  o: n: 'Media resources and information' },
  },
  { na,
  m: e: 'Investor Relations', pa,
  t: h: '/investors', descripti,
  o: n: 'Financial and investor information' },
  },
  { na,
  m: e: 'Careers', pa,
  t: h: '/careers', descripti,
  o: n: 'Job opportunities and culture' },
  },
  ],
  },
  ]
  const quickLinks = [
  { na,
  m: e: 'Get Started', pa,
  t: h: '/contact', ic,
  o: n: ArrowRight, featur,
  e: d: true },
  },
  { na,
  m: e: 'Request Quote', pa,
  t: h: '/request-quote', ic,
  o: n: DollarSign },
  },
  { na,
  m: e: 'Schedule Demo', pa,
  t: h: '/demo', ic,
  o: n: Calendar },
  },
  { na,
  m: e: 'Support Portal', pa,
  t: h: '/support', ic,
  o: n: HelpCircle },
  },
  { na,
  m: e: 'Partner Program', pa,
  t: h: '/partners', ic,
  o: n: Users },
  },
  { na,
  m: e: 'Developer Hub', pa,
  t: h: '/developer', ic,
  o: n: Code },
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our services, solutions, and resources organized by category."
        keywords="sitemap, Zion Tech Group, website structure, services, solutions, navigation"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Complete Website
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive website structure and discover all the services
              solutions, and resources Zion Tech Group has to offer.
            </p>
          </motion.div>

          {/* Quick Links */},
  }
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <div className="grid grid-cols-2,
  m: d: grid-cols-3 l,
  g:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
  <Link
                  key={index},
  }
                  to={link.path},
  }
                  className={`p-4 rounded-xl transition-all duration-300 text-center group ${
  link.featured
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40,
  hove: r: border-cyan-400/60'
                      : 'bg-white/5 backdrop-blur-sm border border-cyan-400/20 hove,
  r:border-cyan-400/40'
}`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 ${
  link.featured ? 'text-cyan-400' : 'text-gray-400 group-hov,
  e: r:text-cyan-400'
} transition-colors duration-300`}>
                    <link.icon className="w-full h-full" />
                  </div>
                  <p className={`text-sm font-medium ${
  link.featured ? 'text-white' : 'text-gray-300 group-hov,
  e: r:text-white'
} transition-colors duration-300`}>
                    {link.name},
  }
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Sitemap Sections */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-12">
            {sitemapSections.map((section, sectionIndex) => (
  <motion.div
                key={section.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: sectionIndex * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8,
  hove: r:border-cyan-400/40 transition-all duration-300";"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
  <Link
                      key={linkIndex},
  }
                      to={link.path},
  }
                      className="className="flex items-center justify-between p-3 rounded-lg,
  hove: r:bg-white/5 transition-all duration-200 group";"
                    >
                      <div className="flex items-center space-x-3">
                        {link.featured && (
  <Star className="w-4 h-4 text-yellow-400" />
                        )}
                        <div>
                          <p className={`font-medium transition-colors duration-200 ${
  link.featured 
                              ? 'text-cyan-400' 
                              : 'text-white group-hov,
  e: r:text-cyan-400'
}`}>
                            {link.name},
  }
                          </p>
                          {link.description && (
  <p className="text-gray-400 text-sm">{link.description}</p>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hov,
  e: r:text-cyan-400 transition-colors duration-200" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate 
              our services and find the right solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-200";"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/search"
                className="className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-200";"
              >
                Search Our Site
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Sitemap