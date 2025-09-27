import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients in 50+ countries worldwide'
    },
    {
      icon: CheckCircle,
      title: 'Quick Response',
      description: 'We typically respond within 2 hours'
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden'>
      <Navigation />
      
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '2s'}}></div>
        <div className='absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up'>
            <span className='bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent'>
              Get In Touch
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed animate-fade-in'>
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-blue-light/20'>
            <h2 className='text-3xl font-bold text-white mb-6'>Send us a message</h2>
            
            {isSubmitted ? (
              <div className='text-center py-12'>
                <CheckCircle className='w-16 h-16 text-zion-cyan mx-auto mb-4' />
                <h3 className='text-2xl font-bold text-white mb-2'>Message Sent!</h3>
                <p className='text-zion-slate-light'>Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-zion-slate-light mb-2 font-medium'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate focus:border-zion-cyan focus:outline-none transition-colors duration-300'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-zion-slate-light mb-2 font-medium'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate focus:border-zion-cyan focus:outline-none transition-colors duration-300'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor='company' className='block text-zion-slate-light mb-2 font-medium'>
                    Company
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate focus:border-zion-cyan focus:outline-none transition-colors duration-300'
                    placeholder='Your company name'
                  />
                </div>
                
                <div>
                  <label htmlFor='subject' className='block text-zion-slate-light mb-2 font-medium'>
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate focus:border-zion-cyan focus:outline-none transition-colors duration-300'
                    placeholder='What can we help you with?'
                  />
                </div>
                
                <div>
                  <label htmlFor='message' className='block text-zion-slate-light mb-2 font-medium'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate focus:border-zion-cyan focus:outline-none transition-colors duration-300 resize-none'
                    placeholder='Tell us about your project...'
                  />
                </div>
                
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-zion-cyan to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2'
                >
                  <Send className='w-5 h-5' />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl font-bold text-white mb-6'>Contact Information</h2>
              <p className='text-lg text-zion-slate-light leading-relaxed mb-8'>
                We're here to help! Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-start space-x-4 p-6 bg-zion-slate-dark/30 backdrop-blur-sm rounded-lg border border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300'>
                  <div className='bg-zion-blue/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <info.icon className='w-6 h-6 text-zion-blue-light' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>{info.title}</h3>
                    <p className='text-zion-cyan font-medium mb-1'>{info.details}</p>
                    <p className='text-zion-slate-light text-sm'>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className='pt-8'>
              <h3 className='text-xl font-bold text-white mb-6'>Why Choose Us?</h3>
              <div className='space-y-4'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='bg-zion-cyan/20 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <feature.icon className='w-4 h-4 text-zion-cyan' />
                    </div>
                    <div>
                      <h4 className='text-white font-medium'>{feature.title}</h4>
                      <p className='text-zion-slate-light text-sm'>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container mx-auto px-6 py-20 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-zion-slate-light max-w-2xl mx-auto'>
            Quick answers to common questions about our services and process.
          </p>
        </div>
        
        <div className='max-w-3xl mx-auto space-y-6'>
          <div className='bg-zion-slate-dark/30 backdrop-blur-sm rounded-lg border border-zion-blue-light/20 p-6'>
            <h3 className='text-lg font-semibold text-white mb-3'>How long does a typical project take?</h3>
            <p className='text-zion-slate-light'>
              Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, 
              while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.
            </p>
          </div>
          
          <div className='bg-zion-slate-dark/30 backdrop-blur-sm rounded-lg border border-zion-blue-light/20 p-6'>
            <h3 className='text-lg font-semibold text-white mb-3'>Do you provide ongoing support?</h3>
            <p className='text-zion-slate-light'>
              Yes! We offer comprehensive maintenance and support packages to ensure your project continues to perform optimally. 
              Our support includes updates, security patches, and technical assistance.
            </p>
          </div>
          
          <div className='bg-zion-slate-dark/30 backdrop-blur-sm rounded-lg border border-zion-blue-light/20 p-6'>
            <h3 className='text-lg font-semibold text-white mb-3'>What technologies do you work with?</h3>
            <p className='text-zion-slate-light'>
              We work with modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), 
              and blockchain technologies. We choose the best tech stack for your specific needs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;