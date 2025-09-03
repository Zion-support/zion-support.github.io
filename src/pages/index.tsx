import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap,
  Shield,
  Brain,
  Globe,
  TrendingUp
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI, cloud computing, cybersecurity, and digital transformation solutions for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Leading the future of technology with cutting-edge AI, cloud computing, and cybersecurity solutions that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-lg flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.
              </p>
              <Link to="/services/ai-analytics" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Computing</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud solutions that provide flexibility, security, and cost-effectiveness for your business.
              </p>
              <Link to="/services/cloud-devops" className="text-green-600 hover:text-green-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Protect your digital assets with advanced security solutions and threat intelligence.
              </p>
              <Link to="/services/cybersecurity" className="text-red-600 hover:text-red-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT & Edge Computing</h3>
              <p className="text-gray-600 mb-6">
                Connect and optimize your devices with intelligent IoT solutions and edge computing platforms.
              </p>
              <Link to="/services/iot-edge" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">
                Transform your business processes with modern technologies and innovative solutions.
              </p>
              <Link to="/solutions" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance and strategic planning to help you navigate the complex technology landscape.
              </p>
              <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of experience across various industries and technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                We deliver measurable outcomes that drive business growth and operational efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Satisfaction</h3>
              <p className="text-gray-600">
                Our clients consistently rate us highly for quality, reliability, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;