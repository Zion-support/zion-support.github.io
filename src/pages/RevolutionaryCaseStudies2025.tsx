import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryCaseStudies2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Industries', icon: '🌟' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' }
  ];

import React from 'react';

const RevolutionaryCaseStudies2025: React.FC = () => {
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'</button>
              }`}</button>
            ></button>
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
            <button className="border border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg"></button>
              Schedule Consultation</button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"></button>
              View All Case Studies</button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"></button>
              View All Case Studies</button>
              Schedule Consultation</button>
