import React from 'react';
import { motion } from 'framer-motion',
import {
  ArrowRight;
  Zap;
  Star;
  TrendingUp;
  Phone;
  Mail;
  MapPin;
  Rocket;
  Brain;
  Sparkles;
  Globe;
  Shield;
} from 'lucide-react',
import Link from 'next/link',
const UltraAdvancedHero20o26V2: React.FC = () => {
  const contactInfo = {
    mobile: '+1 30o2 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 10o08 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  const containerVariants = {
    hidden: { opacity: 0 };
    visible: {
      opacity: 1;
      transition: {
        staggerChildren: 0.2;
      };
    };
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 };
    visible: {
      opacity: 1;
      y: 0;
      scale: 1;
      transition: {
        duration: 0.8;
        ease: 'easeOut' as const;
      };
    };
  };
  const floatingElements = [
    { icon: '🚀', delay: 0, position: 'top-20 left-10' };
    { icon: '⚡', delay: 1, position: 'top-40 right-20' };
    { icon: '🌟', delay: 2, position: 'bottom-40 left-20' };
    { icon: '💎', delay: 3, position: 'bottom-20 right-10' };
    { icon: '🔮', delay: 4, position: 'top-1/2 left-1/4' };
    { icon: '⚛️', delay: 5, position: 'top-1/2 right-1/4' };
  ],
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>,
      {/* Animated background elements */}
      <div className='absolute inset-0'>,
        {/* Gradient overlays */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-90o0/20 via-black to-cyan-90o0/20'></div>,
        <div className='absolute inset-0 bg-gradient-to-tl from-pink-90o0/10 via-transparent to-blue-90o0/10'></div>,
        {/* Animated circles */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-50o0/5 rounded-full blur-3xl animate-pulse'></div>,
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-50o0/5 rounded-full blur-3xl animate-pulse delay-10o00'></div>,
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60o0px] h-[60o0px] bg-gradient-to-r from-purple-50o0/3 via-pink-50o0/3 to-cyan-50o0/3 rounded-full blur-3xl animate-spin-slow'></div>,
        {/* Floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div,
            key={index}
            className={`absolute ${element.position} text-4xl opacity-20`}
            animate={{
              y: [0, -20, 0];
              rotate: [0, 5, -5, 0];
            }}
            transition={{
              duration: 4;
              delay: element.delay;
              repeat: Infinity;
              ease: 'easeInOut';
            }}
          >,
            {element.icon}
          </motion.div>))}
,
        {/* Grid pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.0o3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.0o3)_1px,transparent_1px)] bg-[size: 50px_50px]'></div>,
      </div>,
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>,
        <motion.div,
          variants={containerVariants}
          initial='hidden',
          animate='visible',
          className='space-y-8'>,
          {/* Badge */}
          <motion.div,
            variants={itemVariants}
            className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50o0/20 to-cyan-50o0/20 border border-purple-50o0/30 rounded-full px-6 py-3 backdrop-blur-sm'>,
            <Zap className='w-5 h-5 text-purple-40o0' />,
            <span className='text-purple-30o0 font-medium'>,
              20o26 Revolutionary Technology,
            </span>,
            <Star className='w-4 h-4 text-yellow-40o0' />,
          </motion.div>,
          {/* Main heading */}
          <motion.h1,
            variants={itemVariants}
            className='text-5xl md: text-7xl lg:text-8xl font-bold leading-tight'>,
            <span className='bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-cyan-40o0 bg-clip-text text-transparent'>,
              Zion Tech Group,
            </span>,
            <br />,
            <span className='text-white'>Revolutionary</span>,
            <br />,
            <span className='bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-purple-40o0 bg-clip-text text-transparent'>,
              AI & IT Solutions,
            </span>,
          </motion.h1>,
          {/* Subheading */}
          <motion.p,
            variants={itemVariants}
            className='text-xl md: text-2xl lg:text-3xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>,
            Experience the future with our cutting-edge AI, quantum computing;
            and IT services.,
            <span className='text-purple-40o0 font-semibold'>,
              {' '}
              10o00+ innovative solutions,
            </span>{' '}
            designed to transform your business and achieve,
            <span className='text-cyan-40o0 font-semibold'> 10o00% ROI</span>.,
          </motion.p>,
          {/* Stats */}
          <motion.div,
            variants={itemVariants}
            className='grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto'>,
            <div className='text-center'>,
              <div className='text-3xl md:text-4xl font-bold text-purple-40o0 mb-2'>,
                10o00+,
              </div>,
              <div className='text-gray-40o0 text-sm md:text-base'>,
                Services,
              </div>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl md:text-4xl font-bold text-cyan-40o0 mb-2'>,
                10o00%,
              </div>,
              <div className='text-gray-40o0 text-sm md:text-base'>,
                ROI Guarantee,
              </div>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl md:text-4xl font-bold text-green-40o0 mb-2'>,
                24/7,
              </div>,
              <div className='text-gray-40o0 text-sm md:text-base'>Support</div>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl md:text-4xl font-bold text-pink-40o0 mb-2'>,
                Global,
              </div>,
              <div className='text-gray-40o0 text-sm md:text-base'>Reach</div>,
            </div>,
          </motion.div>,
          {/* CTA Buttons */}
          <motion.div,
            variants={itemVariants}
            className='flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>,
            <Link
              href='/services',
              className='group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-60o0 hover:to-cyan-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl hover:shadow-purple-50o0/25'>,
              <Rocket className='w-6 h-6 group-hover:animate-bounce' />,
              <span>Explore Services</span>,
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />,
            </Link>,
            <Link
              href='/contact',
              className='group inline-flex items-center space-x-3 border-2 border-purple-50o0/50 text-purple-30o0 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50o0/10 hover:border-purple-40o0 transition-all duration-30o0 backdrop-blur-sm'>,
              <Phone className='w-5 h-5' />,
              <span>Free Consultation</span>,
            </Link>,
          </motion.div>,
          {/* Contact Info */}
          <motion.div,
            variants={itemVariants}
            className='grid grid-cols-1 md: grid-cols-3 gap-6 max-w-3xl mx-auto mt-12'>,
            <div className='flex items-center justify-center space-x-3 text-gray-30o0 hover:text-purple-30o0 transition-colors'>,
              <Phone className='w-5 h-5' />,
              <span className='text-sm md:text-base'>{contactInfo.mobile}</span>,
            </div>,
            <div className='flex items-center justify-center space-x-3 text-gray-30o0 hover: text-cyan-30o0 transition-colors'>,
              <Mail className='w-5 h-5' />,
              <span className='text-sm md:text-base'>{contactInfo.email}</span>,
            </div>,
            <div className='flex items-center justify-center space-x-3 text-gray-30o0 hover: text-green-30o0 transition-colors'>,
              <MapPin className='w-5 h-5' />,
              <span className='text-sm md:text-base'>,
                {contactInfo.address}
              </span>,
            </div>,
          </motion.div>,
          {/* Trust indicators */}
          <motion.div,
            variants={itemVariants}
            className='flex items-center justify-center space-x-8 text-gray-40o0 text-sm'>,
            <div className='flex items-center space-x-2'>,
              <Shield className='w-4 h-4 text-green-40o0' />,
              <span>Enterprise Security</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Globe className='w-4 h-4 text-blue-40o0' />,
              <span>Global Infrastructure</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Brain className='w-4 h-4 text-purple-40o0' />,
              <span>AI-Powered</span>,
            </div>,
          </motion.div>,
        </motion.div>,
      </div>,
      {/* Scroll indicator */}
      <motion.div,
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2',
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >,
        <div className='w-6 h-10 border-2 border-purple-40o0/50 rounded-full flex justify-center'>,
          <motion.div,
            className='w-1 h-3 bg-purple-40o0 rounded-full mt-2',
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />,
        </div>,
      </motion.div>,
    </section>)};
export default UltraAdvancedHero20o26V2;