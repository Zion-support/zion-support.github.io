import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Github, Lightbulb, Linkedin, Mail, Target, Twitter, Users } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Former VP of Engineering at Fortune 500 companies.',
      expertise: ['AI Strategy', 'Business Development', 'Leadership'],
      image: '/team/sarah-johnson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson',
        github: 'https://github.com/sarahjohnson'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable AI systems and cloud infrastructure. PhD in Computer Science.',
      expertise: ['AI Architecture', 'Cloud Computing', 'Machine Learning'],
      image: '/team/michael-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        twitter: 'https://twitter.com/michaelchen',
        github: 'https://github.com/michaelchen'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      bio: 'Leading researcher in natural language processing and computer vision. Published 50+ papers in top-tier conferences.',
      expertise: ['NLP', 'Computer Vision', 'Research'],
      image: '/team/emily-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emilyrodriguez',
        twitter: 'https://twitter.com/emilyrodriguez',
        github: 'https://github.com/emilyrodriguez'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with expertise in building high-performance applications. 10+ years in enterprise software.',
      expertise: ['Full-Stack Development', 'DevOps', 'System Design'],
      image: '/team/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
        github: 'https://github.com/davidkim'
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="team, leadership, AI experts, technology professionals" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our Team
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Meet the experts behind our innovative AI and IT solutions
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center text-blue-200">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Award className="w-5 h-5 mr-2" />
                    <span>Industry Leaders</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    <span>Innovation Focused</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Leadership Team
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <div className="text-white text-6xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600">
                      We strive for the highest standards in everything we do, delivering exceptional results for our clients.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-600">
                      We embrace cutting-edge technologies and creative solutions to solve complex business challenges.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Collaboration
                    </h3>
                    <p className="text-gray-600">
                      We work closely with our clients and team members to achieve shared success and mutual growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl mb-8">
                  Join our team of experts and help shape the future of AI and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;