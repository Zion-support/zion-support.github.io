import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 

  Shield, 
  Zap,
  Brain,
  Cloud,
  Smartphone,
  BarChart3,
  Lock,
  Cpu,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      name: 'AI Services',
      description: 'Transform your business with cutting-edge AI solutions',
      icon: Brain,
      href: '/services/ai',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security',
      icon: Shield,
      href: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with expert guidance',
      icon: Cloud,
      href: '/services/cloud-migration',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'DevOps & SRE',
      description: 'Streamline development with modern DevOps practices',
      icon: Zap,
      href: '/services/devops',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Mobile Development',
      description: 'Create powerful mobile applications for all platforms',
      icon: Smartphone,
      href: '/services/mobile-development',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics',
      icon: BarChart3,
      href: '/services/data-analytics',
      color: 'from-yellow-500 to-orange-500'
    }

  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',

      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding cybersecurity implementation. We feel completely secure with their comprehensive protection.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'The cloud migration was seamless. Their team made what seemed impossible look easy.',
      rating: 5
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your current systems and identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive plan tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our expert team implements solutions using cutting-edge technology.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto animate-slide-up">
            Transform your business with cutting-edge AI, cybersecurity, cloud infrastructure, 
            and digital solutions. We deliver innovative technology that drives growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Services Preview Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={service.href}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience in cutting-edge technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-300">Rapid development and deployment with agile methodologies and modern tools.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses that trust Zion Tech Group for their technology needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Now
            </a>
          </div>

          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-blue-400 mb-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;