import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  BookOpen, 
  Users, 
  Zap, 
  Brain, 
  Target, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Award,
  Play,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Lightbulb,
  Heart,
  Sparkles,
  Palette,
  Music,
  Calculator,
  Globe
} from 'lucide-react';

export default function AIEducation() {
  const features = [
    {
      icon: BookOpen,
      title: 'Personalized Learning Paths',
      description: 'AI algorithms that adapt to individual student needs and learning styles'
    },
    {
      icon: Brain,
      title: 'Intelligent Tutoring',
      description: 'AI-powered virtual tutors with natural language processing and adaptive responses'
    },
    {
      icon: Target,
      title: 'Progress Analytics',
      description: 'Advanced tracking and analysis of student performance and learning outcomes'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'AI-enhanced group projects and peer-to-peer learning experiences'
    },
    {
      icon: Lightbulb,
      title: 'Content Generation',
      description: 'AI-powered creation of educational materials, quizzes, and interactive content'
    },
    {
      icon: Shield,
      title: 'Learning Security',
      description: 'AI-driven protection systems for educational data and student privacy'
    }
  ];

  const benefits = [
    'Personalized learning experiences tailored to individual needs',
    'Adaptive content that adjusts to student progress and comprehension',
    'Real-time feedback and assessment for immediate improvement',
    'Scalable educational solutions for institutions of all sizes',
    'Enhanced engagement through interactive AI-powered content',
    'Data-driven insights for continuous educational improvement'
  ];

  const useCases = [
    {
      title: 'K-12 Education',
      description: 'AI-powered learning platforms that adapt to each student\'s pace, style, and needs, providing personalized education from kindergarten through high school'
    },
    {
      title: 'Higher Education',
      description: 'Advanced AI systems for universities and colleges, offering intelligent course management, research assistance, and student support services'
    },
    {
      title: 'Corporate Training',
      description: 'AI-driven employee development programs with personalized learning paths, skill assessments, and continuous professional development'
    },
    {
      title: 'Special Needs Education',
      description: 'Adaptive AI systems designed to support students with diverse learning needs and provide inclusive educational experiences'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Basic AI education platform for small learning environments',
      features: [
        'Personalized learning paths',
        'Basic AI tutoring',
        'Email support',
        'Standard analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced AI platform for medium-scale educational institutions',
      features: [
        'Advanced AI algorithms',
        'Real-time content adaptation',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-scale AI education solution for large institutions',
      features: [
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solutions',
        'Advanced security',
        'Custom development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Education Platform - Zion Tech Group"
        description="Revolutionary AI-powered education solutions for personalized learning, intelligent tutoring, and educational innovation. Advanced machine learning for the future of education."
        keywords="AI education, personalized learning, intelligent tutoring, educational AI, learning platform, adaptive education"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Education Platform
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing education with cutting-edge AI technology. 
              From personalized learning to intelligent tutoring, our platform transforms how we teach and learn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-futuristic text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="btn-futuristic-outline text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Education Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with educational expertise 
              to deliver unprecedented capabilities in personalized learning and teaching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Education?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience the future of education with our AI-powered platform that delivers 
              unprecedented personalization, engagement, and learning outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI education platform is transforming learning environments and enabling new possibilities 
              in personalized education and skill development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your AI Education Plan
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your educational initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-futuristic">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Education with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
               Join the future of education with our AI-powered platform. 
               Contact us today to learn how we can revolutionize your learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic-outline text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore the future of education? Our team of experts 
                is here to help you build AI-powered learning experiences that transform education.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your educational needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}