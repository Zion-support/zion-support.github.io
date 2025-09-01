import React, { useState } from 'react';'export default React.memo (function Contact () {'import {;
import { motion } from 'framer - motion';''  Phone, Mail,
  MapPin, Clock,
  Send, CheckCircle,
  AlertCircle, User,
  MessageSquare, Building,
  Rocket, } from 'lucide - react';''  const [formData, setFormData] = useState ({
    name: '', email: '','    company: '', phone: '','    message: '', service: 'general','  }) ;'
  const serviceOptions = [;
    { value: 'general', label: 'General Inquiry' },'    {'      value: 'ai - autonomous - research', label: 'AI Autonomous Research Assistant','    }, { value: 'ai - supply - chain', label: 'AI Supply Chain Optimization' }, { value: 'ai - content - marketing', label: 'AI Content Marketing Suite' }, { value: 'ai - workflow - orchestrator', label: 'AI Workflow Orchestrator' }, {'      value: 'ai - customer - experience','      label: 'AI Customer Experience Analytics', },'    { value: 'ai - financial - risk', label: 'AI Financial Risk Management' },'    { value: 'ai - cybersecurity', label: 'AI Cybersecurity Solutions' },'    { value: 'cloud - devops', label: 'Cloud & DevOps Services' },'    { value: 'digital - transformation', label: 'Digital Transformation' },'    { value: 'micro - saas', label: 'Micro SaaS Solutions' },'    { value: 'it - consulting', label: 'IT Consulting' },'    { value: 'quantum - computing', label: 'Quantum Computing' },'    { value: 'iot - edge', label: 'IoT & Edge Computing' },'    { value: 'custom - development', label: 'Custom Development' },'  ];'
  const [isSubmitting, setIsSubmitting] = useState (false) ;
  const [submitStatus, setSubmitStatus] = useState ('idle') ;''  const handleInputChange = useCallback ( (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >) => {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }) ) ;
  };

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault () ;
    setIsSubmitting (true) ;

    // Simulate form submission
    try {
      await new Promise (resolve => setTimeout (resolve, 2000) ) ;
      setSubmitStatus ('success') ;'      setFormData ({'        name: '', email: '','        company: '', phone: '','        message: '', service: 'general','      }) ;'    } catch (error) {
      setSubmitStatus ('error') ;'    } finally {'      setIsSubmitting (false) ;
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - indigo - 900">"      <div className="container mx - auto px - 4 py - 24">"        {/* Header Section */}"        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text - center text - white mb - 16""        >"          <h1 className="text - 5xl md:text - 6xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg - clip - text text - transparent">"            Get In Touch"          </h1>
          <p className="text - xl md:text - 2xl max - w-3xl mx - auto text - gray - 300 leading - relaxed">"            Ready to transform your business? Let&apos;s discuss how our cutting - edge''            AI and technology solutions can drive your success.'          </p>
        </motion.div>

        <div className="grid lg: grid - cols - 2 gap - 12 max - w-7xl mx - auto">"          {/* Contact Information */}"          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space - y-8""          >"            <div>
              <h2 className="text - 3xl font - bold text - white mb - 6">"                Contact Information"              </h2>
              <p className="text - gray - 300 text - lg mb - 8">"                We&apos;re here to help you navigate the future of technology. Reach''                out to us for personalized solutions and expert guidance.'              </p>
            </div>

            <div className="space - y-6">"              <div className="flex items - start space - x-4">"                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - lg flex items - center justify - center flex - shrink - 0">"                  <Phone className="w - 6 h - 6 text - white" />"                </div>"                <div>
                  <h3 className="text - white font - semibold text - lg">Phone</h3>"                  <p className="text - gray - 300">+1 302 464 0950</p>"                  <p className="text - gray - 400 text - sm">Mon - Fri 9AM - 6PM EST</p>"                </div>"              </div>

              <div className="flex items - start space - x-4">"                <div className="w - 12 h - 12 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg flex items - center justify - center flex - shrink - 0">"                  <Mail className="w - 6 h - 6 text - white" />"                </div>"                <div>
                  <h3 className="text - white font - semibold text - lg">Email</h3>"                  <p className="text - gray - 300">kleber@ziontechgroup.com</p>"                  <p className="text - gray - 400 text - sm">"                    We&apos;ll respond within 24 hours''                  </p>'                </div>
              </div>

              <div className="flex items - start space - x-4">"                <div className="w - 12 h - 12 bg - gradient - to - r from - purple - 500 to - pink - 500 rounded - lg flex items - center justify - center flex - shrink - 0">"                  <MapPin className="w - 6 h - 6 text - white" />"                </div>"                <div>
                  <h3 className="text - white font - semibold text - lg">Address</h3>"                  <p className="text - gray - 300">364 E Main St STE 1008</p>"                  <p className="text - gray - 300">Middletown, DE 19709</p>"                  <p className="text - gray - 400 text - sm">United States</p>"                </div>"              </div>

              <div className="flex items - start space - x-4">"                <div className="w - 12 h - 12 bg - gradient - to - r from - green - 500 to - teal - 500 rounded - lg flex items - center justify - center flex - shrink - 0">"                  <Clock className="w - 6 h - 6 text - white" />"                </div>"                <div>
                  <h3 className="text - white font - semibold text - lg">"                    Business Hours"                  </h3>
                  <p className="text - gray - 300">"                    Monday - Friday: 9:00 AM - 6:00 PM EST"                  </p>
                  <p className="text - gray - 300">"                    Saturday: 10:00 AM - 2:00 PM EST"                  </p>
                  <p className="text - gray - 400 text - sm">Sunday: Closed</p>"                </div>"              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="pt - 6 border - t border - gray - 700">"              <h3 className="text - white font - semibold text - lg mb - 4">"                Quick Contact Options"              </h3>
              <div className="space - y-3">"                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white py - 3 px - 6 rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 flex items - center justify - center space - x-2">"                  <Phone className="w - 5 h - 5" />"                  <span > Call Now</span>"                </button>
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="w - full bg - gradient - to - r from - blue - 500 to - purple - 500 text - white py - 3 px - 6 rounded - lg hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 200 flex items - center justify - center space - x-2">"                  <Mail className="w - 5 h - 5" />"                  <span > Send Email</span>"                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg - white / 10 backdrop - blur - lg rounded - 2xl p - 8 border border - white / 20""          >"            <h2 className="text - 3xl font - bold text - white mb - 6">"              Send us a Message"            </h2>

            <form onSubmit={handleSubmit} className="space - y-6">"              <div className="grid md:grid - cols - 2 gap - 4">"                <div>"                  <label
                    htmlFor="name""                    className="block text - white font - medium mb - 2""                  >"                    <User className="w - 4 h - 4 inline mr - 2" />"                    Full Name *"                  </label>
                  <input
                    type="text""                    id="name""                    name="name""                    value={formData.name}"                    onChange={handleInputChange}
                    required
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent""                    placeholder="Enter your full name""                  />"                </div>

                <div>
                  <label
                    htmlFor="email""                    className="block text - white font - medium mb - 2""                  >"                    <Mail className="w - 4 h - 4 inline mr - 2" />"                    Email Address *"                  </label>
                  <input
                    type="email""                    id="email""                    name="email""                    value={formData.email}"                    onChange={handleInputChange}
                    required
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent""                    placeholder="Enter your email""                  />"                </div>
              </div>

              <div className="grid md:grid - cols - 2 gap - 4">"                <div>"                  <label
                    htmlFor="company""                    className="block text - white font - medium mb - 2""                  >"                    <Building className="w - 4 h - 4 inline mr - 2" />"                    Company"                  </label>
                  <input
                    type="text""                    id="company""                    name="company""                    value={formData.company}"                    onChange={handleInputChange}
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent""                    placeholder="Enter company name""                  />"                </div>

                <div>
                  <label
                    htmlFor="phone""                    className="block text - white font - medium mb - 2""                  >"                    <Phone className="w - 4 h - 4 inline mr - 2" />"                    Phone Number"                  </label>
                  <input
                    type="tel""                    id="phone""                    name="phone""                    value={formData.phone}"                    onChange={handleInputChange}
                    className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent""                    placeholder="Enter phone number""                  />"                </div>
              </div>

              <div>
                <label
                  htmlFor="service""                  className="block text - white font - medium mb - 2""                >"                  Service of Interest
                </label>
                <select
                  id="service""                  name="service""                  value={formData.service}"                  onChange={handleInputChange}
                  className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent""                >"                  {serviceOptions.map (option => (<option
                      key={option.value}
                      value={option.value}
                      className="bg - gray - 800 text - white""                    >"                      {option.label}
                    </option>) ) }
                </select>
              </div>

              <div>
                <label
                  htmlFor="message""                  className="block text - white font - medium mb - 2""                >"                  <MessageSquare className="w - 4 h - 4 inline mr - 2" />"                  Message *"                </label>
                <textarea
                  id="message""                  name="message""                  value={formData.message}"                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w - full px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus: outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent resize - none""                  placeholder="Tell us about your project or inquiry...""                />"              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (<motion.div'                  initial={{ opacity: 0, scale: 0.9 }}'                  animate={{ opacity: 1, scale: 1 }}
                  className="bg - green - 500 / 20 border border - green - 500 / 50 rounded - lg p - 4 flex items - center space - x-3""                >"                  <CheckCircle className="w - 6 h - 6 text - green - 400" />"                  <span className="text - green - 400">"                    Message sent successfully ! We&apos;ll get back to you soon.''                  </span>'                </motion.div>) }

              {submitStatus === 'error' && (<motion.div'                  initial={{ opacity: 0, scale: 0.9 }}'                  animate={{ opacity: 1, scale: 1 }}
                  className="bg - red - 500 / 20 border border - red - 500 / 50 rounded - lg p - 4 flex items - center space - x-3""                >"                  <AlertCircle className="w - 6 h - 6 text - red - 400" />"                  <span className="text - red - 400">"                    Failed to send message. Please try again."                  </span>
                </motion.div>) }

              <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" type="submit""                disabled={!isFormValid || isSubmitting}"                className={`w - full py - 4 px - 6 rounded - lg font - semibold text - lg transition - all duration - 200 flex items - center justify - center space - x-2 ${`                  isFormValid && !isSubmitting
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 hover: from - cyan - 600 hover:to - blue - 600 text - white transform hover:-translate - y-1 shadow - lg hover:shadow - xl''                    : 'bg - gray - 600 text - gray - 400 cursor - not - allowed''                }`}'              >`                {isSubmitting ? (<>
                    <div className="animate - spin rounded - full h - 6 w - 6 border - b-2 border - white"></div>"                    <span > Sending...</span>"</>) : (<>
                    <Send className="w - 6 h - 6" />"                    <span > Send Message</span>"</>) }
              </button>
            </form>
          </motion.div>
        </div>

        {/* Additional Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt - 24 text - center""        >"          <h2 className="text - 3xl font - bold text - white mb - 8">"            Why Choose Zion Tech Group?"          </h2>
          <div className="grid md:grid - cols - 3 gap - 8 max - w-4xl mx - auto">"            <div className="text - center">"              <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - full flex items - center justify - center mx - auto mb - 4">"                <Rocket className="w - 8 h - 8 text - white" />"              </div>"              <h3 className="text - white font - semibold text - xl mb - 2">"                Innovation First"              </h3>
              <p className="text - gray - 300">"                Cutting - edge AI and quantum computing solutions that drive"                business transformation.
              </p>
            </div>
            <div className="text - center">"              <div className="w - 16 h - 16 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - full flex items - center justify - center mx - auto mb - 4">"                <CheckCircle className="w - 8 h - 8 text - white" />"              </div>"              <h3 className="text - white font - semibold text - xl mb - 2">"                Proven Results"              </h3>
              <p className="text - gray - 300">"                Track record of successful implementations and measurable"                business outcomes.
              </p>
            </div>
            <div className="text - center">"              <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - pink - 500 rounded - full flex items - center justify - center mx - auto mb - 4">"                <User className="w - 8 h - 8 text - white" />"              </div>"              <h3 className="text - white font - semibold text - xl mb - 2">"                Expert Team"              </h3>
              <p className="text - gray - 300">"                Experienced professionals dedicated to your success and growth."              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>) ;
}
