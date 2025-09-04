import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/innovative-services-2025"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative 2025</h3>
              <p className="text-gray-600 mb-6">
                Cutting-edge technology solutions for the future of business
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/ai-services"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Artificial intelligence solutions to transform your business
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/it-services"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure and support solutions
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/micro-saas"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6">
                Innovative micro software-as-a-service solutions
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/pricing-2025"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
              <p className="text-gray-600 mb-6">
                Transparent pricing for all our technology services
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-6">
                Tailored technology solutions for your specific needs
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;