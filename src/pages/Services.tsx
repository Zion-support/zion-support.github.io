import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Services"
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
              description="Scale your operations with robust cloud solutions, migration services, and infrastructure management."
              icon="☁️"
            />
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Digital Transformation" description="Modernize your business processes and operations with digital solutions." />
            <Card title="Data Analytics" description="Turn your data into actionable insights with advanced analytics and reporting." />
            <Card title="Mobile Development" description="Create powerful mobile applications for iOS and Android platforms." />
            <Card title="Web Development" description="Build responsive, scalable web applications and websites." />
            <Card title="IT Consulting" description="Strategic technology consulting to optimize your IT infrastructure." />
            <Card title="24/7 Support" description="Round-the-clock technical support and maintenance services." />
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your needs and requirements to understand your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan and timeline for implementation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">We build and implement the solution using best practices and modern technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and maintenance to ensure optimal performance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
