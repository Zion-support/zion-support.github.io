import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sitemap, 
  Home, 
  Users, 
  Building, 
  Brain, 
  Server, 
  Shield, 
  Cloud, 
  Globe, 
  FileText, 
  HelpCircle, 
  MessageCircle, 
  ShoppingCart, 
  Rocket, 
  Target, 
  Zap, 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Cpu, 
  Workflow, 
  Atom, 
  Satellite, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Star,
  Award,
  TrendingUp,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Settings,
  BookOpen,
  GraduationCap,
  LifeBuoy,
  Headphones,
  MessageSquare,
  Download,
  Play,
  Book,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Bookmark,
  Flag,
  Report,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Heart,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Umbrella,
  Snowflake,
  Fire,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Plant,
  TreePine,
  Mountain,
  MountainSnow,
  Volcano,
  Island,
  Beach,
  Desert,
  Forest,
  Jungle,
  Ocean,
  River,
  Lake,
  Water,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch
} from 'lucide-react';
import { useState } from 'react';

export default function Sitemap() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sitemapData = {
    main: {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
        { name: 'Careers', path: '/careers', description: 'Join our growing team' },
        { name: 'News & Blog', path: '/news', description: 'Latest industry insights and updates' }
      ]
    },
    services: {
      title: 'Services',
      icon: Brain,
      pages: [
        { name: 'AI & Automation', path: '/services/ai-automation', description: 'Intelligent automation solutions' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Modern infrastructure solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security protection' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions', description: 'Cloud migration and optimization' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence and insights' },
        { name: 'DevOps & Automation', path: '/services/devops', description: 'Streamlined development operations' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'End-to-end digital solutions' }
      ]
    },
    solutions: {
      title: 'Solutions',
      icon: Target,
      pages: [
        { name: 'Enterprise AI', path: '/solutions/enterprise-ai', description: 'AI solutions for large organizations' },
        { name: 'SMB Solutions', path: '/solutions/smb', description: 'Technology solutions for small businesses' },
        { name: 'Healthcare Tech', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', description: 'Industry 4.0 and smart manufacturing' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', description: 'Digital retail transformation' },
        { name: 'Education Technology', path: '/solutions/education', description: 'EdTech and learning solutions' }
      ]
    },
    marketplace: {
      title: 'Marketplace',
      icon: ShoppingCart,
      pages: [
        { name: 'AI Solutions', path: '/marketplace/ai', description: 'Browse AI-powered solutions' },
        { name: 'Software Tools', path: '/marketplace/software', description: 'Enterprise software and tools' },
        { name: 'Cloud Services', path: '/marketplace/cloud', description: 'Cloud computing services' },
        { name: 'Security Tools', path: '/marketplace/security', description: 'Cybersecurity solutions' },
        { name: 'Data Tools', path: '/marketplace/data', description: 'Data analytics and visualization tools' },
        { name: 'Development Tools', path: '/marketplace/development', description: 'Software development tools' }
      ]
    },
    resources: {
      title: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Documentation', path: '/docs', description: 'Technical documentation and guides' },
        { name: 'API Reference', path: '/api', description: 'Developer API documentation' },
        { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step learning guides' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and implementations' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry research and insights' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars and events' },
        { name: 'Video Library', path: '/videos', description: 'Video tutorials and demos' }
      ]
    },
    support: {
      title: 'Support & Help',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help', description: 'Comprehensive help documentation' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
        { name: 'Phone Support', path: '/phone-support', description: 'Call our support team' },
        { name: 'Email Support', path: '/email-support', description: 'Send us an email' },
        { name: 'Support Tickets', path: '/tickets', description: 'Submit support tickets' },
        { name: 'Community Forum', path: '/community', description: 'Connect with other users' }
      ]
    },
    company: {
      title: 'Company',
      icon: Building,
      pages: [
        { name: 'About Us', path: '/about', description: 'Our story and mission' },
        { name: 'Leadership Team', path: '/about/leadership', description: 'Meet our executives' },
        { name: 'Company Culture', path: '/about/culture', description: 'Our values and culture' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Press & Media', path: '/press', description: 'Press releases and media kit' },
        { name: 'Investor Relations', path: '/investors', description: 'Financial information' },
        { name: 'Partnerships', path: '/partnerships', description: 'Strategic partnerships' }
      ]
    },
    legal: {
      title: 'Legal & Privacy',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Data Processing', path: '/data-processing', description: 'Data handling practices' },
        { name: 'Security', path: '/security', description: 'Security measures and compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility statement' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'EU data protection compliance' }
      ]
    },
    user: {
      title: 'User Account',
      icon: Users,
      pages: [
        { name: 'Sign Up', path: '/signup', description: 'Create a new account' },
        { name: 'Sign In', path: '/signin', description: 'Access your account' },
        { name: 'Dashboard', path: '/dashboard', description: 'User dashboard and controls' },
        { name: 'Profile Settings', path: '/profile', description: 'Manage your profile' },
        { name: 'Billing & Payments', path: '/billing', description: 'Manage billing and payments' },
        { name: 'API Keys', path: '/api-keys', description: 'Manage API access' },
        { name: 'Usage Analytics', path: '/analytics', description: 'View usage statistics' }
      ]
    },
    business: {
      title: 'Business',
      icon: TrendingUp,
      pages: [
        { name: 'Get Started', path: '/get-started', description: 'Begin your journey with us' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
        { name: 'Schedule Demo', path: '/demo', description: 'See our solutions in action' },
        { name: 'Consultation', path: '/consultation', description: 'Free business consultation' },
        { name: 'Implementation', path: '/implementation', description: 'Project implementation process' },
        { name: 'Training', path: '/training', description: 'Staff training programs' },
        { name: 'Support Plans', path: '/support-plans', description: 'Ongoing support options' }
      ]
    }
  };

  const externalLinks = [
    {
      category: 'Social Media',
      links: [
        { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: ExternalLink },
        { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: ExternalLink },
        { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: ExternalLink },
        { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: ExternalLink }
      ]
    },
    {
      category: 'Developer Resources',
      links: [
        { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: ExternalLink },
        { name: 'Developer Blog', url: 'https://dev.ziontechgroup.com', icon: ExternalLink },
        { name: 'API Status', url: 'https://status.ziontechgroup.com', icon: ExternalLink },
        { name: 'Developer Community', url: 'https://community.ziontechgroup.com', icon: ExternalLink }
      ]
    },
    {
      category: 'Business Resources',
      links: [
        { name: 'Partner Portal', url: 'https://partners.ziontechgroup.com', icon: ExternalLink },
        { name: 'Customer Portal', url: 'https://customers.ziontechgroup.com', icon: ExternalLink },
        { name: 'Support Portal', url: 'https://support.ziontechgroup.com', icon: ExternalLink },
        { name: 'Training Portal', url: 'https://training.ziontechgroup.com', icon: ExternalLink }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                <Sitemap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site Map
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Navigate our comprehensive website structure and find all the information, 
              services, and resources you need from Zion Tech Group.
            </p>
          </div>
        </div>
      </div>

      {/* Main Sitemap */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(sitemapData).map(([key, section]) => (
              <div key={key} className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-zion-purple/10 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                      <p className="text-zion-slate-light text-sm">
                        {section.pages.length} pages available
                      </p>
                    </div>
                  </div>
                  {expandedSections.includes(key) ? (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-zion-slate-light" />
                  )}
                </button>
                
                {expandedSections.includes(key) && (
                  <div className="border-t border-zion-purple/20">
                    <div className="p-6 space-y-3">
                      {section.pages.map((page, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-zion-purple/10 rounded-lg hover:bg-zion-purple/20 transition-colors duration-200">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <Link
                              to={page.path}
                              className="text-white font-medium hover:text-zion-cyan transition-colors duration-200 block"
                            >
                              {page.name}
                            </Link>
                            <p className="text-zion-slate-light text-sm mt-1">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-zion-slate-light flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="py-24 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              External Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with us across various platforms and access additional resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {externalLinks.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-zion-purple/10 rounded-lg hover:bg-zion-purple/20 transition-all duration-300 group"
                    >
                      <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200">
                        {link.name}
                      </span>
                      <link.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Popular destinations and frequently accessed pages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/get-started"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Started</h3>
              <p className="text-zion-slate-light text-sm">Begin your journey with us</p>
            </Link>

            <Link
              to="/services"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-zion-slate-light text-sm">Explore our technology solutions</p>
            </Link>

            <Link
              to="/marketplace"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Marketplace</h3>
              <p className="text-zion-slate-light text-sm">Browse AI solutions and tools</p>
            </Link>

            <Link
              to="/contact"
              className="group bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-zion-slate-light text-sm">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate our services and find the perfect solutions 
              for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple font-semibold rounded-xl hover:bg-zion-purple hover:text-white transition-all duration-300"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}