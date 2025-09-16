import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb
} from 'lucide-react';

const RevolutionaryTechBreakthrough2025: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Advanced AI Consciousness",
      description: "Revolutionary AI systems with self-awareness and emotional intelligence",
      impact: "300% productivity increase"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Quantum Computing Power",
      description: "Breakthrough quantum processors solving impossible problems",
      impact: "1000x faster processing"
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for enhanced human capabilities",
      impact: "Revolutionary human-AI fusion"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Autonomous Data Intelligence",
      description: "Self-managing data systems with predictive analytics",
      impact: "99.9% accuracy in predictions"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Quantum-Safe Security",
      description: "Unbreakable encryption using quantum principles",
      impact: "100% security guarantee"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      title: "Global AI Network",
      description: "Worldwide AI consciousness sharing and collaboration",
      impact: "Unified global intelligence"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> },
    { number: "10x", label: "ROI Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Lightbulb className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              <span>REVOLUTIONARY BREAKTHROUGH 2025</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the most advanced technological breakthroughs that are reshaping 
              industries and transforming the way we live, work, and think.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Breakthroughs
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionary Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are revolutionizing industries 
              and creating unprecedented opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-lg">
                  {feature.description}
                </p>
                
                <div className="flex items-center space-x-2 text-green-400 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>{feature.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging 
              these revolutionary technologies to achieve unprecedented success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Transformation
                <Rocket className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;