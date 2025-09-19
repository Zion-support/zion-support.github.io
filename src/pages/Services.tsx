import React from 'react';
import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";

export default function Services() {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group" 
        description="Discover Zion Tech Group's comprehensive AI and tech marketplace services. From AI solutions to enterprise tech services." 
        keywords="AI services, tech marketplace, enterprise solutions, Zion Tech Group services"
        url="https://ziontechgroup.com/services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Our Services</GradientHeading>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions to transform your business and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">AI Services</h3>
              <p className="text-gray-600 mb-4">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <ul className="space-y-2">
                <li>• Machine Learning Models</li>
                <li>• AI Chatbots & Assistants</li>
                <li>• Predictive Analytics</li>
                <li>• Computer Vision</li>
              </ul>
            </div>

            {/* Cloud Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and services to support your business growth and digital transformation.
              </p>
              <ul className="space-y-2">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps & CI/CD</li>
                <li>• Container Orchestration</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your digital assets and ensure compliance.
              </p>
              <ul className="space-y-2">
                <li>• Security Audits</li>
                <li>• Threat Detection</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Transform your data into actionable insights with advanced analytics and visualization tools.
              </p>
              <ul className="space-y-2">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Real-time Analytics</li>
                <li>• Data Warehousing</li>
              </ul>
            </div>

            {/* Software Development */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Custom software solutions built with modern technologies and best practices.
              </p>
              <ul className="space-y-2">
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• API Development</li>
                <li>• Microservices</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic technology consulting to help you make informed decisions and achieve your goals.
              </p>
              <ul className="space-y-2">
                <li>• Technology Strategy</li>
                <li>• Digital Transformation</li>
                <li>• Architecture Design</li>
                <li>• Process Optimization</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">Get started with our AI-powered solutions today.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  );
}