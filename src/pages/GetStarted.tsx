import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  BookOpen,
  Video,
  FileText,
  Headphones
} from 'lucide-react';
import { SEO } from '../components/SEO';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning services',
    href: '/services',
    icon: Zap
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management',
    href: '/services',
    icon: Shield
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions',
    href: '/services',
    icon: BarChart3
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting',
    href: '/services',
    icon: Users
  },
  {
    title: 'MicroSaaS',
    description: 'Custom software-as-a-service solutions',
    href: '/micro-saas-solutions-comprehensive',
    icon: CheckCircle
  },
  {
    title: 'Consulting',
    description: 'Strategic technology consulting and advisory services',
    href: '/contact',
    icon: Users
  }
];

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: 'From $2,500',
    features: [
      'Initial consultation',
      'Basic project scope',
      'Standard support',
      '30-day warranty'
    ],
    recommended: false
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with specific needs',
    price: 'From $7,500',
    features: [
      'Comprehensive consultation',
      'Detailed project planning',
      'Priority support',
      '90-day warranty',
      'Post-launch training'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-service solution for large organizations',
    price: 'Custom pricing',
    features: [
      'Dedicated project manager',
      'Custom solution design',
      '24/7 support',
      '1-year warranty',
      'Ongoing maintenance',
      'Performance monitoring'
    ],
    recommended: false
  }
];

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    type: 'Guide',
    href: '/documentation',
    icon: FileText
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides and walkthroughs',
    type: 'Video',
    href: '/training',
    icon: Video
  },
  {
    title: 'Knowledge Base',
    description: 'Searchable articles and troubleshooting guides',
    type: 'Article',
    href: '/help',
    icon: BookOpen
  },
  {
    title: 'Support',
    description: 'Get help from our technical experts',
    type: 'Support',
    href: '/contact',
    icon: Headphones
  }
];

const GetStarted: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('professional');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const steps = [
    'Project Requirements',
    'Company Information',
    'Timeline & Budget',
    'Review & Submit'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Tell us about your project</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select project type</option>
                  <option value="ai-solution">AI Solution</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="2.5k-5k">$2,500 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Timeline & Budget</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select timeline</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="2-4-months">2-4 months</option>
                  <option value="4-6-months">4-6 months</option>
                  <option value="6-months+">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="2.5k-5k">$2,500 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Review & Submit</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Project Summary</h4>
              <div className="space-y-3 text-gray-300">
                <div><strong>Project Type:</strong> {formData.projectType || 'Not specified'}</div>
                <div><strong>Description:</strong> {formData.description || 'Not provided'}</div>
                <div><strong>Timeline:</strong> {formData.timeline || 'Not specified'}</div>
                <div><strong>Budget:</strong> {formData.budget || 'Not specified'}</div>
                <div><strong>Contact:</strong> {formData.name} ({formData.email})</div>
                <div><strong>Company:</strong> {formData.company || 'Not specified'}</div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Submit Project Request
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Get Started - Zion Tech Group"
        description="Transform your business with cutting-edge technology solutions. Our expert team is ready to help you innovate and grow."
        keywords="get started, technology solutions, AI, cloud, consulting, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get Started with
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Zion Tech Group</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge technology solutions. 
            Our expert team is ready to help you innovate and grow.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Choose Your Path to Innovation
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Link 
                  to={service.href}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Select Your Starting Point
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedPlan === plan.id 
                    ? 'border-cyan-500 bg-slate-800/80' 
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                }`}
              >
                <div className="text-center mb-6">
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            What Happens Next?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Initial Consultation</h3>
              <p className="text-gray-400">We'll schedule a call to discuss your needs and explore how we can help.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proposal & Planning</h3>
              <p className="text-gray-400">We'll create a detailed proposal and project plan tailored to your requirements.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Kickoff</h3>
              <p className="text-gray-400">Once approved, we'll begin development and keep you updated throughout the process.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {renderStepContent()}
          
          {/* Navigation */}
          {currentStep > 1 && currentStep < steps.length && (
            <div className="flex justify-between mt-12">
              <button
                onClick={prevStep}
                className="px-6 py-3 border border-slate-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Previous Step
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Next Step
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Learning Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive library of guides, tutorials, and documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full">
                    {resource.type}
                  </span>
                  <Link
                    to={resource.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;