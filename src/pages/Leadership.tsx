import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Zap, 
  TrendingUp,
  Globe,
  Shield,
  Database,
  Cpu,
  Network,
  Rocket,
  Award,
  Star,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Leadership: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Kleber Santos',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader with over 15 years of experience in technology and AI. Passionate about democratizing access to cutting-edge technology and driving innovation across industries.',
      expertise: ['AI Strategy', 'Technology Innovation', 'Business Development', 'Team Leadership'],
      image: '👨‍💼'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      bio: 'Leading AI researcher and technology architect with expertise in machine learning, quantum computing, and autonomous systems. Former research lead at top tech companies.',
      expertise: ['AI Research', 'Quantum Computing', 'System Architecture', 'R&D Strategy'],
      image: '👩‍💻'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Operations Officer',
      bio: 'Operations expert with deep experience in scaling technology companies and optimizing business processes. Focused on operational excellence and customer success.',
      expertise: ['Operations Management', 'Process Optimization', 'Customer Success', 'Team Scaling'],
      image: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Research Officer',
      bio: 'Leading researcher in emerging technologies with focus on AI consciousness, autonomous systems, and next-generation computing platforms.',
      expertise: ['Emerging Technologies', 'AI Consciousness', 'Research Strategy', 'Innovation'],
      image: '👩‍🔬'
    }
  ];

  const values = [
    { name: 'Innovation', description: 'Pushing boundaries and exploring new possibilities' },
    { name: 'Collaboration', description: 'Working together to achieve extraordinary results' },
    { name: 'Excellence', description: 'Delivering the highest quality in everything we do' },
    { name: 'Impact', description: 'Making a meaningful difference in the world' },
    { name: 'Integrity', description: 'Operating with honesty and ethical principles' },
    { name: 'Growth', description: 'Continuous learning and personal development' }
  ];

  const achievements = [
    { title: 'AI Innovation Award', description: 'Recognized for breakthrough AI solutions', year: '2024' },
    { title: 'Technology Excellence', description: 'Industry leader in emerging technologies', year: '2024' },
    { title: 'Customer Success', description: 'Highest customer satisfaction ratings', year: '2023' },
    { title: 'Growth Recognition', description: 'Fastest growing tech company', year: '2023' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Leadership
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Meet the visionary leaders driving innovation and transformation at Zion Tech Group
          </p>
        </motion.div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders with deep expertise in technology, AI, and business innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-blue-400 font-semibold">{leader.title}</p>
                </div>
                <p className="text-gray-300 mb-6 text-lg text-center">{leader.bio}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Values & Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The core principles that guide our leadership and organizational culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry recognition for our innovative solutions and leadership excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                <span className="text-blue-400 text-xs font-semibold">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Work with visionary leaders who are shaping the future of technology and AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                View Career Opportunities
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;