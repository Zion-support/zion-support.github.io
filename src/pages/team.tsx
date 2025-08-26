import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Globe, 
  Heart,
  Linkedin,
  Twitter,
  Mail,
  Github,
  Star,
  Award,
  Trophy
} from 'lucide-react';

const TeamPage = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Former CTO at Fortune 500 companies.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Innovation Leadership'],
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Technology architect with deep expertise in cloud computing, cybersecurity, and emerging technologies.',
      expertise: ['Cloud Architecture', 'Cybersecurity', 'Emerging Tech'],
      image: '/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Innovation Officer',
      bio: 'Research scientist specializing in quantum computing, machine learning, and breakthrough technologies.',
      expertise: ['Quantum Computing', 'Machine Learning', 'Research & Development'],
      image: '/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson'
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      description: 'Pioneering artificial intelligence solutions and cutting-edge research.',
      teamSize: 45,
      icon: Brain,
      focus: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      name: 'Cybersecurity',
      description: 'Protecting digital assets with advanced security solutions.',
      teamSize: 32,
      icon: Shield,
      focus: ['Threat Detection', 'Security Architecture', 'Incident Response']
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Building scalable cloud solutions and robust infrastructure.',
      teamSize: 38,
      icon: Cloud,
      focus: ['Cloud Architecture', 'DevOps', 'Infrastructure Management']
    },
    {
      name: 'IoT & Edge Computing',
      description: 'Connecting the world through innovative IoT solutions.',
      teamSize: 28,
      icon: Zap,
      focus: ['Device Management', 'Edge Analytics', 'Smart Cities']
    },
    {
      name: 'Quantum Computing',
      description: 'Advancing the frontier of computational power.',
      teamSize: 25,
      icon: Rocket,
      focus: ['Quantum Algorithms', 'Quantum Security', 'Research']
    },
    {
      name: 'Sustainability',
      description: 'Building a greener future through technology.',
      teamSize: 20,
      icon: Heart,
      focus: ['Green IT', 'Carbon Management', 'Sustainable Solutions']
    }
  ];

  const values = [
    'Innovation First',
    'Customer Success',
    'Excellence in Execution',
    'Collaborative Growth',
    'Ethical Technology',
    'Continuous Learning'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Our Team
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts, innovators, 
              and visionaries is dedicated to transforming the future through technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Join Our Team
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Visionary leaders driving innovation and growth across all aspects of our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-zion-cyan font-semibold mb-4">{leader.title}</p>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">
                  {leader.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span key={skill} className="text-sm bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@ziontechgroup.com`}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized teams working together to deliver innovative solutions across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {dept.name}
                    </h3>
                    <p className="text-zion-cyan font-semibold">{dept.teamSize} Team Members</p>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Focus Areas:</h4>
                  <ul className="space-y-2">
                    {dept.focus.map((area) => (
                      <li key={area} className="flex items-center text-zion-slate-light">
                        <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to be part of something extraordinary? Join our team of innovators and help us 
              shape the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;