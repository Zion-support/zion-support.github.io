import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  Award, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Code,
  Star
} from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years of experience in technology and business innovation. Passionate about AI and digital transformation.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership'],
      achievements: ['500+ Projects Delivered', '15+ Years Experience', 'AI Innovation Award 2023']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence. Leads our technical innovation and AI research.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'AI Research', 'System Architecture'],
      achievements: ['PhD Stanford', '20+ Research Papers', 'AI Ethics Expert']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Senior software engineer with expertise in cloud infrastructure and scalable systems. Ensures our solutions are robust and performant.',
      image: '/images/team/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      twitter: 'https://twitter.com/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      achievements: ['AWS Solutions Architect', '10+ Years Experience', 'Open Source Contributor']
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design & UX',
      bio: 'Creative director focused on user experience and interface design. Ensures our products are intuitive and beautiful.',
      image: '/images/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson',
      email: 'emily@ziontechgroup.com',
      expertise: ['User Experience', 'Interface Design', 'Product Strategy'],
      achievements: ['Design Award Winner', '8+ Years Experience', 'UX Research Expert']
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with deep knowledge of enterprise security, compliance, and threat detection.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      email: 'david@ziontechgroup.com',
      expertise: ['Cybersecurity', 'Compliance', 'Threat Detection'],
      achievements: ['CISSP Certified', 'Security Expert', 'Compliance Specialist']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      bio: 'Customer success leader dedicated to ensuring our clients achieve their goals and maximize value from our solutions.',
      image: '/images/team/lisa-thompson.jpg',
      linkedin: 'https://linkedin.com/in/lisathompson',
      twitter: 'https://twitter.com/lisathompson',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Customer Success', 'Account Management', 'Client Relations'],
      achievements: ['Customer Satisfaction 98%', '10+ Years Experience', 'Success Metrics Expert']
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes for our clients.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { value: '500+', label: 'Projects Delivered', icon: <Star className="w-6 h-6" /> },
    { value: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { value: '99.9%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse group of experts passionate about technology, innovation, and delivering exceptional results for our clients.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who lead our company and drive innovation across all aspects of our business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment of continuous learning, collaboration, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-300 mb-6">
                We invest in our team's growth through training programs, conferences, and access to cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Regular training sessions and workshops</li>
                <li>• Conference attendance and speaking opportunities</li>
                <li>• Access to latest tools and technologies</li>
                <li>• Mentorship and knowledge sharing programs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
              <p className="text-gray-300 mb-6">
                We believe in maintaining a healthy balance between work and personal life for optimal productivity and well-being.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Flexible working hours and remote options</li>
                <li>• Generous vacation and personal time off</li>
                <li>• Wellness programs and health benefits</li>
                <li>• Team building and social activities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation. 
              Explore our current opportunities and become part of our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/careers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact HR Team
              </Link>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-3">Why Work With Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>• Competitive salary and benefits</div>
                <div>• Remote-first culture</div>
                <div>• Cutting-edge technology stack</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}