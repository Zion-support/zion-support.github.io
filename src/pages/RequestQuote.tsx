
import React from 'react';
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { SEO } from "@/components/SEO";
import { MainNavigation } from "@/layout/MainNavigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
=======
import { Footer } from "@/components/Footer";
=======
=======
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
=======
import { Footer } from "@/components/Footer";
=======
import { Footer } from "@/components/Footer";

export default function RequestQuote() {
  return (
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
=======
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HardDrive, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Database,
  TrendingUp,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  FileText,
  Calendar,
  Building,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    description: '',
    requirements: [],
    additionalServices: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        industry: '',
        projectType: '',
        budget: '',
        timeline: '',
        teamSize: '',
        description: '',
        requirements: [],
        additionalServices: []
      });
      setSelectedServices([]);
    }, 5000);
  };

  const serviceCategories = [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      description: "Custom AI development and ML solutions",
      basePrice: 8000,
      color: "from-purple-500 to-indigo-600",
      services: [
        { name: "Custom AI Development", price: 8000, duration: "8-12 weeks" },
        { name: "ML Model Training", price: 12000, duration: "6-10 weeks" },
        { name: "AI Strategy Consulting", price: 5000, duration: "2-4 weeks" },
        { name: "NLP Solutions", price: 6000, duration: "4-8 weeks" },
        { name: "Computer Vision", price: 10000, duration: "6-10 weeks" }
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description: "Security audits and compliance frameworks",
      basePrice: 8000,
      color: "from-red-500 to-orange-600",
      services: [
        { name: "Security Audit", price: 8000, duration: "2-4 weeks" },
        { name: "Penetration Testing", price: 12000, duration: "3-5 weeks" },
        { name: "Compliance Framework", price: 15000, duration: "8-12 weeks" },
        { name: "Incident Response", price: 10000, duration: "Ongoing" },
        { name: "Security Training", price: 3000, duration: "1-2 weeks" }
      ]
    },
    {
      id: "cloud-infrastructure",
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      description: "Cloud migration and DevOps implementation",
      basePrice: 5000,
      color: "from-cyan-500 to-blue-600",
      services: [
        { name: "Cloud Migration", price: 15000, duration: "8-16 weeks" },
        { name: "DevOps Implementation", price: 12000, duration: "6-12 weeks" },
        { name: "Infrastructure Modernization", price: 20000, duration: "12-20 weeks" },
        { name: "Monitoring & Support", price: 5000, duration: "Ongoing" }
      ]
    },
    {
      id: "data-analytics",
      name: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      description: "Big data and business intelligence solutions",
      basePrice: 7000,
      color: "from-emerald-500 to-green-600",
      services: [
        { name: "Big Data Engineering", price: 18000, duration: "12-20 weeks" },
        { name: "Data Pipeline Development", price: 12000, duration: "8-16 weeks" },
        { name: "Business Intelligence", price: 8000, duration: "6-12 weeks" },
        { name: "Data Visualization", price: 5000, duration: "4-8 weeks" }
      ]
    },
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Strategic consulting and implementation",
      basePrice: 10000,
      color: "from-amber-500 to-orange-600",
      services: [
        { name: "Digital Strategy", price: 15000, duration: "4-8 weeks" },
        { name: "Process Reengineering", price: 20000, duration: "12-20 weeks" },
        { name: "Technology Assessment", price: 8000, duration: "2-4 weeks" },
        { name: "Change Management", price: 12000, duration: "8-16 weeks" }
      ]
    },
    {
      id: "micro-saas",
      name: "Micro SAAS Solutions",
      icon: <Zap className="h-6 w-6" />,
      description: "Custom business applications and tools",
      basePrice: 5000,
      color: "from-pink-500 to-rose-600",
      services: [
        { name: "Business Process Automation", price: 8000, duration: "6-12 weeks" },
        { name: "Custom CRM Development", price: 12000, duration: "8-16 weeks" },
        { name: "BI Dashboard Creation", price: 6000, duration: "4-8 weeks" },
        { name: "Workflow Management", price: 5000, duration: "4-8 weeks" }
      ]
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education",
    "Real Estate", "Transportation", "Energy", "Media", "Non-Profit", "Other"
  ];

  const projectTypes = [
    "New Development", "Enhancement", "Migration", "Integration", "Consulting", "Support & Maintenance"
  ];

  const budgetRanges = [
    "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "Over $100,000"
  ];

  const timelineOptions = [
    "Immediate (1-2 weeks)", "Quick (1-2 months)", "Standard (3-6 months)", "Long-term (6+ months)"
  ];

  const teamSizes = [
    "1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"
  ];

  const additionalServices = [
    "Project Management", "Quality Assurance", "Training & Documentation", "Ongoing Support", "Performance Optimization"
  ];

  const calculateEstimatedCost = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const [categoryId, serviceIndex] = serviceId.split('-');
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category && serviceIndex !== undefined) {
        const service = category.services[parseInt(serviceIndex)];
        if (service) {
          total += service.price;
        }
      }
    });
    return total;
  };

  const estimatedCost = calculateEstimatedCost();

  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a customized quote for AI, cybersecurity, cloud, and digital transformation services. Professional consultation and transparent pricing."
        keywords="quote, pricing, AI services, cybersecurity, cloud migration, digital transformation, Zion Tech Group"
      />
      <Header />
      
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and we\'ll send a tailored proposal within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="+1 555 123 4567" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Project Type</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select...</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="IT Infrastructure">IT Infrastructure</option>
                    <option value="Micro-SaaS">Micro-SaaS</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select...</option>
                    <option value="$5k - $20k">$5k - $20k</option>
                    <option value="$20k - $50k">$20k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Project Details</label>
                <textarea name="details" rows={5} value={form.details} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Tell us about your goals, timeline, and requirements..." />
              </div>
              <div className="text-center">
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-colors">Submit Request</button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Why Choose Zion Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion for Your Tech Needs?</h2>
              <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-zion-purple/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Fast & Efficient</h3>
                <p className="text-zion-slate-light">
                  Get your quote within 24 hours and start your project quickly with our streamlined process.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zion-cyan/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assured</h3>
                <p className="text-zion-slate-light">
                  All our services and equipment meet the highest industry standards with comprehensive warranties.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zion-purple-light/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-zion-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Pricing</h3>
                <p className="text-zion-slate-light">
                  Get the best value for your investment with our transparent pricing and no hidden costs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
