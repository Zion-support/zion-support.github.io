<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contact Us - Zion Tech Group | Advanced AI and IT Solutions
        </title>
        <meta
          name='description'
          content='Contact Zion Tech Group for revolutionary AI and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-white mb-6'>
              Contact Zion Tech Group
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Ready to transform your business with cutting-edge AI and
              technology solutions? Get in touch with our experts today.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div className='bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20'>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Get In Touch
                </h2>

                <div className='space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='text-2xl'>📞</div>
                    <div>
                      <h3 className='text-white font-semibold'>Phone</h3>
                      <a
                        href='tel:+13024640950'
                        className='text-blue-400 hover:text-blue-300 transition-colors'
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='text-2xl'>✉️</div>
                    <div>
                      <h3 className='text-white font-semibold'>Email</h3>
                      <a
                        href='mailto:kleber@ziontechgroup.com'
                        className='text-blue-400 hover:text-blue-300 transition-colors'
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='text-2xl'>🌐</div>
                    <div>
                      <h3 className='text-white font-semibold'>Website</h3>
                      <a
                        href='https://ziontechgroup.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-400 hover:text-blue-300 transition-colors'
                      >
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='text-2xl'>📍</div>
                    <div>
                      <h3 className='text-white font-semibold'>Address</h3>
                      <p className='text-gray-300'>
                        364 E Main St STE 1008
                        <br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className='bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20'>
                <h2 className='text-2xl font-bold text-white mb-6'>
                  Our Services
                </h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <h3 className='text-white font-semibold mb-2'>
                      Micro SAAS
                    </h3>
                    <ul className='text-gray-300 text-sm space-y-1'>
                      <li>• AI Analytics Dashboard</li>
                      <li>• Document Processing</li>
                      <li>• Lead Scoring</li>
                      <li>• Email Automation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-2'>
                      IT Services
                    </h3>
                    <ul className='text-gray-300 text-sm space-y-1'>
                      <li>• Cloud Migration</li>
                      <li>• DevOps Automation</li>
                      <li>• Database Optimization</li>
                      <li>• Infrastructure Monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-2'>
                      AI Solutions
                    </h3>
                    <ul className='text-gray-300 text-sm space-y-1'>
                      <li>• Machine Learning</li>
                      <li>• Computer Vision</li>
                      <li>• NLP Solutions</li>
                      <li>• Predictive Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-2'>
                      Consulting
                    </h3>
                    <ul className='text-gray-300 text-sm space-y-1'>
                      <li>• Enterprise AI Strategy</li>
                      <li>• Digital Transformation</li>
                      <li>• Cybersecurity</li>
                      <li>• Quantum Computing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Send us a Message
              </h2>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-white font-medium mb-2'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                      placeholder='Your first name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-white font-medium mb-2'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                      placeholder='Your last name'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-white font-medium mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-white font-medium mb-2'
                  >
                    Phone
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                    placeholder='+1 (555) 123-4567'
                  />
                </div>

                <div>
                  <label
                    htmlFor='company'
                    className='block text-white font-medium mb-2'
                  >
                    Company
                  </label>
                  <input
                    type='text'
                    id='company'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                    placeholder='Your company name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='service'
                    className='block text-white font-medium mb-2'
                  >
                    Service Interest
                  </label>
                  <select
                    id='service'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500'
                  >
                    <option value=''>Select a service</option>
                    <option value='micro-saas'>Micro SAAS Solutions</option>
                    <option value='it-services'>IT Services</option>
                    <option value='ai-solutions'>AI Solutions</option>
                    <option value='consulting'>Consulting</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-white font-medium mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                    placeholder='Tell us about your project and requirements...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Pricing Information */}
          <div className='mt-16'>
            <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20'>
              <h2 className='text-3xl font-bold text-white mb-6 text-center'>
                Competitive Pricing
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    Micro SAAS
                  </h3>
                  <p className='text-3xl font-bold text-green-400 mb-2'>
                    $99 - $399/month
                  </p>
                  <p className='text-gray-300'>
                    Affordable monthly subscriptions for small to medium
                    businesses
                  </p>
                </div>
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    IT Services
                  </h3>
                  <p className='text-3xl font-bold text-green-400 mb-2'>
                    $1,500 - $5,000
                  </p>
                  <p className='text-gray-300'>
                    Project-based pricing with transparent cost structure
                  </p>
                </div>
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    AI Solutions
                  </h3>
                  <p className='text-3xl font-bold text-green-400 mb-2'>
                    $5,000 - $20,000+
                  </p>
                  <p className='text-gray-300'>
                    Custom AI development with enterprise-grade solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
=======
import React from "react"; import { Mail, Phone, MapPin, Clock, Users, Award, Globe, Zap, MessageSquare, Sparkles, } from "lucide-react"; import Header from "../components/Header"; import Footer from "../components/Footer"; import { Helmet } from "react-helmet-async"; // Fallback form component in environments without the enhanced component const ContactFormComponent: React.FC = () => null; export default function Contact(): React.JSX.Element { const contactInfo = [ { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: "hello@ziontechgroup.com", description: "Send us an email anytime" }, { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: "+1 (555) 123-4567", description: "Mon-Fri from 9am to 6pm" }, { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: "123 Tech Street, San Francisco, CA 94105", description: "Come say hello at our office" }, { icon: <Clock className="w-6 h-6" />, title: "Response Time", details: "Within 24 hours", description: "We respond to all inquiries quickly" } ]; const stats = [ { icon: <Users className="w-8 h-8" />, value: "500+", label: "Happy Clients" }, { icon: <Award className="w-8 h-8" />, value: "99.9%", label: "Satisfaction Rate" }, { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries Served" }, { icon: <Zap className="w-8 h-8" />, value: "24/7", label: "Support Available" } ]; return ( <> <Helmet> <title> Contact Zion Tech Group - Get in Touch | AI & Technology Solutions </title> <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud services, and technology consulting. Get expert advice and start your digital transformation journey." /> <meta name="keywords" content="contact, AI consulting, technology solutions, cloud services, digital transformation" /> <meta property="og:title" content="Contact Zion Tech Group - Get in Touch" /> <meta property="og:description" content="Contact us for AI solutions, cloud services, and technology consulting" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/contact" /> <link rel="canonical" href="https://ziontechgroup.com/contact" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" > <Header /> {/* Hero Section */} <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden" > <div className="absolute inset-0" > <div></div> <div></div> <div></div> </div> <div className="container mx-auto px-6 text-center relative z-10" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6" > <MessageSquare className="w-4 h-4 mr-2" /> Let&apos;s Start a Conversation </div> <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" > Get in Touch </h1> <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" > Ready to transform your business with cutting-edge technology? Let&apos;s discuss your project and explore the possibilities. </p> </div> </section> {/* Contact Information */} <section className="py-16 bg-white dark:bg-gray-800" > <div className="container mx-auto px-6" > <div className="text-center mb-12" > <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" > Multiple Ways to Reach Us </h2> <p className="text-lg text-gray-600 dark:text-gray-300" > Choose the communication method that works best for you </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" > {contactInfo.map((info, index) => ( <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105" > <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4" > {info.icon} </div> <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" > {info.title} </h3> <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2" > {info.details} </p> <p className="text-sm text-gray-600 dark:text-gray-300" > {info.description} </p> </div> ))} </div> </div> </section> {/* Enhanced Contact Form */} <section className="py-20 bg-gray-50 dark:bg-gray-900" > <div className="container mx-auto px-6" > <div className="text-center mb-12" > <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" > Start Your Project Today </h2> <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" > Fill out the form below and our team will get back to you within 24 hours with a personalized proposal for your project. </p> </div> <ContactFormComponent /> </div> </section> {/* Stats Section */} <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600" > <div className="container mx-auto px-6" > <div className="text-center mb-12" > <h2 className="text-3xl font-bold text-white mb-4" > Why Choose Zion Tech Group? </h2> <p className="text-xl text-white/90" > Our track record speaks for itself </p> </div> <div className="grid grid-cols-2 md:grid-cols-4 gap-8" > {stats.map((stat, index) => ( <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300" > <div className="inline-flex p-4 rounded-xl bg-white/20 text-white mb-4" > {stat.icon} </div> <div className="text-3xl font-bold text-white mb-2" > {stat.value} </div> <div className="text-white/80 font-medium" >{stat.label}</div> </div> ))} </div> </div> </section> {/* FAQ Section */} <section className="py-20 bg-white dark:bg-gray-800" > <div className="container mx-auto px-6" > <div className="text-center mb-12" > <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" > Frequently Asked Questions </h2> <p className="text-lg text-gray-600 dark:text-gray-300" > Quick answers to common questions </p> </div> <div className="max-w-4xl mx-auto space-y-6" > {[ { question: "How quickly can you start my project?", answer: "We typically begin new projects within 1-2 weeks of contract signing. Rush projects can be accommodated with additional planning." }, { question: "What&apos;s your typical project timeline?", answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex AI implementations can take 3-6 months." }, { question: "Do you provide ongoing support?", answer: "Yes! We offer comprehensive support packages including maintenance, updates, and 24/7 monitoring for all our solutions." }, { question: "What technologies do you specialize in?", answer: "We specialize in AI/ML, cloud computing, cybersecurity, quantum computing, and modern web technologies like React, Node.js, and Python." } ].map((faq, index) => ( <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300" > <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" > {faq.question} </h3> <p className="text-gray-600 dark:text-gray-300" > {faq.answer} </p> </div> ))} </div> </div> </section> {/* CTA Section */} <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900" > <div className="container mx-auto px-6 text-center" > <div className="max-w-4xl mx-auto" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6" > <Sparkles className="w-4 h-4 mr-2" /> Ready to Get Started? </div> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Let&apos;s Build Something Amazing Together </h2> <p className="text-xl text-gray-300 mb-8" > Join hundreds of companies that trust Zion Tech Group for their technology needs. Your digital transformation starts with a single conversation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a title="Internal link" href="#contact-form" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300" > <MessageSquare className="w-5 h-5 mr-2" /> Start Your Project </a> <a title="Internal link" href="tel:+15551234567" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300" > <Phone className="w-5 h-5 mr-2" /> Call Us Now </a> </div> </div> </div> </section> <Footer /> </div> </> ); }
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
