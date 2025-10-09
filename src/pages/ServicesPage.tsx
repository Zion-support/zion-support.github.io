import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Comprehensive AI and IT Solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Services</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions including machine learning, natural language processing, 
              and computer vision.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Marketing</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary AI-powered marketing automation, ad optimization, and content generation.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Automated Ad Optimization</li>
              <li>• AI Content Generation</li>
              <li>• Customer Segmentation</li>
              <li>• Email Marketing Automation</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Automation</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation of business processes with decision-making capabilities and exception handling.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Workflow Automation</li>
              <li>• Decision-Making AI</li>
              <li>• Exception Handling</li>
              <li>• Process Optimization</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-3">Micro SAAS Solutions</h3>
            <p className="text-gray-300 mb-4">
              Affordable, powerful AI-driven tools for modern businesses. 30+ ready-to-use applications.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• AI Content Generation</li>
              <li>• Smart CRM & Analytics</li>
              <li>• Marketing Automation</li>
              <li>• Productivity Tools</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-bold text-white mb-3">IT Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 expert support.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Cloud Migration</li>
              <li>• Infrastructure as Code</li>
              <li>• Auto-scaling</li>
              <li>• Disaster Recovery</li>
            </ul>
          </div>

          <div className="cyber-card hologram-card p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Advanced security solutions to protect your business from evolving cyber threats.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Threat Detection</li>
              <li>• Security Monitoring</li>
              <li>• Compliance Management</li>
              <li>• Incident Response</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us today to discuss your specific needs and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="cyber-button">
              ✉️ Email Us
            </a>
            <a href="/contact" className="cyber-button">
              💬 Contact Form
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;