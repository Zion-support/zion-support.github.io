import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps", "Monitoring"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation strategies and implementation.",
      features: ["Process Automation", "Data Analytics", "Integration", "Change Management"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets.",
      features: ["Security Assessment", "Threat Detection", "Compliance", "Incident Response"]
    },
    {
      title: "Blockchain Solutions",
      description: "Blockchain technology solutions for various industries.",
      features: ["Smart Contracts", "DeFi", "NFTs", "Supply Chain"]
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things solutions for connected devices.",
      features: ["Device Management", "Data Collection", "Analytics", "Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-foreground/60 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
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