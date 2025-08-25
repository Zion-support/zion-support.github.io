<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { SEO } from '@/components/SEO';

export default function CreateProfile() {
  const [profileType, setProfileType] = useState<'talent' | 'service' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <>
      <SEO
        title="Create Profile | Zion Tech Group"
        description="Create your professional profile on Zion Tech Group's marketplace platform"
        keywords="create profile, talent profile, service profile, marketplace registration, Zion Tech Group"
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { User, Briefcase, ArrowRight } from 'lucide-react';

export default function CreateProfile() {
  return (
    <>
      <SEO
        title="Create Profile | Zion AI Marketplace"
        description="Create your professional profile on Zion - choose between talent or service provider profiles"
        keywords="create profile, talent profile, service profile, Zion marketplace"
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
        canonical="https://ziontechgroup.com/create-profile"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Create Your Profile
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Join our marketplace and connect with opportunities in technology, AI, and digital transformation
              </p>
            </div>

            {/* Profile Type Selection */}
            {!profileType && (
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Choose Your Profile Type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => setProfileType('talent')}
                    className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors text-left group"
                  >
                    <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Talent Profile</h3>
                    <p className="text-zion-slate-light">
                      Showcase your skills and experience to find exciting opportunities in technology and AI.
                    </p>
                    <ul className="text-zion-slate-light text-sm mt-3 space-y-1">
                      <li>• Highlight your expertise</li>
                      <li>• Connect with employers</li>
                      <li>• Build your professional network</li>
                    </ul>
                  </button>

                  <button
                    onClick={() => setProfileType('service')}
                    className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-colors text-left group"
                  >
                    <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Profile</h3>
                    <p className="text-zion-slate-light">
                      Offer your services and solutions to businesses seeking technology expertise.
                    </p>
                    <ul className="text-zion-slate-light text-sm mt-3 space-y-1">
                      <li>• Promote your services</li>
                      <li>• Reach new clients</li>
                      <li>• Grow your business</li>
                    </ul>
                  </button>
                </div>
              </div>
            )}

            {/* Profile Creation Form */}
            {profileType && (
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-slate-light">Step {currentStep} of 4</span>
                    <span className="text-zion-cyan font-semibold">
                      {profileType === 'talent' ? 'Talent Profile' : 'Service Profile'}
                    </span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div 
                      className="bg-zion-cyan h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Location *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="City, State/Province, Country"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Professional Details</h2>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        {profileType === 'talent' ? 'Professional Title' : 'Service Name'} *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder={profileType === 'talent' ? 'e.g., Senior AI Engineer' : 'e.g., Cybersecurity Consulting'}
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Bio/Description *</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none resize-none"
                        placeholder="Tell us about yourself and your expertise..."
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Skills & Expertise *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="e.g., AI, Machine Learning, Cybersecurity, Cloud Computing"
                      />
                      <p className="text-zion-slate-light text-sm mt-2">
                        Separate multiple skills with commas
                      </p>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Experience Level *</label>
                      <select className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none">
                        <option value="">Select experience level</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-7 years)</option>
                        <option value="senior">Senior Level (8+ years)</option>
                        <option value="expert">Expert Level (15+ years)</option>
                      </select>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Portfolio & Work */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Portfolio & Work</h2>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Portfolio URL</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://linkedin.com/in/your-profile"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">GitHub Profile</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                        placeholder="https://github.com/your-username"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Certifications</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:border-zion-cyan focus:outline-none resize-none"
                        placeholder="List any relevant certifications..."
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextStep}
                        className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-6">Review & Submit</h2>
                    
                    <div className="bg-zion-blue rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Profile Summary</h3>
                      <div className="space-y-3 text-zion-slate-light">
                        <div className="flex justify-between">
                          <span>Profile Type:</span>
                          <span className="text-white capitalize">{profileType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="text-white">John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Email:</span>
                          <span className="text-white">john.doe@example.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span className="text-white">New York, NY, USA</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Title:</span>
                          <span className="text-white">Senior AI Engineer</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Experience:</span>
                          <span className="text-white">Senior Level</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="terms" className="w-4 h-4 text-zion-cyan" />
                      <label htmlFor="terms" className="text-zion-slate-light">
                        I agree to the <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a> and{' '}
                        <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="bg-transparent border border-zion-blue-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Previous
                      </button>
                      <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
                        Create Profile
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Benefits Section */}
            <div className="mt-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Create a Profile?
              </h2>
              <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of professionals and businesses already using our platform to connect, 
                collaborate, and grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                  <p className="text-zion-slate-light text-sm">
                    Build your professional network and connect with industry leaders
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Grow</h3>
                  <p className="text-zion-slate-light text-sm">
                    Access new opportunities and expand your professional reach
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-zion-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Succeed</h3>
                  <p className="text-zion-slate-light text-sm">
                    Leverage our platform to achieve your professional goals
                  </p>
                </div>
              </div>
            </div>
          </div>
=======
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Create Your Profile</h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Choose how you want to participate in the Zion AI Marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Talent Profile Option */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-purple transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                  <User className="h-8 w-8 text-zion-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Talent Profile</h2>
                <p className="text-zion-slate-light">
                  Showcase your skills and get hired for AI and tech projects
                </p>
              </div>
              
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Create a professional portfolio
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Get matched with relevant projects
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Set your rates and availability
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Receive job notifications
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/create-talent-profile">
                  Create Talent Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Service Profile Option */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 hover:border-zion-purple transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-zion-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Service Profile</h2>
                <p className="text-zion-slate-light">
                  Offer your AI and tech services to clients worldwide
                </p>
              </div>
              
              <ul className="text-zion-slate-light space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  List your services and expertise
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Set service packages and pricing
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Manage client relationships
                </li>
                <li className="flex items-center">
                  <span className="text-zion-cyan mr-2">✓</span>
                  Track project progress
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/create-service-profile">
                  Create Service Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-zion-slate-light mb-4">
              Already have an account? <Link to="/login" className="text-zion-cyan hover:text-zion-cyan-light">Sign in</Link>
            </p>
            <p className="text-zion-slate-light">
              Need help? <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light">Contact our support team</Link>
            </p>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
        </div>
      </main>
    </>
=======
import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, X, Upload, Save } from 'lucide-react';

export default function CreateProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    timezone: '',
    
    // Professional Details
    headline: '',
    bio: '',
    yearsOfExperience: '',
    availability: 'full-time',
    hourlyRate: '',
    currency: 'USD',
    
    // Skills & Expertise
    skills: [],
    newSkill: '',
    
    // Portfolio & Work
    portfolio: [],
    certifications: [],
    
    // Social & Contact
    linkedin: '',
    github: '',
    website: '',
    
    // Preferences
    remoteWork: true,
    travelWillingness: false,
    projectTypes: [],
    
    // Terms
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addSkill = () => {
    if (profileData.newSkill.trim() && !profileData.skills.includes(profileData.newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill.trim()],
        newSkill: ''
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!profileData.firstName) newErrors.firstName = 'First name is required';
      if (!profileData.lastName) newErrors.lastName = 'Last name is required';
      if (!profileData.email) newErrors.email = 'Email is required';
      if (!profileData.location) newErrors.location = 'Location is required';
    }
    
    if (step === 2) {
      if (!profileData.headline) newErrors.headline = 'Professional headline is required';
      if (!profileData.bio) newErrors.bio = 'Bio is required';
      if (!profileData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
    }
    
    if (step === 3) {
      if (profileData.skills.length === 0) newErrors.skills = 'At least one skill is required';
    }
    
    if (step === 4) {
      if (!profileData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(4)) {
      try {
        // In real app, send to backend
        console.log('Profile data:', profileData);
        // Redirect to profile page or dashboard
        alert('Profile created successfully!');
      } catch (error) {
        console.error('Error creating profile:', error);
      }
    }
  };

  const steps = [
    { number: 1, title: 'Basic Information', description: 'Personal details and contact info' },
    { number: 2, title: 'Professional Details', description: 'Experience and expertise' },
    { number: 3, title: 'Skills & Portfolio', description: 'Technical skills and work samples' },
    { number: 4, title: 'Review & Submit', description: 'Final review and submission' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Create Profile - Zion Tech Group" 
        description="Create your professional profile on Zion Tech Group and start connecting with clients worldwide."
        keywords="create profile, talent profile, professional profile, Zion Tech Group"
        canonical="https://ziontechgroup.com/create-profile"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Profile</h1>
            <p className="text-zion-slate-light">Showcase your skills and connect with amazing opportunities</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'border-zion-cyan bg-zion-cyan text-zion-blue-dark' 
                    : 'border-zion-blue-light text-zion-slate-light'
                }`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-zion-cyan' : 'bg-zion-blue-light'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="bg-zion-blue border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription className="text-zion-slate-light">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location" className="text-white">Location *</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="City, Country"
                    />
                    {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone" className="text-white">Timezone</Label>
                    <Select value={profileData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                      <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                        <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                        <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                        <SelectItem value="UTC+0">UTC+0 (GMT)</SelectItem>
                        <SelectItem value="UTC+1">UTC+1 (CET)</SelectItem>
                        <SelectItem value="UTC+5:30">UTC+5:30 (IST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="headline" className="text-white">Professional Headline *</Label>
                    <Input
                      id="headline"
                      value={profileData.headline}
                      onChange={(e) => handleInputChange('headline', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="e.g., Senior AI Developer, Full-Stack Engineer"
                    />
                    {errors.headline && <p className="text-red-400 text-sm mt-1">{errors.headline}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="bio" className="text-white">Professional Bio *</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Tell us about your experience, expertise, and what makes you unique..."
                      rows={4}
                    />
                    {errors.bio && <p className="text-red-400 text-sm mt-1">{errors.bio}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="yearsOfExperience" className="text-white">Years of Experience</Label>
                      <Select value={profileData.yearsOfExperience} onValueChange={(value) => handleInputChange('yearsOfExperience', value)}>
                        <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="availability" className="text-white">Availability</Label>
                      <Select value={profileData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="hourlyRate" className="text-white">Hourly Rate *</Label>
                      <div className="flex">
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={profileData.hourlyRate}
                          onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                          className="bg-zion-blue-dark border-zion-blue-light text-white rounded-r-none"
                          placeholder="0"
                        />
                        <Select value={profileData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white rounded-l-none border-l-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.hourlyRate && <p className="text-red-400 text-sm mt-1">{errors.hourlyRate}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Portfolio */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Skills & Technologies *</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={profileData.newSkill}
                        onChange={(e) => handleInputChange('newSkill', e.target.value)}
                        className="bg-zion-blue-dark border-zion-blue-light text-white"
                        placeholder="Add a skill (e.g., React, Python, AI/ML)"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} className="bg-zion-purple hover:bg-zion-purple-light">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {errors.skills && <p className="text-red-400 text-sm mb-2">{errors.skills}</p>}
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-red-400"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Work Preferences</Label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remoteWork"
                          checked={profileData.remoteWork}
                          onCheckedChange={(checked) => handleInputChange('remoteWork', checked)}
                        />
                        <Label htmlFor="remoteWork" className="text-zion-slate-light">Open to remote work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="travelWillingness"
                          checked={profileData.travelWillingness}
                          onCheckedChange={(checked) => handleInputChange('travelWillingness', checked)}
                        />
                        <Label htmlFor="travelWillingness" className="text-zion-slate-light">Willing to travel for projects</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Profile Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-zion-slate-light">Name:</p>
                        <p className="text-white">{profileData.firstName} {profileData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Location:</p>
                        <p className="text-white">{profileData.location}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Headline:</p>
                        <p className="text-white">{profileData.headline}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Hourly Rate:</p>
                        <p className="text-white">{profileData.hourlyRate} {profileData.currency}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Skills:</p>
                        <p className="text-white">{profileData.skills.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Availability:</p>
                        <p className="text-white">{profileData.availability}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={profileData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-zion-slate-light">
                      I agree to the <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a> and{' '}
                      <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            >
              Previous
            </Button>
            
            <div className="flex gap-3">
              {currentStep < 4 ? (
                <Button onClick={nextStep} className="bg-zion-purple hover:bg-zion-purple-light">
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-zion-purple hover:bg-zion-purple-light">
                  <Save className="w-4 h-4 mr-2" />
                  Create Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
  );
}