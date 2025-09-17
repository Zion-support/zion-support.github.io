"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  industry: string;
  featured: boolean;
}

const UltimateTestimonialShowcase2025: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'VP of Operations',
      company: 'TechCorp Global',
      avatar: '/images/sarah-johnson.jpg',
      rating: 5,
      quote: 'The AI implementation transformed our manufacturing process completely. We achieved 45% efficiency gains and reduced defects by 80%. The ROI was beyond our wildest expectations - 340% in just 12 months.',
      results: [
        { metric: 'ROI', value: '340%', improvement: '+280%' },
        { metric: 'Efficiency', value: '45%', improvement: '+35%' },
        { metric: 'Cost Savings', value: '$2.5M', improvement: 'Annually' }
      ],
      industry: 'Manufacturing',
      featured: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      company: 'FinanceFlow Inc',
      avatar: '/images/michael-chen.jpg',
      rating: 5,
      quote: 'Our loan processing time went from 5-7 days to under 2 hours. Customer satisfaction increased by 40% and we processed 300% more applications. The AI system pays for itself every quarter.',
      results: [
        { metric: 'Processing Time', value: '2 hours', improvement: '-95%' },
        { metric: 'Customer Satisfaction', value: '40%', improvement: '+40%' },
        { metric: 'Application Volume', value: '300%', improvement: '+200%' }
      ],
      industry: 'Financial Services',
      featured: true
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Medical Officer',
      company: 'HealthTech Solutions',
      avatar: '/images/emily-rodriguez.jpg',
      rating: 5,
      quote: 'The AI system improved our diagnostic accuracy by 35% and reduced reading time by 50%. It\'s been a game-changer for patient care and has saved countless lives through early detection.',
      results: [
        { metric: 'Diagnostic Accuracy', value: '35%', improvement: '+35%' },
        { metric: 'Reading Time', value: '50%', improvement: '-50%' },
        { metric: 'Patient Outcomes', value: '60%', improvement: '+60%' }
      ],
      industry: 'Healthcare',
      featured: true
    },
    {
      id: '4',
      name: 'David Kim',
      position: 'Supply Chain Director',
      company: 'RetailMax',
      avatar: '/images/david-kim.jpg',
      rating: 5,
      quote: 'Our inventory turnover improved by 40% and stockouts decreased by 90%. The AI system provides real-time insights that help us make better decisions every day.',
      results: [
        { metric: 'Inventory Turnover', value: '40%', improvement: '+40%' },
        { metric: 'Stockouts', value: '90%', improvement: '-90%' },
        { metric: 'Revenue', value: '25%', improvement: '+25%' }
      ],
      industry: 'Retail',
      featured: false
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      position: 'Operations Manager',
      company: 'LogiFlow Systems',
      avatar: '/images/lisa-thompson.jpg',
      rating: 5,
      quote: 'Fuel costs dropped by 25% and delivery times improved by 45%. Our drivers love the optimized routes and customers are happier with faster deliveries.',
      results: [
        { metric: 'Fuel Costs', value: '25%', improvement: '-25%' },
        { metric: 'Delivery Time', value: '45%', improvement: '-45%' },
        { metric: 'Customer Satisfaction', value: '85%', improvement: '+30%' }
      ],
      industry: 'Logistics',
      featured: false
    },
    {
      id: '6',
      name: 'Prof. James Wilson',
      position: 'Academic Director',
      company: 'EduTech Academy',
      avatar: '/images/james-wilson.jpg',
      rating: 5,
      quote: 'Student engagement increased by 60% and learning outcomes improved significantly. The AI adapts to each student\'s pace and learning style, making education truly personalized.',
      results: [
        { metric: 'Student Engagement', value: '60%', improvement: '+60%' },
        { metric: 'Learning Outcomes', value: '45%', improvement: '+45%' },
        { metric: 'Retention Rate', value: '35%', improvement: '+35%' }
      ],
      industry: 'Education',
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredTestimonials.length]);

  const handleTestimonialClick = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">💬 CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who have transformed their businesses 
            with our AI solutions and achieved remarkable results.
          </p>
        </div>

        {/* Featured Testimonials Carousel */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96">
              {featuredTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full flex items-center">
                    <div className="w-full p-12">
                      <div className="max-w-4xl mx-auto">
                        <div className="flex items-start">
                          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mr-8">
                            <span className="text-2xl font-bold text-gray-600">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center mb-4">
                              <div className="flex mr-4">
                                {renderStars(testimonial.rating)}
                              </div>
                              <span className="text-sm text-gray-500">
                                {testimonial.industry}
                              </span>
                            </div>
                            
                            <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                              "{testimonial.quote}"
                            </blockquote>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-lg font-bold text-gray-900">
                                  {testimonial.name}
                                </div>
                                <div className="text-gray-600">
                                  {testimonial.position}, {testimonial.company}
                                </div>
                              </div>
                              
                              <div className="flex space-x-6">
                                {testimonial.results.map((result, idx) => (
                                  <div key={idx} className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">
                                      {result.value}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {result.metric}
                                    </div>
                                    <div className="text-xs text-green-600 font-semibold">
                                      {result.improvement}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                testimonial.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {testimonial.featured && (
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  ⭐ FEATURED
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-gray-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 mb-4 line-clamp-4">
                "{testimonial.quote}"
              </blockquote>

              <div className="space-y-2">
                {testimonial.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-600">{result.metric}:</span>
                    <span className="font-semibold text-green-600">{result.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Client Success Metrics</h3>
            <p className="text-xl text-gray-600">Real results from real implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
              Start Your Success Story
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateTestimonialShowcase2025;