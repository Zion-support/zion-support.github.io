import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2026",
      description: "Explore cutting-edge AI technologies and breakthrough innovations",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2026"
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
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          key={currentSlide}
          className="relative transition-all duration-500"
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
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
>>>>>>> ac7fba6932d34fbe5c3a14454537102b07eb816c:src/components/DynamicContentCarousel.jsx
>>>>>>> e69d67f2cecdf0b27b9028aecdc1e7a5e0a8e005:temp_broken_files/DynamicContentCarousel.jsx
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-c435:src/components/DynamicContentCarousel.jsx
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;