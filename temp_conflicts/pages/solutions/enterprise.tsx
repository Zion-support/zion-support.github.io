import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Shield, Scale, Clock
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function EnterpriseSolutionsPage() {
  const solutions = [
    {
      title: &quot;Enterprise AI Platform&quot;,
      description: &quot;Comprehensive AI platform designed for large-scale enterprise operations&quot;,
      features: [
        &quot;Scalable AI infrastructure&quot;,
        &quot;Enterprise-grade security&quot;,
        &quot;Custom model development&quot;,
        &quot;24/7 support&quot;
      ],
      price: &quot;Custom Pricing&quot;,
      icon: Cpu
    },
    {
      title: &quot;Quantum Security Suite&quot;,
      description: &quot;Enterprise-level quantum-resistant cybersecurity solutions&quot;,
      features: [
        &quot;Quantum-resistant encryption&quot;,
        &quot;Advanced threat detection&quot;,
        &quot;Compliance ready&quot;,
        &quot;Global deployment&quot;
      ],
      price: &quot;Custom Pricing&quot;,
      icon: Shield
    },
    {
      title: &quot;Enterprise DevOps&quot;,
      description: &quot;Comprehensive DevOps solutions for enterprise-scale operations&quot;,
      features: [
        &quot;CI/CD automation&quot;,
        &quot;Infrastructure as code&quot;,
        &quot;Monitoring & alerting&quot;,
        &quot;Performance optimization&quot;
      ],
      price: &quot;Custom Pricing&quot;,
      icon: Database
    }
  ];

  const benefits = [
    {
      icon: Scale,
      title: &quot;Enterprise Scale&quot;,
      description: &quot;Solutions designed to handle the largest enterprise workloads&quot;
    },
    {
      icon: Shield,
      title: &quot;Enterprise Security&quot;,
      description: &quot;Bank-level security and compliance for your critical operations&quot;
    },
    {
      icon: Users,
      title: &quot;Dedicated Support&quot;,
      description: &quot;24/7 dedicated support team for enterprise clients&quot;
    },
    {
      icon: Star,
      title: &quot;Custom Solutions&quot;,
      description: &quot;Tailored solutions designed specifically for your business needs&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive enterprise technology solutions including AI platforms, quantum security, and DevOps automation for large organizations.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;enterprise solutions, enterprise AI, enterprise security, enterprise DevOps, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Enterprise Solutions - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive enterprise technology solutions for large organizations.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/solutions/enterprise&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/solutions/enterprise&quot; />
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
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 mx-auto mb-8&quot;>
              <Building className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent&quot;>
              Enterprise Solutions
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Comprehensive technology solutions designed for enterprise-scale operations. 
              From AI platforms to quantum security, we deliver the solutions your organization needs.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Discuss Enterprise Needs</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Enterprise Solutions
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive technology solutions designed for enterprise-scale operations
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-blue-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 mb-6&quot;>
                  <solution.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{solution.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{solution.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-blue-400 mb-4&quot;>{solution.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                >
                  Get Quote
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Why Choose Enterprise Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the advantages of our enterprise-grade technology solutions
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
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 flex-shrink-0&quot;>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Ready to Transform Your Enterprise?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our enterprise solutions can drive innovation and growth for your organization
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Enterprise Journey</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}