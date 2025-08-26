import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
  Mail, 
  Globe, 
  Award,
  Star,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart
} from 'lucide-react';

const TeamPage = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      title: 'Founder & CEO',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and business transformation. Passionate about creating solutions that bridge the gap between cutting-edge technology and real-world business needs.',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development', 'Digital Transformation'],
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://www.linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      bio: 'Leading expert in AI, quantum computing, and emerging technologies. PhD in Computer Science with a focus on machine learning and distributed systems.',
      expertise: ['Artificial Intelligence', 'Quantum Computing', 'Machine Learning', 'System Architecture'],
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://www.linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Operations Officer',
      bio: 'Operations specialist with extensive experience in scaling technology companies and managing complex projects across multiple industries.',
      expertise: ['Operations Management', 'Project Management', 'Process Optimization', 'Team Leadership'],
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://www.linkedin.com/in/marcusrodriguez',
      email: 'marcus@ziontechgroup.com'
    }
  ];

  const departments = [
    {
      name: 'AI & Research',
      icon: Brain,
      description: 'Pioneering the future of artificial intelligence and machine learning',
      teamSize: '25+',
      focus: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics']
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Protecting digital assets with cutting-edge security solutions',
      teamSize: '20+',
      focus: ['Threat Detection', 'Network Security', 'Compliance', 'Incident Response']
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Building scalable and resilient cloud solutions',
      teamSize: '30+',
      focus: ['Cloud Architecture', 'DevOps', 'Containerization', 'Microservices']
    },
    {
      name: 'Innovation Lab',
      icon: Rocket,
      description: 'Exploring emerging technologies and breakthrough innovations',
      teamSize: '15+',
      focus: ['Quantum Computing', 'Blockchain', 'IoT', 'Edge Computing']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, always seeking the next breakthrough.',
      icon: Zap
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.',
      icon: Users
    },
    {
      title: 'Sustainability',
      description: 'We build solutions that not only advance technology but also protect our planet.',
      icon: Heart
    }
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
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the Minds Behind
              <span className="text-gradient"> Innovation</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our diverse team of experts, innovators, and visionaries work together to create 
              cutting-edge solutions that transform businesses and industries.
            </p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the visionary leaders who guide our mission and drive innovation across all aspects of our business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-zion-cyan font-medium mb-4">{leader.title}</p>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-center">
                  {leader.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-sm text-zion-cyan"
                      >
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
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive solutions across all technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                    <p className="text-zion-cyan font-medium">{dept.teamSize} Team Members</p>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6">
                  {dept.description}
                </p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.focus.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-sm text-zion-cyan"
                      >
                        {area}
                      </span>
                    ))}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
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
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to be part of something extraordinary? We're always looking for talented individuals 
              who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="btn-neon px-8 py-4 text-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;