"use client";
'use client';
import React, { useState, useEffect } from 'react';
// import Link from 'next/link', // Replaced with regular anchor tags for React compatibility,
import {,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain;
  Globe;
  Target;
  Award;
  CheckCircle;
  PlayCircle;
  BookOpen;
  Lightbulb;
  DollarSign;
  BarChart3;
  Clock;
  Building2,
} from 'lucide-react';
const BusinessSuccessStories2025 = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [activeStorysetActiveStory] = useState(0);
  useEffect(() => {,
    setIsVisible(true);
  }[]);
  const successStories = [,
    {,
      id: 1;
      company: 'TechCorp Solutions';
      industry: 'Technology';
      logo: 'TC';
      challenge: 'Manual data processing causing 40% efficiency loss';
      solution: 'Implemented AI-powered automation suite';
      results: {,
        efficiency: '+300%';
        costSavings: '$2.5M';
        timeSaved: '2000 hours/month';
        roi: '450%',};
      testimonial: 'Zion Tech Group transformed our operations completely. We went from struggling with manual processes to having a fully automated system that saves us thousands of hours every month.';
      author: 'Sarah Johnson';
      role: 'CEO';
      rating: 5;
      image: '/api/placeholder/400/300',};
    {,
      id: 2;
      company: 'Global Finance Inc';
      industry: 'Financial Services';
      logo: 'GF';
      challenge: 'Security breaches costing millions in damages';
      solution: 'Deployed advanced cybersecurity framework';
      results: {,
        security: '99.9%';
        costSavings: '$5.2M';
        incidents: '0 breaches';
        compliance: '100%',};
      testimonial: 'The cybersecurity solutions provided by Zion Tech Group have been game-changing. We haven\'t had a single breach since implementationand our compliance scores are perfect.';
      author: 'Michael Chen';
      role: 'CTO';
      rating: 5;
      image: '/api/placeholder/400/300',};
    {,
      id: 3;
      company: 'Manufacturing Plus';
      industry: 'Manufacturing';
      logo: 'MP';
      challenge: 'Supply chain inefficiencies causing delays';
      solution: 'AI-driven supply chain optimization';
      results: {,
        efficiency: '+250%';
        costSavings: '$3.8M';
        deliveryTime: '-60%';
        quality: '+95%',};
      testimonial: 'Our supply chain is now running like a well-oiled machine. The AI optimization has reduced our delivery times by 60% and improved quality significantly.';
      author: 'Emily Rodriguez';
      role: 'Operations Director';
      rating: 5;
      image: '/api/placeholder/400/300',};
    {,
      id: 4;
      company: 'HealthCare First';
      industry: 'Healthcare';
      logo: 'HF';
      challenge: 'Patient data management and compliance issues';
      solution: 'Comprehensive data management and compliance system';
      results: {,
        efficiency: '+180%';
        costSavings: '$1.9M';
        compliance: '100%';
        patientSatisfaction: '+85%',};
      testimonial: 'The data management system has revolutionized our patient care. We\'re now fully compliant and our patients are much happier with our services.';
      author: 'Dr. James Wilson';
      role: 'Chief Medical Officer';
      rating: 5;
      image: '/api/placeholder/400/300',}
  ];
  const overallStats = [,
    { label: 'Projects 'Completedvalue: '1,200+'icon: Target ,};
    { label: 'Average 'ROIvalue: '300%'icon: TrendingUp ,};
    { label: 'Client 'Satisfactionvalue: '99.8%'icon: Star ,};
    { label: 'Cost 'Savingsvalue: '$50M+'icon: DollarSign ,}
  ];
  const industries = [,
    { name: ''Technologycount: 45icon: Brain ,};
    { name: ''Financecount: 32icon: DollarSign ,};
    { name: ''Healthcarecount: 28icon: Shield ,};
    { name: ''Manufacturingcount: 25icon: Building2 ,};
    { name: ''Retailcount: 20icon: Globe ,};
    { name: ''Educationcount: 15icon: BookOpen ,}
  ];
  return (,
    <div className="bg-gradient-to-br from-slate-50 via-white to-green-50 py-20">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header */,}
        <div,
          className="text-center mb-16",
        >,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">,
            Real Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Stories</span>,
          </h2>,
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
            Discover how businesses across industries have transformed their operations and achieved remarkable results with our solutions.,
          </p>,
        </div>,
        {/* Overall Stats */,}
        <div,
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16",
        >,
          {overallStats.map((statindex) => (,
            <div key={index,} className="text-center">,
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-4">,
                <stat.icon className="w-8 h-8 text-white" />,
              </div>,
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>,
              <div className="text-gray-600">{stat.label}</div>,
            </div>,
          ))}
        </div>,
        {/* Success Stories Grid */}
        <div className="grid lg: grid-cols-2 gap-8 mb-16">,
          {successStories.map((storyindex) => (,
            <div,
              key={story.id,}
              className="bg-white rounded-2xl shadow-xl p-8 hover: shadow-2xl transition-all duration-300",
            >,
              {/* Company Header */,}
              <div className="flex items-center justify-between mb-6">,
                <div className="flex items-center space-x-4">,
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">,
                    {story.logo}
                  </div>,
                  <div>,
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>,
                    <p className="text-gray-600">{story.industry}</p>,
                  </div>,
                </div>,
                <div className="flex items-center space-x-1">,
                  {[...Array(story.rating)].map((_i) => (,
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />,
                  ))}
                </div>,
              </div>,
              {/* Challenge & Solution */}
              <div className="mb-6">,
                <div className="mb-4">,
                  <h4 className="text-sm font-semibold text-red-600 mb-2">CHALLENGE</h4>,
                  <p className="text-gray-700">{story.challenge}</p>,
                </div>,
                <div>,
                  <h4 className="text-sm font-semibold text-green-600 mb-2">SOLUTION</h4>,
                  <p className="text-gray-700">{story.solution}</p>,
                </div>,
              </div>,
              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">,
                {Object.entries(story.results).map(([keyvalue]) => (,
                  <div key={key} className="text-center p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">,
                    <div className="text-2xl font-bold text-gray-900">{value}</div>,
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>,
                  </div>,
                ))}
              </div>,
              {/* Testimonial */}
              <div className="border-l-4 border-green-500 pl-4 mb-4">,
                <p className="text-gray-700 italic mb-2">"{story.testimonial}"</p>,
                <div className="text-sm text-gray-600">,
                  <span className="font-semibold">{story.author}</span>{story.role}
                </div>,
              </div>,
              {/* CTA */}
              <a,
                href={`/case-study/${story.id}`}
                className="inline-flex items-center text-green-600 hover: text-green-700 font-semibold",
              >,
                Read Full Case Study,
                <ArrowRight className="w-4 h-4 ml-1" />,
              </a>,
            </div>,
          )),}
        </div>,
        {/* Industries Served */}
        <div,
          className="mb-16",
        >,
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">,
            Industries We Serve,
          </h3>,
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">,
            {industries.map((industryindex) => (,
              <div,
                key={index,}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-300",
              >,
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-4">,
                  <industry.icon className="w-6 h-6 text-white" />,
                </div>,
                <h4 className="font-semibold text-gray-900 mb-2">{industry.name,}</h4>,
                <p className="text-2xl font-bold text-green-600">{industry.count}+</p>,
                <p className="text-sm text-gray-600">Projects</p>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white",
        >,
          <h3 className="text-3xl font-bold mb-4">,
            Ready to Write Your Success Story?,
          </h3>,
          <p className="text-xl mb-8 opacity-90">,
            Join hundreds of companies that have transformed their business with our solutions.,
          </p>,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <a,
              href="/contact",
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg",
            >,
              Start Your Journey,
              <ArrowRight className="w-5 h-5 ml-2" />,
            </a>,
            <a,
              href="/case-studies",
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300",
            >,
              <BookOpen className="w-5 h-5 mr-2" />,
              View All Stories,
            </a>,
          </div>,
        </div>,
      </div>,
    </div>,
  ),};
export default BusinessSuccessStories2025;