import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.,
      icon: 🤖',
      features: ['Machine Learning, NLP', 'Computer Vision, Predictive Analytics']
    },
    {
      title: 'IT Services,
      description: Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻,
      features: [System Administration', 'Network Security, Cloud Migration', '24/7 Support]
    },
    {
      title: Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.,
      icon: ☁️',
      features: ['AWS/Azure/GCP, DevOps', 'Containerization, Auto-scaling']
    },
    {
      title: 'Cybersecurity,
      description: Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒,
      features: [Threat Detection', 'Compliance, Penetration Testing', 'Security Audits]
    },
    {
      title: Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.,
      icon: 📊',
      features: ['Data Visualization, Business Intelligence', 'Real-time Analytics, Custom Dashboards']
    },
    {
      title: 'Digital Transformation,
      description: Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀,
      features: [Process Automation', 'Workflow Optimization, Digital Strategy', 'Change Management']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen>
      <div className=container mx-auto px-4 py-16">
        <div className="text-center mb-16>
          <h1 className=text-5xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
            We offer comprehensive technology solutions to help your business thrive in the digital age.
            From AI and cybersecurity to cloud infrastructure and digital transformation.
          </p>
        </div>

        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20>
              <div className=text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white>{service.title}</h3>
              <p className=text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className=text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
