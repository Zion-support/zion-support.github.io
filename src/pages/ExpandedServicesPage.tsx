import React from 'react';
import { SEO } from '../components/SEO';

export default function ExpandedServicesPage() {
  return (
    <>
      <SEO 
        title="Expanded Services - Zion Tech Group"
        description="Explore our comprehensive range of technology services and solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Expanded Services
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 text-center max-w-3xl mx-auto">
              Discover our comprehensive range of technology services designed to accelerate your business growth and digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AI Development</h3>
                <p className="text-slate-300 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and intelligent automation systems.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Scalable cloud infrastructure and migration services to optimize your business operations.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Cloud Migration</li>
                  <li>• Infrastructure as Code</li>
                  <li>• DevOps Automation</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Cybersecurity</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive security solutions to protect your digital assets and ensure compliance.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Security Audits</li>
                  <li>• Penetration Testing</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Data Analytics</h3>
                <p className="text-slate-300 mb-6">
                  Transform your data into actionable insights with advanced analytics and visualization tools.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Business Intelligence</li>
                  <li>• Data Visualization</li>
                  <li>• Real-time Analytics</li>
                  <li>• Data Warehousing</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Web Development</h3>
                <p className="text-slate-300 mb-6">
                  Modern, responsive web applications built with cutting-edge technologies.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• React Applications</li>
                  <li>• Node.js Backends</li>
                  <li>• Progressive Web Apps</li>
                  <li>• E-commerce Solutions</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Mobile Development</h3>
                <p className="text-slate-300 mb-6">
                  Cross-platform mobile applications that deliver exceptional user experiences.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• iOS Applications</li>
                  <li>• Android Applications</li>
                  <li>• React Native</li>
                  <li>• Flutter Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}