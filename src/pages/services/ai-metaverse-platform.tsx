import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Users, 
  Eye, 
  Hand, 
  Brain, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Smartphone,
  Headphones,
  Shield,
  Lock,
  Building,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIMetaversePlatform() {
  const features = [
    {
      title: "Virtual World Creation",
      description: "Build immersive 3D environments with AI-generated content and dynamic landscapes",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Avatars",
      description: "Intelligent virtual characters with natural language processing and emotional intelligence",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Immersive Experiences",
      description: "VR/AR integration with haptic feedback and spatial audio for realistic interactions",
      icon: Eye,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Interaction",
      description: "Advanced communication tools with AI moderation and language translation",
      icon: Hand,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Content Generation",
      description: "AI-driven creation of virtual assets, environments, and interactive elements",
      icon: Brain,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive tracking of user behavior and platform performance metrics",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Immersive virtual experiences for users",
    "AI-powered content generation and personalization",
    "Scalable infrastructure for large user bases",
    "Cross-platform compatibility (VR, AR, desktop, mobile)",
    "Advanced social features and collaboration tools",
    "Real-time analytics and user insights"
  ];

  const useCases = [
    {
      title: "Virtual Events",
      description: "Conferences, concerts, and exhibitions in immersive 3D spaces",
      icon: Users
    },
    {
      title: "Gaming & Entertainment",
      description: "Next-generation gaming experiences with AI-driven narratives",
      icon: Star
    },
    {
      title: "Education & Training",
      description: "Virtual classrooms and skill development environments",
      icon: Building
    },
    {
      title: "Business Collaboration",
      description: "Virtual offices and meeting spaces for remote teams",
      icon: Monitor
    }
  ];

  const technologies = [
    "Virtual Reality (VR) & Augmented Reality (AR)",
    "3D Graphics & Rendering Engines",
    "Artificial Intelligence & Machine Learning",
    "Cloud Computing & Edge Processing",
    "Blockchain & NFT Integration",
    "Real-time Communication Protocols"
  ];

  return (
    <>
      <SEO 
        title="AI Metaverse Platform Development | Zion Tech Group"
        description="Create immersive virtual worlds with AI-powered metaverse platforms. VR/AR experiences, intelligent avatars, and next-generation social interactions."
        keywords="metaverse, virtual reality, vr, ar, ai platform, virtual world, immersive experience, 3d environment"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                AI-Powered Metaverse Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build the
                <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"> Metaverse</span>
                of Tomorrow
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create immersive virtual worlds powered by artificial intelligence. From intelligent avatars to 
                dynamic environments, build the next generation of digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
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
                Advanced Metaverse Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge features designed to create truly immersive virtual experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105"
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
                Why Choose AI-Powered Metaverse?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of intelligent virtual world platforms
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
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
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
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
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
                Metaverse Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile virtual world solutions for diverse industries and use cases
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-purple-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Built with the latest VR/AR and AI technology innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-purple-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                Ready to Build Your Metaverse?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create immersive virtual worlds that revolutionize how people connect and interact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
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