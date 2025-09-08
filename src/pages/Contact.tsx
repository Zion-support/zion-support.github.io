import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

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