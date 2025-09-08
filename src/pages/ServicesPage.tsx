<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models',
      icon: '🤖',
      price: 'From $5,000',
      features: ['Custom AI Models', 'Machine Learning', 'Data Analysis', 'AI Integration']
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    },
    {
      id: 2,
      title: 'Web Development',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      description: 'Modern, responsive web applications',
      icon: '🌐',
      price: 'From $3,000',
      features: ['React/Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization']
<<<<<<< HEAD
=======
=======
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      icon: '🌐',
      price: 'From $3,000',
      category: 'Development',
      features: [
        'React/Next.js Applications',
        'Full-Stack Development',
        'API Integration',
        'Performance Optimization',
        'SEO Optimization',
        'Progressive Web Apps'
      ]
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    },
    {
      id: 3,
      title: 'Mobile Development',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      description: 'iOS and Android mobile applications',
      icon: '📱',
      price: 'From $4,000',
      features: ['React Native', 'Native Development', 'Cross-Platform', 'App Store Deployment']
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: '☁️',
      price: 'From $2,000',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Monitoring']
<<<<<<< HEAD
=======
=======
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: '📱',
      price: 'From $4,000',
      category: 'Development',
      features: [
        'React Native Development',
        'Native iOS/Android',
        'Cross-Platform Solutions',
        'App Store Deployment',
        'Push Notifications',
        'Offline Capabilities'
      ]
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that ensure reliability, security, and optimal performance.',
      icon: '☁️',
      price: 'From $2,000',
      category: 'Infrastructure',
      features: [
        'AWS/Azure/GCP Setup',
        'DevOps & CI/CD',
        'Containerization',
        'Auto-scaling',
        'Monitoring & Logging',
        'Disaster Recovery'
      ]
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    },
    {
      id: 5,
      title: 'Cybersecurity',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      description: 'Comprehensive security solutions',
      icon: '🔒',
      price: 'From $3,500',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
<<<<<<< HEAD
=======
=======
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: '🔒',
      price: 'From $3,500',
      category: 'Security',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Risk Assessment'
      ]
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    },
    {
      id: 6,
      title: 'Data Analytics',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      description: 'Business intelligence and data visualization',
      icon: '📊',
      price: 'From $2,500',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
        {/* Header */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs. From AI development to cloud infrastructure, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-blue-200 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-blue-200 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/contact?service=${service.title}`}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-2 px-4 rounded-lg text-center block transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-cyan-400 hover:bg-cyan-500 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
<<<<<<< HEAD
=======
=======
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      icon: '📊',
      price: 'From $2,500',
      category: 'Analytics',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Warehousing',
        'ETL Processes'
      ]
    },
    {
      id: 7,
      title: 'Micro SaaS Development',
      description: 'Scalable software-as-a-service solutions designed for modern businesses.',
      icon: '🚀',
      price: 'From $4,500',
      category: 'SaaS',
      popular: true,
      features: [
        'Custom SaaS Platforms',
        'Multi-tenant Architecture',
        'Subscription Management',
        'API Development',
        'Third-party Integrations',
        'Scalable Infrastructure'
      ]
    },
    {
      id: 8,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving.',
      icon: '⚛️',
      price: 'From $10,000',
      category: 'AI',
      features: [
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Optimization Problems',
        'Cryptography',
        'Research & Development',
        'Quantum Simulation'
      ]
    }
  ];

  const categories = ['AI', 'Development', 'Infrastructure', 'Security', 'Analytics', 'SaaS'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          Comprehensive Technology Solutions
        </p>
        <p className="text-lg text-blue-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          From AI and machine learning to cloud infrastructure and cybersecurity, we provide end-to-end 
          technology solutions that drive innovation and growth for your business.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4">
        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
            <p className="text-blue-200">We analyze your needs and requirements to understand your goals.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
            <p className="text-blue-200">We create a detailed roadmap and timeline for your project.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Development</h3>
            <p className="text-blue-200">Our expert team builds your solution with regular updates.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Deployment</h3>
            <p className="text-blue-200">We launch your solution and provide ongoing support.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

export default ServicesPage;