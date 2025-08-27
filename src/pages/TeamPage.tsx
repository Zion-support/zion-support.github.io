import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Briefcase, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Phone,
  MapPin
} from 'lucide-react';

const TeamPage = () => {
  const leadership = [
    {
      id: 'kleber-silva',
      name: 'Kleber Silva',
      title: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in technology and innovation. Driving Zion Tech Group\'s mission to democratize access to cutting-edge technology solutions.',
      expertise: ['Technology Strategy', 'Innovation Leadership', 'Business Development', 'AI & Quantum Computing'],
      image: '/images/team/kleber-silva.jpg',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://www.linkedin.com/in/klebersilva',
      twitter: 'https://twitter.com/klebersilva',
      github: 'https://github.com/klebersilva'
    },
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      bio: 'Renowned technology expert specializing in AI, quantum computing, and enterprise architecture. Leading our technical innovation and product development.',
      expertise: ['Artificial Intelligence', 'Quantum Computing', 'Enterprise Architecture', 'Product Strategy'],
      image: '/images/team/sarah-chen.jpg',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://www.linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    {
      id: 'michael-rodriguez',
      name: 'Michael Rodriguez',
      title: 'Chief Operations Officer',
      bio: 'Operations specialist with deep expertise in scaling technology companies and optimizing business processes for maximum efficiency.',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership', 'Strategic Planning'],
      image: '/images/team/michael-rodriguez.jpg',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://www.linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      github: 'https://github.com/michaelrodriguez'
    }
  ];

  const teamMembers = [
    {
      id: 'alex-thompson',
      name: 'Alex Thompson',
      title: 'Lead AI Engineer',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      image: '/images/team/alex-thompson.jpg'
    },
    {
      id: 'emma-williams',
      name: 'Emma Williams',
      title: 'Senior Cybersecurity Specialist',
      expertise: ['Threat Detection', 'Security Architecture', 'Compliance', 'Incident Response'],
      image: '/images/team/emma-williams.jpg'
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      title: 'Cloud Solutions Architect',
      expertise: ['AWS', 'Azure', 'DevOps', 'Microservices'],
      image: '/images/team/david-kim.jpg'
    },
    {
      id: 'lisa-garcia',
      name: 'Lisa Garcia',
      title: 'Blockchain Developer',
      expertise: ['Smart Contracts', 'DeFi', 'Ethereum', 'Solidity'],
      image: '/images/team/lisa-garcia.jpg'
    },
    {
      id: 'james-wilson',
      name: 'James Wilson',
      title: 'Quantum Computing Researcher',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Research', 'Academic Collaboration'],
      image: '/images/team/james-wilson.jpg'
    },
    {
      id: 'rachel-brown',
      name: 'Rachel Brown',
      title: 'Digital Transformation Consultant',
      expertise: ['Change Management', 'Process Optimization', 'Technology Integration', 'Strategy'],
      image: '/images/team/rachel-brown.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible in technology',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality solutions and service',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all we do',
      icon: '🛡️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            The brilliant minds behind Zion Tech Group. Our diverse team of experts brings together 
            decades of experience in technology, innovation, and business transformation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">15+</div>
              <div className="text-zion-slate-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">25+</div>
              <div className="text-zion-slate-light">Countries</div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Meet the visionary leaders who are shaping the future of technology 
              and driving innovation at Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-zion-cyan font-medium mb-4">{leader.title}</p>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={leader.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Meet the talented professionals who make our vision a reality, 
              bringing expertise across all areas of technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium mb-4">{member.title}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              The core principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-zion-slate-light text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Ready to be part of something extraordinary? We're always looking for talented individuals 
            who share our passion for innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;