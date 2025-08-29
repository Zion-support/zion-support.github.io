import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Brain, 
  Users, 
  GraduationCap, 
  Target, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Shield,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIEducationPlatform() {
  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI-driven curriculum adaptation based on individual learning styles and progress",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Assessment",
      description: "Automated grading and feedback systems with detailed performance analytics",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Adaptive Content",
      description: "Dynamic content generation and modification based on learner needs",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive learning analytics and progress tracking",
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-platform Support",
      description: "Seamless learning experience across desktop, tablet, and mobile devices",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Collaborative Learning",
      description: "AI-powered group formation and peer learning facilitation",
      icon: Users,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    "Personalized learning experiences for every student",
    "Improved engagement and retention rates",
    "Real-time progress monitoring and feedback",
    "Reduced administrative workload for educators",
    "Scalable solutions for institutions of all sizes",
    "Data-driven insights for continuous improvement"
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "Adaptive learning platforms for primary and secondary education",
      icon: GraduationCap
    },
    {
      title: "Higher Education",
      description: "University-level AI-powered learning management systems",
      icon: BookOpen
    },
    {
      title: "Corporate Training",
      description: "Employee skill development and certification platforms",
      icon: Users
    },
    {
      title: "Language Learning",
      description: "AI-driven language acquisition and practice systems",
      icon: Globe
    }
  ];

  const technologies = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Cloud Computing",
    "Mobile App Development"
  ];

  return (
    <>
      <SEO 
        title="AI Education Platform Development | Zion Tech Group"
        description="Transform education with AI-powered learning platforms. Personalized learning, intelligent assessment, and adaptive content for modern education."
        keywords="ai education, learning platform, personalized learning, adaptive learning, edtech, machine learning education"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                AI-Powered Education Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionize
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> Education</span>
                with AI
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build next-generation learning platforms that adapt to every student's needs. 
                From personalized learning paths to intelligent assessment, create the future of education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive AI Education Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI capabilities designed to transform the learning experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI-Powered Education?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the transformative benefits of intelligent learning systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Education Solutions for Every Sector
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored AI education platforms for diverse learning environments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the latest AI and education technology innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech}</h3>
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
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build the future of learning together with AI-powered education platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}