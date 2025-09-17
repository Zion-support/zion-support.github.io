import React from 'react';

const UltimateTechBreakthrough2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            Ultimate Tech Breakthrough 2025
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            Experience the most revolutionary technological advancement in human history.
          </p>
        </div>
      </section>
import React, { useState, useEffect } from 'react';

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-2xl font-bold hover:scale-110 transition-transform cursor-pointer shadow-2xl"
          >
            Experience the Future →
          </motion.div>
      {/* Breakthrough Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Revolutionary Breakthroughs
        </motion.h2>
        
        <div className="relative h-96 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBreakthrough}
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 bg-gradient-to-br ${breakthroughs[activeBreakthrough].gradient} rounded-3xl p-12 shadow-2xl`}
            >
              <div className="flex items-center h-full">
                <div className="flex-1">
                  <div className="text-8xl mb-6">{breakthroughs[activeBreakthrough].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{breakthroughs[activeBreakthrough].title}</h3>
                  <p className="text-2xl text-gray-200 mb-6">{breakthroughs[activeBreakthrough].description}</p>
                  <div className="flex items-center space-x-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Impact:</span>
                      <span className="ml-2">{breakthroughs[activeBreakthrough].impact}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-sm font-semibold">Timeline:</span>
                      <span className="ml-2">{breakthroughs[activeBreakthrough].timeline}</span>
                    </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-16">
          {breakthroughs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveBreakthrough(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === activeBreakthrough 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
