import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Phone
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send
  Globe
  Building
  User
  CheckCircle
  ArrowRight
  Star
  Award
  Shield
  Zap
  Brain
  Cpu
  Database
  Network
  Rocket
} from "lucide-react"
import { SEO } from "../components/SEO"
const,
  EnhancedContac: t: React.FC = () () => {
  const [formData, setFormData] = useState({
    na,
  m: e: '',ema,
  i: l: '',compa,
  n: y: '',pho,
  n: e: '',servi,
  c: e: '',messa,
  g: e: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) () => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) () => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() () => {
      setIsSubmitted(false)
      setFormData({
        na,
  m: e: '',ema,
  i: l: '',compa,
  n: y: '',pho,
  n: e: '',servi,
  c: e: '',messa,
  g: e: ''
      })
    }, 3000)
  }

  const services = [
    { id: 'ai-analytics', na,
  m: e: 'AI & Analytics Solutions', ic,
  o: n: <Brain className="w-5 h-5" /> }, { id: 'quantum-computing', na,
  m: e: 'Quantum Computing Services', ic,
  o: n: <Cpu className="w-5 h-5" /> }, { id: 'blockchain', na,
  m: e: 'Blockchain Solutions', ic,
  o: n: <Database className="w-5 h-5" /> }, { id: 'iot-smart-cities', na,
  m: e: 'IoT & Smart Cities', ic,
  o: n: <Network className="w-5 h-5" /> }, { id: 'cybersecurity', na,
  m: e: 'Cybersecurity Services', ic,
  o: n: <Shield className="w-5 h-5" /> }, { id: 'metaverse', na,
  m: e: 'Metaverse Solutions', ic,
  o: n: <Globe className="w-5 h-5" /> }, { id: 'custom', na,
  m: e: 'Custom Solution', ic,
  o: n: <Rocket className="w-5 h-5" /> }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for innovative micro SAAS services. Contact us via phone, email, or visit our office in Middletown, DE."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              className="className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6";"
            >
              Let's Build the Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                Together
              </span>
            </motion.h1>
            <motion.p 
              initial={ opacit,
  y: 0, y: 20 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
              className="className="text-xl text-gray-300 max-w-3xl mx-auto mb-8";"
            >
              Ready to transform your business with cutting-edge technology? 
              Our team of experts is here to help you navigate the future of AI, Quantum Computing, and more.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
        <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: -20 }
            animate={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 }
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300 mb-1">+1 302 464 0950</p>
                  <p className="text-sm text-gray-400">Available Monday - Friday, 9: 00 AM - ,
  6:00 PM EST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300 mb-1">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">We typically respond within 2-4 hours during business hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                  <p className="text-gray-300 mb-1">364 E Main St STE 1008</p>
                  <p className="text-gray-300 mb-1">Middletown, DE 19709</p>
                  <p className="text-sm text-gray-400">United States</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                  <p className="text-gray-300 mb-1">htt,
  p: s://ziontechgroup.com</p>
                  <p className="text-sm text-gray-400">Explore our services and solutions online</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Cutting-edge AI & Quantum Computing expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Proven track record of successful implementations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Competitive pricing with exceptional ROI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom solutions tailored to your needs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: 20 }
            animate={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.5 }
            className="className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8";"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 2-4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan";"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg,
  hove: r: from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-300,
  transform: hover:scale-105,
  disable: d:opacity-50 disable,
  d:cursor-not-allowed flex items-center justify-center";"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.7 }
          className="className="mt-20 text-center";"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today to discuss your project 
              and discover how our innovative solutions can drive your success.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg,
  hove: r:from-zion-blue,
  hove: r:to-zion-cyan transition-all duration-300,
  transform: hover:scale-105";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call,
  No: w: +1 302 464 0950
              </a>
              <a
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/20 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default EnhancedContact