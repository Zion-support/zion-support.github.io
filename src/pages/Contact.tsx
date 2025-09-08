<<<<<<< HEAD
import React from 'react';
import { SEO } from "@/components/SEO";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our expert team for technology solutions, AI services, and IT consulting. We're here to help transform your business."
        keywords="contact, technology consulting, AI services, IT solutions, support"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zion-gray-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zion-gray-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zion-gray-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zion-gray-light mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zion-gray-light mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai">AI Services</option>
                  <option value="it">IT Services</option>
                  <option value="saas">Micro SaaS</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-gray-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-zion-gray-light">Email</p>
                    <p className="text-white">contact@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-zion-gray-light">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-zion-gray-light">Address</p>
                    <p className="text-white">San Francisco, CA<br />United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-2 text-zion-gray-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Quick Response</h3>
              <p className="text-zion-gray-light mb-4">
                We typically respond to inquiries within 24 hours during business days.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:contact@ziontechgroup.com"
                  className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Email Us
                </a>
                <a 
                  href="tel:+15551234567"
                  className="bg-zion-purple hover:bg-zion-purple/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
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
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    setFormData({
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

    </div>
  );
});

Contact.displayName = 'Contact';
export default Contact;