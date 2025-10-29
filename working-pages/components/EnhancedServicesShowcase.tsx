import React from 'react';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react';
const EnhancedServicesShowcase: React.FC = () => {
    const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '300% ROI',
    },
    {
      title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-400',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '99.9% Uptime',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-400',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches',
    },
    {
      title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-400',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '95% Efficiency',
    }
  ];

  return (
    <section$1>
        <div$2>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Our Core Services
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (</div>
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{service.stats}</div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
      stats: '95% Efficiency',}}
  ]
return(<section className="py-20 px-4">)<section>
        <div>
          <div>
            <h2>Section Title</h2>
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
        </div>
      </section>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-16"></div>
          <h2>Our Core Services;</h2>
          </h2>
          <p>Comprehensive AI and IT solutions designed to transform your business and drive innovation;</p>
          </p>
        </div>
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
          {services.map((service, index) => (</div>} <div key={index}className="cyber-card hologram-card p-6 group hover: scale-105 transition-all duration-300"></div>,
              <div className="flex items-center mb-4"></div>
                <service>
                </service><div />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{service.stats</div>}</div>
              </div>
              <p className="text-gray-300 mb-4">{service.description</p>}</p>
              <ul>
                {service.features.map((feature, featureIndex) => (} <li>
                    <CheckCircle />

                    {feature} </li>
                ))}

              </ul>
              <a>
                Learn More </a><ArrowRight>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="cyber-button inline-flex items-center"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
    </section>
  );
};

export default EnhancedServicesShowcase;
