>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return (;
    <Link;
      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${title} page`}
>
      <div className=&quot;relative&quot;>
    >
      <div className="relative">
=======

    >
      <div className="relative">>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>
      <div className=&quot;relative&quot;>
    >
      <div className="relative">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Animated background */}
        <div;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
        {/* Icon */}
        <div className="relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
=======


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

{children || (

            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>

          {children || (
            <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300">



              <span>Learn More</span>
              <svg
                className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''


                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"


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

=======<div className=&quot;relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
          {icon}
        </div>;
        {/* Content */}
<div className=&quot;relative z-10&quot;>
          <h3 className=&quot;text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300&quot;>
        <div className="relative z-10 text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>;
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <span>Learn More</span>
              <svg
                className={`ml-2 w-5 h-5 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''
                }`}
                fill=&quot;none&quot;
                stroke=&quot;currentColor&quot;
                viewBox=&quot;0 0 24 24&quot;
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 7l5 5m0 0l-5 5m5-5H6&quot; />
              </svg>
            </div>
          )}
        </div>;
        {/* Hover effect overlay */}
        <div;
          className={`absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          style={{background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`;
          style={{;
            background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`;
=======
=======

          style={{;
            background: `linear-gradient(45deg, var(--${color.split('-')[1]}-500), var(--${color.split('-')[3]}-500))`;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />;
      </div>;
    </Link>);
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export /**
 * FeatureCard - Function description
 */
function FeatureCard() {
  return (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>;
      {/* Quote */}
      </blockquote>
=======      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"


      </blockquote>
<blockquote className=&quot;text-gray-300 text-lg leading-relaxed mb-6 italic&quot;>
        &quot;{quote}&quot;
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"
=======

      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </blockquote>
=======
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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