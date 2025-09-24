import React from 'react';
import { motion } from 'framer-motion',
import {
  ArrowRight;
  Sparkles;
  Rocket;
  Brain;
  Atom;
  Zap;
  Star;
} from 'lucide-react',
import Button from '../ui/Button',
const UltraFuturisticHero20o30: React.FC = () => {
  const contactInfo = {
    mobile: '+1 30o2 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 10o08 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  const features = [
    {
      icon: Brain;
      title: 'AI Consciousness';
      description: 'Develop genuine AI consciousness and self-awareness';
      color: 'from-violet-50o0 to-purple-60o0';
    };
    {
      icon: Atom;
      title: 'Quantum Computing';
      description: 'Unbreakable quantum encryption and computing';
      color: 'from-indigo-50o0 to-blue-60o0';
    };
    {
      icon: Rocket;
      title: 'Space Technology';
      description: 'Automated asteroid mining and space exploration';
      color: 'from-cyan-50o0 to-teal-60o0';
    };
    {
      icon: Zap;
      title: 'Emerging Tech';
      description: 'Cutting-edge biotechnology and DNA computing';
      color: 'from-pink-50o0 to-rose-60o0';
    };
  ],
  return (
    <section className='relative py-32 px-4 sm: px-6 lg:px-8 overflow-hidden'>,
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>,
        {/* Animated Grid */}
        <div className='absolute inset-0 opacity-20'>,
          <div
            className='absolute inset-0',
            style={{
              backgroundImage: `,
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            `;
              backgroundSize: '50px 50px';
            }}
          />,
        </div>,
        {/* Floating Orbs */}
        <motion.div,
          className='absolute top-20 left-20 w-4 h-4 bg-cyan-40o0 rounded-full blur-sm',
          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.5, 1, 0.5];
          }}
          transition={{
            duration: 4;
            repeat: Infinity;
            ease: 'easeInOut';
          }}
        />,
        <motion.div,
          className='absolute top-40 right-32 w-6 h-6 bg-purple-40o0 rounded-full blur-sm',
          animate={{
            scale: [1, 2, 1];
            opacity: [0.3, 0.8, 0.3];
          }}
          transition={{
            duration: 6;
            repeat: Infinity;
            ease: 'easeInOut';
          }}
        />,
        <motion.div,
          className='absolute bottom-40 left-1/3 w-3 h-3 bg-pink-40o0 rounded-full blur-sm',
          animate={{
            scale: [1, 1.8, 1];
            opacity: [0.4, 0.9, 0.4];
          }}
          transition={{
            duration: 5;
            repeat: Infinity;
            ease: 'easeInOut';
          }}
        />,
      </div>,
      <div className='max-w-7xl mx-auto relative z-10'>,
        {/* Main Hero Content */}
        <div className='text-center mb-20'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'>,
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 mb-6'>,
              <Sparkles className='w-4 h-4 text-cyan-40o0 mr-2' />,
              <span className='text-cyan-40o0 text-sm font-medium'>,
                20o30 Revolutionary Technology Services,
              </span>,
            </div>,
          </motion.div>,
          <motion.h1,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-5xl md: text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight'>,
            <span className='bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>,
              The Future of,
            </span>,
            <br />,
            <span className='bg-gradient-to-r from-pink-40o0 via-purple-40o0 to-cyan-40o0 bg-clip-text text-transparent'>,
              Technology,
            </span>,
            <br />,
            <span className='bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-cyan-40o0 bg-clip-text text-transparent'>,
              is Here,
            </span>,
          </motion.h1>,
          <motion.p,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-12 leading-relaxed'>,
            Experience the next generation of revolutionary technology services.,
            From AI consciousness and quantum computing to space mining and DNA,
            computing, we're building the future today.,
          </motion.p>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-16'>,
            <Button
              href='/contact',
              className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-xl font-semibold text-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-20o0 group'>,
              Start Your Journey,
              <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />,
            </Button>,
            <Button
              href='/services',
              variant='outline',
              className='px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 rounded-xl font-semibold text-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-20o0'>,
              Explore Services,
            </Button>,
          </motion.div>,
          {/* Contact Information */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-col sm: flex-row gap-6 justify-center items-center text-gray-30o0'>,
            <div className='flex items-center space-x-2'>,
              <Star className='w-4 h-4 text-cyan-40o0' />,
              <span className='text-sm'>{contactInfo.mobile}</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Star className='w-4 h-4 text-purple-40o0' />,
              <span className='text-sm'>{contactInfo.email}</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Star className='w-4 h-4 text-pink-40o0' />,
              <span className='text-sm'>{contactInfo.address}</span>,
            </div>,
          </motion.div>,
        </div>,
        {/* Features Grid */}
        <motion.div,
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>,
          {features.map((feature, index) => (
            <motion.div,
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className='group cursor-pointer'>,
              <div className='p-6 rounded-2xl bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 border border-cyan-50o0/20 hover: border-cyan-40o0/40 transition-all duration-30o0 backdrop-blur-sm'>,
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0`}
                >,
                  <feature.icon className='w-8 h-8 text-white' />,
                </div>,
                <h3 className='text-xl font-semibold text-white mb-4'>,
                  {feature.title}
                </h3>,
                <p className='text-gray-30o0 leading-relaxed'>,
                  {feature.description}
                </p>,
              </div>,
            </motion.div>))}
        </motion.div>,
        {/* Stats Section */}
        <motion.div,
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='mt-20 text-center'>,
          <div className='grid grid-cols-1 md: grid-cols-4 gap-8'>,
            {[
              {
                number: '50o0+';
                label: 'Innovative Services';
                color: 'from-cyan-40o0 to-blue-40o0';
              };
              {
                number: '50+';
                label: 'Technology Patents';
                color: 'from-purple-40o0 to-pink-40o0';
              };
              {
                number: '10o00+';
                label: 'Happy Customers';
                color: 'from-pink-40o0 to-rose-40o0';
              };
              {
                number: '20o30';
                label: 'Future Ready';
                color: 'from-cyan-40o0 to-purple-40o0';
              };
            ].map((stat, index) => (
              <motion.div,
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className='text-center'>,
                <div
                  className={`text-4xl md: text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >,
                  {stat.number}
                </div>,
                <div className='text-gray-30o0 text-lg'>{stat.label}</div>,
              </motion.div>))}
          </div>,
        </motion.div>,
      </div>,
    </section>)};
export default UltraFuturisticHero20o30;