import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Database,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function EducationSolutions() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized learning experiences powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Reach students worldwide with cloud-based educational platforms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure Learning',
      description: 'Enterprise-grade security for educational institutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Comprehensive insights into student performance and engagement',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Innovation Hub',
      description: 'Cutting-edge technology integration for modern education',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Enhanced student and teacher collaboration tools',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const solutions = [
    {
      title: 'K-12 Education',
      description: 'Comprehensive digital learning solutions for primary and secondary education',
      features: ['Interactive Learning Platforms', 'Student Progress Tracking', 'Parent Communication Tools', 'Curriculum Management']
    },
    {
      title: 'Higher Education',
      description: 'Advanced technology solutions for universities and colleges',
      features: ['Learning Management Systems', 'Research Collaboration Tools', 'Student Information Systems', 'Virtual Classrooms']
    },
    {
      title: 'Corporate Training',
      description: 'Professional development and skill-building platforms',
      features: ['Skills Assessment', 'Personalized Learning Paths', 'Progress Certification', 'Team Collaboration']
    },
    {
      title: 'Specialized Training',
      description: 'Industry-specific training and certification programs',
      features: ['Technical Skills Development', 'Industry Compliance', 'Hands-on Simulations', 'Expert Mentorship']
    }
  ];

  const benefits = [
    'Improved student engagement and retention',
    'Personalized learning experiences',
    'Real-time progress monitoring',
    'Cost-effective educational delivery',
    'Scalable learning solutions',
    'Enhanced teacher productivity',
    'Data-driven decision making',
    'Global accessibility'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Education Solutions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Transform education with cutting-edge technology solutions that enhance learning experiences, 
              improve outcomes, and prepare students for the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button 
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our education solutions combine the latest technology with proven pedagogical approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Education Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for different educational needs and environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Why Choose Our Education Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of modernizing your educational institution with our technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700"
              >
                <Star className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                <span className="text-zion-slate-light">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-2xl p-12 border border-slate-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the future of education with our innovative technology solutions. 
              Let's work together to create better learning experiences for students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}