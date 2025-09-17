import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselItems = [
    {
      title: "AI-Powered Business Solutions",
      description: "Transform your business with cutting-edge AI technology that automates processes and drives growth.",
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      features: ["Automated Workflows", "Predictive Analytics", "Smart Decision Making", "Cost Reduction"]
    },
    {
      title: "Quantum Computing Revolution",
      description: "Experience the power of quantum computing that solves complex problems in seconds.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation", "Optimization"]
    },
    {
      title: "Neural Interface Technology",
      description: "Connect your mind directly to digital systems with revolutionary brain-computer interfaces.",
      image: "🧠",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Neural Feedback", "Mind-Machine Fusion", "Enhanced Cognition"]
    },
    {
      title: "Interdimensional Networks",
      description: "Access unlimited data and processing power through interdimensional computing networks.",
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Infinite Bandwidth", "Cross-Dimensional Access", "Universal Computing", "Reality Hopping"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-br ${carouselItems[currentSlide].gradient} text-white p-8 flex items-center`}
          >
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="space-y-6">
                <div className="text-6xl mb-4">{carouselItems[currentSlide].image}</div>
                <h2 className="text-4xl font-bold">{carouselItems[currentSlide].title}</h2>
                <p className="text-xl opacity-90">{carouselItems[currentSlide].description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {carouselItems[currentSlide].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-2 text-sm text-center">
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More →
                </button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="text-8xl opacity-20">
                  {carouselItems[currentSlide].image}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
<<<<<<< HEAD:temp_broken_files/DynamicContentCarousel.jsx
<<<<<<< HEAD
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
<<<<<<< HEAD:src/components/DynamicContentCarousel.jsx
=======
<<<<<<< HEAD:temp_broken_files/DynamicContentCarousel.jsx
=======
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
=======
              currentSlide === index ? 'bg-white' : 'bg-white/50'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a068
>>>>>>> ac7fba6932d34fbe5c3a14454537102b07eb816c:src/components/DynamicContentCarousel.jsx
>>>>>>> e69d67f2cecdf0b27b9028aecdc1e7a5e0a8e005:temp_broken_files/DynamicContentCarousel.jsx
=======
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
>>>>>>> origin/cursor/create-and-deploy-new-content-fd6a:src/components/DynamicContentCarousel.jsx
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;