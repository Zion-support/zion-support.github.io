import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact</span> Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and see how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">hello@ziontechgroup.com</p>
                    <p className="text-gray-300">support@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Office</h4>
                    <p className="text-gray-300">
                      123 Tech Street<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">500+ successful projects delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 dedicated support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Expert team of 50+ professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge technology stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about our services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary based on complexity and scope. Simple web applications typically take 4-8 weeks, 
                while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Do you provide ongoing support?</h3>
              <p className="text-gray-300">
                Yes! We offer comprehensive maintenance and support packages including bug fixes, updates, 
                performance monitoring, and feature enhancements. Our support team is available 24/7.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">What technologies do you use?</h3>
              <p className="text-gray-300">
                We use cutting-edge technologies including React, Node.js, Python, AI/ML frameworks, 
                blockchain platforms, cloud services (AWS, Azure, GCP), and modern DevOps tools.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Can you work with our existing systems?</h3>
              <p className="text-gray-300">
                Absolutely! We specialize in integrating new solutions with existing systems. 
                Our team can work with legacy systems, APIs, databases, and third-party services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}