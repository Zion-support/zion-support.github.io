import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cpu, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Server, Database, Star, GitBranch, Cloud
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function DevOpsPage() {
  const services = [
    {
      title: &quot;CI/CD Pipeline&quot;,
      description: &quot;Automated continuous integration and deployment pipelines&quot;,
      features: [
        &quot;Automated testing&quot;,
        &quot;Deployment automation&quot;,
        &quot;Rollback capabilities&quot;,
        &quot;Performance monitoring&quot;
      ],
      price: &quot;$699/month&quot;,
      icon: GitBranch
    },
    {
      title: &quot;Infrastructure as Code&quot;,
      description: &quot;Manage infrastructure through code and automation&quot;,
      features: [
        &quot;Terraform automation&quot;,
        &quot;Cloud provisioning&quot;,
        &quot;Configuration management&quot;,
        &quot;Version control&quot;
      ],
      price: &quot;$899/month&quot;,
      icon: Cloud
    },
    {
      title: &quot;Monitoring & Observability&quot;,
      description: &quot;Comprehensive monitoring and observability solutions&quot;,
      features: [
        &quot;Real-time monitoring&quot;,
        &quot;Alert management&quot;,
        &quot;Performance metrics&quot;,
        &quot;Log analysis&quot;
      ],
      price: &quot;$599/month&quot;,
      icon: Server
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: &quot;Faster Deployment&quot;,
      description: &quot;Reduce deployment time from days to minutes with automation&quot;
    },
    {
      icon: Target,
      title: &quot;Improved Reliability&quot;,
      description: &quot;Increase system stability and reduce downtime&quot;
    },
    {
      icon: Users,
      title: &quot;Team Collaboration&quot;,
      description: &quot;Better collaboration between development and operations teams&quot;
    },
    {
      icon: Star,
      title: &quot;Cost Optimization&quot;,
      description: &quot;Optimize resource usage and reduce operational costs&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>DevOps & Infrastructure Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced DevOps and infrastructure solutions including CI/CD pipelines, infrastructure as code, and monitoring services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;DevOps, CI/CD, infrastructure as code, monitoring, automation, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;DevOps & Infrastructure Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced DevOps solutions for modern software development.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/services/devops&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/devops&quot; />
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
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 p-5 mx-auto mb-8&quot;>
              <Cpu className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent&quot;>
              DevOps & Infrastructure
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Streamline your development and operations with cutting-edge DevOps solutions. 
              From automated pipelines to infrastructure management, we optimize your entire workflow.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Optimize Workflow</span>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent&quot;>
              DevOps Services
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive DevOps solutions designed to accelerate your development cycle
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
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-yellow-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-yellow-500/0 via-orange-400/10 to-yellow-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-4 mb-6&quot;>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-yellow-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-yellow-400 mb-4&quot;>{service.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300&quot;
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent&quot;>
              Why DevOps?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the transformative benefits of modern DevOps practices
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
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-4 flex-shrink-0&quot;>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent&quot;>
              Ready to Transform Your Workflow?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our DevOps solutions can accelerate your development and operations
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Optimizing</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}