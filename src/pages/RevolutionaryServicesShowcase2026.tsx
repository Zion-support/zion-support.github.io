import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cpu, 
  Globe, 
  Lock, 
  Sparkles, 
  TrendingUp,
  CheckCircle,
  Users,
  Award,
  Clock,
  MessageCircle
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: React.ReactNode;
  color: string;
  gradient: string;
  featured: boolean;
  tags: string[];
  caseStudies: number;
  clients: number;
  rating: number;
}

const RevolutionaryServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: '1',
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization challenges.',
      category: 'Quantum Computing',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Optimization problem solving',
        'Quantum cryptography',
        'Quantum simulation services'
      ],
      pricing: {
        starter: 5000,
        professional: 15000,
        enterprise: 50000
      },
      icon: <Zap className="w-8 h-8" />,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      featured: true,
      tags: ['Quantum', 'Computing', 'Innovation'],
      caseStudies: 12,
      clients: 45,
      rating: 4.9
    },
    {
      id: '2',
      title: 'Neural Interface Development',
      description: 'Build next-generation brain-computer interfaces for enhanced human-computer interaction.',
      category: 'Emerging Technology',
      features: [
        'BCI hardware design',
        'Neural signal processing',
        'Machine learning integration',
        'Real-time data analysis',
        'Medical device compliance'
      ],
      pricing: {
        starter: 8000,
        professional: 25000,
        enterprise: 75000
      },
      icon: <Brain className="w-8 h-8" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
      featured: true,
      tags: ['Neural', 'Interface', 'BCI'],
      caseStudies: 8,
      clients: 23,
      rating: 4.8
    },
    {
      id: '3',
      title: 'Synthetic Intelligence Systems',
      description: 'Develop advanced AI systems that go beyond traditional artificial intelligence.',
      category: 'Artificial Intelligence',
      features: [
        'Consciousness modeling',
        'Creative AI development',
        'Autonomous decision making',
        'Emotional intelligence',
        'Self-improving algorithms'
      ],
      pricing: {
        starter: 6000,
        professional: 20000,
        enterprise: 60000
      },
      icon: <Sparkles className="w-8 h-8" />,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      featured: true,
      tags: ['Synthetic', 'Intelligence', 'AI'],
      caseStudies: 15,
      clients: 67,
      rating: 4.9
    },
    {
      id: '4',
      title: 'Autonomous Business Operations',
      description: 'Transform your business with fully autonomous operational systems.',
      category: 'Business Automation',
      features: [
        'Process automation',
        'Decision-making systems',
        'Predictive analytics',
        'Resource optimization',
        'Self-healing infrastructure'
      ],
      pricing: {
        starter: 4000,
        professional: 12000,
        enterprise: 40000
      },
      icon: <Cpu className="w-8 h-8" />,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      featured: false,
      tags: ['Autonomous', 'Business', 'Automation'],
      caseStudies: 20,
      clients: 89,
      rating: 4.7
    },
    {
      id: '5',
      title: 'Advanced Cybersecurity Suite',
      description: 'Next-generation security solutions powered by AI and machine learning.',
      category: 'Cybersecurity',
      features: [
        'AI threat detection',
        'Automated response systems',
        'Zero-trust architecture',
        'Behavioral analytics',
        'Quantum-safe encryption'
      ],
      pricing: {
        starter: 3000,
        professional: 10000,
        enterprise: 35000
      },
      icon: <Shield className="w-8 h-8" />,
      color: 'red',
      gradient: 'from-red-500 to-pink-600',
      featured: true,
      tags: ['Cybersecurity', 'AI', 'Security'],
      caseStudies: 18,
      clients: 156,
      rating: 4.8
    },
    {
      id: '6',
      title: 'Green Technology Solutions',
      description: 'Sustainable technology solutions for a carbon-neutral future.',
      category: 'Sustainability',
      features: [
        'Energy-efficient algorithms',
        'Carbon footprint tracking',
        'Sustainable infrastructure',
        'Green AI development',
        'Environmental monitoring'
      ],
      pricing: {
        starter: 2500,
        professional: 8000,
        enterprise: 25000
      },
      icon: <Globe className="w-8 h-8" />,
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      featured: false,
      tags: ['Green', 'Technology', 'Sustainability'],
      caseStudies: 14,
      clients: 78,
      rating: 4.6
    },
    {
      id: '7',
      title: 'Holographic Reality Systems',
      description: 'Immersive holographic displays and interaction systems.',
      category: 'Immersive Technology',
      features: [
        '3D holographic displays',
        'Gesture recognition',
        'Spatial computing',
        'Mixed reality integration',
        'Interactive projections'
      ],
      pricing: {
        starter: 7000,
        professional: 22000,
        enterprise: 70000
      },
      icon: <Globe className="w-8 h-8" />,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
      featured: false,
      tags: ['Holographic', 'Reality', 'Immersive'],
      caseStudies: 6,
      clients: 19,
      rating: 4.5
    },
    {
      id: '8',
      title: 'Advanced Analytics Platform',
      description: 'Comprehensive data analytics and business intelligence solutions.',
      category: 'Analytics',
      features: [
        'Real-time data processing',
        'Predictive modeling',
        'Visualization dashboards',
        'Machine learning insights',
        'Automated reporting'
      ],
      pricing: {
        starter: 2000,
        professional: 6000,
        enterprise: 20000
      },
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'teal',
      gradient: 'from-teal-500 to-blue-600',
      featured: false,
      tags: ['Analytics', 'Data', 'Insights'],
      caseStudies: 25,
      clients: 203,
      rating: 4.7
    }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      purple: 'text-purple-600 bg-purple-100',
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      orange: 'text-orange-600 bg-orange-100',
      red: 'text-red-600 bg-red-100',
      emerald: 'text-emerald-600 bg-emerald-100',
      indigo: 'text-indigo-600 bg-indigo-100',
      teal: 'text-teal-600 bg-teal-100'
    };
    return colorMap[color] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Technology
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services 2026
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge technology solutions. From quantum computing to neural interfaces, 
              we deliver the future of innovation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Services
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                service.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    <Star className="w-3 h-3" />
                    <span>FEATURED</span>
                  </div>
                </div>
              )}

              {/* Service Header */}
              <div className={`p-8 bg-gradient-to-br ${service.gradient} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-white/20 rounded-xl`}>
                    {service.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getColorClasses(service.color)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{service.caseStudies}</div>
                    <div className="text-xs text-gray-500">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{service.clients}</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{service.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Starting From</h4>
                  <div className="text-3xl font-bold text-gray-900">
                    ${service.pricing.starter.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Learn More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our revolutionary technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Consultation
              <MessageCircle className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2026;
