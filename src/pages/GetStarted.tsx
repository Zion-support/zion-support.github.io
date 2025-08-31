import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  Globe,
  Zap,
  Brain,
  Server,
  Shield,
  Target,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export default function GetStarted() {
  const [selectedPlan, setSelectedPlan] = useState('consultation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const plans = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      description: 'Start with a free 30-minute consultation to discuss your needs',
      features: ['30-minute strategy session', 'Technology assessment', 'Custom roadmap', 'No commitment required'],
      icon: Users,
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'pilot',
      title: 'Pilot Project',
      description: 'Test our solutions with a small-scale pilot project',
      features: ['Proof of concept', 'Limited scope implementation', 'Performance metrics', 'Scalability assessment'],
      icon: Rocket,
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'full',
      title: 'Full Implementation',
      description: 'Complete solution deployment with ongoing support',
      features: ['End-to-end implementation', 'Training & documentation', 'Ongoing support', 'Performance optimization'],
      icon: Award,
      color: 'from-zion-blue to-zion-purple'
    }
  ];

  const industries = [
    'Healthcare', 'Financial Services', 'Manufacturing', 'Government', 'Retail', 'Education',
    'Technology', 'Real Estate', 'Transportation', 'Energy', 'Other'
  ];

  const projectTypes = [
    'AI & Machine Learning', 'Cloud Migration', 'Digital Transformation', 'Cybersecurity',
    'Data Analytics', 'IoT Solutions', 'Blockchain', 'Micro SaaS Platform', 'Other'
  ];

  const timelines = [
    'Immediate (1-3 months)', 'Short-term (3-6 months)', 'Medium-term (6-12 months)', 'Long-term (1+ years)'
  ];

  const budgets = [
    'Under $10K', '$10K - $50K', '$50K - $100K', '$100K - $500K', '$500K+'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Join hundreds of organizations that have accelerated their digital transformation
              with Zion Tech Group's cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-zinc-400">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <TrendingUp className="w-5 h-5 text-zion-cyan" />
                <span>40% Average ROI Increase</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path Forward</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              We offer flexible engagement models to meet your needs and budget.
              Start small and scale up as you see results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.id
                    ? 'border-zion-cyan bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark shadow-2xl shadow-zion-cyan/25'
                    : 'border-zion-purple/30 bg-zion-slate-dark/50 hover:border-zion-cyan/50 hover:shadow-lg hover:shadow-zion-cyan/10'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{plan.title}</h3>
                <p className="text-zinc-400 mb-6 text-center">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {selectedPlan === plan.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Let's Start Your Journey</h2>
              <p className="text-xl text-zinc-300">
                Tell us about your project and we'll create a customized solution for your business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-zion-purple/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zinc-400 focus:border-zion-cyan focus:outline-none transition-colors"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-12">Ready to Get Started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zinc-400">+1 302 464 0950</p>
                <p className="text-zinc-400">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zinc-400">kleber@ziontechgroup.com</p>
                <p className="text-zinc-400">24/7 support available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zinc-400">364 E Main St STE 1008</p>
                <p className="text-zinc-400">Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}