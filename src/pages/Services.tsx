import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
            and drive innovation across all sectors.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI & Machine Learning"
              description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
              icon="🤖"
              link="/services/ai-services"
            />
            <Card
              title="Micro SaaS Development"
              description="End-to-end product development with billing, auth, and analytics for scalable micro SaaS solutions."
              icon="🚀"
              link="/services/micro-saas"
            />
            <Card
              title="IT Services"
              description="Cloud migration, DevOps, and security solutions engineered for uptime and efficiency."
              icon="⚙️"
              link="/services/it-services"
            />
            <Card
              title="DevOps & Automation"
              description="CI/CD pipelines, infrastructure automation, and site reliability engineering services."
              icon="🔄"
              link="/services/devops"
            />
            <Card
              title="Data Science"
              description="Machine learning, predictive analytics, and business intelligence solutions."
              icon="📊"
              link="/services/data-science"
            />
            <Card
              title="Mobile Development"
              description="Native and cross-platform mobile app development for iOS and Android."
              icon="📱"
              link="/services/mobile-development"
            />
            <Card
              title="Blockchain Solutions"
              description="Smart contracts, DeFi protocols, and Web3 applications for the decentralized future."
              icon="⛓️"
              link="/services/blockchain"
            />
            <Card
              title="Data Analytics"
              description="Business intelligence, predictive modeling, and real-time analytics for data-driven decisions."
              icon="📈"
              link="/services/data-analytics"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how our services can help transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, icon, link }: { title: string; description: string; icon: string; link: string }) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-200 hover:border-blue-300">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Services;