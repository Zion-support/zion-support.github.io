import Link from 'next/link',
import { motion } from 'framer-motion',
import {,
  Zap,;
  Brain,;
  Atom,;
  Shield,;
  Rocket,;
  Globe,;
  Mail,;
  Phone,;
  MapPin,;
  ArrowRight,;
  Star,;
  Sparkles,;
  Cpu,;
  Lock,;
  Cloud,;
  BarChart3,;
  Settings,;
  Eye,;
  Award,;
  Clock,;
  Heart,;
  Lightbulb,;
  Target,;
  BookOpen,;
  Truck,;
  DollarSign,;
  Palette,;
  Code,;
  Database,;
  Users,;
  Twitter,;
  Linkedin,;
  Facebook,;
  Instagram,;
  Youtube,;
  Github,;
  MessageCircle,;
  MessageSquare,;
} from 'lucide-react',
,
const contactInfo = {,
  mobile: '+1 30o2 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 10o08 Middletown DE 19709',;
  website: 'https://ziontechgroup.com',;
};
,
const serviceCategories = [,
  {,
    title: 'AI & Consciousness',;
    icon: <Brain className='w-5 h-5 text-cyan-40o0' />,;
    services: [,
      {,
        name: 'AI Business Intelligence Suite Pro',;
        href: '/ai-business-intelligence-suite-pro',;
      },;
      {,
        name: 'AI Content Creation Studio',;
        href: '/ai-content-creation-studio',;
      },;
      {,
        name: 'Autonomous Customer Service AI',;
        href: '/autonomous-customer-service-ai',;
      },;
      {,
        name: 'AI Legal Contract Analyzer',;
        href: '/ai-legal-contract-analyzer',;
      },;
      {,
        name: 'AI Consciousness Evolution',;
        href: '/ai-consciousness-evolution-20o29',;
      },;
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion' ,},;
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' ,},;
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' ,},;
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' ,},;
      { name: 'AI Education Platform', href: '/ai-education-platform' ,},;
    ],;
  },;
  {,
    title: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-5 h-5 text-blue-40o0' />,;
    services: [,
      {,
        name: 'Quantum-Safe Cybersecurity Platform',;
        href: '/quantum-safe-cybersecurity-platform',;
      },;
      {,
        name: 'Quantum Machine Learning Platform',;
        href: '/quantum-machine-learning-platform',;
      },;
      {,
        name: 'Quantum Internet Security Platform',;
        href: '/quantum-internet-security-platform',;
      },;
      { name: 'Quantum Sensing Platform', href: '/quantum-sensing-platform' ,},;
      {,
        name: 'Neuromorphic Computing Platform',;
        href: '/neuromorphic-computing-platform',;
      },;
      { name: 'Bio-Computing Platform', href: '/bio-computing-platform' ,},;
      {,
        name: 'Space-Based Computing Platform',;
        href: '/space-based-computing-platform',;
      },;
      {,
        name: 'Holographic Computing Interface',;
        href: '/holographic-computing-interface',;
      },;
      {,
        name: 'Brain-Computer Interface Platform',;
        href: '/brain-computer-interface-platform',;
      },;
      {,
        name: 'Fusion Power Simulation Platform',;
        href: '/fusion-power-simulation-platform',;
      },;
    ],;
  },;
  {,
    title: 'Enterprise IT',;
    icon: <Shield className='w-5 h-5 text-green-40o0' />,;
    services: [,
      {,
        name: 'Autonomous DevOps Platform',;
        href: '/autonomous-devops-platform',;
      },;
      {,
        name: 'Edge AI Computing Platform',;
        href: '/edge-ai-computing-platform',;
      },;
      {,
        name: 'IoT Security & Management Platform',;
        href: '/iot-security-management-platform',;
      },;
      { name: 'Healthcare AI Platform', href: '/healthcare-ai-platform' ,},;
      {,
        name: 'Financial AI Trading Platform',;
        href: '/financial-ai-trading-platform',;
      },;
      { name: 'Manufacturing AI Platform', href: '/manufacturing-ai-platform' ,},;
      { name: 'Retail AI Platform', href: '/retail-ai-platform' ,},;
      { name: 'Energy AI Platform', href: '/energy-ai-platform' ,},;
      {,
        name: 'Transportation AI Platform',;
        href: '/transportation-ai-platform',;
      },;
      { name: 'Education AI Platform', href: '/education-ai-platform' ,},;
    ],;
  },;
  {,
    title: 'Micro SAAS',;
    icon: <Rocket className='w-5 h-5 text-purple-40o0' />,;
    services: [,
      {,
        name: 'Blockchain-as-a-Service Platform',;
        href: '/blockchain-as-a-service-platform',;
      },;
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' ,},;
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite' ,},;
      {,
        name: 'AI Autonomous Decision Engine',;
        href: '/ai-autonomous-decision-engine',;
      },;
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' ,},;
      { name: 'AI Education Platform', href: '/ai-education-platform' ,},;
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' ,},;
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' ,},;
      {,
        name: 'AI Sustainability Platform',;
        href: '/ai-sustainability-platform',;
      },;
      {,
        name: 'AI Emotional Intelligence',;
        href: '/ai-emotional-intelligence-platform',;
      },;
    ],;
  },;
],
,
const companyLinks = [,
  { name: 'About Us', href: '/about', description: 'Our mission and vision' ,},;
  {,
    name: 'Leadership Team',;
    href: '/leadership',;
    description: 'Meet our executive team',;
  },;
  { name: 'Careers', href: '/careers', description: 'Join our team' ,},;
  {,
    name: 'News & Press',;
    href: '/news',;
    description: 'Latest company updates',;
  },;
  {,
    name: 'Partners',;
    href: '/partners',;
    description: 'Strategic partnerships',;
  },;
  {,
    name: 'Investors',;
    href: '/investors',;
    description: 'Investment information',;
  },;
  { name: 'Contact Us', href: '/contact', description: 'Get in touch' ,},;
  { name: 'Locations', href: '/locations', description: 'Global presence' ,},;
  {,
    name: 'Sustainability',;
    href: '/sustainability',;
    description: 'Environmental commitment',;
  },;
  {,
    name: 'Diversity & Inclusion',;
    href: '/diversity-inclusion',;
    description: 'Our values',;
  },;
  { name: 'Terms of Service', href: '/terms', description: 'Legal terms' ,},;
  { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' ,},;
],
,
const socialLinks = [,
  { name: 'Twitter', href: '#', icon: <Twitter className='w-5 h-5' /> ,},;
  { name: 'LinkedIn', href: '#', icon: <Linkedin className='w-5 h-5' /> ,},;
  { name: 'Facebook', href: '#', icon: <Facebook className='w-5 h-5' /> ,},;
  { name: 'Instagram', href: '#', icon: <Instagram className='w-5 h-5' /> ,},;
  { name: 'YouTube', href: '#', icon: <Youtube className='w-5 h-5' /> ,},;
  { name: 'GitHub', href: '#', icon: <Github className='w-5 h-5' /> ,},;
  { name: 'Discord', href: '#', icon: <MessageCircle className='w-5 h-5' /> ,},;
  { name: 'Slack', href: '#', icon: <MessageSquare className='w-5 h-5' /> ,},;
],
,
const stats = [,
  {,
    number: '50o0+',;
    label: 'Services Delivered',;
    icon: Star,;
    color: 'text-cyan-40o0',;
  },;
  {,
    number: '10o00+',;
    label: 'Happy Clients',;
    icon: Users,;
    color: 'text-purple-40o0',;
  },;
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-40o0' ,},;
  {,
    number: '30o0%',;
    label: 'Average ROI',;
    icon: TrendingUp,;
    color: 'text-orange-40o0',;
  },;
],
,
const fadeInUp = {,
  initial: { opacity: 0, y: 30 ,},;
  whileInView: { opacity: 1, y: 0 ,},;
  transition: { duration: 0.6, ease: 'easeOut' ,},;
};
,
const staggerContainer = {,
  animate: {,
    transition: {,
      staggerChildren: 0.1,;
    },;
  },;
};
,
export default function UltraFuturisticFooter20o34() {,
  return (,
    <footer className='relative bg-black text-white overflow-hidden'>,
      {/* Animated Background */}
      <div className='absolute inset-0'>,
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-90o0/20 via-blue-90o0/20 to-purple-90o0/20'></div>,
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]'></div>,
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]'></div>,
      </div>,
      {/* Main Footer Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>,
        {/* Top Section */,}
        <div className='grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-5 gap-8 mb-16'>,
          {/* Company Info */,}
          <div className='lg: col-span-2 xl:col-span-1'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              className='space-y-6',
            >,
              <div className='flex items-center space-x-3'>,
                <div className='relative'>,
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl flex items-center justify-center'>,
                    <Zap className='w-7 h-7 text-white' />,
                  </div>,
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl blur-lg opacity-50'></div>,
                </div>,
                <div>,
                  <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                    Zion Tech Group,
                  </h3>,
                  <p className='text-sm text-gray-40o0'>,
                    Future Technology Solutions,
                  </p>,
                </div>,
              </div>,
              <p className='text-gray-30o0 leading-relaxed'>,
                Leading the future of technology with revolutionary AI,
                consciousness, quantum computing, and innovative enterprise,
                solutions that transform businesses and advance humanity.,
              </p>,
              {/* Contact Info */}
              <div className='space-y-3'>,
                <div className='flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                  <Phone className='w-4 h-4' />,
                  <span className='text-sm'>{contactInfo.mobile,}</span>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                  <Mail className='w-4 h-4' />,
                  <span className='text-sm'>{contactInfo.email,}</span>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                  <MapPin className='w-4 h-4' />,
                  <span className='text-sm'>{contactInfo.address,}</span>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                  <Globe className='w-4 h-4' />,
                  <span className='text-sm'>{contactInfo.website,}</span>,
                </div>,
              </div>,
            </motion.div>,
          </div>,
          {/* Service Categories */}
          {footerSections.map((section, index) => (,
            <motion.div,
              key={section.title}
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6, delay: index * 0.1 ,}}
              className='space-y-4',
            >,
              <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                {section.title === 'AI & Consciousness' && (,
                  <Brain className='w-5 h-5 text-cyan-40o0' />,
                )}
                {section.title === 'Quantum & Emerging Tech' && (,
                  <Atom className='w-5 h-5 text-blue-40o0' />,
                )}
                {section.title === 'Enterprise IT' && (,
                  <Shield className='w-5 h-5 text-purple-40o0' />,
                )}
                {section.title === 'Micro SAAS' && (,
                  <Rocket className='w-5 h-5 text-green-40o0' />,
                )}
                <span>{section.title}</span>,
              </h4>,
              <p className='text-sm text-gray-40o0 leading-relaxed'>,
                {section.description}
              </p>,
              <ul className='space-y-2'>,
                {section.links.map(link => (,
                  <li key={link.name}>,
                    <Link,
                      href={link.href}
                      className='text-sm text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0 flex items-center space-x-2 group',
                    >,
                      <ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform duration-20o0' />,
                      <span>{link.name,}</span>,
                    </Link>,
                  </li>,
                ))}
              </ul>,
            </motion.div>,
          ))}
        </div>,
        {/* Middle Section - Quick Links & Social */}
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.6, delay: 0.4 ,}}
          className='border-t border-gray-80o0 pt-8 mb-8',
        >,
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8'>,
            {/* Quick Links */,}
            <div className='lg: col-span-2'>,
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>,
                <div>,
                  <h4 className='text-lg font-semibold text-white mb-4'>,
                    Company,
                  </h4>,
                  <ul className='space-y-2'>,
                    {companyLinks.map(link => (,
                      <li key={link.name,}>,
                        <Link,
                          href={link.href}
                          className='text-gray-40o0 hover: text-cyan-30o0 transition-colors duration-20o0 flex items-center group',
                        >,
                          <ArrowRight className='w-3 h-3 mr-2 text-cyan-40o0 group-hover:translate-x-1 transition-transform duration-20o0' />,
                          {link.name,}
                        </Link>,
                      </li>,
                    ))}
                  </ul>,
                </div>,
                <div>,
                  <h4 className='text-lg font-semibold text-white mb-4'>,
                    Resources,
                  </h4>,
                  <ul className='space-y-2'>,
                    {footerSections,
                      .find(section => section.title === 'Resources'),
                      ?.links.map(link => (,
                        <li key={link.name}>,
                          <Link,
                            href={link.href}
                            className='text-gray-40o0 hover: text-cyan-30o0 transition-colors duration-20o0 flex items-center group',
                          >,
                            <ArrowRight className='w-3 h-3 mr-2 text-cyan-40o0 group-hover:translate-x-1 transition-transform duration-20o0' />,
                            {link.name,}
                          </Link>,
                        </li>,
                      ))}
                  </ul>,
                </div>,
              </div>,
            </div>,
          </div>,
          {/* Enhanced Contact Information */}
          <div className='col-span-full lg: col-span-3'>,
            <div className='space-y-6'>,
              <div>,
                <h3 className='text-xl font-bold text-white mb-4 flex items-center'>,
                  <MessageCircle className='w-6 h-6 mr-2 text-cyan-40o0' />,
                  Contact Information,
                </h3>,
                <div className='space-y-3'>,
                  <div className='flex items-center space-x-3 group'>,
                    <div className='w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0'>,
                      <Phone className='w-5 h-5 text-white' />,
                    </div>,
                    <div>,
                      <p className='text-sm text-gray-30o0'>Phone</p>,
                      <a,
                        href={`tel:${contactInfo.mobile,}`}
                        className='text-white hover: text-cyan-40o0 transition-colors duration-30o0 font-medium',
                      >,
                        {contactInfo.mobile,}
                      </a>,
                    </div>,
                  </div>,
                  <div className='flex items-center space-x-3 group'>,
                    <div className='w-10 h-10 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-30o0'>,
                      <Mail className='w-5 h-5 text-white' />,
                    </div>,
                    <div>,
                      <p className='text-sm text-gray-30o0'>Email</p>,
                      <a,
                        href={`mailto:${contactInfo.email,}`}
                        className='text-white hover: text-purple-40o0 transition-colors duration-30o0 font-medium',
                      >,
                        {contactInfo.email,}
                      </a>,
                    </div>,
                  </div>,
                  <div className='flex items-center space-x-3 group'>,
                    <div className='w-10 h-10 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-30o0'>,
                      <MapPin className='w-5 h-5 text-white' />,
                    </div>,
                    <div>,
                      <p className='text-sm text-gray-30o0'>Address</p>,
                      <p className='text-white font-medium'>,
                        {contactInfo.address,}
                      </p>,
                    </div>,
                  </div>,
                  <div className='flex items-center space-x-3 group'>,
                    <div className='w-10 h-10 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg flex items-center justify-center group-hover: scale-110 transition-transform duration-30o0'>,
                      <Globe className='w-5 h-5 text-white' />,
                    </div>,
                    <div>,
                      <p className='text-sm text-gray-30o0'>Website</p>,
                      <a,
                        href={contactInfo.website,}
                        target='_blank',
                        rel='noopener noreferrer',
                        className='text-white hover: text-orange-40o0 transition-colors duration-30o0 font-medium',
                      >,
                        {contactInfo.website.replace('https://', '')}
                      </a>,
                    </div>,
                  </div>,
                </div>,
              </div>,
              {/* Quick Contact Form */}
              <div className='mt-6'>,
                <h4 className='text-lg font-semibold text-white mb-3'>,
                  Get Started Today,
                </h4>,
                <div className='space-y-3'>,
                  <input,
                    type='email',
                    placeholder='Enter your email',
                    className='w-full px-4 py-2 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: border-cyan-50o0 focus:ring-2 focus:ring-cyan-50o0/20 transition-all duration-30o0',
                  />,
                  <button className='w-full px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover:from-cyan-60o0 hover:to-blue-60o0 text-white font-medium rounded-lg transition-all duration-30o0 transform hover:scale-10o5'>,
                    Contact Sales Team,
                  </button>,
                </div>,
              </div>,
            </div>,
          </div>,
          {/* Enhanced Service Categories */,}
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>,
            {footerSections.map((section, index) => (,
              <div key={index} className='space-y-4'>,
                <h4 className='text-lg font-semibold text-white border-b border-cyan-50o0/30 pb-2'>,
                  {section.title}
                </h4>,
                <ul className='space-y-2'>,
                  {section.links.map(link => (,
                    <li key={link.name}>,
                      <Link,
                        href={link.href}
                        className='text-gray-40o0 hover: text-cyan-30o0 transition-colors duration-20o0 flex items-center group',
                      >,
                        <ArrowRight className='w-3 h-3 mr-2 text-cyan-40o0 group-hover:translate-x-1 transition-transform duration-20o0' />,
                        {link.name,}
                      </Link>,
                    </li>,
                  ))}
                </ul>,
              </div>,
            ))}
          </div>,
          {/* Solutions Section */}
          <div className='mb-16'>,
            <h3 className='text-2xl font-bold text-center text-white mb-12'>,
              Industry Solutions,
            </h3>,
            <div className='grid grid-cols-2 md: grid-cols-5 gap-4'>,
              {footerSections,
                .find(section => section.title === 'Industry Solutions'),
                ?.links.map(link => (,
                  <Link,
                    key={link.name,}
                    href={link.href}
                    className='p-3 text-center bg-white/5 hover: bg-white/10 rounded-lg border border-white/10 hover:border-cyan-50o0/50 transition-all duration-20o0 group',
                  >,
                    <div className='text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors duration-20o0 text-sm font-medium'>,
                      {link.name,}
                    </div>,
                  </Link>,
                ))}
            </div>,
          </div>,
          {/* Social Links & Newsletter */}
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8 mb-12'>,
            {/* Social Links */,}
            <div>,
              <h4 className='text-lg font-semibold text-white mb-4 flex items-center space-x-2'>,
                <Lightbulb className='w-5 h-5 text-yellow-40o0' />,
                <span>Quick Links</span>,
              </h4>,
              <div className='grid grid-cols-2 gap-2'>,
                {quickLinks.map(link => (,
                  <Link,
                    key={link.name}
                    href={link.href}
                    className='text-sm text-gray-30o0 hover: text-cyan-40o0 transition-colors duration-20o0 flex items-center space-x-2 group',
                  >,
                    {social.icon,}
                  </Link>,
                ))}
              </div>,
            </div>,
            {/* Social Links */}
            <div>,
              <h4 className='text-lg font-semibold text-white mb-4 flex items-center space-x-2'>,
                <Users className='w-5 h-5 text-green-40o0' />,
                <span>Connect With Us</span>,
              </h4>,
              <div className='flex space-x-4'>,
                {socialLinks.map(social => (,
                  <Link,
                    key={social.name}
                    href={social.href}
                    className='w-10 h-10 bg-gray-80o0 hover: bg-gradient-to-r hover:from-cyan-50o0 hover:to-blue-60o0 rounded-lg flex items-center justify-center text-gray-30o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                    aria-label={social.name,}
                  >,
                    <social.icon className='w-5 h-5' />,
                  </Link>,
                ))}
              </div>,
            </div>,
          </div>,
        </motion.div>,
        {/* Bottom Section - Stats & Awards */}
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.6, delay: 0.6 ,}}
          className='border-t border-gray-80o0 pt-8',
        >,
          <div className='grid grid-cols-2 md: grid-cols-4 gap-6 mb-8'>,
            <div className='text-center'>,
              <div className='text-2xl font-bold text-cyan-40o0 mb-2'>,
                50o0+,
              </div>,
              <div className='text-sm text-gray-40o0'>Services Delivered</div>,
            </div>,
            <div className='text-center'>,
              <div className='text-2xl font-bold text-blue-40o0 mb-2'>,
                10o00+,
              </div>,
              <div className='text-sm text-gray-40o0'>Happy Clients</div>,
            </div>,
            <div className='text-center'>,
              <div className='text-2xl font-bold text-purple-40o0 mb-2'>,
                24/7,
              </div>,
              <div className='text-sm text-gray-40o0'>Support Available</div>,
            </div>,
            <div className='text-center'>,
              <div className='text-2xl font-bold text-green-40o0 mb-2'>,
                99.9%,
              </div>,
              <div className='text-sm text-gray-40o0'>Uptime Guarantee</div>,
            </div>,
          </div>,
          {/* Awards & Recognition */,}
          <div className='flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-40o0'>,
            <div className='flex items-center space-x-2'>,
              <Award className='w-4 h-4 text-yellow-40o0' />,
              <span>Industry Leader 20o25</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Star className='w-4 h-4 text-yellow-40o0' />,
              <span>4.9/5 Customer Rating</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Clock className='w-4 h-4 text-cyan-40o0' />,
              <span>10+ Years Experience</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Heart className='w-4 h-4 text-red-40o0' />,
              <span>Trusted by Fortune 50o0</span>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
      {/* Bottom Bar */}
      <div className='border-t border-gray-80o0 bg-gray-90o0/50'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6'>,
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>,
            <div className='text-sm text-gray-40o0'>,
              © 20o25 Zion Tech Group. All rights reserved. Leading the future,
              of technology.,
            </div>,
            <div className='flex items-center space-x-6 text-sm text-gray-40o0'>,
              <Link,
                href='/privacy',
                className='hover:text-cyan-40o0 transition-colors duration-20o0',
              >,
                Privacy Policy,
              </Link>,
              <Link,
                href='/terms',
                className='hover:text-cyan-40o0 transition-colors duration-20o0',
              >,
                Terms of Service,
              </Link>,
              <Link,
                href='/cookies',
                className='hover:text-cyan-40o0 transition-colors duration-20o0',
              >,
                Cookie Policy,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Floating Elements */,}
      <div className='absolute top-20 left-10 w-2 h-2 bg-cyan-40o0 rounded-full animate-pulse'></div>,
      <div className='absolute top-40 right-20 w-1 h-1 bg-blue-40o0 rounded-full animate-pulse delay-10o00'></div>,
      <div className='absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-40o0 rounded-full animate-pulse delay-20o00'></div>,
      <div className='absolute bottom-20 right-10 w-1 h-1 bg-green-40o0 rounded-full animate-pulse delay-30o00'></div>,
    </footer>,
  ),
}
,
export default UltraFuturisticFooter20o34,
,