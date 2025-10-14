import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>ContactPage - Zion Tech Group</title>
        <meta name="description" content="Professional contactpage services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ContactPage
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional contactpage services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
<<<<<<< HEAD
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
=======
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>"
                <form className="space-y-4">"
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">"
                      Name;
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                      required

                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">"
                      Email;
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                      required

                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">"
                      Message;
                    </label>
                    <textarea;
                      id="message""
                      name="message""
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"

                      required

                    ></textarea>
                  </div>
                  <button;
                    type="submit""
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors""
                  >
                    Send Message;
                  </button>
                </form>
>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}