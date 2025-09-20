
export const metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.'
}
export default function ContactPage() {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We reply within one business day</p>
        </div>
        <div>
          <div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div>
                <div>
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div>
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p>
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                        kleber@ziontechgroup.com,
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div>
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709,
                    </p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3>
              <p>
                For urgent matters, call us directly. For project inquiries, email us with your requirements and we'll get back to you within one business day.,
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name,
                  </label>
                  <input,
                    type="text",
                    id="firstName",
                    name="firstName",
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required,
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name,
                  </label>
                  <input,
                    type="text",
                    id="lastName",
                    name="lastName",
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required,
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email,
                </label>
                <input,
                  type="email",
                  id="email",
                  name="email",
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required,
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest,
                </label>
                <select,
                  id="service",
                  name="service",
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="it-services">IT Services</option>
                  <option value="blockchain">Blockchain Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">General Consulting</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message,
                </label>
                <textarea,
                  id="message",
                  name="message",
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or requirements...",
                  required,
                ></textarea>
              </div>
              <button,
                type="submit",
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message,
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-4">Or visit our main website for more information</p>
          <a,
            href="https://ziontechgroup.com",
            className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Visit Main Site,
          </a>
        </div>
      </div>
    </div>)}
