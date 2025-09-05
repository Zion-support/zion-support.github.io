import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Shield, Cpu, Database, Globe, Star
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function AIMachineLearningPage() {
  const services = [
    {
      title: &quot;AI Business Intelligence&quot;,
      description: &quot;Transform raw data into actionable insights with advanced AI algorithms&quot;,
      features: [
        &quot;Real-time data processing&quot;,
        &quot;Predictive analytics&quot;,
        &quot;Custom AI dashboards&quot;,
        &quot;Natural language queries&quot;
      ],
      price: &quot;$499/month&quot;,
      icon: Brain
    },
    {
      title: &quot;Machine Learning Models&quot;,
      description: &quot;Custom ML models tailored to your business needs&quot;,
      features: [
        &quot;Custom model development&quot;,
        &quot;Training data preparation&quot;,
        &quot;Model optimization&quot;,
        &quot;Continuous learning&quot;
      ],
      price: &quot;$799/month&quot;,
      icon: Cpu
    },
    {
      title: &quot;AI Automation&quot;,
      description: &quot;Automate complex business processes with intelligent AI&quot;,
      features: [
        &quot;Process automation&quot;,
        &quot;Workflow optimization&quot;,
        &quot;Intelligent routing&quot;,
        &quot;Performance monitoring&quot;
      ],
      price: &quot;$599/month&quot;,
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: &quot;Increased Efficiency&quot;,
      description: &quot;Automate repetitive tasks and focus on strategic decisions&quot;
    },
    {
      icon: Target,
      title: &quot;Better Insights&quot;,
      description: &quot;Uncover hidden patterns and trends in your data&quot;
    },
    {
      icon: Users,
      title: &quot;Enhanced Customer Experience&quot;,
      description: &quot;Personalize interactions and improve satisfaction&quot;
    },
    {
      icon: Shield,
      title: &quot;Risk Mitigation&quot;,
      description: &quot;Identify and prevent potential issues before they occur&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Transform your business with cutting-edge AI and machine learning solutions. Custom AI models, business intelligence, and automation services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, machine learning, artificial intelligence, business intelligence, automation, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI & Machine Learning Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Transform your business with cutting-edge AI and machine learning solutions.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/services/ai-ml&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/ai-ml&quot; />
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
              <Brain className=&quot;w-10 h-10 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent&quot;>
              AI & Machine Learning
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8&quot;>
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From predictive analytics to intelligent automation, we deliver the future of technology.
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Get Started</span>
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
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent&quot;>
              Our AI Services
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive AI and machine learning solutions designed to drive innovation and growth
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
                className=&quot;relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105&quot;
              >
                <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-purple-500/0 via-pink-400/10 to-purple-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100&quot; />
                
                <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 mb-6&quot;>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-purple-400 flex-shrink-0&quot; />
                      <span className=&quot;text-white/80&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className=&quot;text-2xl font-bold text-purple-400 mb-4&quot;>{service.price}</div>
                
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
              Why Choose Our AI Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Experience the transformative power of AI with our proven approach
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
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our AI and machine learning solutions can drive innovation and growth for your organization
            </p>
            <motion.a
              href=&quot;mailto:kleber@ziontechgroup.com&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl&quot;
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}