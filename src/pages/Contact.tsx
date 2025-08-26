import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Globe,
  Building,
  Users,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general',
    budget: 'not-specified',
    timeline: 'not-specified'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general',
        budget: 'not-specified',
        timeline: 'not-specified'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our services or company",
      email: "info@ziontechgroup.com",
      phone: "+1 (555) 123-4567",
      icon: Mail,
      responseTime: "24 hours"
    },
    {
      title: "Sales & Partnerships",
      description: "Business opportunities and partnerships",
      email: "sales@ziontechgroup.com",
      phone: "+1 (555) 123-4568",
      icon: Building,
      responseTime: "4 hours"
    },
    {
      title: "Technical Support",
      description: "Technical questions and support",
      email: "support@ziontechgroup.com",
      phone: "+1 (555) 123-4569",
      icon: MessageSquare,
      responseTime: "2 hours"
    },
    {
      title: "Careers",
      description: "Job opportunities and applications",
      email: "careers@ziontechgroup.com",
      phone: "+1 (555) 123-4570",
      icon: Users,
      responseTime: "48 hours"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Tech Plaza, Suite 100",
      cityState: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      icon: Building
    },
    {
      city: "San Francisco",
      address: "456 Innovation Drive, Floor 3",
      cityState: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4568",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      icon: Building
    },
    {
      city: "London",
      address: "789 Digital Lane, Office 5",
      cityState: "London, UK EC2A 4NE",
      phone: "+44 (0) 20 1234 5678",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GMT",
      icon: Building
    }
  ];

  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "ai-services", label: "AI Services" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "consulting", label: "Consulting" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" },
    { value: "other", label: "Other" }
  ];

  const budgets = [
    { value: "not-specified", label: "Not Specified" },
    { value: "under-10k", label: "Under $10,000" },
    { value: "10k-50k", label: "$10,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k-500k", label: "$100,000 - $500,000" },
    { value: "over-500k", label: "Over $500,000" }
  ];

  const timelines = [
    { value: "not-specified", label: "Not Specified" },
    { value: "immediate", label: "Immediate" },
    { value: "1-3-months", label: "1-3 Months" },
    { value: "3-6-months", label: "3-6 Months" },
    { value: "6-12-months", label: "6-12 Months" },
    { value: "over-12-months", label: "Over 12 Months" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group. Contact our team for AI services, cybersecurity solutions, cloud consulting, and technical support. We're here to help."
        keywords="contact, support, sales, partnerships, Zion Tech Group, AI services, cybersecurity, cloud solutions"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Get In Touch
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready to transform your business with cutting-edge AI and technology solutions? 
            Our team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                    <a href={`mailto:${method.email}`} className="text-cyan-400 hover:text-cyan-300">
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                    <a href={`tel:${method.phone}`} className="text-cyan-400 hover:text-cyan-300">
                      {method.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>Response: {method.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <office.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{office.city}</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.cityState}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                    <a href={`tel:${office.phone}`} className="text-cyan-400 hover:text-cyan-300">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Send Us a Message
          </h2>
          
          {submitSuccess && (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-green-400">Message Sent Successfully!</h3>
                  <p className="text-green-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Enter a subject for your message"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value} className="bg-gray-800 text-white">
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {budgets.map(budget => (
                    <option key={budget.value} value={budget.value} className="bg-gray-800 text-white">
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {timelines.map(timeline => (
                    <option key={timeline.value} value={timeline.value} className="bg-gray-800 text-white">
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Tell us about your project, requirements, or how we can help you..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center mx-auto disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;