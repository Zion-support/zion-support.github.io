import React, { memo } from 'react';

// Service card component for better performance
const ServiceCard = memo<{ title: string; description: string }>(({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-blue-200">{description}</p>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const Home: React.FC = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Driving innovation with AI, IT, and Micro SaaS solutions to empower businesses worldwide.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Get Started
            </a>
            <a href="/services" className="px-8 py-3 border border-blue-400 text-blue-300 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors shadow-lg">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI Services" 
              description="Advanced AI-powered solutions for modern businesses" 
            />
            <ServiceCard 
              title="IT Services" 
              description="Comprehensive managed IT and cybersecurity solutions" 
            />
            <ServiceCard 
              title="Micro SaaS" 
              description="Scalable software solutions for growing businesses" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Partner with Zion Tech Group to unlock your full potential with our advanced AI, IT, and Micro SaaS solutions.
          </p>
          <a href="/contact" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';
export default Home;