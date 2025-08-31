import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe,
  Building2,
  Brain,
  Shield,
  Cloud,
  Target,
  Rocket
} from 'lucide-react';

export default function Leadership() {
  const executives = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years of experience in AI and enterprise technology. Former AI researcher at leading tech companies, Kleber has pioneered numerous breakthrough technologies in autonomous business operations.',
      image: '/team/kleber.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      achievements: ['AI Innovation Award 2023', 'Forbes 30 Under 30', '500+ Projects Delivered']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & Chief AI Officer',
      bio: 'Leading AI researcher with PhD in Machine Learning from MIT. Expert in quantum computing and neural networks, Sarah drives our technical innovation and AI strategy.',
      image: '/team/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      achievements: ['MIT Technology Review Innovator', '100+ AI Patents', 'Quantum Computing Pioneer']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Operations Officer',
      bio: 'Operations expert with deep experience in scaling technology companies. Michael ensures seamless delivery of our solutions and maintains our high service standards.',
      image: '/team/michael.jpg',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      achievements: ['Operations Excellence Award', '15+ Years Experience', 'Global Team Leadership']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Research Officer',
      bio: 'Leading researcher in emerging technologies with focus on quantum computing and edge AI. Emily drives our R&D initiatives and technology roadmap.',
      image: '/team/emily.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily@ziontechgroup.com',
      achievements: ['Nobel Prize Nominee', '50+ Research Papers', 'Quantum AI Pioneer']
    }
  ];

  const advisors = [
    {
      name: 'Dr. James Wilson',
      role: 'Strategic Advisor',
      bio: 'Former CTO of Fortune 500 companies with expertise in digital transformation and enterprise architecture.',
      image: '/team/james.jpg',
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'Financial Advisor',
      bio: 'Investment banking veteran with 25+ years experience in technology financing and strategic partnerships.',
      image: '/team/lisa.jpg',
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa@ziontechgroup.com'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to stay ahead of the curve.'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on transparency, honesty, and ethical business practices.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We measure success by the tangible impact our solutions have on our clients\' businesses.'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'We foster a culture of collaboration, continuous learning, and professional growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders and brilliant minds driving innovation at Zion Tech Group. Our executive team combines decades of experience with cutting-edge expertise to shape the future of business technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Executive Leadership
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our C-suite executives bring together diverse expertise and shared vision to drive Zion Tech Group's mission forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl p-8 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center border-2 border-zion-cyan/30">
                      <Users className="w-16 h-16 text-zion-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zion-cyan mb-2">{executive.name}</h3>
                    <p className="text-lg text-zion-purple mb-4">{executive.role}</p>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{executive.bio}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-3 uppercase tracking-wide">Key Achievements</h4>
                      <div className="space-y-2">
                        {executive.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <Award className="w-4 h-4 text-zion-cyan mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={executive.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={executive.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${executive.email}`}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry veterans and domain experts who provide strategic guidance and industry insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zion-cyan">{advisor.name}</h3>
                    <p className="text-zion-purple">{advisor.role}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">{advisor.bio}</p>
                <div className="flex items-center space-x-4">
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${advisor.email}`}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Leadership Principles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The core values and principles that guide our leadership team in every decision and action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-darker rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <value.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
                Our Leadership Culture
              </h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                At Zion Tech Group, we believe in servant leadership, empowering our teams, and fostering an environment where innovation thrives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                  <p className="text-zion-slate-light">Transparent communication and open dialogue</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                  <p className="text-zion-slate-light">Continuous learning and professional development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                  <p className="text-zion-slate-light">Data-driven decision making</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                  <p className="text-zion-slate-light">Customer-centric approach to innovation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
                <h3 className="text-2xl font-bold text-zion-cyan mb-4">Leadership Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Team Satisfaction</span>
                    <span className="text-zion-cyan font-bold">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Innovation Rate</span>
                    <span className="text-zion-cyan font-bold">+40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Client Retention</span>
                    <span className="text-zion-cyan font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Growth Rate</span>
                    <span className="text-zion-cyan font-bold">+300%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Join Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for exceptional leaders who share our vision and passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}