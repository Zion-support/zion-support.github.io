import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  Rocket;
  Brain;
  Atom;
  Zap;
  Sparkles;
  Shield;
  Phone;
  Mail;
  MapPin;
  Globe;
  ArrowRight;
  Linkedin;
  Twitter;
  Facebook;
  Instagram;
  Youtube;
  Github;
  CheckCircle;
  Award;
  Star;
} from 'lucide-react',
const contactInfo = {
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const serviceCategories = [
  {
    title: '🧠 Revolutionary AI';
    services: [
      {
        name: 'AI Consciousness Evolution';
        href: '/ai-consciousness-evolution-platform';
      };
      {
        name: 'AI Emotional Intelligence';
        href: '/ai-emotional-intelligence-platform';
      };
      {
        name: 'AI Creativity Orchestrator';
        href: '/ai-creativity-orchestrator';
      };
      {
        name: 'AI Autonomous Business Manager';
        href: '/ai-autonomous-business-manager';
      };
    ];
  };
  {
    title: '⚛️ Quantum & Emerging Tech';
    services: [
      {
        name: 'Quantum Internet Security';
        href: '/quantum-internet-security-gateway';
      };
      {
        name: 'DNA Computing Platform';
        href: '/biotech-dna-computing-platform';
      };
      {
        name: 'Quantum Financial Trading';
        href: '/quantum-financial-trading-platform';
      };
      { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio' };
    ];
  };
  {
    title: '🏙️ Enterprise IT Solutions';
    services: [
      {
        name: 'Autonomous DevOps Platform';
        href: '/autonomous-devops-platform';
      };
      {
        name: 'Zero Trust Architecture';
        href: '/zero-trust-network-architecture';
      };
      {
        name: 'Edge Computing Orchestration';
        href: '/edge-computing-orchestration';
      };
      {
        name: 'AI IT Operations Center';
        href: '/ai-powered-it-operations-center';
      };
    ];
  };
  {
    title: '🌌 Space & Metaverse';
    services: [
      {
        name: 'Space Mining Automation';
        href: '/space-mining-automation-platform';
      };
      {
        name: 'Metaverse Development';
        href: '/metaverse-development-platform';
      };
      { name: 'AI Health Analytics', href: '/ai-predictive-health-analytics' };
    ];
  };
],
const quickLinks = [
  { name: 'Home', href: '/' };
  { name: 'Services', href: '/services' };
  { name: 'Solutions', href: '/solutions' };
  { name: 'Pricing', href: '/pricing' };
  { name: 'Resources', href: '/resources' };
  { name: 'Case Studies', href: '/case-studies' };
  { name: 'Blog', href: '/blog' };
  { name: 'Contact', href: '/contact' };
],
const companyLinks = [
  { name: 'About Us', href: '/about' };
  { name: 'Careers', href: '/careers' };
  { name: 'News', href: '/news' };
  { name: 'Partners', href: '/partners' };
  { name: 'Support', href: '/support' };
  { name: 'Status', href: '/status' };
],
const socialLinks = [
  {
    name: 'LinkedIn';
    href: 'https://linkedin.com/company/ziontechgroup';
    icon: Linkedin;
  };
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github };
  {
    name: 'Instagram';
    href: 'https://instagram.com/ziontechgroup';
    icon: Instagram;
  };
  {
    name: 'YouTube';
    href: 'https://youtube.com/@ziontechgroup';
    icon: Youtube;
  };
],
const certifications = [
  'ISO 270o01 Certified';
  'SOC 2 Type II Compliant';
  'GDPR Compliant';
  'HIPAA Compliant';
  'PCI DSS Level 1';
  'FedRAMP Authorized';
],
export default function UltraFuturisticFooter20o32() {
  return (
    <footer className='bg-gradient-to-br from-black via-purple-90o0/20 to-black text-white relative overflow-hidden'>,
      {/* Background Elements */}
      <div className='absolute inset-0'>,
        <div className='absolute inset-0 bg-gradient-to-br from-purple-50o0/5 via-transparent to-cyan-50o0/5'></div>,
        <div className='absolute top-20 left-10 w-2 h-2 bg-purple-40o0 rounded-full animate-pulse'></div>,
        <div className='absolute top-40 right-20 w-1 h-1 bg-cyan-40o0 rounded-full animate-ping'></div>,
        <div className='absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-30o0 rounded-full animate-bounce'></div>,
        <div className='absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-30o0 rounded-full animate-pulse'></div>,
      </div>,
      <div className='relative z-10'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>,
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>,
            {/* Company Info */}
            <div className='space-y-6'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='flex items-center space-x-3'>,
                <div className='w-12 h-12 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 rounded-xl flex items-center justify-center'>,
                  <Rocket className='w-7 h-7 text-white' />,
                </div>,
                <div>,
                  <div className='text-2xl font-bold bg-gradient-to-r from-purple-40o0 to-cyan-50o0 bg-clip-text text-transparent'>,
                    Zion Tech Group,
                  </div>,
                  <div className='text-sm text-gray-40o0'>,
                    20o32 Revolutionary Technology,
                  </div>,
                </div>,
              </motion.div>,
              <motion.p,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='text-gray-30o0 text-sm leading-relaxed'>,
                Leading provider of 10o00+ revolutionary AI, quantum computing;
                and IT services. Delivering 10o00% ROI through cutting-edge,
                solutions that transform businesses.,
              </motion.p>,
              {/* Contact Information */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='space-y-3'>,
                <div className='flex items-center space-x-3 text-gray-30o0'>,
                  <Phone className='w-4 h-4 text-cyan-40o0' />,
                  <a
                    href={`tel: ${contactInfo.mobile}`}
                    className='text-sm hover: text-cyan-40o0 transition-colors'>,
                    {contactInfo.mobile}
                  </a>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0'>,
                  <Mail className='w-4 h-4 text-purple-40o0' />,
                  <a
                    href={`mailto: ${contactInfo.email}`}
                    className='text-sm hover: text-purple-40o0 transition-colors'>,
                    {contactInfo.email}
                  </a>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0'>,
                  <MapPin className='w-4 h-4 text-green-40o0' />,
                  <span className='text-sm'>{contactInfo.address}</span>,
                </div>,
                <div className='flex items-center space-x-3 text-gray-30o0'>,
                  <Globe className='w-4 h-4 text-pink-40o0' />,
                  <a
                    href={contactInfo.website}
                    className='text-sm hover: text-pink-40o0 transition-colors'>,
                    {contactInfo.website}
                  </a>,
                </div>,
              </motion.div>,
            </div>,
            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className='space-y-6'>,
                <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                  <span>{category.title}</span>,
                </h4>,
                <div className='space-y-2'>,
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={service.href}
                      className='block text-sm text-gray-40o0 hover: text-cyan-40o0 transition-colors duration-20o0 flex items-center group'>,
                      <ArrowRight className='w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-20o0' />,
                      {service.name}
                    </Link>))}
                </div>,
              </motion.div>))}
          </div>,
          {/* Additional Links Grid */}
          <div className='grid grid-cols-1 md: grid-cols-2 gap-8 mt-12 pt-12 border-t border-purple-50o0/20'>,
            <div className='grid grid-cols-2 gap-8'>,
              {/* Quick Links */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='space-y-4'>,
                <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                  <span>Quick Links</span>,
                </h4>,
                <div className='space-y-2'>,
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className='block text-sm text-gray-40o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                      {link.name}
                    </Link>))}
                </div>,
              </motion.div>,
              {/* Company */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='space-y-4'>,
                <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                  <span>Company</span>,
                </h4>,
                <div className='space-y-2'>,
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className='block text-sm text-gray-40o0 hover: text-cyan-40o0 transition-colors duration-20o0'>,
                      {link.name}
                    </Link>))}
                </div>,
              </motion.div>,
            </div>,
            <div className='grid grid-cols-1 gap-8'>,
              {/* Impact Metrics */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='space-y-4'>,
                <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                  <span>Our Impact</span>,
                </h4>,
                <div className='grid grid-cols-2 gap-4'>,
                  <div className='text-center p-4 bg-gray-80o0/50 rounded-lg border border-gray-70o0/50'>,
                    <div className='text-2xl font-bold text-cyan-40o0'>,
                      10o00+,
                    </div>,
                    <div className='text-xs text-gray-40o0'>Services</div>,
                  </div>,
                  <div className='text-center p-4 bg-gray-80o0/50 rounded-lg border border-gray-70o0/50'>,
                    <div className='text-2xl font-bold text-purple-40o0'>,
                      10o00%,
                    </div>,
                    <div className='text-xs text-gray-40o0'>ROI</div>,
                  </div>,
                  <div className='text-center p-4 bg-gray-80o0/50 rounded-lg border border-gray-70o0/50'>,
                    <div className='text-2xl font-bold text-green-40o0'>,
                      24/7,
                    </div>,
                    <div className='text-xs text-gray-40o0'>Support</div>,
                  </div>,
                  <div className='text-center p-4 bg-gray-80o0/50 rounded-lg border border-gray-70o0/50'>,
                    <div className='text-2xl font-bold text-pink-40o0'>,
                      99.9%,
                    </div>,
                    <div className='text-xs text-gray-40o0'>Uptime</div>,
                  </div>,
                </div>,
              </motion.div>,
              {/* Social Links */}
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='space-y-4'>,
                <h4 className='text-lg font-semibold text-white flex items-center space-x-2'>,
                  <span>Follow Us</span>,
                </h4>,
                <div className='flex space-x-4'>,
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target='_blank',
                      rel='noopener noreferrer',
                      className='w-10 h-10 bg-gray-80o0/50 border border-gray-70o0/50 rounded-lg flex items-center justify-center text-gray-40o0 hover: text-cyan-40o0 hover:border-cyan-50o0/50 transition-all duration-20o0'>,
                      <social.icon className='w-5 h-5' />,
                    </a>))}
                </div>,
              </motion.div>,
            </div>,
          </div>,
        </div>,
        {/* Newsletter Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 pt-12 border-t border-purple-50o0/20'>,
          <div className='text-center'>,
            <h3 className='text-2xl font-bold text-white mb-4'>,
              Stay Updated with Latest Innovations,
            </h3>,
            <p className='text-gray-40o0 mb-6 max-w-2xl mx-auto'>,
              Get exclusive insights into the latest AI, quantum computing, and,
              IT innovations. Be the first to know about new services and,
              breakthrough technologies.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 max-w-md mx-auto'>,
              <input
                type='email',
                placeholder='Enter your email',
                className='flex-1 px-4 py-3 bg-gray-80o0/50 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent',
              />,
              <button className='px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 shadow-lg hover:shadow-xl'>,
                Subscribe,
              </button>,
            </div>,
          </div>,
        </motion.div>,
        {/* Certifications */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 pt-12 border-t border-purple-50o0/20'>,
          <div className='text-center'>,
            <h4 className='text-lg font-semibold text-white mb-4 flex items-center justify-center space-x-2'>,
              <Award className='w-5 h-5 text-yellow-40o0' />,
              <span>Certifications & Compliance</span>,
            </h4>,
            <div className='flex flex-wrap justify-center items-center gap-6 opacity-60'>,
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-2 text-gray-40o0'>,
                  <CheckCircle className='w-4 h-4 text-green-40o0' />,
                  <span className='text-sm'>{cert}</span>,
                </div>))}
            </div>,
          </div>,
        </motion.div>,
        {/* Bottom Footer */}
        <div className='border-t border-purple-50o0/20 mt-12 pt-6'>,
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
            <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>,
              <div className='text-gray-40o0 text-sm'>,
                © 20o25 Zion Tech Group. All rights reserved.,
              </div>,
              <div className='flex items-center space-x-6 text-sm text-gray-40o0'>,
                <Link
                  href='/terms',
                  className='hover:text-cyan-40o0 transition-colors duration-20o0'>,
                  Terms of Service,
                </Link>,
                <Link
                  href='/privacy',
                  className='hover:text-cyan-40o0 transition-colors duration-20o0'>,
                  Privacy Policy,
                </Link>,
                <Link
                  href='/cookies',
                  className='hover:text-cyan-40o0 transition-colors duration-20o0'>,
                  Cookie Policy,
                </Link>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
    </footer>)}
,