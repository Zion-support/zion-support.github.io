import, React, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Globe,;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Atom,;
  Zap,;
  Users,;
  Building,;
  Code,;
  Database,;
  Network,;
  Lock,;
  Eye,;
  Heart,;
  Factory,;
  ShoppingCart,;
  Leaf,;
  Gamepad2,;
  Coins,;
  Satellite,;
  TrendingUp,;
  BarChart3,;
  PenTool,;
  Server,;
  Smartphone,;
  Cpu,;
  Truck,;
  FileText,;
  BookOpen,;
  MessageCircle,;
  HelpCircle,;
  DollarSign,;
  Gauge,;
  Workflow,;
  Star,;
  Target,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  Calendar,;
  ClockAwardChevronRight;
} from "lucide-react";
import { SEO } from "@/components/SEO";
interface SitemapSection {
  title: string,icon: React.ComponentType<any>descriptio,;
    n: stringlink,;
  s: SitemapLink[];
};
;
interface SitemapLink {
  name: string,path: string;
  description?: string,;
  featured?: boolean;
;
const Sitemap: React.FC = () => {
  const sitemapSection,;
    s: SitemapSection[] = [;
    {
      titl,;
  e: 'Main Pages',icon: Globe,description: 'Core, website, pages and information',links: [;
        { nam,;
  e: 'Home', path: '/'descriptio,;
    n: 'Main, landing, page'feature,;
  d: true };
        { name: 'About Us', path: '/about'descriptio,;
    n: 'Company, information, and mission'feature,;
  d: true };
        { name: 'Our Team', path: '/team'descriptio,;
    n: 'Meet, our, leadership and experts'feature,;
  d: true };
        { name: 'Contact', path: '/contact'descriptio,;
    n: 'Get, in, touch with us'feature,;
  d: true };
        { name: 'News', path: '/news'descriptio,;
    n: 'Latest, updates, and announcements'feature,;
  d: true };
        { name: 'Blog'pat,;
    h: '/blog'descriptio,;
  n: 'Industry, insights, and articles' };
        { name: 'Careers'pat,;
    h: '/careers'descriptio,;
  n: 'Job opportunities' };
        { name: 'Partners'pat,;
    h: '/partners'descriptio,;
  n: 'Strategic partnerships' };
        { name: 'FAQ'pat,;
    h: '/faq'descriptio,;
  n: 'Frequently, asked, questions' }{ name: 'Search'pat,;
    h: '/search'descriptio,;
  n: 'Search, our, content and services' }
    ,  ];
    };
    {
      title: 'AI & Machine Learning',icon: Brain,description: 'Artificial, intelligence, and machine, learning, solutions',links: [;
        { nam,;
  e: 'AI, Services, Overview', path: '/ai-services'descriptio,;
    n: 'Comprehensive, AI, solutions'feature,;
  d: true };
        { name: 'AI, Business, Intelligence'path: '/services/ai-business-intelligence'descriptio,;
  n: 'Advanced, analytics, and insights' };
        { name: 'AI, Compliance, Assistant'path: '/services/ai-compliance-assistant'descriptio,;
  n: 'Automated, regulatory, compliance' };
        { name: 'AI, Sales, Copilot'path: '/services/ai-sales-copilot'descriptio,;
  n: 'Intelligent, sales, optimization' };
        { name: 'AI-Powered SEO'pat,;
    h: '/services/ai-seo'descriptio,;
  n: 'Machine, learning, SEO optimization' };
        { name: 'Interview, Assessment, AI'path: '/services/interview-assessment'descriptio,;
  n: 'AI-powered, candidate, evaluation' };
        { name: 'AI, Content, Generator'path: '/services/ai-content-generator'descriptio,;
  n: 'Automated, content, creation' };
        { name: 'AI, Customer, Support'path: '/services/ai-customer-support'descriptio,;
  n: 'Intelligent, support, automation' };
        { name: 'AI, Autonomous, Research'path: '/services/ai-autonomous-research-assistant'descriptio,;
  n: 'Automated, research, capabilities' };
        { name: 'AI, Healthcare, Platform'path: '/services/ai-healthcare-platform'descriptio,;
  n: 'Healthcare, AI, solutions' };
        { name: 'AI, Project, Management'path: '/services/ai-project-management'descriptio,;
  n: 'AI-driven, project, management' }{ name: 'AI, Marketing, Automation'path: '/services/ai-marketing-automation'descriptio,;
  n: 'Marketing, automation, with AI' }
    ,  ];
    };
    {
      title: 'Quantum Computing',icon: Atom,description: 'Next-generation, quantum, computing solutions',links: [;
        { nam,;
  e: 'Quantum, Computing, Services', path: '/services/quantum-computing'descriptio,;
    n: 'Quantum, computing, solutions'feature,;
  d: true };
        { name: 'Quantum, AI, Hybrid Platform'path: '/services/ai-quantum-hybrid-platform'descriptio,;
  n: 'AI, and, quantum computing integration' };
        { name: 'Quantum, Machine, Learning'path: '/services/quantum-machine-learning'descriptio,;
  n: 'Quantum-enhanced, ML, algorithms' };
        { name: 'Quantum, Financial, Trading'path: '/services/quantum-financial-trading'descriptio,;
  n: 'Quantum, algorithms, for finance' };
        { name: 'Quantum, Neural, Networks'path: '/services/quantum-neural-network-platform'descriptio,;
  n: 'Quantum, neural, network solutions' }{ name: 'Quantum, Edge, Computing'path: '/services/quantum-edge-computing-platform'descriptio,;
  n: 'Edge, computing, with quantum capabilities' }
    ,  ];
    };
    {
      title: 'Cloud & DevOps',icon: Cloud,description: 'Cloud, infrastructure, and DevOps automation',links: [;
        { nam,;
  e: 'Cloud, DevOps, Services', path: '/services/cloud-devops'descriptio,;
    n: 'Cloud, and, DevOps solutions'feature,;
  d: true };
        { name: 'IT Infrastructure'pat,;
    h: '/services/it-infrastructure'descriptio,;
  n: 'Enterprise, infrastructure, solutions' };
        { name: 'FinOps Advisor'pat,;
    h: '/services/finops-advisor'descriptio,;
  n: 'Cloud, cost, optimization' };
        { name: 'Cloud, FinOps, Optimizer'path: '/services/cloud-finops-optimizer'descriptio,;
  n: 'Financial, operations, automation' };
        { name: 'Cloud Migration'pat,;
    h: '/services/cloud-migration'descriptio,;
  n: 'Seamless, cloud, transitions' };
        { name: 'Container Orchestration'pat,;
    h: '/services/kubernetes'descriptio,;
  n: 'Kubernetes, and, container management' }{ name: 'Infrastructure, as, Code'path: '/services/infrastructure-as-code'descriptio,;
  n: 'Automated, infrastructure, deployment' }
    ,  ];
    };
    {
      title: 'Cybersecurity',icon: Shield,description: 'Advanced, security, and compliance solutions',links: [;
        { nam,;
  e: 'Cybersecurity Services', path: '/services/cybersecurity'descriptio,;
    n: 'Comprehensive, security, solutions'feature,;
  d: true };
        { name: 'AI, Cybersecurity, Platform'path: '/services/ai-cybersecurity-platform'descriptio,;
  n: 'AI-powered, threat, detection' };
        { name: 'Security Headers & CSP'pat,;
    h: '/services/security-headers-csp'descriptio,;
  n: 'Web, security, hardening' };
        { name: 'DSR, Privacy, Portal'path: '/services/dsr-portal'descriptio,;
  n: 'GDPR/CCPA, compliance, portal' };
        { name: 'Zero, Trust, Network'path: '/services/zero-trust-network-access'descriptio,;
  n: 'Zero, trust, security architecture' };
        { name: 'Threat Intelligence'pat,;
    h: '/services/ai-autonomous-threat-intelligence'descriptio,;
  n: 'AI-powered, threat, analysis' };
        { name: 'Mobile Security'pat,;
    h: '/services/ai-autonomous-mobile-security'descriptio,;
  n: 'Mobile, device, security' }{ name: 'Forensics & Investigation'pat,;
    h: '/services/ai-autonomous-forensics'descriptio,;
  n: 'Digital, forensics, with AI' }
    ,  ];
    };
    {
      title: 'Digital Transformation',icon: Rocket,description: 'Strategic, technology, consulting and transformation',links: [;
        { nam,;
  e: 'Digital Transformation', path: '/services/digital-transformation'descriptio,;
    n: 'Strategic, transformation, consulting'feature,;
  d: true };
        { name: 'IT Consulting'pat,;
    h: '/services/it-consulting'descriptio,;
  n: 'Technology, strategy, and planning' };
        { name: 'Digital Twin'pat,;
    h: '/services/digital-twin'descriptio,;
  n: 'Virtual, system, replicas' };
        { name: 'Business Intelligence'pat,;
    h: '/services/business-intelligence'descriptio,;
  n: 'Performance, metrics, and reporting' };
        { name: 'Data Analytics'pat,;
    h: '/services/data-analytics'descriptio,;
  n: 'Business, intelligence, and insights' };
        { name: 'Process Optimization'pat,;
    h: '/services/process-optimization'descriptio,;
  n: 'Workflow, and, process improvement' }{ name: 'Change Management'pat,;
    h: '/services/change-management'descriptio,;
  n: 'Organizational, change, support' }
    ,  ];
    };
    {
      title: 'Micro, SaaS, Solutions',icon: Zap,description: 'Affordable, software, solutions for, small, businesses',links: [;
        { nam,;
  e: 'Micro, SaaS, Platform', path: '/micro-saas'descriptio,;
    n: 'Micro, SaaS, solutions overview'feature,;
  d: true };
        { name: 'Micro CRM'pat,;
    h: '/services/micro-crm'descriptio,;
  n: 'Customer, relationship, management' };
        { name: 'Helpdesk Platform'pat,;
    h: '/services/helpdesk'descriptio,;
  n: 'Customer, support, system' };
        { name: 'Project Management'pat,;
    h: '/services/project-management'descriptio,;
  n: 'Project, tracking, and collaboration' };
        { name: 'Inventory Management'pat,;
    h: '/services/inventory-management'descriptio,;
  n: 'Stock, and, inventory tracking' };
        { name: 'Accounting Software'pat,;
    h: '/services/accounting-software'descriptio,;
  n: 'Financial, management, tools' }{ name: 'HR Platform'pat,;
    h: '/services/ai-hr-platform'descriptio,;
  n: 'Human, resources, management' }
    ,  ];
    };
    {
      title: 'Emerging Technologies',icon: TrendingUp,description: 'Cutting-edge, and, future technologies',links: [;
        { nam,;
  e: 'IoT, Edge, Computing', path: '/services/iot-edge-computing'descriptio,;
    n: 'Smart, device, networks'feature,;
  d: true };
        { name: 'Blockchain Solutions'pat,;
    h: '/services/blockchain'descriptio,;
  n: 'Distributed, ledger, technology' };
        { name: 'Space Technology'pat,;
    h: '/services/space-tech'descriptio,;
  n: 'Space, and, satellite solutions' };
        { name: 'Metaverse Development'pat,;
    h: '/services/metaverse-development'descriptio,;
  n: 'Virtual, world, creation' };
        { name: 'Sustainable Technology'pat,;
    h: '/services/sustainable-technology'descriptio,;
  n: 'Green, technology, solutions' };
        { name: 'Green Computing'pat,;
    h: '/services/green-computing'descriptio,;
  n: 'Energy-efficient computing' }{ name: '5G Solutions'pat,;
    h: '/services/5g-solutions'descriptio,;
  n: 'Next-generation, network, infrastructure' }
    ,  ];
    };
    {
      title: 'Industry Solutions',icon: Building,description: 'Industry-specific, technology, solutions',links: [;
        { nam,;
  e: 'Healthcare Solutions', path: '/solutions/healthcare'descriptio,;
    n: 'Healthcare, technology, solutions'feature,;
  d: true };
        { name: 'Financial Services'pat,;
    h: '/solutions/financial'descriptio,;
  n: 'Fintech, and, banking solutions' };
        { name: 'Manufacturing'pat,;
    h: '/solutions/manufacturing'descriptio,;
  n: 'Industry 4.0, and, smart manufacturing' };
        { name: 'Retail & E-commerce'pat,;
    h: '/solutions/retail'descriptio,;
  n: 'Digital, retail, transformation' };
        { name: 'Education Technology'pat,;
    h: '/solutions/education'descriptio,;
  n: 'EdTech, and, learning platforms' };
        { name: 'Government Solutions'pat,;
    h: '/solutions/government'descriptio,;
  n: 'Public, sector, technology' }{ name: 'Energy & Utilities'pat,;
    h: '/solutions/energy'descriptio,;
  n: 'Energy, sector, technology' }
    ,  ];
    };
    {
      title: 'Resources & Support',icon: BookOpen,description: 'Documentation, support, and, learning, resources',;
      links: [;
        { nam,;
  e: 'Help Center', path: '/help'descriptio,;
    n: 'Comprehensive, help, and support'feature,;
  d: true };
        { name: 'Case Studies'pat,;
    h: '/case-studies'descriptio,;
  n: 'Success, stories, and examples' };
        { name: 'Documentation'pat,;
    h: '/docs'descriptio,;
  n: 'Technical documentation' };
        { name: 'API Reference'pat,;
    h: '/api'descriptio,;
  n: 'API, documentation, and guides' };
        { name: 'Training Programs'pat,;
    h: '/training'descriptio,;
  n: 'Skill, development, courses' };
        { name: 'Webinars'pat,;
    h: '/webinars'descriptio,;
  n: 'Educational, webinars, and events' };
        { name: 'White Papers'pat,;
    h: '/white-papers'descriptio,;
  n: 'Industry, research, and insights' }{ name: 'Video Tutorials'pat,;
    h: '/tutorials'descriptio,;
  n: 'Step-by-step, video, guides' }
    ,  ];
    };
    {
      title: 'Company & Legal',icon: Users,description: 'Company, information, and legal documents',links: [;
        { nam,;
  e: 'Privacy Policy', path: '/privacy'descriptio,;
    n: 'Data, privacy, and protection'feature,;
  d: true };
        { name: 'Terms, of, Service'path: '/terms'descriptio,;
  n: 'Service, terms, and conditions' };
        { name: 'Cookie Policy'pat,;
    h: '/cookies'descriptio,;
  n: 'Cookie, usage, and management' };
        { name: 'Accessibility'pat,;
    h: '/accessibility'descriptio,;
  n: 'Accessibility statement' };
        { name: 'Sitemap'pat,;
    h: '/sitemap'descriptio,;
  n: 'Complete, website, structure' };
        { name: 'Press Kit'pat,;
    h: '/press'descriptio,;
  n: 'Media, resources, and information' };
        { name: 'Investor Relations'pat,;
    h: '/investors'descriptio,;
  n: 'Financial, and, investor information' }{ name: 'Careers'pat,;
    h: '/careers'descriptio,;
  n: 'Job, opportunities, and culture' }
    ,  ];
    };
  ];
  const quickLinks = [;
    { name: 'Get Started', path: '/contact'ico,;
    n: ArrowRightfeature,;
  d: true };
    { name: 'Request Quote'pat,;
    h: '/request-quote'ico,;
  n: DollarSign };
    { name: 'Schedule Demo'pat,;
    h: '/demo'ico,;
  n: Calendar };
    { name: 'Support Portal'pat,;
    h: '/support'ico,;
  n: HelpCircle };
    { name: 'Partner Program'pat,;
    h: '/partners'ico,;
  n: Users }{ name: 'Developer Hub'pat,;
    h: '/developer'ico,;
  n: Code };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Sitemap - Zion, Tech, Group";
        description="Complete, sitemap, of Zion, Tech, Group's website. Find, all, our services, solutions, and, resources, organized by category.";
        keywords="sitemap, Zion, Tech, Group, website structure, services, solutionsnavigation";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Complete Website;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Sitemap;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Explore, our, comprehensive website, structure, and discover, all, the services;
              solutionsand, resources, Zion Tech, Group, has to offer.;
            </p>;
          </motion.div>;
          {/* Quick Links */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="max-w-4xl mx-auto";
          >;
            <div className="grid grid-cols-2 md: grid-cols-3 l,;
  g:grid-cols-6 gap-4">;
              {quickLinks.map((linkindex) => (;
                <Link;
                  key={index}
                  to={link.path}
                  className={`p-4 rounded-xl transition-all duration-30o0 text-center group ${
                    link.featured;
                      ? 'bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20, border, border-cyan-40o0/40 hover: border-cyan-40o0/60';
                      : 'bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 hove,;
  r:border-cyan-40o0/40';
                  }`}
                >;
                  <div className={`w-8 h-8 mx-auto mb-2 ${
                    link.featured ? 'text-cyan-40o0' : 'text-gray-40o0 group-hover:text-cyan-40o0';
                  } transition-colors duration-30o0`}>;
                    <link.icon className="w-full h-full" />;
                  </div>;
                  <p className={`text-sm font-medium ${
                    link.featured ? 'text-white' : 'text-gray-30o0 group-hover:text-white';
                  } transition-colors duration-30o0`}>;
                    {link.name}
                  </p>;
                </Link>;
              ))}
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5" />;
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl" />;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl" />;
        </div>;
      </section>;
      {/* Sitemap Sections */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 l,;
  g:grid-cols-2 gap-12">;
            {sitemapSections.map((sectionsectionIndex) => (;
              <motion.div;
                key={section.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-8 hover:border-cyan-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center, border, border-cyan-40o0/30">;
                    <section.icon className="w-6 h-6 text-cyan-40o0" />;
                  </div>;
                  <div>;
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>;
                    <p className="text-gray-40o0 text-sm">{section.description}</p>;
                  </div>;
                </div>;
                <div className="space-y-3">;
                  {section.links.map((linklinkIndex) => (;
                    <Link;
                      key={linkIndex}
                      to={link.path}
                      className="flex items-center justify-between p-3 rounded-lg hover: bg-white/5 transition-all duration-20o0 group";
                    >;
                      <div className="flex items-center space-x-3">;
                        {link.featured && (;
                          <Star className="w-4 h-4 text-yellow-40o0" />;
                        )}
                        <div>;
                          <p className={`font-medium transition-colors duration-20o0 ${;
                            link.featured;
                              ? 'text-cyan-40o0';
                              : 'text-white group-hover: text-cyan-40o0';
                          }`}>;
                            {link.name}
                          </p>;
                          {link.description && (;
                            <p className="text-gray-40o0 text-sm">{link.description}</p>;
                          )}
                        </div>;
                      </div>;
                      <ChevronRight className="w-4 h-4 text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0" />;
                    </Link>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-60o0/20 to-blue-60o0/20, border, border-cyan-50o0/30 rounded-2xl p-12 text-center";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Need, Help, Finding Something?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Can't, find, what you're, looking, for? Our, team, is here, to, help you navigate;
              our, services, and find, the, right solution, for, your needs.;
            </p>;
            <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center space-x-3 text-gray-30o0">;
                <Phone className="w-5 h-5 text-cyan-40o0" />;
                <span>+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center space-x-3 text-gray-30o0">;
                <Mail className="w-5 h-5 text-cyan-40o0" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-3 text-gray-30o0">;
                <MapPin className="w-5 h-5 text-cyan-40o0" />;
                <span>Middletown, DE</span>;
              </div>;
            </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-20o0";
              >;
                Contact Us;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
              <Link;
                to="/search";
                className="inline-flex items-center px-8 py-3, border, border-cyan-50o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                Search, Our, Site;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
export, default, Sitemap;
;