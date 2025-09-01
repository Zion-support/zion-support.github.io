import React, { useState, useEffect } from 'react.ts';
export default InnovativeServicesShowcase2030;}}
import { Brain, 
import { innovativeAIServices2030 } from "../data / innovativeAIServices2030";
import { innovativeCloudDevOpsServices2030 } from "../data / innovativeCloudDevOpsServices2030";
import { innovativeCybersecurityServices2030 } from "../data / innovativeCybersecurityServices2030";
import { motion  } from 'framer - motion.ts';


  Shield, 
  Cloud, 
  Zap, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Award,
  Clock,
  DollarSign,
  Search
} from 'lucide - react';

const InnovativeServicesShowcase2030: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState ('all') ;
  const [searchTerm, setSearchTerm] = useState ('') ;

  const allServices = [;
    ...innovativeAIServices2030,;
    ...innovativeCybersecurityServices2030,;
    ...innovativeCloudDevOpsServices2030;
  ];

  const filteredServices = allServices.filter (service => {;
    const matchesSearch = service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                         service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                         service.tags.some (tag => tag.toLowerCase () .includes (searchTerm.toLowerCase () ) ) ;
    return matchesCategory && matchesSearch}) ;

  const categories = [;
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },;
    { id: 'ai', name: 'AI Services', icon: Brain, count: innovativeAIServices2030.length },;
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: innovativeCybersecurityServices2030.length },;
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: innovativeCloudDevOpsServices2030.length };
  ];

  return (<div role="button" className = "min - h-screen bg - gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900">
      {/* Hero Section */}
      <section className="relative py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto text - center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}

            <h1 className="text - 4xl md:text - 6xl font - bold text - white mb - 6">
              Revolutionary Services 2030
            </h1>
            <p className="text - xl md:text - 2xl text - purple - 200 mb - 8 max - w-4xl mx - auto">
              Discover Zion Tech Group's cutting - edge micro SAAS, IT infrastructure, and AI services that are transforming businesses worldwide
            </p>
            <div role="button" className="flex flex - wrap justify - center gap - 4 mb - 12">
              <div role="button" className="bg - purple - 600 / 20 backdrop - blur - sm rounded - lg p - 4 border border - purple - 500 / 30">
                <div role="button" className="text - 3xl font - bold text - purple - 300">{allServices.length}+</div>
                <div role="button" className="text - purple - 200">Innovative Services</div>
              </div>
              <div role="button" className="bg - blue - 600 / 20 backdrop - blur - sm rounded - lg p - 4 border border - blue - 500 / 30">
                <div role="button" className="text - 3xl font - bold text - blue - 300">99.9%</div>
                <div role="button" className="text - blue - 200">Uptime SLA</div>
              </div>
              <div role="button" className="bg - green - 600 / 20 backdrop - blur - sm rounded - lg p - 4 border border - green - 500 / 30">
                <div role="button" className="text - 3xl font - bold text - green - 300">24 / 7</div>
                <div role="button" className="text - green - 200">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>;

      {/* Contact Banner */}
      <section className="bg - gradient - to - r from - purple - 600 to - blue - 600 py - 8 px - 4">;
        <div role="button" className="max - w-7xl mx - auto text - center">
          <div role="button" className="flex flex - col md:flex - row items - center justify - center gap - 6 text - white">
            <div role="button" className="flex items - center gap - 2">
              <Phone className="w - 5 h - 5" />
              <span className="font - semibold">+1 302 464 0950</span>
            </div>
            <div role="button" className="flex items - center gap - 2">
              <Mail className="w - 5 h - 5" />
              <span className="font - semibold">kleber@ziontechgroup.com</span>
            </div>
            <div role="button" className="flex items - center gap - 2">
              <MapPin className="w - 5 h - 5" />
              <span className="font - semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">;
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="flex flex - col lg:flex - row gap - 6 mb - 8">
            <div role="button" className="flex - 1">
              <div role="button" className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={ (e) => setSearchTerm (e.target.value) }
                  className="w - full px - 4 py - 3 pl - 12 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - white / 60 focus:outline - none focus:ring - 2 focus:ring - purple - 500"
                />
                <Search className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 text - white / 60 w - 5 h - 5" />
              </div>
            </div>
            <div role="button" className="flex flex - wrap gap - 3">
              {categories.map ( (category) => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id}
                  onClick={ () => setActiveCategory (category.id) }
                  className={`flex items - center gap - 2 px - 4 py - 2 rounded - lg border transition - all ${
                    activeCategory === category.id
                      ? 'bg - purple - 600 border - purple - 500 text - white'
                      : 'bg - white / 10 border - white / 20 text - white hover:bg - white / 20'
                  }`}

                  <category.icon className="w - 4 h - 4" />
                  <span>{category.name}</span>
                  <span className="bg - white / 20 px - 2 py - 1 rounded - full text - xs">
                    {category.count}
                  </span>
                </button>;) ) }
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">;
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 8">
            {filteredServices.map ( (service, index) => (<motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 

}}
                animate = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                className="bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - xl p - 6 hover:bg - white / 10 transition - all group"

                {/* Service Header */}
                <div role="button" className="mb - 4">
                  <div role="button" className="flex items - start justify - between mb - 3">
                    <h3 className="text - xl font - bold text - white group - hover:text - purple - 300 transition - colors">
                      {service.title}
                    </h3>
                    <div role="button" className="flex items - center gap - 1">
                      <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />
                      <span className="text - white text - sm">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text - gray - 300 text - sm leading - relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div role="button" className="mb - 4 p - 4 bg - purple - 600 / 20 rounded - lg border border - purple - 500 / 30">;
                  <div role="button" className="flex items - center justify - between mb - 2">
                    <span className="text - purple - 200 text - sm">Starting at</span>
                    <span className="text - white font - bold">${service.pricing.monthly}/month</span>
                  </div>
                  <div role="button" className="text - purple - 200 text - xs">
                    Market price: {service.pricing.marketPrice}
                  </div>
                </div>;

                {/* Features */}
                <div role="button" className="mb - 4">
                  <h4 className="text - white font - semibold mb - 2 flex items - center gap - 2">
                    <CheckCircle className="w - 4 h - 4 text - green - 400" />
                    Key Features
                  </h4>
                  <div role="button" className="space - y-1">
                    {service.features.slice (0, 3) .map ( (feature, idx) => (<div role="button" key={idx} className="text - gray - 300 text - sm flex items - center gap - 2">
                        <div role="button" className="w - 1.5 h - 1.5 bg - purple - 400 rounded - full"></div>
                        {feature}
                      </div>) ) }
                    {service.features.length > 3 && (<div role="button" className="text - purple - 300 text - sm">
                        +{service.features.length - 3} more features
                      </div>) }
                  </div>
                </div>

                {/* Benefits */}
                <div role="button" className="mb - 4">
                  <h4 className="text - white font - semibold mb - 2 flex items - center gap - 2">
                    <TrendingUp className="w - 4 h - 4 text - blue - 400" />
                    Benefits
                  </h4>
                  <div role="button" className="space - y-1">
                    {service.benefits.slice (0, 2) .map ( (benefit, idx) => (<div role="button" key={idx} className="text - gray - 300 text - sm flex items - center gap - 2">
                        <div role="button" className="w - 1.5 h - 1.5 bg - blue - 400 rounded - full"></div>
                        {benefit}
                      </div>) ) }
                  </div>
                </div>

                {/* Tags */}
                <div role="button" className="mb - 4">
                  <div role="button" className="flex flex - wrap gap - 2">
                    {service.tags.slice (0, 3) .map ( (tag, idx) => (<span
                        key={idx}
                        className="px - 2 py - 1 bg - white / 10 text - white text - xs rounded - full border border - white / 20"

                        {tag}
                      </span>) ) }
                  </div>
                </div>

                {/* Service Details */}
                <div role="button" className="grid grid - cols - 2 gap - 3 mb - 4 text - xs">
                  <div role="button" className="text - gray - 400">
                    <div role="button" className="flex items - center gap - 1 mb - 1">
                      <Users className="w - 3 h - 3" />
                      <span > Target:</span>
                    </div>
                    <div role="button" className="text - white">{service.targetAudience[0]}</div>
                  </div>
                  <div role="button" className="text - gray - 400">
                    <div role="button" className="flex items - center gap - 1 mb - 1">
                      <Clock className="w - 3 h - 3" />
                      <span > Response:</span>
                    </div>
                    <div role="button" className="text - white">{service.responseTime}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div role="button" className="flex gap - 3">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex - 1 bg - purple - 600 hover:bg - purple - 700 text - white text - center py - 2 px - 4 rounded - lg transition - colors flex items - center justify - center gap - 2"

                    <ExternalLink className="w - 4 h - 4" />
                    Learn More
                  </a>
                  <a
                    href={`mailto:${service.contactEmail}?subject = Inquiry about ${service.title}`}
                    className="flex - 1 bg - white / 10 hover:bg - white / 20 text - white text - center py - 2 px - 4 rounded - lg transition - colors border border - white / 20"

                    Contact
                  </a>
                </div>
              </motion.div>) ) }
          </div>;
;
          {filteredServices.length === 0 && (;
            <div role="button" className="text - center py - 12">;
              <div role="button" className="text - gray - 400 text - lg mb - 4">No services found matching your criteria</div>;
              <button;
                onClick={ () => {;
                  setSearchTerm ('') ;
                  setActiveCategory ('all') ;
                }}
                className = "bg - purple - 600 hover:bg - purple - 700 text - white px - 6 py - 2 rounded - lg transition - colors"
              >
                Clear Filters
              </button>
            </div>) }
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - white / 5">;
        <div role="button" className="max - w-7xl mx - auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mb - 16"

            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">
              We deliver cutting - edge technology solutions with unmatched expertise, innovation, and customer success
            </p>
          </motion.div>

          <div role="button" className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 4 gap - 8">
            {[
              {
                icon: Award,
                title: "Industry Expertise",
                description: "20 + years of experience in cutting - edge technology solutions"
              },
              {
                icon: Zap,
                title: "Innovation First",
                description: "Pioneering the latest AI, cybersecurity, and cloud technologies"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, and industry compliance certifications"
              },
              {
                icon: Users,
                title: "24 / 7 Support",
                description: "Round - the - clock technical support and consultation"
              }
            ].map ( (feature, index) => (<motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                viewport={{ once: true }}
                className="text - center"

                <div role="button" className="w - 16 h - 16 bg - purple - 600 / 20 border border - purple - 500 / 30 rounded - full flex items - center justify - center mx - auto mb - 4">
                  <feature.icon className="w - 8 h - 8 text - purple - 400" />
                </div>
                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>
                <p className="text - gray - 300">{feature.description}</p>
              </motion.div>;) ) }
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div role="button" className="max - w-4xl mx - auto text - center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">
              Ready to Transform Your Business?
            </h2>
            <p className="text - xl text - purple - 200 mb - 8">
              Join thousands of businesses already leveraging our innovative services to stay ahead of the competition
            </p>
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject = Service Inquiry"
                className="bg - purple - 600 hover:bg - purple - 700 text - white px - 8 py - 4 rounded - lg text - lg font - semibold transition - colors flex items - center justify - center gap - 2"

                <Mail className="w - 5 h - 5" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg - white / 10 hover:bg - white / 20 text - white px - 8 py - 4 rounded - lg text - lg font - semibold transition - colors border border - white / 20 flex items - center justify - center gap - 2"

                <Phone className="w - 5 h - 5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8 bg - gradient - to - r from - purple - 900 to - blue - 900">;
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">
            <div>
              <h3 className="text - white font - bold text - lg mb - 4">Contact Information</h3>
              <div role="button" className="space - y-3 text - gray - 300">
                <div role="button" className="flex items - center gap - 2">
                  <Phone className="w - 4 h - 4 text - purple - 400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div role="button" className="flex items - center gap - 2">
                  <Mail className="w - 4 h - 4 text - purple - 400" />
                  <span > kleber@ziontechgroup.com</span>
                </div>
                <div role="button" className="flex items - center gap - 2">
                  <MapPin className="w - 4 h - 4 text - purple - 400" />
                  <span > 364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text - white font - bold text - lg mb - 4">Quick Links</h3>
              <div role="button" className="space - y-2">
                <a href="https://ziontechgroup.com" className="block text - gray - 300 hover:text - white transition - colors">
                  Visit Website
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="block text - gray - 300 hover:text - white transition - colors">
                  Request Quote
                </a>
                <a href="tel:+13024640950" className="block text - gray - 300 hover:text - white transition - colors">
                  Schedule Call
                </a>
              </div>
            </div>
            <div>
              <h3 className="text - white font - bold text - lg mb - 4">Service Categories</h3>
              <div role="button" className="space - y-2">
                <div role="button" className="text - gray - 300">AI & Machine Learning</div>
                <div role="button" className="text - gray - 300">Cybersecurity Solutions</div>
                <div role="button" className="text - gray - 300">Cloud & DevOps</div>
                <div role="button" className="text - gray - 300">IT Infrastructure</div>
              </div>
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;) ;
};
