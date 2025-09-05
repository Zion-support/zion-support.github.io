import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Satellite, Planet
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function SpaceTechnologyPage() {
  const services = [
    {
      title: &quot;Satellite Intelligence&quot;,
      description: &quot;Advanced satellite systems with AI-powered data analysis and optimization&quot;,
      features: [
        &quot;Satellite constellation management&quot;,
        &quot;Real-time data processing&quot;,
        &quot;AI-powered optimization&quot;,
        &quot;Global coverage&quot;
      ],
      price: &quot;$2,999/month&quot;,
      icon: Satellite
    },
    {
      title: &quot;Space Resource Discovery&quot;,
      description: &quot;AI-powered exploration and resource identification in space&quot;,
      features: [
        &quot;Resource mapping&quot;,
        &quot;Exploration planning&quot;,
        &quot;Data analysis&quot;,
        &quot;Mission optimization&quot;
      ],
      price: &quot;$3,499/month&quot;,
      icon: Planet
    },
    {
      title: &quot;Space Mission Planning&quot;,
      description: &quot;Intelligent mission planning and execution for space operations&quot;,
      features: [
        &quot;Mission design&quot;,
        &quot;Risk assessment&quot;,
        &quot;Resource optimization&quot;,
        &quot;Real-time monitoring&quot;
      ],
      price: &quot;$1,999/month&quot;,
      icon: Rocket
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: &quot;Cutting-Edge Technology&quot;,
      description: &quot;Latest space technology innovations and AI-powered systems&quot;
    },
    {
      icon: Globe,
      title: &quot;Global Reach&quot;,
      description: &quot;Access to space resources and global satellite coverage&quot;
    },
    {
      icon: Star,
      title: &quot;Future-Focused&quot;,
      description: &quot;Pioneering the next generation of space exploration&quot;
    },
    {
      icon: Zap,
      title: &quot;AI-Powered&quot;,
      description: &quot;Intelligent systems that optimize space operations&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Space Technology Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary space technology solutions including satellite intelligence, resource discovery, and mission planning services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;space technology, satellite intelligence, space exploration, space resources, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Space Technology Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary space technology solutions for the future of exploration.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/services/space-tech&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/space-tech&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-5 mx-auto mb-8&quot;>
              <Rocket className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent&quot;>
              Space Technology
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Explore the final frontier with our revolutionary space technology solutions. 
              From satellite intelligence to space resource discovery, we're pushing the boundaries of what's possible.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Explore Space</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent&quot;>
              Space Solutions
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Cutting-edge space technology services that redefine exploration
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-indigo-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-indigo-500/0 via-purple-400/10 to-indigo-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-4 mb-6&quot;>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-indigo-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-indigo-400 mb-4&quot;>{service.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent&quot;>
              Why Space Technology?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the revolutionary advantages of space technology innovation
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10&quot;
              >
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-4 flex-shrink-0&quot;>
                  <benefit.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{benefit.title}</h3>
                  <p className=&quot;text-white/70&quot;>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent&quot;>
              Ready to Explore Space?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join us in pioneering the future of space technology and exploration
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Launch Your Mission</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}