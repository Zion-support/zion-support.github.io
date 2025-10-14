import React from "react";import react-helmet-async from react-helmet-async";'const ContactPage: React.FC = () => {'  return ('    <div>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content=Get in touch with Zion Tech Group for AI and IT solutions." /></Helmet><div className="min-h-screen bg-gray-900 text-white py-16"><div className="container mx-auto px-4""          <div className=max-w-4xl mx-auto"><h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1><div className="grid md grid-cols-2 gap-12""              <div><h2 className=text-2xl font-semibold mb-6">Get in Touch</h2><div className="space-y-4"><div><h3 className="text-lg font-semibold Email  h3""                    <a href=mailto:info@ziontechgroup.com" className="text-blue-400 hover text-blue-300""                      info@ziontechgroup.com</a></div>
                  <div>
                    <h3 className=text-lg font-semibold">Phone</h3><a href="tel:+1234567890" className=text-blue-400 hover text-blue-300">"                      +1 (234) 567-890</a></div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2><form className="space-y-4""                  <div><label htmlFor=name" className="block text-sm font-medium mb-2""                      Name</label><input
                      type=text""                      id=name""                      name=name""                      className=w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-blue-500"""                      required"
                    />
                  </div>
                  <div>
                    <label htmlFor=email" className="block text-sm font-medium mb-2""                      Email</label><input
                      type=email""                      id=email""                      name=email""                      className=w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-blue-500"""                      required"
                    />
                  </div>
                  <div>
                    <label htmlFor=message" className="block text-sm font-medium mb-2""                      Message</label><textarea;
                      id=message""                      name="message""                      rows={4}"                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-blue-500""                      required"
                    ></textarea>
                  </div>
                  <button;
                    type="submit""                    className=w-full bg-blue-600 hover bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"""                  >"                    Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage</div>
