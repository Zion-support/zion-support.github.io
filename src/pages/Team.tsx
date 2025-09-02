import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Linkedin, Mail, CheckCircle, Brain, Code, Shield, Cloud } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Business Development', 'Technology Innovation']
    }
  ];

  const departments = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      members: ['AI Researchers', 'Data Scientists', 'ML Engineers']
    },
    {
      name: 'Software Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      members: ['Full-Stack Developers', 'DevOps Engineers', 'Cloud Architects']
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      members: ['Security Analysts', 'Penetration Testers', 'Compliance Experts']
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      members: ['Cloud Architects', 'System Administrators', 'Infrastructure Specialists']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '25+', label: 'Certifications', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Amazing Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The brilliant minds behind our innovative solutions. Our diverse team of experts 
              brings together decades of experience in AI, cloud computing, cybersecurity, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology and business innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 mb-6">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized teams of specialists working together to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center mr-4`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {dept.members.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3">
                      <p className="text-gray-900 font-medium">{member}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and excellence. Explore our open positions and be part of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;