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
  const services = [
    {
      title: 'AI Services',
      description: 'Advanced AI-powered solutions for modern businesses'
    },
    {
      title: 'IT Services', 
      description: 'Comprehensive managed IT and cybersecurity solutions'
    },
    {
      title: 'Micro SAAS',
      description: 'Scalable software solutions for growing businesses'
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        Welcome to Zion Tech Group
      </h2>
      <p className="text-xl text-blue-200 mb-8">
        Innovative IT Solutions & AI Services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="mt-12">
        <p className="text-sm text-blue-300">
          Successfully built and deployed on Netlify! 🚀
        </p>
      </div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;