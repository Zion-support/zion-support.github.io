import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Users,
  Video,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Target
} from 'lucide-react';

const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    interests: [] as string[],
    message: '',
    preferredTime: '',
    preferredDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const interests = [
    'AI Workflow Automation',
    'AI Virtual Assistant',
    'AI Data Analytics',
    'Intelligent Document Processing',
    'Real-Time Cognitive Automation',
    'Advanced Cybersecurity AI',
    'Quantum Computing',
    'Cloud & DevOps',
    'IoT & Edge Computing',
    'Digital Twin Solutions',
    'Blockchain & Web3',
    'Space Technology'
  ];

  const demoFeatures = [
    {
      icon: Zap,
      title: 'Live AI Demo',
      description: 'See our AI solutions in action with real-time demonstrations'
    },
    {
      icon: Target,
      title: 'Customized Use Cases',
      description: 'Explore solutions tailored to your specific industry and needs'
    },
    {
      icon: Shield,
      title: 'Security Overview',
      description: 'Learn about our enterprise-grade security and compliance features'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Get insights from our AI experts and technical specialists'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Demo Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Thank you for requesting a demo. We'll contact you soon to schedule your personalized AI solutions demonstration." />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-6">
                  Demo Request Submitted Successfully!
                </h1>
                <p className="text-xl text-slate-300 mb-8">
                  Thank you for your interest in our AI solutions. Our team will contact you within 24 hours 
                  to schedule your personalized demonstration.
                </p>
                <div className="bg-slate-700/50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Initial Contact</h4>
                        <p className="text-slate-400 text-sm">We'll reach out within 24 hours to discuss your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Schedule Demo</h4>
                        <p className="text-slate-400 text-sm">We'll schedule a convenient time for your personalized demo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Live Demonstration</h4>
                        <p className="text-slate-400 text-sm">See our AI solutions in action tailored to your use case</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a title="Internal link"
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Contact Us
                  </a>
                  <a title="Internal link"
                    href="/"
                    className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Schedule a Demo - Zion Tech Group | AI Solutions Demonstration</title>
        <meta
          name="description"
          content="Schedule a personalized demo of our AI solutions. See how our cutting-edge technology can transform your business operations and drive results."
        />
        <meta
          name="keywords"
          content="AI demo, AI solutions demonstration, schedule demo, AI consultation, AI technology showcase"
        />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Schedule Your AI Solutions Demo
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                See our cutting-edge AI solutions in action. Get a personalized demonstration 
                tailored to your industry and business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-blue-400" />
                  <span>Live Demonstration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-400" />
                  <span>Expert Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  <span>Customized Use Cases</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo Features */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  What to Expect in Your Demo
                </h2>
                <div className="space-y-6">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-3 bg-blue-500/20 rounded-lg mr-4 flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Why Choose Our Demo?
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      No sales pressure - just valuable insights
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Tailored to your specific industry and needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Interactive Q&A with our AI experts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      Real-world use cases and success stories
                    </li>
                  </ul>
                </div>
              </div>

              {/* Demo Request Form */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Request Your Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="CTO, IT Director, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Areas of Interest
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="mr-2 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-300">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Schedule My Demo
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Demo;