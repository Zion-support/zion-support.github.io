import React, { useState } from 'react';
<<<<<<< HEAD
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
=======
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
;
const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',';,';,
    lastName: '',';,';,
    email: '',';,';,
    company: '',';,';,
    phone: '',';,';,
    jobTitle: '',';,';,
    companySize: '',';,';,
    useCase: '',';,';,
    preferredDate: '',';,';,
    preferredTime: '',';,';,
    timeZone: '',';,';,
    message: '',';,
  });

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)  => {,,
  setFormData({
      ...formData
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit: (e: React.FormEvent)  => {,,
  e.preventDefault();
    console.log('Form submitted: ', formData);';,';,
  };

  const demoFeatures: [,
    {
      title: 'AI-Powered Automation',';,';,
      description: 'See how our AI can automate your repetitive tasks and workflows',';,';,
      icon: '🤖',';,
    },
    {
      title: 'Real-time Analytics',';,';,
      description: 'Experience our advanced analytics and reporting capabilities',';,';,
      icon: '📊',';,
    },
    {
      title: 'Custom Integrations',';,';,
      description: 'Learn how we can integrate with your existing systems',';,';,
      icon: '🔗',';,
    },
    {
      title: 'Security & Compliance',';,';,
      description: 'Understand our enterprise-grade security and compliance features',';,';,
      icon: '🔒',';,
    }
  ];

  const testimonials: [,
    {
      name: 'Sarah Johnson',';,';,
      company: 'TechCorp',';,';,
      role: 'CTO',';,';,
      content: 'The demo showed us exactly how AI could transform our operations. The ROI was clear from day one.',';,';,
      rating: 5,
    },
    {
      name: 'Michael Chen',';,';,
      company: 'FinanceFlow',';,';,
      role: 'VP of Operations',';,';,
      content: "Zion Tech Group's demo was eye-opening. We saw immediate value and signed up the same week.",
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',';,';,
      company: 'HealthTech Solutions',';,';,
      role: 'CEO',';,';,
      content: 'The personalized demo addressed all our specific needs. Highly recommend scheduling one.',';,';,
      rating: 5,
    }
  ];

  const timeSlots: [,
    '9: 00 AM', '10:00 AM', '11:00 AM', '12:00 PM',';,';,
    '1: 00 PM', '2:00 PM', '3:00 PM', '4:00 PM',';,
  ];

  const companySizes: [,
    '1-10 employees',';';
    '11-50 employees',';';
    '51-200 employees',';';
    '201-1000 employees',';';
    '1000+ employees
  ];

  const useCases: [,
    'Process Automation',';';
    'Data Analytics',';';
    'Customer Service',';';
    'Supply Chain Optimization',';';
    'Predictive Maintenance',';';
    'Document Processing',';';
    'Other
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See how our AI solutions can transform your business. Book a personalized demo 
              tailored to your specific needs and challenges.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Calendar className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span >30 minutes</span>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span >1-on-1 with expert</span>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See how our AI solutions can transform your business. Book a personalized demo 
              tailored to your specific needs and challenges.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Calendar className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span >30 minutes</span>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span >1-on-1 with expert</span>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <span >Live demonstration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  What You'll See in the Demo';';
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  What You'll See in the Demo';';
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Get a comprehensive overview of our AI solutions tailored to your business
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.icon}</div>";
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.icon}</div>";
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Book Your Demo
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Book Your Demo
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Fill out the form below and we'll contact you to schedule your personalized demo';';
              </p>
            </div>

            <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
            <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {/* Personal Information */}
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  First Name *
                  </label>
                  <input type="text",
  id="firstName",
  name="firstName",
  required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Last Name *
                  </label>
                  <input type="text",
  id="lastName",
  name="lastName",
  required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Email Address *
                  </label>
                  <input type="email",
  id="email",
  name="email",
  required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    value={formData.email}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Phone Number
                  </label>
                  <input type="tel",
  id="phone",
  name="phone",
  value={formData.phone}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
              </div>

              {/* Company Information */}
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Company Name *
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
                  </label>
                  <input type="text",
  id="company",
  name="company",
  required
                    value={formData.company}
                    onChange={handleInputChange}
<<<<<<< HEAD
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
=======
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "jobTitle", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    value={formData.company}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "jobTitle", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Job Title *
                  </label>
                  <input type="text",
  id="jobTitle",
  name="jobTitle",
  required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "companySize", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "companySize", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Company Size *
                  </label>
                  <select id="companySize",
  name="companySize",
  required
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select company size</option>", {companySizes.map((size)  => (
                      <option key="{size} value={size}">{size}</option>
                    ))}
                  </select>
                </div>
                <div >
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Primary Use Case *
                  </label>
                  <select id="useCase",
  name="useCase",
  required
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select use case</option>", {useCases.map((useCase)  => (
                      <option key="{useCase} value={useCase}">{useCase}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Scheduling */}
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "preferredDate", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div >
                  <label htmlFor: "preferredDate", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Preferred Date
                  </label>
                  <input type="date",
  id="preferredDate",
  name="preferredDate",
  value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <div >
                  <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Preferred Time
                  </label>
                  <select id="preferredTime",
  name="preferredTime",
  value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select time</option>", {timeSlots.map((time)  => (
                      <option key="{time} value={time}">{time}</option>
                    ))}
                  </select>
                </div>
                <div >
                  <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Time Zone
                  </label>
                  <select id="timeZone",
  name="timeZone",
  value={formData.timeZone}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select timezone</option>", <option value: "EST", >Eastern Time (EST)</h3>
                    <option value: "CST", >Central Time (CST)</h3>
                    <option value: "MST", >Mountain Time (MST)</h3>
                    <option value: "PST", >Pacific Time (PST)</h3>
                    <option value: "GMT", >Greenwich Mean Time (GMT)</h3>
                  </select>
                </div>
              </div>

              <div >
                <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Additional Information
                </label>
                <textarea id="message",
  name="message",
  rows: {4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific needs, challenges, or questions...",
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Schedule My Demo
                </button>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific needs, challenges, or questions...",
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Schedule My Demo
                </button>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  * Required fields. We'll contact you within 24 hours to confirm your demo time.';';
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  What Our Clients Say
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  What Our Clients Say
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See what happens when you schedule a demo
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  ))}
                </div>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">";
                <div >
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</p>";
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}, {testimonial.company}</p>";
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  ))}
                </div>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"{testimonial.content}"</p>";
                <div >
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</p>";
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}, {testimonial.company}</p>";
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Ready to See AI in Action?
          </h2>
          <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Join thousands of businesses that have transformed their operations with our AI solutions.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Ready to See AI in Action?
          </h2>
          <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Join thousands of businesses that have transformed their operations with our AI solutions.
          </p>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Contact Us Now
            </Link>
            <Link to="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
  );
};

export default Component;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Play } from 'lucide-react'';
;
const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',';,';,
    lastName: '',';,';,
    email: '',';,';,
    phone: '',';,';,
    company: '',';,';,
    useCase: '',';,';,
    preferredTime: '',';,';,
    timeZone: '',';,';,
    message: '',';,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)  => {,,
  const { name, value } = e.target;
    setFormData(prev: > ({,
      ...prev
      [name]: value
    }));
  };

  const handleSubmit: (e: React.FormEvent)  => {,,
  e.preventDefault();
    // Handle form submission here
    console.log('Demo request submitted: ', formData);';,';,
    setIsSubmitted(true);
  };

  const useCases: [,
    'AI Automation',';';
    'Cybersecurity Solutions',';';
    'Cloud Infrastructure',';';
    'Data Analytics',';';
    'DevOps Services',';';
    'Digital Transformation',';';
    'Other
  ];

  const timeSlots: [,
    '9: 00 AM - 10:00 AM',';,';,
    '10: 00 AM - 11:00 AM',';,';,
    '11: 00 AM - 12:00 PM',';,';,
    '1: 00 PM - 2:00 PM',';,';,
    '2: 00 PM - 3:00 PM',';,';,
    '3: 00 PM - 4:00 PM',';,';,
    '4: 00 PM - 5:00 PM',';,
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet >
          <title >Demo Request Submitted - Zion Tech Group</title>
          <meta name="description", content ="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration." />
          <meta name="description" content="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration." />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            </div>
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Demo Request Submitted!
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Thank you for your interest in our solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link to="/",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            </div>
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Demo Request Submitted!
            </h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Thank you for your interest in our solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link to="/",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Return to Home
              </Link>
              <Link to="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet >
        <title >Request a Demo - Zion Tech Group</title>
        <meta name="description", content="Schedule a personalized demonstration of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords", content ="demo, demonstration, AI solutions, technology showcase, business transformation" />
        <link rel="canonical", href ="https://ziontechgroup.com/demo" />
        <meta name="description" content="Schedule a personalized demonstration of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords", content="demo, demonstration, AI solutions, technology showcase, business transformation" />
        <link rel="canonical", href ="https://ziontechgroup.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request a Demo
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  30-minute session
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert presenter
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request a Demo
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  30-minute session
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert presenter
                </div>
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Star className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Customized demo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
                </h2>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Schedule Your Demo
                </h2>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Fill out the form below and we'll contact you to schedule your personalized demonstration.';';
                </p>
              </div>

              <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                {/* Personal Information */}
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "firstName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  First Name *
                    </label>
                    <input type="text",
  id="firstName",
  name="firstName",
  value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "lastName", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Last Name *
                    </label>
                    <input type="text",
  id="lastName",
  name="lastName",
  value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "email", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Email Address *
                    </label>
                    <input type="email",
  id="email",
  name="email",
  value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                  <div >
                    <label htmlFor: "phone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Phone Number
                    </label>
                    <input type="tel",
  id="phone",
  name="phone",
  value={formData.phone}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  </div>
                </div>

                <div >
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "company", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Company *
                  </label>
                  <input type="text",
  id="company",
  name="company",
  value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div >
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "useCase", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Primary Use Case
                  </label>
                  <select id="useCase",
  name="useCase",
  value={formData.useCase}
                    onChange={handleInputChange}
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <option value: ">Select a use case</option>", {useCases.map((useCase)  => (
                      <option key="{useCase} value={useCase}">
                        {useCase}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <label htmlFor: "preferredTime", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Preferred Time Slot
                    </label>
                    <select id="preferredTime",
  name="preferredTime",
  value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <option value: ">Select a time</option>", {timeSlots.map((time)  => (
                        <option key="{time} value={time}">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div >
                    <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    <label htmlFor: "timeZone", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Time Zone
                    </label>
                    <select id="timeZone",
  name="timeZone",
  value={formData.timeZone}
                      onChange={handleInputChange}
                      className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <option value: ">Select time zone</option>", <option value: "EST", >Eastern Time (EST)</h3>
                      <option value: "CST", >Central Time (CST)</h3>
                      <option value: "MST", >Mountain Time (MST)</h3>
                      <option value: "PST", >Pacific Time (PST)</h3>
                      <option value: "GMT", >Greenwich Mean Time (GMT)</h3>
                      <option value: "CET", >Central European Time (CET)</h3>
                      <option value: "IST", >India Standard Time (IST)</h3>
                      <option value: "JST", >Japan Standard Time (JST)</h3>
                    </select>
                  </div>
                </div>

                <div >
                  <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                  <label htmlFor: "message", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Additional Information
                  </label>
                  <textarea id="message",
  name="message",
  value={formData.message}
                    onChange={handleInputChange}
                    rows: {4}
                    placeholder="Tell us about your specific needs, challenges, or questions...",
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
                    placeholder="Tell us about your specific needs, challenges, or questions...",
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>

                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <button type="submit",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <Play className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Why Schedule a Demo?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Why Schedule a Demo?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See firsthand how our solutions can transform your business
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Personalized Experience
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <User className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Personalized Experience
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Our experts tailor the demonstration to your specific industry and use cases.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Real-World Examples
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Real-World Examples
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  See our solutions in action with real business scenarios and case studies.
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Mail className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert Q&A
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Mail className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Expert Q&A
                </h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Get answers to your specific questions from our technical experts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;