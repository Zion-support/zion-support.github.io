import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Star, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  ArrowRight, 
  Building2, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Shield, 
  Zap, 
  Cloud, 
  Brain, 
  Database, 
  Network, 
  Cpu, 
  Smartphone, 
  Lock, 
  Server, 
  BarChart3, 
  Code, 
  Wifi, 
  Atom, 
  Dna, 
  Rocket, 
  Handshake, 
  CheckCircle, 
  Clock, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Eye, 
  Ear, 
  MessageCircle
} from 'lucide-react';

export default function Leadership() {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Kleber Santos',
      title: 'Chief Executive Officer & Founder',
      avatar: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and business transformation. Founded Zion Tech Group with a mission to democratize advanced technology solutions.',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development', 'Team Building'],
      education: 'MBA, Stanford Graduate School of Business',
      experience: '15+ years in technology leadership',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber.santos@ziontechgroup.com',
      featured: true,
      achievements: [
        'Named "Tech Innovator of the Year" by TechCrunch 2023',
        'Led company to 300% revenue growth in 3 years',
        'Established partnerships with Fortune 500 companies',
        'Featured speaker at major tech conferences worldwide'
      ]
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer & AI Research Lead',
      avatar: '/images/team/sarah-chen.jpg',
      bio: 'Distinguished AI researcher and technology leader with expertise in machine learning, cybersecurity, and emerging technologies. Drives innovation across all product lines.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Research & Development'],
      education: 'Ph.D. Computer Science, MIT',
      experience: '12+ years in AI research and development',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen_ai',
      email: 'sarah.chen@ziontechgroup.com',
      featured: true,
      achievements: [
        'Published 50+ peer-reviewed papers in top AI journals',
        'Led development of award-winning AI security platform',
        'Named to "40 Under 40" in Technology by Forbes',
        'Holds 15 patents in AI and cybersecurity'
      ]
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      title: 'Chief Cybersecurity Officer',
      avatar: '/images/team/emily-watson.jpg',
      bio: 'Cybersecurity expert with deep experience in threat intelligence, incident response, and security architecture. Ensures the highest standards of security across all operations.',
      expertise: ['Cybersecurity', 'Threat Intelligence', 'Incident Response', 'Security Architecture'],
      education: 'Ph.D. Cybersecurity, Carnegie Mellon University',
      experience: '10+ years in cybersecurity leadership',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson_sec',
      email: 'emily.watson@ziontechgroup.com',
      featured: true,
      achievements: [
        'Former FBI cybersecurity advisor',
        'Led response to major cyber incidents',
        'Author of "Modern Cybersecurity Strategies"',
        'Regular speaker at Black Hat and DEF CON'
      ]
    },
    {
      id: 4,
      name: 'Marcus Rodriguez',
      title: 'Head of Cloud & DevOps',
      avatar: '/images/team/marcus-rodriguez.jpg',
      bio: 'Cloud architecture expert specializing in scalable infrastructure, DevOps practices, and cloud-native solutions. Drives technical excellence and operational efficiency.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure', 'System Design'],
      education: 'M.S. Computer Science, UC Berkeley',
      experience: '8+ years in cloud infrastructure',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      email: 'marcus.rodriguez@ziontechgroup.com',
      featured: false,
      achievements: [
        'Architected cloud solutions for Fortune 100 companies',
        'Certified AWS Solutions Architect Professional',
        'Led migration of legacy systems to cloud',
        'Established DevOps best practices across organization'
      ]
    },
    {
      id: 5,
      name: 'Jennifer Park',
      title: 'Chief Marketing Officer',
      avatar: '/images/team/jennifer-park.jpg',
      bio: 'Strategic marketing leader with expertise in brand development, digital marketing, and customer acquisition. Drives market expansion and brand recognition.',
      expertise: ['Strategic Marketing', 'Brand Development', 'Digital Marketing', 'Customer Acquisition'],
      education: 'MBA Marketing, Northwestern Kellogg',
      experience: '10+ years in technology marketing',
      linkedin: 'https://linkedin.com/in/jennifer-park',
      twitter: 'https://twitter.com/jenniferpark_cmo',
      email: 'jennifer.park@ziontechgroup.com',
      featured: false,
      achievements: [
        'Increased brand awareness by 400% in 2 years',
        'Led successful product launches generating $50M+ revenue',
        'Named "Marketing Leader of the Year" by AdWeek',
        'Established partnerships with major industry influencers'
      ]
    },
    {
      id: 6,
      name: 'David Thompson',
      title: 'Chief Financial Officer',
      avatar: '/images/team/david-thompson.jpg',
      bio: 'Financial strategist with extensive experience in technology finance, fundraising, and strategic planning. Ensures sustainable growth and financial stability.',
      expertise: ['Financial Strategy', 'Fundraising', 'Strategic Planning', 'Risk Management'],
      education: 'MBA Finance, Harvard Business School',
      experience: '12+ years in technology finance',
      linkedin: 'https://linkedin.com/in/david-thompson',
      twitter: 'https://twitter.com/davidthompson_cfo',
      email: 'david.thompson@ziontechgroup.com',
      featured: false,
      achievements: [
        'Led $100M Series C funding round',
        'Improved operational efficiency by 35%',
        'Established strategic partnerships with major investors',
        'Managed financial operations during 300% growth period'
      ]
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      title: 'Head of Human Resources',
      avatar: '/images/team/lisa-anderson.jpg',
      bio: 'HR leader focused on building exceptional teams, fostering company culture, and developing talent. Creates an environment where innovation thrives.',
      expertise: ['Talent Acquisition', 'Culture Development', 'Employee Engagement', 'Leadership Development'],
      education: 'M.S. Human Resources, Cornell University',
      experience: '8+ years in technology HR',
      linkedin: 'https://linkedin.com/in/lisa-anderson',
      twitter: 'https://twitter.com/lisaanderson_hr',
      email: 'lisa.anderson@ziontechgroup.com',
      featured: false,
      achievements: [
        'Built team from 10 to 200+ employees',
        'Achieved 95% employee satisfaction rating',
        'Established award-winning company culture',
        'Reduced employee turnover by 40%'
      ]
    },
    {
      id: 8,
      name: 'Robert Kim',
      title: 'Head of Product Management',
      avatar: '/images/team/robert-kim.jpg',
      bio: 'Product strategist with deep understanding of customer needs and market dynamics. Drives product innovation and ensures market success.',
      expertise: ['Product Strategy', 'User Experience', 'Market Analysis', 'Product Development'],
      education: 'M.S. Product Management, Stanford University',
      experience: '7+ years in product management',
      linkedin: 'https://linkedin.com/in/robert-kim',
      twitter: 'https://twitter.com/robertkim_pm',
      email: 'robert.kim@ziontechgroup.com',
      featured: false,
      achievements: [
        'Launched 5 successful products generating $100M+ revenue',
        'Led user experience redesign improving satisfaction by 60%',
        'Established product development best practices',
        'Named "Product Manager of the Year" by Product Hunt'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to solve complex challenges.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Security is built into everything we do, ensuring our clients can trust us with their most critical data.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our success is measured by our customers\' success. We go above and beyond to ensure their goals are achieved.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, product, and interaction.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our business dealings.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'We embrace challenges as opportunities to learn, grow, and improve our capabilities.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const leadershipStats = [
    { icon: Users, number: '200+', label: 'Team Members' },
    { icon: Award, number: '50+', label: 'Industry Awards' },
    { icon: Star, number: '95%', label: 'Customer Satisfaction' },
    { icon: TrendingUp, number: '300%', label: 'Revenue Growth' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="Leadership Team - Zion Tech Group"
        description="Meet the visionary leaders driving innovation at Zion Tech Group. Our executive team brings decades of experience in technology, business, and innovation."
        keywords="leadership, executive team, CEO, CTO, management, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Leadership
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Meet the visionary leaders driving innovation and growth at Zion Tech Group. 
              Our executive team brings decades of combined experience in technology, business, and innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our C-suite executives guide the company's strategic direction and drive innovation across all areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.filter(member => member.featured).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {member.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{member.education}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{member.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team of leaders brings expertise from various domains to drive comprehensive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {member.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span className="line-clamp-1">{member.education}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The core principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The measurable results of our leadership team's vision and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Join Our Leadership Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Ready to lead innovation and drive change? Explore opportunities to join our 
            leadership team and help shape the future of technology.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}