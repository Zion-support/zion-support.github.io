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

    }
  ];

  return (
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