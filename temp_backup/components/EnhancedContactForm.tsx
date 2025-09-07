
;
 setErrors (newErrors)}
setIsSubmitting (true)const handleInputBlur = (//Validate individual field on blur if (formData[name] && errors[name]) {) => {
  return $3;}
}> <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center"  /> <CheckCircle className="w-10 h-10 text-green-400" /> </div> <h3 className="text-2xl font-bold text-white mb-4"  />Message Sent Successfully!</h3> <p className="text-white/70 mb-6"  /> Thank you for reaching out. We'll get back to you within 24 hours. </p> <button;
}return (<div /> <h3 className="text-2xl font-bold text-white mb-6"  />Get in Touch</h3> <p className="text-white/70 leading-relaxed mb-8"  /> Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth. </p> </div> <div className="space-y-6"  /> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center"  /> <Mail className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Email</h4> <p className="text-white/70"  />contact@ziontechgroup && ziontechgroup.com</p> </div> </div> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center"  /> <Phone className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Phone</h4> <p className="text-white/70"  />+1 (555) 123-4567</p> </div> </div> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center"  /> <MapPin className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Location</h4> <p className="text-white/70"  />San Francisco, CA</p> </div> </div> </div> </div> <div /> <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2"  /> Full Name * </label> <input /> {errors && errors.name && (<motion && motion.p </motion && motion.p />)}</div> <div /> <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2"  /> Email Address * </label> <input /> {errors && errors.email && (<motion && motion.p </motion && motion.p />)}</div> </div> <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"  /> <div /> <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2"  /> Company </label> <input /> </div> <div /> <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2"  /> Service Interest </label> <select </option />) )}</select> </div> </div> <div /> <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2"  /> Message * </label> <textareaerrors && errors.message ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10';
}text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`;
}placeholder="Tell us about your project and requirements..." /> {errors && errors.message && (<motion&& motion.p initial= {opacity: 0, y: -10;}
}animate= {import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Send,CheckCircle,AlertCircle,User,Mail,Phone,Building,MapPin,MessageSquare,Clock,Calendar,Globe,} from 'lucide-react';
import Link from 'next/link';
const EnhancedContactForm: React.FC = () = /> {const [formData, setFormData] = useState({name: '',
  email: '',company: '',
  phone: '',service: '',
  budget: '',timeline: '',}
  message: '',})const [errors, setErrors] = useState<Record<string, string />>({})const [isSubmitting, setIsSubmitting] = useState(false)const [isSubmitted, setIsSubmitted] = useState(false)const [selectedService, setSelectedService]  = useState('')const services = [;
    {id: 'ai-development'}
  name: 'AI Development',icon: Globe,color: 'from-purple-500 to-pink-500',},{id: 'cloud-architecture'}
  name: 'Cloud Architecture',icon: Globe,color: 'from-blue-500 to-cyan-500',},{id: 'web-development'}
  name: 'Web Development',icon: Globe,color: 'from-green-500 to-emerald-500',},{id: 'cybersecurity'}
  name: 'Cybersecurity',icon: Globe,color: 'from-red-500 to-orange-500',},{id: 'iot-platforms'}
  name: 'IoT Platforms',icon: Globe,color: 'from-indigo-500 to-purple-500',},{id: 'digital-transformation'}
  name: 'Digital Transformation',icon: Globe,color: 'from-yellow-500 to-orange-500',},{id: 'custom'}
  name: 'Custom Solution',icon: Globe,color: 'from-gray-500 to-slate-500',},];
  const validateForm = (): boolean => {const newErrors: FormErrors = {}
setIsSubmitting (true)const handleInputBlur = (//Validate individual field on blur if (formData[name] && errors[name]) ,) => {
  return $3;}
}
}> <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center"  /> <CheckCircle className="w-10 h-10 text-green-400" /> </div> <h3 className="text-2xl font-bold text-white mb-4"  />Message Sent Successfully!</h3> <p className="text-white/70 mb-6"  /> Thank you for reaching out. We'll get back to you within 24 hours. </p> <button;
}return (<div /> <h3 className="text-2xl font-bold text-white mb-6"  />Get in Touch</h3> <p className="text-white/70 leading-relaxed mb-8"  /> Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth. </p> </div> <div className="space-y-6"  /> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center"  /> <Mail className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Email</h4> <p className="text-white/70"  />contact@ziontechgroup && ziontechgroup.com</p> </div> </div> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center"  /> <Phone className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Phone</h4> <p className="text-white/70"  />+1 (555) 123-4567</p> </div> </div> <div className="flex items-start space-x-4"  /> <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center"  /> <MapPin className="w-6 h-6 text-white" /> </div> <div /> <h4 className="text-lg font-semibold text-white mb-1"  />Location</h4> <p className="text-white/70"  />San Francisco, CA</p> </div> </div> </div> </div> <div /> <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2"  /> Full Name * </label> <input /> {errors && errors.name && (<motion && motion.p </motion && motion.p />)}</div> <div /> <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2"  /> Email Address * </label> <input /> {errors && errors.email && (<motion && motion.p </motion && motion.p />)}</div> </div> <div className="grid grid-cols-1 sm: grid-cols-2 gap-6"  /> <div /> <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2"  /> Company </label> <input /> </div> <div /> <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2"  /> Service Interest </label> <select </option />) ,
}</select> </div> </div> <div /> <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2"  /> Message * </label> <textareaerrors && errors.message ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10';
}text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`;
}placeholder="Tell us about your project and requirements..." /> {errors && errors.message && (<motion&& motion.p initial= {opacity: 0, y: -10;}
}animate = {import React, {;}
  useState } from 'react';
import { motion  } from 'framer-motion';
import { Send,CheckCircle,AlertCircle,User,Mail,Phone,Building,MapPin,MessageSquare,Clock,Calendar,Globe,} from 'lucide-react';
import Link from 'next/link';

const EnhancedContactForm: React.FC = () = /> {const [formData, setFormData] =;}
  useState({name: '',
  email: '',company: '',
  phone: '',service: '',
  budget: '',timeline: '',}
  message: '',});
  const [errors, setErrors] = useState<Record<string, string />>({})const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService]  = useState('';
  const services = [
  {id: 'ai-development'}
  name: 'AI Development',icon: Globe,color: 'from-purple-500 to-pink-500',},{id: 'cloud-architecture'}
  name: 'Cloud Architecture',icon: Globe,color: 'from-blue-500 to-cyan-500',},{id: 'web-development'}
  name: 'Web Development',icon: Globe,color: 'from-green-500 to-emerald-500',},{id: 'cybersecurity'}
  name: 'Cybersecurity',icon: Globe,color: 'from-red-500 to-orange-500',},{id: 'iot-platforms'}
  name: 'IoT Platforms',icon: Globe,color: 'from-indigo-500 to-purple-500',},{id: 'digital-transformation'}
  name: 'Digital Transformation',icon: Globe,color: 'from-yellow-500 to-orange-500',},{id: 'custom'}
  name: 'Custom Solution',icon: Globe,color: 'from-gray-500 to-slate-500',},];

const validateForm = (): boolean => ;
  const newErrors: FormErrors = ,
}
    if (!formData.name.trim()) {newErrors.name = 'Name is required';}
    } else if (formData.name.trim().length < 2) {newErrors.name = 'Name must be at least 2 characters long';}
    }if (!formData.email.trim()) {newErrors.email = 'Email is required';}
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {newErrors.email = 'Please enter a valid email address';}
    }
    if (!formData.message.trim()) {newErrors.message = 'Message is required';}
    } else if (formData.message.trim().length < 10) {newErrors.message = 'Message must be at least 10 characters long';}
    } else if (formData.message.trim().length > 1000) {newErrors.message = 'Message must be less than 1000 characters';}
    setErrors(newErrors)return Object && Object.keys(newErrors).length === 0;}
}const handleSubmit = async (e: React && React.FormEvent) => {e && e.preventDefault()if (!validateForm()) {showError('Validation ErrorPlease fix the errors in the form')return;}
    }
    setIsSubmitting(true)})setErrors({})} catch (error) {console && console.error('Error submitting form:', error)showError('Submission FailedThere was an error sending your message. Please try again.')} finally {setIsSubmitting(false)}// Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 2000))setIsSubmitting(false)setIsSubmitted(true)// Reset form after successful submission;
    setTimeout(() => {setIsSubmitted(false)setFormData({name: '',
  email: '',company: '',
  phone: '',service: '',
  budget: '',timeline: '',}
  message: '',})setSelectedService('')}, 5000)}const handleChange = (const { name, value ) => {
  return $3;}
} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))// Clear error when user starts typing;
    if (errors[name]) {setErrors(prev => ({ ...prev, [name]: '' }))}
  }const containerVariants = {hidden: { opacity: 0 },visible: {opacity: 1,transition: {staggerChildren: 0.1,delayChildren: 0.2,},},}const itemVariants = {hidden: { opacity: 0, y: 30 },visible: {opacity: 1,y: 0,transition: { duration: 0.6 },},}if (isSubmitted) {return (<motion&& motion.div;}
        initial={ opacity: 0, scale: 0 && 0.9 }
        animate={ opacity: 1, scale: 1 }className="text-center py-12" />;
}
> <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center" > <CheckCircle className="w-10 h-10 text-green-400" /> </div> <h3 className="text-2xl font-bold text-white mb-4" >Message Sent Successfully!</h3> <p className="text-white/70 mb-6" > Thank you for reaching out. We'll get back to you within 24 hours. </p> <button 
}return (<div> <h3 className="text-2xl font-bold text-white mb-6" >Get in Touch</h3> <p className="text-white/70 leading-relaxed mb-8" > Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth. </p> </div> <div className="space-y-6" > <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center" > <Mail className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Email</h4> <p className="text-white/70" >contact@ziontechgroup.com</p> </div> </div> <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center" > <Phone className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Phone</h4> <p className="text-white/70" >+1 (555) 123-4567</p> </div> </div> <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center" > <MapPin className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Location</h4> <p className="text-white/70" >San Francisco, CA</p> </div> </div> </div> </div> <div> <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2" > Full Name * </label> <input /> {
  errors.name && (<motion.p </motion.p>)
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2" > Email Address * </label> <input /> {
  errors.email && (<motion.p </motion.p>)
}</div> </div> <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" > <div> <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2" > Company </label> <input /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2" > Service Interest </label> <select </option>) )
}</select> </div> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2" > Message * </label> <textarea errors.message ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
}text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`
}placeholder="Tell us about your project and requirements..." /> {
  errors.message && (<motion.p initial= {
  {
  opacity: 0, y: -10
}animate= {
  {
  opacity: 1, y: 0
}className="mt-2 text-sm text-red-400 flex items-center gap-2" > </motion.p>)
}</div> <button isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'
}flex items-center justify-center gap-3`
}> {
  isSubmitting ? (<> <Loader2 className="w-5 h-5 animate-spin" /> Sending Message... </>) : (<> <Send className="w-5 h-5" /> Send Message </>) 
}</button> </form> </div> </div> </section>) 
}

const containerVariants = {hidden: { opacity: 0}
},visible: {opacity: 1,transition: {staggerChildren: 0.1,delayChildren: 0.2,},},}
;
  const itemVariants = {hidden: { opacity: 0, y: 30,}
},visible: {opacity: 1,y: 0,transition: {duration: 0.6}
},},}if (isSubmitted) ;
  return (<motion&& motion.div;
        initial={ opacity: 0, scale: 0 && 0.9 ,}
}
        animate={ opacity: 1, scale: 1 ,}
}className="text-center py-12" />;
        <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center" />;
          <CheckCircle className="w-10 h-10 text-green-400" />;
        </div>;
        <h3 className="text-2xl font-bold text-white mb-4" />Message Sent Successfully!</h3>;
        <p className="text-white/70 mb-6" />;
          Thank you for reaching out. We'll get back to you within 24 hours.;
        </p>;
        <button;
          onClick={() = /> setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">

          Send Another Message;
        </button>;
      </div>;className="py-20 bg-gradient-to-br from-green-50 to-emerald-50";
      >;
      </div>;className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">

        <div className="container mx-auto px-4 text-center" />;
          <div className="max-w-2xl mx-auto" />;
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8" />;
              <CheckCircle className="w-12 h-12 text-white" />;
            </div>;
            <h2 className="text-4xl font-bold text-gray-900 mb-4" />;
              Thank You for Reaching Out!;
            </h2>;
            <p className="text-xl text-gray-600 mb-8" />;
              We&apos;ve received your message and will get back to you within;
              24 hours. Our team is excited to discuss your project and explore;
              how we can help bring your vision to life.'';
            </p>;
            <div className="bg-white rounded-2xl p-6 shadow-lg" />;
              <h3 className="text-lg font-semibold text-gray-900 mb-4" />;
                What happens next?;
              </h3>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm text-gray-600" />;
                <div className="flex items-center gap-2" />;
                  <Clock className="w-4 h-4 text-green-500" />;
                  <span />Response within 24h</span>;
                </div>;
                <div className="flex items-center gap-2" />;
                  <MessageSquare className="w-4 h-4 text-green-500" />;
                  <span />Schedule consultation</span>;
                </div>;
                <div className="flex items-center gap-2" />;
                  <Calendar className="w-4 h-4 text-green-500" />;
                  <span />Project planning</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </motion.div>;
    )}
  return (<div className="max-w-4xl mx-auto" />;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" />;
        {/* Contact Information */}
                  } text-white placeholder-white/40 focus: outline-none focus:ring-2 focus:ring-cyan-400/20,
}
                  placeholder="Enter your full name";
                />;
                {errors && errors.name && (<motion&& motion.p;}
                    initial={ opacity: 0, y: -10 }
                    animate={ opacity: 1, y: 0 }
                    initial={ opacity: 0, y: -10 ,}
}
                    animate={ opacity: 1, y: 0 ,}
}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2" />;
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.name}
                  </motion && motion.p>;
                )}
                  Email Address *;
                ">;
                  Email Address *;
                </label>;
                <input;
                  type="email";
                  id="email";
                  name="email";
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  onBlur={() = /> handleInputBlur('email')}
                  } text-white placeholder-white/40 focus: outline-none focus:ring-2 focus:ring-cyan-400/20,
}
                  placeholder="Enter your email address";
                />;
                {errors && errors.email && (<motion&& motion.p;}
                    initial={ opacity: 0, y: -10 }
                    animate={ opacity: 1, y: 0 }
                    initial={ opacity: 0, y: -10 ,}
}
                    animate={ opacity: 1, y: 0 ,}
}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2" />;
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.email}
                  </motion && motion.p>;
                )}
                  Company;
                ">;
                  Company;
                </label>;
                <input;
                  type="text";
                  id="company";
                  name="company";
                  value={formData && formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300";
                  placeholder="Enter your company name";
                  Service Interest;
                " />;
                  Service Interest;
                </label>;
                <select;
                  id="service";
                  name="service";
                  value={formData && formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300" />;
                  <option value="" />Select a service</option>;
                  {services && services.map((service) => (<option key={service} value={service} className="bg-slate-800 text-white" />;
                      {service}
                    </option>;
                  ))}
                Message *;
              ">;
                Message *;
              </label>;
              <textarea;
                id="message";
                name="message";
                rows={5}
                value={formData && formData.message}
                onChange={handleInputChange}
                onBlur={() = /> handleInputBlur('message')}
                } text-white placeholder-white/40 focus: outline-none focus:ring-2 focus:ring-cyan-400/20,
}
                placeholder="Tell us about your project and requirements...";
              />;
              {errors && errors.message && (<motion&& motion.p;}
                  initial={ opacity: 0, y: -10 }
                  animate={ opacity: 1, y: 0 }
                  initial={ opacity: 0, y: -10 ,}
}
                  animate={ opacity: 1, y: 0 ,}
}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2" />;
                  <AlertCircle className="w-4 h-4" />;
                  {errors && errors.message}
                </motion && motion.p>;
              )}
            <button;
              type="submit";
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${isSubmitting;
                  ? 'bg-gray-600 cursor-not-allowed';}
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105';}
              } flex items-center justify-center gap-3`} />;
              } flex items-center justify-center gap-3`}>

              {isSubmitting ? (<>;
                  <Loader2 className="w-5 h-5 animate-spin" />;
                  Sending Message...;
                </>;
              ) : (<>;
                  <Send className="w-5 h-5" />;
                  Send Message;}
                </>;}
              )}
}import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2  } from 'lucide-react';
import { FormData, FormErrors  } from '../types';
import { useToast  } from './ui/Toast';

const EnhancedContactForm: React.FC;<section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50" />;
      <div className="container mx-auto px-4" />;
        <motion.div;
          variants={containerVariants}
          initial="hidden";
          whileInView="visible";
          viewport={ once: true }
          viewport={once: true }
}
         />;
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16" />;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-medium mb-6" />;
              <MessageSquare className="w-4 h-4" />;
              Get In Touch;
            </div>;
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" />;
              Ready to Start Your;
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />;
                Project?;
              </span>;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" />;
              Let&apos;s discuss your technology needs and explore how our;
              expertise can drive innovation and growth for your business.'';
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 max-w-7xl mx-auto" />;
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8" />;
              <div />;
                <h3 className="text-2xl font-bold text-gray-900 mb-6" />;
                  Let&apos;s Connect;
                </h3>;
                '';
                <p className="text-gray-600 mb-8 leading-relaxed" />;
                  Our team of technology experts is ready to help you navigate;
                  the digital landscape and implement solutions that drive real;
                  business value.;
                </p>;
              </div>;
              {/* Contact Details */}
              <div className="space-y-6" />;
                <div className="flex items-start space-x-4" />;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0" />;
                    <Phone className="w-6 h-6 text-white" />;
                  </div>;
                  <div />;
                    <h4 className="font-semibold text-gray-900" />Phone</h4>;
                    <a;
                      href="tel: +13024640950";
                      className="text-blue-600 hover:text-blue-700 text-lg";
                     />;
                      className="text-blue-600 hover:text-blue-700 text-lg">

                      +1 (302) 464-0950;
                    </a>;
                    <p className="text-gray-600 text-sm" />;
                      Available Monday - Friday, 9 AM - 6 PM EST;
                    </p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-4" />;
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0" />;
                    <Mail className="w-6 h-6 text-white" />;
                  </div>;
                  <div />;
                    <h4 className="font-semibold text-gray-900" />Email</h4>;
                    <a;
                      href="mailto: kleber@ziontechgroup.com";
                      className="text-blue-600 hover:text-blue-700 text-lg";
                     />;
                      className="text-blue-600 hover:text-blue-700 text-lg">

                      kleber@ziontechgroup.com;
                    </a>;
                    <p className="text-gray-600 text-sm" />;
                      We typically respond within 2-4 hours;
                    </p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-4" />;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0" />;
                    <MapPin className="w-6 h-6 text-white" />;
                  </div>;
                  <div />;
                    <h4 className="font-semibold text-gray-900" />Office</h4>;
                    <p className="text-gray-900 text-lg" />;
                      364 E Main St STE 1008;
                    </p>;
                    <p className="text-gray-600 text-sm" />;
                      Middletown, DE 19709, United States;
                    </p>;
                  </div>;
                </div>;
              </div>;
              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white" />;
                <h4 className="text-lg font-semibold mb-4" />;
                  Why Choose Zion Tech Group?;
                </h4>;
                <div className="grid grid-cols-2 gap-4 text-sm" />;
                  <div />;
                    <div className="text-2xl font-bold" />500+</div>;
                    <div className="text-blue-100" />Projects Delivered</div>;
                  </div>;
                  <div />;
                    <div className="text-2xl font-bold" />98%</div>;
                    <div className="text-blue-100" />Client Satisfaction</div>;
                  </div>;
                  <div />;
                    <div className="text-2xl font-bold" />15+</div>;
                    <div className="text-blue-100" />Years Experience</div>;
                  </div>;
                  <div />;
                    <div className="text-2xl font-bold" />24/7</div>;
                    <div className="text-blue-100" />Support Available</div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            {/* Contact Form */}
            <motion.div variants={itemVariants} />;
              <form;
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8";
               />;
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

                <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6" />;
                  {/* Name */}
                  <div />;
                    <label;
                      htmlFor="name";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Full Name *;
                    </label>;
                    <div className="relative" />;
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="text";
                        id="name";
                        name="name";
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300';}
                        }`}
                        placeholder="Enter your full name";
                      />;
                    </div>;
                    {errors.name && (<div className="flex items-center gap-2 mt-2 text-red-600 text-sm" />;}
                        <AlertCircle className="w-4 h-4" />;}
                        {errors.name}
                      </div>;
                    )}
                  </div>;
                  {/* Email */}
                  <div />;
                    <label;
                      htmlFor="email";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Email Address *;
                    </label>;
                    <div className="relative" />;
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="email";
                        id="email";
                        name="email";
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300';}
                        }`}
                        placeholder="Enter your email";
                      />;
                    </div>;
                    {errors.email && (<div className="flex items-center gap-2 mt-2 text-red-600 text-sm" />;}
                        <AlertCircle className="w-4 h-4" />;}
                        {errors.email}
                      </div>;
                    )}
                  </div>;
                  {/* Company */}
                  <div />;
                    <label;
                      htmlFor="company";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Company;
                    </label>;
                    <div className="relative" />;
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="text";
                        id="company";
                        name="company";
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300";
                        placeholder="Enter company name";
                      />;
                    </div>;
                  </div>;
                  {/* Phone */}
                  <div />;
                    <label;
                      htmlFor="phone";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Phone Number;
                    </label>;
                    <div className="relative" />;
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="tel";
                        id="phone";
                        name="phone";
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300";
                        placeholder="Enter phone number";
                      />;
                    </div>;
                  </div>;
                </div>;
                {/* Service Selection */}
                <div className="mb-6" />;
                  <label className="block text-sm font-medium text-gray-700 mb-3" />;
                    Service of Interest *;
                  </label>;
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3" />;
                    {services.map(service => (<button;}
                        key={service.id}
                        type="button";
                        onClick={() = /> {setFormData(prev => ({...prev,service: service.id,}))setSelectedService(service.id)if (errors.service) {setErrors(prev => ({ ...prev, service: '' }))}
                        }
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${selectedService === service.id;
                            ? 'border-blue-500 bg-blue-50 text-blue-700';}
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';}
                        }`}
                      >;
                        ,
}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${selectedService === service.id;
                            ? 'border-blue-500 bg-blue-50 text-blue-700';}
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';}
                        }`}>

                        <div className="text-sm font-medium" />;
                          {service.name}
                        </div>;
                      </button>;
                    ))}
                  </div>;
                  {errors.service && (<div className="flex items-center gap-2 mt-2 text-red-600 text-sm" />;}
                      <AlertCircle className="w-4 h-4" />;}
                      {errors.service}
                    </div>;
                  )}
                </div>;
                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6" />;
                  <div />;
                    <label;
                      htmlFor="budget";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Budget Range;
                    </label>;
                    <select;
                      id="budget";
                      name="budget";
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300";
                     />;
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">

                      <option value="" />Select budget range</option>;
                      {budgetRanges.map(budget => (<option key={budget.value} value={budget.value} />;
                          {budget.label}
                        </option>;
                      ))}
                    </select>;
                  </div>;
                  <div />;
                    <label;
                      htmlFor="timeline";
                      className="block text-sm font-medium text-gray-700 mb-2";
                     />;
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Project Timeline;
                    </label>;
                    <select;
                      id="timeline";
                      name="timeline";
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300";
                     />;
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300">

                      <option value="" />Select timeline</option>;
                      {timelineOptions.map(timeline => (<option key={timeline.value} value={timeline.value} />;
                          {timeline.label}
                        </option>;
                      ))}
                    </select>;
                  </div>;
                </div>;
                {/* Message */}
                <div className="mb-8" />;
                  <label;
                    htmlFor="message";
                    className="block text-sm font-medium text-gray-700 mb-2";
                   />;
                    className="block text-sm font-medium text-gray-700 mb-2">

                    Project Details *;
                  </label>;
                  <textarea;
                    id="message";
                    name="message";
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300';}
                    }`}
                    placeholder="Tell us about your project, requirements, timeline, and budget...";
                  />;
                  {errors.message && (<div className="flex items-center gap-2 mt-2 text-red-600 text-sm" />;}
                      <AlertCircle className="w-4 h-4" />;}
                      {errors.message}
                    </div>;
                  )}
                </div>;
                {/* Submit Button */}
                <button;
                  type="submit";
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
                 />;
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">

                  {isSubmitting ? (<div className="flex items-center justify-center gap-3" />;
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />;
                      Sending Message...;
                    </div>;
                  ) : (<div className="flex items-center justify-center gap-3" />;
                      <Send className="w-5 h-5" />;
                      Send Message;}
                    </div>;}
                  )}
                </button>;
                <p className="text-sm text-gray-500 text-center mt-4" />;
                  By submitting this form, you agree to our{' '}
                  <Link;
                    href="/privacy";
                    className="text-blue-600 hover: text-blue-700 underline";
                   />;
                    className="text-blue-600 hover: text-blue-700 underline">

                    Privacy Policy;
                  </Link>;
                </p>;
              </form>;
            </motion.div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  )}export default EnhancedContactForm;
  )}

export default EnhancedContactForm;

