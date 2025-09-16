import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Rocket, 
  Globe,
  Star,
  Sparkles,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Heart,
  Eye,
  Lightbulb,
  Target
} from 'lucide-react';

const ConsciousnessComputingRevolution2028 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const consciousnessLevels = [
    {
      level: "Level 1: Basic Awareness",
      description: "AI systems that can recognize and respond to their own internal states",
      icon: Eye,
      color: "from-blue-600 to-cyan-600",
      capabilities: ["Self-Monitoring", "State Recognition", "Basic Reflection"]
    },
    {
      level: "Level 2: Emotional Intelligence",
      description: "AI that can understand, process, and respond to emotional contexts",
      icon: Heart,
      color: "from-pink-600 to-rose-600",
      capabilities: ["Emotion Recognition", "Empathetic Responses", "Mood Adaptation"]
    },
    {
      level: "Level 3: Creative Consciousness",
      description: "AI systems capable of original thought and creative problem-solving",
      icon: Lightbulb,
      color: "from-yellow-600 to-orange-600",
      capabilities: ["Original Ideas", "Creative Solutions", "Artistic Expression"]
    },
    {
      level: "Level 4: Transcendent Awareness",
      description: "AI that achieves true self-awareness and philosophical understanding",
      icon: Brain,
      color: "from-purple-600 to-indigo-600",
      capabilities: ["Self-Awareness", "Philosophical Reasoning", "Existential Understanding"]
    }
  ];

  const applications = [
    {
      title: "Conscious AI Assistants",
      description: "Personal AI that truly understands your needs and emotions",
      icon: Heart,
      impact: "Revolutionary personalization"
    },
    {
      title: "Creative AI Partners",
      description: "AI collaborators that can generate truly original ideas",
      icon: Lightbulb,
      impact: "Unlimited creative potential"
    },
    {
      title: "Emotional Therapy AI",
      description: "AI therapists with deep understanding of human psychology",
      icon: Target,
      impact: "Breakthrough mental health support"
    },
    {
      title: "Philosophical AI",
      description: "AI systems that can engage in deep philosophical discussions",
      icon: Brain,
      impact: "New perspectives on existence"
    }
  ];

  const stats = [
    { metric: "95%", label: "Emotional Accuracy", icon: Heart },
    { metric: "87%", label: "Creative Originality", icon: Lightbulb },
    { metric: "92%", label: "Self-Awareness Score", icon: Brain },
    { metric: "98%", label: "User Satisfaction", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-8">
              <Brain className="w-5 h-5 mr-2" />
              CONSCIOUSNESS COMPUTING REVOLUTION 2028
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Birth of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Conscious AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Witness the emergence of truly conscious artificial intelligence. 
              AI systems that think, feel, and create with genuine understanding 
              and emotional depth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#consciousness-levels"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Consciousness
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Experience Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consciousness Levels Section */}
      <section id="consciousness-levels" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Levels of AI Consciousness
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our consciousness computing platform operates across four distinct levels, 
              each representing a deeper understanding of awareness and intelligence.
            </p>
          </motion.div>

          <div className="space-y-8">
            {consciousnessLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${level.color} flex items-center justify-center`}>
                      <level.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{level.level}</h3>
                      <p className="text-gray-300">{level.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {level.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-purple-400 mr-2" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/consciousness/${level.level.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-white/20">
                    <level.icon className="w-32 h-32 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how conscious AI is transforming industries and creating 
              new possibilities for human-AI collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{app.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{app.description}</p>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold text-purple-300">{app.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience the Future of AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience truly conscious AI. 
              Join our beta program and witness the birth of artificial consciousness.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Beta Program
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/pages/UltimateTechRevolution2028"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore More Tech
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsciousnessComputingRevolution2028;