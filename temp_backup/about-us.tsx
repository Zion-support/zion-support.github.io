import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Target, Zap, Globe, Shield, 
  Award, TrendingUp, Lightbulb, Rocket, Star
} from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Projects Delivered', value: '500+', icon: Rocket },
    { label: 'Team Members', value: '100+', icon: Users },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Innovation Patents', value: '25+', icon: Lightbulb },
    { label: 'Global Reach', value: '50+', icon: Globe }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We work as an extension of your team, ensuring every solution drives real business value.',
      icon: Target,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      icon: Award,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships, both for our team and our clients.',
      icon: Users,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology solutions.'
    },
    {
      year: '2015',
      title: 'AI Breakthrough',
      description: 'Launched our first AI-powered automation platform, marking a new era in intelligent solutions.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 50+ countries with cutting-edge technology.'
    },
    {
      year: '2025',
      title: 'Quantum Innovation',
      description: 'Pioneering quantum computing solutions and autonomous business operations.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/about-us" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              We are a revolutionary technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and intelligent automation solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </a>
              <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                View Case Studies
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                  to leverage the power of AI, quantum computing, and intelligent automation to achieve 
                  unprecedented growth and efficiency.
                </p>
                <div className="flex items-center space-x-3 text-cyan-400">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">Revolutionizing Business Technology</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  To be the global leader in autonomous business solutions, creating a future where 
                  technology works seamlessly with human creativity to solve the world's most complex challenges.
                </p>
                <div className="flex items-center space-x-3 text-purple-400">
                  <Globe className="w-6 h-6" />
                  <span className="font-semibold">Shaping the Future of Technology</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we serve our clients.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                From humble beginnings to global technology leader.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 px-8">
                      <div className={`text-right ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900" />
                    <div className="w-1/2 px-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Join hundreds of companies already leveraging our cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}