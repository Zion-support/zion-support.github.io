import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

// Contact info card component
const ContactInfoCard = memo<{ 
  icon: string; 
  title: string; 
  details: string; 
  action?: string;
}>(({ icon, title, details, action }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-blue-200 mb-4">{details}</p>
    {action && (
      <a 
        href={action} 
        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
      >
        {action}
      </a>
    )}
  </div>
));

ContactInfoCard.displayName = 'ContactInfoCard';

// Form input component
const FormInput = memo<{
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
}>(({ label, type, name, value, onChange, placeholder, required = false, multiline = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-blue-200 mb-2">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {multiline ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    )}
  </div>
));

FormInput.displayName = 'FormInput';

const Contact: React.FC = memo(() => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      addNotification({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',
        duration: 5000
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to send message. Please try again.',
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'Micro SaaS Development',
    'Quantum Computing',
    'Other'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          Let's Build Something Amazing Together
        </p>
        <p className="text-lg text-blue-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your business with cutting-edge technology? Get in touch with our expert team 
          and let's discuss how we can help you achieve your goals.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <ContactInfoCard
            icon="📧"
            title="Email Us"
            details="Send us an email and we'll respond within 24 hours"
            action="mailto:contact@ziontechgroup.com"
          />
          <ContactInfoCard
            icon="📞"
            title="Call Us"
            details="Speak directly with our team for immediate assistance"
            action="tel:+1-555-0123"
          />
          <ContactInfoCard
            icon="💬"
            title="Live Chat"
            details="Chat with us in real-time for instant support"
            action="#"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Get a Free Quote</h2>
            <p className="text-blue-200">
              Tell us about your project and we'll provide a detailed proposal
            </p>
          </div>


          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
              <FormInput
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-blue-200 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-blue-200 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-blue-200 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            <FormInput
              label="Project Details"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              multiline
            />

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-3">How long does a typical project take?</h3>
            <p className="text-blue-200">
              Project timelines vary depending on complexity and scope. Simple websites can take 2-4 weeks, 
              while complex AI solutions may take 3-6 months. We'll provide a detailed timeline during our consultation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-3">Do you provide ongoing support?</h3>
            <p className="text-blue-200">
              Yes! We offer comprehensive support packages including maintenance, updates, monitoring, 
              and 24/7 technical support to ensure your solution continues to perform optimally.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-3">What technologies do you work with?</h3>
            <p className="text-blue-200">
              We work with a wide range of modern technologies including React, Node.js, Python, AI/ML frameworks, 
              cloud platforms (AWS, Azure, GCP), and more. We choose the best technology stack for your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;