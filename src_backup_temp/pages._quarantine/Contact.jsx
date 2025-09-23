import React,{useState} from &apos;react&apos;; import {motion} from &apos;framer-motion&apos;; import {Mail,Phone,MapPin,Clock,Send,CheckCircle,MessageSquare,Building,Globe,Linkedin,Twitter,Facebook,Instagram,Github} from &apos;lucide-react&apos;; const contactMethods = [ {icon: Phone,title: &apos;Phone&apos;,value: &apos;+1 302 464 0950&apos;,description: &apos;Call us during business hours&apos;,action: &apos;tel:+13024640950&apos;,color: &apos;from-blue-500 to-cyan-500&apos;},{icon: Mail,title: &apos;Email&apos;,value: &apos;kleber@ziontechgroup.com&apos;,description: &apos;Send us a message time&apos;,action: &apos;mailto:kleber@ziontechgroup.com&apos;,color: &apos;from-purple-500 to-pink-500&apos;},{icon: MapPin,title: &apos;Address&apos;,value: &apos;364 E Main St STE 1008&apos;,description: &apos;Middletown,DE 19709&apos;,action: &apos;https: color: &apos;from-green-500 to-emerald-500&apos;},{icon: Clock,title: &apos;Business Hours&apos;,value: &apos;Mon - Fri: 9:00 AM - 6:00 PM&apos;,description: &apos;Eastern Time Zone&apos;,action: null,color: &apos;from-orange-500 to-red-500&apos;}; ]; const socialLinks = [ {name: &apos;LinkedIn&apos;,icon: Linkedin,url: &apos;https: color: &apos;hover:text-blue-500&apos;},{name: &apos;Twitter&apos;,icon: Twitter,url: &apos;https: color: &apos;hover:text-sky-500&apos;},{name: &apos;Facebook&apos;,icon: Facebook,url: &apos;https: color: &apos;hover:text-blue-600&apos;},{name: &apos;Instagram&apos;,icon: Instagram,url: &apos;https: color: &apos;hover:text-pink-500&apos;},{name: &apos;GitHub&apos;,icon: Github,url: &apos;https: color: &apos;hover:text-gray-400&apos;}; ]; const contactFormFields = [ {name: &apos;firstName&apos;,label: &apos;First Name&apos;,type: &apos;text&apos;,required: true,placeholder: &apos;Enter your first name&apos;},{name: &apos;lastName&apos;,label: &apos;Last Name&apos;,type: &apos;text&apos;,required: true,placeholder: &apos;Enter your last name&apos;},{name: &apos;email&apos;,label: &apos;Email&apos;,type: &apos;email&apos;,required: true,placeholder: &apos;Enter your email address&apos;},{name: &apos;phone&apos;,label: &apos;Phone&apos;,type: &apos;tel&apos;,required: false,placeholder: &apos;Enter your phone number (optional)&apos;},{name: &apos;comp&apos;,label: &apos;Comp&apos;,type: &apos;text&apos;,required: false,placeholder: &apos;Enter your comp name (optional)&apos;},{name: &apos;service&apos;,label: &apos;Service Interest&apos;,type: &apos;select&apos;,required: true,options: [ &apos;AI & Analytics&apos;,&apos;Cybersecurity&apos;,&apos;Cloud & DevOps&apos;,&apos;IoT & Edge Computing&apos;,&apos;Digital Transformation&apos;,&apos;Mobile Development&apos;,&apos;Micro SaaS Solutions&apos;,&apos;Other&apos; ]}; ]; export default function Contact($1) { const [formData,setFormData] = useState({ firstName: &quot;,lastName: &quot;,email: &quot;,phone: &quot;,comp: &quot;,service: &quot;,message: &quot; };); const [isSubmitting,setIsSubmitting] = useState(false); const [submitSuccess,setSubmitSuccess] = useState(false); const handleInputChange = (props) => { const { name,value }; = e.target; setFormData(prev => ({...prev,[name]: value}))}; const handleSubmit = async (e) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setIsSubmitting(false); setSubmitSuccess(true); setTimeout(() => { setSubmitSuccess(false);&apos;; setFormData({ firstName: &quot;,lastName: &quot;,email: &quot;,phone: &quot;,comp: &quot;,service: &quot;,message: &quot; })},3000)}; return ( <div className=&quot;min-h-screen bg-white&quot;> {} <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;> <div className=&quot;absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20&quot;></div> <div className=&quot;absolute inset-0&quot;> <div className=&quot;absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl&quot;></div> <div className=&quot;absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl&quot;></div> </div> <div className=&quot;container-responsive relative z-10&quot;> <motion.div initial={{ opacity: 0,y: 30 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className=&quot;text-center max-w-4xl mx-auto&quot; > <motion.div initial={{ opacity: 0,scale: 0.8 }} animate={{ opacity: 1,scale: 1 }} transition={{ duration: 0.8,delay: 0.2 }} className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8&quot; > <MessageSquare className=&quot;w-10 h-10 text-white&quot; /> </motion.div> <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;> Get in <span className=&quot;text-gradient block&quot;>Touch</span> </h1> <pclassName=&quot;text-xl text-zion-slate-light leading-relaxed mb-8&quot;> Ready to transform your business with cutting-edge technology?&apos;;&apos;; Let&apos;s discuss your project and explore how we can help you achieve your goals. </p> </motion.div> </div> </section> {} <section className=&quot;py-20 bg-zion-blue-dark/50&quot;> <div className=&quot;container-responsive&quot;> <motion.div initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className=&quot;text-center mb-16&quot; > <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Contact Information</h2> <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;> Multiple ways to reach us. Choose the method that works best for you. </p> </motion.div> <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;> {contactMethods.map((method,index) => ( <motion.div key={method.title} initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className=&quot;bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group&quot; > <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}> <method .icon className=&quot;w-8 h-8 text-white&quot; /> </div> <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{method.title}</h3> <p className=&quot;text-zion-cyan font-semibold mb-1&quot;>{method.value}</p> <p className=&quot;text-zion-slate-light text-sm mb-4&quot;>{method.description}</p> {method.action && ( <a&apos;; href={method.action} target={method.action.startsWith(&apos;http&apos;) ? &apos;_blank&apos; : null} rel={method.action.startsWith(&apos;http&apos;) ? &apos;noopener noreferrer&apos; : null} className=&quot;inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300&quot; > <span className=&quot;text-sm font-medium&quot;>Contact</span> <Send className=&quot;w-4 h-4&quot; /> </a> )} </motion.div> ))} </div> </div> </section> {} <section className=&quot;py-20&quot;> <div className=&quot;container-responsive&quot;> <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-start&quot;> {} <motion.div initial={{ opacity: 0,x: -30 }} whileInView={{ opacity: 1,x: 0 }} transition={{ duration: 0.8 }} > <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Send Us a Message</h2> <pclassName=&quot;text-zion-slate-light mb-8 leading-relaxed&quot;>&apos;; Fill out the form below and we&apos;ll get back to you within 24 hours.&apos;;&apos;; We&apos;re excited to learn about your project and discuss how we can help. </p> {submitSuccess ? ( <motion.div initial={{ opacity: 0,scale: 0.9 }} animate={{ opacity: 1,scale: 1 }} className=&quot;bg-green-500/20 border border-green-500/40 rounded-2xl p-8 text-center&quot; > <CheckCircle className=&quot;w-16 h-16 text-green-400 mx-auto mb-4&quot; /> <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>Message Sent!</h3> <pclassName=&quot;text-green-200&quot;>&apos;; Thank you for reaching out. We&apos;ll get back to you within 24 hours. </p> </motion.div> ) : ( <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;> <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;> {contactFormFields.slice(0,2).map(field => ( <div key={field.name}> <label htmlFor={field.name} className=&quot;block text-white font-medium mb-2&quot;> {field.label} {field.required && <span className=&quot;text-red-400&quot;>*</span>} </label> <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className=&quot;w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300&quot; /> </div> ))} </div> <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;> {contactFormFields.slice(2,4).map(field => ( <div key={field.name}> <label htmlFor={field.name} className=&quot;block text-white font-medium mb-2&quot;> {field.label} {field.required && <span className=&quot;text-red-400&quot;>*</span>} </label> <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className=&quot;w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300&quot; /> </div> ))} </div> <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;> {contactFormFields.slice(4,6).map(field => ( <div key={field.name}> <label htmlFor={field.name} className=&quot;block text-white font-medium mb-2&quot;> {field.label} {field.required && <span className=&quot;text-red-400&quot;>*</span>} </label>&apos;; {field.type === &apos;select&apos; ? ( <select id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} className=&quot;w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300&quot; > <option value=&quot;>Select a service</option> {field.options.map(option => ( <option key={option} value={option}>{option}</option> ))} </select> ) : ( <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className=&quot;w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300&quot; /> )} </div> ))} </div> <div> <label htmlFor=&quot;message&quot; className=&quot;block text-white font-medium mb-2&quot;> Message <span className=&quot;text-red-400&quot;>*</span> </label> <textarea id=&quot;message&quot; name=&quot;message&quot; value={formData.message} onChange={handleInputChange} required rows={6} placeholder=&quot;Tell us about your project,goals,and how we can help...&quot; className=&quot;w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300 resize-none&quot; /> </div> <buttontype=&quot;submit&quot; disabled={isSubmitting} className=&quot;w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none&quot;; >&apos;; {isSubmitting ? &apos;Sending Message...&apos; : &apos;Send Message&apos;} </button> </form> )} </motion.div> {} <motion.div initial={{ opacity: 0,x: 30 }} whileInView={{ opacity: 1,x: 0 }} transition={{ duration: 0.8 }} className=&quot;space-y-8&quot; > <div> <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>About Zion Tech Group</h3> <p className=&quot;text-zion-slate-light leading-relaxed mb-6&quot;> We are a leading technology company specializing in AI,cybersecurity,cloud solutions,and digital transformation. Our team of experts is dedicated to helping businesses leverage cutting-edge technology to achieve their goals. </p> <div className=&quot;flex items-center gap-3 text-zion-cyan&quot;> <Building className=&quot;w-5 h-5&quot; /> <span className=&quot;font-medium&quot;>Established 2020</span> </div> </div> <div> <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Connect With Us</h3> <div className=&quot;flex gap-4&quot;> {socialLinks.map(social => ( <a key={social.name} href={social.url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className={`p-3 bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-xl text-zion-slate-light ${social.color} hover:border-zion-cyan/40 transition-all duration-300`} title={social.name} > <social .icon className=&quot;w-5 h-5&quot; /> </a> ))} </div> </div> <div className=&quot;bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6&quot;> <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Why Choose Us?</h3> <ul className=&quot;space-y-3 text-zion-slate-light&quot;> <li className=&quot;flex items-center gap-3&quot;> <CheckCircle className=&quot;w-5 h-5 text-zion-cyan flex-shrink-0&quot; /> <span>Expert team with 20+ years combined experience</span> </li> <li className=&quot;flex items-center gap-3&quot;> <CheckCircle className=&quot;w-5 h-5 text-zion-cyan flex-shrink-0&quot; /> <span>Proven track record of successful projects</span> </li> <li className=&quot;flex items-center gap-3&quot;> <CheckCircle className=&quot;w-5 h-5 text-zion-cyan flex-shrink-0&quot; /> <span>Cutting-edge technology solutions</span> </li> <li className=&quot;flex items-center gap-3&quot;> <CheckCircle className=&quot;w-5 h-5 text-zion-cyan flex-shrink-0&quot; /> <span>24/7 support and maintenance</span> </li> </ul> </div> </motion.div> </div> </div> </section> {} <section className=&quot;py-20 bg-zion-blue-dark/50&quot;> <div className=&quot;container-responsive&quot;> <motion.div initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className=&quot;text-center mb-16&quot; > <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Visit Our Office</h2> <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;> Located in the heart of Middletown,Delaware,our office is easily accessible and ready to welcome you for in-person meetings and consultations. </p> </motion.div> <div className=&quot;bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 text-center&quot;> <div className=&quot;w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6&quot;> <div className=&quot;text-center&quot;> <MapPin className=&quot;w-16 h-16 text-zion-cyan mx-auto mb-4&quot; /> <p className=&quot;text-zion-slate-light&quot;>Interactive Map Coming Soon</p> </div> </div> <div className=&quot;text-center&quot;> <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Zion Tech Group</h3> <p className=&quot;text-zion-cyan&quot;>364 E Main St STE 1008</p> <p className=&quot;text-zion-slate-light&quot;>Middletown,DE 19709</p> <p className=&quot;text-zion-slate-light text-sm mt-2&quot;>United States</p> </div> </div> </div> </section> </div> )} </motion> </textarea> </motion> </motion> </motion>;&apos;;&apos;;
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Mail,;
  Phone,;
  MapPin,;
  Clock,;
  Send,;
  CheckCircle,;
  MessageSquare,;
  Building,;
  Globe,;
  Linkedin,;
  Twitter,;
  Facebook,;
  Instagram,;
  Github} from 'lucide-react';
;
const contactMethods = [;
  {"icon": "Phone",;
    "title": 'Phone',;
    "value": '+1 302 464 0950',;
    "description": 'Call us during business hours',;
    "action": '"tel": "+13024640950'",;
    "color": 'from-blue-500 to-cyan-500'},;
  {"icon": "Mail",;
    "title": 'Email',;
    "value": 'kleber@ziontechgroup.com',;
    "description": 'Send us a message time',;
    "action": '"mailto": "kleber@ziontechgroup.com'",;
    "color": 'from-purple-500 to-pink-500'},;
  {"icon": "MapPin",;
    "title": 'Address',;
    "value": '364 E Main St STE 1008',;
    "description": 'Middletown, DE 19709',;
    "action": '"https": "//maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'",;
    "color": 'from-green-500 to-emerald-500'},;
  {"icon": "Clock",;
    "title": 'Business Hours',;
    "value": 'Mon - "Fri": "9": "00 AM - "6":00 PM'",;
    "description": 'Eastern Time Zone',;
    "action": "null",;
    "color": 'from-orange-500 to-red-500'}
];
;
const socialLinks = [;
  {"name": 'LinkedIn',;
    "icon": "Linkedin",;
    "url": '"https": "//linkedin.com/company/ziontechgroup'",;
    "color": '"hover": "text-blue-500'"},;
  {"name": 'Twitter',;
    "icon": "Twitter",;
    "url": '"https": "//twitter.com/ziontechgroup'",;
    "color": '"hover": "text-sky-500'"},;
  {"name": 'Facebook',;
    "icon": "Facebook",;
    "url": '"https": "//facebook.com/ziontechgroup'",;
    "color": '"hover": "text-blue-600'"},;
  {"name": 'Instagram',;
    "icon": "Instagram",;
    "url": '"https": "//instagram.com/ziontechgroup'",;
    "color": '"hover": "text-pink-500'"},;
  {"name": 'GitHub',;
    "icon": "Github",;
    "url": '"https": "//github.com/ziontechgroup'",;
    "color": '"hover": "text-gray-400'"}
];
;
const contactFormFields = [;
  {"name": 'firstName',;
    "label": 'First Name',;
    "type": 'text',;
    "required": "true",;
    "placeholder": 'Enter your first name'},;
  {"name": 'lastName',;
    "label": 'Last Name',;
    "type": 'text',;
    "required": "true",;
    "placeholder": 'Enter your last name'},;
  {"name": 'email',;
    "label": 'Email',;
    "type": 'email',;
    "required": "true",;
    "placeholder": 'Enter your email address'},;
  {"name": 'phone',;
    "label": 'Phone',;
    "type": 'tel',;
    "required": "false",;
    "placeholder": 'Enter your phone number (optional)'},;
  {"name": 'comp',;
    "label": 'Comp',;
    "type": 'text',;
    "required": "false",;
    "placeholder": 'Enter your comp name (optional)'},;
  {"name": 'service',;
    "label": 'Service Interest',;
    "type": 'select',;
    "required": "true",;
    "options": "[;
      'AI & Analytics'",;
      'Cybersecurity',;
      'Cloud & DevOps',;
      'IoT & Edge Computing',;
      'Digital Transformation',;
      'Mobile Development',;
      'Micro SaaS Solutions',;
      'Other';
    ]}
];
;
export default function Contact("props": "any) {;
  const [formData", setFormData] = useState({;
    "firstName": '',;
    "lastName": '',;
    "email": '',;
    "phone": '',;
    "comp": '',;
    "service": '',;
    "message": '';
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
;
  const handleInputChange = ("props": "any) => {;
    const { name", value } = e.target;
    setFormData(prev => ({...prev,;
      [name]: "value"}));
  };
;
  const handleSubmit = async (e) => {;
    e.preventDefault();
    setIsSubmitting(true);
;
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
;
    setIsSubmitting(false);
    setSubmitSuccess(true);
;
    // Reset form after 3 seconds;
    setTimeout(() => {;
      setSubmitSuccess(false);
      setFormData({;
        "firstName": '',;
        "lastName": '',;
        "email": '',;
        "phone": '',;
        "comp": '',;
        "service": '',;
        "message": '';
const contactMethods = [{"icon": Phone,
    "title": 'Phone',
    "value": '+1 302 464 0950',
    "description": 'Call us during business hours',
    "action": 'tel:+13024640950',
    "color": 'from-blue-500 to-cyan-500'},
  {"icon": Mail,
    "title": 'Email',
    "value": 'kleber@ziontechgroup.com',
    "description": 'Send us a message time',
    "action": 'mailto:kleber@ziontechgroup.com',
    "color": 'from-purple-500 to-pink-500'},
  {"icon": MapPin,
    "title": 'Address',
    "value": '364 E Main St STE 1008',
    "description": 'Middletown, DE 19709',
    "action": 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
    "color": 'from-green-500 to-emerald-500'},
  {"icon": Clock,
    "title": 'Business Hours',
    "value": 'Mon - Fri: 9:00 AM - 6:00 PM',
    "description": 'Eastern Time Zone',
    "action": null,
    "color": 'from-orange-500 to-red-500'};
];
const socialLinks = [{"name": 'LinkedIn',
    "icon": Linkedin,
    "url": 'https://linkedin.com/company/ziontechgroup',
    "color": 'hover:text-blue-500'},
  {"name": 'Twitter',
    "icon": Twitter,
    "url": 'https://twitter.com/ziontechgroup',
    "color": 'hover:text-sky-500'},
  {"name": 'Facebook',
    "icon": Facebook,
    "url": 'https://facebook.com/ziontechgroup',
    "color": 'hover:text-blue-600'},
  {"name": 'Instagram',
    "icon": Instagram,
    "url": 'https://instagram.com/ziontechgroup',
    "color": 'hover:text-pink-500'},
  {"name": 'GitHub',
    "icon": Github,
    "url": 'https://github.com/ziontechgroup',
    "color": 'hover:text-gray-400'};
];
const contactFormFields = [{"name": 'firstName',
    "label": 'First Name',
    "type": 'text',
    "required": true,
    "placeholder": 'Enter your first name'},
  {"name": 'lastName',
    "label": 'Last Name',
    "type": 'text',
    "required": true,
    "placeholder": 'Enter your last name'},
  {"name": 'email',
    "label": 'Email',
    "type": 'email',
    "required": true,
    "placeholder": 'Enter your email address'},
  {"name": 'phone',
    "label": 'Phone',
    "type": 'tel',
    "required": false,
    "placeholder": 'Enter your phone number (optional)'},
  {"name": 'comp',
    "label": 'Comp',
    "type": 'text',
    "required": false,
    "placeholder": 'Enter your comp name (optional)'},
  {"name": 'service',
    "label": 'Service Interest',
    "type": 'select',
    "required": true,
    "options": [
      'AI & Analytics',
      'Cybersecurity',
      'Cloud & DevOps',
      'IoT & Edge Computing',
      'Digital Transformation',
      'Mobile Development',
      'Micro SaaS Solutions',
      'Other'
    ]};
];
export default function Contact($1) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comp: '',
    service: '',
    message: ''
  }
    );
    "firstName": ",
    "lastName": ",
    "email": ",
    "phone": ",
    "comp": ",
    "service": ",
    "message": "
  };);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleInputChange = (props) => {
    const { name, value }; = e.target;
    setFormData(prev => ({...prev,
      [name]: value}));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);';
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comp: '',
        service: '',
        message: ''
      }
    );
        "firstName": ",
        "lastName": ",
        "email": ",
        "phone": ",
        "comp": ",
        "service": ",
        "message": "
      });
    }, 3000);
  };
;
  return (;
    <div className="min-h-screen bg-futuristic">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>;
        <div className="absolute inset-0">;
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>;
        </div>;
        <div className="container-responsive relative z-10">;
          <motion.div;
            initial={{ "opacity": "0", "y": "30 "}}
            animate={{ "opacity": "1", "y": "0 "}}
            transition={{ "duration": "0.8 "}}
            className="text-center max-w-4xl mx-auto";
          >;
            <motion.div;
              initial={{ "opacity": "0", "scale": "0.8 "}}
              animate={{ "opacity": "1", "scale": "1 "}}
              transition={{ "duration": "0.8", "delay": "0.2 "}}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8";
            >;
              <MessageSquare className="w-10 h-10 text-white"  />;
            </motion.div>;
            <h1 className="text-5xl "md": "text-6xl font-bold text-white mb-6">;
              Get in;
              <span className="text-gradient block">Touch</span>;
            </h1>;
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">;
              Ready to transform your business with cutting-edge technology?;
              Let's discuss your project and explore how we can help you achieve your goals.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Methods */"}
      <section className="py-20 bg-zion-blue-dark/50">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ "opacity": "0", "y": "30 "}}
            whileInView={{ "opacity": "1", "y": "0 "}}
            transition={{ "duration": "0.8 "}}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Contact Information</h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Multiple ways to reach us. Choose the method that works best for you.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-4 gap-6">;
            {contactMethods.map((method", index) => (;
              <motion.div;
                key={method.title}
                initial={{ "opacity": "0", "y": "30 "}}
                whileInView={{ "opacity": "1", "y": "0 "}}
                transition={{ "duration": "0.6", "delay": "index * 0.1 "}}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center "hover": "border-zion-cyan/40 transition-all duration-300 group";
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color"} rounded-xl flex items-center justify-center mx-auto mb-4 group-"hover": "scale-110 transition-transform duration-300`"}>;
                  <method .icon className="w-8 h-8 text-white"  />;
                </div>;
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>;
                <p className="text-zion-cyan font-semibold mb-1">{method.value}</p>;
                <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>;
                {method.action && (;
                  <a;
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : "null"}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : "null"}
                    className="inline-flex items-center gap-2 text-zion-cyan "hover": "text-white transition-colors duration-300";
                  >;
                    <span className="text-sm font-medium">Contact</span>;
                    <Send className="w-4 h-4"  />;
                  </a>;
                )"}
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Form */}
      <section className="py-20">;
        <div className="container-responsive">;
          <div className="grid grid-cols-1 "lg": "grid-cols-2 gap-16 items-start">;
            {/* Form */"}
            <motion.div;
              initial={{ "opacity": "0", "x": "-30 "}}
              whileInView={{ "opacity": "1", "x": "0 "}}
              transition={{ "duration": "0.8 "}}
            >;
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>;
              <p className="text-zion-slate-light mb-8 leading-relaxed">;
                Fill out the form below and we'll get back to you within 24 hours.;
                We're excited to learn about your project and discuss how we can help.;
              </p>;
              {submitSuccess ? (;
                <motion.div;
                  initial={{ "opacity": "0", "scale": "0.9 "}}
                  animate={{ "opacity": "1", "scale": "1 "}}
                  className="bg-green-500/20 border border-green-500/40 rounded-2xl p-8 text-center";
                >;
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4"  />;
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>;
                  <p className="text-green-200">;
                    Thank you for reaching out. We'll get back to you within 24 hours.;
                  </p>;
                </motion.div>;
              ) : "(;
                <form onSubmit={handleSubmit"} className="space-y-6">;
                  <div className="grid grid-cols-1 "md": "grid-cols-2 gap-6">;
                    {contactFormFields.slice(0", 2).map(field => (;
                      <div key={field.name}>;
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">;
  return (
        <div className="min-h-screen bg-futuristic">
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ "opacity": 0, "y": 30 }}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ "opacity": 0, "scale": 0.8 }}
              animate={{ "opacity": 1, "scale": 1 }}
              transition={{ "duration": 0.8, "delay": 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <MessageSquare className="w-10 h-10 text-white"  />
            </motion.div>
            <h1 className="text-5xl "md": text-6xl font-bold text-white mb-6">
              Get in
              <span className="text-gradient block">Touch</span>
            </h1>
            <pclassName="text-xl text-zion-slate-light leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology?';';
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ "opacity": 0, "y": 30 }}
                whileInView={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6, "delay": index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center "hover": border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-"hover": scale-110 transition-transform duration-300`}>
                  <method .icon className="w-8 h-8 text-white"  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-zion-cyan font-semibold mb-1">{method.value}</p>
                <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                {method.action && (
                  <a';
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : null}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : null}
                    className="inline-flex items-center gap-2 text-zion-cyan "hover": text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Contact</span>
                    <Send className="w-4 h-4"  />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 "lg": grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ "opacity": 0, "x": -30 }}
              whileInView={{ "opacity": 1, "x": 0 }}
              transition={{ "duration": 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <pclassName="text-zion-slate-light mb-8 leading-relaxed">';
                Fill out the form below and we'll get back to you within 24 hours.';';
                We're excited to learn about your project and discuss how we can help.
              </p>
              {submitSuccess ? (
                <motion.div
                  initial={{ "opacity": 0, "scale": 0.9 }}
                  animate={{ "opacity": 1, "scale": 1 }}
                  className="bg-green-500/20 border border-green-500/40 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4"  />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!
                  <p className="text-green-200">
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <pclassName="text-green-200">';
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
                    {contactFormFields.slice(0, 2).map(field => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>;
                        <input type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": "border-zion-cyan "focus":outline-none transition-colors duration-300";
                          />;
                      </div>;
                    ))"}
                  </div>;
                  <div className="grid grid-cols-1 "md": "grid-cols-2 gap-6">;
                    {contactFormFields.slice(2", 4).map(field => (;
                      <div key={field.name}>;
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">;
                          className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": border-zion-cyan focus:outline-none transition-colors duration-300"
                          />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
                    {contactFormFields.slice(2, 4).map(field => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>;
                        <input type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": "border-zion-cyan "focus":outline-none transition-colors duration-300";
                          />;
                      </div>;
                    ))"}
                  </div>;
                  <div className="grid grid-cols-1 "md": "grid-cols-2 gap-6">;
                    {contactFormFields.slice(4", 6).map(field => (;
                      <div key={field.name}>;
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">;
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>;
                        {field.type === 'select' ? (;
                          <select;
                          className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": border-zion-cyan focus:outline-none transition-colors duration-300"
                          />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 "md": grid-cols-2 gap-6">
                    {contactFormFields.slice(4, 6).map(field => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-white font-medium mb-2">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>';
                        {field.type === 'select' ? (
                          <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white "focus": "border-zion-cyan "focus":outline-none transition-colors duration-300";
                          >;
                            <option value="">Select a service</option>;
                            {field.options.map(option => (;
                              <option key={option"} value={option}>{option}</option>;
                            className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white "focus": border-zion-cyan focus:outline-none transition-colors duration-300"
                          >
                            <option value=">Select a service</option>
                            {field.options.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>;
                        ) : "(;
                          <input type={field.type"}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": "border-zion-cyan "focus":outline-none transition-colors duration-300";
                            />;
                        )"}
                      </div>;
                    ))}
                  </div>;
                  <div>;
                    <label htmlFor="message" className="block text-white font-medium mb-2">;
                      Message <span className="text-red-400">*</span>;
                    </label>;
                    <textarea id="message";
                      name="message";
                            className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": border-zion-cyan focus:outline-none transition-colors duration-300"
                            />
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required;
                      rows={6}
                      placeholder="Tell us about your project, goals, and how we can help...";
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": "border-zion-cyan "focus":outline-none transition-colors duration-300 resize-none";
                     />;
                  </div>;
                  <button;
                    type="submit";
                    disabled={isSubmitting"}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl "hover": "shadow-lg "hover":shadow-zion-cyan/25 transition-all duration-300 transform "hover":scale-105 "disabled":opacity-50 "disabled":cursor-not-allowed "disabled":transform-none";
                  >;
                    {isSubmitting ? 'Sending Message...' : 'Send Message'"}
                  </button>;
                </form>;
              )}
            </motion.div>;
            {/* Comp Info */}
            <motion.div;
              initial={{ "opacity": "0", "x": "30 "}}
              whileInView={{ "opacity": "1", "x": "0 "}}
              transition={{ "duration": "0.8 "}}
              className="space-y-8";
            >;
              <div>;
                <h3 className="text-2xl font-bold text-white mb-4">About Zion Tech Group</h3>;
                <p className="text-zion-slate-light leading-relaxed mb-6">;
                  We are a leading technology company specializing in AI, cybersecurity, cloud solutions,;
                  and digital transformation. Our team of experts is dedicated to helping businesses;
                  leverage cutting-edge technology to achieve their goals.;
                </p>;
                <div className="flex items-center gap-3 text-zion-cyan">;
                  <Building className="w-5 h-5"  />;
                  <span className="font-medium">Established 2020</span>;
                </div>;
              </div>;
              <div>;
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>;
                <div className="flex gap-4">;
                  {socialLinks.map(social => (;
                    <a;
                      key={social.name}
                      href={social.url}
                      target="_blank";
                      rel="noopener noreferrer";
                      className={`p-3 bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-xl text-zion-slate-light ${social.color} "hover": "border-zion-cyan/40 transition-all duration-300`"}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light "focus": border-zion-cyan focus:outline-none transition-colors duration-300 resize-none"
                     />
                  </div>
                  <buttontype="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl "hover": shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
                  >';
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
            {/* Comp Info */}
            <motion.div
              initial={{ "opacity": 0, "x": 30 }}
              whileInView={{ "opacity": 1, "x": 0 }}
              transition={{ "duration": 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About Zion Tech Group
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  We are a leading technology company specializing in AI, cybersecurity, cloud solutions,
                  and digital transformation. Our team of experts is dedicated to helping businesses
                  leverage cutting-edge technology to achieve their goals.
                </p>
                <div className="flex items-center gap-3 text-zion-cyan">
                  <Building className="w-5 h-5"  />
                  <span className="font-medium">Established 2020</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us
                <div className="flex gap-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-xl text-zion-slate-light ${social.color} "hover": border-zion-cyan/40 transition-all duration-300`}
                      title={social.name}
                    >;
                      <social .icon className="w-5 h-5"  />;
                    </a>;
                  ))}
                </div>;
              </div>;
              <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6">;
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>;
                <ul className="space-y-3 text-zion-slate-light">;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />;
                    <span>Expert team with 20+ years combined experience</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />;
                    <span>Proven track record of successful projects</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />;
                    <span>Cutting-edge technology solutions</span>;
                  </li>;
                  <li className="flex items-center gap-3">;
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />;
                    <span>24/7 support and maintenance</span>;
                  </li>;
                </ul>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Map Section */}
      <section className="py-20 bg-zion-blue-dark/50">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ "opacity": "0", "y": "30 "}}
            whileInView={{ "opacity": "1", "y": "0 "}}
            transition={{ "duration": "0.8 "}}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Located in the heart of Middletown, Delaware, our office is easily accessible;
              and ready to welcome you for in-person meetings and consultations.;
            </p>;
          </motion.div>;
          <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 text-center">;
            <div className="w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6">;
              <div className="text-center">;
                <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4"  />;
                <p className="text-zion-slate-light">Interactive Map Coming Soon</p>;
              </div>;
            </div>;
            <div className="text-center">;
              <h3 className="text-xl font-bold text-white mb-2">Zion Tech Group</h3>;
              <p className="text-zion-cyan">364 E Main St STE 1008</p>;
              <p className="text-zion-slate-light">Middletown, DE 19709</p>;
              <p className="text-zion-slate-light text-sm mt-2">United States</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}
;
</motion>;
</motion>;
</textarea>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
                </div>
              </div>
              <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?
                <ul className="space-y-3 text-zion-slate-light">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />
                    <span>Expert team with 20+ years combined experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />
                    <span>Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />
                    <span>Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />
                    <span>24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ "opacity": 0, "y": 30 }}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Located in the heart of Middletown, Delaware, our office is easily accessible
              and ready to welcome you for in-person meetings and consultations.
            </p>
          </motion.div>
          <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4"  />
                <p className="text-zion-slate-light">Interactive Map Coming Soon</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Zion Tech Group
              <p className="text-zion-cyan">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light">Middletown, DE 19709</p>
              <p className="text-zion-slate-light text-sm mt-2">United States</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}
</motion>
</textarea>
</motion>
</motion>
</motion>;';';
import React,{useState} from 'react'; import {motion} from 'framer-motion'; import {Mail,Phone,MapPin,Clock,Send,CheckCircle,MessageSquare,Building,Globe,Linkedin,Twitter,Facebook,Instagram,Github} from 'lucide-react'; const contactMethods = [ {icon: Phone,title: 'Phone',value: '+1 302 464 0950',description: 'Call us during business hours',action: 'tel:+13024640950',color: 'from-blue-500 to-cyan-500'},{icon: Mail,title: 'Email',value: 'kleber@ziontechgroup.com',description: 'Send us a message time',action: 'mailto:kleber@ziontechgroup.com',color: 'from-purple-500 to-pink-500'},{icon: MapPin,title: 'Address',value: '364 E Main St STE 1008',description: 'Middletown,DE 19709',action: 'https: color: 'from-green-500 to-emerald-500'},{icon: Clock,title: 'Business Hours',value: 'Mon - Fri: 9:00 AM - 6:00 PM',description: 'Eastern Time Zone',action: null,color: 'from-orange-500 to-red-500'}; ]; const socialLinks = [ {name: 'LinkedIn',icon: Linkedin,url: 'https: color: 'hover:text-blue-500'},{name: 'Twitter',icon: Twitter,url: 'https: color: 'hover:text-sky-500'},{name: 'Facebook',icon: Facebook,url: 'https: color: 'hover:text-blue-600'},{name: 'Instagram',icon: Instagram,url: 'https: color: 'hover:text-pink-500'},{name: 'GitHub',icon: Github,url: 'https: color: 'hover:text-gray-400'}; ]; const contactFormFields = [ {name: 'firstName',label: 'First Name',type: 'text',required: true,placeholder: 'Enter your first name'},{name: 'lastName',label: 'Last Name',type: 'text',required: true,placeholder: 'Enter your last name'},{name: 'email',label: 'Email',type: 'email',required: true,placeholder: 'Enter your email address'},{name: 'phone',label: 'Phone',type: 'tel',required: false,placeholder: 'Enter your phone number (optional)'},{name: 'comp',label: 'Comp',type: 'text',required: false,placeholder: 'Enter your comp name (optional)'},{name: 'service',label: 'Service Interest',type: 'select',required: true,options: [ 'AI & Analytics','Cybersecurity','Cloud & DevOps','IoT & Edge Computing','Digital Transformation','Mobile Development','Micro SaaS Solutions','Other' ]}; ]; export default function Contact($1) { const [formData,setFormData] = useState({ firstName: ",lastName: ",email: ",phone: ",comp: ",service: ",message: " };); const [isSubmitting,setIsSubmitting] = useState(false); const [submitSuccess,setSubmitSuccess] = useState(false); const handleInputChange = (props) => { const { name,value }; = e.target; setFormData(prev => ({...prev,[name]: value}))}; const handleSubmit = async (e) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setIsSubmitting(false); setSubmitSuccess(true); setTimeout(() => { setSubmitSuccess(false);'; setFormData({ firstName: ",lastName: ",email: ",phone: ",comp: ",service: ",message: " })},3000)}; return ( <div className="min-h-screen bg-white"> {} <section className="relative pt-32 pb-20 overflow-hidden"> <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div> <div className="absolute inset-0"> <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div> <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div> </div> <div className="container-responsive relative z-10"> <motion.div initial={{ opacity: 0,y: 30 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto" > <motion.div initial={{ opacity: 0,scale: 0.8 }} animate={{ opacity: 1,scale: 1 }} transition={{ duration: 0.8,delay: 0.2 }} className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8" > <MessageSquare className="w-10 h-10 text-white" /> </motion.div> <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> Get in <span className="text-gradient block">Touch</span> </h1> <pclassName="text-xl text-zion-slate-light leading-relaxed mb-8"> Ready to transform your business with cutting-edge technology?';'; Let's discuss your project and explore how we can help you achieve your goals. </p> </motion.div> </div> </section> {} <section className="py-20 bg-zion-blue-dark/50"> <div className="container-responsive"> <motion.div initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16" > <h2 className="text-4xl font-bold text-white mb-4">Contact Information</h2> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> Multiple ways to reach us. Choose the method that works best for you. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {contactMethods.map((method,index) => ( <motion.div key={method.title} initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group" > <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}> <method .icon className="w-8 h-8 text-white" /> </div> <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3> <p className="text-zion-cyan font-semibold mb-1">{method.value}</p> <p className="text-zion-slate-light text-sm mb-4">{method.description}</p> {method.action && ( <a'; href={method.action} target={method.action.startsWith('http') ? '_blank' : null} rel={method.action.startsWith('http') ? 'noopener noreferrer' : null} className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300" > <span className="text-sm font-medium">Contact</span> <Send className="w-4 h-4" /> </a> )} </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="container-responsive"> <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> {} <motion.div initial={{ opacity: 0,x: -30 }} whileInView={{ opacity: 1,x: 0 }} transition={{ duration: 0.8 }} > <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2> <pclassName="text-zion-slate-light mb-8 leading-relaxed">'; Fill out the form below and we'll get back to you within 24 hours.';'; We're excited to learn about your project and discuss how we can help. </p> {submitSuccess ? ( <motion.div initial={{ opacity: 0,scale: 0.9 }} animate={{ opacity: 1,scale: 1 }} className="bg-green-500/20 border border-green-500/40 rounded-2xl p-8 text-center" > <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" /> <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3> <pclassName="text-green-200">'; Thank you for reaching out. We'll get back to you within 24 hours. </p> </motion.div> ) : ( <form onSubmit={handleSubmit} className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {contactFormFields.slice(0,2).map(field => ( <div key={field.name}> <label htmlFor={field.name} className="block text-white font-medium mb-2"> {field.label} {field.required && <span className="text-red-400">*</span>} </label> <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300" /> </div> ))} </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {contactFormFields.slice(2,4).map(field => ( <div key={field.name}> <label htmlFor={field.name} className="block text-white font-medium mb-2"> {field.label} {field.required && <span className="text-red-400">*</span>} </label> <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300" /> </div> ))} </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {contactFormFields.slice(4,6).map(field => ( <div key={field.name}> <label htmlFor={field.name} className="block text-white font-medium mb-2"> {field.label} {field.required && <span className="text-red-400">*</span>} </label>'; {field.type === 'select' ? ( <select id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white focus:border-zion-cyan focus:outline-none transition-colors duration-300" > <option value=">Select a service</option> {field.options.map(option => ( <option key={option} value={option}>{option}</option> ))} </select> ) : ( <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required} placeholder={field.placeholder} className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300" /> )} </div> ))} </div> <div> <label htmlFor="message" className="block text-white font-medium mb-2"> Message <span className="text-red-400">*</span> </label> <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell us about your project,goals,and how we can help..." className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors duration-300 resize-none" /> </div> <buttontype="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"; >'; {isSubmitting ? 'Sending Message...' : 'Send Message'} </button> </form> )} </motion.div> {} <motion.div initial={{ opacity: 0,x: 30 }} whileInView={{ opacity: 1,x: 0 }} transition={{ duration: 0.8 }} className="space-y-8" > <div> <h3 className="text-2xl font-bold text-white mb-4">About Zion Tech Group</h3> <p className="text-zion-slate-light leading-relaxed mb-6"> We are a leading technology company specializing in AI,cybersecurity,cloud solutions,and digital transformation. Our team of experts is dedicated to helping businesses leverage cutting-edge technology to achieve their goals. </p> <div className="flex items-center gap-3 text-zion-cyan"> <Building className="w-5 h-5" /> <span className="font-medium">Established 2020</span> </div> </div> <div> <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3> <div className="flex gap-4"> {socialLinks.map(social => ( <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-xl text-zion-slate-light ${social.color} hover:border-zion-cyan/40 transition-all duration-300`} title={social.name} > <social .icon className="w-5 h-5" /> </a> ))} </div> </div> <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-6"> <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3> <ul className="space-y-3 text-zion-slate-light"> <li className="flex items-center gap-3"> <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" /> <span>Expert team with 20+ years combined experience</span> </li> <li className="flex items-center gap-3"> <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" /> <span>Proven track record of successful projects</span> </li> <li className="flex items-center gap-3"> <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" /> <span>Cutting-edge technology solutions</span> </li> <li className="flex items-center gap-3"> <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" /> <span>24/7 support and maintenance</span> </li> </ul> </div> </motion.div> </div> </div> </section> {} <section className="py-20 bg-zion-blue-dark/50"> <div className="container-responsive"> <motion.div initial={{ opacity: 0,y: 30 }} whileInView={{ opacity: 1,y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16" > <h2 className="text-4xl font-bold text-white mb-4">Visit Our Office</h2> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> Located in the heart of Middletown,Delaware,our office is easily accessible and ready to welcome you for in-person meetings and consultations. </p> </motion.div> <div className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 text-center"> <div className="w-full h-64 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6"> <div className="text-center"> <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" /> <p className="text-zion-slate-light">Interactive Map Coming Soon</p> </div> </div> <div className="text-center"> <h3 className="text-xl font-bold text-white mb-2">Zion Tech Group</h3> <p className="text-zion-cyan">364 E Main St STE 1008</p> <p className="text-zion-slate-light">Middletown,DE 19709</p> <p className="text-zion-slate-light text-sm mt-2">United States</p> </div> </div> </div> </section> </div> )} </motion> </textarea> </motion> </motion> </motion>;';';
