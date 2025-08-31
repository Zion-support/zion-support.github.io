import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe,
  Award,
  Star,
  Zap,
  Brain,
  Shield,
  Heart,
  Lightbulb,
  Building2,
  MapPin,
  Phone,
  ArrowLeft
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former AI researcher at Google with 15+ years in technology leadership. Sarah founded Zion Tech Group with a vision to democratize AI technology and make it accessible to businesses of all sizes.',
      image: '/team/sarah.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@ziontechgroup.com',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership'],
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', '500+ Clients Served'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in machine learning and scalable AI infrastructure. Michael has led the development of over 50 AI solutions and holds patents in neural network optimization.',
      image: '/team/michael.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'michael@ziontechgroup.com',
      expertise: ['Machine Learning', 'AI Infrastructure', 'System Architecture'],
      achievements: ['PhD Computer Science', '15+ Patents', 'Ex-Google ML Engineer'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with deep expertise in AI-powered solutions. Emily has successfully launched 20+ AI products and has a track record of 95% client satisfaction.',
      image: '/team/emily.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'emily@ziontechgroup.com',
      expertise: ['Product Strategy', 'User Experience', 'AI Product Design'],
      achievements: ['MBA Stanford', 'Product of the Year 2022', '100K+ Users'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer specializing in AI and cloud technologies. David leads a team of 50+ engineers and has architected solutions for Fortune 500 companies.',
      image: '/team/david.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'david@ziontechgroup.com',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'Team Leadership'],
      achievements: ['MSc Computer Science', 'Ex-Microsoft Engineer', '50+ Team Members'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Our cutting-edge AI research team pushes the boundaries of what\'s possible with machine learning and artificial intelligence.',
      teamSize: 25,
      leader: 'Dr. Alex Thompson',
      focus: ['Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Quantum AI'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Engineering & Development',
      description: 'Full-stack development team specializing in scalable AI applications and enterprise solutions.',
      teamSize: 40,
      leader: 'David Kim',
      focus: ['Full-Stack Development', 'Cloud Infrastructure', 'DevOps', 'API Development'],
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Product & Design',
      description: 'User experience and product design experts who ensure our AI solutions are intuitive and effective.',
      teamSize: 20,
      leader: 'Emily Rodriguez',
      focus: ['UX Design', 'Product Strategy', 'User Research', 'Prototyping'],
      icon: Heart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Security & Compliance',
      description: 'Cybersecurity experts ensuring our AI solutions meet the highest security and compliance standards.',
      teamSize: 15,
      leader: 'Lisa Wang',
      focus: ['Cybersecurity', 'Compliance', 'Risk Management', 'Security Audits'],
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Business Development',
      description: 'Strategic partnerships and business growth team expanding our global reach and client base.',
      teamSize: 18,
      leader: 'Marcus Johnson',
      focus: ['Partnerships', 'Sales Strategy', 'Market Expansion', 'Client Relations'],
      icon: Building2,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Customer Success',
      description: 'Dedicated team ensuring our clients achieve maximum value from our AI solutions.',
      teamSize: 22,
      leader: 'Rachel Green',
      focus: ['Client Onboarding', 'Training', 'Support', 'Success Metrics'],
      icon: Users,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering results',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Integrity & Trust',
      description: 'We build lasting relationships based on transparency and reliability',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '150+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Link
                to="/about"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to About
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                The brilliant minds behind our innovative AI solutions. Our diverse team of experts 
                brings together decades of experience in artificial intelligence, technology, and business.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From AI researchers to business strategists, we're united by a common goal: 
                making AI accessible and transformative for businesses worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries and leaders driving innovation at Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 text-lg mb-4">{member.role}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <Award className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Departments</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized teams working together to deliver exceptional AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{dept.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Team Size:</span>
                    <span className="text-cyan-400 font-semibold">{dept.teamSize} members</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Department Lead:</span>
                    <span className="text-white font-medium">{dept.leader}</span>
                  </div>
                  
                  <div className="pt-3">
                    <h4 className="text-white font-semibold text-sm mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {dept.focus.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Team Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our team and shape our culture
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
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for AI and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;