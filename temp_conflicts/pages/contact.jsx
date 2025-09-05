
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const _Contact = () => {_const [formData, _setFormData] = useState({
    name: '', _email: '', _company: '', _phone: '', _service: '', _message: ''});

  const _handleSubmit = (_e) => {_e.preventDefault();
    // Handle form submission here};

  const _handleChange = (_e) => {_setFormData({
      ...formData, _[e.target.name]: e.target.value});
  };

  const _contactInfo = [
    {_title: "General Inquiries", _email: "info@ziontechgroup.com", _phone: "+1 (555) 123-4567"},
    {_title: "Sales & Partnerships", _email: "sales@ziontechgroup.com", _phone: "+1 (555) 123-4568"},
    {_title: "Technical Support", _email: "support@ziontechgroup.com", _phone: "+1 (555) 123-4569"}
  ];

  const _offices = [
    {_city: "San Francisco", _address: "123 Innovation Drive, _San Francisco, _CA 94105", _phone: "+1 (555) 123-4567"},
    {_city: "New York", _address: "456 Tech Avenue, _New York, _NY 10001", _phone: "+1 (555) 123-4568"},
    {_city: "London", _address: "789 Digital Street, _London, _UK EC1A 1BB", _phone: "+44 20 1234 5678"}
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for technology solutions, partnerships, or general inquiries. We're here to help transform your business." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {_/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {_/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={_handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={_formData.name}
                    onChange={_handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={_formData.email}
                    onChange={_handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={_formData.company}
                    onChange={_handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={_formData.phone}
                    onChange={_handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={_formData.service}
                  onChange={_handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-development">AI Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="blockchain">Blockchain Solutions</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={_formData.message}
                  onChange={_handleChange}
                  required
                  rows={_5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {_/* Contact Information */}
          <div className="space-y-8">
            {_/* Direct Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
              <div className="space-y-4">
                {_contactInfo.map(_(info, _index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{_info.title}</h3>
                    <p className="text-blue-600 mb-1">{_info.email}</p>
                    <p className="text-gray-600">{_info.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {_/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <div className="space-y-4">
                {_offices.map(_(office, _index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{_office.city}</h3>
                    <p className="text-gray-600 mb-1">{_office.address}</p>
                    <p className="text-green-600">{_office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {_/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM PST</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>
        </div>

        {_/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-6">
            Let's schedule a consultation to discuss your technology needs.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Call
          </button>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Contact;