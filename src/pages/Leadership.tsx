import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Brain, Shield, Cloud, Rocket, Zap, Star, 
  Globe, Code, Building, TrendingUp, Users, 
  MessageCircle, Linkedin, Twitter, Github, Mail,
  Lightbulb, Target, Heart, Eye, Atom
} from 'lucide-react';

export default function Leadership() {
  const executiveTeam = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years of experience in AI strategy and technology innovation. Dr. Chen has led multiple successful technology companies and is passionate about democratizing access to advanced AI and quantum computing technologies.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Business Innovation', 'Technology Leadership'],
      achievements: ['Forbes 30 Under 30', 'MIT Technology Review Innovator', 'AI Ethics Award Winner'],
      image: '/leadership/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      },
      vision: 'To make cutting-edge AI and quantum technologies accessible to businesses of all sizes, enabling unprecedented innovation and growth.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Technology innovator with 12+ years specializing in scalable cloud solutions and enterprise architecture. Michael has architected systems for Fortune 500 companies and is an expert in digital transformation.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure', 'Digital Transformation'],
      achievements: ['AWS Community Builder', 'Microsoft MVP', 'Cloud Architecture Excellence Award'],
      image: '/leadership/michael-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        twitter: 'https://twitter.com/mrodriguez',
        github: 'https://github.com/mrodriguez'
      },
      vision: 'To build the most robust, scalable, and innovative technology infrastructure that empowers businesses to achieve their full potential.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with 10+ years focused on responsible AI development and cutting-edge machine learning algorithms. Dr. Watson holds a PhD from MIT and has published over 50 research papers.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics', 'Research & Development'],
      achievements: ['MIT PhD Computer Science', 'NeurIPS Best Paper Award', 'AI Ethics Leadership Award'],
      image: '/leadership/emily-watson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson'
      },
      vision: 'To develop AI systems that are not only powerful and intelligent, but also ethical, transparent, and beneficial to humanity.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'David Kim',
      role: 'Chief Security Officer',
      bio: 'Cybersecurity expert with 14+ years specializing in zero-trust architectures and regulatory compliance frameworks. David has protected critical infrastructure for government and enterprise clients.',
      expertise: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Risk Management'],
      achievements: ['CISSP Certified', 'SANS Security Expert', 'Cybersecurity Leadership Award'],
      image: '/leadership/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        twitter: 'https://twitter.com/davidkim',
        github: 'https://github.com/davidkim'
      },
      vision: 'To create a world where businesses can operate securely and confidently in the digital age, protected by cutting-edge security technologies.',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Engineering',
      bio: 'Engineering leader with 13+ years focused on building high-performing teams and delivering scalable software solutions. Lisa has led engineering teams at major tech companies and startups.',
      expertise: ['Software Engineering', 'Team Leadership', 'Agile', 'Product Development'],
      achievements: ['Engineering Excellence Award', 'Best Team Leader', 'Innovation in Engineering'],
      image: '/leadership/lisa-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        twitter: 'https://twitter.com/lisathompson',
        github: 'https://github.com/lisathompson'
      },
      vision: 'To build world-class engineering teams that consistently deliver exceptional software solutions that exceed customer expectations.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'James Wilson',
      role: 'VP of Product',
      bio: 'Product strategist with 11+ years passionate about creating user-centric solutions that solve real business problems. James has launched successful products used by millions of users.',
      expertise: ['Product Strategy', 'User Experience', 'Market Analysis', 'Product Management'],
      achievements: ['Product of the Year Award', 'UX Excellence Award', 'Innovation in Product Design'],
      image: '/leadership/james-wilson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/james-wilson',
        twitter: 'https://twitter.com/jameswilson',
        github: 'https://github.com/jameswilson'
      },
      vision: 'To create products that not only meet user needs but delight and inspire them, driving meaningful business outcomes.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const leadershipPrinciples = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to stay ahead of the curve.',
      icon: Lightbulb,
      color: 'text-yellow-500'
    },
    {
      title: 'Customer-Centric',
      description: 'Every decision we make is guided by what\'s best for our customers and their success.',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
      icon: Star,
      color: 'text-blue-500'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and building trust through honesty and clarity.',
      icon: Eye,
      color: 'text-green-500'
    },
    {
      title: 'Collaboration',
      description: 'We achieve more together, valuing diverse perspectives and teamwork.',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace growth and never stop improving ourselves and our solutions.',
      icon: Brain,
      color: 'text-indigo-500'
    }
  ];

  const companyMilestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2021',
      title: 'First AI Platform Launch',
      description: 'Successfully launched our flagship AI business intelligence platform',
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured $25M in funding to accelerate product development',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia-Pacific regions',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2024',
      title: 'Quantum Computing Initiative',
      description: 'Launched quantum computing research and development program',
      icon: Atom,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      year: '2025',
      title: 'Market Leadership',
      description: 'Recognized as a leader in AI and technology solutions',
      icon: Award,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the visionary leaders driving innovation, growth, and transformation at Zion Tech Group
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Award className="w-5 h-5" />
              <span>Industry Experts</span>
              <span>•</span>
              <Brain className="w-5 h-5" />
              <span>Innovation Leaders</span>
              <span>•</span>
              <Globe className="w-5 h-5" />
              <span>Global Vision</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Executive Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced leaders with proven track records in technology innovation and business transformation
            </p>
          </motion.div>

          <div className="space-y-16">
            {executiveTeam.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex lg:items-center lg:gap-12`}
              >
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <div className="text-center lg:text-left">
                    <div className={`w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-r ${executive.color} rounded-full flex items-center justify-center`}>
                      <span className="text-3xl font-bold text-white">
                        {executive.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                    <p className="text-blue-400 text-lg font-medium mb-4">{executive.role}</p>
                    
                    <div className="flex justify-center lg:justify-start space-x-3 mb-4">
                      {executive.social.linkedin && (
                        <a href={executive.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {executive.social.twitter && (
                        <a href={executive.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {executive.social.github && (
                        <a href={executive.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Bio</h4>
                      <p className="text-gray-300 leading-relaxed">{executive.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Vision</h4>
                      <p className="text-gray-300 leading-relaxed italic">"{executive.vision}"</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {executive.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Key Achievements</h4>
                      <div className="space-y-2">
                        {executive.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Leadership Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The core values and principles that guide our leadership team and company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className={`w-8 h-8 ${principle.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Milestones
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key moments in our journey of innovation and growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {companyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4 ${
                        index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                      }`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our leadership team is committed to helping you achieve your technology goals and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Target className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}