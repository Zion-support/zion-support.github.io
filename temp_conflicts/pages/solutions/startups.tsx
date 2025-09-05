import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Globe, Cpu, Database, Star, Lightbulb, Clock, DollarSign
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function StartupToolsPage() {
  const tools = [
    {
      title: &quot;Rapid Prototyping Platform&quot;,
      description: &quot;Fast-track your MVP development with our rapid prototyping tools&quot;,
      features: [
        &quot;Quick setup&quot;,
        &quot;Template library&quot;,
        &quot;Real-time collaboration&quot;,
        &quot;Instant deployment&quot;
      ],
      price: &quot;$99/month&quot;,
      icon: Lightbulb
    },
    {
      title: &quot;Startup AI Suite&quot;,
      description: &quot;AI-powered tools designed specifically for startup growth&quot;,
      features: [
        &quot;Customer insights&quot;,
        &quot;Market analysis&quot;,
        &quot;Growth optimization&quot;,
        &quot;Automated marketing&quot;
      ],
      price: &quot;$199/month&quot;,
      icon: Cpu
    },
    {
      title: &quot;Startup DevOps&quot;,
      description: &quot;Streamlined DevOps solutions for growing startups&quot;,
      features: [
        &quot;Automated deployment&quot;,
        &quot;Monitoring tools&quot;,
        &quot;Cost optimization&quot;,
        &quot;Scalable infrastructure&quot;
      ],
      price: &quot;$149/month&quot;,
      icon: Database
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: &quot;Fast Time-to-Market&quot;,
      description: &quot;Get your product to market quickly with our streamlined tools&quot;
    },
    {
      icon: DollarSign,
      title: &quot;Cost-Effective&quot;,
      description: &quot;Startup-friendly pricing that grows with your business&quot;
    },
    {
      icon: Users,
      title: &quot;Startup Community&quot;,
      description: &quot;Access to our network of startup founders and investors&quot;
    },
    {
      icon: Star,
      title: &quot;Proven Success&quot;,
      description: &quot;Tools that have helped hundreds of startups succeed&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>Startup Tools - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Innovative tools and platforms designed specifically for growing startups. Rapid prototyping, AI solutions, and DevOps automation.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;startup tools, rapid prototyping, startup AI, startup DevOps, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Startup Tools - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Innovative tools designed specifically for growing startups.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/solutions/startups&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/solutions/startups&quot; />
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
            <div className=&quot;w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5 mx-auto mb-8&quot;>
              <Rocket className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent&quot;>
              Startup Tools
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Innovative tools and platforms designed specifically for growing startups. 
              From rapid prototyping to AI-powered growth, we help startups succeed.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Building</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent&quot;>
              Startup Tools
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Essential tools designed to accelerate your startup's growth
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-purple-500/0 via-pink-400/10 to-purple-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 mb-6&quot;>
                  <tool.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{tool.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{tool.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-purple-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-purple-400 mb-4&quot;>{tool.price}</div>
                
                <motion.a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300&quot;
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent&quot;>
              Why Choose Startup Tools?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Discover the advantages of our startup-focused technology solutions
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
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 flex-shrink-0&quot;>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent&quot;>
              Ready to Accelerate Your Startup?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our startup tools can help you build, grow, and succeed
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Your Journey</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}