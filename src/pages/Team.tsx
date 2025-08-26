import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Linkedin, 
  Mail, 
  Globe, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket,
  Code,
  Heart,
  Zap
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Kleber Santos',
    role: 'Founder & CEO',
    bio: 'Visionary leader driving innovation in high-tech and AI marketplace solutions.',
    image: '/images/team/kleber-santos.jpg',
    linkedin: 'https://www.linkedin.com/in/kleber-santos',
    email: 'kleber@ziontechgroup.com',
    expertise: ['AI & Machine Learning', 'Business Strategy', 'Innovation Management']
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Leading-edge technologist specializing in quantum computing and AI systems.',
    image: '/images/team/sarah-chen.jpg',
    linkedin: 'https://www.linkedin.com/in/sarah-chen',
    email: 'sarah.chen@ziontechgroup.com',
    expertise: ['Quantum Computing', 'AI Systems', 'Technical Architecture']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Innovation Officer',
    bio: 'Driving disruptive innovation across emerging technologies and market solutions.',
    image: '/images/team/marcus-rodriguez.jpg',
    linkedin: 'https://www.linkedin.com/in/marcus-rodriguez',
    email: 'marcus.rodriguez@ziontechgroup.com',
    expertise: ['Emerging Tech', 'Innovation Strategy', 'Market Development']
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Head of AI Research',
    bio: 'Pioneering research in autonomous AI systems and ethical AI development.',
    image: '/images/team/emily-watson.jpg',
    linkedin: 'https://www.linkedin.com/in/emily-watson',
    email: 'emily.watson@ziontechgroup.com',
    expertise: ['AI Research', 'Ethical AI', 'Autonomous Systems']
  },
  {
    name: 'Alex Thompson',
    role: 'Head of Cybersecurity',
    bio: 'Expert in next-generation cybersecurity and threat intelligence systems.',
    image: '/images/team/alex-thompson.jpg',
    linkedin: 'https://www.linkedin.com/in/alex-thompson',
    email: 'alex.thompson@ziontechgroup.com',
    expertise: ['Cybersecurity', 'Threat Intelligence', 'Security Architecture']
  },
  {
    name: 'Dr. Maya Patel',
    role: 'Head of Sustainability',
    bio: 'Leading green IT initiatives and sustainable technology solutions.',
    image: '/images/team/maya-patel.jpg',
    linkedin: 'https://www.linkedin.com/in/maya-patel',
    email: 'maya.patel@ziontechgroup.com',
    expertise: ['Green IT', 'Sustainability', 'Environmental Tech']
  }
];

const values = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Building secure, reliable solutions that our clients can depend on for their critical operations.'
  },
  {
    icon: Heart,
    title: 'Human-Centric',
    description: 'Technology should serve humanity, enhancing lives while preserving our planet\'s future.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Delivering exceptional quality in everything we do, from code to customer experience.'
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group, driving innovation in high-tech and AI marketplace solutions.
              Our diverse team brings together expertise from across the technology spectrum.
            </p>
            <div className="flex items-center justify-center space-x-4 text-zion-slate-light">
              <Users className="w-6 h-6 text-zion-cyan" />
              <span className="text-lg">{teamMembers.length} Team Members</span>
              <span>•</span>
              <Award className="w-6 h-6 text-zion-purple" />
              <span className="text-lg">Industry Experts</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our work and shape our culture of innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the visionary leaders who are shaping the future of technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-3xl font-bold text-white">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-zion-cyan font-medium mb-3">{member.role}</p>
                  <p className="text-zion-slate-light mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
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

      {/* Join Our Team Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals who share our passion for innovation and technology.
              Join us in building the future of high-tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="btn-neon px-8 py-3 text-lg"
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