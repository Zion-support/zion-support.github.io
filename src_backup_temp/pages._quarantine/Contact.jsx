<<<<<<< HEAD
import React from 'react';

const Contact: React.FC = () => {
=======

import React, {useState} from 'react';

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Contact</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
<<<<<<< HEAD
  );
};

export default Contact;
=======
    );
}
</motion>
</textarea>
</motion>
</motion>
</motion>;';';

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
