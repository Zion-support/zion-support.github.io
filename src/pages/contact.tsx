import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import React from 'react';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-slate">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-indigo-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-zion-slate-light">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-indigo-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-indigo-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-zion-slate-light">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-indigo-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                    <p className="text-zion-slate-light">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-lg p-8 border border-zion-slate">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}