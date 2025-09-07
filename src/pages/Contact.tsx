import React, { useState } from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { GradientHeading } from '../components/GradientHeading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { toast } from '../components/ui/use-toast';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '../components/ui/tooltip';
import { ChatAssistant } from '../components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = async (message: string) => {
    // Simulate AI response
    return "Thank you for your message! Our support team will get back to you soon.";
  };

  return (
    <>
      <SEO
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our team for support, sales inquiries, or partnership opportunities."
        keywords="contact, support, sales, partnership, help"
        url="/contact"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <GradientHeading
            title="Get In Touch"
            subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            className="text-center mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-gray-300 mb-6">We'll get back to you within 24 hours.</p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-slate-700 border-slate-600 text-white ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-slate-700 border-slate-600 text-white ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`bg-slate-700 border-slate-600 text-white ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">contact@ziontechgroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">
                        123 Tech Street<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
"
                    <div className="space-y-6" />"
                      <div className="flex items-start" />"
                        <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Email</h3>"
                          <p className="text-gray-300" />kleber@ziontechgroup.com</p>"
                          <p className="text-gray-400 text-sm" />We'll respond within 24 hours</p>
                        </div>
                      </div>
"
                      <div className="flex items-start" />"
                        <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Phone</h3>"
                          <p className="text-gray-300" />+1 302 464 0950</p>"
                          <p className="text-gray-400 text-sm" />Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>
"
                      <div className="flex items-start" />"
                        <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />
                        <div />"
                          <h3 className="text-lg font-semibold text-white mb-1" />Office</h3>"
                          <p className="text-gray-300" />364 E Main St STE 1008<br />Middletown, DE 19709</p>"
                          <p className="text-gray-400 text-sm" />Visit us by appointment</p>
                        </div>
                      </div>
                    </div>
"
                    <Card className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30" />"
                      <h3 className="text-xl font-semibold text-white mb-3" />Free Consultation</h3>"
                      <p className="text-gray-300 mb-4" />
                        Book a free 30-minute consultation to discuss your project requirements;
and get expert advice on the best solutions for your business.
                      </p>"
                      <Button variant="outline" className="w-full" />
                        Schedule Consultation;
                      </Button>
                    </Card>
"
                    <Card className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30" />"
                      <h3 className="text-xl font-semibold text-white mb-3" />Emergency Support</h3>"
                      <p className="text-gray-300 mb-4" />
                        Need immediate assistance? Our emergency support team is available 24/7;
for critical issues and urgent technical problems.
                      </p>"
                      <div className="flex items-center text-cyan-400 font-semibold" />"
                        <Phone className="w-5 h-5 mr-2" />
                        +1 302 464 0950 (Emergency Line)
                      </div>
                    </Card>
                  </div>

                </div>
              </Card>

              <Card>
</Card>"
                <h2 className="text-3xl font-bold mb-6">Business Hours</h2>""
                <div className="space-y-2">"
</div>"
                  <div className="flex justify-between">"
</div>
                    <span>Monday - Friday</span>"
                    <span className="text-gray-300">9:00 AM - 6:00 PM</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>
                    <span>Saturday</span>"
                    <span className="text-gray-300">10:00 AM - 4:00 PM</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>
                    <span>Sunday</span>"
                    <span className="text-gray-300">Closed</span>"
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
                <p className="text-gray-300 mb-6">
                  Our AI assistant is available 24/7 to help answer your questions.
                </p>
                <Button
                  onClick={() => setIsChatOpen(true)}
                  variant="outline"
                  className="w-full"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with AI Assistant
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <ChatAssistant
            isOpen={isChatOpen}
            onClose={() => setIsChatOpen(false)}
            user={{ id: '1', name: 'Guest', role: 'Support Bot' }}
            onSendMessage={handleSendMessage}
            starterQuestions={[
              'How do I list a product?',
              'What services does Zion offer?',
              'Where can I view pricing plans?',
              'How do I create an account?',
              'Can I talk to a human representative?'
            ]}
          />
        )}
      </AnimatePresence>
    </>
  );
}
