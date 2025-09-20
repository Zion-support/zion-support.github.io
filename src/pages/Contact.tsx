import React from 'react';
<<<<<<< HEAD

export default function Contact() {
return (
<div className="min-h-screen bg-zion-blue">
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
<p className="text-zion-slate-light">
Get in touch with our team for any questions or support needs.
</p>
</div>
</div>
);
=======
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with our team" />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get in touch with our team for any questions or support needs.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-4">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> contact@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
>>>>>>> pr-22690
}