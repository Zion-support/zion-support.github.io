import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Card = ({ title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation Services"
              description="End-to-end implementation of technology solutions tailored to your business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your business requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Government</h3>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mt-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's discuss how our services can help transform your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;