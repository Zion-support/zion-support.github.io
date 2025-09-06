import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that empower businesses 
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
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and predictive modeling."
            icon="📊"
          />
          <ServiceCard
            title="Software Development"
            description="Custom software solutions tailored to your business needs, from web applications to enterprise systems."
            icon="💻"
          />
          <ServiceCard
            title="Consulting"
            description="Strategic technology consulting to help you make informed decisions and optimize your digital transformation."
            icon="🎯"
          />
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Expert Team" 
              description="Our team consists of industry-leading professionals with decades of combined experience in cutting-edge technologies."
            />
            <Card 
              title="Proven Track Record" 
              description="We've successfully delivered hundreds of projects for clients across various industries, from startups to Fortune 500 companies."
            />
            <Card 
              title="24/7 Support" 
              description="Round-the-clock support ensures your systems run smoothly and any issues are resolved quickly and efficiently."
            />
            <Card 
              title="Scalable Solutions" 
              description="Our solutions are designed to grow with your business, ensuring long-term value and adaptability."
            />
            <Card 
              title="Security First" 
              description="We prioritize security in everything we do, implementing best practices and compliance standards."
            />
            <Card 
              title="Innovation Focus" 
              description="We stay ahead of technology trends to provide you with the most advanced and future-proof solutions."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
            <button className="border border-gray-300 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;