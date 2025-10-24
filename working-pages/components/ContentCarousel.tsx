'use client';;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentCarouselPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
import React, {useState, useEffect}from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
'use client';
import React from 'react';

const ContentCarousel: React.FC = React.memo((props) => {
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      features: [,
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',},
    {id: 2,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [,
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [,
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      color: 'from-orange-500 to-red-600',},
    {id: 4,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      color: 'from-blue-500 to-indigo-600',}];
    }
  ];

  useEffect(() => {const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);
      color: 'from-red-500 to-pink-600',
    }
  ];

  useEffect(() => {];];
    const timer = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {setCurrentSlide((prev) => (prev + 1) % slides.length);};

  const prevSlide = () => {setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);};

  return(<div className="relative w-full max-w-6xl mx-auto">)</div>
      <div className="overflow-hidden rounded-2xl">
        <div;
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100,)}%)` }}
        >{slides.map((slide) => (</div>
            <div key={slide.id}className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.color}p-8 md: p-12 text-white`,}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <slide.icon className="h-12 w-12" />
                    </div>
                  </div>
                  <h2 className="text-3xl md: text-4xl font-bold text-center mb-4">,</h2>
                    {slide.title} </h2>
                  <p className="text-xl text-center mb-8 text-white/90">{slide.description</p>} </p>
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-4">,</div>
                    {slide.features.map((feature, index) => (
                      <div key={index}className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature</span>}</span>
                      </div>
                    ))}
                  </div>
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      </div><div className="relative overflow-hidden rounded-2xl">
        </div><$2 />
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            </div><div key={slide.id} className="w-full flex-shrink-0">
              </div><div className={`bg-gradient-to-br ${slide.color} p-8 rounded-2xl text-white`}>
                </div><div className="flex items-center justify-between mb-6">
                  </div><div className="flex items-center space-x-4">
                    </div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      </div><slide.icon className="w-8 h-8" />
                    </div>
                    <div>
                      </div><h3 className="text-2xl font-bold">{slide.title}</h3>
                      <p className="text-white/90">{slide.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {slide.features.map((feature, index) => (
                    </div><div key={index} className="flex items-center space-x-2">
                      </div><div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */} <button;
        onClick={prevSlide}className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button;
        onClick={nextSlide}className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover: bg-white/30 text-white p-2 rounded-full transition-all duration-300",
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */} <div className="flex justify-center mt-6 space-x-2">{slides.map((_, index) => (</div>
          <button;
            key={index}onClick={() =>setCurrentSlide(index)</button>}className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/20">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-enhanced">
                  {slide.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {slide.features.map((feature, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20">
                      <span className="text-cyan-400 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ContentCarousel;
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentCarousel | Zion Tech Group</title>
        <meta name="description" content="Professional ContentCarousel services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentCarousel, AI solutions, IT services, Zion Tech Group, contentcarousel" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentCarousel
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentcarousel solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentCarousel?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentcarousel solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our contentcarousel solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentcarousel needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index</div>
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          {slides.map((_, index) => (
            <$2 />
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarouselPage;
