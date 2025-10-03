import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and quantum computing consulting." />
      </Helmet>
      
      <div className="text-left">
        <div className="text-left">
          <h1 className="text-left">Contact Us</h1>
          <div className="text-left">
            <div className="text-left">
              <h2 className="text-left">Get Started Today</h2>
              <p className="text-left">
                Ready to transform your business with AI and quantum computing? 
                Contact us to discuss your enterprise needs.
              </p>
              <div className="text-left">
                <div>
                  <label className="text-left">Email</label>
                  <input 
                    type="email"
                    className="text-left"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-left">Message</label>
                  <textarea 
                    className="text-left"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button className="text-left">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;