import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Globe,
  BarChart3,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Brain,
  Zap,
  Target,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock3,
  User,
  Building,
  Briefcase
} from 'lucide-react';

const demoOptions = [
  {
    icon: Brain,
    title: 'AI & Analytics',
    description: 'See how AI can transform your business data into actionable insights.',
    duration: '45 minutes',
    features: ['Machine learning demos', 'Predictive analytics', 'Real-time dashboards', 'Custom ML models']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Explore our comprehensive security solutions and threat detection capabilities.',
    duration: '60 minutes',
    features: ['Threat detection demo', 'Security monitoring', 'Compliance tools', 'Incident response']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Discover how cloud infrastructure can scale your business operations.',
    duration: '45 minutes',
    features: ['Infrastructure demo', 'DevOps automation', 'Scalability solutions', 'Cost optimization']
  },
  {
    icon: Cpu,
    title: 'IoT & Edge Computing',
    description: 'Learn how edge computing can revolutionize your IoT deployments.',
    duration: '50 minutes',
    features: ['Edge processing demo', 'Device management', 'Real-time analytics', 'Performance monitoring']
  }
];

const microSaasDemos = [
  {
    icon: BarChart3,
    title: 'AI Business Intelligence',
    description: 'Transform your business data into actionable insights.',
    duration: '30 minutes'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Enhance customer interactions with AI-powered automation.',
    duration: '30 minutes'
  },
  {
    icon: Rocket,
    title: 'Quantum Computing',
    description: 'Explore quantum algorithms for complex problem-solving.',
    duration: '45 minutes'
  },
  {
    icon: Globe,
    title: 'Supply Chain',
    description: 'Optimize your supply chain with AI-driven insights.',
    duration: '40 minutes'
  }
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    attendees: 1,
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', {
      demo: selectedDemo,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    // You can add API call here
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Schedule a Demo
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Experience the power of Zion Tech Group's solutions firsthand. 
              Book a personalized demonstration tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Options Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Select from our comprehensive range of technology demonstrations 
              designed to showcase solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {demoOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{option.description}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Clock3 className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-cyan font-semibold">{option.duration}</span>
                </div>
                
                <div className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Micro SAAS Demos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasDemos.map((demo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/30 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg mx-auto mb-4">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{demo.title}</h4>
                  <p className="text-zion-slate-light text-sm mb-3">{demo.description}</p>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Clock3 className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-cyan text-sm font-semibold">{demo.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Book Your Demo
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Fill out the form below to schedule your personalized demonstration. 
                Our team will contact you to confirm the details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Demo Type</label>
                  <select
                    name="demoType"
                    value={selectedDemo}
                    onChange={(e) => setSelectedDemo(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  >
                    <option value="">Select a demo type</option>
                    <option value="ai-analytics">AI & Analytics</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="iot-edge">IoT & Edge Computing</option>
                    <option value="micro-saas">Micro SAAS Solutions</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Time</label>
                  <select
                    name="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Number of Attendees</label>
                  <input
                    type="number"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-futuristic px-8 py-4 text-lg"
                >
                  Schedule Demo
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
                <p className="text-zion-slate-light text-sm">Available Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                <p className="text-zion-slate-light text-sm">We'll respond within 24 hours</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Live Chat</h3>
                <p className="text-zion-slate-light">Available on our website</p>
                <p className="text-zion-slate-light text-sm">Get instant answers to your questions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon component
const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);