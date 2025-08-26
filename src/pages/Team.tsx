import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  LightBulbIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  HeartIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon
} from '@heroicons/react/24/outline';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.',
      expertise: ['Strategic Leadership', 'AI Innovation', 'Business Transformation', 'Technology Strategy'],
      image: '/team/kleber-santos.jpg',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      location: 'Delaware, USA'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in AI, cloud architecture, and scalable solutions. Leads our technical strategy and innovation initiatives.',
      expertise: ['Cloud Architecture', 'AI/ML Systems', 'Scalable Solutions', 'Technical Strategy'],
      image: '/team/sarah-chen.jpg',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      location: 'California, USA'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI Solutions',
      bio: 'AI specialist with deep expertise in machine learning and autonomous systems. Pioneering next-generation AI solutions for enterprise clients.',
      expertise: ['Machine Learning', 'Autonomous Systems', 'AI Ethics', 'Neural Networks'],
      image: '/team/marcus-rodriguez.jpg',
      email: 'marcus@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      location: 'Texas, USA'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      bio: 'Leading our quantum computing and emerging technology research initiatives. PhD in Quantum Physics with 10+ years in research.',
      expertise: ['Quantum Computing', 'Research & Development', 'Emerging Technologies', 'Academic Collaboration'],
      image: '/team/emily-watson.jpg',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emily-watson',
      location: 'Massachusetts, USA'
    }
  ];

  const seniorTeam = [
    {
      name: 'Alex Thompson',
      role: 'VP of Engineering',
      bio: 'Experienced engineering leader with expertise in building high-performance teams and delivering complex technical solutions.',
      expertise: ['Team Leadership', 'Software Architecture', 'Agile Development', 'DevOps'],
      image: '/team/alex-thompson.jpg',
      email: 'alex@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alex-thompson'
    },
    {
      name: 'Maria Garcia',
      role: 'VP of Client Success',
      bio: 'Dedicated to ensuring client satisfaction and successful project delivery through strategic relationship management.',
      expertise: ['Client Relations', 'Project Management', 'Strategic Planning', 'Team Coordination'],
      image: '/team/maria-garcia.jpg',
      email: 'maria@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/maria-garcia'
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with deep knowledge of threat intelligence, compliance, and security architecture.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance', 'Security Architecture'],
      image: '/team/david-kim.jpg',
      email: 'david@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/david-kim'
    },
    {
      name: 'Lisa Park',
      role: 'Head of Digital Marketing',
      bio: 'Digital marketing strategist specializing in growth hacking, content strategy, and brand development.',
      expertise: ['Digital Marketing', 'Growth Hacking', 'Content Strategy', 'Brand Development'],
      image: '/team/lisa-park.jpg',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisa-park'
=======
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Star,
  Heart,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const Team: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in AI and quantum computing. Former research director at leading tech institutions.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Business Innovation'],
      avatar: 'SC',
      linkedin: '#',
      achievements: ['PhD Computer Science', '20+ Patents', 'Forbes 30 Under 30']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology innovator specializing in autonomous systems and enterprise architecture. Led digital transformation for Fortune 500 companies.',
      expertise: ['Autonomous Systems', 'Enterprise Architecture', 'Digital Transformation'],
      avatar: 'MR',
      linkedin: '#',
      achievements: ['MSc Engineering', '15+ Years Experience', 'Industry Speaker']
    },
    {
      name: 'Dr. James Kim',
      role: 'Chief Innovation Officer',
      bio: 'Research pioneer in emerging technologies. Leading our quantum computing and blockchain initiatives with breakthrough innovations.',
      expertise: ['Quantum Computing', 'Blockchain', 'Emerging Tech'],
      avatar: 'JK',
      linkedin: '#',
      achievements: ['PhD Physics', 'Research Papers', 'Innovation Awards']
    },
    {
      name: 'Emily Watson',
      role: 'Chief Operations Officer',
      bio: 'Operations expert with deep experience in scaling technology companies. Ensures seamless delivery of our global services.',
      expertise: ['Operations Management', 'Global Scaling', 'Service Delivery'],
      avatar: 'EW',
      linkedin: '#',
      achievements: ['MBA Business', '10+ Years Operations', 'Process Optimization']
    }
  ];

  const departmentHeads = [
    {
      name: 'Alex Thompson',
      role: 'Head of AI Solutions',
      department: 'AI & Machine Learning',
      bio: 'Leading our AI initiatives with expertise in deep learning and neural networks.',
      avatar: 'AT'
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Head of Cybersecurity',
      department: 'Security & Compliance',
      bio: 'Cybersecurity expert with certifications in CISSP, CISM, and extensive threat intelligence experience.',
      avatar: 'LP'
    },
    {
      name: 'David Chen',
      role: 'Head of Cloud Architecture',
      department: 'Cloud & DevOps',
      bio: 'Cloud specialist with expertise in multi-cloud strategies and DevOps automation.',
      avatar: 'DC'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Digital Transformation',
      department: 'Business Solutions',
      bio: 'Digital transformation consultant helping businesses navigate technological change.',
      avatar: 'MG'
    }
  ];

  const companyStats = [
    {
      number: '50+',
      label: 'Team Members',
      description: 'Diverse professionals from around the world'
    },
    {
      number: '25+',
      label: 'Countries',
      description: 'Global team with local expertise'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Average experience per team member'
    },
    {
      number: '95%',
      label: 'Retention Rate',
      description: 'High team satisfaction and loyalty'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    }
  ];

  const values = [
    {
<<<<<<< HEAD
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas that push boundaries.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to change the world.'
=======
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and breakthrough solutions'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is passionate about technology and client success'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    }
  ];

  const culture = [
    {
      title: 'Continuous Learning',
      description: 'We invest in ongoing education and skill development for our team members.',
      icon: Brain
    },
    {
      title: 'Work-Life Balance',
      description: 'We promote healthy work-life balance with flexible schedules and remote work options.',
      icon: Heart
    },
    {
      title: 'Innovation Time',
      description: 'Team members get dedicated time to work on innovative projects and research.',
      icon: Lightbulb
    },
    {
      title: 'Global Perspective',
      description: 'Our diverse team brings global perspectives and cultural insights to every project.',
      icon: Globe
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The brilliant minds behind Zion Tech Group's innovative solutions and exceptional client experiences.
            </p>
          </motion.div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are a diverse team of innovators, engineers, and visionaries dedicated to transforming 
            businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </div>
      </section>

      {/* Leadership Team */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">Visionary leaders driving innovation and growth</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Zion Tech Group
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{member.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 text-lg mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
<<<<<<< HEAD
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
=======

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, idx) => (
                          <span key={idx} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <span>View Profile</span>
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Senior Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Senior Leadership</h2>
            <p className="text-xl text-gray-300">Experienced professionals driving operational excellence</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Team Values</h2>
            <p className="text-xl text-gray-300">The principles that unite us and drive our success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
=======
      {/* Department Heads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Department Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized teams are led by industry experts in their respective fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentHeads.map((head, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{head.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{head.name}</h3>
                <p className="text-blue-400 text-sm mb-1">{head.role}</p>
                <p className="text-cyan-400 text-xs mb-3">{head.department}</p>
                <p className="text-gray-300 text-sm">{head.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our team culture and decision-making
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-16 w-16 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment that promotes growth, innovation, and collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get to Know Us Better</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to work with our team? Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start a Conversation
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for innovation 
            and technology. Join us in shaping the future of business technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </div>
      </section>
    </div>
  );
};

export default Team;