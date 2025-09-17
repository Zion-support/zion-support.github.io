"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface FeatureShowcaseProps {
  features: Feature[];
  autoPlay?: boolean;
  interval?: number;
}

export function FeatureShowcase({ 
  features, 
  autoPlay = true, 
  interval = 5000 
}: FeatureShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, features.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (features.length === 0) return null;

  const currentFeature = features[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm">
        <div className="flex transition-transform duration-500 ease-in-out">
          <div className="w-full flex-shrink-0">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  {currentFeature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {currentFeature.title}
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentFeature.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous feature"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next feature"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureShowcase;