import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3,
  Rocket,
  Lock,
  Cpu,
  Users,
  Server,
  Globe
} from 'lucide-react';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          price: 'From $5,000',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models'],
        },
        {
          name: 'AI Automation',
          description: 'Automate repetitive tasks and processes with intelligent AI solutions',
          price: 'From $3,000',
          features: ['Process Automation', 'Document Processing', 'Customer Service Bots', 'Workflow Optimization'],
        },
        {
          name: 'AI Consulting',
          description: 'Strategic guidance for implementing AI in your organization',
          price: 'From $2,000',
          features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Team Training'],
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive security audits and vulnerability assessments',
          price: 'From $4,000',
          features: ['Penetration Testing', 'Security Audits', 'Compliance Reviews', 'Risk Assessment'],
        },
        {
          name: 'Security Implementation',
          description: 'Deploy and configure enterprise-grade security solutions',
          price: 'From $6,000',
          features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'Encryption'],
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and incident response services',
          price: 'From $2,500/month',
          features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'],
        },
      ],
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions for growing businesses',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          price: 'From $8,000',
          features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
        },
        {
          name: 'Cloud Architecture',
          description: 'Design and implement scalable cloud architectures',
          price: 'From $10,000',
          features: ['Architecture Design', 'Performance Optimization', 'Cost Optimization', 'Security Integration'],
        },
        {
          name: 'DevOps Services',
          description: 'Implement modern DevOps practices and automation',
          price: 'From $5,000',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Tuning'],
        },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business intelligence',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop a comprehensive data strategy for your organization',
          price: 'From $3,500',
          features: ['Data Assessment', 'Strategy Development', 'Implementation Roadmap', 'Team Training'],
        },
        {
          name: 'Business Intelligence',
          description: 'Build powerful dashboards and reporting systems',
          price: 'From $4,500',
          features: ['Dashboard Development', 'Report Automation', 'Data Visualization', 'KPI Tracking'],
        },
        {
          name: 'Advanced Analytics',
          description: 'Leverage machine learning for predictive insights',
          price: 'From $6,000',
          features: ['Predictive Modeling', 'Statistical Analysis', 'Data Mining', 'Insight Generation'],
        },
      ],
    },
  ];

  const filteredCategories = serviceCategories.filter(category =>
    selectedCategory === 'all' || category.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to drive innovation and accelerate your business growth
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-zion-blue-dark/80 border border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
            />
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-blue-dark/80 text-zion-slate-light hover:bg-zion-blue-dark'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark/80 text-zion-slate-light hover:bg-zion-blue-dark'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-purple/60 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {category.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 text-center">
                  {category.description}
                </p>
                
                <div className="space-y-4">
                  {category.services.map((service, index) => (
                    <div key={index} className="border-l-2 border-zion-cyan/50 pl-4">
                      <h4 className="font-semibold text-white mb-1">{service.name}</h4>
                      <p className="text-sm text-zion-slate-light mb-2">{service.description}</p>
                      <p className="text-zion-cyan font-medium text-sm">{service.price}</p>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/services/${category.id}`}
                  className="mt-6 w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center inline-block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
