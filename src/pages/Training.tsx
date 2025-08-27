import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Video, 
  Users, 
  Certificate, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle,
  Brain,
  Cloud,
  Shield,
  Sparkles,
  Zap,
  Globe,
  Target,
  TrendingUp
} from 'lucide-react';

const trainingPrograms = [
  {
    title: 'AI & Machine Learning Fundamentals',
    description: 'Master the basics of AI and ML with hands-on projects',
    duration: '8 weeks',
    level: 'Beginner',
    price: '$299',
    icon: Brain,
    features: [
      'Introduction to AI concepts',
      'Machine learning algorithms',
      'Data preprocessing techniques',
      'Model evaluation methods',
      'Real-world project implementation'
    ]
  },
  {
    title: 'Cloud & DevOps Mastery',
    description: 'Learn modern cloud infrastructure and DevOps practices',
    duration: '10 weeks',
    level: 'Intermediate',
    price: '$399',
    icon: Cloud,
    features: [
      'AWS/Azure/GCP fundamentals',
      'Containerization with Docker',
      'Kubernetes orchestration',
      'CI/CD pipeline design',
      'Infrastructure as Code'
    ]
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Develop advanced security skills and ethical hacking techniques',
    duration: '12 weeks',
    level: 'Advanced',
    price: '$499',
    icon: Shield,
    features: [
      'Network security fundamentals',
      'Penetration testing',
      'Security auditing',
      'Incident response',
      'Compliance frameworks'
    ]
  },
  {
    title: 'Emerging Technologies',
    description: 'Explore cutting-edge technologies like IoT, Blockchain, and Quantum Computing',
    duration: '6 weeks',
    level: 'Intermediate',
    price: '$349',
    icon: Sparkles,
    features: [
      'IoT architecture and protocols',
      'Blockchain development',
      'Quantum computing basics',
      'Edge computing concepts',
      'Future technology trends'
    ]
  }
];

const certificationPaths = [
  {
    name: 'Zion AI Specialist',
    description: 'Certification for AI and machine learning professionals',
    requirements: ['Complete AI Fundamentals course', 'Pass practical assessment', 'Submit portfolio project'],
    validity: '2 years',
    icon: Brain
  },
  {
    name: 'Zion Cloud Architect',
    description: 'Advanced cloud infrastructure and DevOps certification',
    requirements: ['Complete Cloud & DevOps course', 'Pass architecture design exam', 'Complete capstone project'],
    validity: '3 years',
    icon: Cloud
  },
  {
    name: 'Zion Security Expert',
    description: 'Cybersecurity and ethical hacking certification',
    requirements: ['Complete Security course', 'Pass penetration testing exam', 'Complete security audit project'],
    validity: '2 years',
    icon: Shield
  }
];

export default function Training() {
  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your career with our comprehensive training programs in AI, Cloud Computing, 
              Cybersecurity, and Emerging Technologies. Learn from industry experts and get certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=training"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#programs"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose from our carefully curated training programs designed to accelerate your career 
              in technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    <p className="text-zion-slate-light">{program.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm text-zion-slate-light">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {program.level}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {program.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact?type=training"
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Paths */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Earn industry-recognized certifications that validate your skills and advance your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationPaths.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate border border-zion-purple/20 rounded-xl p-8 text-center hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{cert.name}</h3>
                <p className="text-zion-slate-light mb-6">{cert.description}</p>
                
                <div className="text-left mb-6">
                  <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-zion-purple mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold mb-4">
                    Valid for: {cert.validity}
                  </div>
                  <Link
                    to="/contact?type=certification"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-blue text-white font-semibold rounded-lg hover:from-zion-purple-dark hover:to-zion-blue-dark transition-all duration-300"
                  >
                    Get Certified
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Training */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Training?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our training programs are designed to provide you with the skills and knowledge 
              needed to succeed in the rapidly evolving technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of real-world experience'
              },
              {
                icon: BookOpen,
                title: 'Hands-on Learning',
                description: 'Practical projects and real-world applications to reinforce concepts'
              },
              {
                icon: Certificate,
                title: 'Industry Recognition',
                description: 'Certifications valued by employers worldwide'
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Skills that directly translate to career advancement opportunities'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of professionals who have already advanced their careers 
              with Zion Tech Group training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=training"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
