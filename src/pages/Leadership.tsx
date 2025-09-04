import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Twitter, Globe, Mail, Phone, MapPin, 
  Award, Users, Rocket, Brain, Shield, Cloud, Code,
  Building, Target, TrendingUp, Star, Zap, Heart,
  Crown, Briefcase, GraduationCap, Globe2, Lightbulb
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Leadership = () => {
  const executiveTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Dr. Sarah Chen is a visionary leader with over 20 years of experience in AI research and technology leadership. Prior to joining Zion Tech Group, she served as AI Research Director at Google, where she led breakthrough research in machine learning and neural networks.',
      image: '/images/leadership/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      education: 'PhD Computer Science, Stanford University',
      experience: 'Google, Microsoft, Stanford University',
      achievements: [
        'Led development of 50+ AI models deployed in production',
        'Published 100+ research papers in top AI conferences',
        'Named "AI Leader of the Year" by TechCrunch in 2023',
        'Advisory board member for AI Ethics Institute'
      ],
      vision: 'To democratize AI technology and make it accessible to businesses of all sizes, driving innovation and growth across industries.'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Marcus Rodriguez is a technology architect with 15+ years of experience building scalable cloud infrastructure and enterprise systems. He previously served as Senior Architect at Microsoft Azure, where he designed cloud solutions for Fortune 500 companies.',
      image: '/images/leadership/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      education: 'MS Computer Science, MIT',
      experience: 'Microsoft, Amazon Web Services, IBM',
      achievements: [
        'Architected cloud solutions for 100+ enterprise clients',
        'Led migration of 50+ legacy systems to cloud',
        'Named "Cloud Architect of the Year" in 2022',
        'Speaker at major tech conferences including AWS re:Invent'
      ],
      vision: 'To build the most scalable, secure, and innovative technology platform that enables businesses to thrive in the digital age.'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief AI Officer',
      bio: 'Dr. Emily Watson is a leading AI researcher and former professor at MIT, specializing in machine learning, neural networks, and AI ethics. She has published over 50 peer-reviewed papers and holds multiple patents in AI technology.',
      image: '/images/leadership/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson',
      education: 'PhD Artificial Intelligence, MIT',
      experience: 'MIT, Stanford University, DeepMind',
      achievements: [
        'Published 50+ papers in top AI journals',
        'Led research teams of 20+ PhD students',
        'Named "AI Researcher of the Year" in 2023',
        'Member of AI Ethics Advisory Council'
      ],
      vision: 'To advance AI technology responsibly while ensuring it serves humanity and creates positive societal impact.'
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      bio: 'David Kim brings 18 years of experience in investment banking and financial technology. He previously served as Managing Director at Goldman Sachs, where he led fintech investments and strategic financial planning.',
      image: '/images/leadership/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      education: 'MBA Finance, Harvard Business School',
      experience: 'Goldman Sachs, Morgan Stanley, JP Morgan',
      achievements: [
        'Led $2B+ in fintech investments',
        'Managed portfolio of 50+ technology companies',
        'Named "Fintech Leader of the Year" in 2022',
        'Board member of 3 successful fintech startups'
      ],
      vision: 'To build a financially sustainable company that can scale globally while maintaining our commitment to innovation and customer success.'
    }
  ];

  const boardMembers = [
    {
      name: 'Dr. Michael Chang',
      title: 'Board Chairman',
      role: 'Independent Director',
      bio: 'Dr. Chang is a renowned technology investor and former CEO of TechCorp, a Fortune 500 technology company. He brings 30+ years of executive leadership experience.',
      image: '/images/leadership/michael-chang.jpg',
      linkedin: 'https://linkedin.com/in/michael-chang',
      education: 'PhD Engineering, Caltech',
      experience: 'TechCorp, Silicon Valley Ventures, Caltech',
      expertise: ['Technology Investment', 'Corporate Governance', 'Strategic Planning']
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Board Member',
      role: 'Independent Director',
      bio: 'Lisa is a cybersecurity expert and former CISO of a major financial institution. She brings deep expertise in security, compliance, and risk management.',
      image: '/images/leadership/lisa-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/lisa-rodriguez',
      education: 'MS Cybersecurity, Carnegie Mellon',
      experience: 'Bank of America, NSA, Deloitte',
      expertise: ['Cybersecurity', 'Risk Management', 'Compliance']
    },
    {
      name: 'James Wilson',
      title: 'Board Member',
      role: 'Independent Director',
      bio: 'James is a serial entrepreneur and angel investor with 5 successful exits. He brings valuable insights into startup growth and market strategy.',
      image: '/images/leadership/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson',
      education: 'MBA Entrepreneurship, Stanford',
      experience: 'Founder of 3 successful startups, Angel investor',
      expertise: ['Entrepreneurship', 'Startup Growth', 'Market Strategy']
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Crown,
      title: 'Visionary Leadership',
      description: 'We lead with a clear vision of the future and inspire our teams to achieve the extraordinary.'
    },
    {
      icon: Heart,
      title: 'People First',
      description: 'Our people are our greatest asset. We invest in their growth and create an environment where they can thrive.'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We operate with the highest ethical standards, building trust with our customers, partners, and team members.'
    },
    {
      icon: Rocket,
      title: 'Innovation & Excellence',
      description: 'We continuously push boundaries, striving for excellence in everything we do.'
    },
    {
      icon: Globe2,
      title: 'Global Impact',
      description: 'We think globally and act locally, creating solutions that benefit businesses and communities worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We foster a culture of continuous learning and adaptation to stay ahead of industry changes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Leadership - Zion Tech Group"
        description="Meet the visionary leaders and board members driving Zion Tech Group's mission to democratize AI technology and drive innovation across industries."
        keywords="leadership, executives, board members, CEO, CTO, AI officer, CFO, Zion Tech Group leadership"
        canonicalUrl="https://ziontechgroup.com/leadership"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Executive
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Leadership
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Our executive team brings together decades of experience from leading technology companies, 
            combining deep technical expertise with strategic business acumen to drive innovation and growth.
          </motion.p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the C-suite executives leading Zion Tech Group's mission and strategy.
            </p>
          </motion.div>

          <div className="space-y-16">
            {executiveTeam.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Executive Info */}
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {executive.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{executive.title}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Education</h4>
                        <p className="text-gray-300 text-sm">{executive.education}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Experience</h4>
                        <p className="text-gray-300 text-sm">{executive.experience}</p>
                      </div>

                      <div className="flex items-center justify-center lg:justify-start space-x-4">
                        {executive.linkedin && (
                          <a
                            href={executive.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {executive.twitter && (
                          <a
                            href={executive.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Executive Details */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Biography</h4>
                        <p className="text-gray-300 leading-relaxed">{executive.bio}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {executive.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-3">
                              <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Leadership Vision</h4>
                        <p className="text-gray-300 leading-relaxed italic">"{executive.vision}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our independent board members provide strategic guidance and governance oversight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-green-400 font-semibold mb-1">{member.title}</p>
                  <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Biography</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Education</h4>
                    <p className="text-gray-300 text-sm">{member.education}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Experience</h4>
                    <p className="text-gray-300 text-sm">{member.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.linkedin && (
                    <div className="pt-4 border-t border-gray-700">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The core principles that guide our leadership approach and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect with Leadership
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions for our leadership team? We're always open to discussing 
              partnerships, investments, and strategic opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Leadership
              </a>
              <a
                href="/investors"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Investor Relations
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;