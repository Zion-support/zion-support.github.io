<<<<<<< HEAD
import React from 'react';''
import ServiceCard from '../components/ServiceCard';''
import Card from '../components/Card';'
const Services: React.FC = () => {
  const services = [
    {'
      title: 'AI Solutions',''
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',''
      icon: '🤖',']'
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']'
=======
import React from 'react';
<<<<<<< HEAD
=======
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca

const Services: React.FC = () => {
  const services = [
    {
<<<<<<< HEAD
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
=======
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: '🤖',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
    },
    {'
      title: 'Cybersecurity',''
      description: 'Comprehensive security solutions to protect your digital assets.',''
      icon: '🔒',''
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']'
    },
    {'
      title: 'Cloud Infrastructure',''
      description: 'Scalable cloud solutions for modern businesses.',''
      icon: '☁️',''
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Automation', 'Cost Optimization']'
    },
    {'
      title: 'Digital Transformation',''
      description: 'Transform your business processes with digital solutions.',''
      icon: '🔄',''
      features: ['Process Automation', 'Data Analytics', 'Workflow Optimization', 'Change Management']'
    },
    {'
      title: 'IT Consulting',''
      description: 'Expert guidance for your technology strategy.',''
      icon: '💼',''
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Implementation Support']'
    },
<<<<<<< HEAD
    {'
      title: 'Support & Maintenance',''
      description: 'Ongoing support to keep your systems running smoothly.',''
      icon: '🛠️',''
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Technical Support']'
    }
  ];

  return ('
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
</div>"
        <div className="text-center mb-16">"
</div>"
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
=======
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support to keep your systems running smoothly.',
      icon: '🛠️',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Technical Support']
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
          </p>
        </div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
</div>
            <ServiceCard;
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
</ServiceCard>
        </div>
"
        <Card className="text-center">"
</Card>"
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>""
          <p className="text-lg text-gray-300 mb-8">"
</p>
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
            <a href="/contact" className="inline-block">"
</a>"
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
</button>
              </button>
            </a>"
            <a href="/pricing" className="inline-block">"
</a>"
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
</button>
              </button>
            </a>
          </div>
        </Card>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
      </div>
    </div>)"