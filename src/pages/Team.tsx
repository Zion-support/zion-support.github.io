import { ArrowRight, Award, Github, Lightbulb, Linkedin, Mail, Target, Twitter, Users } from 'lucide-react';
import React from 'react';


import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';








;

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Former VP of Engineering at Fortune 500 companies.',
      expertise: ['AI Strategy', 'Business Development', 'Leadership'],
      experience: '15+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@ziontechgroup.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Technical architect and innovation leader with expertise in cloud technologies and scalable systems.',
      expertise: ['Technical Architecture', 'Cloud Computing', 'Innovation'],
      experience: '12+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@ziontechgroup.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Solutions',
      bio: 'AI research expert with PhD in Machine Learning. Published author and conference speaker.',
      expertise: ['Machine Learning', 'Data Science', 'AI Research'],
      experience: '10+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@ziontechgroup.com'
      }
    },
    {
      name: 'David Thompson',
      role: 'Lead DevOps Engineer',
      bio: 'Infrastructure specialist with deep expertise in automation, cloud platforms, and system reliability.',
      expertise: ['DevOps', 'Cloud Infrastructure', 'Automation'],
      experience: '8+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@ziontechgroup.com'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Senior AI Engineer',
      bio: 'Machine learning engineer with specialization in natural language processing and computer vision.',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning'],
      experience: '6+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'lisa@ziontechgroup.com'
      }
    },
    {
      name: 'James Martinez',
      role: 'Full-Stack Developer',
      bio: 'Versatile developer with expertise in modern web technologies and microservices architecture.',
      expertise: ['React', 'Node.js', 'Microservices'],
      experience: '7+ years',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        github: '#',
        email: 'james@ziontechgroup.com'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive business growth and success.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work as a unified team, leveraging diverse perspectives to solve complex challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI & Technology Professionals</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, machine learning, cloud computing, and software development are ready to help transform your business." />
        <meta name="keywords" content="team, AI experts, technology professionals, machine learning engineers, cloud specialists, software developers" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                A diverse group of passionate technologists, AI experts, and innovators 
                dedicated to transforming businesses through cutting-edge solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4">{member.experience} experience</p>
                  
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5 text-blue-600" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 text-gray-600" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-green-600" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Team Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and shape our relationships with clients and each other
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation 
                and excellence. Explore career opportunities with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Us Your Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;