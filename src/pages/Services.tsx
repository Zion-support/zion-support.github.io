import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'AI Services',
      description: 'Custom AI solutions powered by machine learning and deep learning technologies',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      href: '/services/ai-services'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      features: [
        'System Architecture',
        'Database Design',
        'API Development',
        'Legacy System Migration',
        'Performance Optimization',
        'Technical Consulting'
      ],
      href: '/services/it-services'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Micro SaaS',
      description: 'Scalable software-as-a-service solutions for growing businesses',
      features: [
        'SaaS Architecture',
        'Multi-tenancy',
        'Subscription Management',
        'Payment Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      href: '/services/micro-saas'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Threat Detection',
        'Data Encryption',
        'Security Training'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Container Orchestration',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      href: '/services/cloud-solutions'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics',
      features: [
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Visualization',
        'ETL Pipelines',
        'Machine Learning Models',
        'Custom Reports'
      ],
      href: '/services/data-analytics'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - Zion Tech Group"
        description="Discover our comprehensive range of technology services including AI solutions, IT services, cybersecurity, cloud solutions, and more."
        keywords="AI services, IT services, cybersecurity, cloud solutions, data analytics, micro SaaS, technology consulting"
        url="/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive technology solutions designed to accelerate your business growth 
                    and digital transformation.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="scale"
                    delay={index * 0.1}
                    className="group"
                  >
                    <Card className="h-full p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">
                      <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="outline" className="w-full group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300" asChild>
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <ScrollAnimation animation="fadeIn" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and find the perfect solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;