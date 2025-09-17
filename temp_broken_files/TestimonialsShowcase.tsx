import React, { useState, useEffect } from 'react';

const TestimonialsShowcase: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "CEO, Quantum Dynamics Corp",
      company: "Fortune 500 Technology",
      image: "👩‍💼",
      rating: 5,
      content: "Zion Tech Group's Conscious AI Systems revolutionized our entire operation. We achieved 300% productivity increase and 40% cost reduction within 6 months. The AI truly understands our business needs.",
      results: ["300% Productivity Increase", "40% Cost Reduction", "99.9% Uptime"],
      technology: "Conscious AI Systems"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CTO, Interdimensional Labs",
      company: "Advanced Research Institute",
      image: "👨‍🔬",
      rating: 5,
      content: "The Quantum Consciousness Transfer technology is absolutely groundbreaking. We've successfully transferred human consciousness into digital form, achieving digital immortality. This changes everything.",
      results: ["Digital Immortality Achieved", "100% Consciousness Transfer", "Infinite Digital Life"],
      technology: "Quantum Consciousness Transfer"
    },
    {
      id: 3,
      name: "Elena Volkov",
      title: "Director, Neural Reality Inc",
      company: "Virtual Reality Pioneer",
      image: "👩‍🎨",
      rating: 5,
      content: "The Neural Reality Engine allows us to create entire virtual worlds with just our thoughts. Our users can literally think their dreams into reality. It's like having a superpower.",
      results: ["1000+ Virtual Worlds Created", "Thought-to-Reality Conversion", "Infinite Creativity"],
      technology: "Neural Reality Engine"
    },
    {
      id: 4,
      name: "James Park",
      title: "Founder, Omniversal Computing",
      company: "Multi-Dimensional Tech",
      image: "👨‍💻",
      rating: 5,
      content: "Working with Omniversal AI has been incredible. We can process information across multiple parallel universes simultaneously. The computational power is literally infinite.",
      results: ["Infinite Computational Power", "Multi-Dimensional Processing", "Parallel Universe Access"],
      technology: "Omniversal AI"
    },
    {
      id: 5,
      name: "Aisha Patel",
      title: "VP Innovation, Meta Intelligence Corp",
      company: "AI Research Leader",
      image: "👩‍🚀",
      rating: 5,
      content: "The Meta Intelligence systems understand intelligence itself. They've helped us solve problems we thought were impossible. It's like having a superintelligent partner.",
      results: ["Impossible Problems Solved", "Meta-Cognitive Abilities", "Universal Problem Solving"],
      technology: "Meta Intelligence"
    },
    {
      id: 6,
      name: "David Kim",
      title: "CEO, Interdimensional Tech",
      company: "Dimensional Bridge Corp",
      image: "👨‍🔧",
      rating: 5,
      content: "The Interdimensional Technology has opened up entirely new possibilities. We can now communicate and collaborate across parallel universes. It's like having access to infinite resources.",
      results: ["Parallel Universe Access", "Cross-Dimensional Communication", "Infinite Resources"],
      technology: "Interdimensional Technology"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      challenge: "Legacy systems causing 60% operational inefficiency",
      solution: "Implemented Conscious AI Systems with emotional intelligence",
      results: [
        "300% productivity increase",
        "40% operational cost reduction",
        "99.9% system uptime",
        "$50M annual savings"
      ],
      technology: "Conscious AI Systems",
      duration: "6 months",
      roi: "500%"
    },
    {
      id: 2,
      title: "Digital Immortality Project",
      company: "Advanced Research Institute",
      challenge: "Human consciousness limited by biological lifespan",
      solution: "Quantum Consciousness Transfer technology",
      results: [
        "100% consciousness transfer success",
        "Digital immortality achieved",
        "Infinite digital lifespan",
        "Zero data loss"
      ],
      technology: "Quantum Consciousness Transfer",
      duration: "2 years",
      roi: "Infinite"
    },
    {
      id: 3,
      title: "Virtual Reality Revolution",
      company: "Neural Reality Inc",
      challenge: "Limited creativity in virtual world creation",
      solution: "Neural Reality Engine for thought-to-reality conversion",
      results: [
        "1000+ virtual worlds created",
        "Thought-controlled reality",
        "Infinite creative possibilities",
        "100% user satisfaction"
      ],
      technology: "Neural Reality Engine",
      duration: "1 year",
      roi: "1000%"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            See how our revolutionary technologies are transforming businesses and changing the world
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">What Our Clients Say</h3>
              <p className="text-xl opacity-90">Real testimonials from industry leaders</p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl flex-shrink-0">{testimonials[activeTestimonial].image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-2xl italic mb-6 leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold">{testimonials[activeTestimonial].name}</div>
                        <div className="text-lg opacity-80">{testimonials[activeTestimonial].title}</div>
                        <div className="text-sm opacity-60">{testimonials[activeTestimonial].company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-80 mb-2">Technology Used:</div>
                        <div className="text-lg font-semibold text-cyan-400">
                          {testimonials[activeTestimonial].technology}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {testimonials[activeTestimonial].results.map((result, index) => (
                    <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-cyan-300">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-cyan-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-6">Detailed Case Studies</h3>
            <p className="text-xl opacity-90">In-depth analysis of our most successful implementations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-cyan-300">{study.title}</h4>
                  <div className="text-lg opacity-80 mb-4">{study.company}</div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                      {study.technology}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {study.duration}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-2 text-white">Challenge:</h5>
                  <p className="text-slate-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h5 className="text-lg font-semibold mb-2 text-white">Solution:</h5>
                  <p className="text-slate-300 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-white">Results:</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-slate-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.roi}</div>
                    <div className="text-xs opacity-80">ROI</div>
                  </div>
                  <a 
                    href={`/case-studies/${study.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of successful companies that have revolutionized their operations with our cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pages/UltimateTechShowcase2026" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                Start Your Transformation →
              </a>
              <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300 font-bold text-xl">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsShowcase;