  description: string;
  icon: string;
  href: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}
      href={href}
      className={`group block p-8 rounded-2xl border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${title} page`}
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
      title={title}
      description={description}
      icon={icon}
      href={href}
  author: string;
  position: string;
  company: string;
  rating?: number;
  className?: string;
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      {/* Author info */}
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white">{author}</div>
        <div className="text-gray-400">{position}</div>
        <div className="text-purple-400 text-sm">{company}</div>
      </div>
    </div>
