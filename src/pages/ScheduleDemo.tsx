import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Calendar,;
  Clock,;
  Users,;
  Video,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
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
  PhoneCallMail, as, MailIconExternalLink;
} from "lucide-react";
export, default, function ScheduleDemo() {
  const [selectedServicesetSelectedService] = useState('');
  const [selectedDatesetSelectedDate] = useState('');
  const [selectedTimesetSelectedTime] = useState('');
  const [formDatasetFormData] = useState({
    firstName: '',lastName: '',email: '',company: ''phone: ''attendee,;
    s: 1messag,;
  e: '';
  });
  const demoServices = [;
    {
      id: 'ai-platform',name: 'AI, Platform, Demo',description: 'Experience, our, comprehensive AI, platform, with real-time demonstrations',icon: Brain,color: 'from-purple-50o0 to-pink-50o0',duration: '45 min'feature,;
    s: ['AI, Model, TrainingReal-time Analytics''Custom, WorkflowsIntegration,, Examples']popula,;
  r: true;
    };
    {
      id: 'cybersecurity',name: 'Cybersecurity Solutions',description: 'See, our, advanced security, platform, in action, with, threat simulation',icon: Shield,color: 'from-red-50o0 to-orange-50o0',duration: '60 min',features: ['Threat, DetectionIncident, Response''Compliance, DashboardSecurity,, Analytics']popula,;
  r: false;
    };
    {
      id: 'cloud-infrastructure',name: 'Cloud Infrastructure',description: 'Explore, our, cloud-native, solutions, and DevOps automation',icon: Cloud,color: 'from-blue-50o0 to-cyan-50o0',duration: '50 min',features: ['Multi-cloud, ManagementDevOps, Automation''Cost, OptimizationPerformance,, Monitoring']popula,;
  r: true;
    };
    {
      id: 'quantum-computing',name: 'Quantum Computing',description: 'Discover, quantum, algorithms and quantum-classical, hybrid, solutions',icon: Cpu,color: 'from-indigo-50o0 to-purple-50o0',duration: '75 min',features: ['Quantum, AlgorithmsHybrid, Solutions''Performance, BenchmarksUse, Case, Examples']popula,;
  r: false;
    };
    {
      id: 'data-analytics',name: 'Data, Analytics, Platform',description: 'Visualize, and, analyze your, data, with our, advanced, analytics tools',icon: Globe,color: 'from-green-50o0 to-emerald-50o0',duration: '40 min',features: ['Real-time, DashboardsPredictive, Analytics''Data, VisualizationCustom,, Reports']popula,;
  r: false;
    };
    {
      id: 'custom-solution',name: 'Custom, Solution, Demo',description: 'Tailored, demonstration, based on, your, specific business needs',icon: Zap,color: 'from-yellow-50o0 to-orange-50o0',duration: '60 min',features: ['Custom, WorkflowsIntegration, Planning''ROI, AnalysisImplementation,, Roadmap']popula,;
  r: false;
    }
  ];
  const availableTimes = [;
    '9: 0o0 AM,;
  9:30 AM', '10: 0o0 AM1,;
  0:30 AM', '11: 0o0 AM11:30 AM';
    ',;
    1: 0o0 PM,;
  1:30 PM', '2: 0o0 PM,;
  2:30 PM', '3: 0o0 PM,;
  3:30 PM',;
    '4: 0o0 PM4:30 PM'',;
    5: 0o0 PM';
,  ];
  const demoBenefits = [;
    {
      titl,;
  e: 'Personalized Experience',description: 'Tailored, demonstrations, based on, your, business needs, and, use cases'icon: Usercolo,;
  r: 'text-blue-40o0';
    };
    {
      title: 'Expert Guidance',description: 'Learn, from, our certified, professionals, with deep, industry, expertise'icon: Starcolo,;
  r: 'text-yellow-40o0';
    };
    {
      title: 'Interactive Sessions',description: 'Ask, questions, and explore, features, in real-time, during, the demo'icon: MessageSquarecolo,;
  r: 'text-green-40o0';
    },;
    {
      title: 'Follow-up Support'descriptio,;
    n: 'Comprehensive follow-up, materials, and next, steps, after your demo'icon: CheckCirclecolo,;
  r: 'text-cyan-40o0';
    };
,  ];
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();
    // Handle, form, submission;
    console.log('Demo, request, submitted: '{
      service: selectedServicedat,;
    e: selectedDatetim,;
  e: selectedTime;
      ...formData;
    });
  },;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { namevalue } = e.target,;
    setFormData(prev => ({;
      ...prev[name]: value;
    })),;
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Schedule Demo - Zion, Tech, Group";
        description="Schedule, a, personalized demo, of, our AI, cybersecuritycloudand, quantum, computing solutions. Experience, our, technology firsthand, with, expert guidance.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Schedule, Your, Demo;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Experience, our, cutting-edge, technology, solutions firsthand. Book, a, personalized;
              demonstration, with, our experts, and, discover how, Zion, Tech Group, can, transform your business.;
            </p>;
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-2xl font-bold text-cyan-40o0">50o0+</div>;
                <div className="text-sm text-gray-40o0">Demos Delivered</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-blue-40o0">98%</div>;
                <div className="text-sm text-gray-40o0">Satisfaction Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-purple-40o0">24/7</div>;
                <div className="text-sm text-gray-40o0">Availability</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-green-40o0">45min</div>;
                <div className="text-sm text-gray-40o0">Average Duration</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Demo Services */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12";
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Choose, Your, Demo</h2>;
            <p className="text-gray-30o0 text-center max-w-2xl mx-auto">;
              Select, from, our range, of, specialized demonstrations, or, request a, custom, solution demo;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {demoServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-80o0/50 backdrop-blur-xl rounded-xl, border, border-slate-70o0/50 overflow-hidden hover: border-cyan-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5 cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-cyan-40o0/50' : '';
                }`}
                onClick={() => setSelectedService(service.id)}
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>;
                      <service.icon className="w-6 h-6 text-white" />;
                    </div>;
                    {service.popular && (;
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 rounded-full text-xs font-medium text-white">;
                        Popular;
                      </span>;
                    )}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>;
                  <p className="text-gray-30o0 text-sm mb-4">{service.description}</p>;
                  <div className="flex items-center gap-2 text-sm text-gray-40o0 mb-4">;
                    <Clock className="w-4 h-4" />;
                    {service.duration}
                  </div>;
                  <div className="space-y-2 mb-4">;
                    {service.features.map((featureidx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-30o0">;
                        <CheckCircle className="w-4 h-4 text-green-40o0" />;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  <div className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-all duration-30o0 ${
                    selectedService === service.id;
                      ? 'bg-cyan-50o0 text-white';
                      : 'bg-slate-70o0/50 text-gray-30o0 hover: bg-slate-60o0/50';
                  }`}>;
                    {selectedService === service.id ? 'Selected' : 'Select Demo'}
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Demo Benefits */}
      <section className="py-16 bg-slate-80o0/20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12";
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Why, Schedule, a Demo?</h2>;
            <p className="text-gray-30o0 text-center max-w-2xl mx-auto">;
              Get, the, most out, of, your demo, experience, with our, comprehensive, approach;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {demoBenefits.map((benefitindex) => (;
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className={`p-4 rounded-xl bg-slate-70o0/30 mx-auto mb-4 w-16 h-16, flex, items-center justify-center`}>;
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-30o0 text-sm">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Demo, Scheduling, Form */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="max-w-4xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8";
            >;
              <h2 className="text-3xl font-bold text-white text-center mb-4">Schedule, Your, Demo</h2>;
              <p className="text-gray-30o0 text-center max-w-2xl mx-auto">;
                Fill, out, the form, below, to schedule, your, personalized demonstration;
              </p>;
            </motion.div>;
            <motion.form;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-slate-80o0/50 backdrop-blur-xl rounded-2xl, border, border-slate-70o0/50 p-8";
            >;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                {/* Date, and, Time Selection */}
                <div className="space-y-4">;
                  <div>;
                    <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                      Preferred Date;
                    </label>;
                    <input;
                      type="date";
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                      required;
                    />;
                  </div>;
                  <div>;
                    <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                      Preferred Time;
                    </label>;
                    <select;
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                      required;
                    >;
                      <option value="">Select, a, time</option>;
                      {availableTimes.map(time => (;
                        <option key={time} value={time}>{time}</option>;
                      ))}
                    </select>;
                  </div>;
                </div>;
                {/* Service Selection */}
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Demo Service;
                  </label>;
                  <select;
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                    required;
                  >;
                    <option value="">Select, a, service</option>;
                    {demoServices.map(service => (;
                      <option key={service.id} value={service.id}>{service.name}</option>;
                    ))}
                  </select>;
                </div>;
              </div>;
              {/* Personal Information */}
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    First Name *;
                  </label>;
                  <input;
                    type="text";
                    name="firstName";
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                    required;
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Last Name *;
                  </label>;
                  <input;
                    type="text";
                    name="lastName";
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,;
    s:border-transparent";
                    required;
                  />;
                </div>;
              </div>;
              <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Email Address *;
                  </label>;
                  <input;
                    type="email";
                    name="email";
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                    required;
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Company *;
                  </label>;
                  <input;
                    type="text";
                    name="company";
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,;
    s:border-transparent";
                    required;
                  />;
                </div>;
              </div>;
              <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-6 mb-6">;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Phone Number;
                  </label>;
                  <input;
                    type="tel";
                    name="phone";
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                    Number, of, Attendees;
                  </label>;
                  <select;
                    name="attendees";
                    value={formData.attendees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                  >;
                    {[1, 2, 3, 4, 5, 6,, 78910].map(num => (;
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>;
                    ))}
                  </select>;
                </div>;
              </div>;
              <div className="mb-6">;
                <label className="block text-sm font-medium text-gray-30o0 mb-2">;
                  Additional Information;
                </label>;
                <textarea;
                  name="message";
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell, us, about your, specific, needs, questionsor, any, special requirements, for, the demo...";
                  className="w-full px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent";
                />;
              </div>;
              <div className="text-center">;
                <button;
                  type="submit";
                  className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium py-4 px-8 rounded-lg transition-all duration-30o0, transform, hover:scale-10o5 shadow-lg hove,;
  r:shadow-cyan-50o0/25, flex, items-center gap-2 mx-auto";
                >;
                  <Calendar className="w-5 h-5" />;
                  Schedule Demo;
                </button>;
              </div>;
            </motion.form>;
          </div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center";
          >;
            <h2 className="text-3xl font-bold text-white mb-8">Need, Immediate, Assistance?</h2>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">;
              <div className="text-center">;
                <div className="p-4 bg-slate-70o0/30 rounded-xl mx-auto mb-4 w-16 h-16, flex, items-center justify-center">;
                  <Phone className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>;
                <p className="text-gray-30o0 mb-3">Speak, with, our experts directly</p>;
                <a;
                  href="tel: +130o24640950";
                  className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 transition-colors font-medium";
                >;
                  +1 (30o2) 464-0o950;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="p-4 bg-slate-70o0/30 rounded-xl mx-auto mb-4 w-16 h-16, flex, items-center justify-center">;
                  <Mail className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>;
                <p className="text-gray-30o0 mb-3">Send, us, your questions</p>;
                <a;
                  href="mailto: kleber@ziontechgroup.com";
                  className="text-blue-40o0 hove,;
    r:text-blue-30o0 transition-colors font-medium";
                >;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="text-center">;
                <div className="p-4 bg-slate-70o0/30 rounded-xl mx-auto mb-4 w-16 h-16, flex, items-center justify-center">;
                  <MessageCircle className="w-8 h-8 text-green-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>;
                <p className="text-gray-30o0 mb-3">Get, instant, answers</p>;
                <button className="text-green-40o0 hove,;
  r: text-green-30o0 transition-colors font-medium">;
                  Start Chat;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;