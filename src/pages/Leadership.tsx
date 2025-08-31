import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Mail,
  Building2
} from 'lucide-react';

const Leadership: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Kleber Santos',
      title: 'Founder & CEO',
      image: '/images/leadership/kleber-santos.jpg',
      bio: 'Visionary leader with over 15 years of experience in technology innovation and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.',
      expertise: ['AI & Machine Learning', 'Business Strategy', 'Technology Innovation', 'Digital Transformation'],
      linkedin: '#',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      image: '/images/leadership/sarah-chen.jpg',
      bio: 'Distinguished technologist with a PhD in Computer Science and extensive experience in AI research, quantum computing, and enterprise architecture.',
      expertise: ['Quantum Computing', 'AI Research', 'Enterprise Architecture', 'Cloud Technologies'],
      linkedin: '#',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Operations Officer',
      image: '/images/leadership/michael-rodriguez.jpg',
      bio: 'Operations expert with a proven track record of scaling technology companies and optimizing business processes for maximum efficiency.',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership', 'Strategic Planning'],
      linkedin: '#',
      email: 'michael.rodriguez@ziontechgroup.com'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with technology'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference worldwide'
    }
  ];

  const achievements = [
    'Successfully delivered 500+ technology solutions',
    'Served 200+ enterprise clients across industries',
    'Achieved 99.9% client satisfaction rate',
    'Recognized as Top AI Company 2024',
    'ISO 27001 and SOC 2 Type II certified',
    'Microsoft Gold Partner and AWS Advanced Partner'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Leadership Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the visionary leaders driving innovation and transformation at Zion Tech Group. 
              Our experienced team combines deep technical expertise with strategic business acumen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              business, and innovation to drive our mission forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-cyan-400 font-semibold">{leader.title}</p>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">{leader.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={leader.linkedin}
                    className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our track record of success and recognition in the technology industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to work with a team that's passionate about innovation and 
              committed to delivering exceptional results?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get in Touch
              </a>
              <a
                href="/careers"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Careers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;