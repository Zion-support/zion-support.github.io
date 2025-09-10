import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap, Shield, Globe, Lightbulb, Code, Database, Smartphone,
  Cloud, Users, Award, CheckCircle, Star, ArrowRight,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import GradientHeading from '../components/GradientHeading';

// Card component
const Card = ({ title, href, description, icon }: { title: string; href: string; description: string; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={href}
      className="text-blue-600 hover:text-blue-800 font-medium"
    >
      Learn More →
    </Link>
  </div>
);

// FeatureCard component
const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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

  const serviceCards = [
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

      // Track scroll depth (placeholder function)
      if (scrollPercent > 25 && scrollPercent <= 50) {
        console.log('Scroll depth: 25%');
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        console.log('Scroll depth: 50%');
      } else if (scrollPercent > 75 && scrollPercent <= 90) {
        console.log('Scroll depth: 75%');
      } else if (scrollPercent > 90) {
        console.log('Scroll depth: 100%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'AI Services',
      description: 'Custom AI solutions powered by machine learning and deep learning technologies',
      href: '/services/ai-services',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      href: '/services/it-services',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Micro SaaS',
      description: 'Scalable software-as-a-service solutions for growing businesses',
      href: '/services/micro-saas',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      href: '/services/cybersecurity',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      href: '/services/cloud-solutions',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics',
      href: '/services/data-analytics',
    },
  ];

  const statsData = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const featureItems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized solutions that deliver exceptional performance',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Experienced professionals with deep technical expertise',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

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
              {statsData.map((stat, index) => (
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
              {featureItems.map((feature, index) => (
                <div key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white rounded-lg">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
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
              {serviceCards.map((service, index) => (
                <div key={index} className="p-8 hover:shadow-lg transition-shadow bg-white rounded-lg">
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
                </div>
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
                <div key={index} className="p-6 bg-white rounded-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help you achieve your technology goals.
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
  );
};

export default Home;