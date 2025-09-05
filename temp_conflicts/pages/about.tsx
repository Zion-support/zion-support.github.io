import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Globe, Target, Star, CheckCircle, TrendingUp, Lightbulb
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: &quot;Innovation First&quot;,
      description: &quot;We push the boundaries of what's possible with cutting-edge AI and quantum technologies&quot;
    },
    {
      icon: Shield,
      title: &quot;Trust & Security&quot;,
      description: &quot;Enterprise-grade security and privacy protection for all our solutions&quot;
    },
    {
      icon: Users,
      title: &quot;Human-Centric&quot;,
      description: &quot;Technology that empowers people and enhances human capabilities&quot;
    },
    {
      icon: Globe,
      title: &quot;Global Impact&quot;,
      description: &quot;Solutions that address real-world challenges across industries and borders&quot;
    }
  ];

  const milestones = [
    {
      year: &quot;2025&quot;,
      title: &quot;AI Autonomous Ecosystem Launch&quot;,
      description: &quot;Revolutionary autonomous AI solutions that adapt and evolve&quot;
    },
    {
      year: &quot;2024&quot;,
      title: &quot;Quantum Computing Breakthrough&quot;,
      description: &quot;Advanced quantum neural networks and consciousness capabilities&quot;
    },
    {
      year: &quot;2023&quot;,
      title: &quot;Edge Computing Platform&quot;,
      description: &quot;Intelligent edge orchestration and IoT management solutions&quot;
    },
    {
      year: &quot;2022&quot;,
      title: &quot;Company Foundation&quot;,
      description: &quot;Zion Tech Group established with vision for autonomous innovation&quot;
    }
  ];

  const team = [
    {
      name: &quot;Dr. Sarah Chen&quot;,
      role: &quot;Chief AI Officer&quot;,
      expertise: &quot;Quantum AI, Neural Networks, Consciousness Research&quot;
    },
    {
      name: &quot;Marcus Rodriguez&quot;,
      role: &quot;Chief Technology Officer&quot;,
      expertise: &quot;Edge Computing, IoT, Autonomous Systems&quot;
    },
    {
      name: &quot;Dr. Elena Petrova&quot;,
      role: &quot;Chief Quantum Officer&quot;,
      expertise: &quot;Quantum Computing, Cryptography, Materials Science&quot;
    },
    {
      name: &quot;Alex Thompson&quot;,
      role: &quot;Chief Innovation Officer&quot;,
      expertise: &quot;Emerging Technologies, Strategic Innovation, R&D&quot;
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | Leading AI & Quantum Innovation</title>
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and autonomous innovation. Discover our team, values, and vision for the future.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;Zion Tech Group, AI innovation, quantum computing, autonomous systems, technology leadership&quot; />
        <meta property=&quot;og:title&quot; content=&quot;About Us - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Leading-edge technology solutions and autonomous innovation platform.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/about&quot; />
      </Head>

      <EnhancedNavigation />

      <main className=&quot;min-h-screen bg-slate-900 text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
                About Zion Tech Group
              </h1>
              <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed&quot;>
                Pioneering the future of autonomous technology through revolutionary AI, 
                quantum computing, and consciousness evolution platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className=&quot;py-20 px-6 bg-slate-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                  Our Mission
                </h2>
                <p className=&quot;text-lg text-white/80 leading-relaxed mb-6&quot;>
                  To accelerate human progress by developing autonomous AI systems that 
                  think, learn, and evolve independently, solving complex challenges 
                  across industries and advancing our understanding of consciousness.
                </p>
                <p className=&quot;text-lg text-white/80 leading-relaxed&quot;>
                  We believe in creating technology that doesn't just assist humans, 
                  but collaborates with them as intelligent partners in innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=&quot;relative&quot;
              >
                <div className=&quot;relative z-10&quot;>
                  <div className=&quot;w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8&quot;>
                    <div className=&quot;flex items-center space-x-4 mb-6&quot;>
                      <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center&quot;>
                        <Target className=&quot;w-6 h-6 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white&quot;>Vision 2030</h3>
                    </div>
                    <p className=&quot;text-white/90 leading-relaxed&quot;>
                      A world where autonomous AI systems work seamlessly alongside humans, 
                      accelerating scientific discovery, solving global challenges, and 
                      expanding the boundaries of human consciousness and capability.
                    </p>
                  </div>
                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-3xl&quot;></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Our Core Values
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
                The principles that guide our innovation and shape our culture
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70&quot;>
                    <div className=&quot;w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                      <value.icon className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{value.title}</h3>
                    <p className=&quot;text-white/70 leading-relaxed&quot;>{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className=&quot;py-20 px-6 bg-slate-800/50&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Our Journey
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
                Key milestones in our mission to revolutionize autonomous technology
              </p>
            </motion.div>

            <div className=&quot;space-y-8&quot;>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className=&quot;lg:w-1/2&quot;>
                    <div className=&quot;p-8 rounded-2xl bg-slate-700/50 border border-white/10&quot;>
                      <div className=&quot;flex items-center space-x-4 mb-4&quot;>
                        <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center&quot;>
                          <Star className=&quot;w-6 h-6 text-white&quot; />
                        </div>
                        <span className=&quot;text-2xl font-bold text-blue-400&quot;>{milestone.year}</span>
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{milestone.title}</h3>
                      <p className=&quot;text-white/80 leading-relaxed&quot;>{milestone.description}</p>
                    </div>
                  </div>
                  <div className=&quot;lg:w-1/2 flex justify-center&quot;>
                    <div className=&quot;w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center&quot;>
                      <TrendingUp className=&quot;w-16 h-16 text-blue-400&quot; />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Leadership Team
              </h2>
              <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
                Visionary leaders driving innovation and shaping the future of autonomous technology
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70&quot;>
                    <div className=&quot;w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300&quot;>
                      <Users className=&quot;w-10 h-10 text-white&quot; />
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-2 text-center&quot;>{member.name}</h3>
                    <p className=&quot;text-blue-400 font-semibold mb-3 text-center&quot;>{member.role}</p>
                    <p className=&quot;text-white/70 leading-relaxed text-center&quot;>{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                Join Us in Shaping the Future
              </h2>
              <p className=&quot;text-xl text-white/80 mb-8 leading-relaxed&quot;>
                Ready to explore the possibilities of autonomous AI and quantum innovation? 
                Let's collaborate to build tomorrow's technology today.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Get in Touch
                </Link>
                <a
                  href=&quot;/careers&quot;
                  className=&quot;px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300&quot;
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
