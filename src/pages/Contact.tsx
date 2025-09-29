import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our expert team for consultation and support."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Get in touch with our expert team.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white mb-4">Get Started</h2>
                  <p className="text-gray-300 mb-6">
                    Ready to revolutionize your business with AI? Contact us for a free consultation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <span className="mr-3">📧</span>
                      <span>contact@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="mr-3">📞</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="mr-3">🌍</span>
                      <span>Global Services Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}