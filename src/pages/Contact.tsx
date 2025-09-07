import React, { useState } from 'react';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {,
    const { name, value } = e.target,
    setFormData((prev) => ({ ...prev, [name]: value })),
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  },

  const handleSubmit = (e: React.FormEvent) => {,
    e.preventDefault(),
    logInfo('[ContactForm] handleSubmit triggered.'),
    logInfo('[ContactForm] formData:', { data: formData }),

    const schema = z.object({
      name: z.string().min($2);
      email: z.string().email($2);
      message: z.string().min(10, 'Message must be at least 10 characters')}),

    const result = schema.safeParse($2);
    logInfo($2);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {},
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      }
      setErrors($2);
      const validationErrorMsg = $2;
      logWarn('[ContactForm] Validation failed:', { data: { validationErrorMsg, fieldErrors: result.error.flatten().fieldErrors } }),
      toast($2);
      return
    }

    setErrors($2);
    setIsSubmitting($2);
    logInfo('[ContactForm] Starting form submission (fetch to /api/contact).'),

    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)})
        .then(async (res) => {
          logInfo($2);
          const responseBody = await res.text(), // Read as text first to avoid JSON parse error if not JSON
          logInfo('[ContactForm] API response body:', { data: responseBody }),

          // Note: setIsSubmitting(false) is called within then/catch of the promise.,
          // If fetch itself or .then/.catch structure has a synchronous error,
          // the outer try/catch will handle it.

          if (!res.ok) {
            let errorData = $2;
            try {
              errorData = JSON.parse(responseBody)
            } catch (parseError) {
              logWarn('[ContactForm] Could not parse error response as JSON.', { data: parseError})
            }
            logErrorToProduction($2);
            // This throw will be caught by the .catch block below
            throw new Error(errorData.error || 'Failed to send message')
          }

          setIsSubmitting(false), // Moved here for success path
          logInfo($2);
          toast($2);
          setSubmitted($2);
          setTimeout(() => setSubmitted(false), 2000),
          setFormData({ name: '', email: '', message: '' })
        })
        .catch((err) => {
          // This catches errors from the fetch promise (network, res.ok is false, or manual throw)
          logErrorToProduction($2);
          setIsSubmitting($2);
          toast({
            title: 'Submission Error',
            description: err.message || 'An unexpected error occurred during submission.',
            variant: 'destructive'})
        })
    } catch (error) {
      // This catches synchronous errors that might occur when initiating fetch or in its direct vicinity
      // if not caught by the promise's .catch (less common for typical fetch issues but good for safety)
      logErrorToProduction($2);
      setIsSubmitting($2);
      toast({
        title: 'Critical Submission Error',
        description: error instanceof Error ? error.message : 'An unexpected critical error occurred.',
        variant: 'destructive'})
    }
  },

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch(,
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',
        {
          method: 'POST',
          headers: {,
            'Content-Type': 'application/json'},
          body: JSON.stringify({,
            messages: [{ role: 'user', content: message }]})},
      ),

      if (!response.ok) {
        throw new Error('Failed to get response from AI assistant')
      }

      return Promise.resolve()
    } catch (error) {
      logErrorToProduction($2);
      toast($2);
      return Promise.resolve()
    }
  },

  const offices = $2;
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
              <p className="text-zion-slate-light text-lg mb-8">,
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
                      name="name",
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
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">

                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}

                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}

import React from 'react';

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
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
                  </div>
                </div>
              </div>

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
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
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
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple",
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0}}
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
          </div>
        </div>
      </section>
    </div>
  );
}
