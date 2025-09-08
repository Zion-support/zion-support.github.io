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

    },
    {
      id: 3,
      title: 'Mobile Development',

    },
    {
      id: 5,
      title: 'Cybersecurity',

    },
    {
      id: 6,
      title: 'Data Analytics',


export default ServicesPage;