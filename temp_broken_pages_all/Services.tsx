import React from 'react';
<<<<<<< HEAD:temp_broken_pages_all/Services.tsx
<<<<<<< HEAD:temp_broken_pages_all/Services.tsx
import { Link } from "react-router-dom";
const Services: React.FC = () => {
=======
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Services() {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Services.tsx
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions and machine learning services to transform your business operations.",
      icon: "🧠"
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge technology solutions and innovations for modern businesses.",
      icon: "💻"
    },
    {
<<<<<<< HEAD:temp_broken_pages_all/Services.tsx
      title: "Web Development",
description: "Modern responsive web applications built with the latest technologies and best practices."
      features: ["React/Next.js", "TypeScript", "Mobile-First", "SEO Optimized"]
      icon: "💻",
color: "from-purple-500 to-pink-600"
    }
    {
      title: "Mobile Applications",
description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"]
      icon: "📱",
color: "from-orange-500 to-red-600"
    }
    {
      title: "Cybersecurity",
description: "Comprehensive security solutions to protect your digital assets and ensure compliance."
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"]
      icon: "🔒",
color: "from-red-500 to-orange-600"
    }
    {
      title: "Data Analytics",
description: "Turn your data into actionable insights with advanced analytics and visualization tools."
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Custom Dashboards"]
      icon: "📊",;
color: "from-indigo-500 to-purple-600";
    };
=======
      title: "Business Consulting",
      description: "Strategic consulting services to help you navigate the digital transformation journey.",
      icon: "🏢"
    }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Services.tsx
  ];

  return (
    <>
      <SEO
        title="Services | Zion AI - AI Solutions and Technology Services"
        description="Explore our comprehensive range of AI solutions, machine learning services, and technology consulting."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <GradientHeading
              level="h1"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </GradientHeading>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<<<<<<< HEAD:temp_broken_pages_all/Services.tsx
      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business needs and challenges to understand your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Our expert team builds and implements your solution with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and optimization to ensure your success.</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
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

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Services</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Services.tsx
      </div>
    </div>
=======
    </>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Services.tsx
  );
}