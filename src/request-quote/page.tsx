<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components;
import Footer from '../components;
'use client';
import React, { useState } from 'react';
const RequestQuotePage: React.FC = () => {;
const [formData, setFormData] = useState({}
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    requirements:   ,)
$4});
=======
'use client;

import React, { useState } from 'react;

import { Link } from 'react-router-dom;

import Navigation from ../components
import Footer from ../components

'use client;

import React, { useState } from 'react;

const RequestQuotePage: React.FC = () => {;

const [formData, setFormData] = useState({
    name: ',
    email: ',
    company: ',
    phone: ',
    serviceType: ',
    projectSize: ',
    timeline: ',
    budget: ',
    description: ',
    requirements:   ,)
$4});

>>>>>>> origin/main
;

const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
;
const _serviceTypes = []
    'AI Services',
    'IT Infrastructure',
    'Cybersecurity',
    'Cloud Migration',
    'Micro SAAS Solutions',
    'Digital Transformation',
    'Custom Development',
    'Consulting Services',
    'Other'
=======

  const [isSubmitted, setIsSubmitted] = useState(false);

const _serviceTypes = [;;

    'AI Services,
    'IT Infrastructure,
    'Cybersecurity,
    'Cloud Migration,
    'Micro SAAS Solutions,
    'Digital Transformation,
    'Custom Development,
    'Consulting Services,
    Other
>>>>>>> origin/main
  ];

;
<<<<<<< HEAD
const projectSizes = []
    'Small (1-10 employees)',
    'Medium (11-100 employees)',
    'Large (101-1000 employees)',
    'Enterprise (1000+ employees)'
=======

const projectSizes = [;;

    'Small (1-10 employees),
    'Medium (11-100 employees),
    'Large (101-1000 employees),
    Enterprise (1000+ employees)
>>>>>>> origin/main
  ];

;
<<<<<<< HEAD
const timelines = []
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible'
=======

const timelines = [;;

    'ASAP,
    '1-3 months,
    '3-6 months,
    '6-12 months,
    '12+ months,
    Flexible
>>>>>>> origin/main
  ];

;
<<<<<<< HEAD
const budgetRanges = []
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
    'To be discussed'
=======

const budgetRanges = [;;

    'Under $10,000,
    '$10,000 - $50,000,
    '$50,000 - $100,000,
    '$100,000 - $500,000,
    '$500,000+,
    To be discussed
>>>>>>> origin/main
  ];

;

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;;

const { name, value } = e.target;
<<<<<<< HEAD
    setFormData(prev = "> ({}"
=======

    setFormData(prev => ({
>>>>>>> origin/main
      ...prev,
      [name]: value;
    }))};

;
<<<<<<< HEAD
const handleSubmit = async (e: React.FormEvent) => {}
=======

const handleSubmit = async (e: React.FormEvent) => {;;

>>>>>>> origin/main
    e.preventDefault();

    setIsSubmitting(true);
<<<<<<< HEAD
    /
    await new Promise(resolve = "> setTimeout(resolve, 2000));"
=======

    /
    await new Promise(resolve => setTimeout(resolve, 2000));

>>>>>>> origin/main
    setIsSubmitting(false);

    setIsSubmitted(true)};

;
<<<<<<< HEAD
const benefits = []
    {}
=======

const benefits = [;;

    {
>>>>>>> origin/main
      icon: Calculator,
      title: 'Free Quote,
      description:     ,
$4},
    {}
      icon: Clock,
      title: 'Quick Response,
      description:     ,
$4},
    {}
      icon: CheckCircle,
      title: 'Transparent Pricing,
      description:     ,
$4},
    {}
      icon: Star,
      title: 'Expert Consultation,
      description:     ,
$4}

  ];

;
<<<<<<< HEAD
const whyChooseUs = []
    {}
=======

const whyChooseUs = [;;

    {
>>>>>>> origin/main
      icon: Users,
      title: '50+ Successful Projects,
      description:     ,
$4},
    {}
      icon: Award,
      title: '300% Average ROI,
      description:     ,
$4},
    {}
      icon: Clock,
<<<<<<< HEAD
      title: '24;
=======
      title: 24
>>>>>>> origin/main
      descriptio,
    n:     ,
$4},
    {}
      icon: Star,
      title: '99.9% Uptime,
      description:     ,
$4}

  ];
<<<<<<< HEAD
  if (isSubmitted) {}
    return (
      <React.Fragment></React>
        <Navigation /></Navigation>
        <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
    return (<>
          <div className=""container mx-auto px-4 py-16 pt-24"></div>"
            <div className=""max-w-2xl mx-auto text-center"></div>"
              <div className=""w-20 h-20 bg-green-500"></div>"
                Quote Request Submitted!
              <
              <p className=""text-xl text-gray-300 mb-8"></p>"
                Thank you for your interest in our services. We've received your quote request;
                and will get back to you within 24 hours with a detailed proposal.
              <
              <div className=""bg-slate-800"></div>"
                <h3 className=""text-lg font-semibold text-white mb-4">What happens next?<"
                <div className=""space-y-3 text-left"></div>"
                  <div className=""flex items-center"></div>"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1<"
                    <span className=""text-gray-300">Our team will review your requirements<"
                  <
                  <div className=""flex items-center"></div>"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2<"
                    <span className=""text-gray-300">We'll prepare a detailed quote and proposal<"
                  <
                  <div className=""flex items-center"></div>"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3<"
                    <span className=""text-gray-300">Schedule a call to discuss your project<"
                  <
                <
              <
              <div className=""flex flex-col sm: flex-row gap-4 justify-center"></div>"
                <a href="""></a>"
                  className=""cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">"
                  <Phone className=""w-5 h-5 mr-2" /></Phone>"
                  Contact Us;
                </a>
                <a href=""/"></a>"
                  className=""border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">"
                  <ArrowRight className=""w-4 h-4 mr-2" /></ArrowRight>"
                  Back to Home;
=======

  if (isSubmitted) {
  return (

      <React.Fragment>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
          <div className="container mx-auto px-4 py-16 pt-24">            <div className="max-w-2xl mx-auto text-center>
              <div className=w-20 h-20 bg-green-500
                
                Quote Request Submitted!
              <
              <p className="text-xl text-gray-300 mb-8>
                Thank you for your interest in our services. Weve received your quote request 
                and will get back to you within 24 hours with a detailed proposal.
              <
              <div className=bg-slate-800
                <h3 className="text-lg font-semibold text-white mb-4>What happens next?<
                <div className="space-y-3 text-left>
                  <div className="flex items-center>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white>1<
                    <span className="text-gray-300>Our team will review your requirements<
                  <
                  <div className="flex items-center>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white>2<
                    <span className="text-gray-300">Well prepare a detailed quote and proposal<
                  <
                  <div className="flex items-center>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white>3<
                    <span className="text-gray-300>Schedule a call to discuss your project<
                  <
                <
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center>
                <a
                  href=
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105
                >
                  <Phone className="w-5 h-5 mr-2 />
                  Contact Us
                </a>
                <a
                  href="/
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center
                >
                  <ArrowRight className="w-4 h-4 mr-2 />
                  Back to Home
>>>>>>> origin/main
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer /></Footer>
      </React.Fragment>
    )}

  return (
<<<<<<< HEAD
    <React.Fragment></React>
      <Navigation /></Navigation>
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <div className=""container mx-auto px-4 py-16 pt-24"></div>"
          {/* Header *
          <div className=""text-center mb-16"></div>"
            <h1 className=""text-4xl m,"></h1>"
    d:text-5xl font-bold text-white mb-6 neon-text">
              Request a Quote;
            <
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>"
=======

    <React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        <div className="container mx-auto px-4 py-16 pt-24>          {/* Header *
          <div className="text-center mb-16>
            <h1 className=text-4xl m,
    d:text-5xl font-bold text-white mb-6 neon-text>
              Request a Quote
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
>>>>>>> origin/main
              Get a detailed, no-obligation quote for your AI and IT project. 
              Our experts will provide you with a comprehensive proposal within 24 hours.
            <
          <

<<<<<<< HEAD
          <div className=""grid grid-cols-1 lg: grid-cols-3 gap-12"></div>"
            {/* Quote Form *
            <div className=""l,"></div>"
    g:col-span-2">
              <div className=""bg-slate-800/50 rounded-lg p-8 border border-gray-700"></div>"
                <h2 className=""text-2xl font-bold text-white mb-6">Project Details<"
                <form onSubmit={handleSubmit} className=""space-y-6"></form>"
                  {/* Personal Information *
                  <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                        Full Name *
                      <
                      <input type=""text"></input>"
                        name=""name""
                        value = "{ formData.name };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
                        placeholder=""Enter your full name""
                    <
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                        Email Address *
                      <
                      <input type=""email"></input>"
                        name=""email""
                        value = "{ formData.email };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400""
                        placeholder=""Enter your email""
                    <
                  <

                  <div className=""grid grid-cols-1 m,"></div>"
    d:grid-cols-2 gap-6">
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                        Company Name;
                      <
                      <input type=""text"></input>"
                        name=""company""
                        value = "{ formData.company };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
                        placeholder=""Enter your company name""
                    <
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                        Phone Number;
                      <
                      <input type=""tel"></input>"
                        name=""phone""
                        value = "{ formData.phone };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
                        placeholder=""Enter your phone number""
=======
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-12>
            {/* Quote Form *
            <div className=l,
    g:col-span-2>
              <div className=bg-slate-800/50 rounded-lg p-8 border border-gray-700
                <h2 className="text-2xl font-bold text-white mb-6>Project Details<
                <form onSubmit={handleSubmit} className="space-y-6>
                  {/* Personal Information *
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Full Name *
                      <
                      <input
                        type="text
                        name="name
                        value = { formData.name };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                        placeholder="Enter your full name
                      
                    <
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Email Address *
                      <
                      <input
                        type="email
                        name="email
                        value = { formData.email };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400
                        placeholder="Enter your email
                      
                    <
                  <

                  <div className=grid grid-cols-1 m,
    d:grid-cols-2 gap-6>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Company Name
                      <
                      <input
                        type="text
                        name="company
                        value = { formData.company };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                        placeholder="Enter your company name
                      
                    <
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Phone Number
                      <
                      <input
                        type="tel
                        name="phone
                        value = { formData.phone };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                        placeholder="Enter your phone number
                      
>>>>>>> origin/main
                    <
                  <

                  {/* Project Information *
<<<<<<< HEAD
                  <div></div>
                    <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Service Type *
                    <
                    <select name=""serviceType"></select>"
                      value = "{ formData.serviceType };"
                      onChange = "{ handleInputChange };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400>
                      <option value=""">Select a service type<)"
                      {serviceTypes.map((type), index) => (<option key={index} value="{type}>{type}<)"
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Service Type *
                    <
                    <select
                      name="serviceType
                      value = { formData.serviceType };

                      onChange = { handleInputChange };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                    >
                      <option value=">Select a service type<)
                      {serviceTypes.map((type), index) => (<option key={index} value={type}>{type}<)
>>>>>>> origin/main
                      ))}

                    <
                  <

<<<<<<< HEAD
                  <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                        Project Size;
                      <
                      <select name=""projectSize"></select>"
                        value = "{ formData.projectSize };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400>
                        <option value=""">Select project size<"
                        {projectSizes.map((size), index) => (<option key={index} value="{size}>{size}<)"
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
                        Project Size
                      <
                      <select
                        name="projectSize
                        value = { formData.projectSize };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                      >
                        <option value=">Select project size<
                        {projectSizes.map((size), index) => (<option key={index} value={size}>{size}<)
>>>>>>> origin/main
                        ))}

                      <
                    <
<<<<<<< HEAD
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      <
                      <select name=""timeline"></select>"
                        value = "{ formData.timeline };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400>
                        <option value=""">Select timeline<"
                        {timelines.map((timeline), index) => (<option key={index} value="{timeline}>{timeline}<)"
=======
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>

                      <
                      <select
                        name="timeline
                        value = { formData.timeline };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                      >
                        <option value=">Select timeline<
                        {timelines.map((timeline), index) => (<option key={index} value={timeline}>{timeline}<)
>>>>>>> origin/main
                        ))}

                      <
                    <
                  <

<<<<<<< HEAD
                  <div></div>
                    <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Budget Range;
                    <
                    <select name=""budget"></select>"
                      value = "{ formData.budget };"
                      onChange = "{ handleInputChange };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400>
                      <option value=""">Select budget range<"
                      {budgetRanges.map((range), index) => (<option key={index} value="{range}>{range}<)"
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Budget Range
                    <
                    <select
                      name="budget
                      value = { formData.budget };

                      onChange = { handleInputChange };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                    >
                      <option value=">Select budget range<
                      {budgetRanges.map((range), index) => (<option key={index} value={range}>{range}<)
>>>>>>> origin/main
                      ))}

                    <
                  <

<<<<<<< HEAD
                  <div></div>
                    <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Project Description *
                    <
                    <textarea name=""description"></textarea>"
                      value = "{ formData.description };"
                      onChange = "{ handleInputChange };"
                      rows = "{ 4 };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
                      placeholder=""Describe your project requirements and goals...""
                  <

                  <div></div>
                    <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
                      Specific Requirements;
                    <
                    <textarea name=""requirements"></textarea>"
                      value = "{ formData.requirements };"
                      onChange = "{ handleInputChange };"
                      rows = "{ 3 };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
                      placeholder=""Any specific technical requirements, integrations, or constraints...""
                  <

                  <button type=""submit"></button>"
                    disabled = "{ isSubmitting };"
                    className=""w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,""
    d:cursor-not-allowed">
                    {isSubmitting ? (<div className=""flex items-center justify-center"></div>"
                        <div className=""animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><"
=======
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Project Description *
                    <
                    <textarea
                      name="description
                      value = { formData.description };

                      onChange = { handleInputChange };

                      rows = { 4 };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                      placeholder="Describe your project requirements and goals...
                    
                  <

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2>
                      Specific Requirements
                    <
                    <textarea
                      name="requirements
                      value = { formData.requirements };

                      onChange = { handleInputChange };

                      rows = { 3 };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400
                      placeholder="Any specific technical requirements, integrations, or constraints...
                    
                  <

                  <button
                    type="submit
                    disabled = { isSubmitting };

                    className=w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,
    d:cursor-not-allowed
                  >
                    {isSubmitting ? (<div className="flex items-center justify-center>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2><
>>>>>>> origin/main
                        Submitting...
                      <)
                    ) : ('Request Quote)
                    )}

                  <
                <
              <
            <

            {/* Sidebar *
<<<<<<< HEAD
            <div className=""space-y-8"></div>"
              {/* Benefits *
              <div className=""bg-slate-800/50 rounded-lg p-6 border border-gray-700"></div>"
                <h3 className=""text-xl font-bold text-white mb-6">Why Request a Quote?<"
                <div className=""space-y-4"></div>"
                  {benefits.map((benefit, index) => (<div key={index} className=""flex items-start"></div>"
                      <div className=""w-8 h-8 bg-cyan-500"></div>"
                        <benefit .icon className=""w-4 h-4 text-cyan-400"></benefit>"
                      <
                      <div></div>
                        <h4 className=""text-sm font-semibold text-white mb-1">{benefit.title}<"
                        <p className=""text-xs text-gray-300">{benefit.description}<"
=======
            <div className="space-y-8>
              {/* Benefits *
              <div className=bg-slate-800/50 rounded-lg p-6 border border-gray-700
                <h3 className="text-xl font-bold text-white mb-6>Why Request a Quote?<
                <div className="space-y-4>
                  {benefits.map((benefit, index) => (<div key={index} className="flex items-start>
                      <div className=w-8 h-8 bg-cyan-500
                        <benefit.icon className="w-4 h-4 text-cyan-400 
                      <
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1>{benefit.title}<
                        <p className="text-xs text-gray-300>{benefit.description}<
>>>>>>> origin/main
                      <
                    <)
                  ))}

                <
              <

              {/* Why Choose Us *
<<<<<<< HEAD
              <div className=""bg-slate-800/50 rounded-lg p-6 border border-gray-700"></div>"
                <h3 className=""text-xl font-bold text-white mb-6">Why Choose Us?<"
                <div className=""space-y-4"></div>"
                  {whyChooseUs.map((item, index) => (<div key={index} className=""flex items-start"></div>"
                      <div className=""w-8 h-8 bg-purple-500"></div>"
                        <item .icon className=""w-4 h-4 text-purple-400"></item>"
                      <
                      <div></div>
                        <h4 className=""text-sm font-semibold text-white mb-1">{item.title}<"
                        <p className=""text-xs text-gray-300">{item.description}<"
=======
              <div className=bg-slate-800/50 rounded-lg p-6 border border-gray-700
                <h3 className="text-xl font-bold text-white mb-6>Why Choose Us?<
                <div className="space-y-4>
                  {whyChooseUs.map((item, index) => (<div key={index} className="flex items-start>
                      <div className=w-8 h-8 bg-purple-500
                        <item.icon className="w-4 h-4 text-purple-400 
                      <
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1>{item.title}<
                        <p className="text-xs text-gray-300>{item.description}<
>>>>>>> origin/main
                      <
                    <)
                  ))}

                <
              <

              {/* Contact Info *
<<<<<<< HEAD
              <div className=""bg-gradient-to-r from-indigo-900/50 to-purple-900"></div>"
                <h3 className=""text-xl font-bold text-white mb-4">Need Immediate Help?<"
                <p className=""text-gray-300 text-sm mb-4"></p>"
                  For urgent inquiries or immediate assistance, contact us directly.
                <
                <div className=""space-y-3"></div>"
                  <a href=""tel: +13024640950"></a>"
                    className=""flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">"
                    <Phone className=""w-4 h-4 mr-2"></Phone>"
                    <span className=""text-sm">(302) 464-0950<"
                  <
                  <a href=""mailto:kleber@ziontechgroup.com"></a>"
                    className=""flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">"
                    <Mail className=""w-4 h-4 mr-2"></Mail>"
                    <span className=""text-sm">kleber@ziontechgroup.com<"
                  <
                  <a href="""></a>"
                    className=""flex items-center text-cyan-400 hove,""
    r:text-cyan-300 transition-colors">
                    <MessageSquare className=""w-4 h-4 mr-2"></MessageSquare>"
                    <span className=""text-sm">Contact Form<"
=======
              <div className=bg-gradient-to-r from-indigo-900/50 to-purple-900
                <h3 className="text-xl font-bold text-white mb-4>Need Immediate Help?<
                <p className="text-gray-300 text-sm mb-4>
                  For urgent inquiries or immediate assistance, contact us directly.
                <
                <div className="space-y-3>
                  <a
                    href="tel: +13024640950
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors
                  >
                    <Phone className="w-4 h-4 mr-2 
                    <span className="text-sm>(302) 464-0950<
                  <
                  <a
                    href="mailto:kleber@ziontechgroup.com
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors
                  >
                    <Mail className="w-4 h-4 mr-2 
                    <span className="text-sm>kleber@ziontechgroup.com<
                  <
                  <a
                    href=
                    className=flex items-center text-cyan-400 hove,
    r:text-cyan-300 transition-colors
                  >
                    <MessageSquare className="w-4 h-4 mr-2 
                    <span className="text-sm>Contact Form<
>>>>>>> origin/main
                  <
                <
    <div>Coming Soon<

  )};

  const [formData, setFormData] = useState({/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
  );
};
  const [formData, setFormData] = useState({/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  nam,
  e: '',
=======

};  nam,
  e: ',
>>>>>>> origin/main
    emai,
  l: ',
    compan,
  y: ',
    phon,
  e: ',
    serviceTyp,
  e: ',
    projectSiz,
  e: ',
    timelin,
  e: ',
    budge,
  t: ',
    descriptio,
  n: ',
    requirement,)
  s: ')
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const _serviceTypes = []
=======

  const _serviceTypes = [;;

>>>>>>> origin/main
  /
  O: Add items;

];

/
/
/
/
/
/
/
/
/
  ];
<<<<<<< HEAD
  const projectSizes = []
=======

  const projectSizes = [;;

>>>>>>> origin/main
  /
  O: Add items;

];

/
/
/
/
  ];
<<<<<<< HEAD
  const timelines = []
=======

  const timelines = [;;

>>>>>>> origin/main
  /
  O: Add items;

];

/
/
/
/
/
/
  ];
<<<<<<< HEAD
  const budgetRanges = []
=======

  const budgetRanges = [;;

>>>>>>> origin/main
  /
  O: Add items;

];

/
/
/
/
/
/
  ];
<<<<<<< HEAD
  const handleInputChange = "(e: React.ChangeEvent;)"
          <HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {/* TODO: Fix JSX expression */}
=======

  const handleInputChange = (e: React.ChangeEvent;)          <HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {/* TODO: Fix JSX expression */};

>>>>>>> origin/main
  O: Add content}

}

    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData(prev = "> ({/* TODO: Fix JSX expression */}"
  O: Add content}
          <HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
}
    const { name, value } = e.target;
    setFormData(prev = "> ({/* TODO: Fix JSX expression *"
  ,
    O: Add content;}
=======

    setFormData(prev => ({/* TODO: Fix JSX expression */}

  O: Add content}

>>>>>>> origin/main
}

/
      [name]: value;)
    }))};

  const handleSubmit = async (e: React.FormEvent) => {/* TODO: Fix JSX expression */};

  O: Add content}
<<<<<<< HEAD
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
}
    e.preventDefault();
=======

}    e.preventDefault();

>>>>>>> origin/main
    setIsSubmitting(true);

    /
<<<<<<< HEAD
    await new Promise(resolve = "> setTimeout(resolve, 2000));"
=======
    await new Promise(resolve => setTimeout(resolve, 2000));

>>>>>>> origin/main
    setIsSubmitting(false);

    setIsSubmitted(true)};
<<<<<<< HEAD
  const benefits = []
  /
  O: Add items;
];;
=======

  const benefits = [;;

  /
  O: Add items;

];

>>>>>>> origin/main
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Calculator,
      titl,
  e: 'Free Quote,
      descriptio,
  n: Get a detailed, no-obligation quote within 24 hours
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Clock,
      titl,
  e: 'Quick Response,
      descriptio,
  n: We respond to all quote requests within 4 hours
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: CheckCircle,
      titl,
  e: 'Transparent Pricing,
      descriptio,
  n: Clear, detailed pricing with no hidden fees
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Star,
      titl,
  e: 'Expert Consultation,
      descriptio,
  n: Free consultation with our technology experts
    }

  ];
<<<<<<< HEAD
  const whyChooseUs = []
  /
  O: Add items;
];;
=======

  const whyChooseUs = [;;

  /
  O: Add items;

];

>>>>>>> origin/main
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Users,
      titl,
  e: '50+ Successful Projects,
      descriptio,
  n: Proven track record of delivering results
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Award,
      titl,
  e: '300% Average ROI,
      descriptio,
  n: Our clients see significant returns on investment
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
  n: Clock,
      titl,
  e: '24;
=======

};  ico,
  n: Clock,
      titl,
  e: 24
>>>>>>> origin/main
      descriptio,
  n: Round-the-clock support for all our clients
    },
    {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
    {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
};
  ico,
=======

};  ico,
>>>>>>> origin/main
  n: Star,
      titl,
  e: '99.9% Uptime,
      descriptio,
  n: Reliable, high-performance solutions
    }

  ];
<<<<<<< HEAD
=======

>>>>>>> origin/main
  if (isSubmitted) {/* TODO: Fix JSX expression */}

  O: Add content}
<<<<<<< HEAD
  if (isSubmitted) {/* TODO: Fix JSX expression *
  ,
    O: Add content;}
}
    return (<div>Coming Soon<)
  )
      
          <React.Fragment></React>
        <Navigation /></Navigation>
        <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""
          <div className=""container mx-auto px-4 py-16 pt-24"></div>""
            <div className=""max-w-2xl mx-auto text-center"></div>""
              <div className=""w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>""
                <CheckCircle className=""w-10 h-10 text-green-400" /></CheckCircle>"
              </div>"
              <h1 className=""text-4xl font-bold text-white mb-6 neon-text"></h1>"
// Quote Request Submitted!

          </h1>"
              <p className=""text-xl text-gray-300 mb-8"></p>"
                Thank you for your interest in our services. We've received your quote request;
// and will get back to you within 24 hours with a detailed proposal.

          </p>"
              <div className=""bg-slate-800/50 rounded-lg p-6 mb-8"></div>""
                <h3 className=""text-lg font-semibold text-white mb-4">What happens next?</h3>""
                <div className=""space-y-3 text-left"></div>""
                  <div className=""flex items-center"></div>""
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1</div>""
                    <span className=""text-gray-300">Our team will review your requirements</span>"
                  </div>"
                  <div className=""flex items-center"></div>""
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2</div>""
                    <span className=""text-gray-300">We'll prepare a detailed quote and proposal</span>"
                  </div>"
                  <div className=""flex items-center"></div>""
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3</div>""
                    <span className=""text-gray-300">Schedule a call to discuss your project</span>"
                  </div>
                </div>
          <>
        <Navigation /><
        <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><"
          <div className=""container mx-auto px-4 py-16 pt-24"><"
            <div className=""max-w-2xl mx-auto text-center"><"
              <div className=""w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><"
                <CheckCircle className=""w-10 h-10 text-green-400" /><"
              <
              <h1 className=""text-4xl font-bold text-white mb-6 neon-text"><"
/

          <
              <p className=""text-xl text-gray-300 mb-8"><"
                Thank you for your interest in our services. We've received your quote request;
/

          <
              <div className=""bg-slate-800/50 rounded-lg p-6 mb-8"><"
                <h3 className=""text-lg font-semibold text-white mb-4">What happens next?<"
                <div className=""space-y-3 text-left"><"
                  <div className=""flex items-center"><"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1<"
                    <span className=""text-gray-300">Our team will review your requirements<"
                  <
                  <div className=""flex items-center"><"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2<"
                    <span className=""text-gray-300">We'll prepare a detailed quote and proposal<"
                  <
                  <div className=""flex items-center"><"
                    <div className=""w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3<"
                    <span className=""text-gray-300">Schedule a call to discuss your project<"
                  <
                <

              <
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a href="""></a>"
/

          "
          <Phone className=""w-5 h-5 mr-2" /><"
/
          <

                <a href="""></a>"
/

          "
          <ArrowRight className=""w-4 h-4 mr-2" /></ArrowRight>"
// Back to Home;
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /></Footer>
    </React.Fragment>
        <Footer /></Footer>
      </React.Fragment>
    )}
  return (<div>Coming Soon</div>)
  )
    
          <React.Fragment></React>
      <Navigation /></Navigation>"
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>""
        <div className=""container mx-auto px-4 py-16 pt-24"></div>"
          {/* Header */}"
          <div className=""text-center mb-16"></div>""
          <ArrowRight className=""w-4 h-4 mr-2" /><"
/
          <
              <
            <
          <
        <
      <
      <Footer <></Footer>
        <Footer /><
      <
    );
  }
  return (<div>Coming Soon<)
  )
    
          <>
      <Navigation /><
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><"
        <div className=""container mx-auto px-4 py-16 pt-24"><"
          {/* Header *
          <div className=""text-center mb-16"><"
            <h1 className=""text-4xl,"></h1>"
  md: text-5xl font-bold text-white mb-6 neon-text"><
/

          <
          <p className=""text-xl text-cyan-400 mb-8 font-medium"></p>"
            Coming Soon;
          <
          <
          <div className=""grid grid-cols-1 lg:grid-cols-3 gap-12"></div>"
            {/* Quote Form *
            <div className=""l,"></div>"
    g:col-span-2">
              <div className=""bg-slate-800/50 rounded-lg p-8 border border-gray-700"></div>"
                <h2 className=""text-2xl font-bold text-white mb-6">Project Details<"
                <form onSubmit={handleSubmit} className=""space-y-6"></form>"
                  {/* Personal Information *
                  <div className=""grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
=======

}    return (<div>Coming Soon<)
  )
      
          <React.Fragment>
        <Navigation /></Navigation>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="container mx-auto px-4 py-16 pt-24"></div>
            <div className="max-w-2xl mx-auto text-center"></div>
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                <CheckCircle className="w-10 h-10 text-green-400 /></CheckCircle>
              </div>
              <h1 className="text-4xl font-bold text-white mb-6 neon-text></h1>
// Quote Request Submitted!
              
          
          
          
          
          
          
          
          
          </h1>
              <p className="text-xl text-gray-300 mb-8></p>
                Thank you for your interest in our services. Weve received your quote request;

// and will get back to you within 24 hours with a detailed proposal.
              
          
          
          
          
          
          
          
          
          </p>
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8"></div>
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div className="space-y-3 text-left"></div>
                  <div className="flex items-center"></div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">1</div>
                    <span className="text-gray-300>Our team will review your requirements</span>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">2</div>
                    <span className="text-gray-300">Well prepare a detailed quote and proposal</span>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-white">3</div>
                    <span className="text-gray-300>Schedule a call to discuss your project</span>
                  </div>
                </div>
  md: text-5xl font-bold text-white mb-6 neon-text><
/

          <
          <p className="text-xl text-cyan-400 mb-8 font-medium>
            Coming Soon
          <
          <
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12>
            {/* Quote Form *
            <div className=l,
    g:col-span-2>
              <div className=bg-slate-800/50 rounded-lg p-8 border border-gray-700
                <h2 className="text-2xl font-bold text-white mb-6>Project Details<
                <form onSubmit={handleSubmit} className="space-y-6>
                  {/* Personal Information *
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>

>>>>>>> origin/main
/

          <

<<<<<<< HEAD
                      <input type="text" name=""name"></input>"
                        value = "{ formData.name };"
                        onChange = "{ handleInputChange };"
/
className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                      <input
type="text" name="name
                        value = { formData.name };

                        onChange = { handleInputChange };

/
className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
//                       

          <
                    <div><
<<<<<<< HEAD
                      <label className=""block text-sm font-medium text-gray-300 mb-2"><"
=======
                      <label className="block text-sm font-medium text-gray-300 mb-2><
>>>>>>> origin/main
/

          <

<<<<<<< HEAD
                      <input type="email" name=""email"></input>"
                        value = "{ formData.email };"
                        onChange = "{ handleInputChange };"
/
className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                      <input
type="email" name="email
                        value = { formData.email };

                        onChange = { handleInputChange };

/
className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
//                       

          <
                  <
<<<<<<< HEAD
                  <div className=""grid grid-cols-1,"></div>"
  md:grid-cols-2 gap-6"><
                    <div><
                      <label className=""block text-sm font-medium text-gray-300 mb-2"><"
/
          <

                      <input type="text" name=""company"></input>"
                        value = "{ formData.company };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                  <div className="grid grid-cols-1,
  md:grid-cols-2 gap-6><
                    <div><
                      <label className="block text-sm font-medium text-gray-300 mb-2><
/
          <

                      <input
type="text" name="company
                        value = { formData.company };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
// 

          <
                    <div><
<<<<<<< HEAD
                      <label className=""block text-sm font-medium text-gray-300 mb-2"><"
/
          <

                      <input type="tel" name=""phone"></input>"
                        value = "{ formData.phone };"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                      <label className="block text-sm font-medium text-gray-300 mb-2><
/
          <

                      <input
type="tel" name="phone
                        value = { formData.phone };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
// 

          <
                  <
                  {/* Project Information *
                  <div><
<<<<<<< HEAD
                    <label className=""block text-sm font-medium text-gray-300 mb-2"><"
=======
                    <label className="block text-sm font-medium text-gray-300 mb-2><
>>>>>>> origin/main
/

          <

<<<<<<< HEAD
                    <select name="serviceType" value = "{ formData.serviceType };></select>"
                      onChange = "{ handleInputChange };"
/
className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
/

          "
          <option value=""">Select a service type<"
                      {serviceTypes.map((type), index) => ()}
          <option key={index} value="{type}>{type}<"
=======
                    <select
                      name="serviceType value = { formData.serviceType };

                      onChange = { handleInputChange };

/
className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

/

          
          <option value=">Select a service type<
                      {serviceTypes.map((type), index) => ()}

          <option key={index} value={type}>{type}<
>>>>>>> origin/main
                      ))}

                    <
                  <
<<<<<<< HEAD
                  <div className=""grid grid-cols-1,"></div>"
  md:grid-cols-2 gap-6"><
                    <div><
                      <label className=""block text-sm font-medium text-gray-300 mb-2"><"
/
          <

                      <select name="projectSize" value = "{ formData.projectSize };></select>"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
/

          "
          <option value=""">Select project size<"
                        {projectSizes.map((size), index) => ()}
          <option key={index} value="{size}>{size}<"
=======
                  <div className="grid grid-cols-1,
  md:grid-cols-2 gap-6><
                    <div><
                      <label className="block text-sm font-medium text-gray-300 mb-2><
/
          <

                      <select
                        name="projectSize value = { formData.projectSize };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

/

          
          <option value=">Select project size<
                        {projectSizes.map((size), index) => ()}

          <option key={index} value={size}>{size}<
>>>>>>> origin/main
                        ))}

                      <
                    <

<<<<<<< HEAD
                    <div></div>
                      <label className=""block text-sm font-medium text-gray-300 mb-2"></label>"
/
          <
                      <select name="timeline" value = "{ formData.timeline };></select>"
                        onChange = "{ handleInputChange };"
                        className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
/

          "
          <option value=""">Select timeline<"
                        {timelines.map((timeline), index) => ()}
          <option key={index} value="{timeline}>{timeline}<"
=======
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2>
/
          <
                      <select
                        name="timeline value = { formData.timeline };

                        onChange = { handleInputChange };

                        className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

/

          
          <option value=">Select timeline<
                        {timelines.map((timeline), index) => ()}

          <option key={index} value={timeline}>{timeline}<
>>>>>>> origin/main
                        ))}

                      <
                    <
                  <
                  <div><
<<<<<<< HEAD
                    <label className=""block text-sm font-medium text-gray-300 mb-2"><"
/
          <

                    <select name="budget" value = "{ formData.budget };></select>"
                      onChange = "{ handleInputChange };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
/

          "
          <option value=""">Select budget range<"
                      {budgetRanges.map((range), index) => ()}
          <option key={index} value="{range}>{range}<"
=======
                    <label className="block text-sm font-medium text-gray-300 mb-2><
/
          <

                    <select
                      name="budget value = { formData.budget };

                      onChange = { handleInputChange };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

/

          
          <option value=">Select budget range<
                      {budgetRanges.map((range), index) => ()}

          <option key={index} value={range}>{range}<
>>>>>>> origin/main
                      ))}

                    <
                  <
                  <div><
<<<<<<< HEAD
                    <label className=""block text-sm font-medium text-gray-300 mb-2"><"
=======
                    <label className="block text-sm font-medium text-gray-300 mb-2><
>>>>>>> origin/main
/

          <

<<<<<<< HEAD
                    <textarea name="description" value = "{ formData.description };></textarea>"
                      onChange = "{ handleInputChange };"
/
                      rows = "{ 4 };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                    <textarea
                      name="description value = { formData.description };

                      onChange = { handleInputChange };

/
                      rows = { 4 };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
//                     

          <
                  <div><
<<<<<<< HEAD
                    <label className=""block text-sm font-medium text-gray-300 mb-2"><"
/
          <

                    <textarea name="requirements" value = "{ formData.requirements };></textarea>"
                      onChange = "{ handleInputChange };"
                      rows = "{ 3 };"
                      className=""w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,""
    s:ring-cyan-400;
=======
                    <label className="block text-sm font-medium text-gray-300 mb-2><
/
          <

                    <textarea
                      name="requirements value = { formData.requirements };

                      onChange = { handleInputChange };

                      rows = { 3 };

                      className=w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focu,
    s:ring-cyan-400

>>>>>>> origin/main
// 

          <

<<<<<<< HEAD
                  <button type="submit" disabled = "{ isSubmitting };></button>"
                    className=""w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,""
    d:cursor-not-allowed"

/
                    {isSubmitting ? ()}"
          <div className=""flex items-center justify-center"><"
                        <div className=""animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><"
=======
                  <button
type="submit disabled = { isSubmitting };

                    className=w-full cyber-button py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover: scale-105 disabled:opacity-50 disable,
    d:cursor-not-allowed

/
                    {isSubmitting ? ()}

          <div className="flex items-center justify-center><
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2><
>>>>>>> origin/main
/

          <
                    ) : ()
/
                    )}

          <
                <
              <
            <
            {/* Sidebar *
<<<<<<< HEAD
            <div className=""space-y-8"><"
              {/* Benefits *
              <div className=""bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"><"
                <h3 className=""text-xl font-bold text-white mb-6">Why Request a Quote?<"
                <div className=""space-y-4"><"
                  {benefits.map((benefit, index) => ()}"
          <div key={index} className=""flex items-start"><"
                      <div className=""w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"><"
                        <benefit.icon className=""w-4 h-4 text-cyan-400" /><"
                      <
                      <div><
                        <h4 className=""text-sm font-semibold text-white mb-1">{benefit.title}<"
                        <p className=""text-xs text-gray-300">{benefit.description}<"
=======
            <div className="space-y-8><
              {/* Benefits *
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50><
                <h3 className="text-xl font-bold text-white mb-6>Why Request a Quote?<
                <div className="space-y-4><
                  {benefits.map((benefit, index) => ()}

          <div key={index} className="flex items-start><
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0><
                        <benefit.icon className="w-4 h-4 text-cyan-400 /><
                      <
                      <div><
                        <h4 className="text-sm font-semibold text-white mb-1>{benefit.title}<
                        <p className="text-xs text-gray-300>{benefit.description}<
>>>>>>> origin/main
                      <
                    <
                  ))}

                <
              <
              {/* Why Choose Us *
<<<<<<< HEAD
              <div className=""bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"><"
                <h3 className=""text-xl font-bold text-white mb-6">Why Choose Us?<"
                <div className=""space-y-4"><"
                  {whyChooseUs.map((item, index) => ()}"
          <div key={index} className=""flex items-start"><"
                      <div className=""w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"><"
                        <item.icon className=""w-4 h-4 text-purple-400" /><"
                      <
                      <div><
                        <h4 className=""text-sm font-semibold text-white mb-1">{item.title}<"
                        <p className=""text-xs text-gray-300">{item.description}<"
=======
              <div className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50><
                <h3 className="text-xl font-bold text-white mb-6>Why Choose Us?<
                <div className="space-y-4><
                  {whyChooseUs.map((item, index) => ()}

          <div key={index} className="flex items-start><
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0><
                        <item.icon className="w-4 h-4 text-purple-400 /><
                      <
                      <div><
                        <h4 className="text-sm font-semibold text-white mb-1>{item.title}<
                        <p className="text-xs text-gray-300>{item.description}<
>>>>>>> origin/main
                      <
                    <
                  ))}

                <
              <
              {/* Contact Info *
<<<<<<< HEAD
              <div className=""bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6"><"
                <h3 className=""text-xl font-bold text-white mb-4">Need Immediate Help?<"
                <p className=""text-gray-300 text-sm mb-4"><"
=======
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6><
                <h3 className="text-xl font-bold text-white mb-4>Need Immediate Help?<
                <p className="text-gray-300 text-sm mb-4><
>>>>>>> origin/main
/

          <
        <
      <

    </div>
  )};
<<<<<<< HEAD
      <Footer /><

    <
  );
};
export default RequestQuotePage;
=======

export default RequestQuotePage;
>>>>>>> origin/main
