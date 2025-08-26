import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Zap, Brain, Shield, Heart, Target } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      avatar: 'SC',
      bio: 'Leading our AI initiatives with 15+ years in machine learning and data science.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Compliance',
      avatar: 'MR',
      bio: 'Expert in enterprise security with certifications in CISSP and ethical hacking.'
    },
    {
      name: 'Dr. James Kim',
      role: 'Quantum Computing Lead',
      expertise: 'Quantum Computing & Physics',
      avatar: 'JK',
      bio: 'PhD in Quantum Physics with research experience at leading institutions.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Cloud Architecture Director',
      expertise: 'Cloud & DevOps',
      avatar: 'LT',
      bio: 'Specialist in multi-cloud solutions and enterprise architecture design.'
    },
    {
      name: 'David Park',
      role: 'Blockchain Solutions Lead',
      expertise: 'Blockchain & DeFi',
      avatar: 'DP',
      bio: 'Pioneer in blockchain technology with experience in DeFi and smart contracts.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Sustainability Director',
      expertise: 'Green Tech & ESG',
      avatar: 'EW',
      bio: 'Environmental scientist focused on sustainable technology solutions.'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security and privacy are at the core of everything we build.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering value.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our team of experts brings together decades 
              of experience in cutting-edge technology, innovation, and business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our leadership team combines deep technical expertise with strategic business acumen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium mb-1">{member.role}</p>
                  <p className="text-zion-slate-light text-sm mb-4">{member.expertise}</p>
                </div>
                <p className="text-zion-slate-light text-center leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">15+</div>
              <div className="text-zion-slate-light">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-zion-blue mb-2">100+</div>
              <div className="text-zion-slate-light">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">25+</div>
              <div className="text-zion-slate-light">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              We\'re always looking for talented individuals who share our passion for innovation and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                View Open Positions
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;