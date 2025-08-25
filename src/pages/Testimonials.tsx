import React from 'react';
import { Star, Quote, Users, Building, CheckCircle, ArrowRight, ArrowLeft, Play, Pause } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      company: "TechCorp Solutions",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system reliability. The team's expertise in quantum computing and AI is truly cutting-edge.",
      project: "AI Infrastructure Modernization",
      results: ["40% cost reduction", "99.9% uptime", "Improved security posture"],
      featured: true,
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Engineering",
      company: "InnovateTech Inc.",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "Working with Zion Tech Group on our quantum computing implementation was a game-changer. Their expertise in quantum algorithms and enterprise integration helped us stay ahead of the competition. Highly recommended!",
      project: "Quantum Computing Platform",
      results: ["10x performance improvement", "Advanced risk modeling", "Competitive advantage"],
      featured: true,
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Research Director",
      company: "BioTech Innovations",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "Zion Tech Group's AI research capabilities are exceptional. They helped us develop cutting-edge machine learning models for drug discovery, accelerating our research timeline significantly.",
      project: "AI Drug Discovery Platform",
      results: ["50% faster research", "Improved accuracy", "Scalable platform"],
      featured: false,
      videoUrl: "#"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Chief Information Officer",
      company: "Global Manufacturing Co.",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "The digital transformation project led by Zion Tech Group exceeded our expectations. Their approach to change management and technology implementation was professional and results-driven.",
      project: "Digital Transformation Initiative",
      results: ["Streamlined operations", "Improved customer experience", "Increased efficiency"],
      featured: false,
      videoUrl: "#"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Head of Security",
      company: "Financial Services Ltd.",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "Zion Tech Group's cybersecurity solutions are world-class. They helped us achieve SOC2 compliance and implement advanced threat detection systems that protect our critical assets.",
      project: "Cybersecurity & Compliance",
      results: ["SOC2 compliance achieved", "Advanced threat detection", "Zero security breaches"],
      featured: false,
      videoUrl: "#"
    },
    {
      id: 6,
      name: "Robert Kim",
      title: "Operations Director",
      company: "Logistics Solutions",
      companyLogo: "/api/placeholder/60/60",
      rating: 5,
      content: "The AI-powered logistics optimization system from Zion Tech Group revolutionized our operations. We've seen a 35% improvement in delivery efficiency and significant cost savings.",
      project: "AI Logistics Optimization",
      results: ["35% efficiency improvement", "Cost reduction", "Better customer satisfaction"],
      featured: false,
      videoUrl: "#"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Projects Completed" },
    { number: "24/7", label: "Support Available" }
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Technology",
    "Retail",
    "Education",
    "Government",
    "Energy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hear from our clients about their experience working with Zion Tech Group. 
            Discover how our AI-powered solutions and expert team have transformed businesses across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              View All Testimonials
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Share Your Story
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.filter(testimonial => testimonial.featured).map((testimonial) => (
            <div key={testimonial.id} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.title}</p>
                    <p className="text-cyan-400 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-cyan-500 mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed">{testimonial.content}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-3">Project: {testimonial.project}</h4>
                <div className="space-y-2">
                  {testimonial.results.map((result, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                </button>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Testimonials */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">All Client Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.featured && <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">Featured</span>}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.title} at {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{testimonial.content}</p>
                  
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="text-cyan-400 font-medium mr-2">Project:</span>
                    <span>{testimonial.project}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-4">
                    <div className="flex flex-col space-y-2">
                      {testimonial.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                      Read More
                    </button>
                    <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div key={industry} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 text-center cursor-pointer group">
              <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-all duration-200">
                <Building className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-white font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge AI solutions, 
            quantum computing, and innovative technology strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Start Your Project
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Share Your Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Share Your Success Story</h2>
          <p className="text-gray-300 mb-8">
            Have you worked with Zion Tech Group? We'd love to hear about your experience and share your story 
            with others who might benefit from our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Submit Testimonial
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}