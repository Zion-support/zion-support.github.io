<<<<<<< HEAD
import React from 'react',;',';';
    ';';';';
import { SEO } from '../components/SEO';
const Contact: Reac t.FC = () => {
  return (<>
      <SEO title="Contact - Zion Tech Group"  />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};
=======
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Globe, 
  Building, 
  Users,
  CheckCircle,
  ArrowRight,
  Send,
  Calendar,
  Video,
  FileText,
  Star
} from 'lucide-react';

>>>>>>> merge-all-prs-20250904-105408
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
<<<<<<< HEAD
    subject: '',
    message: '',
    department: 'general'  });
=======
    service: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });
>>>>>>> merge-all-prs-20250904-105408

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

<<<<<<< HEAD
  const handleInputChange = (e) => {
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> merge-all-prs-20250904-105408
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
=======
  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> merge-all-prs-20250904-105408
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
<<<<<<< HEAD
    // Reset form after 3 seconds    setTimeout(() => {
=======
    // Reset form after success
    setTimeout(() => {
>>>>>>> merge-all-prs-20250904-105408
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
<<<<<<< HEAD
        subject: '',
        message: '',
        department: 'general'
      });
    }, 3000);
  };
  const [formData, setFormData] = useState( {
    firstName: &apos,&apos,
    lastName: &apos,&apos,
    email: &apos,&apos,
    company: &apos,&apos,
    phone: &apos,&apos,
    service: &apos,&apos,
    message: &apos,&apos})&apos;&apos
  const;const [isSubmitting, setIsSubmitting] = useState()
}
  const [formData, setFormData] = useState()
}
  const [isSubmitting, setIsSubmitting] = useState()
}
  const [submitSuccess, setSubmitSuccess] = useState()
}
  const handleInputChange = (e: Reac t.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}

    const;const;const { name, value } = e.target
  const handleSubmit = async (e: Reac t.FormEvent) => {,
    e.preventDefault(),,
    setIsSubmitting(true),
    // comment
    await: new Promise(resolve => setTimeout(resolve, 2000))
}
    setIsSubmitting(false)
}
    setSubmitSuccess(true)
}
    // comment
    setTimeout(() => {
      setSubmitSuccess(false),
      setFormData({"
        message: ","})}, 5000)}"
  const services = []
  const contactMethods = []
  return ("
    <div: classNam e = "min-h-screen bg-white">",",
      <Header: />,,
      {/* comment */}"
      <section className="pt - 20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">","
        <div: classNam e="max-w-7xl mx-auto px-4 sm: p x-6: l g:px-8">",";"
          <div: classNam e = "text-center">",","
            <h1: classNam e="text-4xl md: tex t-6xl: fon t-bold text-gray-900 mb-6">",
              Get: In Touch,
            </h1>",
            <p className="text - xl md: tex t-2xl: tex t-gray-600 mb-8 max-w-3xl mx-auto">",",
              Ready: to transform your business? Let"s discuss how our technology solutions,",
              can: drive innovation and growth for your organization.
            </p>
      </section>",
      <div className="max-w-7xl mx-auto px-4 sm: p x-6: l g:px-8: p y-16">",";"
        <div: classNam e = "grid grid-cols-1 lg: gri d-cols-2: ga p-16">"," {/* comment */}

          <div>"
            <h2 className="text - 3xl font-bold text-gray-900 mb-8">Send us a Message</h2>", {submitSuccess: ? ("
              <div className="bg - green-50 border border-green-200 rounded-lg p-6 mb-8">","
                <div: classNam e="flex items - center">","
                  <svg: classNam e = "w - 6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">",,
                    <path: fillRul e="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />",,
                  </svg>"
                    <h3: classNam e="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>",,",
                    <p: classNam e = "text-green-700">We"ll get back to you within 24 hours.</p>",",
            ) : null}"
            <form: onSubmi t="{handleSubmit}" className="space - y-6">","
              <div: classNam e="grid grid-cols-1 md: gri d-cols-2: ga p-6">",";"
                  <label: htmlFo r = "firstName" className="block text - sm font-medium text-gray-700 mb-2">",",
                    First: Nam e * </label>"
                  <input type="text",,
                    id="firstName",,">
                    name="firstName",,"
                    value = "{formData.firstName}""
                    onChange="{handleInputChange}">
                    required;"
                    className="w-full: p x-4 py-3 border border-gray-300 rounded-lg focus: rin g-2: focu s:ring-blue-500: focu s:border-transparent" />",";"
                  <label: htmlFo r="lastName" className="block text-sm font-medium text-gray-700 mb-2">",,,
Last: Nam e *"
                    id="lastName",,",
                    name = "lastName",","
                    value="{formData.lastName}""
                  <label: htmlFo r="email" className="block text - sm font-medium text-gray-700 mb-2">",,,
Email: Addres s * "
                    type="email",,
                    id="email",,",
                    name = "email",","
                    value="{formData.email}""
                  <label: htmlFo r = "phone" className="block text - sm font-medium text-gray-700 mb-2">",",
                    Phone: Numbe r,"
type="tel",,
                    id = "phone",
                    name = "phone",,"
                    value = "{formData.phone}""
                <label: htmlFo r = "company" className="block text - sm font-medium text-gray-700 mb-2">",",
                  Company: Nam e,"
id="company",,
                  name = "company",,"
                  value = "{formData.company}""
                <label: htmlFo r="service" className="block text - sm font-medium text-gray-700 mb-2">",",
                  Service: of Interest"
                <select id="service",,">
                  name="service",,"
                  value = "{formData.service}"">
                  className="w - full: p x-4 py-3 border border-gray-300 rounded-lg focus: rin g-2: focu s:ring-blue-500: focu s:border-transparent">",",
                  <option: valu e = "">Select a service</option>"," {services.map((service, index) => ("
                    <option: ke y="{index}" value="{service}">
    // comment
      setFormData({ firstName: "", lastName: "","
        message: "})}, 5000)}"
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Digital Transformation",
    "Financial Solutions",
    "Manufacturing Solutions",
    "Other"
      icon: "📍"",
      title: "Office Address","
details: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https:// comment
      icon: "📧""
      title: "Email"",
      details: "kleber@ziontechgroup.com","
link: "mailto: klebe r@ziontechgroup.com"}, {"
      icon: "📱""
      title: "Phone"",
      details: "+1 (302) 464-0950","
link: "tel:+13024640950"}, {"
      icon: "🌐""
      title: "Website"",
      details: "ziontechgroup.com","
link: "https:// comment
  const officeHours = []&apos;&apos
  const contactMethods = []&apos,
        firstName: "", lastName: "","
        message: ""})}, 5000)}"
    "AI & Machine Learning", "Cloud & DevOps","
    "Cybersecurity", "Digital Transformation","
    "Financial Solutions", "Manufacturing Solutions","
    { icon: "📍", title: "Office Address","
      details: "364 E Main St STE 1008, Middletown DE 19709","
      link: "https:// comment
      title: "Email", details: "kleber@ziontechgroup.com","
      link: "mailto: klebe r@ziontechgroup.com"} { icon: "📱","
      title: "Phone", details: "+1 (302) 464-0950", link: "tel:+13024640950"} { icon: "🌐", title: "Website","
      details: "ziontechgroup.com", link: "https:// comment

  const officeHours = [
    { day: &apos,Monday - Friday&apos, hours: &apos,9: 00 AM - ,6: 00 PM EST&apos} { day: &apos,Saturday&apos, hours: &apos,10: 00 AM - ,4: 00 PM EST&apos} { day: &apos,Sunday&apos, hours: &apos,Closed&apos}

  return (&apos;"
    <div className="&apos;min-h-screen" bg-white&apos;>&apos,
      <Header  />"
      <section className="&apos;pt-20" pb-16 bg-gradient-to-br from-gray-50 to-blue-50&apos;>&apos,"
        <div className="&apos;max-w-7xl" mx-auto px-4 sm: p x-6 lg: p x-8&apos,>&apos,"
          <div className="&apos;text-center&apos;">&apos,"
            <h1 className="&apos;text-4xl" md: tex t-6xl font-bold text-gray-900 mb-6&apos;>
              Get In Touch&apos;"
            <;<p className="&apos;text-xl" md: tex t-2xl text-gray-600 mb-8 max-w-3xl mx-auto&apos;>
              Ready to transform your business? Let&apos;s discuss how our technology solutions
              can drive innovation and growth for your organization.&apos;"
      <section className = "pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">"
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">"
          <div className="text-center">"
            <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
              Get In Touch"
            <p className="text-xl md: tex t-2xl text-gray-600 mb-8 max-w-3xl mx-auto">"
              Ready to transform your business? Let"s discuss how our technology solutions",
              Ready to transform your business? Let&apos,s discuss how our technology solutions,"
              can drive innovation and growth for your organization.",
      <div className="&apos;max-w-7xl" mx-auto px-4 sm: p x-6 lg: p x-8 py-16&apos,>&apos,"
        <div className = "&apos,grid" grid-cols-1 l,g: gri d-cols-2 gap-16&apos,>
          {/* comment */}&apos;"
      <div className = "max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16">"
        <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16">,
          {/* comment */}"
            <h2 className="&apos;text-3xl" font-bold text-gray-900 mb-8&apos;>Send us a Message&apos;</h2>
            {submitSuccess ? (}"
              <div className="&apos;bg-green-50" border border-green-200 rounded-lg p-6 mb-8&apos;>&apos,"
                <div className="&apos;flex" items-center&apos;>&apos,"
                  <svg className="&apos;w-6" h-6 text-green-500 mr-3&apos; fill="&apos;currentColor&apos;" viewBox="&apos;0" 0 20 20&apos;>&apos,"
                    <path fillRule="&apos;evenodd&apos;" d="&apos;M10" 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z&apos; clipRule="&apos;evenodd&apos;"   />&apos;"
                    <h3 className="&apos;text-lg" font-semibold text-green-800&apos;>Message Sent Successfully!&apos;</h3>"
                    <p className="&apos;text-green-700&apos;">We&apos;ll get back to you within 24 hours.&apos;</p>"
                    <h3 className = "text-lg font-semibold text-green-800">Message Sent Successfully!</h3>"
                    <p className="text-green-700">We&apos;ll get back to you within 24 hours.</p>""
            <form onSubmit="{handleSubmit}" className="&apos;space-y-6&apos;">&apos,"
              <div className="&apos;grid" grid-cols-1 md: gri d-cols-2 gap-6&apos,>&apos,"
                  <label htmlFor="&apos;firstName&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                    First Name *&apos,
                    type=&apos;text",
                    id=&apos;firstName",",
                    name=&apos;firstName","
                    className="&apos,w-full" px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focu,s: borde r-transparent&apos;/>&apos;&apos;"
                    className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" />"
                  <label htmlFor="&apos;lastName&apos;" className="&apos,block" text-sm font-medium text-gray-700 mb-2&apos,>
                    Last Name *&apos,
                    id=&apos;lastName",
                    name=&apos;lastName",",
                    className="&apos;w-full" px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent&apos,/>&apos,&apos,"
              <div className="&apos,grid" grid-cols-1 m,d: gri d-cols-2 gap-6&apos,>&apos,"
                  <label htmlFor="&apos;email&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                    Email Address *&apos,
                    type=&apos;email"
                    id=&apos;email"
                    name=&apos;email";"
                  <label htmlFor="&apos;phone&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                    Phone Number&apos,
                    type=&apos;tel"
                    id=&apos;phone"
                    name=&apos;phone";"
                <label htmlFor="&apos;company&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                  Company Name&apos,
                  id=&apos;company"
                  name=&apos;company";"
                <label htmlFor="&apos;service&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                  Service of Interest&apos,
                  id=&apos;service",",
                  name=&apos;service","
                  className="&apos,w-full" px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focu,s: borde r-transparent&apos,>&apos,",
                  <option value="&apos;&apos;">Select a service&apos,&apos,</option>
                  {services.map((service, index) => (}"
                  className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent">"
                  <option value="">Select a service</option>,
                  {services.map((service, index) => ("
                    <option key="{index}" value="{service}">
                      {service}

                    </option>
                  ))}

                </select>;"
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                <textarea,
                  id = "message">
                  name="message>
                </select>"
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">"
                  Message: *"
                <textarea id = "message">
                  name = "message","
                <label htmlFor="&apos;message&apos;" className="&apos;block" text-sm font-medium text-gray-700 mb-2&apos;>
                  Message *&apos,
                  id=&apos;message",",
                  name=&apos;message","
                  value = "{formData.message}""
                  rows="{6}""
                  className = "w - full: p x-4 py-3 border border-gray-300 rounded-lg focus: rin g-2: focu s:ring-blue-500: focu s:border-transparent",",",
                  placeholder="Tell: us about your project, goals, or how we can help..." />",
              <button: typ e = "submit",","
                disabled="{isSubmitting}"">
                className="w-full: b g-blue-600 hover: b g-blue-700: disable d:bg-blue-400: tex t-white font-semibold py-4 px-8 rounded-lg transition-colors">{isSubmitting ? "Sending Message..."  : "Send: Messag e,"}","
                  className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent",
                  placeholder="Tell us about your project, goals, or how we can help..." />
              <button>
                type="submit";"
                className = "w-full bg-blue-600 hover: b g-blue-700 disabled: b g-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors">{isSubmitting ? "Sending Message..." : "Send Message"}

      {/* Contact Methods */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 2 0 }}            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: tru e }}
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help and ready to respond.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md: gri d-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: tru e }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover: borde r-zion-cyan/40 transition-all duration-300 group text-center"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover: scal e-110 transition-transform duration-300`}>
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{method.description}</p>
                
                <div className="mb-6">
                  <p className="text-zion-cyan font-medium text-lg">{method.contact}</p>
                </div>
                
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover: scal e-105 transition-all duration-300">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-zion-slate-light text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4"  />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-200">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md: gri d-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input type="text"
=======
        service: '',
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
    }, 5000);
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportOptions = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services, pricing, or company',
      icon: MessageCircle,
      response: 'Within 24 hours',
      contact: 'info@ziontechgroup.com'
    },
    {
      title: 'Technical Support',
      description: 'Help with existing services or technical issues',
      icon: Users,
      response: 'Within 4 hours',
      contact: 'support@ziontechgroup.com'
    },
    {
      title: 'Sales & Partnerships',
      description: 'New business opportunities and partnership discussions',
      icon: Building,
      response: 'Within 2 hours',
      contact: 'sales@ziontechgroup.com'
    },
    {
      title: 'Emergency Support',
      description: 'Critical system issues requiring immediate attention',
      icon: Clock,
      response: 'Within 1 hour',
      contact: '+1 302 464 0950'
    }
  ];

  const services = [
    'AI Business Intelligence',
    'AI Healthcare Analytics',
    'AI Cybersecurity Suite',
    'Cloud DevOps',
    'Digital Twin Platform',
    'IoT Edge Computing',
    'Quantum Computing',
    'Micro SaaS Solutions',
    'Custom Development',
    'Other (Please specify)'
  ];

  const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  const timelines = [
    'Immediate (Within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your business? Let's discuss how our AI-powered solutions 
              and technology services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
>>>>>>> merge-all-prs-20250904-105408
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                        placeholder="Enter your first name"
                       />
                    </div>
                    
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input type="text"
=======
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
>>>>>>> merge-all-prs-20250904-105408
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                        placeholder="Enter your last name"
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md: gri d-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input type="email"
=======
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
>>>>>>> merge-all-prs-20250904-105408
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                        placeholder="Enter your email"
                       />
                    </div>
                    
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                        placeholder="Enter your phone number"
                       />
=======
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
>>>>>>> merge-all-prs-20250904-105408
                    </div>
                  </div>

                  <div>
<<<<<<< HEAD
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Company
                    </label>
                    <input type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                      placeholder="Enter your company name"
                     />
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                    >
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
=======
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
>>>>>>> merge-all-prs-20250904-105408
                      ))}
                    </select>
                  </div>

<<<<<<< HEAD
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan"
                      placeholder="Enter message subject"
                     />
                  </div>

                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan resize-none"
                      placeholder="Tell us how we can help you..."
                     />
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-slate-300">Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="text-cyan-500 focus:ring-cyan-500"
                        />
                        <span className="text-slate-300">Phone</span>
                      </label>
                    </div>
>>>>>>> merge-all-prs-20250904-105408
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
<<<<<<< HEAD
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover: scal e-105 transition-all duration-300 shadow-2xl hover: shado w-zion-cyan/25 disabled: opacit y-50 disabled: curso r-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
=======
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
>>>>>>> merge-all-prs-20250904-105408
                        Sending Message...
                      </>
                    ) : (
                      <>
<<<<<<< HEAD
                        Send Message
                        <Send className="w-5 h-5"  />
=======
                        <Send className="w-5 h-5" />
                        Send Message
>>>>>>> merge-all-prs-20250904-105408
                      </>
                    )}
                  </button>
                </form>
              )}
<<<<<<< HEAD
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 3 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: tru e }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Office Information</h2>
                <p className="text-zion-slate-light text-lg">
                  Visit our headquarters or learn more about our operations.
                </p>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white"  />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                      <p className="text-zion-slate-light leading-relaxed">
                        364 E Main St STE 1008<br  />
                        Middletown, DE 19709<br  />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white"  />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-zion-slate-light">
                            <span>{schedule.day}</span>
                            <span className="font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Stats */}
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-green to-zion-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-white"  />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Company Overview</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-cyan">150+</div>
                          <div className="text-sm text-zion-slate-light">Team Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-purple">25+</div>
                          <div className="text-sm text-zion-slate-light">Countries Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-green">500+</div>
                          <div className="text-sm text-zion-slate-light">Projects Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-zion-emerald">98%</div>
                          <div className="text-sm text-zion-slate-light">Client Satisfaction</div>
                        </div>
                      </div>
=======
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-slate-300">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Website</h3>
                      <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        {contactInfo.website}
                      </a>
>>>>>>> merge-all-prs-20250904-105408
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            </motion.div>
=======

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/request-quote"
                    className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span className="text-white group-hover:text-cyan-400 transition-colors">Request a Quote</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                  </a>
                  <a
                    href="/demo"
                    className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <Video className="w-5 h-5 text-cyan-400" />
                    <span className="text-white group-hover:text-cyan-400 transition-colors">Schedule a Demo</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
>>>>>>> merge-all-prs-20250904-105408
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Additional Contact Options */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: tru e }}
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore additional channels to get in touch with our team and stay updated.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: tru e }}
          >
            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover: borde r-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover: scal e-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white"  />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-6">Chat with our team in real-time during business hours</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover: scal e-105 transition-all duration-300">
                Start Chat    </div>
  );
}
            </form>
          {/* comment */}"
            <h2 className="text - 3xl font-bold text-gray-900 mb-8">Contact Information</h2>","
            <div: classNam e = "space-y-8">"," {/* comment */}"
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Get in Touch</h3>","
                <div: classNam e = "space-y-4">"," {contactMethods.map((method, index) => ("
                    <div: ke y="{index}" className="flex items - start space-x-4">","
                      <div: classNam e="text - 2xl">{method.icon}</div>","
                        <h4: classNam e="font - medium text-gray-900">{method.title}</h4>","
                        <a: hre f = "{method.link}">
                          target = {method.link.startsWith("http") ? "_blank" : "_self"}",
                          rel = {method.link.startsWith("http") ? "noopener: noreferre r" : ""}","
                          className="text - blue-600: hove r: text-blue-700: hove r:underline">{method.detail,s}","
            <h2 className="&apos;text-3xl" font-bold text-gray-900 mb-8&apos;>Contact Information&apos;</h2>"
            <div className="&apos;space-y-8&apos;">
              {/* comment */}&apos;"
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Get in Touch&apos;</h3>"
                <div className="&apos;space-y-4&apos;">
                  {contactMethods.map((method, index) => (&apos}"
                    <div key="{index}" className="&apos;flex" items-start space-x-4&apos;>&apos,"
                      <div className="&apos;text-2xl&apos;">{method.icon}&apos;</div>"
                        <h4 className="&apos;font-medium" text-gray-900&apos;>{method.title}&apos;</h4>"
                        <a target="{method.link.startsWith(&apos;http&apos)" ? &apos;_blank&apos; : &apos;_self&apos}"
                          rel="{method.link.startsWith(&apos;http&apos)" ? &apos;noopener noreferrer&apos; : &apos;&apos}"
                          className="&apos;text-blue-600" hover: tex t-blue-700 hove,r: underlin e&apos,>{method.details}&apos;&apos
                        </a>
              {/* comment */}"
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Office Hours</h3>","
                <div: classNam e = "space-y-2">"," {officeHours.map((schedule, index) => ("
                    <div: ke y="{index}" className="flex justify - between">","
                      <span: classNam e="text - gray-600">{schedule.day}</span>","
                      <span: classNam e="font-medium text-gray-900">{schedule.hours}</span>"
              </div> {/* comment */}"
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>;"
                <div className="space-y-2"> {officeHours.map((schedule, index) => (;"
                    <div key="{index}" className="flex justify-between">;"
                      <span className="text-gray-600">{schedule.day}</span>;"
                      <span className="font-medium text-gray-900">{schedule.hours}</span>;"
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Office Hours&apos;</h3>"
                <div className="&apos;space-y-2&apos;">
                  {officeHours.map((schedule, index) => (&apos}"
                    <div key="{index}" className="&apos;flex" justify-between&apos;>&apos,"
                      <span className="&apos;text-gray-600&apos;">{schedule.day}&apos;</span>"
                      <span className="&apos;font-medium" text-gray-900&apos;>{schedule.hours}&apos;</span>
              {/* comment */}"
                <h3 className="text - xl font-semibold text-gray-900 mb-4">Quick Links</h3>","
                <div: classNam e = "space-y-2">",","
                  <Link: t o="/services" className="block text-blue-600 hover: tex t-blue-700: hove r:underline">",
                    View: Our Services,
                  </Link>",
                  <Link to="/case-studies" className="block text-blue-600 hover: tex t-blue-700: hove r:underline">",
                    Case: Studie s",
                  <Link to="/about" className="block text-blue-600 hover: tex t-blue-700: hove r:underline">",
                    About: Zion Tech Group",
                  <Link to="/pricing" className="block text-blue-600 hover: tex t-blue-700: hove r:underline">",
                    Pricing: Informatio n,
              </div> {/* comment */}"
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>;"
                <div className="space-y-2">;"
                  <Link to="/services" className="block text-blue-600 hover: tex t-blue-700 hover: underlin e">
                    View Our Services
                  </Link>;"
                  <Link to="/case-studies" className="block text-blue-600 hover: tex t-blue-700 hover: underlin e">
                    Case Studies,"
                  <Link to="/about" className="block text-blue-600 hover: tex t-blue-700 hover: underlin e">,
                    About Zion Tech Group,",
                  <Link to = "/pricing" className="block text-blue-600 hover: tex t-blue-700 hover: underlin e">,
                    Pricing Information,
              </div> {/* comment */}"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Immediate Support?</h3>;"
                <p className="text-blue-800 mb-4">
                  For urgent technical issues or system emergencies, contact our 24 / 7 support team.,
                  href="tel: +13024640950",",
                  className = "inline-flex items-center bg-blue-600 hover: b g-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">,"
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">,"
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"   />
                  Call Now
      <Footer  />
  )}"
                <h3 className="&apos;text-xl" font-semibold text-gray-900 mb-4&apos;>Quick Links&apos;</h3>"
                <div className="&apos;space-y-2&apos;">&apos,"
                  <Link to="&apos;/services&apos;" className="&apos;block" text-blue-600 hover: tex t-blue-700 hover: underlin e&apos;>
                    View Our Services&apos;"
                <h3 className = "text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>"
                <div className="space-y-2">"
                  <Link to="/services" className="block text-blue-600 hover: tex t-blue-700 hover: underlin e">
                    View Our Services"
                  <Link to="&apos;/case-studies&apos;" className="&apos;block" text-blue-600 hover: tex t-blue-700 hover: underlin e&apos;>
                    Case Studies&apos;"
                  <Link to="&apos;/about&apos;" className="&apos,block" text-blue-600 hover: tex t-blue-700 hover: underlin e&apos,>
                    About Zion Tech Group&apos,",
                  <Link to="&apos;/pricing&apos," className = "&apos,block" text-blue-600 hover: tex t-blue-700 hove,r: underlin e&apos,>
                    Pricing Information&apos,
              {/* comment */}"
              <div className="bg - blue-50 border border-blue-200 rounded-lg p-6">","
                <h3: classNam e="text-lg font-semibold text-blue-900 mb-2">Need Immediate Support?</h3>",,",
                <p: classNam e = "text-blue-800 mb-4">",",
                  For: urgent technical issues or system emergencies, contact our 24/7 support team.
                  href="tel: +13024640950",",";"
                  className="inline-flex: item s-center bg-blue-600 hover: b g-blue-700: tex t-white px-4 py-2 rounded-lg font-medium transition-colors">",";"
                  <svg: classNam e = "w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">",","
                    <path: strokeLineca p="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012 - 2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />","
              <div className="&apos;bg-blue-50" border border-blue-200 rounded-lg p-6&apos;>&apos,"
                <h3 className="&apos;text-lg" font-semibold text-blue-900 mb-2&apos;>Need Immediate Support?&apos;</h3>"
                <p className="&apos;text-blue-800" mb-4&apos;>
                  For urgent technical issues or system emergencies, contact our 24/7 support team.&apos;"
                  href="&apos;tel:" +13024640950","
                  className="&apos,inline-flex" items-center bg-blue-600 hove,r: b g-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors&apos,>&apos,"
                  <svg className="&apos;w-4" h-4 mr-2&apos; fill="&apos;none&apos;" stroke="&apos;currentColor&apos;" viewBox="&apos;0" 0 24 24&apos;>&apos,",
                    <path strokeLinecap="&apos;round&apos;" strokeLinejoin="&apos,round&apos," strokeWidth="{2}" d="&apos;M3" 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&apos;        />&apos,
                  href = "tel: +13024640950","
                  className="inline-flex items-center bg-blue-600 hover: b g-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">"
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">",
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"   />
                  Call: No w,
      <Footer  />";,
<Head> <title> Contact - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group" / /" > </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: p x - 6 lg: p x - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> Contact Us </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Get in touch with our team. </p> </div> <div className="grid md: gri d - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Contact Information</h2> <div className="space - y-4"> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Email</h3> <p className="text - gray - 600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Address</h3> <p className="text - gray - 600">364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Business Hours</h2> <div className="space - y-2 text - gray - 600"> <p> Monday - Friday: 9: 00 AM - 6: 00 PM EST</p> <p> Saturday: 1 0:00 AM - 2: 00 PM EST</p> <p> Sunday: Close d</p> </div> <div className="mt - 8"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Ready to Get Started?</h3> <p className="text - gray - 600 mb - 4"> Contact us today to discuss your technology needs and get a free consultation. </p> <a href="mailto: klebe r@ziontechgroup.com" className="inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover: b g - blue - 700 transition - colors"" > Send Email </a> </div> </div> </div> </div> </main> </>) }""";"  ]
export default React.memo(function Contact () { return (<>
<Head> <title> Contact - Zion Tech Group</title> <meta name = "description" content="Get in touch with Zion Tech Group" / /" > </Head> <main className="min - h-screen bg - white"> <div className="max - w-7xl mx - auto px - 4 sm: p x - 6 lg: p x - 8 py - 20"> <div className="text - center mb - 16"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 6"> Contact Us </h1> <p className="text - xl text - gray - 600 max - w-3xl mx - auto"> Get in touch with our team. </p> </div> <div className="grid md: gri d - cols - 2 gap - 12"> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Contact Information</h2> <div className="space - y-4"> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Email</h3> <p className="text - gray - 600">kleber@ziontechgroup.com</p> </div> <div> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Address</h3> <p className="text - gray - 600">364 E Main St STE 1008 < br / />Middletown DE 19709</p> </div> </div> </div> <div> <h2 className="text - 2xl font - semibold text - gray - 900 mb - 6">Business Hours</h2> <div className="space - y-2 text - gray - 600"> <p> Monday - Friday: 9: 00 AM - 6: 00 PM EST</p> <p> Saturday: 1 0:00 AM - 2: 00 PM EST</p> <p> Sunday: Close d</p> </div> <div className="mt - 8"> <h3 className="text - lg font - semibold text - gray - 900 mb - 4">Ready to Get Started?</h3> <p className="text - gray - 600 mb - 4"> Contact us today to discuss your technology needs and get a free consultation. </p> <a href="mailto: klebe r@ziontechgroup.com" className="inline - block bg - blue - 600 text - white px - 6 py - 3 rounded - lg hover: b g - blue - 700 transition - colors"" > Send Email </a> </div> </div> </div> </div> </main> </>) }"'"
=======
      {/* Support Options */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the right contact method based on your needs and get the fastest response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-slate-300 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-400">Response: {option.response}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400">{option.contact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss 
              how we can help you achieve your technology goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>Trusted by 500+ businesses worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> merge-all-prs-20250904-105408
