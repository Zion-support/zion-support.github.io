import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

// Service card component with enhanced design
const ServiceCard = memo<{ 
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[];
    category: string;
    popular?: boolean;
  };
  onSelect: (service: any) => void;
}>(({ service, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300
        hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/20
        transform hover:-translate-y-2 cursor-pointer
        ${service.popular ? 'border-blue-400 bg-blue-500/10' : 'border-white/20'}
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-blue-200 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
        
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-blue-300">
              <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Category filter component
const CategoryFilter = memo<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}>(({ categories, activeCategory, onCategoryChange }) => (
  <div className="flex flex-wrap gap-4 justify-center mb-12">
    <button
      onClick={() => onCategoryChange('All')}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
        activeCategory === 'All'
          ? 'bg-blue-600 text-white'
          : 'bg-white/10 text-blue-300 hover:bg-white/20'
      }`}
    >
      All Services
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          activeCategory === category
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 text-blue-300 hover:bg-white/20'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
));

CategoryFilter.displayName = 'CategoryFilter';

const ServicesPage: React.FC = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions that transform your business operations and drive intelligent decision-making.',
      icon: '🤖',
      price: 'From $5,000',
      category: 'AI',
      popular: true,
      features: [
        'Custom AI Models',
        'Machine Learning Pipelines',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Integration'
      ]
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: '🌐',
      price: 'From $3,000',
      category: 'Web',
      features: [
        'React/Next.js Development',
        'Responsive Design',
        'API Integration',
        'Performance Optimization',
        'SEO Optimization',
        'Progressive Web Apps'
      ]
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      price: 'From $4,000',
      category: 'Mobile',
      features: [
        'React Native Development',
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ]
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️',
      price: 'From $2,500',
      category: 'Cloud',
      features: [
        'AWS/Azure/GCP Setup',
        'Cloud Migration',
        'Auto-scaling',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      price: 'From $3,500',
      category: 'Security',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Training',
        'Incident Response',
        'Compliance Support'
      ]
    },
    {
      id: 6,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.',
      icon: '📊',
      price: 'From $2,000',
      category: 'Analytics',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Predictive Analytics',
        'Data Warehousing',
        'ETL Processes',
        'Custom Dashboards'
      ]
    }
  ];

  const categories = ['All', 'AI', 'Web', 'Mobile', 'Cloud', 'Security', 'Analytics'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;