import React, { memo } from 'react';

// Service card component for better performance
const ServiceCard = memo<{ title: string; description: string }>(({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-blue-200">{description}</p>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const Home = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Your trusted partner for cutting-edge technology solutions and digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Web Development"
            description="Modern, responsive web applications built with the latest technologies."
          />
          <ServiceCard
            title="Mobile Apps"
            description="Native and cross-platform mobile applications for iOS and Android."
          />
          <ServiceCard
            title="Cloud Solutions"
            description="Scalable cloud infrastructure and migration services."
          />
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;