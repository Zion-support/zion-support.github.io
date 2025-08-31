import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock,
  Star,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

const Training: React.FC = () => {
  const trainingPrograms = [
    {
      name: 'AI & Machine Learning Fundamentals',
      description: 'Master the basics of artificial intelligence and machine learning technologies.',
      duration: '3 days',
      level: 'Beginner',
      price: '$1,999',
      rating: 4.8,
      students: 156,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      topics: [
        'Introduction to AI and ML',
        'Machine Learning Algorithms',
        'Data Preprocessing',
        'Model Training & Evaluation',
        'Practical Applications'
      ]
    },
    {
      name: 'Cybersecurity Best Practices',
      description: 'Learn essential cybersecurity principles and implementation strategies.',
      duration: '2 days',
      level: 'Intermediate',
      price: '$1,499',
      rating: 4.9,
      students: 89,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      topics: [
        'Threat Landscape Analysis',
        'Security Frameworks',
        'Incident Response',
        'Compliance & Governance',
        'Security Tools & Technologies'
      ]
    },
    {
      name: 'Cloud Infrastructure & DevOps',
      description: 'Comprehensive training on cloud platforms and DevOps methodologies.',
      duration: '4 days',
      level: 'Intermediate',
      price: '$2,499',
      rating: 4.7,
      students: 203,
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      topics: [
        'Cloud Architecture Design',
        'Containerization & Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ]
    },
    {
      name: 'Digital Transformation Leadership',
      description: 'Strategic leadership training for digital transformation initiatives.',
      duration: '2 days',
      level: 'Advanced',
      price: '$2,999',
      rating: 4.9,
      students: 67,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      topics: [
        'Change Management',
        'Digital Strategy Development',
        'Innovation Leadership',
        'Stakeholder Management',
        'ROI Measurement'
      ]
    }
  ];

  const trainingFormats = [
    {
      name: 'In-Person Training',
      description: 'Hands-on training at our facilities or your location',
      icon: Users,
      benefits: [
        'Direct interaction with instructors',
        'Hands-on practice with real equipment',
        'Networking opportunities',
        'Immediate feedback and Q&A'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Virtual Training',
      description: 'Live online training sessions with expert instructors',
      icon: Globe,
      benefits: [
        'Learn from anywhere in the world',
        'Flexible scheduling options',
        'Recorded sessions for review',
        'Interactive virtual labs'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Self-Paced Learning',
      description: 'On-demand courses and learning materials',
      icon: BookOpen,
      benefits: [
        'Learn at your own pace',
        '24/7 access to materials',
        'Progress tracking',
        'Cost-effective option'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const upcomingSessions = [
    {
      program: 'AI & Machine Learning Fundamentals',
      date: '2024-01-15',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      seats: 12,
      price: '$1,999'
    },
    {
      program: 'Cybersecurity Best Practices',
      date: '2024-01-22',
      location: 'Middletown, DE',
      instructor: 'Michael Rodriguez',
      seats: 8,
      price: '$1,499'
    },
    {
      program: 'Cloud Infrastructure & DevOps',
      date: '2024-01-29',
      location: 'Virtual',
      instructor: 'David Kim',
      seats: 15,
      price: '$2,499'
    }
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
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {' '}Training
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advance your skills with our comprehensive training programs designed by industry experts. 
              From AI fundamentals to advanced cybersecurity, we have the courses you need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
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
              Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional development courses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{program.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">({program.students} students)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{program.name}</h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {program.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">{program.price}</span>
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
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
              Training Formats
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the learning format that works best for you and your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingFormats.map((format, index) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${format.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{format.name}</h3>
                <p className="text-gray-300 mb-6">{format.description}</p>
                <ul className="space-y-2 text-left">
                  {format.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
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
              Upcoming Sessions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure your spot in our upcoming training sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{session.program}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Instructor: {session.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>{session.seats} seats available</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-yellow-400">{session.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Corporate Training Solutions
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We offer customized training programs for organizations of all sizes. 
                Our corporate training solutions are designed to upskill your team 
                and drive digital transformation success.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Customized curriculum for your industry</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">On-site or virtual delivery options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Certification and progress tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Ongoing support and consultation</span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Request Corporate Training
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Training Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Skill Development</h4>
                    <p className="text-gray-400 text-sm">Enhance team capabilities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Team Collaboration</h4>
                    <p className="text-gray-400 text-sm">Improve team dynamics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Certification</h4>
                    <p className="text-gray-400 text-sm">Recognized credentials</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our training team to discuss your learning goals and find the perfect program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              >
                Contact Training Team
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;