import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for your technology needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-xl p-8 backdrop-blur-sm border border-blue-400/20">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Get In Touch</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ready to transform your business with cutting-edge technology? 
              Contact our team of experts today.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-gray-300">contact@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;