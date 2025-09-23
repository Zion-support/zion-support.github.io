  children?: React.ReactNode;
}
export default function InteractiveCard({title;
  description;
  icon;
  href;
  color = 'from-purple-500 to-blue-500';
  className = '';
  children;
}: InteractiveCardProps) {const [isHovered, setIsHovered] = useState(false);
'use client',;
import React, { useState } from 'react',;

import Link from 'next/link',;
interface InteractiveCardProps {;
  title: string,,
  description: string,;
  icon: string,;
  href: string,;
  color?: string,;
  className?: string,;
  children?: React.ReactNode;
}
pr-12325
;
export default function InteractiveCard({;
  title,;
  description,;
  icon,;
  href,;
  color = 'from-purple-500 to-blue-500',;
  className = '',;
  children;
}: InteractiveCardProps) {;
  const [isHovered, setIsHovered] = useState(false),;    <Link;
      href={href}
      className={`group block p - 8 rounded - 2xl border border - white / 10 hover:border - white / 30 bg - black / 20 hover:bg - black / 40 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm hover - lift ${class_name}`}
      onMouseEnter={() => setIsHovered (true)}
      onMouseLeave={() => setIsHovered (false)}
      aria - label={`Navigate to ${title} page`}
>;
      <div className="relative & quot;>;
        {/* Animated background */}
        <div;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
        {/* Icon */}
            {title}
          </h3>;
          <p className="text - gray - 400 leading - relaxed text - lg mb - 6">;
            {description}
          </p>;
          {/* Custom children or default arrow */}

{children || (

            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">
          {children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">              <span>Learn More</span>
              <svg
                className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
        </div>;
        {/* Hover effect overlay */}
        <div;
          className={`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          }}
        />;
      </div>;
    </Link>);
}
    <InteractiveCard;
      title={title}
      description={description}
      icon={icon}
      href={href}
      className={class_name}
>;
      {stats && (
          </div>;
        </div>)}
    </InteractiveCard>);
}
<div className="text-4xl mb-4">💬</div>
      <div className="text-4xl mb-4">💬</div>
      

      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>;
      {/* Quote */}
      </blockquote>      </blockquote>      </blockquote>
      {/* Author info */}
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{author}</div>
        <div className="text-gray-400">{position}</div>
        <div className="text-purple-400 text-sm">{company}</div>
      </div>
    </div>
  )
}