'use client';
import React, { useState } from 'react';
const RequestQuotePage: React.FC = () => {
   };
  const [formData, setFormData] = useState({
  // TODO: Add content
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
  // TODO: Add items
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
  // TODO: Add items
];;
//     'Small (1-10 employees)',
//     'Medium (11-100 employees)',
//     'Large (101-1000 employees)',
//     'Enterprise (1000+ employees)'
  ];
  const timelines = [
  // TODO: Add items
];;
//     'ASAP',
//     '1-3 months',
//     '3-6 months',
//     '6-12 months',
//     '12+ months',
//     'Flexible'
  ];
  const budgetRanges = [
  // TODO: Add items
];;
//     'Under $10,000',
//     '$10,000 - $50,000',
//     '$50,000 - $100,000',
//     '$100,000 - $500,000',
//     '$500,000+',
//     'To be discussed'
  ];
  const handleInputChange = (e: React.ChangeEvent
          
          
          
          
          
          
          
          
          <HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  // TODO: Add content
 }
    const { name, value } = e.target;
    setFormData(prev => ({
  // TODO: Add content
 }
//       ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  // TODO: Add content
 }
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const benefits = [
  // TODO: Add items
];;
    {
  // TODO: Add content
 };
  icon: Calculator,
      title: 'Free Quote',
      description: 'Get a detailed, no-obligation quote within 24 hours'
    },
    {
  // TODO: Add content
 };
  icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all quote requests within 4 hours'
     },
    {
  // TODO: Add content
 };
  icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'Clear, detailed pricing with no hidden fees'
    },
    {
  // TODO: Add content
 };
  icon: Star,
      title: 'Expert Consultation',
      description: 'Free consultation with our technology experts'
     }
  ];
  const whyChooseUs = [
  // TODO: Add items
];;
    {
  // TODO: Add content
 };
  icon: Users,
      title: '50+ Successful Projects',
      description: 'Proven track record of delivering results'
     },
    {
  // TODO: Add content
 };
  icon: Award,
      title: '300% Average ROI',
      description: 'Our clients see significant returns on investment'
     },
    {
  // TODO: Add content
 };
  icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all our clients'
     },
    {
  // TODO: Add content
 };
  icon: Star,
      title: '99.9% Uptime',
      description: 'Reliable, high-performance solutions'
    }
  ];
  if (isSubmitted) {
  // TODO: Add content
 }
    <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          </div></div>
            </div></div>
              </div></div>
                </div>
              </div>
              </div>
// Quote Request Submitted!
              
          
          
          
          
          
          
          
          
          </h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in our services. We've received your quote request
// and will get back to you within 24 hours with a detailed proposal.
              
          
          
          
          
          
          
          
          
          </p>
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8"></div>
                </div>What happens next?</h3>
                <div className="space-y-3 text-left"></div>
                  </div></div>
                    </div></div>1</div>
                    <span className="text-gray-300">Our team will review your requirements</span>
                  </div>
                  </div></div>
                    </div></div>2</div>
                    <span className="text-gray-300">We'll prepare a detailed quote and proposal</span>
                  </div>
                  </div></div>
                    </div></div>3</div>
                    <span className="text-gray-300">Schedule a call to discuss your project</span>
                  </div>
                </div>
              </div>
              </div></div>
                </div>
                  
          
          
          
          
          
          
          
          
          <Phone className="w-5 h-5 mr-2" />
// Contact Us
                
          
          
          
          
          
          
          
          
          </a>
                <a
                  href="/"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
// >
                  
          
          
          
          
          
          
          
          
          <ArrowRight className="w-4 h-4 mr-2" />
// Back to Home
                
          
          
          
          
          
          
          
          
          </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
   }
  return (
    <div></div>Coming Soon</div>
  )
    
          <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        </div></div>
          {/* Header */}
          </div></div>
            </div>
// Request a Quote
            
          
          
          
          
          
          
          
          
          </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a detailed;;, no-obligation quote for your AI and IT project.
// Our experts will provide you with a comprehensive proposal within 24 hours.
            
          
          
          
          
          
          
          
          
          </p>
          </div>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-12"></div>
            {/* Quote Form */ }
            <div className="lg:col-span-2"></div>
              <div className="bg-slate-800/50 rounded-lg p-8 border border-gray-700/50"></div>
                <h2 className="text-2xl font-bold text-white mb-6"></h2>Project Details</h2>
                </h2>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
// Full Name *
                      
          
          
          
          
          
          
          
          
          </label>
                      <input;
type="text"
                        name="name"
                        value={formData.name }
                        onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your full name"
//                       />
                    
          
          
          
          
          
          
          
          
          </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
// Email Address *
                      
          
          
          
          
          
          
          
          
          </label>
                      <input;
type="email"
                        name="email"
                        value={formData.email }
                        onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your email"
//                       />
                    
          
          
          
          
          
          
          
          
          </div>
                  </div>
                  </div></div>
                    </div></div>
                      </div>
// Company Name
                      
          
          
          
          
          
          
          
          
          </label>
                      <input;
type="text"
                        name="company"
                        value={formData.company }
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your company name"
// />
                    
          
          
          
          
          
          
          
          
          </div>
                    </div></div>
                      </div>
// Phone Number
                      
          
          
          
          
          
          
          
          
          </label>
                      <input;
type="tel"
                        name="phone"
                        value={formData.phone }
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Enter your phone number"
// />
                    
          
          
          
          
          
          
          
          
          </div>
                  </div>
                  {/* Project Information */ }
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
// Service Type *
                    
          
          
          
          
          
          
          
          
          </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
// required;
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
//                     >
                      
          
          
          
          
          
          
          
          
          <option value="">Select a service type</option>
                      {serviceTypes.map((type, index) => ()
                        
          <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  </div></div>
                    </div></div>
                      </div>
// Project Size
                      
          
          
          
          
          
          
          
          
          </label>
                      <select
                        name="projectSize"
                        value={formData.projectSize;;}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
// >
                        
          
          
          
          
          
          
          
          
          <option value="">Select project size</option>
                        {projectSizes.map((size, index) => ()
                          
          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
// Timeline
                      
          
          
          
          
          
          
          
          
          </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
// >
                        
          
          
          
          
          
          
          
          
          <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => ()
                          
          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
// Budget Range
                    
          
          
          
          
          
          
          
          
          </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
// >
                      
          
          
          
          
          
          
          
          
          <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => ()
                        
          <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  </div></div>
                    </div>
// Project Description *
                    
          
          
          
          
          
          
          
          
          </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
// required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Describe your project requirements and goals..."
//                     />
                  
          
          
          
          
          
          
          
          
          </div>
                  </div></div>
                    </div>
// Specific Requirements
                    
          
          
          
          
          
          
          
          
          </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements }
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Any specific technical requirements, integrations, or constraints..."
// />
                  
          
          
          
          
          
          
          
          
          </div>
                  </div>
                    {isSubmitting ? ()
                      
          
          
          
          
          
          
          
          
          <div className="flex items-center justify-center"></div>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// Submitting...
                      
          
          
          
          
          
          
          
          
          </div>
                    ) : ()
// 'Request Quote'
                    );;}
                  
          
          
          
          
          
          
          
          
          </div>
                </form>
              </div>
            </div>
            {/* Sidebar */}
            </div></div>
              {/* Benefits */}
              </div></div>
                </div>Why Request a Quote?</h3>
                <div className="space-y-4"></div>
                  {benefits.map((benefit, index) => ()
                    
          </div></div>
                      </div></div>
                        </div>
                      </div>
                      </div></div>
                        </div>{benefit.title}</h4>
                        <p className="text-xs text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Why Choose Us */}
              </div></div>
                </div>Why Choose Us?</h3>
                <div className="space-y-4"></div>
                  {whyChooseUs.map((item, index) => ()
                    
          </div></div>
                      </div></div>
                        </div>
                      </div>
                      </div></div>
                        </div>{item.title}</h4>
                        <p className="text-xs text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact Info */}
              </div></div>
                </div>Need Immediate Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
// For urgent inquiries or immediate assistance, contact us directly.
                
          
          
          
          
          
          
          
          
          </p>
                <div className="space-y-3"></div>
                  </div>
                    
          
          
          
          
          
          
          
          
          <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto: kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
// >
                    
          
          
          
          
          
          
          
          
          <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
// >
                    
          
          
          
          
          
          
          
          
          <MessageSquare className="w-4 h-4 mr-2" />
                    <span className="text-sm">Contact Form</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
 };
export default RequestQuotePage;