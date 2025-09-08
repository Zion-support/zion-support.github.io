import React, { useState, useEffect } from 'react';'
import { ChevronLeft, ChevronRight, Star, Quote  } from 'lucide-react';'
interface Testimonial  {"id": number;
  }
  "name": string;
  "company": string;
  "role": string;
  "content": string;
  "rating": number;
  avatar?: string;
}const "TestimonialCarousel": React.FC = () => {const [currentIndex, setCurrentIndex]  = useState(0)const "testimonials": Testimonial[] = [;
    {"id": 1,"name": 'Sarah Johnson',"company": 'TechCorp Solutions',"role": 'CTO',"content": 'Zion Tech transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and their support team is exceptional.',"rating": 5,"avatar": '"https"://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face';'
    },{"id": 2,"name": 'Michael Chen',"company": 'InnovateLabs',"role": 'CEO',"content": 'The cybersecurity solutions provided by Zion Tech are top-notch. We\'ve had zero security incidents since implementing their systems.',"rating": 5,"avatar": '"https"://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';'
    },{"id": 3,"name": 'Emily Rodriguez',"company": 'DataFlow Inc',"role": 'Data Director',"content": 'Their cloud migration services were seamless. We saved 40% on infrastructure costs while improving performance significantly.',"rating": 5,"avatar": '"https"://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face';'
    },{"id": 4,"name": 'David Kim',"company": 'GlobalTech',"role": 'VP of Engineering',"content": 'Zion Tech\'s data analytics platform gave us insights we never had before. Our decision-making process is now data-driven and efficient.',"rating": 5,"avatar": '"https"://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';'
    },{"id": 5,"name": 'Lisa Wang',"company": 'FutureSystems',"role": 'Operations Director',"content": 'The digital transformation services exceeded our expectations. Our processes are now 50% more efficient and our team is more productive.',"rating": 5,"avatar": '"https"://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face';'
    }
  ];const nextTestimonial = () => {setCurrentIndex((prevIndex) =>;
      }
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
    )}const prevTestimonial = () => {setCurrentIndex((prevIndex) =>;
      }
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    )}const goToTestimonial = ("index": number) => {setCurrentIndex(index)}// Auto-advance testimonials;
  useEffect(() => {const interval = setInterval(nextTestimonial, 5000)return () => clearInterval(interval)}, [])const currentTestimonial  = testimonials[currentIndex];return (<div className="relative max-w-4xl mx-auto">;"
      {/* Main Testimonial */}
      <div className="bg-white rounded-2xl shadow-xl p-8 "md":p-12 relative overflow-hidden">;"
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100">;"
          <Quote className="w-12 h-12" />;"
        </div>;
        {/* Content */}
        <div className="relative z-10">;"
          {/* Rating */}
          <div className="flex items-center justify-center mb-6">;"
            {[...Array(5)].map((_, i) => (<Star;
                }
                key={i}
                className={`w-5 h-5 ${i < currentTestimonial.rating;`                    ? 'text-yellow-400 fill-current';'
                    : 'text-gray-300';'
                }`}` />;            ))}
          </div>;
          {/* Testimonial Text */}
          <blockquote className="text-xl "md":text-2xl text-gray-700 text-center mb-8 leading-relaxed">;"
            &ldquo;{currentTestimonial.content}&rdquo;
          </blockquote>;
          {/* Author Info */}
          <div className="flex flex-col "md":flex-row items-center justify-center space-y-4 "md":space-y-0 "md":space-x-6">;"
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">;"
              <img;
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover";"
                onError={(e) => {const target = e.target as HTMLImageElement;
                  }
                  target.style.display = 'none';'
                }
              />;
            </div>;
            {/* Author Details */}
            <div className="text-center "md":text-left">;"
              <h4 className="text-lg font-semibold text-gray-900">;"
                {currentTestimonial.name}
              </h4>;
              <p className="text-blue-600 font-medium">;"
                {currentTestimonial.role}
              </p>;
              <p className="text-gray-500 text-sm">;"
                {currentTestimonial.company}
              </p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">;"
        {/* Previous Button */}
        <button;
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg "hover":shadow-xl transition-all duration-300 "hover":bg-blue-50 group";"
          aria-label="Previous testimonial";"
        >;
          <ChevronLeft className="w-6 h-6 text-gray-600 group-"hover":text-blue-600" />;"
        </button>;
        {/* Dots Indicator */}
        <div className="flex space-x-2">;"
          {testimonials.map((_, index) => (<button;
              }
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex;`                  ? 'bg-blue-600 scale-125';'
                  : 'bg-gray-300 "hover":bg-gray-400';'
              }`}`              aria-label={`Go to testimonial ${index + 1}`}`
            />;
          ))}
        </div>;
        {/* Next Button */}
        <button;
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg "hover":shadow-xl transition-all duration-300 "hover":bg-blue-50 group";"
          aria-label="Next testimonial";"
        >;
          <ChevronRight className="w-6 h-6 text-gray-600 group-"hover":text-blue-600" />;"
        </button>;
      </div>;
      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 "md":grid-cols-3 gap-8 text-center">;"
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>;"
          <div className="text-gray-600">Happy Clients</div>;"
        </div>;
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>;"
          <div className="text-gray-600">Satisfaction Rate</div>;"
        </div>;
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>;"
          <div className="text-gray-600">Support Available</div>;"
        </div>;
      </div>;
    </div>;
  )}export default TestimonialCarousel;