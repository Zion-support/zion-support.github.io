'use client';
import React, { useState } from 'react';
const RequestQuotePage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const [formData, setFormData] = useState({
  // TODO: Add content;
};
  name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const _serviceTypes = [
  // TODO: Add items;
];;
//     'AI Services',
//     'IT Infrastructure',
//     'Cybersecurity',
//     'Cloud Migration',
//     'Micro SAAS Solutions',
//     'Digital Transformation',
//     'Custom Development',
//     'Consulting Services',
//     'Other'
  ];
  const projectSizes = [
  // TODO: Add items;
];;
//     'Small (1-10, employees)',
//     'Medium (11-100, employees)',
//     'Large (101-1000, employees)',
//     'Enterprise (1000+ employees)'
  ];
  const timelines = [
  // TODO: Add items;
];;
//     'ASAP',
//     '1-3 months',
//     '3-6 months',
//     '6-12 months',
//     '12+ months',
//     'Flexible'
  ];
  const budgetRanges = [
  // TODO: Add items;
];;
//     'Under $10,000',
//     '$10,000 - $50,000',
//     '$50,000 - $100,000',
//     '$100,000 - $500,000',
//     '$500,000+',
//     'To be discussed'
  ];
  const handleInputChange = (e: React.ChangeEvent
          
          
          
          
          
          
          
          ;
  // TODO: Add content;
}
    const { name, value } = e.target;
    setFormData(prev => ({
  // TODO: Add content;
}
//       ...prev,
      [name]: value;
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  // TODO: Add content;
}
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const benefits = [
  // TODO: Add items;
];;
    {
  // TODO: Add content;
};
  icon: Calculator,
      title: 'Free Quote',

    },
    {
  // TODO: Add content;
};



    },
    {
  // TODO: Add content;
};



    },
    {
  // TODO: Add content;
};



    }
  ];
  const whyChooseUs = [
  // TODO: Add items;
];;
    {
  // TODO: Add content;
};



    },
    {
  // TODO: Add content;
};



    },
    {
  // TODO: Add content;
};



    },
    {
  // TODO: Add content;
};



    }
  ];
  if (isSubmitted) {
  // TODO: Add content;
}
    
          
          
          
          
          
          
          
  )
      
// Quote Request Submitted!
              
          
          
          
          
          
          
          
          
                Thank you for your interest in our services. We've received your quote request;
// and will get back to you within 24 hours with a detailed proposal.
              
          
          
          
          
          
          
          
          
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
// >
                  
          
          
          
          
          
          
          
          
// Contact Us
                
          
          
          
          
          
          
          
          ;
                  href="/"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hove,text-slate-900 transition-all duration-300 inline-flex items-center"
// >
                  
          
          
          
          
          
          
          
          
// Back to Home
                
          
          
          
          
          
          
          
          ;
    );
  }
  )
    
          {/* Header */}
// Request a Quote
            
          
          
          
          
          
          
          
          ;
              Get a detailed, no-obligation quote for your AI and IT project.
// Our experts will provide you with a comprehensive proposal within 24 hours.
            
          
          
          
          
          
          
          
          
            {/* Quote Form */}
                  {/* Personal Information */}
// Full Name *
                      
          
          
          
          
          
          
          
          
type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                        placeholder="Enter your full name"
//                       />
                    
          
          
          
          
          
          
          
          
// Email Address *
                      
          
          
          
          
          
          
          
          
type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                        placeholder="Enter your email"
//                       />
                    
          
          
          
          
          
          
          
          
// Company Name
                      
          
          
          
          
          
          
          
          ;
type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                        placeholder="Enter your company name"
// />
                    
          
          
          
          
          
          
          
          
// Phone Number
                      
          
          
          
          
          
          
          
          ;
type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                        placeholder="Enter your phone number"
// />
                    
          
          
          
          
          
          
          
          
                  {/* Project Information */}
// Service Type *
                    
          
          
          
          
          
          
          
          
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
//                     >
                      
          
          
          
          
          
          
          
          
                      {serviceTypes.map((type, index) => ()
                        
                      ))}
// Project Size
                      
          
          
          
          
          
          
          
          ;
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
// >
                        
          
          
          
          
          
          
          
          
                        {projectSizes.map((size, index) => ()
                          
                        ))}
// Timeline
                      
          
          
          
          
          
          
          
          ;
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
// >
                        
          
          
          
          
          
          
          
          
                        {timelines.map((timeline, index) => ()
                          
                        ))}
// Budget Range
                    
          
          
          
          
          
          
          
          ;
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
// >
                      
          
          
          
          
          
          
          
          
                      {budgetRanges.map((range, index) => ()
                        
                      ))}
// Project Description *
                    
          
          
          
          
          
          
          
          
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
// required;
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                      placeholder="Describe your project requirements and goals..."
//                     />
                  
          
          
          
          
          
          
          
          
// Specific Requirements
                    
          
          
          
          
          
          
          
          ;
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,ring-cyan-400/20"
                      placeholder="Any specific technical requirements, integrations, or constraints..."
// />
                  
          
          
          
          
          
          
          
          
type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled: opacity-50 disable,cursor-not-allowed"
// >
                    {isSubmitting ? ()
                      
          
          
          
          
          
          
          
          
// Submitting...
                      
          
          
          
          
          
          
          
          
                    ) : ()
// 'Request Quote'
                    )}
                  
          
          
          
          
          
          
          
          
            {/* Sidebar */}
              {/* Benefits */}
                  {benefits.map((benefit, index) => ()
                    
                  ))}
              {/* Why Choose Us */}
                  {whyChooseUs.map((item, index) => ()
                    
                  ))}
              {/* Contact Info */}
// For urgent inquiries or immediate assistance, contact us directly.
                
          
          
          
          
          
          
          
          
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
// >
                    
          
          
          
          
          
          
          
          
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
// >
                    
          
          
          
          
          
          
          
          
                    href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
// >
                    
          
          
          
          
          
          
          
          
  );
};

export default AiAnalyticsDashboardPage;