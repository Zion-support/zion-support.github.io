import React, { useState } from 'react';';
import { Link } from 'react-router-dom';';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Play } from 'lucide-react';
;
const Demo: React.FC: ()  => {,,,
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

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)  => {,,,
  setFormData({
      ...formData
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit: (e: React.FormEvent)  => {,,,
  e.preventDefault();
    console.log('Form submitted: ', formData);';,';,
  };

  const demoFeatures: [,,
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

  const testimonials: [,,
    {
      name: 'Sarah Johnson',';,';,
      company: 'TechCorp',';,';,
      role: 'CTO',';,';,
      content: 'The demo showed us exactly how AI could transform our operations. The ROI was clear from day one.',';,';,
      rating: 5,,
    },
    {
      name: 'Michael Chen',';,';,
      company: 'FinanceFlow',';,';,
      role: 'VP of Operations',';,';,
      content: "Zion Tech Group's demo was eye-opening. We saw immediate value and signed up the same week.",";,";,
      rating: 5,,
    },
    {
      name: 'Emily Rodriguez',';,';,
      company: 'HealthTech Solutions',';,';,
      role: 'CEO',';,';,
      content: 'The personalized demo addressed all our specific needs. Highly recommend scheduling one.',';,';,
      rating: 5,,
    }
  ];

  const timeSlots: [,,
    '9: 00 AM', '10:00 AM', '11:00 AM', '12:00 PM',';,';,
    '1: 00 PM', '2:00 PM', '3:00 PM', '4:00 PM',';,
  ];

  const companySizes: [,,
    '1-10 employees',';';
    '11-50 employees',';';
    '51-200 employees',';';
    '201-1000 employees',';';
    '1000+ employees'
  ];

  const useCases: [,,
    'Process Automation',';';
    'Data Analytics',';';
    'Customer Service',';';
    'Supply Chain Optimization',';';
    'Predictive Maintenance',';';
    'Document Processing',';';
    'Other'
  ];

  return (
    <div className: "min-h-screen bg-gray-50">";,";,
      {/* Hero Section */}
      <section className: "bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">";,";,
        <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,";,
          <div className: "text-center">";,";,
            <h1 className: "text-4xl md:text-6xl font-bold mb-6">,";,";,
  Schedule Your Demo
            </h1>
            <p className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto">,";,";,
  See how our AI solutions can transform your business. Book a personalized demo 
              tailored to your specific needs and challenges.
            </p>
            <div className: "flex items-center justify-center space-x-8 text-blue-100">";,";,
              <div className: "flex items-center">";,";,
                <Calendar className: "w-5 h-5 mr-2" />";,";,
                <span >30 minutes</span>
              </div>
              <div className: "flex items-center">";,";,
                <User className: "w-5 h-5 mr-2" />";,";,
                <span >1-on-1 with expert</span>
              </div>
              <div className: "flex items-center">";,";,
                <Play className: "w-5 h-5 mr-2" />";,";,
                <span >Live demonstration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className: "py-20 bg-white">";,";,
        <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,";,
          <div className: "text-center mb-16">";,";,
            <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,";,";,
  What You'll See in the Demo';';
            </h2>
            <p className: "text-xl text-gray-600 max-w-2xl mx-auto">,";,";,
  Get a comprehensive overview of our AI solutions tailored to your business
            </p>
          </div>
          
          <div className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";,";,
            {demoFeatures.map((feature, index) => (
              <div key: {index} className: "text-center">";,";,
                <div className: "text-4xl mb-4">{feature.icon}</div>";";
                <h3 className: "text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";";
                <p className: "text-gray-600">{feature.description}</p>";";
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className: "py-20 bg-gray-50">";,";,
        <div className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">";,";,
          <div className: "bg-white rounded-lg shadow-lg p-8">";,";,
            <div className: "text-center mb-8">";,";,
              <h2 className: "text-3xl font-bold text-gray-900 mb-4">,";,";,
  Book Your Demo
              </h2>
              <p className: "text-gray-600">,";,";,
  Fill out the form below and we'll contact you to schedule your personalized demo';';
              </p>
            </div>

            <form onSubmit: {handleSubmit} className: "space-y-6">";,";,
              {/* Personal Information */}
              <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                <div >
                  <label htmlFor: "firstName" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  First Name *
                  </label>
                  <input type: "text",";,";,
  id: "firstName",";,";,
  name: "firstName",";,";,
  required
                    value: {formData.firstName}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
                <div >
                  <label htmlFor: "lastName" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Last Name *
                  </label>
                  <input type: "text",";,";,
  id: "lastName",";,";,
  name: "lastName",";,";,
  required
                    value: {formData.lastName}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
              </div>

              <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                <div >
                  <label htmlFor: "email" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Email Address *
                  </label>
                  <input type: "email",";,";,
  id: "email",";,";,
  name: "email",";,";,
  required
                    value: {formData.email}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
                <div >
                  <label htmlFor: "phone" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Phone Number
                  </label>
                  <input type: "tel",";,";,
  id: "phone",";,";,
  name: "phone",";,";,
  value: {formData.phone}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                <div >
                  <label htmlFor: "company" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Company Name *
                  </label>
                  <input type: "text",";,";,
  id: "company",";,";,
  name: "company",";,";,
  required
                    value: {formData.company}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
                <div >
                  <label htmlFor: "jobTitle" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Job Title *
                  </label>
                  <input type: "text",";,";,
  id: "jobTitle",";,";,
  name: "jobTitle",";,";,
  required
                    value: {formData.jobTitle}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
              </div>

              <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                <div >
                  <label htmlFor: "companySize" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Company Size *
                  </label>
                  <select id: "companySize",";,";,
  name: "companySize",";,";,
  required
                    value: {formData.companySize}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  >
                    <option value: "">Select company size</option>";,";,
                    {companySizes.map((size)  => (
                      <option key: {size} value: {size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div >
                  <label htmlFor: "useCase" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Primary Use Case *
                  </label>
                  <select id: "useCase",";,";,
  name: "useCase",";,";,
  required
                    value: {formData.useCase}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  >
                    <option value: "">Select use case</option>";,";,
                    {useCases.map((useCase)  => (
                      <option key: {useCase} value: {useCase}>{useCase}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Scheduling */}
              <div className: "grid grid-cols-1 md:grid-cols-3 gap-6">";,";,
                <div >
                  <label htmlFor: "preferredDate" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Preferred Date
                  </label>
                  <input type: "date",";,";,
  id: "preferredDate",";,";,
  name: "preferredDate",";,";,
  value: {formData.preferredDate}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  />
                </div>
                <div >
                  <label htmlFor: "preferredTime" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Preferred Time
                  </label>
                  <select id: "preferredTime",";,";,
  name: "preferredTime",";,";,
  value: {formData.preferredTime}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  >
                    <option value: "">Select time</option>";,";,
                    {timeSlots.map((time)  => (
                      <option key: {time} value: {time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div >
                  <label htmlFor: "timeZone" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Time Zone
                  </label>
                  <select id: "timeZone",";,";,
  name: "timeZone",";,";,
  value: {formData.timeZone}
                    onChange: {handleInputChange}
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                  >
                    <option value: "">Select timezone</option>";,";,
                    <option value: "EST">Eastern Time (EST)</option>";,";,
                    <option value: "CST">Central Time (CST)</option>";,";,
                    <option value: "MST">Mountain Time (MST)</option>";,";,
                    <option value: "PST">Pacific Time (PST)</option>";,";,
                    <option value: "GMT">Greenwich Mean Time (GMT)</option>";,";,
                  </select>
                </div>
              </div>

              <div >
                <label htmlFor: "message" className: "block text-sm font-medium text-gray-700 mb-2">,";,";,
  Additional Information
                </label>
                <textarea id: "message",";,";,
  name: "message",";,";,
  rows: {4}
                  value: {formData.message}
                  onChange: {handleInputChange}
                  placeholder: "Tell us about your specific needs, challenges, or questions...",";,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",";,
                />
              </div>

              <div className: "text-center">";,";,
                <button type: "submit",";,";,
  className: "bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg",";,
                >
                  Schedule My Demo
                </button>
                <p className: "text-sm text-gray-500 mt-4">";,";,
                  * Required fields. We'll contact you within 24 hours to confirm your demo time.';';
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className: "py-20 bg-white">";,";,
        <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,";,
          <div className: "text-center mb-16">";,";,
            <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,";,";,
  What Our Clients Say
            </h2>
            <p className: "text-xl text-gray-600">,";,";,
  See what happens when you schedule a demo
            </p>
          </div>
          
          <div className: "grid grid-cols-1 md:grid-cols-3 gap-8">";,";,
            {testimonials.map((testimonial, index) => (
              <div key: {index} className: "bg-gray-50 rounded-lg p-8">";,";,
                <div className: "flex items-center mb-4">";,";,
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key: {i} className: "w-5 h-5 text-yellow-400 fill-current" />";,";,
                  ))}
                </div>
                <p className: "text-gray-700 mb-6 italic">"{testimonial.content}"</p>";";
                <div >
                  <p className: "font-semibold text-gray-900">{testimonial.name}</p>";";
                  <p className: "text-gray-600">{testimonial.role}, {testimonial.company}</p>";";
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className: "py-20 bg-gradient-to-r from-blue-600 to-purple-600">";,";,
        <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";,";,
          <h2 className: "text-3xl md:text-4xl font-bold text-white mb-4">,";,";,
  Ready to See AI in Action?
          </h2>
          <p className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto">,";,";,
  Join thousands of businesses that have transformed their operations with our AI solutions.
          </p>
          <div className: "flex flex-col sm:flex-row gap-4 justify-center">";,";,
            <Link to: "/contact",";,";,
  className: "bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",";,
            >
              Contact Us Now
            </Link>
            <Link to: "/case-studies",";,";,
  className: "border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors",";,
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
import React, { useState } from 'react';';
import { Link } from 'react-router-dom';';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, Play } from 'lucide-react';';
import { Helmet } from 'react-helmet-async';
;
const Demo: React.FC: ()  => {,,,
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

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)  => {,,,
  const { name, value } = e.target;
    setFormData(prev: > ({,,
      ...prev
      [name]: value
    }));
  };

  const handleSubmit: (e: React.FormEvent)  => {,,,
  e.preventDefault();
    // Handle form submission here
    console.log('Demo request submitted: ', formData);';,';,
    setIsSubmitted(true);
  };

  const useCases: [,,
    'AI Automation',';';
    'Cybersecurity Solutions',';';
    'Cloud Infrastructure',';';
    'Data Analytics',';';
    'DevOps Services',';';
    'Digital Transformation',';';
    'Other'
  ];

  const timeSlots: [,,
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
          <meta name: "description" content ="Thank you for requesting a demo. We'll contact you soon to schedule your personalized demonstration." />";,";,
        </Helmet>

        <div className: "min-h-screen bg-gray-50 flex items-center justify-center">";,";,
          <div className: "max-w-md mx-auto text-center">";,";,
            <div className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";,";,
              <CheckCircle className: "h-8 w-8 text-green-600" />";,";,
            </div>
            <h1 className: "text-3xl font-bold text-gray-900 mb-4">,";,";,
  Demo Request Submitted!
            </h1>
            <p className: "text-lg text-gray-600 mb-8">,";,";,
  Thank you for your interest in our solutions. Our team will contact you within 24 hours to schedule your personalized demonstration.
            </p>
            <div className: "space-y-4">";,";,
              <Link to: "/",";,";,
  className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors",";,
              >
                Return to Home
              </Link>
              <Link to: "/contact",";,";,
  className: "block text-blue-600 hover:text-blue-700 font-semibold",";,
              >
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
        <meta name: "description" content="Schedule a personalized demonstration of our AI and IT solutions. See how our technology can transform your business." />";,";,
        <meta name: "keywords" content ="demo, demonstration, AI solutions, technology showcase, business transformation" />";,";,
        <link rel: "canonical" href ="https://ziontechgroup.com/demo" />";,";,
      </Helmet>

      <div className: "min-h-screen bg-gray-50">";,";,
        {/* Hero Section */}
        <section className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">";,";,
          <div className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";,";,
            <div className: "text-center">";,";,
              <h1 className: "text-4xl md:text-5xl font-bold mb-6">,";,";,
  Request a Demo
              </h1>
              <p className: "text-xl mb-8 max-w-3xl mx-auto">,";,";,
  See our AI and IT solutions in action. Schedule a personalized demonstration tailored to your business needs.
              </p>
              <div className: "flex items-center justify-center space-x-8 text-sm">";,";,
                <div className: "flex items-center">";,";,
                  <Clock className: "h-4 w-4 mr-2" />,";,";,
  30-minute session
                </div>
                <div className: "flex items-center">";,";,
                  <User className: "h-4 w-4 mr-2" />,";,";,
  Expert presenter
                </div>
                <div className: "flex items-center">";,";,
                  <Star className: "h-4 w-4 mr-2" />,";,";,
  Customized demo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section className: "py-20 px-4 sm:px-6 lg:px-8">";,";,
          <div className: "max-w-4xl mx-auto">";,";,
            <div className: "bg-white rounded-lg shadow-lg p-8">";,";,
              <div className: "text-center mb-8">";,";,
                <h2 className: "text-3xl font-bold text-gray-900 mb-4">,";,";,
  Schedule Your Demo
                </h2>
                <p className: "text-gray-600">,";,";,
  Fill out the form below and we'll contact you to schedule your personalized demonstration.';';
                </p>
              </div>

              <form onSubmit: {handleSubmit} className: "space-y-6">";,";,
                {/* Personal Information */}
                <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                  <div >
                    <label htmlFor: "firstName" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  First Name *
                    </label>
                    <input type: "text",";,";,
  id: "firstName",";,";,
  name: "firstName",";,";,
  value: {formData.firstName}
                      onChange: {handleInputChange}
                      required
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    />
                  </div>
                  <div >
                    <label htmlFor: "lastName" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Last Name *
                    </label>
                    <input type: "text",";,";,
  id: "lastName",";,";,
  name: "lastName",";,";,
  value: {formData.lastName}
                      onChange: {handleInputChange}
                      required
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    />
                  </div>
                </div>

                <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                  <div >
                    <label htmlFor: "email" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Email Address *
                    </label>
                    <input type: "email",";,";,
  id: "email",";,";,
  name: "email",";,";,
  value: {formData.email}
                      onChange: {handleInputChange}
                      required
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    />
                  </div>
                  <div >
                    <label htmlFor: "phone" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Phone Number
                    </label>
                    <input type: "tel",";,";,
  id: "phone",";,";,
  name: "phone",";,";,
  value: {formData.phone}
                      onChange: {handleInputChange}
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    />
                  </div>
                </div>

                <div >
                  <label htmlFor: "company" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Company *
                  </label>
                  <input type: "text",";,";,
  id: "company",";,";,
  name: "company",";,";,
  value: {formData.company}
                    onChange: {handleInputChange}
                    required
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                  />
                </div>

                <div >
                  <label htmlFor: "useCase" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Primary Use Case
                  </label>
                  <select id: "useCase",";,";,
  name: "useCase",";,";,
  value: {formData.useCase}
                    onChange: {handleInputChange}
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                  >
                    <option value: "">Select a use case</option>";,";,
                    {useCases.map((useCase)  => (
                      <option key: {useCase} value: {useCase}>
                        {useCase}
                      </option>
                    ))}
                  </select>
                </div>

                <div className: "grid grid-cols-1 md:grid-cols-2 gap-6">";,";,
                  <div >
                    <label htmlFor: "preferredTime" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Preferred Time Slot
                    </label>
                    <select id: "preferredTime",";,";,
  name: "preferredTime",";,";,
  value: {formData.preferredTime}
                      onChange: {handleInputChange}
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    >
                      <option value: "">Select a time</option>";,";,
                      {timeSlots.map((time)  => (
                        <option key: {time} value: {time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div >
                    <label htmlFor: "timeZone" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Time Zone
                    </label>
                    <select id: "timeZone",";,";,
  name: "timeZone",";,";,
  value: {formData.timeZone}
                      onChange: {handleInputChange}
                      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                    >
                      <option value: "">Select time zone</option>";,";,
                      <option value: "EST">Eastern Time (EST)</option>";,";,
                      <option value: "CST">Central Time (CST)</option>";,";,
                      <option value: "MST">Mountain Time (MST)</option>";,";,
                      <option value: "PST">Pacific Time (PST)</option>";,";,
                      <option value: "GMT">Greenwich Mean Time (GMT)</option>";,";,
                      <option value: "CET">Central European Time (CET)</option>";,";,
                      <option value: "IST">India Standard Time (IST)</option>";,";,
                      <option value: "JST">Japan Standard Time (JST)</option>";,";,
                    </select>
                  </div>
                </div>

                <div >
                  <label htmlFor: "message" className: "block text-sm font-medium text-gray-700 mb-1">,";,";,
  Additional Information
                  </label>
                  <textarea id: "message",";,";,
  name: "message",";,";,
  value: {formData.message}
                    onChange: {handleInputChange}
                    rows: {4}
                    placeholder: "Tell us about your specific needs, challenges, or questions...",";,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",";,
                  />
                </div>

                <div className: "text-center">";,";,
                  <button type: "submit",";,";,
  className: "inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors",";,
                  >
                    <Play className: "mr-2 h-5 w-5" />,";,";,
  Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className: "py-20 px-4 sm:px-6 lg:px-8 bg-white">";,";,
          <div className: "max-w-7xl mx-auto">";,";,
            <div className: "text-center mb-16">";,";,
              <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,";,";,
  Why Schedule a Demo?
              </h2>
              <p className: "text-xl text-gray-600">,";,";,
  See firsthand how our solutions can transform your business
              </p>
            </div>

            <div className: "grid grid-cols-1 md:grid-cols-3 gap-8">";,";,
              <div className: "text-center">";,";,
                <div className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">";,";,
                  <User className: "h-8 w-8 text-blue-600" />";,";,
                </div>
                <h3 className: "text-xl font-semibold text-gray-900 mb-2">,";,";,
  Personalized Experience
                </h3>
                <p className: "text-gray-600">,";,";,
  Our experts tailor the demonstration to your specific industry and use cases.
                </p>
              </div>

              <div className: "text-center">";,";,
                <div className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">";,";,
                  <CheckCircle className: "h-8 w-8 text-green-600" />";,";,
                </div>
                <h3 className: "text-xl font-semibold text-gray-900 mb-2">,";,";,
  Real-World Examples
                </h3>
                <p className: "text-gray-600">,";,";,
  See our solutions in action with real business scenarios and case studies.
                </p>
              </div>

              <div className: "text-center">";,";,
                <div className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">";,";,
                  <Mail className: "h-8 w-8 text-purple-600" />";,";,
                </div>
                <h3 className: "text-xl font-semibold text-gray-900 mb-2">,";,";,
  Expert Q&A
                </h3>
                <p className: "text-gray-600">,";,";,
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

export default Demo;