<<<<<<< HEAD
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Enhanced service card component with animations and better UX
const ServiceCard = memo<{ 
  title: string; 
  description: string; 
  icon: string;
  link: string;
  features: string[];
}>(({ title, description, icon, link, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={link}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 
        hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/20
        transition-all duration-300 transform hover:-translate-y-2
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}>
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-blue-200 mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-xs text-blue-300 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
          Learn more →
        </div>
=======
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      </div>
    </Link>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Stats component for social proof
const StatsSection = memo(() => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });
  
  useEffect(() => {
    const animateCounts = () => {
      const targets = { projects: 500, clients: 150, years: 8 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    };
    
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">{counts.projects}+</div>
        <div className="text-blue-300">Projects Delivered</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">{counts.clients}+</div>
        <div className="text-blue-300">Happy Clients</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">{counts.years}+</div>
        <div className="text-blue-300">Years Experience</div>
      </div>
    </div>
  );
});

<<<<<<< HEAD
StatsSection.displayName = 'StatsSection';

const Home: React.FC = memo(() => {
  const services = [
    {
      title: 'AI Services',
      description: 'Revolutionary AI-powered solutions that transform businesses and drive innovation',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services', 
      description: 'Comprehensive managed IT solutions with 24/7 support and cutting-edge security',
      icon: '💻',
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'Data Backup']
    },
    {
      title: 'Micro SAAS',
      description: 'Scalable software solutions designed for modern businesses and startups',
      icon: '🚀',
      link: '/micro-saas',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent animate-pulse">
          Zion Tech Group
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          Next-Generation Technology Solutions
        </p>
        <p className="text-lg text-blue-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering businesses with cutting-edge AI, robust IT infrastructure, and innovative Micro SaaS solutions. 
          Transform your digital future with our expert team.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get Started Today
          </Link>
          <Link 
            to="/services" 
            className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              features={service.features}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Success Message */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
          <span className="text-green-400 mr-2">✅</span>
          <p className="text-green-300 font-medium">
            Successfully built and deployed on Netlify! 🚀
          </p>
        </div>
      </div>
    </div>
  );
});

=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
Home.displayName = 'Home';

export default Home;