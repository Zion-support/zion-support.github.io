import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Rocket,
  Cpu,
  Lock,
  Heart,
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Scale,
  Truck,
  Target,
  Building,
  Home,
  Wrench,
  FileText,
  Video,
  Mic,
  Camera,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  Clock,
  BarChart3,
  Target as TargetIcon,
  Check,
  X,
  Play,
  ChevronRight,
  ChevronLeft
import {
  revolutionaryMicroSaasServices2028,
  revolutionaryITInfrastructureServices2028,
  revolutionaryAIServices2028
} from '@/data/innovativeMicroSaasServices2028';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ComprehensiveServicesLanding2028() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const allServices = [
    ...revolutionaryMicroSaasServices2028.map(s => ({ ...s, type: 'Micro SaaS' })),
    ...revolutionaryITInfrastructureServices2028.map(s => ({ ...s, type: 'IT Infrastructure' })),
    ...revolutionaryAIServices2028.map(s => ({ ...s, type: 'AI Services' }))
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Zion Tech Group's AI-powered legal document analyzer has revolutionized our contract review process. We've reduced review time by 80% and identified potential risks we would have missed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Global Logistics Inc",
      company: "Global Logistics Inc",
      content: "The quantum-enhanced supply chain optimizer has transformed our logistics operations. We've reduced costs by 35% and improved delivery accuracy to 98%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director, BioTech Innovations",
      company: "BioTech Innovations",
      content: "Their quantum AI drug discovery platform has accelerated our research by 10x. We're now able to analyze molecular interactions that were previously impossible to model.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"

  ];

  const stats = [
    { number: "500+", label: "Successful Projects", icon: CheckCircle },
    { number: "15+", label: "Years of Innovation", icon: Award },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal Tech': return Scale;
      case 'Supply Chain': return Truck;
      case 'Marketing Tech': return TargetIcon;
      case 'HR Tech': return Users;
      case 'Sustainability': return Globe;
      case 'Real Estate Tech': return Home;
      case 'Cybersecurity': return Shield;
      case 'Industrial IoT': return Wrench;
      case 'Cloud Computing': return Cloud;
      case 'Content Creation': return FileText;
      case 'Healthcare AI': return Heart;
      default: return Rocket;

  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'from-blue-600 to-cyan-600',
      'from-purple-600 to-pink-600',
      'from-green-600 to-emerald-600',
      'from-red-600 to-orange-600',
      'from-indigo-600 to-purple-600',
      'from-yellow-600 to-orange-600',
      'from-teal-600 to-blue-600',
      'from-pink-600 to-red-600'
    ];
    return colors[Math.abs(category.length) % colors.length];
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO
        title="Comprehensive Services Landing 2028 - Zion Tech Group"
        description="Discover our comprehensive suite of innovative micro SAAS, IT infrastructure, and AI services for 2028. Transform your business with cutting-edge technology solutions."
        keywords="comprehensive services 2028, micro SAAS, IT services, AI services, technology solutions, business transformation"
        canonical="https://ziontechgroup.com/comprehensive-services-landing-2028"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"

            Comprehensive Services Landing 2028
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Revolutionary Technology Solutions for Business Transformation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"

            Experience the future of technology with our comprehensive suite of micro SAAS, IT infrastructure,
            and AI services. Each solution is designed for maximum impact with proven ROI and real market pricing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"

            <Button
              size="lg"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}

              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}

              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"

                <div className="bg-zion-cyan/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">Our Comprehensive Service Portfolio</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Discover our revolutionary solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 group"

                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                    {service.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>

                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Category:</span>
                    <span className="text-white font-medium">{service.category}</span>
                  </div>

                  {service.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-zion-cyan font-bold">${service.price.toLocaleString()}</span>
                    </div>
                  )}

                  {service.hourlyRate && (
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Hourly Rate:</span>
                      <span className="text-zion-cyan font-bold">${service.hourlyRate}/hr</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white"
                  onClick={() => setSelectedService(service)}

                  View Details
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"

            <Button
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => window.location.href = '/innovative-services-showcase-2028'}

              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their operations with our innovative solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-white mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-zion-slate-light">{testimonials[currentTestimonial].role}</div>
                  <div className="text-zion-cyan text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="text-zion-slate-light hover:text-white"

                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-zion-cyan' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="text-zion-slate-light hover:text-white"

                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <Award className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Expertise</h3>
              <p className="text-zion-slate-light">
                15+ years of technology innovation and successful project delivery across industries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <Lightbulb className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                Cutting-edge solutions leveraging AI, quantum computing, and emerging technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <TrendingUp className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-zion-slate-light">
                Every solution is designed to deliver measurable business impact and rapid returns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <Users className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                World-class engineers, designers, and business consultants dedicated to your success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <Shield className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance standards for all our solutions and services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30 mb-6">
                <Clock className="w-12 h-12 text-zion-cyan mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock technical support and maintenance for all our enterprise solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-cyan/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"

            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(selectedService.category)}`}>
                    {React.createElement(getCategoryIcon(selectedService.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zion-slate-light hover:text-white"
                  onClick={() => setSelectedService(null)}

                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>

                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Pricing & Details</h3>
                    <div className="space-y-3">
                      {selectedService.price && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Price:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.price.toLocaleString()}</span>
                        </div>
                      )}
                      {selectedService.hourlyRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Hourly Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.hourlyRate}/hr</span>
                        </div>
                      )}
                      {selectedService.projectRate && (
                        <div className="flex justify-between">
                          <span className="text-zion-slate-light">Project Rate:</span>
                          <span className="text-zion-cyan font-bold">${selectedService.projectRate.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Market Price:</span>
                        <span className="text-white font-medium">{selectedService.marketPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">ROI:</span>
                        <span className="text-green-400 font-medium">{selectedService.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Setup Time:</span>
                        <span className="text-white font-medium">{selectedService.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Target Audience</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.targetAudience.map((audience, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedService.integrations && (
                    <div className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-3">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.integrations.map((integration, index) => (
                          <Badge key={index} variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                  Get Started
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Contact our team of technology experts to discuss how our innovative solutions can drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a
                  href="tel:+13024640950"
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold text-lg"

                  +1 302 464 0950
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Send us a detailed message</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold text-lg"

                  kleber@ziontechgroup.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"

              <div className="bg-zion-cyan/20 p-6 rounded-xl border border-zion-cyan/30">
                <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light mb-3">Our headquarters location</p>
                <address className="text-zion-cyan font-semibold text-sm not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"

            <Button
              size="lg"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => window.location.href = '/contact'}

              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}}}}