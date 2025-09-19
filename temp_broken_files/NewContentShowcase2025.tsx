import React, { useState, useEffect } from 'react';
const NewContentShowcase2025: React.FC = () => {,
  return (,
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">,
      <div className="container mx-auto px-4">,
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mb-16",
        >,
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">,
            🚀 NEW CONTENT 2025,
          </div>,
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">,
            Revolutionary New Content,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Discover our latest revolutionary content featuring cutting-edge technology showcases;
            innovation hubs, and breakthrough demonstrations,
          </p>,
        </div>,
        {/* Interactive Carousel */}
        <div className="relative max-w-6xl mx-auto">,
          <div className="relative overflow-hidden rounded-3xl">,
            <div,
              key={currentIndex}
              className={`bg-gradient-to-br ${newContent[currentIndex].bgColor} backdrop-blur-sm p-12 border border-white/20`}
            >,
              <div className="grid lg: grid-cols-2 gap-12 items-center">,
                <div>,
                  <div className="text-8xl mb-6">{newContent[currentIndex].image,}</div>,
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">,
                    {newContent[currentIndex].title}
                  </h3>,
                  <p className="text-xl text-gray-300 mb-8">,
                    {newContent[currentIndex].description}
                  </p>,
                  <div className="space-y-4 mb-8">,
                    {newContent[currentIndex].features.map((feature, index) => (,
                      <div,
                        key={index}
                        className="flex items-center space-x-3",
                      >,
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>,
                        <span className="text-gray-300">{feature}</span>,
                      </div>,
                    ))}
                  </div>,
                  <a,
                    href={newContent[currentIndex].link}
                    className={`inline-block bg-gradient-to-r ${newContent[currentIndex].color} px-8 py-4 rounded-lg font-bold text-lg hover: shadow-2xl transition-all duration-300 transform hover:scale-105`,}
                  >,
                    Explore Content →,
                  </a>,
                </div>,
                <div className="relative">,
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">,
                    <div className="text-center">,
                      <div className="text-9xl mb-6">{newContent[currentIndex].image}</div>,
                      <h4 className="text-2xl font-bold mb-4 text-white">,
                        {newContent[currentIndex].title}
                      </h4>,
                      <p className="text-gray-300 mb-6">,
                        Experience the future of {newContent[currentIndex].title.toLowerCase()}
                      </p>,
                      <div className="grid grid-cols-2 gap-4">,
                        <div className="bg-white/10 rounded-lg p-4">,
                          <div className="text-2xl font-bold text-cyan-400">100%</div>,
                          <div className="text-sm text-gray-300">Interactive</div>,
                        </div>,
                        <div className="bg-white/10 rounded-lg p-4">,
                          <div className="text-2xl font-bold text-blue-400">24/7</div>,
                          <div className="text-sm text-gray-300">Available</div>,
                        </div>,
                      </div>,
                    </div>,
                  </div>,
                </div>,
              </div>,
            </div>,
          </div>,
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">,
            <button,
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover: bg-white/20 transition-all duration-300",
            >,
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M15 19l-7-7 7-7" />,
              </svg>,
            </button>,
            <div className="flex space-x-2">,
              {newContent.map((_, index) => (,
                <button,
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${,
                    index === currentIndex ? 'bg-white' : 'bg-white/30',
                  }`}
                />,
              ))}
            </div>,
            <button,
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover: bg-white/20 transition-all duration-300",
            >,
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M9 5l7 7-7 7" />,
              </svg>,
            </button>,
            <button,
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${,
                isAutoPlaying,
                  ? 'bg-red-500/20 text-red-300 hover: bg-red-500/30',
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30',}`}
            >,
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>,
          </div>,
        </div>,
        {/* Content Grid */}
        <div className="mt-20">,
          <div,
            whileInView={{ opacity: 1, y: 0 ,}}
            className="text-center mb-12",
          >,
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">,
              All New Content,
            </h3>,
            <p className="text-lg text-gray-300">,
              Explore all our revolutionary new content,
            </p>,
          </div>,
          <div className="grid md: grid-cols-3 gap-8">,
            {newContent.map((content, index) => (,
              <div,
                key={index}
                whileInView={{ opacity: 1, y: 0 ,}}
                className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover: border-white/40 transition-all duration-300 group`,}
              >,
                <div className="text-5xl mb-4 group-hover: scale-110 transition-transform duration-300">,
                  {content.image,}
                </div>,
                <h4 className="text-2xl font-bold mb-4 text-white group-hover: text-cyan-400 transition-colors duration-300">,
                  {content.title,}
                </h4>,
                <p className="text-gray-300 mb-6">,
                  {content.description}
                </p>,
                <div className="space-y-2 mb-6">,
                  {content.features.map((feature, featureIndex) => (,
                    <div key={featureIndex} className="flex items-center space-x-2">,
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>,
                      <span className="text-sm text-gray-400">{feature}</span>,
                    </div>,
                  ))}
                </div>,
                <a,
                  href={content.link}
                  className={`w-full bg-gradient-to-r ${content.color} px-6 py-3 rounded-lg font-semibold hover: shadow-lg transition-all duration-300 text-center block`,}
                >,
                  Explore Content,
                </a>,
              </div>,
            ))}
          </div>,
        </div>,
      </div>,
    </div>,
  );
};
export default NewContentShowcase2025;
</p></p>,