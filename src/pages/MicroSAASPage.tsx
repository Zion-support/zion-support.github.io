import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Powerful AI-driven tools for modern businesses
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Choose from 30+ ready-to-use applications designed to streamline your workflow, 
            boost productivity, and drive growth. All tools include AI-powered features and 
            are ready to deploy in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today to discuss your specific needs and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
              >
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MicroSAASPage;