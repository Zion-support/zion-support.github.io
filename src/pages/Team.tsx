import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Star,
  Award,
  Users,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Heart,
  Shield,
  Cpu,
  Atom,
  TrendingUp,
  Target,
  CheckCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with over 15 years of experience in AI, quantum computing, and emerging technologies. Former CTO at major tech companies, leading Zion Tech Group to revolutionize the technology landscape.',
      image: '/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Quantum Computing', 'Digital Transformation', 'Innovation Leadership'],
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', 'Quantum Computing Pioneer']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Leading AI researcher with PhD from MIT, specializing in machine learning, neural networks, and autonomous systems. Driving technological innovation across all Zion Tech Group solutions.',
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'Research & Development'],
      achievements: ['MIT PhD', 'Google AI Research Fellow', '100+ Research Papers']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Security Officer',
      bio: 'Cybersecurity expert with 20+ years protecting Fortune 500 companies. Specializing in AI-powered security, quantum cryptography, and zero-trust architectures.',
      image: '/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      email: 'marcus@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Quantum Cryptography', 'Zero-Trust Security', 'Threat Intelligence'],
      achievements: ['CISSP', 'CISM', 'Former FBI Cyber Division', 'Security Innovation Award']
    }
  ];

  const teamMembers = [
    {
      name: 'Emily Watson',
      role: 'Head of AI Research',
      bio: 'Leading our AI research initiatives, focusing on autonomous systems and consciousness simulation.',
      image: '/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com',
      expertise: ['AI Research', 'Autonomous Systems', 'Consciousness Simulation']
    },
    {
      name: 'James Kim',
      role: 'Quantum Computing Lead',
      bio: 'Quantum physicist developing next-generation quantum computing solutions for complex problem-solving.',
      image: '/team/james-kim.jpg',
      linkedin: 'https://linkedin.com/in/jameskim',
      email: 'james@ziontechgroup.com',
      expertise: ['Quantum Physics', 'Quantum Algorithms', 'Quantum AI']
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Product',
      bio: 'Product visionary transforming complex AI technologies into user-friendly solutions.',
      image: '/team/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alexthompson',
      email: 'alex@ziontechgroup.com',
      expertise: ['Product Strategy', 'UX Design', 'AI Product Development']
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Healthcare AI Director',
      bio: 'Medical AI specialist developing diagnostic and treatment optimization systems.',
      image: '/team/lisa-park.jpg',
      linkedin: 'https://linkedin.com/in/lisapark',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Medical AI', 'Diagnostics', 'Healthcare Technology']
    },
    {
      name: 'David Chen',
      role: 'Blockchain & Web3 Lead',
      bio: 'Blockchain architect building decentralized AI networks and Web3 infrastructure.',
      image: '/team/david-chen.jpg',
      linkedin: 'https://linkedin.com/in/davidchen',
      email: 'david@ziontechgroup.com',
      expertise: ['Blockchain', 'Web3', 'DeFi', 'Smart Contracts']
    },
    {
      name: 'Rachel Green',
      role: 'Head of Customer Success',
      bio: 'Ensuring client success through strategic implementation and ongoing support.',
      image: '/team/rachel-green.jpg',
      linkedin: 'https://linkedin.com/in/rachelgreen',
      email: 'rachel@ziontechgroup.com',
      expertise: ['Customer Success', 'Implementation', 'Strategic Consulting']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      icon: Zap,
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Ethical AI',
      icon: Heart,
      description: 'We develop AI solutions that are fair, transparent, and beneficial to humanity.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Client Success',
      icon: Target,
      description: 'Your success is our success. We\'re committed to delivering measurable results.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      icon: Brain,
      description: 'We stay ahead of the curve through continuous research and development.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '100+', label: 'AI Models', icon: Brain },
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team of AI experts, researchers, and technology innovators driving Zion Tech Group's mission to revolutionize the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Exceptional Team
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              The brilliant minds behind Zion Tech Group's revolutionary AI solutions. 
              Our team combines decades of experience with cutting-edge innovation to deliver 
              technology that transforms businesses and shapes the future.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our executive leadership brings together decades of experience in technology, 
              AI research, and business innovation to guide Zion Tech Group's mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 h-full">
                  {/* Placeholder for leader image */}
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{leader.role}</p>
                    <p className="text-gray-400 leading-relaxed">{leader.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Achievements</h4>
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Award className="w-4 h-4 text-cyan-400 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented professionals who make our innovative solutions possible. 
              Each team member brings unique expertise and passion to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 h-full">
                  {/* Placeholder for member image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-cyan-400 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do, from developing cutting-edge AI solutions 
              to building lasting relationships with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${value.color} w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for exceptional talent to join our mission. 
              If you're passionate about AI, innovation, and making a difference, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
