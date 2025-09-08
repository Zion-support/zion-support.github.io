import React, { useState } from 'react.ts';
import { SEO  } from '../components/SEO';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';

const Contact: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comp: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)  => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })};

  const handleSubmit = (e: React.FormEvent)  => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // // console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      comp: '',
      phone: '',
      service: '',
      message: '',
      budget: '',
      timeline: ''
    })};

  const contactMethods = [
    {
      icon: '📱',
      title: 'Phone Support',
      details: '+1 302 464 0950',
      description: 'Available Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: '✉️',
      title: 'Email Support',
      details: 'kleber@ziontechgroup.com',
      description: 'Response within 24 hours',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: '📍',
      title: 'Office Location',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit us for in-person consultation',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: '🌐',
      title: 'Website',
      details: 'https://ziontechgroup.com',
      description: 'Explore our services and solutions',
      action: 'Visit Site',
      href: 'https://ziontechgroup.com'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      services[
        'AI Code Review & Security',
        'AI Customer Experience Analytics',
        'AI DevOps Automation Platform',
        'AI IoT Edge Computing Platform'
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      services[
        'Cloud DevOps',
        'IT Infrastructure',
        'Digital Twin'
      ]
    },
    {
      name: 'Data & Analytics',
      services[
        'Data Analytics',
        'AI Business Intelligence',
        'IoT Edge Computing'
      ]
    },
    {
      name: 'Security & Compliance',
      services[
        'Zero Trust Network Architecture',
        'AI Cybersecurity Suite',
        'AI Compliance Assistant'
      ]
    }
  ];

  const quickLinks = [
    { title: 'AI Services Showcase', url: '/ai-services-showcase', icon: '🚀' },
    { title: 'All Services', url: '/all-services', icon: '📋' },
    { title: 'Pricing', url: '/pricing', icon: '💰' },
    { title: 'Comprehensive Services', url: '/comprehensive-services', icon: '🔍' }
  ];

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          We'd love to hear about your project. Reach us via  of the channels below.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
              <div className="text-left space-y-2">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
                <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM EST</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-2">Website</h4>
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  https://ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;