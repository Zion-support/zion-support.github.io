import React from 'react';
import { SEO } from "@/components/SEO";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our expert team for technology solutions, AI services, and IT consulting. We're here to help transform your business."
        keywords="contact, technology consulting, AI services, IT solutions, support"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Get in touch with our expert team for technology solutions, AI services, and IT consulting. 
            We're here to help transform your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-zion-blue-light mb-6">
              Ready to transform your business with cutting-edge technology? 
              Our team of experts is here to help you succeed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-zion-blue-light mb-4">contact@ziontechgroup.com</p>
                <a 
                  href="mailto:contact@ziontechgroup.com"
                  className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-zion-blue-light mb-4">+1 (555) 123-4567</p>
                <a 
                  href="tel:+15551234567"
                  className="bg-zion-purple hover:bg-zion-purple/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;