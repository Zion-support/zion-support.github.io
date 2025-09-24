import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {,
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  ArrowRight,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Github,;
  Youtube,;
  Rocket,;
  Brain,;
  Atom,;
  Shield,;
  Zap,;
  Star,;
  Heart,;
  ArrowUp,;
} from 'lucide-react',
,
const UltraFuturisticFooter20o31: React.FC = () => {,
  const currentYear = new Date().getFullYear(),
,
  const scrollToTop = () => {,
    window.scrollTo({ top: 0, behavior: 'smooth' ,}),
  };
,
  return (,
    <footer className='relative bg-gradient-to-b from-gray-90o0 via-black to-black border-t border-gray-80o0/50 overflow-hidden'>,
      {/* Background Effects */}
      <div className='absolute inset-0 pointer-events-none'>,
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-50o0/5 rounded-full blur-3xl' />,
        <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-purple-50o0/5 rounded-full blur-3xl' />,
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-50o0/5 rounded-full blur-3xl' />,
      </div>,
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>,
        {/* Main Footer Content */,}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>,
          {/* Company Info */,}
          <div className='space-y-6'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6 ,}}
              viewport={{ once: true ,}}
            >,
              <div className='flex items-center gap-3 mb-4'>,
                <div className='w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl flex items-center justify-center'>,
                  <Rocket className='w-6 h-6 text-white' />,
                </div>,
                <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent'>,
                  Zion Tech Group,
                </h3>,
              </div>,
              <p className='text-gray-40o0 leading-relaxed'>,
                Leading the future with revolutionary AI, quantum computing, and,
                space technology solutions. Transforming businesses with,
                cutting-edge innovation.,
              </p>,
            </motion.div>,
            {/* Contact Info */}
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.6, delay: 0.1 ,}}
              viewport={{ once: true ,}}
              className='space-y-4',
            >,
              <div className='flex items-center gap-3 text-gray-30o0 hover: text-cyan-40o0 transition-colors'>,
                <Phone className='w-5 h-5 text-cyan-40o0' />,
                <a,
                  href='tel:+130o24640950',
                  className='hover:text-cyan-40o0 transition-colors',
                >,
                  +1 30o2 464 0950,
                </a>,
              </div>,
              <div className='flex items-center gap-3 text-gray-30o0 hover:text-cyan-40o0 transition-colors'>,
                <Mail className='w-5 h-5 text-cyan-40o0' />,
                <a,
                  href='mailto:kleber@ziontechgroup.com',
                  className='hover:text-cyan-40o0 transition-colors',
                >,
                  kleber@ziontechgroup.com,
                </a>,
              </div>,
              <div className='flex items-center gap-3 text-gray-30o0'>,
                <MapPin className='w-5 h-5 text-cyan-40o0' />,
                <span>,
                  364 E Main St STE 10o08,
                  <br />,
                  Middletown DE 19709,
                </span>,
              </div>,
              <div className='flex items-center gap-3 text-gray-30o0 hover:text-cyan-40o0 transition-colors'>,
                <Globe className='w-5 h-5 text-cyan-40o0' />,
                <a,
                  href='https://ziontechgroup.com',
                  className='hover:text-cyan-40o0 transition-colors',
                >,
                  ziontechgroup.com,
                </a>,
              </div>,
            </motion.div>,
          </div>,
          {/* Quick Links */,}
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.6, delay: 0.2 ,}}
            viewport={{ once: true ,}}
            className='space-y-6',
          >,
            <h4 className='text-xl font-bold text-white mb-6'>Quick Links</h4>,
            <div className='space-y-3'>,
              <Link,
                href='/services',
                className='flex items-center gap-2 text-gray-40o0 hover: text-cyan-40o0 transition-colors group',
              >,
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                All Services,
              </Link>,
              <Link,
                href='/pricing',
                className='flex items-center gap-2 text-gray-40o0 hover:text-cyan-40o0 transition-colors group',
              >,
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                Pricing Plans,
              </Link>,
              <Link,
                href='/about',
                className='flex items-center gap-2 text-gray-40o0 hover:text-cyan-40o0 transition-colors group',
              >,
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                About Us,
              </Link>,
              <Link,
                href='/contact',
                className='flex items-center gap-2 text-gray-40o0 hover:text-cyan-40o0 transition-colors group',
              >,
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                Contact,
              </Link>,
              <Link,
                href='/blog',
                className='flex items-center gap-2 text-gray-40o0 hover:text-cyan-40o0 transition-colors group',
              >,
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />,
                Blog & News,
              </Link>,
            </div>,
          </motion.div>,
          {/* Service Categories */,}
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.6, delay: 0.3 ,}}
            viewport={{ once: true ,}}
            className='space-y-6',
          >,
            <h4 className='text-xl font-bold text-white mb-6'>,
              Service Categories,
            </h4>,
            <div className='space-y-3'>,
              <Link,
                href='/ai-services',
                className='flex items-center gap-2 text-gray-40o0 hover: text-purple-40o0 transition-colors group',
              >,
                <Brain className='w-4 h-4 text-purple-40o0' />,
                AI & Consciousness,
              </Link>,
              <Link,
                href='/quantum-services',
                className='flex items-center gap-2 text-gray-40o0 hover:text-blue-40o0 transition-colors group',
              >,
                <Atom className='w-4 h-4 text-blue-40o0' />,
                Quantum Computing,
              </Link>,
              <Link,
                href='/it-services',
                className='flex items-center gap-2 text-gray-40o0 hover:text-green-40o0 transition-colors group',
              >,
                <Shield className='w-4 h-4 text-green-40o0' />,
                IT & Security,
              </Link>,
              <Link,
                href='/space-tech',
                className='flex items-center gap-2 text-gray-40o0 hover:text-cyan-40o0 transition-colors group',
              >,
                <Rocket className='w-4 h-4 text-cyan-40o0' />,
                Space Technology,
              </Link>,
              <Link,
                href='/micro-saas',
                className='flex items-center gap-2 text-gray-40o0 hover:text-orange-40o0 transition-colors group',
              >,
                <Zap className='w-4 h-4 text-orange-40o0' />,
                Micro SAAS,
              </Link>,
            </div>,
          </motion.div>,
          {/* Newsletter & Social */,}
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.6, delay: 0.4 ,}}
            viewport={{ once: true ,}}
            className='space-y-6',
          >,
            <h4 className='text-xl font-bold text-white mb-6'>,
              Stay Connected,
            </h4>,
            {/* Newsletter Signup */}
            <div className='space-y-4'>,
              <p className='text-gray-40o0 text-sm'>,
                Get the latest updates on revolutionary technology solutions and,
                industry insights.,
              </p>,
              <div className='flex gap-2'>,
                <input,
                  type='email',
                  placeholder='Enter your email',
                  className='flex-1 px-4 py-3 bg-gray-80o0/50 border border-gray-70o0 rounded-lg text-white placeholder-gray-50o0 focus: outline-none focus:border-cyan-40o0 transition-colors',
                />,
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hover:to-blue-70o0 text-white rounded-lg font-semibold transition-all duration-30o0 transform hover:scale-10o5'>,
                  Subscribe,
                </button>,
              </div>,
            </div>,
            {/* Social Media */,}
            <div className='space-y-4'>,
              <p className='text-gray-40o0 text-sm'>,
                Follow us on social media,
              </p>,
              <div className='flex gap-4'>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover: bg-blue-60o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Facebook className='w-5 h-5' />,
                </a>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover:bg-blue-40o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Twitter className='w-5 h-5' />,
                </a>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover:bg-blue-70o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Linkedin className='w-5 h-5' />,
                </a>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover:bg-pink-60o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Instagram className='w-5 h-5' />,
                </a>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover:bg-gray-80o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Github className='w-5 h-5' />,
                </a>,
                <a,
                  href='#',
                  className='w-10 h-10 bg-gray-80o0/50 hover:bg-red-60o0 rounded-lg flex items-center justify-center text-gray-40o0 hover:text-white transition-all duration-30o0 transform hover:scale-110',
                >,
                  <Youtube className='w-5 h-5' />,
                </a>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
        {/* Bottom Section */,}
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.6, delay: 0.5 ,}}
          viewport={{ once: true ,}}
          className='pt-8 border-t border-gray-80o0/50',
        >,
          <div className='flex flex-col md: flex-row justify-between items-center gap-6'>,
            {/* Copyright */,}
            <div className='flex items-center gap-2 text-gray-40o0 text-sm'>,
              <span>,
                © {currentYear} Zion Tech Group. All rights reserved.,
              </span>,
              <span className='hidden sm: inline'>•</span>,
              <span className='hidden sm:inline'>Made with</span>,
              <Heart className='w-4 h-4 text-red-50o0 hidden sm:inline' />,
              <span className='hidden sm:inline'>for the future</span>,
            </div>,
            {/* Legal Links */,}
            <div className='flex items-center gap-6 text-sm'>,
              <Link,
                href='/privacy',
                className='text-gray-40o0 hover: text-cyan-40o0 transition-colors',
              >,
                Privacy Policy,
              </Link>,
              <Link,
                href='/terms',
                className='text-gray-40o0 hover:text-cyan-40o0 transition-colors',
              >,
                Terms of Service,
              </Link>,
              <Link,
                href='/cookies',
                className='text-gray-40o0 hover:text-cyan-40o0 transition-colors',
              >,
                Cookie Policy,
              </Link>,
            </div>,
            {/* Back to Top */,}
            <button,
              onClick={scrollToTop}
              className='w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hover:to-blue-70o0 rounded-xl flex items-center justify-center text-white transition-all duration-30o0 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-50o0/25',
            >,
              <ArrowUp className='w-5 h-5' />,
            </button>,
          </div>,
        </motion.div>,
      </div>,
      {/* Floating Elements */,}
      <div className='absolute inset-0 pointer-events-none'>,
        <motion.div,
          animate={{,
            y: [0, -20, 0],;
            opacity: [0.3, 0.6, 0.3],;
          }}
          transition={{,
            duration: 4,;
            repeat: Infinity,;
            ease: 'easeInOut',;
          }}
          className='absolute top-20 left-20 w-2 h-2 bg-cyan-40o0 rounded-full',
        />,
        <motion.div,
          animate={{,
            y: [0, 20, 0],;
            opacity: [0.4, 0.7, 0.4],;
          }}
          transition={{,
            duration: 6,;
            repeat: Infinity,;
            ease: 'easeInOut',;
            delay: 2,;
          }}
          className='absolute bottom-20 right-20 w-2 h-2 bg-purple-40o0 rounded-full',
        />,
        <motion.div,
          animate={{,
            x: [0, 20, 0],;
            opacity: [0.2, 0.5, 0.2],;
          }}
          transition={{,
            duration: 5,;
            repeat: Infinity,;
            ease: 'easeInOut',;
            delay: 1,;
          }}
          className='absolute top-1/2 left-10 w-2 h-2 bg-green-40o0 rounded-full',
        />,
      </div>,
    </footer>,
  ),
};
,
export default UltraFuturisticFooter20o31,
,