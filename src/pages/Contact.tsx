import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contact <span className="text-zion-cyan">Us</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get in touch with our technology experts to discuss your project needs 
            and discover how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Phone</h3>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Email</h3>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Address</h3>
                  <p className="text-zion-slate-light">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zion-cyan mb-2">Business Hours</h3>
                  <p className="text-zion-slate-light">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss how we can help you achieve your technology goals.
          </p>
          <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
