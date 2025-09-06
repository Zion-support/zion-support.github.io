import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
=======
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { trackScrollDepth, trackButtonClick } from '../utils/analytics';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxSection from '../components/ParallaxSection';
import TypingAnimation from '../components/TypingAnimation';
import ParticleBackground from '../components/ParticleBackground';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Zap,
  Target
=======
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.',
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: 'Global Scale',
      description: 'Deploy and manage your solutions across multiple regions with our global infrastructure.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: 'Innovation First',
      description: 'Stay ahead with our continuous innovation and cutting-edge technology solutions.',
    },
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure/GCP', 'Containerization', 'DevOps'],
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights',
      features: ['Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. We\'ve seen a 300% increase in efficiency.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'CTO, InnovateLab',
      content: 'Their cloud migration service was flawless. We were up and running in record time with zero downtime.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'VP Engineering, DataFlow',
      content: 'The data analytics platform they built for us has revolutionized how we make business decisions.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  // Track scroll depth
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        trackScrollDepth(25);
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        trackScrollDepth(50);
      } else if (scrollPercent > 75 && scrollPercent <= 90) {
        trackScrollDepth(75);
      } else if (scrollPercent > 90) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Services",
      description: "Custom AI solutions powered by machine learning and deep learning technologies",
      href: "/services/ai-services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive IT infrastructure and digital transformation solutions",
      href: "/services/it-services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions for growing businesses",
      href: "/services/micro-saas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      href: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      href: "/services/cloud-solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform data into actionable insights with advanced analytics",
      href: "/services/data-analytics"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized solutions that deliver exceptional performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals with deep technical expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onMenuClick={() => {}} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <GradientHeading text="Welcome to Zion Tech Group" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Leading provider of AI-powered technology solutions and enterprise services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-600">
                We deliver exceptional results through innovation and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your technology goals.
            </p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
=======
    <>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability."
        keywords="AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation"
        url="/"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        {/* Particle Background */}
        <ParticleBackground particleCount={30} />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  <TypingAnimation
                    text="AI-Powered Solutions"
                    speed={100}
                    delay={1000}
                    className="inline-block"
                  />
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Leading provider of cutting-edge AI, IT, and digital transformation solutions. 
                We help businesses scale, innovate, and succeed in the digital age.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
              <Link
                to="/services"
                onClick={() => trackButtonClick('explore_services', 'hero')}
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackButtonClick('get_consultation', 'hero')}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection speed={0.3} direction="up">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech</span>?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We combine cutting-edge technology with proven expertise to deliver exceptional results.
                  </p>
                </div>
              </ScrollAnimation>
            </ParallaxSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        <BlogSection />

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and discover how our AI-powered solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;