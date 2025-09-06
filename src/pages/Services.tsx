import React from 'react';
<<<<<<< HEAD
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Cutting-Edge Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            At Zion Tech Group, we offer a comprehensive suite of technology solutions designed to empower your business
            and drive innovation across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="DevOps & Automation"
            description="Streamline your development and operations with continuous integration, delivery, and automated workflows."
            icon="⚙️"
          />
          <ServiceCard
            title="Blockchain Solutions"
            description="Leverage decentralized technologies for secure transactions, smart contracts, and transparent operations."
            icon="🔗"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and data visualization."
            icon="📊"
          />
        </div>

        {/* Why Choose Our Services */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Zion Tech Group for Your Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Expert Team" description="Our specialists are leaders in their respective fields." />
            <Card title="Tailored Solutions" description="Custom services designed to meet your unique business needs." />
            <Card title="Innovation Driven" description="Always at the forefront of technological advancements." />
            <Card title="Reliable Support" description="Dedicated 24/7 support to ensure seamless operations." />
            <Card title="Scalable & Secure" description="Solutions built for growth and robust security." />
            <Card title="Proven Track Record" description="Successful implementations across diverse industries." />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our expert services can drive your success.
          </p>
          <Button variant="primary" size="large" onClick={() => alert('Get a Free Consultation!')}>
            Get a Free Consultation
          </Button>
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Services",
      description: "Advanced artificial intelligence solutions to automate and optimize your business processes.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our analytics solutions.",
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: ["React Applications", "Node.js Backend", "API Development", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From AI and cloud solutions to cybersecurity and mobile development, we provide end-to-end technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how our services can help transform your business.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            View Pricing
            <ArrowRight className="ml-2" size={20} />
          </Link>
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
        </div>
      </div>
    </div>
  );
};

export default Services;