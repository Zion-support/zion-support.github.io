import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp, Shield, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Leadership() {
  const executiveTeam = [
    {
      name: 'Kleber Santos',
      role: 'Chief Executive Officer & Founder',
      bio: 'Kleber founded Zion Tech Group with the vision of democratizing access to advanced AI and quantum technologies. With over 15 years of experience in technology leadership and business innovation, he has led multiple successful ventures and transformational initiatives.',
      achievements: [
        'Founded 3 successful technology companies',
        'Led digital transformation for Fortune 500 companies',
        'Expert in AI strategy and quantum computing applications',
        'Recognized thought leader in emerging technologies'
      ],
      vision: 'To create a future where advanced AI and quantum technologies are accessible to every business, enabling unprecedented innovation and growth.',
      image: '/images/leadership/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Dr. Chen leads our technical vision and research initiatives. With a PhD in Computer Science from MIT and over 20 published papers in AI and machine learning, she brings deep technical expertise to our innovation efforts.',
      achievements: [
        'PhD in Computer Science from MIT',
        '20+ published research papers in AI/ML',
        'Former Lead AI Researcher at major tech companies',
        'Expert in neural networks and autonomous systems'
      ],
      vision: 'To advance the state of AI technology while ensuring ethical, responsible, and beneficial applications for society.',
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Operating Officer',
      bio: 'Marcus oversees our global operations and ensures scalable delivery of our services. His expertise in cloud infrastructure and DevOps has been instrumental in building our robust technology platform.',
      achievements: [
        'AWS, Azure, and GCP certified architect',
        'Led infrastructure scaling for 100M+ user platforms',
        '15+ years in cloud and DevOps leadership',
        'Expert in scalable system architecture'
      ],
      vision: 'To build the most reliable and scalable technology infrastructure that enables our clients to focus on innovation.',
      image: '/images/leadership/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Security Officer',
      bio: 'Dr. Watson brings extensive cybersecurity expertise from her background in government and enterprise security. She leads our commitment to maintaining the highest security standards across all our solutions.',
      achievements: [
        'Former government cybersecurity specialist',
        'Expert in zero-trust security architecture',
        'Led security for critical infrastructure projects',
        'Certified in multiple security frameworks'
      ],
      vision: 'To establish security as a foundational element that enables innovation rather than constraining it.',
      image: '/images/leadership/emily-watson.jpg'
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We chart the course for the future of technology, anticipating trends and preparing our clients for tomorrow\'s opportunities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Our success is built on the talent, dedication, and well-being of our team members and the success of our clients.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Culture',
      description: 'We foster an environment where breakthrough ideas flourish and where calculated risks lead to revolutionary solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Ethical Leadership',
      description: 'We lead with integrity, transparency, and a commitment to using technology for the betterment of society.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const companyStats = [
    { number: '500+', label: 'Projects Delivered', description: 'Successful implementations' },
    { number: '50+', label: 'Team Members', description: 'Expert professionals' },
    { number: '25+', label: 'Countries', description: 'Global presence' },
    { number: '99%', label: 'Client Satisfaction', description: 'Proven track record' }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2020',
      title: 'First AI Products',
      description: 'Launched our flagship AI compliance and automation solutions'
    },
    {
      year: '2022',
      title: 'Quantum Initiative',
      description: 'Began research and development in quantum computing applications'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as a leading AI and quantum technology provider'
    }
  ];

  return (
    <>
      <SEO 
        title="Leadership Team - Zion Tech Group"
        description="Meet the executive leadership team driving Zion Tech Group's vision and innovation in AI, quantum computing, and technology solutions."
        keywords="leadership, executive team, CEO, CTO, company vision, technology leaders"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Executive Leadership
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Meet the visionary leaders driving innovation and shaping the future of technology at Zion Tech Group.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Executive Team */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Executive Team
            </h2>
            <div className="space-y-12">
              {executiveTeam.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex gap-8 items-center`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                      <div className="w-full h-full rounded-2xl bg-gray-700 flex items-center justify-center text-white text-4xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-cyan-400 text-xl font-medium mb-4">
                      {leader.role}
                    </p>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center text-gray-300">
                            <Award className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-4 border border-cyan-400/30">
                      <h4 className="text-white font-semibold mb-2">Vision:</h4>
                      <p className="text-gray-300 italic">"{leader.vision}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Leadership Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${principle.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex gap-8`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Partner with Visionary Leaders
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Work directly with our executive team to transform your business with cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Schedule a Leadership Meeting
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}