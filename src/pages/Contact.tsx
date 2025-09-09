import React, { memo, useState } from 'react';
import { SEO } from "@/components/SEO";

// Contact info card component
const ContactInfoCard = memo<{ 
  icon: string; 
  title: string; 
  details: string; 
  action?: string;
}>(({ icon, title, details, action }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
        <span className="text-white text-xl">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-zion-gray-light mb-3">{details}</p>
        {action && (
          <a
            href={action}
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
          >
            {action.startsWith('tel:') ? 'Call Now' : 'Learn More'} →
          </a>
        )}
      </div>
    </div>
  </div>
));

ContactInfoCard.displayName = 'ContactInfoCard';

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
    
    try {
      // Simulate API call
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="micro-saas">Micro SaaS</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="mobile-development">Mobile Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zion-gray-light text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-zion-gray-light text-sm font-medium mb-2">
                  Project Timeline
                </label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="3-months">Within 3 months</option>
                  <option value="6-months">Within 6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-zion-gray-light text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold py-4 px-8 rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-gray-light text-lg mb-8">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                icon="📧"
                title="Email"
                details="info@ziontechgroup.com"
                action="mailto:info@ziontechgroup.com"
              />
              
              <ContactInfoCard
                icon="📞"
                title="Phone"
                details="+1 (555) 123-4567"
                action="tel:+15551234567"
              />
              
              <ContactInfoCard
                icon="📍"
                title="Office"
                details="123 Tech Street, San Francisco, CA 94105"
              />
              
              <ContactInfoCard
                icon="💬"
                title="Live Chat"
                details="Available 24/7 for immediate assistance"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Response</h3>
              <p className="text-zion-gray-light text-sm mb-4">
                For urgent matters, call us directly or use our live chat feature. 
                We typically respond to emails within 24 hours.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Call Now →
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                >
                  Email Us →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-3">How quickly can you start our project?</h3>
              <p className="text-zion-gray-light">
                We can typically begin new projects within 1-2 weeks of contract signing, 
                depending on our current workload and project complexity.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-3">Do you offer ongoing support?</h3>
              <p className="text-zion-gray-light">
                Yes, we provide comprehensive support and maintenance packages 
                to ensure your solutions continue to perform optimally.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-3">What technologies do you specialize in?</h3>
              <p className="text-zion-gray-light">
                We specialize in AI/ML, cloud computing, web development, mobile apps, 
                cybersecurity, and modern frameworks like React, Node.js, and Python.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-3">Do you work with startups?</h3>
              <p className="text-zion-gray-light">
                Absolutely! We love working with startups and offer flexible engagement 
                models to fit different budgets and timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;