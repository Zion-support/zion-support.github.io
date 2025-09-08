import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useAnalytics } from '../components/EnhancedAnalytics';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  BarChart3, 
  Users, 
  Star,
  CheckCircle,
  Play,
  ExternalLink,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

export default function EnhancedHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { trackEvent, trackPageView } = useAnalytics();

  useEffect(() => {
    setIsVisible(true);
    trackPageView({
      page_title: 'Zion Tech Group - Home',
      page_location: window.location.href,
      page_path: '/',
      content_group1: 'Homepage',
      content_group2: 'Landing'
    });
  }, [trackPageView]);

  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Transform your business with cutting-edge AI solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      href: '/services/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud'],
      href: '/services/cloud-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions',
      features: ['Threat Detection', 'Security Audits', 'Compliance'],
      href: '/services/cybersecurity',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Apps', 'Android Apps', 'React Native'],
      href: '/services/mobile-development',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const microSAASServices = [
    {
      title: 'AI Content Generator',
      description: 'Generate high-quality content with AI',
      price: '$29/mo',
      rating: 4.8,
      users: '12.5K',
      status: 'live'
    },
    {
      title: 'Smart Analytics',
      description: 'Real-time business analytics dashboard',
      price: '$49/mo',
      rating: 4.6,
      users: '8.9K',
      status: 'live'
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive business processes',
      price: '$59/mo',
      rating: 4.5,
      users: '5.6K',
      status: 'beta'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business operations with their AI solutions. Our productivity increased by 300%.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      role: 'CTO',
      content: 'The micro SAAS services are exactly what we needed. Easy to integrate and incredibly powerful.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      role: 'Operations Director',
      content: 'Their cloud migration service was flawless. Zero downtime and seamless transition.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Success Rate', value: '99%', icon: TrendingUp }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleServiceClick = (serviceName: string) => {
    trackEvent({
      action: 'service_click',
      category: 'engagement',
      label: serviceName
    });
  };

  const handleCTAClick = (ctaType: string) => {
    trackEvent({
      action: 'cta_click',
      category: 'conversion',
      label: ctaType
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and Micro SaaS products. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT solutions, Micro SaaS, cybersecurity, cloud migration, mobile development, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Leading provider of cutting-edge AI services, IT solutions, and Micro SaaS products. 
                Accelerate your digital transformation with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                  onClick={() => handleCTAClick('get_started')}
                  asChild
                >
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                  onClick={() => handleCTAClick('watch_demo')}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-blue-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                    asChild
                  >
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Powerful, focused tools that solve specific business problems
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleCTAClick('view_micro_saas')}
              asChild
            >
              <Link to="/enhanced-micro-saas">
                View All Services
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={service.status === 'live' ? 'default' : 'secondary'}>
                      {service.status === 'live' ? 'Live' : 'Beta'}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.users} users</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of companies that have already transformed their operations with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => handleCTAClick('contact_us')}
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              onClick={() => handleCTAClick('view_pricing')}
              asChild
            >
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}