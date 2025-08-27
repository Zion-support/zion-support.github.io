import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your technology needs and explore our innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
