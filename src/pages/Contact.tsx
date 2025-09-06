<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useToast } from '../components/ui/use-toast';
import { useNotifications } from '../context/NotificationContext';
import { motion } from 'framer-motion';
=======
=======
<<<<<<< HEAD
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
<<<<<<< HEAD
  const { toast } = useToast();
  const { addNotification } = useNotifications();
  
=======
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
<<<<<<< HEAD
=======
import { useToast } from '../components/ui/use-toast';
import { useNotifications } from '../context/NotificationContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { addNotification } = useNotifications();
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
=======
    phone: '',
<<<<<<< HEAD
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
=======
    service: '',
<<<<<<< HEAD
    message: ''
  });
<<<<<<< HEAD

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      addNotification({
        id: Date.now().toString(),
        type: 'success',
        title: 'Contact Form Submitted',
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };
=======
import React from 'react';
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Ready to transform your business with cutting-edge technology? 
          Get in touch with our team of experts today.
        </p>
      </section>

      <section className="py-12">
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">364 E Main St STE 1008</p>
                    <p className="text-gray-600">Middletown, DE 19709</p>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-sm text-gray-500">Emergency support available 24/7</p>
=======
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 text-lg">
                      +1 302 464 0950
                    </a>
                    <p className="text-gray-600">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 text-lg">
                      kleber@ziontechgroup.com
                    </a>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 text-lg">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                    <p className="text-gray-600">United States</p>
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now for Immediate Support
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send us an Email
                  </a>
                </div>
=======
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>1000+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Custom solutions for every need</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>Proven track record of success</span>
                  </li>
                </ul>
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
<<<<<<< HEAD
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
=======
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
<<<<<<< HEAD
                    required
                    value={formData.name}
                    onChange={handleChange}
=======
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
                    Email Address *
=======
                    Email Address
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
<<<<<<< HEAD
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
=======
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  />
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
=======
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  />
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
=======
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="blockchain">Blockchain Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                  </label>
                  <textarea
                    id="message"
                    name="message"
<<<<<<< HEAD
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
=======
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
                </div>

                <button
                  type="submit"
<<<<<<< HEAD
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We respect your privacy and will never share your information.
              </p>
=======
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-600">
                We specialize in AI solutions, micro SaaS development, IT infrastructure, 
                cloud migration, cybersecurity, and custom software development for businesses of all sizes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, 
                while comprehensive enterprise solutions can take 3-6 months. We provide detailed timelines during consultation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer ongoing support?
              </h3>
              <p className="text-gray-600">
                Yes, we provide 24/7 support for all our solutions. Our support packages include maintenance, 
                updates, monitoring, and technical assistance to ensure your systems run smoothly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can you work with our existing technology stack?
              </h3>
              <p className="text-gray-600">
                Absolutely! We have experience integrating with a wide variety of existing systems and 
                technologies. We'll assess your current setup and recommend the best approach for integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Don't wait to transform your business. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
=======
    </div>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
export default Contact;
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
import { useState  } from 'react';
import { Header  } from '@/components/Header';
import { SEO  } from '@/components/SEO';
import { GradientHeading  } from '@/components/GradientHeading';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Card  } from '@/components/ui/card';
import { toast  } from '@/components/ui/use-toast';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger } from '@/components/ui/tooltip';
import z from 'zod';
import { ChatAssistant  } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '';
    email: '';
    message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string
  }>({}),
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = null;
            role: 'Support Bot'}}
          onSendMessage={handleSendMessage}
          starterQuestions={[
            'How do I list a product?What services does Zion offer?Where can I view pricing plans?How do I create an account?Can I talk to a human representative?']}
        />
      )}
    </>
  );

}) .catch ( (err) => {';
  //This catches errors from the fetch promise (network, res.ok is false,  or manual throw) logErrorToProduction ('[ContactForm] Fetch promise chain error:', {;
  data: err ;
});
setIsSubmitting (false);
toast ({';
  title: 'Submission Error';';
description: err.message || 'An unexpected error occurred during submission.';';
variant: 'destructive' ;
}) ;
}) ;
}catch (error) {';
  //This catches synchronous errors that might occur when initiating fetch or in its direct vicinity //if not caught by the promise's .catch (less common for typical fetch issues but good for safety) logErrorToProduction ('[ContactForm] Synchronous error during fetch initiation or processing:', {;
  data: error ;
});
setIsSubmitting (false);
toast ({';
  title: 'Critical Submission Error';';
description: error instanceof Error ? error.message : 'An unexpected critical error occurred.';';
variant: 'destructive' ;
}) ;

};
//Handle sending messages to the AI chat assistant const handleSendMessage = async (message: string) : Promise<void> => {;
  try {';
  const response = await fetch ('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',  {';
  method: 'POST', headers: {';
  'Content-Type': 'application/json' ;
};

};';
return (<> <SEO title="Contact Us - Get Help from Zion Tech Marketplace" description="Reach out to Zion Tech Marketplace for personalized support. Ask questions, get guidance, and connect with our tech-savvy team today. We’re eager to assist—drop us a line anytime." keywords="contact Zion, AI marketplace support, tech platform contact" canonical="https://app.ziontechgroup.com/contact" /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > <GradientHeading>Contact Us</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto" > Have questions or want to learn more? We'd love to hear from you. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24" > <div> <h2 className="text-3xl font-bold text-white mb-6" > Get in Touch </h2> <p className="text-zion-slate-light text-lg mb-8" > Whether you have a question about our platform, pricing, or anything else, our team is ready to answer all your questions. </p> <div> <label htmlFor="name" className="block text-white mb-2" > Your Name </label> <Input) ";
}</div> <div> <label htmlFor="email" className="block text-white mb-2" > Email Address </label> <Input {;
  errors.email ;
}</p>) ";
}</div> </div> <div> <label htmlFor="message" className="block text-white mb-2" > Message </label> <Textarea {;
  errors.message ;
}</p>) ;
}</div> <Button > {';
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button> <AnimatePresence> {";
  submitted && (<motion.div > <h3 className="text-green-500 text-lg font-bold" > Message Sent! </h3> <p className="text-zion-slate-light" > Thanks for reaching out. Our team received your message and will respond with helpful info as soon as possible shortly. </p> </motion.div>) ";
}</AnimatePresence> </form> </div> <div> <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <h2 className="text-3xl font-bold text-white mb-6" > Our Offices </h2> </TooltipTrigger> <TooltipContent> We list several offices so you can connect with the team closest to your region for faster support. </TooltipContent> </Tooltip> </TooltipProvider> <Card key= {;
  index ";
}className="bg-zion-blue-dark border border-zion-blue-light p-6" > </span> </div> <div className="flex items-center" > <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" /> <a </div> </div> </Card>) ) ";
}</div> <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden" > <iframe ></iframe> </div> <div className="mt-8" > <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6" > <div className="flex items-center" > <div className="bg-zion-purple/20 p-3 rounded-full mr-4" > <MessageSquare className="h-6 w-6 text-zion-purple" /> </div> <div> <h3 className="text-white text-lg font-bold" > Live AI Support </h3> <p className="text-zion-slate-light" > Get instant answers to your questions </p> </div> </div> <Button > Chat With Our AI Assistant </Button> </Card> </div> </div> </div> <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center" > <h2 className="text-3xl font-bold text-white mb-6" > Need immediate assistance? </h2> <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto" > Our customer support team is available 24/7 to help you with any questions. </p> <div className="flex flex-col sm:flex-row justify-center gap-4" > <Button > <MessageSquare className="mr-2 h-5 w-5" /> Chat With AI </Button> <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild > <a href="mailto:support@ziontechgroup.com" > <Mail className="mr-2 h-5 w-5" /> Email Support </Link> </Button> </div> </div> Zion blog </Link> {';
  ' ' ;
}for additional insights. </p> </div> </div> </main> {;
  /* Chat Assistant Modal */ ;
}{;
  isChatOpen && (<ChatAssistant isOpen= {;
  isChatOpen ;
}/>) ;
}</>) ;
}'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
