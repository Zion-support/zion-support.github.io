import React from 'react';
import { Link } from 'react-router-dom';
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
      description: 'Build powerful mobile applications for iOS and Android',
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

  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Over 10 years of experience delivering cutting-edge technology solutions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal disruption to your operations'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 expert support team ready to assist you'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Inc',
      content: 'Outstanding cybersecurity implementation. We feel completely secure with their solutions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, CloudFirst',
      content: 'The cloud migration was seamless. Their team made it look effortless.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-extrabold text-white mb-6 animate-fade-in">
              Leading AI & Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up">
              Transform your business with cutting-edge AI, cybersecurity, and cloud infrastructure solutions. 
              We deliver innovative technology that drives growth and ensures security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive technology solutions for modern businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-slate-800/50 hover:bg-slate-700/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-300">We deliver exceptional results through innovation and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-gray-300">We analyze your needs and challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">Develop a customized solution plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Execute with precision and expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-300">Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-400 mr-3" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;