import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Building, Rocket, Factory
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function SolutionsPage() {
  const solutionCategories = [
    {
      title: &quot;Enterprise Solutions&quot;,
      description: &quot;Comprehensive technology solutions for large enterprises&quot;,
      icon: Building,
      color: &quot;from-blue-500 to-cyan-500&quot;,
      href: &quot;/solutions/enterprise&quot;,
      features: [
        &quot;Scalable architecture&quot;,
        &quot;Enterprise security&quot;,
        &quot;24/7 support&quot;,
        &quot;Custom development&quot;
      ]
    },
    {
      title: &quot;Startup Tools&quot;,
      description: &quot;Innovative tools and platforms for growing startups&quot;,
      icon: Rocket,
      color: &quot;from-purple-500 to-pink-500&quot;,
      href: &quot;/solutions/startups&quot;,
      features: [
        &quot;Rapid prototyping&quot;,
        &quot;Cost-effective solutions&quot;,
        &quot;Scalable growth&quot;,
        &quot;Modern tech stack&quot;
      ]
    },
    {
      title: &quot;Industry Specialized&quot;,
      description: &quot;Tailored solutions for specific industry requirements&quot;,
      icon: Factory,
      color: &quot;from-emerald-500 to-teal-500&quot;,
      href: &quot;/solutions/industry&quot;,
      features: [
        &quot;Industry expertise&quot;,
        &quot;Compliance ready&quot;,
        &quot;Best practices&quot;,
        &quot;Domain knowledge&quot;
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: &quot;Tailored Solutions&quot;,
      description: &quot;Custom solutions designed specifically for your business needs&quot;
    },
    {
      icon: Zap,
      title: &quot;Rapid Implementation&quot;,
      description: &quot;Quick deployment and fast time-to-value&quot;
    },
    {
      icon: Users,
      title: &quot;Expert Support&quot;,
      description: &quot;24/7 support from our team of technology experts&quot;
    },
    {
      icon: Star,
      title: &quot;Proven Results&quot;,
      description: &quot;Track record of successful implementations and transformations&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Technology Solutions - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive technology solutions for enterprises, startups, and specialized industries. Custom solutions designed for your business needs.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;technology solutions, enterprise solutions, startup tools, industry solutions, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Technology Solutions - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive technology solutions for your business needs.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/solutions&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/solutions&quot; />
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
              <Shield className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent&quot;>
              Technology Solutions
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Comprehensive technology solutions designed to transform your business. 
              From enterprise-scale deployments to startup innovation, we deliver results.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Explore Solutions</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Solutions Categories */}
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
              Solution Categories
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Choose the right solution category for your business needs
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {solutionCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className={`pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r ${category.color.replace('from-', 'from-').replace('to-', 'to-')}/0 via-${category.color.split('-')[1]}-400/10 to-${category.color.split('-')[3]}-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100`} />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mb-6`}>
                  <category.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{category.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{category.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={category.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300&quot;
                >
                  Learn More
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
              Why Choose Our Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Experience the advantages of working with Zion Tech Group
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
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our technology solutions can drive innovation and growth for your organization
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Get Started</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}