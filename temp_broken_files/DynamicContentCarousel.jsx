import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    {
      id: 1,
      title: "AI Innovation Hub",
      description: "Discover cutting-edge AI technologies and applications",
      image: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2025"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Discover the power of quantum computing and its applications",
      image: "⚛️",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Experience the future of brain-computer interfaces",
      image: "🧬",
      gradient: "from-green-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 4,
      title: "AI Transformation Guide",
      description: "Complete guide to AI transformation for your organization",
      image: "📚",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AITransformationGuide2026"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dynamic Content Carousel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest technology content and insights
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`bg-gradient-to-r ${carouselItems[currentSlide].gradient} p-12 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-6xl mb-4">{carouselItems[currentSlide].image}</div>
                    <h3 className="text-4xl font-bold mb-4">{carouselItems[currentSlide].title}</h3>
                    <p className="text-xl mb-6 max-w-2xl">{carouselItems[currentSlide].description}</p>
                    <a
                      href={carouselItems[currentSlide].link}
                      className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                      Explore Now →
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-8xl">{carouselItems[currentSlide].image}</span>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD:temp_broken_files/DynamicContentCarousel.jsx
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
=======
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-fe56:src/components/DynamicContentCarousel.jsx
      </div>
    </div>
  );

};


export default DynamicContentCarousel;
