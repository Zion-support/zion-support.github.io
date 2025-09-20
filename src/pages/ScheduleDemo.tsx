import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Calendar,;
  Clock, ;
  Users, ;
  Video, ;
  MessageCircle, ;
  Phone, ;
  Mail, ;
  MapPin, ;
  CheckCircle,;
  Star,;
  Zap,;
  Brain,;
  Shield,;
  Cloud,;
  Cpu,;
  Globe,;
  ArrowRight,;
  Play,;
  CalendarDays,;
  Clock3,;
  User,;
  Building,;
  MessageSquare,;
  PhoneCall,;
  Mail as MailIcon,;
  ExternalLink;
} from "lucide-react"
export default function ScheduleDemo() {;
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({;
    firstName: '',lastName: '',email: '',company: '',phone: '',attendees: 1,message: ''
  });
  const demoServices = [;
    {;
      id: 'ai-platform',name: 'AI Platform Demo',description: 'Experience our comprehensive AI platform with real-time demonstrations',icon: Brain,color: 'from-purple-500 to-pink-500',duration: '45 min',features: ['AI Model TrainingReal-time Analytics', 'Custom WorkflowsIntegration Examples'],;
      popular: true;
    };
    {;
      id: 'cybersecurity',name: 'Cybersecurity Solutions',description: 'See our advanced security platform in action with threat simulation',icon: Shield,color: 'from-red-500 to-orange-500',duration: '60 min',features: ['Threat DetectionIncident Response', 'Compliance DashboardSecurity Analytics'],;
      popular: false;
    };
    {;
      id: 'cloud-infrastructure',name: 'Cloud Infrastructure',description: 'Explore our cloud-native solutions and DevOps automation',icon: Cloud,color: 'from-blue-500 to-cyan-500',duration: '50 min',features: ['Multi-cloud ManagementDevOps Automation', 'Cost OptimizationPerformance Monitoring'],;
      popular: true;
    };
    {;
      id: 'quantum-computing',name: 'Quantum Computing',description: 'Discover quantum algorithms and quantum-classical hybrid solutions',icon: Cpu,color: 'from-indigo-500 to-purple-500',duration: '75 min',features: ['Quantum AlgorithmsHybrid Solutions', 'Performance BenchmarksUse Case Examples'],;
      popular: false;
    };
    {;
      id: 'data-analytics',name: 'Data Analytics Platform',description: 'Visualize and analyze your data with our advanced analytics tools',icon: Globe,color: 'from-green-500 to-emerald-500',duration: '40 min',features: ['Real-time DashboardsPredictive Analytics', 'Data VisualizationCustom Reports'],;
      popular: false;
    };
    {;
      id: 'custom-solution',name: 'Custom Solution Demo',description: 'Tailored demonstration based on your specific business needs',icon: Zap,color: 'from-yellow-500 to-orange-500',duration: '60 min',features: ['Custom WorkflowsIntegration Planning', 'ROI AnalysisImplementation Roadmap'],;
      popular: false;
    };
  ];
  const availableTimes = [;
    '9:00 AM9:30 AM', '10:00 AM10:30 AM', '11: 00 AM11:30 AM'
    '1:00 PM1:30 PM', '2:00 PM2:30 PM', '3: 00 PM3:30 PM'
    '4:00 PM4:30 PM', '5: 00 PM'
  ];
  const demoBenefits = [;
    {;
      title: 'Personalized Experience',description: 'Tailored demonstrations based on your business needs and use cases',icon: User,color: 'text-blue-400'
    };
    {;
      title: 'Expert Guidance',description: 'Learn from our certified professionals with deep industry expertise',icon: Star,color: 'text-yellow-400'
    };
    {;
      title: 'Interactive Sessions',description: 'Ask questions and explore features in real-time during the demo',icon: MessageSquare,color: 'text-green-400'
    };
    {;
      title: 'Follow-up Support',description: 'Comprehensive follow-up materials and next steps after your demo',icon: CheckCircle,color: 'text-cyan-400'
    };
  ];
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault()
    //[^;]*
    console.log('Demo request submitted:', {;
      service: selectedService,date: selectedDate,time: selectedTime;
      ...formData
    }),;
  },;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;
    })),;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Schedule Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI, cybersecurity, cloud, and quantum computing solutions. Experience our technology firsthand with expert guidance."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Schedule Your Demo;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Experience our cutting-edge technology solutions firsthand. Book a personalized ;
              demonstration with our experts and discover how Zion Tech Group can transform your business.;
            </[^>]*>
            ;
            {/* Quick Stats */};
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-2xl font-bold text-cyan-400">500+</[^>]*>
                <div className="text-sm text-gray-400">Demos Delivered</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-2xl font-bold text-blue-400">98%</[^>]*>
                <div className="text-sm text-gray-400">Satisfaction Rate</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-2xl font-bold text-purple-400">24/7</[^>]*>
                <div className="text-sm text-gray-400">Availability</[^>]*>
              </[^>]*>
              <div className="text-center">;
                <div className="text-2xl font-bold text-green-400">45min</[^>]*>
                <div className="text-sm text-gray-400">Average Duration</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Demo Services */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Choose Your Demo</[^>]*>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">;
              Select from our range of specialized demonstrations or request a custom solution demo;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {demoServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${;
                  selectedService === service.id ? 'ring-2 ring-cyan-400/50' : ''
                }`};
                onClick={() => setSelectedService(service.id)};
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>;
                      <[^>]*/>
                    </[^>]*>
                    {service.popular && (;&& (; (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">;
                        Popular;
                      </[^>]*>
                    )};
                  </[^>]*>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</[^>]*>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</[^>]*>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">;
                    <[^>]*/>
                    {service.duration};
                  </[^>]*>

                  <div className="space-y-2 mb-4">;
                    {service.features.map((feature, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <div className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 ${;
                    selectedService === service.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                  }`}>;
                    {selectedService === service.id ? 'Selected' : 'Select Demo'}
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Demo Benefits */};
      <section className="py-16 bg-slate-800/20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Why Schedule a Demo?</[^>]*>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">;
              Get the most out of your demo experience with our comprehensive approach;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {demoBenefits.map((benefit, index) => (;
              <motion.div
                key={benefit.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`p-4 rounded-xl bg-slate-700/30 mx-auto mb-4 w-16 h-16 flex items-center justify-center`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</[^>]*>
                <p className="text-gray-300 text-sm">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Demo Scheduling Form */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="max-w-4xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white text-center mb-4">Schedule Your Demo</[^>]*>
              <p className="text-gray-300 text-center max-w-2xl mx-auto">;
                Fill out the form below to schedule your personalized demonstration;
              </[^>]*>
            </[^>]*>

            <motion.form
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 }};
              viewport={{ once: true }};
              onSubmit={handleSubmit};
              className="[^"]*"
            >;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                {/* Date and Time Selection */};
                <div className="space-y-4">;
                  <div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
                      Preferred Date;
                    </[^>]*>
                    <input;
                      type="date"
                      value={selectedDate};
                      onChange={(e) => setSelectedDate(e.target.value)};
                      className="[^"]*"
                      required;
                    />;
                  </[^>]*>
                  <div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;
                      Preferred Time;
                    </[^>]*>
                    <select;
                      value={selectedTime};
                      onChange={(e) => setSelectedTime(e.target.value)};
                      className="[^"]*"
                      required;
                    >;
                      <option value="">Select a time</[^>]*>
                      {availableTimes.map(time => (;
                        <option key={time} value={time}>{time}</[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Service Selection */};
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Demo Service;
                  </[^>]*>
                  <select;
                    value={selectedService};
                    onChange={(e) => setSelectedService(e.target.value)};
                    className="[^"]*"
                    required;
                  >;
                    <option value="">Select a service</[^>]*>
                    {demoServices.map(service => (;
                      <option key={service.id} value={service.id}>{service.name}</[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Personal Information */};
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    First Name *;
                  </[^>]*>
                  <input;
                    type="text"
                    name="firstName"
                    value={formData.firstName};
                    onChange={handleInputChange};
                    className="[^"]*"
                    required;
                  />;
                </[^>]*>
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Last Name *;
                  </[^>]*>
                  <input;
                    type="text"
                    name="lastName"
                    value={formData.lastName};
                    onChange={handleInputChange};
                    className="[^"]*"
                    required;
                  />;
                </[^>]*>
              </[^>]*>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Email Address *;
                  </[^>]*>
                  <input;
                    type="email"
                    name="email"
                    value={formData.email};
                    onChange={handleInputChange};
                    className="[^"]*"
                    required;
                  />;
                </[^>]*>
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Company *;
                  </[^>]*>
                  <input;
                    type="text"
                    name="company"
                    value={formData.company};
                    onChange={handleInputChange};
                    className="[^"]*"
                    required;
                  />;
                </[^>]*>
              </[^>]*>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Phone Number;
                  </[^>]*>
                  <input;
                    type="tel"
                    name="phone"
                    value={formData.phone};
                    onChange={handleInputChange};
                    className="[^"]*"
                  />;
                </[^>]*>
                <div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;
                    Number of Attendees;
                  </[^>]*>
                  <select;
                    name="attendees"
                    value={formData.attendees};
                    onChange={handleInputChange};
                    className="[^"]*"
                  >;
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (;
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              <div className="mb-6">;
                <label className="block text-sm font-medium text-gray-300 mb-2">;
                  Additional Information;
                </[^>]*>
                <textarea;
                  name="message"
                  value={formData.message};
                  onChange={handleInputChange};
                  rows={4};
                  placeholder="Tell us about your specific needs, questions, or any special requirements for the demo..."
                  className="[^"]*"
                />;
              </[^>]*>

              <div className="text-center">;
                <button;
                  type="submit"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Schedule Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-8">Need Immediate Assistance?</[^>]*>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
                <p className="text-gray-300 mb-3">Speak with our experts directly</[^>]*>
                <a;
                  href="tel:+13024640950"
                  className="[^"]*"
                >;
                  +1 (302) 464-0950;
                </[^>]*>
              </[^>]*>

              <div className="text-center">;
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</[^>]*>
                <p className="text-gray-300 mb-3">Send us your questions</[^>]*>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="[^"]*"
                >;
                  kleber@ziontechgroup.com
                </[^>]*>
              </[^>]*>

              <div className="text-center">;
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</[^>]*>
                <p className="text-gray-300 mb-3">Get instant answers</[^>]*>
                <button className="text-green-400 hover:text-green-300 transition-colors font-medium">;
                  Start Chat;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};