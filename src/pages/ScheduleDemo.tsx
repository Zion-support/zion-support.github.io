import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  Users, 
  Building2, 
  Zap, 
  Brain, 
  Shield, 
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star
} from 'lucide-react';

export default function ScheduleDemo() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: ''
  });

  const services = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      description: 'Artificial Intelligence solutions and platforms',
      duration: '45-60 minutes'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Shield,
      description: 'Information Technology infrastructure and solutions',
      duration: '30-45 minutes'
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS',
      icon: ShoppingCart,
      description: 'Software-as-a-Service products and platforms',
      duration: '30-45 minutes'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale enterprise technology solutions',
      duration: '60-90 minutes'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

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
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      companySize,
      ...formData
    });
    // You can add API call here
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
        dates.push(date);
      }
    }
    return dates;
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <Helmet>
        <title>Schedule Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demonstration of Zion Tech Group's AI, IT, and Micro SaaS services. Book your demo today." />
        <link rel="canonical" href="https://ziontechgroup.com/schedule-demo" />
      </Helmet>

      {/* Header */}
      <div className="bg-zion-blue-dark border-b border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Schedule Your Demo
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the power of our AI, IT, and Micro SaaS solutions firsthand. 
              Book a personalized demonstration tailored to your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Demo Form */}
          <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Book Your Demo</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-zion-cyan font-medium mb-3">
                  Select Service Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          selectedService === service.id
                            ? 'border-zion-cyan bg-zion-cyan/10'
                            : 'border-zion-purple/30 hover:border-zion-purple/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-zion-cyan" />
                          <div>
                            <div className="font-medium text-white">{service.name}</div>
                            <div className="text-sm text-zion-slate-light">{service.description}</div>
                            <div className="text-xs text-zion-cyan">{service.duration}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Preferred Date</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  >
                    <option value="">Select a date</option>
                    {getNextWeekDates().map((date) => (
                      <option key={date.toISOString()} value={date.toISOString()}>
                        {date.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Preferred Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-zion-cyan font-medium mb-2">Company Size</label>
                <select
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  required
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-cyan font-medium mb-2">Job Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-zion-cyan font-medium mb-2">Additional Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your specific needs, challenges, or questions..."
                  className="w-full bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Benefits and Information */}
          <div className="space-y-8">
            {/* Why Choose Zion Tech Group */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 text-zion-cyan mr-2" />
                Why Choose Zion Tech Group?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">Expert-led demonstrations by certified professionals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">Personalized solutions based on your business needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">Live Q&A session during the demo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light">Follow-up consultation and proposal</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 text-zion-cyan mr-2" />
                What to Expect
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light">Introduction to our services and capabilities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light">Live demonstration of relevant solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light">Discussion of your specific use cases</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light">Q&A and next steps planning</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span className="text-zion-slate-light">Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}