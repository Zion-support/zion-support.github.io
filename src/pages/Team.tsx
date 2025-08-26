import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Shield, 
  Rocket, 
  Cloud, 
  Code, 
  Target, 
  Zap, 
  Globe, 
  Heart,
  Award,
  Star,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Kleber Santos',
    role: 'CEO & Founder',
    department: 'Executive Leadership',
    bio: 'Visionary leader with 20+ years in AI and technology innovation. Former NASA researcher and quantum computing pioneer.',
    expertise: ['AI Strategy', 'Quantum Computing', 'Business Innovation'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com'
    }
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'CTO & Chief AI Officer',
    department: 'Technology & AI',
    bio: 'Leading AI researcher with expertise in autonomous systems and neural networks. PhD from MIT in Computer Science.',
    expertise: ['AI Architecture', 'Machine Learning', 'System Design'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com'
    }
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    department: 'Engineering',
    bio: 'Seasoned engineering leader with experience building scalable systems at Google and Amazon. Expert in cloud architecture.',
    expertise: ['Cloud Infrastructure', 'DevOps', 'System Architecture'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      email: 'marcus@ziontechgroup.com'
    }
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of Research',
    department: 'Research & Development',
    bio: 'Quantum physicist and AI researcher specializing in quantum neural networks and consciousness simulation.',
    expertise: ['Quantum Physics', 'AI Research', 'Neural Networks'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily@ziontechgroup.com'
    }
  },
  {
    name: 'Alex Thompson',
    role: 'VP of Cybersecurity',
    department: 'Security',
    bio: 'Cybersecurity expert with background in government security and AI-powered threat detection systems.',
    expertise: ['Cybersecurity', 'Threat Intelligence', 'AI Security'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/alexthompson',
      twitter: 'https://twitter.com/alexthompson',
      email: 'alex@ziontechgroup.com'
    }
  },
  {
    name: 'Dr. James Kim',
    role: 'Head of Quantum Technology',
    department: 'Quantum Division',
    bio: 'Quantum computing specialist with experience at IBM and Google. Leading our quantum neural network initiatives.',
    expertise: ['Quantum Computing', 'Quantum Algorithms', 'Quantum AI'],
    avatar: '/api/placeholder/300/300',
    social: {
      linkedin: 'https://linkedin.com/in/jameskim',
      twitter: 'https://twitter.com/jameskim',
      email: 'james@ziontechgroup.com'
    }
  }
];

const departments = [
  {
    name: 'Executive Leadership',
    icon: Target,
    description: 'Strategic vision and company direction',
    memberCount: 1
  },
  {
    name: 'Technology & AI',
    icon: Brain,
    description: 'Core AI and technology development',
    memberCount: 1
  },
  {
    name: 'Engineering',
    icon: Code,
    description: 'Software development and infrastructure',
    memberCount: 1
  },
  {
    name: 'Research & Development',
    icon: Rocket,
    description: 'Innovation and breakthrough technologies',
    memberCount: 1
  },
  {
    name: 'Security',
    icon: Shield,
    description: 'Cybersecurity and threat protection',
    memberCount: 1
  },
  {
    name: 'Quantum Division',
    icon: Zap,
    description: 'Quantum computing and quantum AI',
    memberCount: 1
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="text-gradient block">Dream Team</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              The brilliant minds behind Zion Tech Group's revolutionary AI and quantum technology innovations. 
              Our team combines decades of experience from leading tech companies, research institutions, and government agencies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>{teamMembers.length} Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Award className="w-4 h-4" />
                <span>20+ Years Combined Experience</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Star className="w-4 h-4" />
                <span>World-Class Expertise</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Departments</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organized expertise across key technology domains, each department drives innovation 
              in their specialized area while collaborating seamlessly across the organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-zion-slate-light mb-4">{dept.description}</p>
                
                <div className="flex items-center gap-2 text-zion-cyan text-sm">
                  <Users className="w-4 h-4" />
                  <span>{dept.memberCount} member{dept.memberCount !== 1 ? 's' : ''}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the visionary leaders who are shaping the future of AI and quantum technology. 
              Each brings unique expertise and a shared passion for innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-semibold mb-1">{member.role}</p>
                  <p className="text-zion-slate-light text-sm">{member.department}</p>
                </div>
                
                <p className="text-zion-slate-light text-sm mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              We're always looking for brilliant minds who share our passion for pushing the boundaries 
              of what's possible with AI and quantum technology. Join us in shaping the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}