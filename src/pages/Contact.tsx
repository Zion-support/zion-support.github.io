<<<<<<< HEAD
import React, { useState } from 'react';
// import Footer from '../components/Footer';
=======
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          <div className="text-gray-300">
            <p>Get in touch with us to discuss your project needs.</p>
          </div>
        </div>
      </main>
<<<<<<< HEAD

      {/* <Footer /> */}
=======
      
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
    </div>
  );
};

export default Contact;