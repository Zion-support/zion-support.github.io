
=======
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
  return (;
    <Link;
      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${title} page`}

=======
    >
      <div className="relative">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        {/* Animated background */}
        <div;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
        {/* Icon */}

            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            {title}
          </h3>;
          <p className=&quot;text - gray - 400 leading - relaxed text - lg mb - 6&quot;>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            {description}
          </p>;
          {/* Custom children or default arrow */}

            <div className=&quot;flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300&quot;>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <span>Learn More</span>
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

=======
export /**
 * FeatureCard - Function description
 */
function FeatureCard() {
  return (

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======
export /**
 * TestimonialCard - Function description
 */
function TestimonialCard() {
  return (
    <div className={`bg - black / 30 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 hover:bg - black / 50 transition - all duration - 300 transform hover:scale - 105 ${class_name}`}>;
      {/* Quote icon */}
<div className=&quot;text - 4xl mb - 4&quot;>💬</div>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>;
      {/* Quote */}

=======

      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </blockquote>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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