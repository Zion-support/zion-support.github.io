
import React from 'react';
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Request Quote - Zion Tech Group" 
        description="Get a custom quote for your AI and tech project needs from Zion Tech Group."
        keywords="quote, pricing, AI services, tech services, project quote, Zion Tech Group"
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tell us about your project and we'll connect you with the perfect talent and services for your needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </div>
import { SEO } from "../components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    services: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      <SEOHead 
        title="Request a Quote - Zion Tech Group"
        description="Get a custom quote for your technology project. Tell us about your needs and we'll provide a detailed proposal."
        canonical="/request-quote"
        url="https://ziontechgroup.com/request-quote"
      />
      
      <main className="min-h-screen bg-futuristic text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Request a Quote
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and we'll get back to you within one business day with a detailed proposal.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="bg-black/30 p-8 rounded-lg border border-cyan-500/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-cyan-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="projectDetails" className="block text-sm font-medium text-cyan-400 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={6}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-cyan-400 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-cyan-400 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="over-12months">Over 12 months</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-cyan-400 mb-4">
                  Services of Interest
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'AI Solutions',
                    'Cloud Platforms',
                    'Cybersecurity',
                    'Digital Transformation',
                    'Infrastructure',
                    'Consulting',
                    'DevOps',
                    'Data Analytics'
                  ].map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="mr-3 w-4 h-4 text-cyan-500 bg-black/50 border-cyan-500/30 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-gray-300">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                Need to discuss your project first? <Link to="/contact" className="text-cyan-400 hover:text-cyan-300">Contact us directly</Link>
              </p>
              <p className="text-sm text-gray-500">
                We typically respond to quote requests within 24 hours during business days.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
