import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Target, 
  Users, 
  BookOpen, 
  HelpCircle, 
  DollarSign, 
  MessageCircle,
  Home,
  Star,
  CheckCircle,
  Globe,
  Award,
  TrendingUp,
  Lightbulb,
  FileText,
  Video,
  GraduationCap,
  Lock,
  Eye,
  Heart
} from 'lucide-react';

export default function Sitemap() {
  const serviceCategories = [
    {
      title: 'Main Pages',
      icon: Globe,
      description: 'Core website pages and information',
      links: [
        { name: 'Home', path: '/', description: 'Main landing page', featured: true },
        { name: 'About Us', path: '/about', description: 'Company information and mission', featured: true },
        { name: 'Our Team', path: '/about#team', description: 'Meet our leadership and experts', featured: true },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us', featured: true },
        { name: 'News', path: '/news', description: 'Latest updates and announcements', featured: true },
        { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Search', path: '/search', description: 'Search our content and services' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Artificial intelligence and machine learning solutions',
      links: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions', featured: true },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Generator', path: '/services/ai-content-generator', description: 'Automated content creation' },
        { name: 'AI Customer Support', path: '/services/ai-customer-support', description: 'Intelligent support automation' },
        { name: 'AI Autonomous Research', path: '/services/ai-autonomous-research-assistant', description: 'Automated research capabilities' },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', description: 'Healthcare AI solutions' },
        { name: 'AI Project Management', path: '/services/ai-project-management', description: 'AI-driven project management' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Marketing automation with AI' }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      links: [
        { name: 'Quantum Computing Services', path: '/services/quantum-computing', description: 'Quantum computing solutions', featured: true },
        { name: 'Quantum AI Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', description: 'AI and quantum computing integration' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', description: 'Quantum-enhanced ML algorithms' },
        { name: 'Quantum Financial Trading', path: '/services/quantum-ai-trading-platform', description: 'Quantum algorithms for finance' },
        { name: 'Quantum Neural Networks', path: '/services/quantum-computing-elite', description: 'Quantum neural network solutions' },
        { name: 'Quantum Edge Computing', path: '/services/quantum-computing-solutions', description: 'Edge computing with quantum capabilities' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps automation',
      links: [
        { name: 'Cloud DevOps Services', path: '/services/cloud-devops', description: 'Cloud and DevOps solutions', featured: true },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', description: 'Financial operations automation' },
        { name: 'Cloud Migration', path: '/services/cloud', description: 'Seamless cloud transitions' },
        { name: 'Container Orchestration', path: '/services/infrastructure', description: 'Infrastructure management' },
        { name: 'Infrastructure as Code', path: '/services/transformation', description: 'Automated infrastructure deployment' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      links: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Comprehensive security solutions', featured: true },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity', description: 'AI-powered threat detection' },
        { name: 'Security Headers & CSP', path: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', path: '/services/dsr-portal', description: 'GDPR/CCPA compliance portal' },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', description: 'Zero trust security architecture' },
        { name: 'Threat Intelligence', path: '/services/incident-response-platform', description: 'AI-powered threat analysis' },
        { name: 'Mobile Security', path: '/services/ai-autonomous-research-assistant', description: 'Mobile device security' },
        { name: 'Forensics & Investigation', path: '/services/ai-autonomous-research-assistant', description: 'Digital forensics with AI' }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-cyan-500",
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "FinOps Advisor", href: "/services/finops-advisor" },
        { name: "Cloud Migration", href: "/services/cloud-migration-services" },
        { name: "Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Container Orchestration", href: "/services/kubernetes-services" },
        { name: "Serverless Architecture", href: "/services/serverless-architecture" },
        { name: "Multi-Cloud Strategy", href: "/services/multi-cloud-strategy" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: Atom,
      color: "text-purple-500",
      services: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing" },
        { name: "Quantum Neural Networks", href: "/services/quantum-neural-networks" },
        { name: "Quantum Financial Trading", href: "/services/quantum-financial-trading" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" },
        { name: "Quantum Cryptography", href: "/services/quantum-cryptography" },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Rocket,
      description: 'Strategic technology consulting and transformation',
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Strategic transformation consulting', featured: true },
        { name: 'IT Consulting', path: '/services/it-consulting', description: 'Technology strategy and planning' },
        { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Performance metrics and reporting' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence and insights' },
        { name: 'Process Optimization', path: '/services/ai-workflow-automation', description: 'Workflow and process improvement' },
        { name: 'Change Management', path: '/services/transformation', description: 'Organizational change support' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Affordable software solutions for small businesses',
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas', description: 'Micro SaaS solutions overview', featured: true },
        { name: 'Micro CRM', path: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', description: 'Customer support system' },
        { name: 'Project Management', path: '/services/ai-project-management', description: 'Project tracking and collaboration' },
        { name: 'Inventory Management', path: '/services/ai-workflow-automation', description: 'Stock and inventory tracking' },
        { name: 'Accounting Software', path: '/services/finops-advisor', description: 'Financial management tools' },
        { name: 'HR Platform', path: '/services/ai-hr-platform', description: 'Human resources management' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: TrendingUp,
      description: 'Cutting-edge and future technologies',
      links: [
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', description: 'Smart device networks', featured: true },
        { name: 'Blockchain Solutions', path: '/services/blockchain', description: 'Distributed ledger technology' },
        { name: 'Space Technology', path: '/services/space-tech', description: 'Space and satellite solutions' },
        { name: 'Metaverse Development', path: '/services/ai-quantum-hybrid-platform', description: 'Virtual world creation' },
        { name: 'Sustainable Technology', path: '/services/sustainable-technology', description: 'Green technology solutions' },
        { name: 'Green Computing', path: '/services/green-it', description: 'Energy-efficient computing' },
        { name: '5G Solutions', path: '/services/5g-enterprise-solutions', description: 'Next-generation network infrastructure' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Industry-specific technology solutions',
      links: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions', featured: true },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Education Technology', path: '/solutions/education', description: 'EdTech and learning platforms' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' },
        { name: 'Energy & Utilities', path: '/solutions/energy', description: 'Energy sector technology' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      description: 'Documentation, support, and learning resources',
      links: [
        { name: 'Help Center', path: '/help', description: 'Comprehensive help and support', featured: true },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation and guides' },
        { name: 'Training Programs', path: '/training', description: 'Skill development courses' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars and events' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research and insights' },
        { name: 'Video Tutorials', path: '/tutorials', description: 'Step-by-step video guides' }
      ]
    },
    {
      title: 'Company & Legal',
      icon: Users,
      description: 'Company information and legal documents',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy and protection', featured: true },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage and management' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete website structure' },
        { name: 'Press Kit', path: '/press', description: 'Media resources and information' },
        { name: 'Investor Relations', path: '/investors', description: 'Financial and investor information' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities and culture' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: "Industry Solutions",
      icon: Target,
      color: "text-green-500",
      solutions: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Financial Solutions", href: "/solutions/financial" },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
        { name: "Government Solutions", href: "/solutions/government" },
        { name: "Retail Solutions", href: "/solutions/retail" },
        { name: "Education Solutions", href: "/solutions/education" },
        { name: "Startup Solutions", href: "/solutions/startup" },
        { name: "Enterprise Solutions", href: "/enterprise" }
      ]
    },
    {
      title: "Technology Solutions",
      icon: Zap,
      color: "text-blue-500",
      solutions: [
        { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing" },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business" },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3" },
        { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing" },
        { name: "Space Technology", href: "/solutions/space-tech" },
        { name: "Digital Twin Solutions", href: "/solutions/digital-twin" }
      ]
    }
  ];

  const resourceCategories = [
    {
      title: "Content & Learning",
      icon: BookOpen,
      color: "text-purple-500",
      resources: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Webinars", href: "/webinars" },
        { name: "Training", href: "/training" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Video Library", href: "/videos" },
        { name: "Knowledge Base", href: "/knowledge-base" }
      ]
    },
    {
      title: "Technical Resources",
      icon: FileText,
      color: "text-cyan-500",
      resources: [
        { name: "Documentation", href: "/documentation" },
        { name: "API Reference", href: "/api" },
        { name: "Developer Portal", href: "/developer" },
        { name: "Code Examples", href: "/code-examples" },
        { name: "SDK Downloads", href: "/sdk" },
        { name: "Integration Guides", href: "/integration-guides" }
      ]
    },
    {
      title: "Research & Innovation",
      icon: Lightbulb,
      color: "text-yellow-500",
      resources: [
        { name: "Research & Development", href: "/research-development" },
        { name: "Innovation Lab", href: "/innovation-lab" },
        { name: "Technology Trends", href: "/tech-trends" },
        { name: "Future Insights", href: "/future-insights" },
        { name: "Academic Partnerships", href: "/academic-partnerships" },
        { name: "Patent Portfolio", href: "/patents" }
      ]
    }
  ];

  const companyPages = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Leadership", href: "/leadership", icon: Star },
    { name: "Careers", href: "/careers", icon: TrendingUp },
    { name: "Partners", href: "/partners", icon: Globe },
    { name: "News", href: "/news", icon: FileText },
    { name: "Events", href: "/events", icon: Video },
    { name: "Contact", href: "/contact", icon: MessageCircle },
    { name: "Request Quote", href: "/request-quote", icon: DollarSign },
    { name: "Schedule Demo", href: "/schedule-demo", icon: Users }
  ];

  const supportPages = [
    { name: "Help Center", href: "/help", icon: HelpCircle },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Support", href: "/contact", icon: MessageCircle },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Tutorials", href: "/tutorials", icon: BookOpen },
    { name: "Community Forum", href: "/community", icon: Users },
    { name: "Support Tickets", href: "/support-tickets", icon: MessageCircle }
  ];

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", icon: Lock },
    { name: "Terms of Service", href: "/terms", icon: FileText },
    { name: "Cookie Policy", href: "/cookies", icon: Eye },
    { name: "Accessibility", href: "/accessibility", icon: Eye },
    { name: "Security", href: "/security", icon: Shield },
    { name: "Compliance", href: "/compliance", icon: CheckCircle }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle, color: "text-green-500" },
    { number: "50+", label: "Team Members", icon: Users, color: "text-blue-500" },
    { number: "25+", label: "Countries Served", icon: Globe, color: "text-purple-500" },
    { number: "99%", label: "Client Satisfaction", icon: Star, color: "text-yellow-500" },
    { number: "15+", label: "Years Experience", icon: Award, color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Tech Group Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all our services, solutions, and resources
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          
          {/* Quick Navigation */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Home className="w-6 h-6 text-blue-400" />
              <span>Quick Navigation</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companyPages.slice(0, 8).map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                >
                  <page.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-white group-hover:text-blue-300">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <span>Our Services</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300"></div>
                        <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Target className="w-6 h-6 text-green-400" />
              <span>Industry & Technology Solutions</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutionCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-300"></div>
                        <span className="text-gray-300 group-hover:text-white">{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              <span>Resources & Learning</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.href}
                        className="block p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <span className="text-gray-300 group-hover:text-white">{resource.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Legal Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                <span>Support & Help</span>
              </h2>
              <div className="space-y-3">
                {supportPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                  >
                    <page.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-gray-300 group-hover:text-white">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-red-400" />
                <span>Legal & Compliance</span>
              </h2>
              <div className="space-y-3">
                {legalPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                  >
                    <page.icon className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                    <span className="text-gray-300 group-hover:text-white">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive services and solutions. Contact us today to discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
