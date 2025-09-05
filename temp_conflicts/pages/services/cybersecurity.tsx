import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Lock, Cpu, Database, Globe, Star, Eye
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CybersecurityPage() {
  const services = [
    {
      title: &quot;Advanced Threat Detection&quot;,
      description: &quot;AI-powered threat detection and response with real-time monitoring&quot;,
      features: [
        &quot;24/7 threat monitoring&quot;,
        &quot;AI-powered analysis&quot;,
        &quot;Real-time alerts&quot;,
        &quot;Automated response&quot;
      ],
      price: &quot;$899/month&quot;,
      icon: Eye
    },
    {
      title: &quot;Zero-Trust Architecture&quot;,
      description: &quot;Implement comprehensive zero-trust security across your organization&quot;,
      features: [
        &quot;Identity verification&quot;,
        &quot;Access control&quot;,
        &quot;Network segmentation&quot;,
        &quot;Continuous monitoring&quot;
      ],
      price: &quot;$1,199/month&quot;,
      icon: Lock
    },
    {
      title: &quot;Incident Response&quot;,
      description: &quot;Rapid response and recovery from security incidents&quot;,
      features: [
        &quot;24/7 incident response&quot;,
        &quot;Forensic analysis&quot;,
        &quot;Recovery planning&quot;,
        &quot;Post-incident review&quot;
      ],
      price: &quot;$699/month&quot;,
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: &quot;Comprehensive Protection&quot;,
      description: &quot;Multi-layered security that protects against all types of threats&quot;
    },
    {
      icon: Zap,
      title: &quot;Real-Time Response&quot;,
      description: &quot;Instant detection and automated response to security threats&quot;
    },
    {
      icon: Users,
      title: &quot;Expert Team&quot;,
      description: &quot;24/7 support from cybersecurity experts and AI systems&quot;
    },
    {
      icon: Target,
      title: &quot;Compliance Ready&quot;,
      description: &quot;Meet all industry standards and regulatory requirements&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced cybersecurity solutions including threat detection, zero-trust architecture, and incident response services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;cybersecurity, threat detection, zero-trust, incident response, security, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cybersecurity Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced cybersecurity solutions for comprehensive protection.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/services/cybersecurity&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/cybersecurity&quot; />
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
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-5 mx-auto mb-8&quot;>
              <Shield className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent&quot;>
              Cybersecurity
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Protect your organization with cutting-edge cybersecurity solutions. 
              From advanced threat detection to zero-trust architecture, we keep you secure.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Secure Your Business</span>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent&quot;>
              Security Services
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive cybersecurity solutions designed to protect your digital assets
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
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-red-500/0 via-orange-400/10 to-red-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 mb-6&quot;>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-red-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-red-400 mb-4&quot;>{service.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300&quot;
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent&quot;>
              Why Choose Our Security?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Experience the highest level of protection with our proven security approach
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
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 flex-shrink-0&quot;>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent&quot;>
              Ready to Secure Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our cybersecurity solutions can protect your organization from evolving threats
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Get Protected</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}