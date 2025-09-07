import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Zap, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import TypingAnimation from '../components/TypingAnimation';
import ScrollAnimation from '../components/ScrollAnimation';
// import ParallaxSection from '../components/ParallaxSection';
import ParticleBackground from '../components/ParticleBackground';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

const Home: React.FC = ()  => {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <ParticleBackground />
      
      {/* Hero Section */
}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeIn" delay={0}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <TypingAnimation
                text="Zion Tech Group"
                speed={100}
                className="text-blue-600 dark:text-blue-400"
              />
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideUp" delay={500}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional technology solutions for your business needs. 
              We help you build, scale, and optimize your digital infrastructure.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive technology solutions that drive business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeIn" delay={0}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Fast & Reliable
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick delivery and reliable solutions that meet your business requirements.
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={200}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Secure & Scalable
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-grade security and scalable solutions for growing businesses.
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={400}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experienced professionals dedicated to your success and growth.
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="slideUp" delay={0}>
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Leverage artificial intelligence to automate processes and gain insights.
                </p>
                <Link href="/services/ai-services" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn More →
                </Link>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={200}>
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Cloud Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Scalable cloud infrastructure and migration services.
                </p>
                <Link href="/services/cloud-services" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn More →
                </Link>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={400}>
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Cybersecurity
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Protect your business with comprehensive security solutions.
                </p>
                <Link href="/services/cybersecurity" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Learn More →
                </Link>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;