import React from "react";

// ServiceCard component
const ServiceCard = ({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
  href: string; 
  title: string; 
  description: string; 
  bullets: string[]; 
  icon: string; 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {bullet}
        </li>
      ))}
    </ul>
    <a 
      href={href}
      className="text-blue-600 hover:text-blue-800 font-medium"
    >
      Learn More →
    </a>
  </div>
);

// CTA component
const CTA = () => (
  <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
    <p className="text-xl mb-6">Let's discuss how our AI-powered solutions can drive your success.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/contact"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Started
      </a>
      <a 
        href="/contact"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
      >
        Schedule Consultation
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-600">
              Cutting-edge AI solutions for your business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600">
              Comprehensive IT solutions and support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and services.
            </p>
          </div>
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
