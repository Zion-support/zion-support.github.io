import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Cutting-Edge Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            At Zion Tech Group, we offer a comprehensive suite of technology solutions designed to empower your business
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
            title="DevOps & Automation"
            description="Streamline your development and operations with continuous integration, delivery, and automated workflows."
            icon="⚙️"
          />
          <ServiceCard
            title="Blockchain Solutions"
            description="Leverage decentralized technologies for secure transactions, smart contracts, and transparent operations."
            icon="🔗"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and data visualization."
            icon="📊"
          />
        </div>

        {/* Why Choose Our Services */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Zion Tech Group for Your Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Expert Team" description="Our specialists are leaders in their respective fields." />
            <Card title="Tailored Solutions" description="Custom services designed to meet your unique business needs." />
            <Card title="Innovation Driven" description="Always at the forefront of technological advancements." />
            <Card title="Reliable Support" description="Dedicated 24/7 support to ensure seamless operations." />
            <Card title="Scalable & Secure" description="Solutions built for growth and robust security." />
            <Card title="Proven Track Record" description="Successful implementations across diverse industries." />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our expert services can drive your success.
          </p>
          <Button variant="primary" size="large" onClick={() => alert('Get a Free Consultation!')}>
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;