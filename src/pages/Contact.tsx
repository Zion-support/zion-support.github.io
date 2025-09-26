import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-6 text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Contact Us
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Ready to start your next project? Get in touch with our team of experts 
            and let's discuss how we can help transform your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Contact Info */}
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Get in Touch
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                We're here to help you succeed. Reach out to us through any of the channels below, 
                and we'll respond within 24 hours.
              </p>
              
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-blue-100 p-3 rounded-lg'>
                    <Mail className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
                    <p className='text-gray-600'>hello@ziontechgroup.com</p>
                    <p className='text-gray-600'>support@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='bg-green-100 p-3 rounded-lg'>
                    <Phone className='w-6 h-6 text-green-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                    <p className='text-gray-600'>+1 (555) 123-4567</p>
                    <p className='text-gray-600'>+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <MapPin className='w-6 h-6 text-purple-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Office</h3>
                    <p className='text-gray-600'>
                      123 Innovation Drive<br />
                      Tech Valley, CA 94000<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='bg-orange-100 p-3 rounded-lg'>
                    <Clock className='w-6 h-6 text-orange-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Business Hours</h3>
                    <p className='text-gray-600'>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className='text-gray-600'>Saturday: 10:00 AM - 4:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your full name'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your email address'
                  />
                </div>
                
                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                    Company
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your company name'
                  />
                </div>
                
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Tell us about your project or how we can help...'
                  />
                </div>
                
                <button
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2'
                >
                  <Send className='w-5 h-5' />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  How long does a typical project take?
                </h3>
                <p className='text-gray-600'>
                  Project timelines vary based on complexity, but most web applications take 2-6 months, 
                  while mobile apps typically require 3-8 months.
                </p>
              </div>
              
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Do you provide ongoing support?
                </h3>
                <p className='text-gray-600'>
                  Yes, we offer comprehensive maintenance and support packages to ensure your 
                  application continues to perform optimally.
                </p>
              </div>
            </div>
            
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  What technologies do you work with?
                </h3>
                <p className='text-gray-600'>
                  We work with modern technologies including React, Node.js, Python, AWS, 
                  and many others. We choose the best tech stack for your specific needs.
                </p>
              </div>
              
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Can you work with our existing team?
                </h3>
                <p className='text-gray-600'>
                  Absolutely! We excel at collaborating with existing teams and can integrate 
                  seamlessly into your development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
