import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Users,
  Globe,
  Zap,
  Brain,
  Shield,
  Target,
  Star,
  Award,
  TrendingUp,
  Rocket,
  Cpu,
  Cloud,
  Lock,
  Database,
  Workflow,
  Heart,
  DollarSign,
  Atom,
  Satellite,
  Truck,
  Factory,
  ShoppingCart,
  Network,
  Wifi,
  Server,
  Code,
  Monitor,
  Smartphone,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Video,
  GraduationCap,
  Handshake,
  ShoppingBag,
  Leaf,
  Gamepad2,
  Coins,
  MessageSquare,
  FileText,
  Calendar,
  User,
  Map,
  Navigation,
  ExternalLink,
  Trophy
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    serviceInterest: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        serviceInterest: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email',
        newsletter: false
      });
    }, 5000);
  };

  const serviceCategories = [
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      description: 'AI-powered business applications and automation tools',
      services: ['AI Sales Copilot', 'Cloud FinOps Optimizer', 'AI Compliance Assistant']
    },
    {
      name: 'AI & Automation',
      icon: Brain,
      description: 'Intelligent automation and artificial intelligence solutions',
      services: ['AI Business Intelligence', 'AI Customer Support', 'AI Project Management']
    },
    {
      name: 'IT Infrastructure',
      icon: Shield,
      description: 'Robust IT infrastructure and cybersecurity solutions',
      services: ['Cloud & DevOps', 'Cybersecurity', 'Digital Transformation']
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      services: ['Quantum AI Platform', 'Quantum Machine Learning', 'Quantum Computing as a Service']
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge technology solutions for the future',
      services: ['Blockchain Solutions', 'Space Technology', 'Sustainable Technology']
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      description: 'Call us directly for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Send us a detailed message anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Visit our headquarters for in-person meetings'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      href: '',
      description: 'We\'re available during standard business hours'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Users },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageSquare },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code },
    { name: 'Website', href: 'https://ziontechgroup.com', icon: Globe }
  ];

  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Delivered', value: '1000+', icon: CheckCircle },
    { label: 'Happy Clients', value: '500+', icon: Star },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Innovation Awards', value: '15+', icon: Trophy }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zion-slate-dark flex items-center justify-center">
        <div className="bg-zion-slate-darker border border-zion-cyan/20 rounded-xl p-12 text-center max-w-2xl mx-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-zion-slate-light mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <p className="text-zion-slate-light">
              In the meantime, you can:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border-2 border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Amazing Together
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Get in touch with our team 
              of experts and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-zion-slate-light mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let's discuss your project and explore how we can help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-white mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-white mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service category</option>
                    {serviceCategories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                    <option value="custom">Custom Solution</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                {/* Preferences */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-zion-cyan focus:ring-zion-cyan"
                      />
                      <span className="text-zion-slate-light">Phone</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mr-3 text-zion-cyan focus:ring-zion-cyan rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-zion-slate-light">
                    Subscribe to our newsletter for updates and insights
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : '_self'}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-zion-slate-light">{method.value}</p>
                        )}
                        <p className="text-sm text-zion-slate-light mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zion-slate-darker border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Stats */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-zion-slate-darker border border-zion-purple/20 rounded-lg">
                      <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-zion-slate-light">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.name} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait to transform your business. Contact us today and let's discuss 
            how our innovative solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +1 (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}