import React from "react";

<<<<<<< HEAD:temp_broken_files/AdvancedHero.tsx
interface AdvancedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}


export default function AdvancedHero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage
}: AdvancedHeroProps) {
=======
const function AdvancedHero({ = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/AdvancedHero.tsx
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function AdvancedHero({</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
<<<<<<< HEAD:temp_broken_files/AdvancedHero.tsx
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            {subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaLink}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              {ctaText}
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
=======
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/AdvancedHero.tsx
  );
};

export default function AdvancedHero({;
