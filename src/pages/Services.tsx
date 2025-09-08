import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Cloud,
  Smartphone,
  Brain,
  Lock,
  Settings,
  BarChart3,
  Code,
  Server
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const serviceCategories = {
    ai: {
      title: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      description: "Harness the power of artificial intelligence to transform your business operations",
      services: [
        {
          title: "Machine Learning Models",
          description: "Custom ML models tailored to your specific business needs and data",
          features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Processing"],
          price: "Starting at $5,000"
        },
        {
          title: "Natural Language Processing",
          description: "Advanced text analysis and language understanding capabilities",
          features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Chatbot Development"],
          price: "Starting at $3,000"
        },
        {
          title: "Computer Vision",
          description: "Image and video analysis for automated visual recognition",
          features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"],
          price: "Starting at $4,000"
        },
        {
          title: "AI Consulting",
          description: "Strategic guidance on AI implementation and digital transformation",
          features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "Training & Support"],
          price: "Starting at $2,000"
        }
      ]
    },
    it: {
      title: "IT Services",
      icon: <Shield className="w-8 h-8" />,
      description: "Comprehensive IT solutions to secure, optimize, and modernize your infrastructure",
      services: [
        {
          title: "Cybersecurity",
          description: "Protect your business from evolving cyber threats with advanced security measures",
          features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Incident Response"],
          price: "Starting at $2,500"
        },
        {
          title: "Cloud Migration",
          description: "Seamlessly move your infrastructure to the cloud for better scalability and cost efficiency",
          features: ["AWS/Azure/GCP", "Data Migration", "Security Setup", "Performance Optimization"],
          price: "Starting at $5,000"
        },
        {
          title: "Network Management",
          description: "Optimize and monitor your network infrastructure for maximum performance",
          features: ["Network Design", "Performance Monitoring", "Troubleshooting", "24/7 Support"],
          price: "Starting at $1,500"
        },
        {
          title: "IT Support",
          description: "Comprehensive technical support to keep your systems running smoothly",
          features: ["Help Desk", "System Maintenance", "Software Updates", "User Training"],
          price: "Starting at $1,000"
        }
      ]
    },
    saas: {
      title: "Micro SAAS",
      icon: <Globe className="w-8 h-8" />,
      description: "Custom software solutions designed to scale with your business growth",
      services: [
        {
          title: "Custom Web Applications",
          description: "Tailored web solutions built with modern technologies and best practices",
          features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
          price: "Starting at $8,000"
        },
        {
          title: "Mobile Applications",
          description: "Native and cross-platform mobile apps for iOS and Android",
          features: ["iOS Development", "Android Development", "Cross-platform", "App Store Deployment"],
          price: "Starting at $10,000"
        },
        {
          title: "API Development",
          description: "Robust APIs to connect your systems and enable third-party integrations",
          features: ["RESTful APIs", "GraphQL", "Authentication", "Documentation"],
          price: "Starting at $3,000"
        },
        {
          title: "System Integration",
          description: "Connect disparate systems to create a unified, efficient workflow",
          features: ["Legacy Integration", "Third-party APIs", "Data Synchronization", "Workflow Automation"],
          price: "Starting at $4,000"
        }
      ]
    }
  };

  const currentCategory = serviceCategories[activeTab as keyof typeof serviceCategories];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-12">
              <div className="text-blue-400 mb-4 flex justify-center">
                {currentCategory.icon}
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {currentCategory.title}
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategory.services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-blue-200 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-300">{service.price}</span>
                    <button className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 px-4 py-2 rounded-full hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-blue-200 text-sm">We understand your business goals, challenges, and requirements through detailed consultation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-blue-200 text-sm">We develop a comprehensive strategy and technical roadmap tailored to your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-blue-200 text-sm">Our expert team builds your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-blue-200 text-sm">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 text-lg font-semibold">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/contact" className="border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;