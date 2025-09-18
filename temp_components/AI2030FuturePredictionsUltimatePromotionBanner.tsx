'use client';

import React{ useStateuseEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain
  Zap
  ArrowRight
  Star
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle,
  Rocket,
  Cpu,
  Globe
} from 'lucide-react';

const AI2030FuturePredictionsUltimatePromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const predictions = [
    "Artificial General Intelligence (AGI)",
    "Quantum AI Supremacy",
    "Neural Interface Revolution",
    "Consciousness Upload"
  ];

  const timeline = [
    { year: "2025"event: "Quantum AI Integration" },
    { year: "2026"event: "Neural Interface Breakthrough" },
    { year: "2027"event: "Autonomous Everything" },
    { year: "2028"event: "AGI Development" },
    { year: "2029"event: "Consciousness Upload" },
    { year: "2030"event: "AI-Human Hybrid Society" }
  ];

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 py-20 px-4"
      initial={{ opacity: 0y: 50 }}
      animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-3000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0x: -50 }}
            animate={isVisible ? { opacity: 1x: 0 } : { opacity: 0x: -50 }}
            transition={{ duration: 0.8delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              AI 2030 Future Predictions
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Artificial Intelligence
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                Ultimate Predictions
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our comprehensive predictions for the next decade of AI development
              from artificial general intelligence to consciousness upload and beyond. 
              Discover what the future holds for humanity and technology.
            </p>

            <div className="space-y-4">
              {predictions.map((predictionindex) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0x: -20 }}
                  animate={isVisible ? { opacity: 1x: 0 } : { opacity: 0x: -20 }}
                  transition={{ duration: 0.6delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{prediction}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Predictions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Report
              </motion.button>
            </div>

            <div className="flex items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>2025-2030 Timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>85% Accuracy Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Timeline Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0x: 50 }}
            animate={isVisible ? { opacity: 1x: 0 } : { opacity: 0x: 50 }}
            transition={{ duration: 0.8delay: 0.4 }}
          >
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((itemindex) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0x: 50 }}
                    animate={isVisible ? { opacity: 1x: 0 } : { opacity: 0x: 50 }}
                    transition={{ duration: 0.6delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                        <div className="text-white font-semibold text-lg">{item.event}</div>
                        <div className="text-gray-300 text-sm">
                          {index === 0 ? "Current Development" : "Future Milestone"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60"
                animate={{
                  y: [0-20],
                  scale: [1.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-60"
                animate={{
                  y: [020],
                  scale: [1.21],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-60"
                animate={{
                  x: [020],
                  scale: [1.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0y: 50 }}
          animate={isVisible ? { opacity: 1y: 0 } : { opacity: 0y: 50 }}
          transition={{ duration: 0.8delay: 0.8 }}
        >
          {[
            { icon: Brainlabel: "AGI Development"value: "85%" },
            { icon: Cpulabel: "Quantum AI"value: "90%" },
            { icon: Zaplabel: "Neural Interface"value: "75%" },
            { icon: Globelabel: "Global Impact"value: "100%" }
          ].map((statindex) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0scale: 0.8 }}
              animate={isVisible ? { opacity: 1scale: 1 } : { opacity: 0scale: 0.8 }}
              transition={{ duration: 0.6delay: 1 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AI2030FuturePredictionsUltimatePromotionBanner;