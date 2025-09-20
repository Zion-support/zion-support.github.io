import React from 'react';
<<<<<<<< HEAD:temp_broken_pages_all/Services.tsx
import { Link } from "react-router-dom";
const Services: React.FC = () => {
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Services() {
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
      </div>
    </div>
    </>
  );
}