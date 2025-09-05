import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Atom, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Shield, Cpu, Database, Globe, Star, Lock
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function QuantumComputingPage() {
  const services = [
    {
      title: &quot;Quantum Cybersecurity&quot;,
      description: &quot;Future-proof security with quantum-resistant encryption and advanced threat detection&quot;,
      features: [
        &quot;Quantum-resistant algorithms&quot;,
        &quot;Post-quantum cryptography&quot;,
        &quot;Advanced threat detection&quot;,
        &quot;Zero-trust architecture&quot;
      ],
      price: &quot;$1,299/month&quot;,
      icon: Shield
    },
    {
      title: &quot;Quantum Neural Networks&quot;,
      description: &quot;Revolutionary quantum-powered AI with advanced consciousness capabilities&quot;,
      features: [
        &quot;Quantum neural processing&quot;,
        &quot;Advanced consciousness AI&quot;,
        &quot;Quantum machine learning&quot;,
        &quot;Real-time optimization&quot;
      ],
      price: &quot;$2,499/month&quot;,
      icon: Atom
    },
    {
      title: &quot;Quantum Optimization&quot;,
      description: &quot;Solve complex optimization problems with quantum computing power&quot;,
      features: [
        &quot;Combinatorial optimization&quot;,
        &quot;Quantum annealing&quot;,
        &quot;Resource allocation&quot;,
        &quot;Performance optimization&quot;
      ],
      price: &quot;$899/month&quot;,
      icon: Cpu
    }
  ];

  const benefits = [
    {
      icon: Lock,
      title: &quot;Unbreakable Security&quot;,
      description: &quot;Quantum-resistant encryption that future-proofs your data protection&quot;
    },
    {
      icon: Zap,
      title: &quot;Exponential Speed&quot;,
      description: &quot;Solve complex problems in seconds that would take classical computers years&quot;
    },
    {
      icon: Target,
      title: &quot;Advanced AI&quot;,
      description: &quot;Quantum-powered artificial intelligence with unprecedented capabilities&quot;
    },
    {
      icon: Globe,
      title: &quot;Future-Ready&quot;,
      description: &quot;Stay ahead of the curve with cutting-edge quantum technology&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionary quantum computing solutions including quantum cybersecurity, neural networks, and optimization services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;quantum computing, quantum cybersecurity, quantum AI, quantum neural networks, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Quantum Computing Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary quantum computing solutions for the future.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/services/quantum&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/quantum&quot; />
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
              <Atom className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent&quot;>
              Quantum Computing
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Experience the future of computing with our revolutionary quantum solutions. 
              From unbreakable cybersecurity to advanced AI consciousness, we're building tomorrow's technology today.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Explore Quantum</span>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Quantum Solutions
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Cutting-edge quantum computing services that redefine what's possible
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
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-blue-500/0 via-cyan-400/10 to-blue-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 mb-6&quot;>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-blue-400 mb-4&quot;>{service.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300&quot;
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Why Quantum Computing?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the revolutionary advantages of quantum technology
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
              Ready for the Quantum Future?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join us at the forefront of quantum computing innovation and secure your place in the future
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Quantum Journey</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}