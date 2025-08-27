import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  Users, 
  Building, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    company: 'TechCorp Inc.',
    industry: 'Technology',
    rating: 5,
    content: 'Zion Tech Group transformed our AI capabilities. Their machine learning solutions increased our operational efficiency by 40% and provided insights that were previously impossible to obtain. The team is incredibly professional and delivered beyond our expectations.',
    project: 'AI-Powered Business Intelligence Platform',
    results: ['40% increase in operational efficiency', 'Real-time data insights', 'Improved decision-making processes'],
    image: '/api/placeholder/100/100',
    featured: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'InnovateTech Solutions',
    industry: 'Software Development',
    rating: 5,
    content: 'The cloud migration was seamless and exceeded our expectations. Their DevOps automation reduced our deployment time from hours to minutes, and the infrastructure is now more scalable and cost-effective than ever.',
    project: 'Cloud Migration & DevOps Automation',
    results: ['90% reduction in deployment time', '30% cost savings on infrastructure', 'Improved system reliability'],
    image: '/api/placeholder/100/100',
    featured: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Security Director',
    company: 'SecureBank Financial',
    industry: 'Financial Services',
    rating: 5,
    content: 'Their cybersecurity solutions provide peace of mind. We\'ve had zero security incidents since implementation, and their compliance automation has streamlined our audit processes significantly.',
    project: 'Cybersecurity & Compliance Platform',
    results: ['Zero security incidents', 'Streamlined compliance processes', 'Enhanced threat detection'],
    image: '/api/placeholder/100/100',
    featured: true
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Operations Manager',
    company: 'Global Manufacturing Co.',
    industry: 'Manufacturing',
    rating: 5,
    content: 'The IoT solution they implemented has revolutionized our production monitoring. We can now track every aspect of our manufacturing process in real-time, leading to better quality control and reduced waste.',
    project: 'IoT Manufacturing Platform',
    results: ['Real-time production monitoring', 'Improved quality control', 'Reduced waste by 25%'],
    image: '/api/placeholder/100/100',
    featured: false
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Digital Transformation Lead',
    company: 'Retail Innovations',
    industry: 'Retail',
    rating: 5,
    content: 'Zion Tech Group helped us navigate our digital transformation journey with expertise and patience. Their solutions have improved our customer experience and increased our online sales by 35%.',
    project: 'Digital Transformation & E-commerce',
    results: ['35% increase in online sales', 'Improved customer experience', 'Streamlined operations'],
    image: '/api/placeholder/100/100',
    featured: false
  },
  {
    id: 6,
    name: 'Robert Wilson',
    role: 'IT Director',
    company: 'Healthcare Systems Ltd.',
    industry: 'Healthcare',
    rating: 5,
    content: 'Their healthcare technology solutions are cutting-edge and compliant with all regulations. The AI-powered diagnostic tools have improved our diagnostic accuracy and patient outcomes significantly.',
    project: 'AI Healthcare Diagnostics Platform',
    results: ['Improved diagnostic accuracy', 'Enhanced patient outcomes', 'Full regulatory compliance'],
    image: '/api/placeholder/100/100',
    featured: false
  },
  {
    id: 7,
    name: 'Jennifer Lee',
    role: 'Product Manager',
    company: 'Startup Ventures',
    industry: 'Startup',
    rating: 5,
    content: 'As a startup, we needed a partner who could scale with us. Zion Tech Group delivered a robust platform that has grown with our business, and their ongoing support has been invaluable.',
    project: 'Scalable SaaS Platform',
    results: ['Scalable platform architecture', 'Rapid development and deployment', 'Ongoing technical support'],
    image: '/api/placeholder/100/100',
    featured: false
  },
  {
    id: 8,
    name: 'Alex Martinez',
    role: 'Chief Innovation Officer',
    company: 'Energy Solutions Corp.',
    industry: 'Energy',
    rating: 5,
    content: 'Their quantum computing solutions for energy optimization are revolutionary. We\'ve seen unprecedented improvements in our grid efficiency and renewable energy integration.',
    project: 'Quantum Energy Optimization',
    results: ['Improved grid efficiency', 'Better renewable energy integration', 'Cost optimization'],
    image: '/api/placeholder/100/100',
    featured: false
  }
];

const industries = [
  'All Industries',
  'Technology',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Energy',
  'Startup'
];

const ratings = [
  'All Ratings',
  '5 Stars',
  '4+ Stars',
  '3+ Stars'
];

export default function Testimonials() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedRating, setSelectedRating] = useState('All Ratings');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesIndustry = selectedIndustry === 'All Industries' || testimonial.industry === selectedIndustry;
    const matchesRating = selectedRating === 'All Ratings' || 
      (selectedRating === '5 Stars' && testimonial.rating === 5) ||
      (selectedRating === '4+ Stars' && testimonial.rating >= 4) ||
      (selectedRating === '3+ Stars' && testimonial.rating >= 3);
    const matchesSearch = testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesRating && matchesSearch;
  });

  const featuredTestimonials = filteredTestimonials.filter(t => t.featured);
  const regularTestimonials = filteredTestimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Quote className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client
              <span className="text-gradient block">Success Stories</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Discover how we've helped organizations across industries transform their 
              business with cutting-edge technology solutions. Real results from real clients.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Star className="w-4 h-4" />
                <span>5.0 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Users className="w-4 h-4" />
                <span>{testimonials.length} Success Stories</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Building className="w-4 h-4" />
                <span>8+ Industries Served</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300"
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating}</option>
                ))}
              </select>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              Showing {filteredTestimonials.length} of {testimonials.length} testimonials
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Highlighted testimonials showcasing exceptional results and transformative 
                impact across different industries and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-zion-cyan font-semibold mb-1">{testimonial.role}</p>
                      <p className="text-zion-slate-light text-sm">{testimonial.company}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-zion-slate-light mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Project: {testimonial.project}</h4>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {testimonial.industry}
                    </span>
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                      Featured
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Client Testimonials</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse through all our client success stories and discover how we can 
              help transform your business with innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-lg font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                    <p className="text-zion-slate-light text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-zion-slate-light text-sm mb-4 leading-relaxed italic line-clamp-4">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {testimonial.industry}
                  </span>
                  <span className="text-zion-slate-light text-xs">
                    {testimonial.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our technology solutions can transform your business 
              and help you achieve similar results. Your success story starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}