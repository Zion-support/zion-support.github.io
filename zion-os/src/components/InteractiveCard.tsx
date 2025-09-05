'use client';

import React, {_useState} from 'react';
import Link from 'next/link';

interface InteractiveCardProps {_title: string;
  description: string;
  icon: string;
  href: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;}

export default function InteractiveCard(_{_title, _description, _icon, _href, _color = 'from-purple-500 to-blue-500', _className = '', _children}: InteractiveCardProps) {_const [isHovered, _setIsHovered] = useState(false);

  return (_<Link
      href={href}
      className={_`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={_() => setIsHovered(true)}
      onMouseLeave={_() => setIsHovered(false)}
      aria-label={_`Navigate to ${title} page`}
    >
      <div className="relative">
        {_/* Animated background */}
        <div 
          className={_`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
        />
        
        {_/* Icon */}
        <div className="relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {_icon}
        </div>
        
        {_/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
            {_title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            {_description}
          </p>
          
          {_/* Custom children or default arrow */}
          {_children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">
              <span>Learn More</span>
              <svg 
                className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
        </div>
        
        {_/* Hover effect overlay */}
        <div 
          className={_`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          style={_{
            background: `linear-gradient(45deg, _var(--${color.split('-')[1]}-500), var(--${_color.split('-')[3]}-500))`
          }}
        />
      </div>
    </Link>
  );
}

export function FeatureCard(_{_title, _description, _icon, _href, _stats, _className = ''}: InteractiveCardProps & {_stats?: { label: string; value: string}[] }) {_return (_<InteractiveCard
      title={title}
      description={_description}
      icon={_icon}
      href={_href}
      className={_className}
    >
      {_stats && (
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, _index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{_stat.value}</div>
                <div className="text-sm text-gray-400">{_stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </InteractiveCard>
  );
}

export function TestimonialCard(_{_quote, _author, _position, _company, _rating = 5, _className = ''}: {_quote: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
  className?: string;}) {_return (
    <div className={`bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 ${className}`}>
      {_/* Quote icon */}
      <div className="text-4xl mb-4">💬</div>
      
      {_/* Rating */}
      <div className="flex mb-4">
        {_Array.from({ length: rating}).map(_(_, _i) => (
          <svg key={_i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {_/* Quote */}
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{_quote}"
      </blockquote>
      
      {_/* Author info */}
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{_author}</div>
        <div className="text-gray-400">{_position}</div>
        <div className="text-purple-400 text-sm">{_company}</div>
      </div>
    </div>
  );
}