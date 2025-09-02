import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Rocket,
  CheckCircle,
  Star,
  Building,
  Heart,
  Mail,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';

export default function Team() {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and digital transformation. Former senior technology executive with expertise in AI strategy and business innovation.',
      expertise: ['AI Strategy', 'Digital Transformation', 'Business Innovation', 'Technology Leadership'],
      image: '/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  const coreTeam = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Research Lead',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence. Former research scientist at leading tech companies.',
      expertise: ['Machine Learning', 'AI Research', 'Technical Architecture', 'Data Science'],
      image: '/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cloud & DevOps',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud. Specializes in scalable architecture and automation.',
      expertise: ['Cloud Architecture', 'DevOps', 'Infrastructure', 'Automation'],
      image: '/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      github: 'https://github.com/marcusrodriguez'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Director',
      bio: 'Former government cybersecurity specialist with expertise in threat intelligence and compliance. CISSP and CISM certified.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management', 'Threat Intelligence'],
      image: '/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Product & UX',
      bio: 'Product strategist with 10+ years in SaaS product development. Expert in user experience design and product-market fit.',
      expertise: ['Product Strategy', 'UX Design', 'User Research', 'Product Management'],
      image: '/team/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alexthompson',
      portfolio: 'https://alexthompson.design'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Michael Chang',
      role: 'AI Ethics Advisor',
      bio: 'Leading researcher in AI ethics and responsible AI development. Professor at Stanford University.',
      expertise: ['AI Ethics', 'Responsible AI', 'Policy', 'Research'],
      image: '/team/michael-chang.jpg',
      linkedin: 'https://linkedin.com/in/michaelchang'
    },
    {
      name: 'Lisa Park',
      role: 'Financial Technology Advisor',
      bio: 'Former fintech executive with expertise in blockchain and digital payments. Strategic advisor to multiple startups.',
      expertise: ['Fintech', 'Blockchain', 'Digital Payments', 'Strategy'],
      image: '/team/lisa-park.jpg',
      linkedin: 'https://linkedin.com/in/lisapark'
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Cutting-edge AI research and development team focused on next-generation machine learning and AI applications.',
      teamSize: '15+',
      focus: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics']
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Expert team managing scalable cloud infrastructure and DevOps automation for enterprise clients.',
      teamSize: '12+',
      focus: ['Cloud Architecture', 'DevOps', 'Security', 'Performance Optimization']
    },
    {
      name: 'Product & Design',
      description: 'User-centered design and product development team creating intuitive and powerful AI solutions.',
      teamSize: '10+',
      focus: ['UX Design', 'Product Strategy', 'User Research', 'Design Systems']
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Specialized security team ensuring enterprise-grade protection and regulatory compliance.',
      teamSize: '8+',
      focus: ['Threat Detection', 'Compliance', 'Risk Management', 'Security Architecture']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              World-class experts, innovators, and problem-solvers working together to 
              revolutionize technology and transform businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionary leaders driving innovation and growth at Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-3">{leader.role}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{leader.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-gray-600 hover:text-gray-700 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals driving excellence in every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white text-blue-700 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts and thought leaders providing strategic guidance and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{advisor.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{advisor.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {advisor.expertise.map((area) => (
                          <span key={area} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized teams working together to deliver comprehensive technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                  <span className="text-blue-600 font-semibold">{dept.teamSize}</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">{dept.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.focus.map((area) => (
                      <span key={area} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm">
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

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              technology and innovation. Join us in shaping the future of AI and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Contact HR Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}