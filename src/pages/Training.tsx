
import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Zap, 
  Brain, 
  Code, 
  Shield, 
  Cloud, 
  Database,
  CheckCircle,
  Star,
  Play,
  Download,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Training: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'AI & Machine Learning Fundamentals',
      duration: '3 Days',
      level: 'Beginner',
      price: '$1,999',
      description: 'Master the basics of AI and ML with hands-on projects',
      features: ['Python programming', 'Data preprocessing', 'Model training', 'Real-world applications'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cybersecurity & Ethical Hacking',
      duration: '5 Days',
      level: 'Intermediate',
      price: '$2,499',
      description: 'Learn advanced security techniques and threat prevention',
      features: ['Network security', 'Penetration testing', 'Incident response', 'Security tools'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud Architecture & DevOps',
      duration: '4 Days',
      level: 'Intermediate',
      price: '$2,199',
      description: 'Design and deploy scalable cloud solutions',
      features: ['AWS/Azure/GCP', 'Containerization', 'CI/CD pipelines', 'Infrastructure as Code'],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Science & Analytics',
      duration: '4 Days',
      level: 'Intermediate',
      price: '$2,199',
      description: 'Transform data into actionable business insights',
      features: ['Statistical analysis', 'Data visualization', 'Predictive modeling', 'Business intelligence'],
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Computing Basics',
      duration: '2 Days',
      level: 'Advanced',
      price: '$3,999',
      description: 'Introduction to quantum computing principles and applications',
      features: ['Quantum mechanics', 'Quantum algorithms', 'Quantum programming', 'Industry applications'],
      icon: Zap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'IoT & Edge Computing',
      duration: '3 Days',
      level: 'Intermediate',
      price: '$1,999',
      description: 'Build and deploy IoT solutions with edge computing',
      features: ['Sensor networks', 'Edge processing', 'Data analytics', 'Security considerations'],
      icon: Globe,
      color: 'from-teal-500 to-green-500'
    }
  ];

  const certificationPaths = [
    {
      name: 'AI Engineer',
      requirements: ['AI Fundamentals', 'Machine Learning', 'Deep Learning', 'AI Ethics'],
      duration: '6-8 months',
      examCost: '$299'
    },
    {
      name: 'Cybersecurity Specialist',
      requirements: ['Security Fundamentals', 'Network Security', 'Penetration Testing', 'Incident Response'],
      duration: '8-10 months',
      examCost: '$399'
    },
    {
      name: 'Cloud Architect',
      requirements: ['Cloud Fundamentals', 'Architecture Design', 'DevOps Practices', 'Security & Compliance'],
      duration: '6-9 months',
      examCost: '$349'
    },
    {
      name: 'Data Scientist',
      requirements: ['Statistics', 'Data Analysis', 'Machine Learning', 'Business Intelligence'],
      duration: '7-9 months',
      examCost: '$349'
    }
  ];

  const upcomingSessions = [
    {
      date: 'March 15-17, 2025',
      location: 'Virtual (Online)',
      program: 'AI & Machine Learning Fundamentals',
      seats: '12 available'
    },
    {
      date: 'March 22-26, 2025',
      location: 'New York, NY',
      program: 'Cybersecurity & Ethical Hacking',
      seats: '8 available'
    },
    {
      date: 'April 5-8, 2025',
      location: 'San Francisco, CA',
      program: 'Cloud Architecture & DevOps',
      seats: '15 available'
    },
    {
      date: 'April 12-15, 2025',
      location: 'Virtual (Online)',
      program: 'Data Science & Analytics',
      seats: '20 available'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training & Certification - Zion Tech Group"
        description="Professional training programs and certifications in AI, cybersecurity, cloud computing, and emerging technologies. Advance your career with expert-led courses."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Professional Training</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Training &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                Certification
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advance your career with our comprehensive training programs in AI, cybersecurity, 
              cloud computing, and emerging technologies. Learn from industry experts and earn recognized certifications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
                View Programs
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Training Programs</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{program.duration}</span>
                    <span className="text-sm text-gray-400">{program.level}</span>
                    <span className="text-lg font-bold text-cyan-400">{program.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Paths Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Certification Paths</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certificationPaths.map((cert, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-400">Certified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                      Duration: {cert.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Award className="w-4 h-4 text-purple-400 mr-2" />
                      Exam Cost: {cert.examCost}
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {cert.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Sessions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Training Sessions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingSessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{session.program}</h3>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
                          {session.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-purple-400 mr-2" />
                          {session.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-green-400 mr-2" />
                          {session.seats}
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200">
                      Register
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group Training?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Instructors</h3>
                <p className="text-gray-400">Learn from industry professionals with years of real-world experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
                <p className="text-gray-400">Earn certifications that are respected by top employers worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Learning</h3>
                <p className="text-gray-400">Choose between in-person, virtual, or hybrid learning formats</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our training team to learn more about our programs, schedule a consultation, or enroll in upcoming sessions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">training@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-gray-300">Online & In-Person</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
