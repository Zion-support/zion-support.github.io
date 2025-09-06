import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including natural language processing, computer vision, and predictive analytics.",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Insights"],
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions that grow with your business needs.",
      features: ["AWS / Azure / GCP", "DevOps", "Microservices", "Auto-scaling"],
      icon: "☁️",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["React / Next.js", "TypeScript", "Mobile-First", "SEO Optimized"],
      icon: "💻",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS / Android", "React Native", "Flutter", "App Store Optimization"],
      icon: "📱",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      icon: "🔒",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Custom Dashboards"],
      icon: "📊",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
<<<<<<< HEAD
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600">Leverage artificial intelligence to automate processes and gain insights.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600">Modern, responsive web applications built with cutting-edge technologies.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud infrastructure and deployment solutions.</p>
=======
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link
              to="/pricing"
              className="border border-gray-300 hover:border-gray-400 text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;