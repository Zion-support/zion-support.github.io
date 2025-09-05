'use client',

import React, { useState } from 'react',
import Link from 'next/link',
interface InteractiveCardProps {
  title: string,
  description: string,
  icon: string,
  href: string,
  color?: string,
  className?: string,
  children?: React.ReactNode
}

export default function InteractiveCard({
  title,
  description,
  icon,
  href,
  color = 'from-purple-500 to-blue-500',
  className = '',
  children
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false),
  return (_<Link,
href={href}
      className={_`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={_() => setIsHovered(true)}
      onMouseLeave={_() => setIsHovered(false)}
      aria-label={_`Navigate to ${title} page`}
    >
      <div className=&quot;relative&quot;>
        {/* Animated background */}        <div,
className={_`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
        />
        
        {/* Icon */}
        <div className=&quot;relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
          {icon}
        </div>
        
        {/* Content */}
        <div className=&quot;relative z-10&quot;>
          <h3 className=&quot;text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300&quot;>
            {title}
          </h3>
          <p className=&quot;text-gray-400 leading-relaxed text-lg mb-6&quot;>
            {description}
          </p>
          
          {/* Custom children or default arrow */}
          {children || (
            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>
              <span>Learn More</span>
              <svg,
className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''
                }`} 
                fill=&quot;none&quot; 
                stroke=&quot;currentColor&quot; 
                viewBox=&quot;0 0 24 24&quot;
              >
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot; />              </svg>
            </div>
          )}
        </div>
        
        {_/* Hover effect overlay */}
        <div,
className={_`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          style={_{
            background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`
          }}
        />
      </div>
    </Link>
  )
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  stats,
  className = ''
}: InteractiveCardProps & { stats?: { label: string, value: string }[] }) {
  return (
    <InteractiveCard      title={title}
      description={description}
      icon={icon}
      href={href}
      className={className}
    >
      {stats && (
        <div className=&quot;mt-6 pt-6 border-t border-white/10&quot;>
          <div className=&quot;grid grid-cols-2 gap-4&quot;>
            {stats.map((stat, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <div className=&quot;text-2xl font-bold text-white&quot;>{stat.value}</div>
                <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>              </div>
            ))}
          </div>
        </div>
      )}
    </InteractiveCard>
  )
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  rating = 5,
  className = ''
}: {
  quote: string,
  author: string,
  position: string,
  company: string,
  rating?: number,
  className?: string
}) {
  return (
    <div className={`bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 ${className}`}>
      {/* Quote icon */}
      <div className=&quot;text-4xl mb-4&quot;>💬</div>
      
      {/* Rating */}
      <div className=&quot;flex mb-4&quot;>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; viewBox=&quot;0 0 20 20&quot;>
            <path d=&quot;M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z&quot; />          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className=&quot;text-gray-300 text-lg leading-relaxed mb-6 italic&quot;>
        &quot;{quote}&quot;
      </blockquote>
      
      {/* Author info */}
      <div className=&quot;border-t border-white/10 pt-4&quot;>
        <div className=&quot;font-semibold text-white&quot;>{author}</div>
        <div className=&quot;text-gray-400&quot;>{position}</div>
        <div className=&quot;text-purple-400 text-sm&quot;>{company}</div>      </div>
    </div>
  )
}