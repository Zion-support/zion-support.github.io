import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
const Contact: React.FC = () => {,
  const [formData, setFormData] = useState({
    name: '','
    email: '','
    company: '','
    phone: '','
    message: '''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {,
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e: React.FormEvent) => {,
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">"
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">"
            Ready to transform your business with cutting-edge technology?
            Get in touch with our experts today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>"
            <form onSubmit={handleSubmit} className="space-y-6">"
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">"
                  Full Name
                </label>
                <input
                  type="text""
                  id="name""
                  name="name""
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"",
                  placeholder="Your full name""
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">"
                  Email Address
                </label>
                <input
                  type="email""
                  id="email""
                  name="email""
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"",
                  placeholder="your.email@example.com""
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">"
                  Company
                </label>
                <input
                  type="text""
                  id="company""
                  name="company""
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"",
                  placeholder="Your company name""
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">"
                  Message
                </label>
                <textarea
                  id="message""
                  name="message""
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"",
                  placeholder="Tell us about your project or requirements...""
                />
              </div>
              <Button type="submit" variant="primary" size="large" className="w-full">"
                Send Message
              </Button>
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>"
            <div className="space-y-8">"
              <Card
                title="Office Address""
                description="364 E Main St STE 1008\nMiddletown, DE 19709\nUnited States""
              />
              <Card
                title="Phone""
                description="+1-302-464-0950""
              />
              <Card
                title="Email""
                description="kleber@ziontechgroup.com""
              />
              <Card
                title="Business Hours""
                description="Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed""
              />
            </div>
            <div className="mt-8">"
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>"
              <div className="flex space-x-4">"
                <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">"
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>"
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">"
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>"
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">"
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">"
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>"
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
import { useState } from 'react',;
import { Header } from '@/components/Header',;
import { SEO } from '@/components/SEO',;
import { GradientHeading } from '@/components/GradientHeading',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import { Card } from '@/components/ui/card',;
import { toast } from '@/components/ui/use-toast',;
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger',;
import {;
  Tooltip,;
  TooltipContent,;
  TooltipProvider,;
  TooltipTrigger} from '@/components/ui/tooltip',;
import z from 'zod',;
import { ChatAssistant } from '@/components/ChatAssistant',;
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
export default function Contact() {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    message: ''}),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?: string,;
    email?: string,;
    message?: string;
  }>({}),;
  const [isChatOpen, setIsChatOpen] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const handleChange = (;
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setFormData((prev) => ({ ...prev, [name]: value })),;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    logInfo('[ContactForm] handleSubmit triggered.'),;
    logInfo('[ContactForm] formData:', { data: formData }),;
    const schema = z.object({;
      name: z.string().min(2, 'Name must be at least 2 characters'),;
      email: z.string().email('Invalid email address'),;
      message: z.string().min(10, 'Message must be at least 10 characters')}),;
    const result = schema.safeParse(formData),;
    logInfo('[ContactForm] Zod validation result:', { data: result }),;
    if (!result.success) {;
      const fieldErrors: Record<string string> = {},;
      for (const err of result.error.errors) {;
        if (err.path[0]) {;
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors),;
      const validationErrorMsg = result.error.errors[0]?.message || 'Please check your form and try again',;
      logWarn('[ContactForm] Validation failed:', { data: { validationErrorMsg, fieldErrors: result.error.flatten().fieldErrors } }),;
      toast({;
        title: 'Form Validation Error',;
        description: validationErrorMsg,;
        variant: 'destructive'}),;
      return;
    }
;
    setErrors({}),;
    setIsSubmitting(true),;
    logInfo('[ContactForm] Starting form submission (fetch to /api/contact).'),;
    try {;
      fetch('/api/contact', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify(formData)});
        .then(async (res) => {;
          logInfo('[ContactForm] API response status:', { data: res.status }),;
          const responseBody = await res.text(), // Read as text first to avoid JSON parse error if not JSON;
          logInfo('[ContactForm] API response body:', { data: responseBody }),;
          // Note: setIsSubmitting(false) is called within then/catch of the promise.;
          // If fetch itself or .then/.catch structure has a synchronous error,;
          // the outer try/catch will handle it.;
          if (!res.ok) {;
            let errorData = { error: `Request failed with status ${res.status}` },;
            try {;
              errorData = JSON.parse(responseBody);
            } catch (parseError) {;
              logWarn('[ContactForm] Could not parse error response as JSON.', { data: parseError });
            }
            logErrorToProduction('[ContactForm] API error response:', { data: errorData }),;
            // This throw will be caught by the .catch block below;
            throw new Error(errorData.error || 'Failed to send message');
          }

          setIsSubmitting(false), // Moved here for success path
          logInfo('[ContactForm] Message submission successful.'),
          toast({
            title: 'Message Sent',
            description:
              "We've received your message and will get back to you soon."}),
          setSubmitted(true),
          setTimeout(() => setSubmitted(false), 2000),
          setFormData({ name: '', email: '', message: '' })
        })
        .catch((err) => {
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw)
          logErrorToProduction('[ContactForm] Fetch promise chain error:', { data: err }),
          setIsSubmitting(false),
          toast({
            title: 'Submission Error',
            description: err.message || 'An unexpected error occurred during submission.',
            variant: 'destructive'})
        })
    } catch (error) {
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity
      // if not caught by the promise's .catch (less common for typical fetch issues but good for safety)
      logErrorToProduction('[ContactForm] Synchronous error during fetch initiation or processing:', { data: error }),
      setIsSubmitting(false),
      toast({
        title: 'Critical Submission Error',
        description: error instanceof Error ? error.message : 'An unexpected critical error occurred.',
        variant: 'destructive'})
;
          setIsSubmitting(false), // Moved here for success path;
          logInfo('[ContactForm] Message submission successful.'),;
          toast({;
            title: 'Message Sent',;
            description:;
              "We've received your message and will get back to you soon."}),;
          setSubmitted(true),;
          setTimeout(() => setSubmitted(false), 2000),;
          setFormData({ name: '', email: '', message: '' });
        });
        .catch((err) => {;
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw);
          logErrorToProduction('[ContactForm] Fetch promise chain error:', { data: err }),;
          setIsSubmitting(false),;
          toast({;
            title: 'Submission Error',;
            description: err.message || 'An unexpected error occurred during submission.',;
            variant: 'destructive'});
        });
    } catch (error) {;
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity;
      // if not caught by the promise's .catch (less common for typical fetch issues but good for safety);
      logErrorToProduction('[ContactForm] Synchronous error during fetch initiation or processing:', { data: error }),;
      setIsSubmitting(false),;
      toast({;
        title: 'Critical Submission Error',;
        description: error instanceof Error ? error.message : 'An unexpected critical error occurred.',;
        variant: 'destructive'});
    }
  },;
  // Handle sending messages to the AI chat assistant;
  const handleSendMessage = async (message: string): Promise<void> => {;
    try {;
      const response = await fetch(;
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',;
        {;
          method: 'POST',;
          headers: {;
            'Content-Type': 'application/json'},;
          body: JSON.stringify({;
            messages: [{ role: 'user', content: message }]})}),;
      if (!response.ok) {;
        throw new Error('Failed to get response from AI assistant');
      }
;
      return Promise.resolve();
    } catch (error) {;
      logErrorToProduction('Error in AI chat', error),;
      toast({;
        title: 'Chat Error',;
        description:;
          'There was an error communicating with our AI assistant. Please try again.',;
        variant: 'destructive'}),;
      return Promise.resolve();
    }
  },

  const offices = [
    {
      name: 'Headquarters',
      address: '123 Tech Avenue, San Francisco, CA 94105',
      phone: '+1 302 464 0950',
      email: 'commercial@ziontechgroup.com'},
    {
      name: 'East Coast Office',
      address: '456 Innovation Street, New York, NY 10001',
      phone: '+1 302 464 0950',
      email: 'commercial@ziontechgroup.com'}],

  return (
    <>
      <SEO
        title="Contact Us - Get Help from Zion Tech Marketplace"
        description="Reach out to Zion Tech Marketplace for personalized support. Ask questions, get guidance, and connect with our tech-savvy team today. We’re eager to assist—drop us a line anytime."
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://app.ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Whether you have a question about our platform, pricing, or
                anything else, our team is ready to answer all your questions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>;
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="Tell us what you'd like to know..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>;
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}
                >;
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>;
                <AnimatePresence>;
                  {submitted && (;
                    <motion.div;
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-center space-y-1"
                    >
                      <h3 className="text-green-500 text-lg font-bold">
                        Message Sent!
                      </h3>
                      <p className="text-zion-slate-light">
                        Thanks for reaching out. Our team received your message
                        and will respond with helpful info as soon as possible
                        shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Our Offices
                    </h2>
                  </TooltipTrigger>
                  <TooltipContent>
                    We list several offices so you can connect with the team
                    closest to your region for faster support.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className="bg-zion-blue-dark border border-zion-blue-light p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {office.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-zion-cyan hover:underline"
                        >
                          {office.email}
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Locations"
                ></iframe>
              </div>

              <div className="mt-8">
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                  <div className="flex items-center">
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-zion-purple" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">
                        Live AI Support
                      </h3>
                      <p className="text-zion-slate-light">
                        Get instant answers to your questions
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need immediate assistance?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Our customer support team is available 24/7 to help you with any
              questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With AI
              </Button>
              <Button
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <a href="mailto:support@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zion-slate-light text-lg">
              Looking for more details about our platform? Visit our{' '}
              <Link href="/services" className="text-zion-cyan underline">
                services page
              </Link>{' '}
              or explore the{' '}
              <Link href="/blog" className="text-zion-cyan underline">
                Zion blog
              </Link>{' '}
              for additional insights.;
            </p>;
          </div>;
        </div>;
      </main>;
      {/* Chat Assistant Modal */}
      {isChatOpen && (;
        <ChatAssistant;
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{;
            id: 'ai-assistant',;
            name: 'AI Assistant';
            avatarUrl: 'https://placehold.co/64x64?text=AI';
            role: 'Support Bot'}}
          onSendMessage={handleSendMessage}
          starterQuestions={[;
            'How do I list a product?What services does Zion offer?Where can I view pricing plans?How do I create an account?Can I talk to a human representative?']}
        />;
      )}
    </>;
  );
}
;
