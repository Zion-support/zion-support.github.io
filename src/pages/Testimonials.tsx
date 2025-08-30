import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Users, 
  Building, 
  Globe, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Filter,
  Search,
  Play,
  Video,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Industry,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Testimonials() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 0 },
    { id: 'healthcare', name: 'Healthcare', count: 12 },
    { id: 'finance', name: 'Finance', count: 8 },
    { id: 'manufacturing', name: 'Manufacturing', count: 15 },
    { id: 'retail', name: 'Retail', count: 6 },
    { id: 'technology', name: 'Technology', count: 10 },
    { id: 'education', name: 'Education', count: 4 },
    { id: 'government', name: 'Government', count: 7 }
  ];

  const ratings = [
    { id: 'all', name: 'All Ratings', count: 0 },
    { id: '5', name: '5 Stars', count: 45 },
    { id: '4', name: '4+ Stars', count: 12 },
    { id: '3', name: '3+ Stars', count: 3 }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Chief Technology Officer',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      rating: 5,
      content: 'Zion Tech Group transformed our healthcare analytics platform with their AI solutions. We\'ve seen a 40% improvement in patient diagnosis accuracy and a 60% reduction in administrative overhead. Their team\'s expertise in healthcare technology is unmatched.',
      project: 'AI-Powered Healthcare Analytics Platform',
      results: ['40% improvement in diagnosis accuracy', '60% reduction in administrative overhead', 'Real-time patient monitoring', 'Compliance with HIPAA regulations'],
      image: '/images/testimonials/sarah-johnson.jpg',
      video: '/videos/testimonials/sarah-johnson-testimonial.mp4',
      date: '2024-12-15',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'VP of Operations',
      company: 'Global Manufacturing Corp.',
      industry: 'manufacturing',
      rating: 5,
      content: 'The AI-powered supply chain optimization solution from Zion Tech Group has revolutionized our operations. We\'ve achieved a 35% reduction in logistics costs and improved delivery times by 45%. Their innovative approach to manufacturing technology is game-changing.',
      project: 'AI Supply Chain Optimization System',
      results: ['35% reduction in logistics costs', '45% improvement in delivery times', 'Real-time inventory tracking', 'Predictive maintenance alerts'],
      image: '/images/testimonials/michael-rodriguez.jpg',
      video: '/videos/testimonials/michael-rodriguez-testimonial.mp4',
      date: '2024-11-20',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Director of Digital Innovation',
      company: 'FinTech Dynamics',
      industry: 'finance',
      rating: 5,
      content: 'Zion Tech Group\'s cybersecurity platform has provided us with unprecedented protection against financial fraud. We\'ve detected and prevented over $2M in potential fraud attempts in just 6 months. Their AI-driven security solutions are cutting-edge.',
      project: 'AI Cybersecurity & Fraud Detection Platform',
      results: ['$2M+ in fraud prevention', '99.9% threat detection rate', 'Real-time fraud alerts', 'Compliance with financial regulations'],
      image: '/images/testimonials/emily-chen.jpg',
      video: '/videos/testimonials/emily-chen-testimonial.mp4',
      date: '2024-10-28',
      featured: false
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Chief Information Officer',
      company: 'Retail Innovations Ltd.',
      industry: 'retail',
      rating: 5,
      content: 'The AI customer experience platform from Zion Tech Group has transformed how we interact with our customers. We\'ve seen a 50% increase in customer satisfaction scores and a 30% boost in sales conversion rates. Their retail solutions are truly innovative.',
      project: 'AI Customer Experience Platform',
      results: ['50% increase in customer satisfaction', '30% boost in sales conversion', 'Personalized recommendations', '24/7 customer support'],
      image: '/images/testimonials/david-thompson.jpg',
      video: '/videos/testimonials/david-thompson-testimonial.mp4',
      date: '2024-09-15',
      featured: false
    },
    {
      id: 5,
      name: 'Dr. James Wilson',
      title: 'Research Director',
      company: 'Quantum Research Institute',
      industry: 'technology',
      rating: 5,
      content: 'Working with Zion Tech Group on our quantum computing research has been exceptional. Their expertise in cutting-edge technology and their ability to translate complex research into practical applications is remarkable. We\'ve achieved breakthroughs we never thought possible.',
      project: 'Quantum Computing Research Platform',
      results: ['Breakthrough quantum algorithms', 'Advanced research capabilities', 'International collaboration tools', 'Patent-worthy innovations'],
      image: '/images/testimonials/james-wilson.jpg',
      video: '/videos/testimonials/james-wilson-testimonial.mp4',
      date: '2024-08-30',
      featured: false
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'Operations Manager',
      company: 'EduTech Solutions',
      industry: 'education',
      rating: 5,
      content: 'Zion Tech Group\'s AI-powered learning platform has revolutionized our educational offerings. Students are more engaged, learning outcomes have improved by 40%, and our administrative efficiency has increased significantly. Their education technology solutions are outstanding.',
      project: 'AI-Powered Learning Management System',
      results: ['40% improvement in learning outcomes', 'Increased student engagement', 'Streamlined administration', 'Personalized learning paths'],
      image: '/images/testimonials/lisa-park.jpg',
      video: '/videos/testimonials/lisa-park-testimonial.mp4',
      date: '2024-07-22',
      featured: false
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (selectedIndustry !== 'all' && testimonial.industry !== selectedIndustry) return false;
    if (selectedRating !== 'all' && testimonial.rating < parseInt(selectedRating)) return false;
    if (searchQuery && !testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !testimonial.company.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Update counts
  React.useEffect(() => {
    industries.forEach(industry => {
      if (industry.id === 'all') {
        industry.count = testimonials.length;
      } else {
        industry.count = testimonials.filter(t => t.industry === industry.id).length;
      }
    });

    ratings.forEach(rating => {
      if (rating.id === 'all') {
        rating.count = testimonials.length;
      } else {
        rating.count = testimonials.filter(t => t.rating >= parseInt(rating.id)).length;
      }
    });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Client Testimonials - Zion Tech Group"
        description="Read success stories and testimonials from our satisfied clients across industries. See how our AI and technology solutions have transformed businesses."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Stories</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover how our AI and technology solutions have transformed businesses across industries. 
              Real results from real clients who trust Zion Tech Group.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'bg-transparent text-zion-slate-light border-zion-purple/30 hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>{industry.name}</span>
                  <span className="text-xs opacity-75">({industry.count})</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {ratings.map((rating) => (
              <button
                key={rating.id}
                onClick={() => setSelectedRating(rating.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedRating === rating.id
                    ? 'bg-zion-purple text-white border-zion-purple'
                    : 'bg-transparent text-zion-slate-light border-zion-purple/30 hover:border-zion-purple hover:text-zion-purple'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>{rating.name}</span>
                  <span className="text-xs opacity-75">({rating.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTestimonials.filter(t => t.featured).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-zion-slate-light">{testimonial.title}</p>
                      <p className="text-zion-cyan font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <blockquote className="text-zion-slate-light mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Project: {testimonial.project}</h4>
                  <div className="space-y-2">
                    {testimonial.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-zion-slate-light">
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-xs">
                      {industries.find(i => i.id === testimonial.industry)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Client Testimonials</h2>
          
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-purple transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-zion-slate-light text-sm">{testimonial.title}</p>
                        <p className="text-zion-purple font-medium text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <blockquote className="text-zion-slate-light mb-4 italic text-sm line-clamp-4">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                    <div className="space-y-1">
                      {testimonial.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-purple" />
                          <span>{result}</span>
                        </div>
                      ))}
                      {testimonial.results.length > 2 && (
                        <div className="text-xs text-zion-purple">
                          +{testimonial.results.length - 2} more results
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-zion-slate-light">
                    <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                    <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple rounded-full">
                      {industries.find(i => i.id === testimonial.industry)?.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-zion-purple/20 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No testimonials found</h3>
              <p className="text-zion-slate-light">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">98%</div>
                <div className="text-zion-slate-light">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-zion-purple mb-2">500+</div>
                <div className="text-zion-slate-light">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">25+</div>
                <div className="text-zion-slate-light">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-zion-purple mb-2">$50M+</div>
                <div className="text-zion-slate-light">Value Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let us help you achieve the same level of success. Get started with a free consultation 
              and discover how our AI and technology solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-lg font-semibold">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors text-lg font-semibold">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}