import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Shield, 
  Rocket, 
  Award, 
  Star,
  Linkedin,
  Github,
  Globe,
  Zap,
  Cpu,
  Database,
  Lock,
  Cloud,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Settings,
  Palette,
  Target,
  Handshake,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  ChevronRight,
  Heart
} from 'lucide-react';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Former tech executive with expertise in enterprise solutions and digital transformation.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      github: 'https://github.com/klebersantos',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation', 'Innovation Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with specialization in Machine Learning and Neural Networks. Leading our AI research initiatives and technical strategy.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Research', 'Technical Architecture']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      bio: 'Senior engineering leader with expertise in scalable systems, cloud architecture, and DevOps. Driving technical excellence across all projects.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      github: 'https://github.com/marcusrodriguez',
      expertise: ['System Architecture', 'Cloud Engineering', 'DevOps', 'Team Leadership']
    }
  ];

  const coreTeam = [
    {
      name: 'Alex Thompson',
      role: 'Senior AI Engineer',
      bio: 'Specialist in natural language processing and computer vision. Building next-generation AI solutions.',
      image: '/images/team/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alexthompson',
      github: 'https://github.com/alexthompson',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning', 'AI Engineering']
    },
    {
      name: 'Priya Patel',
      role: 'Cloud Solutions Architect',
      bio: 'Expert in multi-cloud strategies, serverless architecture, and cloud security. Designing scalable cloud solutions.',
      image: '/images/team/priya-patel.jpg',
      linkedin: 'https://linkedin.com/in/priyapatel',
      github: 'https://github.com/priyapatel',
      expertise: ['Cloud Architecture', 'Serverless', 'Security', 'DevOps']
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Specialist',
      bio: 'Leading our security initiatives with expertise in threat intelligence, penetration testing, and compliance.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance', 'Security Architecture']
    },
    {
      name: 'Emily Watson',
      role: 'UX/UI Design Lead',
      bio: 'Creating intuitive and beautiful user experiences. Expert in design systems and user research.',
      image: '/images/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      github: 'https://github.com/emilywatson',
      expertise: ['UX Design', 'UI Design', 'Design Systems', 'User Research']
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Team</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              We're a diverse team of innovators, engineers, designers, and strategists 
              passionate about transforming businesses through cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="w-5 h-5" />
                <span className="text-zion-slate-light">50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="w-5 h-5" />
                <span className="text-zion-slate-light">25+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Award className="w-5 h-5" />
                <span className="text-zion-slate-light">15+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our experienced leadership team guides our vision and ensures we deliver 
              exceptional value to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium">{member.role}</p>
                </div>
                
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="text-zion-cyan font-medium mb-2 text-sm">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-slate-light text-xs rounded-full"
                      >
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
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Team
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our talented professionals bring diverse skills and perspectives to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium text-sm mb-3">{member.role}</p>
                
                <p className="text-zion-slate-light text-xs mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. Explore our current opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-cyan/25"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}