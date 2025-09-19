import React, { useState, useEffect } from 'react';
const LatestInnovationShowcase: React.FC = () => {,
  return (,
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">,
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm"></div>,
      <div className="relative z-10">,
        <div className="text-center mb-8">,
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-bold mb-4">,
            🌟 LATEST INNOVATIONS • 2026,
          </div>,
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase</h2>,
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">,
            Experience the cutting-edge innovations that are defining the future of technology,
          </p>,
        </div>,
        {/* Innovation Carousel */,}
        <div className="relative">,
            <div,
              key={currentInnovation}
              className="grid md: grid-cols-2 gap-8 items-center",
            >,
              <div>,
                <div className="text-6xl mb-4">{innovations[currentInnovation].icon,}</div>,
                <h3 className="text-3xl font-bold mb-4">{innovations[currentInnovation].title}</h3>,
                <p className="text-lg text-blue-200 mb-6">{innovations[currentInnovation].description}</p>,
                <ul className="space-y-2 mb-6">,
                  {innovations[currentInnovation].features.map((feature, index) => (,
                    <li key={index} className="flex items-center text-blue-200">,
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3"></span>,
                      {feature}
                    </li>,
                  ))}
                </ul>,
                <a,
                  href={innovations[currentInnovation].link}
                  className={`inline-block bg-gradient-to-r ${innovations[currentInnovation].color} text-white px-8 py-3 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold`,}
                >,
                  Explore Innovation →,
                </a>,
              </div>,
              <div className="text-center">,
                <div className={`text-8xl mb-4 bg-gradient-to-r ${innovations[currentInnovation].color} bg-clip-text text-transparent`}>,
                  {innovations[currentInnovation].icon}
                </div>,
                <p className="text-cyan-200 font-semibold mb-4">Interactive Demo Available</p>,
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover: bg-white/30 transition-colors font-semibold">,
                  Try Demo →,
                </button>,
              </div>,
            </div>,
          </div>,
          {/* Navigation Dots */,}
          <div className="flex justify-center space-x-2 mt-8">,
            {innovations.map((_, index) => (,
              <button,
                key={index}
                onClick={() => {,
                  setCurrentInnovation(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                  index === currentInnovation ? 'bg-cyan-400' : 'bg-white/30',
                }`}
              />,
            ))}
          </div>,
          {/* Play/Pause Button */}
          <div className="flex justify-center mt-4">,
            <button,
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover: bg-white/30 transition-colors font-semibold",
            >,
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play',}
            </button>,
          </div>,
        </div>,
        {/* Quick Access Grid */}
        <div className="mt-12 grid grid-cols-2 md: grid-cols-4 gap-4">,
          {innovations.map((innovation, index) => (,
            <a,
              key={index}
              href={innovation.link}
              className={`bg-gradient-to-r ${innovation.color} text-white p-4 rounded-lg text-center hover: shadow-lg transition-all duration-300`,}
            >,
              <div className="text-2xl mb-2">{innovation.icon}</div>,
              <div className="text-sm font-semibold">{innovation.title}</div>,
            </a>,
          ))}
        </div>,
      </div>,
    </div>,
  );
};
export default LatestInnovationShowcase;