import React from 'react';
const RevolutionaryAdvertisingBanner2026: React.FC = () => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className={`bg-gradient-to-r ${currentContent.color} text-white py-8 px-4 relative`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            <div className="container mx-auto relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Content */}
                <div className="flex-1 mb-6 lg:mb-0">
                  <motion.div
                    key={currentContent.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h2 className="text-2xl lg:text-3xl font-bold">{currentContent.title}</h2>
                        <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
                          {currentContent.discount}
                        </span>
                      </div>
                      <p className="text-lg mb-2 text-white/90">{currentContent.subtitle}</p>
                      <p className="text-sm mb-4 text-white/80 max-w-2xl">{currentContent.description}</p>
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentContent.features.map((feature, index) => (
                          <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      {/* Price and Urgency */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl font-bold">{currentContent.price}</span>
                          <span className="text-lg line-through text-white/60">{currentContent.originalPrice}</span>
                        </div>
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                          {currentContent.urgency}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <Link
                    to={currentContent.link}
                    className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                  >
                    <span>{currentContent.cta}</span>
                    <Rocket className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Progress Indicators */}
          <div className="bg-gray-100 py-2">
            <div className="container mx-auto px-4">
              <div className="flex justify-center space-x-2">
                {advertisingContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAd(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentAd ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default RevolutionaryAdvertisingBanner2026;
