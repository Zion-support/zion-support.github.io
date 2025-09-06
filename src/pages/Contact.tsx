import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent! We will get back to you shortly.');
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend service
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Contact Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up">
            We're here to help! Reach out to us for any inquiries, support, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 border-slate-600 text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 border-slate-600 text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-300 text-sm font-bold mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 border-slate-600 text-white"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 border-slate-600 text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="large">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card
              title="General Inquiries"
              description="info@ziontechgroup.com"
              icon="📧"
              className="bg-slate-800"
            />
            <Card
              title="Sales & Partnerships"
              description="sales@ziontechgroup.com"
              icon="🤝"
              className="bg-slate-800"
            />
            <Card
              title="Support"
              description="support@ziontechgroup.com"
              icon="🛠️"
              className="bg-slate-800"
            />
            <Card
              title="Phone"
              description="+1 (555) 123-4567"
              icon="📞"
              className="bg-slate-800"
            />
            <Card
              title="Address"
              description="123 Tech Innovation Dr, Silicon Valley, CA 94043"
              icon="📍"
              className="bg-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;