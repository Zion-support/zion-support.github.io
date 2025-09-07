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

'use client',
import React, { useState } from 'react',
import Link from 'next / link',
interface InteractiveCardProps {
  title: string,
  description: string,
  icon: string,
  href: string,
  color?: string,
  class_name?: string,
  children?: React.ReactNode;
}
export default /**
 * InteractiveCard - Function description
 */
function InteractiveCard() {
  const [is_hovered, setIsHovered] = useState (false),
  return (

    <Link;
      href={href}
      className={`group block p - 8 rounded - 2xl border border - white / 10 hover:border - white / 30 bg - black / 20 hover:bg - black / 40 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm hover - lift ${class_name}`}
      onMouseEnter={() => setIsHovered (true)}
      onMouseLeave={() => setIsHovered (false)}
      aria - label={`Navigate to ${title} page`}
>;
      <div className=&quot;relative & quot;>;

'use client',;
import React, { useState } from 'react',;

import Link from 'next/link',;
interface InteractiveCardProps {;

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
  const [isHovered, setIsHovered] = useState(false),;

  return (;
    <Link;
      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${title} page`}
    <Link;
  const [isHovered, setIsHovered] = useState(false),;    <Link;
      href={href}
      className={`group block p - 8 rounded - 2xl border border - white / 10 hover:border - white / 30 bg - black / 20 hover:bg - black / 40 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm hover - lift ${class_name}`}
      onMouseEnter={() => setIsHovered (true)}
      onMouseLeave={() => setIsHovered (false)}
      aria - label={`Navigate to ${title} page`}
>;
      <div className=&quot;relative & quot;>;

    >
      <div className="relative">

        {/* Animated background */}
        <div;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
        {/* Icon */}

        <div className="relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>;
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">

            {title}
          </h3>;
          <p className=&quot;text - gray - 400 leading - relaxed text - lg mb - 6&quot;>;
            {description}
          </p>;
          {/* Custom children or default arrow */}

{children || (

            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>
          {children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">
          {children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">

              <span>Learn More</span>
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">              <span>Learn More</span>
              <svg
                className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''
              >
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot; />
              </svg>
            </div>
          )}
        </div>;
        {/* Hover effect overlay */}
        <div;
          className={`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}

{children || (
            <div className=&quot;flex items - center text - purple - 400 font - medium group - hover:text - purple - 300 transition - colors duration - 300 & quot;>;
              <span > Learn More</span>;
              <svg;
                className={`ml - 2 w - 5 h - 5 transition - all duration - 300 ${
                  is_hovered ? 'translate - x-2' : '';
                }`}
                fill=&quot;none & quot; ;
                stroke=&quot;current_color & quot; ;
                view_box=&quot;0 0 24 24 & quot;
              >;
                <path stroke_linecap=&quot;round & quot; stroke_linejoin=&quot;round & quot; stroke_width={2} d=&quot;M13 7l5 5m0 0l - 5 5m5 - 5H6 & quot; />;
              </svg>;
            </div>)}
        </div>;
        {/* Hover effect overlay */}
        <div;
          className={`absolute inset - 0 border - 2 border - transparent rounded - xl bg - gradient - to - r ${color} opacity - 0 group - hover:opacity - 20 transition - opacity duration - 500`}
          style={{
            background: `linear - gradient (45deg, var (--${color.split ('-')[1]}-500), var (--${color.split ('-')[3]}-500))`;

          style={{;
            background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`;

          }}
        />;
      </div>;
    </Link>);
}

export /**
 * FeatureCard - Function description
 */
function FeatureCard() {
  return (

;
export function FeatureCard({;
  title,;
  description,;
  icon,;
  href,;
  stats,;
  className = '';
}: InteractiveCardProps & { stats?: { label: string, value: string }[] }) {;
  className = ,;
}: InteractiveCardProps) {;
  const [isHovered, setIsHovered] = useState(false),;
  return (;
    <Link;
      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`})
      onMouseEnter={() => setIsHovered(true)}

      href={href}`;
      className={`group block p - 8 rounded - 2xl border border - white / 10 hover:border - white / 30 bg - black / 20 hover:bg - black / 40 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm hover - lift ${class_name}`}
      onMouseEnter={() => setIsHovered (true)}

      <div className=&quot;relative & quot;>;
</div>
        <div;`;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
          </h3>;
          <p className=&quot;text - gray - 400 leading - relaxed text - lg mb - 6&quot;>;
</p>
          </p>;
            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">"
              <span>Learn More</span>
              <svg;`;
                className={`ml-2 w-5 h-5 transition-all duration-300 ${"
                  isHovered ? 'translate-x-2' : 
              >
</svg>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot; />
</path>
        </div>;
          className={`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          }});
pr-12325
    <InteractiveCard;
      title={title}
      description={description}
      icon={icon}
      href={href}
      className={class_name}
>;
      {stats && (
        <div className=&quot;mt - 6 pt - 6 border - t border - white / 10 & quot;>;
          <div className=&quot;grid grid - cols - 2 gap - 4&quot;>;
            {stats.map ((stat, index) => (
              <div key={index} className=&quot;text - center & quot;>;
                <div className=&quot;text - 2xl font - bold text - white & quot;>{stat.value}</div>;
                <div className=&quot;text - sm text - gray - 400 & quot;>{stat.label}</div>;
              </div>))}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>;
        </div>)}
    </InteractiveCard>);
}
<div className=&quot;text-4xl mb-4&quot;>💬</div>
      <div className="text-4xl mb-4">💬</div>

export /**
 * TestimonialCard - Function description
 */
function TestimonialCard() {
  return (
    <div className={`bg - black / 30 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 hover:bg - black / 50 transition - all duration - 300 transform hover:scale - 105 ${class_name}`}>;
      {/* Quote icon */}
<div className=&quot;text - 4xl mb - 4&quot;>💬</div>;

;
export function TestimonialCard({;
  quote,;
  author,;
  position,;
  company,;
  rating = 5,;
  className = '';
}: {;
  quote: string,;
  author: string,;
  position: string,;
  company: string;
  rating?: number;
  className?: string;
}) {;
  return (;
    <div className={`bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 ${className}`}>;
      {/* Quote icon */}

      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>;
      {/* Quote */}
      </blockquote>
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"

      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"

      </blockquote>
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
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
}
}
;

  return (;
    <Link;

      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}`
      aria-label={`Navigate to ${title} page`}

            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            {description}
          </p>;
          {/* Custom children or default arrow */}

        {/* Animated background */}
        <div;
          className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
        />;
        {/* Icon */}

            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            {description}
          </p>;
          {/* Custom children or default arrow */}

{children || (

            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>

          {children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">

              <span>Learn More</span>
              <svg 

              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />

            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">              <span>Learn More</span>

              <svg

                className={`ml-2 w-5 h-5 transition-all duration-300 ${

                  isHovered ? 'translate-x-2' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >

              </svg>
            </div>
          )}
        </div>;
        {/* Hover effect overlay */}
        <div;`
          className={`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}

          style={{;
            background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`;

          }}
        />;
      </div>;
    </Link>;
  );
}

;
export function FeatureCard({;
  title,;
  description,;
  icon,;
  href,;
  stats,;
  className = '';
}: InteractiveCardProps & { stats?: { label: string, value: string }[] }) {;
  return (;

          }}
        />;
      </div>;
    </Link>;
  );
}

    <InteractiveCard;
      title={title}
      description={description}
      icon={icon}
      href={href}

        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}

          </div>;
        </div>;
      )}
    </InteractiveCard>;
  );
}

          </div>;
        </div>;
      )}
    </InteractiveCard>;
  );
}

<div className=&quot;text-4xl mb-4&quot;>💬</div>
      <div className="text-4xl mb-4">💬</div>

;
export function TestimonialCard({;
  quote,;
  author,;
  position,;
  company,;
  rating = 5,;
  className = '';
}: {;
  quote: string,;
  author: string,;
  position: string,;
  company: string;
  rating?: number;
  className?: string;
}) {;
  return (;
    <div className={`bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 transform hover:scale-105 ${className}`}>;
      {/* Quote icon */}

      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => ("
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">"
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>;
      {/* Quote */}

      </blockquote>
"
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">"
        "{quote}"

      </blockquote>

      </blockquote>

      {/* Author info */}
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{author}</div>
        <div className="text-gray-400">{position}</div>

        <div className="text-purple-400 text-sm">{company}</div>
      </div>
    </div>
  )

}

}