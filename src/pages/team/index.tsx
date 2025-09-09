import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Star, 
  CheckCircle, 
  Linkedin, 
  Twitter, 
  Globe,
  Mail,
  Phone,
  MapPin,
  Heart,
  Zap,
  Shield,
  Brain,
  Rocket,
  Code
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const leadership = [
  {
    name: 'Kleber Santos',
    title: 'Founder & CEO',
    description: 'Visionary leader with over 15 years of experience in technology and innovation. Passionate about creating solutions that transform businesses and drive sustainable growth.',
    image: '/images/team/kleber-santos.jpg',
    linkedin: 'https://www.linkedin.com/in/klebersantos',
    twitter: 'https://twitter.com/klebersantos',
    expertise: ['AI & Machine Learning', 'Digital Transformation', 'Strategic Leadership', 'Innovation Management']
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Technology Officer',
    description: 'Leading-edge technologist with expertise in AI, quantum computing, and emerging technologies. PhD in Computer Science from MIT.',
    image: '/images/team/sarah-chen.jpg',
    linkedin: 'https://www.linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    expertise: ['Artificial Intelligence', 'Quantum Computing', 'Research & Development', 'Technology Strategy']
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Chief Operations Officer',
    description: 'Operations expert with a proven track record of scaling technology companies and optimizing business processes for maximum efficiency.',
    image: '/images/team/marcus-rodriguez.jpg',
    linkedin: 'https://www.linkedin.com/in/marcusrodriguez',
    twitter: 'https://twitter.com/marcusrodriguez',
    expertise: ['Operations Management', 'Process Optimization', 'Team Leadership', 'Business Strategy']
  }
];

const teamMembers = [
  {
    name: 'Alex Thompson',
    title: 'Senior AI Engineer',
    department: 'AI & Research',
    image: '/images/team/alex-thompson.jpg',
    linkedin: 'https://www.linkedin.com/in/alexthompson',
    expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Ethics']
  },
  {
    name: 'Priya Patel',
    title: 'Cybersecurity Specialist',
    department: 'Security',
    image: '/images/team/priya-patel.jpg',
    linkedin: 'https://www.linkedin.com/in/priyapatel',
    expertise: ['Threat Detection', 'Security Architecture', 'Compliance', 'Incident Response']
  },
  {
    name: 'David Kim',
    title: 'Cloud Solutions Architect',
    department: 'Cloud & Infrastructure',
    image: '/images/team/david-kim.jpg',
    linkedin: 'https://www.linkedin.com/in/davidkim',
    expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure as Code', 'Microservices']
  },
  {
    name: 'Emily Watson',
    title: 'UX/UI Designer',
    department: 'Design',
    image: '/images/team/emily-watson.jpg',
    linkedin: 'https://www.linkedin.com/in/emilywatson',
    expertise: ['User Experience', 'Interface Design', 'Design Systems', 'User Research']
  },
  {
    name: 'James Wilson',
    title: 'Quantum Computing Researcher',
    department: 'Research & Development',
    image: '/images/team/james-wilson.jpg',
    linkedin: 'https://www.linkedin.com/in/jameswilson',
    expertise: ['Quantum Algorithms', 'Quantum Simulation', 'Research', 'Academic Collaboration']
  },
  {
    name: 'Maria Garcia',
    title: 'Business Development Manager',
    department: 'Business Development',
    image: '/images/team/maria-garcia.jpg',
    linkedin: 'https://www.linkedin.com/in/mariagarcia',
    expertise: ['Client Relations', 'Market Analysis', 'Partnership Development', 'Strategic Planning']
  }
];

const values = [
  {
    icon: Heart,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.'
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client service.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We create solutions that make a positive difference in the world and help businesses grow sustainably.'
  }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '25+', label: 'Countries Served' }
];

export default function Team() {
  return (
    <>
      <SEO 
        title="Our Team | Zion Tech Group"
        description="Meet the talented team behind Zion Tech Group. Our experts in AI, cybersecurity, cloud computing, and more are dedicated to driving innovation and delivering exceptional results."
        canonical="https://ziontechgroup.com/team"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                The brilliant minds behind Zion Tech Group. Our diverse team of experts is passionate about 
                technology, innovation, and delivering exceptional results for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our experienced leaders guide our vision and ensure we deliver exceptional value to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">{leader.name}</h3>
                  <p className="text-zion-cyan font-medium text-center mb-4">{leader.title}</p>
                  <p className="text-zion-slate-light mb-6 text-center">{leader.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-zion-cyan mb-3">Expertise:</h4>
                    <div className="space-y-2">
                      {leader.expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Meet the talented professionals who make Zion Tech Group a leader in technology innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1 text-center">{member.name}</h3>
                  <p className="text-zion-cyan font-medium text-center mb-2">{member.title}</p>
                  <p className="text-zion-slate-light text-sm text-center mb-4">{member.department}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Skills:</h4>
                    <div className="space-y-1">
                      {member.expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-zion-slate-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/careers" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  View Openings
                </a>
                <a 
                  href="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}