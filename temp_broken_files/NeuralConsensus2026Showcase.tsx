"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain
  Zap
  TrendingUp
  Users
  Target
  CheckCircle
  ArrowRight
  Play,
  BarChart3,
  Clock,
  Shield,
  Lightbulb,
  Globe,
  Award,
  Star
} from 'lucide-react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NeuralConsensus2026Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-semibold text-blue-300">BREAKTHROUGH 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural Consensus Revolution
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover how collective AI intelligence is transforming business operations and achieving unprecedented results across industries.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((featureindex) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'ring-4 ring-white/30 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <feature.icon className="w-8 h-8 text-white" />
                <span className="text-sm font-semibold text-white/80">{feature.metrics}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
              {activeFeature === index && (
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results Across Industries
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((studyindex) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{study.title}</h4>
                  <span className="text-xs px-2 py-1 bg-blue-500/30 rounded-full text-blue-200">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-200">ROI Achieved:</span>
                    <span className="font-bold text-green-400">{study.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Accuracy:</span>
                    <span className="font-bold text-blue-400">{study.accuracy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Timeframe:</span>
                    <span className="font-bold text-purple-400">{study.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Neural Consensus?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join Fortune 100 companies achieving unprecedented results through collective AI intelligence. 
              Get your free assessment and discover your potential ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/src/pages/blog/ai-2026-neural-consensus-revolution">
                <button
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Read Full Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </a>
              <a href="/src/pages/case-studies/global-enterprise-neural-consensus-transformation-2026-15-billion-roi">
                <button
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default NeuralConsensus2026Showcase;
</div></div>