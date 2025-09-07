import React, { useState } from 'react';'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar } from 'lucide-react';'
import Card from '../components/Card';'
import Button from '../components/Button';'
import Header from '../components/Header';'
import Footer from '../components/Footer';'
import SEO from '../components/SEO';'
import ScrollAnimation from '../components/ScrollAnimation';'

const "Contact": React.FC = () => {
  }
  const [formData, setFormData] = useState({
    }
    "firstName": '','
    "lastName": '','
    "email": '','
    "company": '','
    "service": '','
    "message": '''
  });

  const handleChange = ("e": React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = ("e": React.FormEvent) => {
    }
    e.preventDefault();
    // Handle form submission,
console.log('Form "submitted":', formData);'
    
    // Create mailto link with form data,
const subject = `Contact Form Submission - ${formData.service}`;`    const body = ``"Name": ${formData.firstName} ${formData.lastName}
"Email": ${formData.email}
"Company": ${formData.company}
Service "Interest": ${formData.service}

"Message":
${formData.message}
    `;`    
    const mailtoLink = `"mailto":kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;`
    window.open(mailtoLink);
    
    // Reset form,
setFormData({
      }
      "firstName": '','
      "lastName": '','
      "email": '','
      "company": '','
      "service": '','
      "message": '''
    });
    
    alert('Thank you for your message! We will get back to you within 24 hours.');'
  };

  return (
    <>
      <SEO,
title="Contact Us - Zion Tech Group""
        description="Get in touch with Zion Tech Group for AI and technology solutions. Contact our expert team for a free consultation.""
        keywords="contact, consultation, AI services, technology solutions, get in touch""
        url="/contact"" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">"
            <div className="max-w-7xl mx-auto">"
              <ScrollAnimation animation="slideUp" delay={0.2}>"
                <div className="text-center mb-16">"
                  <h1 className="text-5xl "md":text-7xl font-bold text-white mb-6">"
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>"
                  </h1>
                  <p className="text-xl "md":text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">"
                    Ready to transform your business? Let's discuss your project and discover '
                    how our solutions can accelerate your growth.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20">"
            <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
              <div className="grid "lg":grid-cols-2 gap-12">"
                {/* Contact Form */}
                <ScrollAnimation animation="slideUp" delay={0.2}>"
                  <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">"
                    <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>"
                    <form onSubmit={handleSubmit} className="space-y-6">"
                      <div className="grid "md":grid-cols-2 gap-6">"
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">"
                            First Name
                          </label>
                          <input,
type="text""
                            name="firstName""
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                            placeholder="John""
                            required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">"
                            Last Name
                          </label>
                          <input,
type="text""
                            name="lastName""
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                            placeholder="Doe""
                            required />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">"
                          Email
                        </label>
                        <input,
type="email""
                          name="email""
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                          placeholder="john@example.com""
                          required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">"
                          Company
                        </label>
                        <input,
type="text""
                          name="company""
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                          placeholder="Your Company"" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">"
                          Service Interest
                        </label>
                        <select,
name="service""
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                        >
                          <option value="">Select a service</option>"
                          <option value="ai-services">AI Services</option>"
                          <option value="it-services">IT Services</option>"
                          <option value="micro-saas">Micro SaaS</option>"
                          <option value="cybersecurity">Cybersecurity</option>"
                          <option value="cloud-solutions">Cloud Solutions</option>"
                          <option value="data-analytics">Data Analytics</option>"
                          <option value="other">Other</option>"
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">"
                          Message
                        </label>
                        <textarea,
name="message""
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent""
                          placeholder="Tell us about your project...""
                          required
                        ></textarea>
                      </div>
                      
                      <Button size="lg" className="w-full" type="submit">"
                        Send Message
                        <Send className="ml-2 h-5 w-5" />"
                      </Button>
                    </form>
                  </Card>
                </ScrollAnimation>

                {/* Contact Info */}
                <ScrollAnimation animation="slideUp" delay={0.4}>"
                  <div className="space-y-8">"
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>"
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">"
                        We're here to help you succeed. Reach out to us through any of the channels below, '
                        and we'll get back to you within 24 hours.'
                      </p>
                    </div>

                    <div className="space-y-6">"
                      <div className="flex items-start">"
                        <Mail className="h-6 w-6 text-cyan-400 mr-4 mt-1" />"
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Email</h3>"
                          <p className="text-gray-300">kleber@ziontechgroup.com</p>"
                          <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>'
                        </div>
                      </div>

                      <div className="flex items-start">"
                        <Phone className="h-6 w-6 text-cyan-400 mr-4 mt-1" />"
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>"
                          <p className="text-gray-300">+1 302 464 0950</p>"
                          <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>"
                        </div>
                      </div>

                      <div className="flex items-start">"
                        <MapPin className="h-6 w-6 text-cyan-400 mr-4 mt-1" />"
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">Office</h3>"
                          <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>"
                          <p className="text-gray-400 text-sm">Visit us by appointment</p>"
                        </div>
                      </div>
                    </div>

                    <Card className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30">"
                      <h3 className="text-xl font-semibold text-white mb-3">Free Consultation</h3>"
                      <p className="text-gray-300 mb-4">"
                        Book a free 30-minute consultation to discuss your project requirements,
and get expert advice on the best solutions for your business.
                      </p>
                      <Button variant="outline" className="w-full">"
                        Schedule Consultation
                      </Button>
                    </Card>

                    <Card className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30">"
                      <h3 className="text-xl font-semibold text-white mb-3">Emergency Support</h3>"
                      <p className="text-gray-300 mb-4">"
                        Need immediate assistance? Our emergency support team is available 24/7,
for critical issues and urgent technical problems.
                      </p>
                      <div className="flex items-center text-cyan-400 font-semibold">"
                        <Phone className="w-5 h-5 mr-2" />"
                        +1 302 464 0950 (Emergency Line)
                      </div>
                    </Card>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Additional Contact Methods */}
          <section className="py-20 bg-gray-900/50">"
            <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">"
              <div className="text-center mb-16">"
                <h2 className="text-4xl "md":text-5xl font-bold text-white mb-6">"
                  Other Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span>"
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                  Choose the communication method that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
                <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 "hover":bg-gray-800/70 transition-all duration-300 "hover":border-cyan-400/50 text-center">"
                  <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>"
                  <p className="text-gray-300 mb-4">"
                    Get instant answers to your questions through our live chat support
                  </p>
                  <Button className="w-full">Start Chat</Button>"
                </Card>

                <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 "hover":bg-gray-800/70 transition-all duration-300 "hover":border-cyan-400/50 text-center">"
                  <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-semibold text-white mb-3">Schedule Meeting</h3>"
                  <p className="text-gray-300 mb-4">"
                    Book a video call with our experts at your convenience
                  </p>
                  <Button className="w-full">Book Meeting</Button>"
                </Card>

                <Card className="p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 "hover":bg-gray-800/70 transition-all duration-300 "hover":border-cyan-400/50 text-center">"
                  <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-semibold text-white mb-3">Response Time</h3>"
                  <p className="text-gray-300 mb-4">"
                    We typically respond within 2-4 hours during business hours
                  </p>
                  <div className="text-cyan-400 font-semibold">24/7 Support Available</div>"
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">"
            <div className="max-w-4xl mx-auto px-4 "sm":px-6 "lg":px-8">"
              <div className="text-center mb-16">"
                <h2 className="text-4xl "md":text-5xl font-bold text-white mb-6">"
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>"
                </h2>
              </div>

              <div className="space-y-6">"
                <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">"
                  <h3 className="text-lg font-semibold text-white mb-2">What services do you offer?</h3>"
                  <p className="text-gray-300">"
                    We offer comprehensive AI services, IT solutions, Micro SaaS development, cybersecurity, cloud solutions, and data analytics. 
                    Our team specializes in custom software development and digital transformation.
                  </p>
                </Card>

                <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">"
                  <h3 className="text-lg font-semibold text-white mb-2">How quickly can you start my project?</h3>"
                  <p className="text-gray-300">"
                    Most projects can begin within 1-2 weeks after initial consultation. We'll provide a detailed timeline during our free consultation call.'
                  </p>
                </Card>

                <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">"
                  <h3 className="text-lg font-semibold text-white mb-2">Do you offer ongoing support?</h3>"
                  <p className="text-gray-300">"
                    Yes, we provide comprehensive ongoing support and maintenance for all our projects. Our support packages include monitoring, updates, and technical assistance.
                  </p>
                </Card>

                <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700/50">"
                  <h3 className="text-lg font-semibold text-white mb-2">What are your pricing models?</h3>"
                  <p className="text-gray-300">"
                    We offer flexible pricing models including project-based, monthly retainer, and hourly rates. Contact us for a customized quote based on your specific needs.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;