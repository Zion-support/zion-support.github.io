import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Bot, BarChart3 } from 'lucide-react';
import Header from '../components/Header';

const Services: React.FC = () => {
  const services = [
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Transform your business processes with intelligent automation that reduces costs by 75% and increases efficiency by 10x.',
      icon: Zap,
      link: '/services/ai-workflow-automation',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: 'Deploy AI-powered virtual assistants that handle customer inquiries 24/7 with 95% accuracy.',
      icon: Bot,
      link: '/services/ai-virtual-assistant',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Turn raw data into actionable insights with advanced machine learning and predictive analytics.',
      icon: BarChart3,
      link: '/services/ai-data-analytics',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with AI-powered security solutions that detect and prevent threats in real-time.',
      icon: Shield,
      link: '/contact',
      color: 'from-red-600 to-orange-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive AI and IT services including workflow automation, virtual assistants, data analytics, and cybersecurity solutions."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge AI and IT solutions designed to transform your business operations and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className="group block"
                >
                  <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full`}>
                    <Icon className="w-12 h-12 mb-6 text-white/90" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-white font-semibold">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
