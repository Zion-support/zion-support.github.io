import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2026RevolutionaryShowcase: React.FC = () => {
  const newContent = [
    {
      id: 1,
      title: "AI 2026-2030: Revolutionary Breakthrough Predictions",
      excerpt: "Discover the revolutionary AI breakthroughs predicted for 2026-2030 that will fundamentally transform how businesses operate, compete, and succeed in the next decade.",
      category: "AI Trends",
      readingTime: "12 min read",
      featured: true,
      slug: "ai-2026-2030-future-predictions-revolutionary-breakthrough",
      icon: "🚀",
      gradient: "from-purple-600 to-blue-600",
      highlights: ["Quantum-Neural Fusion", "Synthetic Intelligence", "Neural Interfaces", "AGI Achievement"]
    },
    {
      id: 2,
      title: "Quantum AI 2026: The Ultimate Business Revolution Guide",
      excerpt: "Transform your enterprise with quantum-neural intelligence. Experience 1000x faster optimization, real-time financial modeling, and revolutionary business capabilities.",
      category: "Quantum Computing",
      readingTime: "15 min read",
      featured: true,
      slug: "quantum-ai-2026-business-revolution-ultimate-guide",
      icon: "⚛️",
      gradient: "from-indigo-600 to-purple-600",
      highlights: ["1000x Faster Processing", "Real-Time Modeling", "Drug Discovery", "Supply Chain Optimization"]
    },
    {
      id: 3,
      title: "Neural Interfaces 2026: The Complete Enterprise Revolution Guide",
      excerpt: "Transform your business with brain-computer integration. Enable thought-controlled operations, cognitive enhancement, and direct neural communication between human minds and AI systems.",
      category: "Neural Interfaces",
      readingTime: "18 min read",
      featured: true,
      slug: "neural-interfaces-2026-enterprise-revolution-complete-guide",
      icon: "🧠",
      gradient: "from-emerald-600 to-cyan-600",
      highlights: ["Thought Control", "Cognitive Enhancement", "Neural Collaboration", "Direct Brain-Computer Integration"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW REVOLUTIONARY CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              That Will Transform Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge insights into the future of AI, quantum computing, and neural interfaces. 
            Stay ahead of the competition with our revolutionary content series.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newContent.map((content) => (
            <div key={content.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Content header */}
                <div className={`bg-gradient-to-r ${content.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{content.icon}</span>
                      {content.featured && (
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {content.title}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {content.excerpt}
                    </p>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  {/* Category and reading time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {content.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {content.readingTime}
                    </span>
                  </div>

                  {/* Key highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {content.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 px-3 py-1 rounded-full text-xs border border-purple-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <a
                    href={`/blog/${content.slug}`}
                    className={`block w-full bg-gradient-to-r ${content.gradient} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Read Full Guide →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            'Don', 't just read about the future - start building it today. Our comprehensive AI transformation services will help you implement these revolutionary technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services/ai-transformation"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start AI Transformation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="text-sm">98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span className="text-sm">340% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="text-sm">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026RevolutionaryShowcase;