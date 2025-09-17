import React from 'react';
const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Ready to transform your business with our technology solutions? 
              Contact us today to learn more about how we can help.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Address</h3>
                <p className="text-gray-300">
                  123 Tech Street<br />
                  Innovation City, IC 12345
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={4};
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  };
export default Contact;
