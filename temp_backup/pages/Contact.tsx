import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await apiClient(
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from AI assistant');
      }

      return Promise.resolve();
    } catch (error) {
      console.error('Error in AI chat:', error);
    }
  };

  const offices = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Available Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, USA',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
    },
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      services: [
        'AI Code Review & Security',
        'AI Customer Experience Analytics',
        'AI DevOps Automation Platform',
        'AI IoT Edge Computing Platform',
      ],
    },
    {
      name: 'Cloud & Infrastructure',
      services: ['Cloud DevOps', 'IT Infrastructure', 'Digital Twin'],
    },
    {
      name: 'Data & Analytics',
      services: [
        'Data Analytics',
        'AI Business Intelligence',
        'IoT Edge Computing',
      ],
    },
    {
      name: 'Security & Compliance',
      services: [
        'Zero Trust Network Architecture',
        'AI Cybersecurity Suite',
        'AI Compliance Assistant',
      ],
    },
  ];

  const quickLinks = [
    { title: 'AI Services Showcase', url: '/ai-services-showcase', icon: '🚀' },
    { title: 'All Services', url: '/all-services', icon: '📋' },
    { title: 'Pricing', url: '/pricing', icon: '💰' },
    {
      title: 'Comprehensive Services',
      url: '/comprehensive-services',
      icon: '🔍',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Get In Touch
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Ready to transform your business with cutting-edge AI and
              technology solutions? Let's discuss how we can help you achieve
              your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-white rounded-2xl shadow-xl p-8'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center py-12'
                >
                  <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                  <h3 className='text-2xl font-semibold text-gray-900 mb-2'>
                    Message Sent Successfully!
                  </h3>
                  <p className='text-gray-600'>
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        placeholder='Enter your full name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        placeholder='Enter your email'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Company
                      </label>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        placeholder='Enter company name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        placeholder='Enter phone number'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Service of Interest
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    >
                      <option value=''>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                      placeholder='Tell us about your project or inquiry...'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                  >
                    {isSubmitting ? (
                      <span className='flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className='flex items-center justify-center'>
                        <Send className='w-5 h-5 mr-2' />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Contact Information
                </h2>
                <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                  We're here to help you navigate the future of technology.
                  Reach out to us through any of the channels below, and we'll
                  get back to you promptly.
                </p>
              </div>

              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                  >
                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <info.icon className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                        {info.title}
                      </h3>
                      <p className='text-gray-900 font-medium'>
                        {info.details}
                      </p>
                      <p className='text-gray-600 text-sm'>
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Need Immediate Assistance?
                </h3>
                <p className='text-gray-600 mb-4'>
                  For urgent matters or technical support, call us directly at:
                </p>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-5 h-5 text-blue-600' />
                  <span className='text-lg font-semibold text-blue-600'>
                    +1 302 464 0950
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Visit Our Office
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Located in the heart of Delaware, our office is easily accessible
              and equipped with the latest technology for client meetings and
              demonstrations.
            </p>
          </motion.div>

          <div className='bg-gray-50 rounded-2xl p-8 text-center'>
            <Building className='w-16 h-16 text-blue-600 mx-auto mb-4' />
            <h3 className='text-2xl font-semibold text-gray-900 mb-2'>
              Zion Tech Group Headquarters
            </h3>
            <p className='text-lg text-gray-600 mb-4'>
              364 E Main St STE 1008
              <br />
              Middletown, DE 19709
              <br />
              United States
            </p>
            <div className='flex items-center justify-center space-x-6 text-gray-600'>
              <div className='flex items-center space-x-2'>
                <Globe className='w-5 h-5' />
                <span>Eastern Time Zone</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Users className='w-5 h-5' />
                <span>By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Quick answers to common questions about working with Zion Tech
              Group
            </p>
          </motion.div>

          <div className='space-y-6'>
            {[
              {
                question: 'How quickly do you respond to inquiries?',
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we're available by phone for immediate assistance.",
              },
              {
                question: 'Do you offer free consultations?',
                answer:
                  'Yes, we provide complimentary initial consultations to understand your needs and discuss how our solutions can benefit your business.',
              },
              {
                question: 'What industries do you specialize in?',
                answer:
                  'We serve clients across various industries including healthcare, finance, manufacturing, retail, and technology, with specialized solutions for each sector.',
              },
              {
                question: 'Can you work with international clients?',
                answer:
                  'Absolutely! We have experience working with clients worldwide and can accommodate different time zones and business requirements.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-lg p-6 shadow-md'
              >
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  {faq.question}
                </h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
