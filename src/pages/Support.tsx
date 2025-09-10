import React from 'react';
<<<<<<< HEAD
import { Mail, Phone, MessageCircle, BookOpen, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Support = () => {
  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: <Mail className="h-8 w-8 text-blue-400" />,
      contact: "support@ziontechgroup.com"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      icon: <Phone className="h-8 w-8 text-green-400" />,
      contact: "+1 (302) 464-0950"
    },
    {
      title: "Live Chat",
      description: "Chat with us in real-time",
      icon: <MessageCircle className="h-8 w-8 text-purple-400" />,
      contact: "Available 9 AM - 6 PM EST"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: <BookOpen className="h-8 w-8 text-yellow-400" />,
      contact: "Self-service resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for our AI and technology solutions."
        keywords={["support", "help", "contact", "assistance", "customer service"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Support Center</h1>
          <p className="text-xl text-gray-300">
            We're here to help you succeed with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <p className="text-blue-400 font-semibold">{option.contact}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-slate-700 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">How do I get started with your services?</h3>
              <p className="text-gray-300">Contact our sales team to discuss your needs and get a personalized solution.</p>
            </div>
            <div className="border-b border-slate-700 pb-4">
              <h3 className="text-lg font-semibold text-white mb-2">What support do you provide?</h3>
              <p className="text-gray-300">We offer comprehensive support including documentation, email support, phone support, and live chat.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How can I contact technical support?</h3>
              <p className="text-gray-300">You can reach our technical support team via email, phone, or live chat during business hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
=======
import SEO from '../components/SEO';

export default function Support() {
  return (
    <>
      <SEO 
        title="Support - Zion Tech Group"
        description="Get help and support for our services and solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
            <p className="text-xl text-slate-300">Get help and support for our services.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
