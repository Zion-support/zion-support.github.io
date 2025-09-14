import React from 'react';
import {
  ChevronRight,
  Users,
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { SEO } from '../components/SEO';
import { trackButtonClick } from '../components/Analytics';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Enterprise Security",
      description: "Military-grade security protocols to protect your data and infrastructure."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Scale",
      description: "Worldwide deployment capabilities with 99.9% uptime guarantee."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience."
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI Solutions & Enterprise Technology"
        description="Leading provider of AI solutions, quantum security, and enterprise technology. Transform your business with cutting-edge artificial intelligence and innovative tech solutions."
      />
      
      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All PRs have been successfully merged and consolidated. We're building the future of technology
              with cutting-edge AI solutions, enterprise-grade security, and unparalleled innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="flex items-center justify-center group"
                onClick={() => trackButtonClick('get_started', 'hero')}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => trackButtonClick('learn_more', 'hero')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through innovative technology solutions and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied clients who trust Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex items-center justify-center group">
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};