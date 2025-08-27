import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Rocket, 
  Award,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  Lightbulb,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      expertise: 'AI & Quantum Computing',
      bio: 'Former Google AI researcher with 15+ years in cutting-edge technology. PhD in Computer Science from MIT.',
      image: '/team/sarah-chen.jpg',
      achievements: ['500+ AI models deployed', 'Quantum breakthrough patents', 'Forbes 30 Under 30'],
      skills: ['AI/ML', 'Quantum Computing', 'Strategic Leadership'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarahchen',
        website: 'https://sarahchen.tech'
      }
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      position: 'Chief Technology Officer',
      expertise: 'Blockchain & Cybersecurity',
      bio: 'Ex-NASA engineer specializing in secure systems. Led development of enterprise blockchain solutions.',
      image: '/team/marcus-rodriguez.jpg',
      achievements: ['NASA Innovation Award', 'Blockchain security patents', '100+ enterprise deployments'],
      skills: ['Blockchain', 'Cybersecurity', 'System Architecture'],
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        twitter: 'https://twitter.com/marcusrodriguez'
      }
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      position: 'Chief Innovation Officer',
      expertise: 'Emerging Technologies',
      bio: 'Pioneer in IoT and edge computing. Former CTO at Intel IoT division with 20+ years experience.',
      image: '/team/emily-watson.jpg',
      achievements: ['Intel Innovation Award', 'IoT patents', 'Smart city implementations'],
      skills: ['IoT', 'Edge Computing', 'Innovation Strategy'],
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        website: 'https://emilywatson.tech'
      }
    },
    {
      id: 4,
      name: 'Alex Thompson',
      position: 'VP of Engineering',
      expertise: 'Software Architecture',
      bio: 'Full-stack architect with expertise in scalable systems. Led teams at Amazon and Microsoft.',
      image: '/team/alex-thompson.jpg',
      achievements: ['AWS Solutions Architect', 'Microsoft MVP', 'Open source contributor'],
      skills: ['Cloud Architecture', 'Microservices', 'DevOps'],
      social: {
        linkedin: 'https://linkedin.com/in/alex-thompson',
        github: 'https://github.com/alexthompson'
      }
    },
    {
      id: 5,
      name: 'Dr. James Kim',
      position: 'Head of AI Research',
      expertise: 'Machine Learning & Neural Networks',
      bio: 'Stanford PhD in AI. Published 50+ papers on neural networks and consciousness simulation.',
      image: '/team/james-kim.jpg',
      achievements: ['NeurIPS Best Paper', 'AI consciousness research', 'Academic collaborations'],
      skills: ['Deep Learning', 'Neural Networks', 'Research'],
      social: {
        linkedin: 'https://linkedin.com/in/james-kim',
        website: 'https://jameskim.ai'
      }
    },
    {
      id: 6,
      name: 'Lisa Park',
      position: 'VP of Business Development',
      expertise: 'Strategic Partnerships',
      bio: 'Former McKinsey consultant with expertise in tech strategy and enterprise sales.',
      image: '/team/lisa-park.jpg',
      achievements: ['McKinsey Partner', 'Fortune 500 clients', 'Strategic partnerships'],
      skills: ['Business Strategy', 'Partnerships', 'Enterprise Sales'],
      social: {
        linkedin: 'https://linkedin.com/in/lisa-park'
      }
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      members: 25,
      icon: Brain,
      description: 'Cutting-edge AI research and development',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      name: 'Engineering',
      members: 40,
      icon: Code,
      description: 'Full-stack development and architecture',
      color: 'from-zion-purple to-zion-blue'
    },
    {
      name: 'Cybersecurity',
      members: 20,
      icon: Shield,
      description: 'Advanced security solutions',
      color: 'from-zion-blue to-zion-green'
    },
    {
      name: 'Innovation Lab',
      members: 15,
      icon: Lightbulb,
      description: 'Emerging technology research',
      color: 'from-zion-green to-zion-emerald'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and explore uncharted territories in technology',
      icon: Rocket
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We believe great things happen when brilliant minds work together',
      icon: Users
    },
    {
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Meet Our
              <span className="block text-zion-cyan">Expert Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              The brilliant minds behind Zion Tech Group's innovations. Our team combines decades of experience 
              with cutting-edge expertise to deliver revolutionary solutions.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>100+ Experts</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>50+ Patents</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>99.8% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Departments</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                  <p className="text-zion-slate-light mb-3">{dept.description}</p>
                  <div className="text-zion-cyan font-semibold">{dept.members} Members</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the visionaries and experts leading Zion Tech Group into the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 h-full hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-zion-cyan" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-zion-cyan font-semibold mb-1">{member.position}</p>
                    <p className="text-zion-slate-light text-sm">{member.expertise}</p>
                  </div>
                  
                  <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-center">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-green mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-zion-cyan font-semibold mb-3 text-center">Skills:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center hover:bg-zion-cyan/30 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5 text-zion-cyan" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center hover:bg-zion-cyan/30 transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5 text-zion-cyan" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center hover:bg-zion-cyan/30 transition-colors duration-300"
                      >
                        <Globe className="w-5 h-5 text-zion-cyan" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Ready to work with the best minds in technology? We're always looking for talented individuals 
              who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;