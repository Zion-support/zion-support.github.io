"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Award
  TrendingUp
  Users
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  Target,
  Zap
} from 'lucide-react';

const AI2025SuccessStoriesPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentTestimonialsetCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const testimonials = [
    {
      quote: "AI transformed our production line. We now catch defects in real-time and reduced waste by 60%.",
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      result: "200% efficiency increase"
    },
    {
      quote: "Our fraud detection accuracy improved dramatically. We saved millions in prevented losses.",
      company: "FinanceFlow Inc",
      industry: "Financial Services"
      result: "99.8% accuracy rate"
    },
    {
      quote: "AI helps us diagnose patients faster and more accurately. 'It', 's revolutionizing healthcare delivery.",
      company: "HealthTech Partners",
      industry: "Healthcare",
      result: "300% faster analysis"
    }
  ];

  const stats = [
    { icon: TrendingUpvalue: "340%"label: "Average ROI" },
    { icon: Usersvalue: "850+"label: "Companies Served" },
    { icon: Starvalue: "98%"label: "Success Rate" },
    { icon: Targetvalue: "55%"label: "Cost Reduction" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.02%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%3D%221%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-purple-300 font-medium">Success Stories</span>
            </div>
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Real Results from
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Real Companies</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Discover how leading companies across industries are achieving remarkable results with our AI solutions. 
                See the measurable impact and transformation stories from our clients.
              </p>
            </div>
            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">340% Average ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">850+ Companies Served</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-gray-300 text-lg">55% Average Cost Reduction</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Start Your Story
              </button>
            </div>
          </div>

          {/* Right Content - Testimonial & Stats */}
          <div
            className="space-y-8"
          >
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <divp
                    key={currentTestimonial}
                    className="text-gray-300 text-lg italic mb-4"
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </divp>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{testimonials[currentTestimonial].company}</p>
                      <p className="text-purple-300 text-sm">{testimonials[currentTestimonial].industry}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold text-lg">{testimonials[currentTestimonial].result}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-purple-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((statindex) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-3">
                    <stat.icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
            <p className="text-gray-300 mb-4">
              Join 850+ companies already achieving remarkable results with AI
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✓ Proven Results</span>
              <span>✓ Industry Expertise</span>
              <span>✓ Custom Solutions</span>
              <span>✓ Ongoing Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AI2025SuccessStoriesPromotionBanner;
</div></div></div></div>