import React from 'react';
import Head from 'next/head';
import {_Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Users, _Award, _Globe, _Target, _Star, _CheckCircle, _TrendingUp, _Lightbulb} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function AboutPage() {_const _values = [
    {
      icon: Brain, _title: "Innovation First", _description: "We push the boundaries of what's possible with cutting-edge AI and quantum technologies"},
    {_icon: Shield, _title: "Trust & Security", _description: "Enterprise-grade security and privacy protection for all our solutions"},
    {_icon: Users, _title: "Human-Centric", _description: "Technology that empowers people and enhances human capabilities"},
    {_icon: Globe, _title: "Global Impact", _description: "Solutions that address real-world challenges across industries and borders"}
  ];

  const _milestones = [
    {_year: "2025", _title: "AI Autonomous Ecosystem Launch", _description: "Revolutionary autonomous AI solutions that adapt and evolve"},
    {_year: "2024", _title: "Quantum Computing Breakthrough", _description: "Advanced quantum neural networks and consciousness capabilities"},
    {_year: "2023", _title: "Edge Computing Platform", _description: "Intelligent edge orchestration and IoT management solutions"},
    {_year: "2022", _title: "Company Foundation", _description: "Zion Tech Group established with vision for autonomous innovation"}
  ];

  const _team = [
    {_name: "Dr. Sarah Chen", _role: "Chief AI Officer", _expertise: "Quantum AI, _Neural Networks, _Consciousness Research"},
    {_name: "Marcus Rodriguez", _role: "Chief Technology Officer", _expertise: "Edge Computing, _IoT, _Autonomous Systems"},
    {_name: "Dr. Elena Petrova", _role: "Chief Quantum Officer", _expertise: "Quantum Computing, _Cryptography, _Materials Science"},
    {_name: "Alex Thompson", _role: "Chief Innovation Officer", _expertise: "Emerging Technologies, _Strategic Innovation, _R&D"}
  ];

  return (_<>
      <Head>
        <title>About Us - Zion Tech Group | Leading AI & Quantum Innovation</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize technology through AI, _quantum computing, _and autonomous innovation. Discover our team, _values, _and vision for the future." />
        <meta name="keywords" content="Zion Tech Group, _AI innovation, _quantum computing, _autonomous systems, _technology leadership" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {_/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of autonomous technology through revolutionary AI, _quantum computing, _and consciousness evolution platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {_/* Mission & Vision */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={_{ opacity: 0, _x: -20}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.8}}
                viewport={_{ once: true}}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  To accelerate human progress by developing autonomous AI systems that 
                  think, _learn, _and evolve independently, _solving complex challenges 
                  across industries and advancing our understanding of consciousness.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  We believe in creating technology that doesn't just assist humans, _but collaborates with them as intelligent partners in innovation.
                </p>
              </motion.div>

              <motion.div
                initial={_{ opacity: 0, _x: 20}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.8}}
                viewport={_{ once: true}}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Vision 2030</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      A world where autonomous AI systems work seamlessly alongside humans, _accelerating scientific discovery, _solving global challenges, _and 
                      expanding the boundaries of human consciousness and capability.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {_/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_values.map((value, _index) => (
                <motion.div
                  key={value.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{_value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{_value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Milestones */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize autonomous technology
              </p>
            </motion.div>

            <div className="space-y-8">
              {_milestones.map(_(milestone, _index) => (
                <motion.div
                  key={milestone.year}
                  initial={_{ opacity: 0, _x: index % 2 === 0 ? -20 : 20}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className={_`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2">
                    <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-blue-400">{_milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{_milestone.title}</h3>
                      <p className="text-white/80 leading-relaxed">{_milestone.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Visionary leaders driving innovation and shaping the future of autonomous technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {_team.map(_(member, _index) => (
                <motion.div
                  key={member.name}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{_member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3 text-center">{_member.role}</p>
                    <p className="text-white/70 leading-relaxed text-center">{_member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ready to explore the possibilities of autonomous AI and quantum innovation? 
                Let's collaborate to build tomorrow's technology today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Join Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
