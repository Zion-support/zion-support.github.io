'use client'';
import React, { useState } from 'react';';
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';'
'use client'';
import React, { useState } from 'react';';';
const RequestQuotePage: React.FC = () => {;
const [formData, setFormData] = useState({
  // TODO: Add properties
}
  // TODO: Add properties
}
    name: ',''
    email: ',''
    company: ',''
    phone: ',''
    serviceType: ',''
    projectSize: ',''
    timeline: ',''
    budget: ',''
    description: ',''
    requirements:   ,
$4});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const _serviceTypes = [
  // TODO: Add items
]
  // TODO: Add items
]
    'AI Services','
    'IT Infrastructure','
    'Cybersecurity','
    'Cloud Migration','
    'Micro SAAS Solutions','
    'Digital Transformation','
    'Custom Development','
    'Consulting Services','
    'Other''
  ];
const projectSizes = [
  // TODO: Add items
]
  // TODO: Add items
]
    'Small (1-10 employees)','
    'Medium (11-100 employees)','
    'Large (101-1000 employees)','
    'Enterprise (1000+ employees)''
  ];
const timelines = [
  // TODO: Add items
]
  // TODO: Add items
]
    'ASAP','
    '1-3 months','
    '3-6 months','
    '6-12 months','
    '12+ months','
    'Flexible''
  ];
const budgetRanges = [
  // TODO: Add items
]
  // TODO: Add items
]
    'Under $10,000','
    '$10,000 - $50,000','
    '$50,000 - $100,000','
    '$100,000 - $500,000','
    '$500,000+','
    'To be discussed''
  ];
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
const { name, value } = e.target
    setFormData(prev => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    e.preventDefault()
    setIsSubmitting(true),
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Calculator,
      title: 'Free Quote','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Clock,
      title: 'Quick Response','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: CheckCircle,
      title: 'Transparent Pricing','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Star,
      title: 'Expert Consultation','
      description:     ,
$4}
  ];
const whyChooseUs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Users,
      title: '50+ Successful Projects','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Award,
      title: '300% Average ROI','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Clock,
      title: '24/7 Support','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Star,
      title: '99.9% Uptime','
      description:     ,
$4}
  ]
  if (isSubmitted) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <React.Fragment>
<Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
<div className="
<div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"w-10 h-10 text-green-400"
<h1 className="
                Quote Request Submitted!
              <p className="text-xl text-gray-300 mb-8"bg-slate-800/50 rounded-lg p-6 mb-8"
<h3 className="
                <div className="space-y-3 text-left"flex items-center"
<div className="
                    <span className="text-gray-300"flex items-center"
<div className="
                    <span className="text-gray-300"flex items-center"
<div className="
<span className="text-gray-300"flex flex-col sm: flex-row gap-4 justify-center"
<$2 />
                  href=""
                  className="
<Phone className="w-5 h-5 mr-2"/""border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
<ArrowRight className="
                  Back to Home,

              </div></div>
</div></div>
<Footer /></React.Fragment>
    )
  }
  return (
  // TODO: Add parameters
)
    <React.Fragment>
<Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
          {/* Header */}
          <div className="
<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6 neon-text"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
              Get a detailed, no-obligation quote for your AI and IT project.
              Our experts will provide you with a comprehensive proposal within 24 hours.
          <div className="
            {/* Quote Form */}
            <div className="lg:col-span-2"bg-slate-800/50 rounded-lg p-8 border border-gray-700/50"
<h2 className="
                <form onSubmit={handleSubmit} className="space-y-6"grid grid-cols-1 md:grid-cols-2 gap-6"
<div>
<label className="
                        Full Name *
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"Enter your full name""block text-sm font-medium text-gray-300 mb-2"
                        Email Address *
                      <input
                        type=""
                        name=""
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="
                        placeholder="Enter your email"
                      />
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"block text-sm font-medium text-gray-300 mb-2"
                        Company Name,

                      <input
                        type=""
                        name=""
                        value={formData.company}
                        onChange={handleInputChange}
                        className="
                        placeholder="Enter your company name"
                      /></div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2"tel""phone""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder=""
                      /></div>
</div>
                  {/* Project Information */}
                  <div>
<label className="
                      Service Type *
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"">Select a service type"grid grid-cols-1 md: grid-cols-2 gap-6"
<div>
<label className="
                        Project Size,

                      <select
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"">Select project size</option>"block text-sm font-medium text-gray-300 mb-2"
                        Timeline
                        <option value=">Select timeline"
                        {timelines.map((timeline, index) => (
  // TODO: Add parameters
)
                          <option key={index} value={timeline}>{timeline}
                        ))}
                  <div>
<label className="
                      Budget Range
                      <option value=""
                      {budgetRanges.map((range, index) => (
  // TODO: Add parameters
)
                        <option key={index} value={range}>{range}
                      ))}
                  <div>
<label className="block text-sm font-medium text-gray-300 mb-2"description""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder=""
                    />
<div>
<label className="
                      Specific Requirements,

                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"Any specific technical requirements, integrations, or constraints...""submit""w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    {isSubmitting ? (
  // TODO: Add parameters
)
                      <div className="
<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"space-y-8"
              {/* Benefits */}
              <div className="
<h3 className="text-xl font-bold text-white mb-6"space-y-4"
                  {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
                    <div key={index} className="
<div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"w-4 h-4 text-cyan-400"
<div>
<h4 className="
                        <p className="text-xs text-gray-300"bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"
<h3 className="
                <div className="space-y-4"flex items-start"
<div className="
<item.icon className="w-4 h-4 text-purple-400"text-sm font-semibold text-white mb-1"
                        <p className="
                  ))}
              {/* Contact Info */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6"text-xl font-bold text-white mb-4"
                <p className="
                  For urgent inquiries or immediate assistance, contact us directly.
                <div className="space-y-3"tel: +13024640950""flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
<Phone className="
<span className="text-sm"mailto:kleber@ziontechgroup.com""flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
<Mail className="
<span className="text-sm"/contact""flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
<MessageSquare className="
<span className="text-sm"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900""container mx-auto px-4 py-16 pt-24""max-w-2 xl mx-auto text-center""w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6""w-10 h-10 text-green-400""text-4 xl font-bold text-white mb-6 neon-text"
// Quote Request Submitted!
          </h1>"
              <p className="text-xl text-gray-300 mb-8""
              <div className=""
                <h3 className=""
                <div className=""
                  <div className=""
                    <div className=""
                    <span className="
                  </div>""flex items-center""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white""text-gray-300"
                  </div>"
                  <div className="flex items-center"
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white"
                    <span className="text-gray-300"flex flex-col sm: flex-row gap-4 justify-center"
<$2 />
                  href=" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105""
          <PhoneclassName="
// Contact Us
          </a>
<$2 />
                  href="/"border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
// >
          "
          <ArrowRightclassName="w-4 h-4 mr-2""
      <div className=""
        <div className="
          {/* Header */}""text-center mb-16""text-4 xl,"
  md: text-5 xl font-bold text-white mb-6 neon-text"
</h1>
// Request a Quote
          </h1>
<p className="text-xl text-cyan-400 mb-8 font-medium"grid grid-cols-1 lg:grid-cols-3 gap-12"
            {/* Quote Form */}
            <div className="
<div className="bg-slate-800/50 rounded-lg p-8 border border-gray-700/50"text-2 xl font-bold text-white mb-6"
                <form onSubmit={handleSubmit} className="
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"block text-sm font-medium text-gray-300 mb-2"
// Full Name *
                      <input
type=" name="name"
                        value={formData.name}
                        onChange={handleInputChange}
// required
className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20""
//                       />
<div></div>"
                      <label className="block text-sm font-medium text-gray-300 mb-2"email" name=""
                        value={formData.email}
                        onChange={handleInputChange}
// required
className="Enter your email"""
                  < className="
  md: grid-cols-2 gap-6">""
                      <label className="
// Company Name,
          </label>
<input
type="text"company""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"Enter your company name"
// />
<div></div>""block text-sm font-medium text-gray-300 mb-2"
// Phone Number,
          </label>
<input
type=" name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20""
// />
                  {/* Project Information */}
                  <div></div>"
                    <label className="block text-sm font-medium text-gray-300 mb-2"serviceType" value={formData.serviceType}"w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
//                     >
          "
          <option value=">Select a service type"
                      {serviceTypes.map((type, index) => ()}
          <option key={index} value={type}>{type}
                      ))}
                  </div>""grid grid-cols-1,"
  md: grid-cols-2 gap-6"
</div>
<div></div>""block text-sm font-medium text-gray-300 mb-2"
// Project Size,
          </label>
<select
                        name=" value={formData.projectSize}"
                        onChange={handleInputChange}
                        className="
// >
          "">Select project size""block text-sm font-medium text-gray-300 mb-2"
// Timeline
          "
          <option value=""
                        {timelines.map((timeline, index) => ()}
          <option key={index} value={timeline}>{timeline}
                        ))}
                  <div></div>""block text-sm font-medium text-gray-300 mb-2"
// Budget Range
                    <select
                      name=" value={formData.budget}"
                      onChange={handleInputChange}
                      className="
// >
          "">Select budget range"""
                    <label className="
// Project Description *
                    <textarea
                      name="description"
                      onChange={handleInputChange}
// required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20""
//                     />
<div></div>"
                    <label className="block text-sm font-medium text-gray-300 mb-2"requirements" value={formData.requirements}"w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"Any specific technical requirements, integrations, or constraints..."
// />
<$2 />
type="submit"
                    className="w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed""
          <div className=""
                        <div className="
// Submitting...
                    ) : ()
// 'Request Quote''
                    )}
            {/* Sidebar */}""space-y-8"
              {/* Benefits */}"
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"
                <h3 className="text-xl font-bold text-white mb-6"
                <div className="space-y-4""
          <div key={index} className=""
                      <div className=""
                        <benefit.icon className="
<div></div>""text-sm font-semibold text-white mb-1""text-xs text-gray-300"
                  ))}
              {/* Why Choose Us */}"
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"
                <h3 className="text-xl font-bold text-white mb-6"
                <div className="space-y-4""
          <div key={index} className=""
                      <div className=""
                        <item.icon className="
<div></div>""text-sm font-semibold text-white mb-1""text-xs text-gray-300"
                  ))}
              {/* Contact Info */}"
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6"
                <h3 className="text-xl font-bold text-white mb-4"
                <p className="text-gray-300 text-sm mb-4"
// For urgent inquiries or immediate assistance, contact us directly.
          </p></section>
</main>
<Footer/ />
</div>
  )
}
export default RequestQuotePage</textarea></textarea>;
</HTMLInputElement></textarea>
</textarea></a>
</a></HTMLInputElement>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></span>
</span></span>
</span></span>
</p></p>
</p></p>
</p></p>
</p></p>
</h2></h2>
</h3></h3>
</h3></h3>
</h4></h4>