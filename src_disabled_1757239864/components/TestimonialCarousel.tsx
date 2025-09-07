:src/components/TestimonialCarousel.tsx




const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Outstanding IT services and support. They helped us migrate to the cloud seamlessly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      content: 'Their cybersecurity solutions are top-notch. We feel completely protected.',
      rating: 5,
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
        ))}
      </div>
  );
};

export default TestimonialCarousel;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';




import {
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
:src/components/TestimonialCarousel.tsx
  CarouselPrevious} from "@/components/ui/carousel";
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Quote } from 'lucide-react'
import Link from "next/link",
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = null;
              loop: true}}
            className="w-full"

export function TestimonialCarousel() {
  return (
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h3 className='text-3xl font-bold text-white mb-3'>
            What Our Users Say
          </h3>
          <p className='text-zion-slate-light text-lg max-w-2xl mx-auto'>
            Discover how Zion is transforming the tech and AI marketplace
            ecosystem
          </p>
        </div>

import {  Carousel,  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious,;
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES } from '@/data/case-studies';
const testimonials = CASE_STUDIES;
  CarouselPrevious} from "@/components/ui/carousel",;
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = CASE_STUDIES,;

export function TestimonialCarousel() {;
  return (
    <section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <h3 className='text-3xl font-bold text-white mb-3'>;
            What Our Users Say;
          </h3>;
          <p className='text-zion-slate-light text-lg max-w-2xl mx-auto'>;
import {  Carousel,  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote  } from 'lucide-react';
interface Testimonial  {id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}const TestimonialCarousel: React.FC = () => {const [currentIndex, setCurrentIndex]  = useState(0)const testimonials: Testimonial[] = [;
    {id: 1,name: 'Sarah Johnson',company: 'TechCorp Solutions',role: 'CTO',content: 'Zion Tech transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and their support team is exceptional.',rating: 5,avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face';
    },{id: 2,name: 'Michael Chen',company: 'InnovateLabs',role: 'CEO',content: 'The cybersecurity solutions provided by Zion Tech are top-notch. We\'ve had zero security incidents since implementing their systems.',rating: 5,avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
    },{id: 3,name: 'Emily Rodriguez',company: 'DataFlow Inc',role: 'Data Director',content: 'Their cloud migration services were seamless. We saved 40% on infrastructure costs while improving performance significantly.',rating: 5,avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face';
    },{id: 4,name: 'David Kim',company: 'GlobalTech',role: 'VP of Engineering',content: 'Zion Tech\'s data analytics platform gave us insights we never had before. Our decision-making process is now data-driven and efficient.',rating: 5,avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
    },{id: 5,name: 'Lisa Wang',company: 'FutureSystems',role: 'Operations Director',content: 'The digital transformation services exceeded our expectations. Our processes are now 50% more efficient and our team is more productive.',rating: 5,avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face';
    }
  ];const nextTestimonial = () => {setCurrentIndex((prevIndex) =>;
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
    )}const prevTestimonial = () => {setCurrentIndex((prevIndex) =>;
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    )}const goToTestimonial = (index: number) => {setCurrentIndex(index)}// Auto-advance testimonials;
  useEffect(() => {const interval = setInterval(nextTestimonial, 5000)return () => clearInterval(interval)}, [])const currentTestimonial  = testimonials[currentIndex];return (<div className="relative max-w-4xl mx-auto">;
      {/* Main Testimonial */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">;
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100">;
          <Quote className="w-12 h-12" />;
        </div>;

        <div className='max - w-5xl mx - auto px - 8'>;
          <Carousel;

            opts={{
              align: 'start'
              loop: true
            }}


            className='w - full';
          >;
            <CarouselContent>;
              {testimonials.map ((testimonial, index) => (
                <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;
                  <Card className='bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col'>;
                    <CardContent className='p - 8 flex flex - col md:flex - row gap - 6 flex - 1'>;
                      <div className='flex - shrink - 0 flex flex - col items - center'>;
                        <Avatar className='h - 20 w - 20 border - 2 border - zion - cyan mb - 3'>                          <Image              {testimonials.map ((testimonial, index) => (
                <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;
                  <Card className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col">;
                    <CardContent className="p - 8 flex flex - col md:flex - row gap - 6 flex - 1">;
                      <div className="flex - shrink - 0 flex flex - col items - center">;
                        <Avatar className="h - 20 w - 20 border - 2 border - zion - cyan mb - 3">;
                            src={testimonial.avatar}
                            alt={testimonial.author}
            className='w-full'>;
            <CarouselContent>;
              {testimonials && testimonials.map((testimonial, index) => (;
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>;
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>;
                      <div className='flex-shrink-0 flex flex-col items-center'>;
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials && testimonials.map((testimonial, index) => (;
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">;
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">;
                      <div className="flex-shrink-0 flex flex-col items-center">;
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;


                            width={80}
                            height={80}

                            loading="lazy"
                          />
                          <Image;


  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote } from 'lucide-react'
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = CASE_STUDIES;

export function TestimonialCarousel() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover how Zion is transforming the tech and AI marketplace ecosystem
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true}}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            loading="lazy"
                          />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                            loading="lazy"
                          />
                          <span className="text-white font-semibold">{testimonial.company}</span>
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>
    </section>
:src/components/TestimonialCarousel.tsx
  )
}

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and their support team is exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "CEO",
      content: "The cybersecurity solutions provided by Zion Tech are top-notch. We've had zero security incidents since implementing their systems.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "DataFlow Inc",
      role: "Data Director",
      content: "Their cloud migration services were seamless. We saved 40% on infrastructure costs while improving performance significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      company: "GlobalTech",
      role: "VP of Engineering",
      content: "Zion Tech's data analytics platform gave us insights we never had before. Our decision-making process is now data-driven and efficient.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "FutureSystems",
      role: "Operations Director",
      content: "The digital transformation services exceeded our expectations. Our processes are now 50% more efficient and our team is more productive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-blue-100">
          <Quote className="w-12 h-12" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Rating */}
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < currentTestimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
            &ldquo;{currentTestimonial.content}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Author Details */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="text-blue-600 font-medium">
                {currentTestimonial.role}
              </p>
              <p className="text-gray-500 text-sm">
                {currentTestimonial.company}
              </p>
            </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Support Available</div>
        </div>
  );
};

export default TestimonialCarousel;
      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">;
        {/* Previous Button */}
        <button;
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group";
          aria-label="Previous testimonial";
        >;
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />;
        </button>;
        {/* Dots Indicator */}
        <div className="flex space-x-2">;
          {testimonials.map((_, index) => (<button;
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex;
                  ? 'bg-blue-600 scale-125';
                  : 'bg-gray-300 hover:bg-gray-400';
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />;
          ))}
        </div>;
        {/* Next Button */}
        <button;
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 group";
          aria-label="Next testimonial";
        >;
          <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />;
        </button>;
      </div>;
      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>;
          <div className="text-gray-600">Happy Clients</div>;
        </div>;
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>;
          <div className="text-gray-600">Satisfaction Rate</div>;
        </div>;
        <div>;
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>;
          <div className="text-gray-600">Support Available</div>;
        </div>;
  )}export default TestimonialCarousel;


export default TestimonialCarousel;

