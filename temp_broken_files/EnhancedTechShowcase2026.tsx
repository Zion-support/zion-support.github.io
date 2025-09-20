import React, { useState } from 'react';
const EnhancedTechShowcase2026: React.FC = () => {,
  return (,
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">,
      <div className="container mx-auto px-4">,
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mb-16",
        >,
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">,
            🌟 Enhanced Technology Showcase 2026,
          </h2>,
          <p className="text-xl opacity-80 max-w-4xl mx-auto">,
            Explore our revolutionary technologies through an interactive showcase featuring the most advanced innovations,
          </p>,
        </div>,
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">,
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">,
            {Object.entries(techCategories).map(([key, category]) => (,
              <button,
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${,
                  activeTab === key,
                    ? `bg-gradient-to-r ${category.color} text-white`,
                    : 'text-white/70 hover: text-white hover:bg-white/10',}`}
              >,
                <span className="mr-2">{category.icon}</span>,
                {category.title}
              </button>,
            ))}
          </div>,
        </div>,
        {/* Content Display */}
          <div,
            key={activeTab}
            className="grid md: grid-cols-2 lg:grid-cols-3 gap-8",
          >,
            {techCategories[activeTab as keyof typeof techCategories].content.map((item, index) => (,
              <div,
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: scale-105 transition-all duration-300",
              >,
                <h3 className="text-xl font-bold mb-3">{item.title,}</h3>,
                <p className="text-white/80 mb-4 text-sm">{item.description}</p>,
                <ul className="space-y-1 mb-6">,
                  {item.features.map((feature, featureIndex) => (,
                    <li key={featureIndex} className="text-white/60 text-sm flex items-center">,
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>,
                      {feature}
                    </li>,
                  ))}
                </ul>,
                <a,
                  href={item.link}
                  className={`inline-block w-full text-center py-2 px-4 rounded-lg bg-gradient-to-r ${techCategories[activeTab as keyof typeof techCategories].color} text-white hover: shadow-lg transition-all duration-300 font-semibold`,}
                >,
                  Explore →,
                </a>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* Statistics Section */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="mt-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30",
        >,
          <div className="text-center mb-12">,
            <h3 className="text-3xl font-bold mb-4">📊 Innovation Impact</h3>,
            <p className="text-xl opacity-80">Our technologies are making a real difference</p>,
          </div>,
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            <div,
              whileInView={{ opacity: 1, scale: 1 ,}}
              className="text-center",
            >,
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>,
              <div className="text-lg opacity-80">Active Projects</div>,
            </div>,
            <div,
              whileInView={{ opacity: 1, scale: 1 ,}}
              className="text-center",
            >,
              <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>,
              <div className="text-lg opacity-80">Researchers</div>,
            </div>,
            <div,
              whileInView={{ opacity: 1, scale: 1 ,}}
              className="text-center",
            >,
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>,
              <div className="text-lg opacity-80">Patents Filed</div>,
            </div>,
            <div,
              whileInView={{ opacity: 1, scale: 1 ,}}
              className="text-center",
            >,
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>,
              <div className="text-lg opacity-80">Success Rate</div>,
            </div>,
          </div>,
        </div>,
        {/* Call to Action */}
        <div,
          whileInView={{ opacity: 1, y: 0 ,}}
          className="text-center mt-16",
        >,
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>,
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">,
            Join us in the revolutionary transformation of technology. Be part of the breakthrough that will reshape our world.,
          </p>,
          <div className="flex justify-center space-x-4">,
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover: shadow-lg transition-all duration-300 font-semibold text-lg">,
              Start Your Journey,
            </button>,
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">,
              Contact Our Experts,
            </button>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),};
export default EnhancedTechShowcase2026;