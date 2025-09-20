import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  Calendar
  Clock,
  Users,
  Video,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle
  Star
  Zap
  Brain
  Shield
  Cloud
  Cpu
  Globe
  ArrowRight
  Play
  CalendarDays
  Clock3
  User
  Building
  MessageSquare
  PhoneCall
  Mail as MailIcon
  ExternalLink
} from "lucide-react"
export default function ScheduleDemo() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
  firstNa,
  m: e: '',lastNa,
  m: e: '',ema,
  i: l: '',compa,
  n: y: '',pho,
  n: e: '',attende,
  e: s: 1,messa,
  g: e: ''
})
  const demoServices = [
  {
  id: 'ai-platform',na,
  m: e: 'AI Platform Demo',descripti,
  o: n: 'Experience our comprehensive AI platform with real-time demonstrations',ic,
  o: n: Brain,col,
  o: r: 'from-purple-500 to-pink-500',durati,
  o: n: '45 min',featur,
  e: s: ['AI Model TrainingReal-time Analytics', 'Custom WorkflowsIntegration Examples']
      popul,
  a: r: true
},
  {
  id: 'cybersecurity',na,
  m: e: 'Cybersecurity Solutions',descripti,
  o: n: 'See our advanced security platform in action with threat simulation',ic,
  o: n: Shield,col,
  o: r: 'from-red-500 to-orange-500',durati,
  o: n: '60 min',featur,
  e: s: ['Threat DetectionIncident Response', 'Compliance DashboardSecurity Analytics']
      popul,
  a: r: false
},
  {
  id: 'cloud-infrastructure',na,
  m: e: 'Cloud Infrastructure',descripti,
  o: n: 'Explore our cloud-native solutions and DevOps automation',ic,
  o: n: Cloud,col,
  o: r: 'from-blue-500 to-cyan-500',durati,
  o: n: '50 min',featur,
  e: s: ['Multi-cloud ManagementDevOps Automation', 'Cost OptimizationPerformance Monitoring']
      popul,
  a: r: true
},
  {
  id: 'quantum-computing',na,
  m: e: 'Quantum Computing',descripti,
  o: n: 'Discover quantum algorithms and quantum-classical hybrid solutions',ic,
  o: n: Cpu,col,
  o: r: 'from-indigo-500 to-purple-500',durati,
  o: n: '75 min',featur,
  e: s: ['Quantum AlgorithmsHybrid Solutions', 'Performance BenchmarksUse Case Examples']
      popul,
  a: r: false
},
  {
  id: 'data-analytics',na,
  m: e: 'Data Analytics Platform',descripti,
  o: n: 'Visualize and analyze your data with our advanced analytics tools',ic,
  o: n: Globe,col,
  o: r: 'from-green-500 to-emerald-500',durati,
  o: n: '40 min',featur,
  e: s: ['Real-time DashboardsPredictive Analytics', 'Data VisualizationCustom Reports']
      popul,
  a: r: false
},
  {
  id: 'custom-solution',na,
  m: e: 'Custom Solution Demo',descripti,
  o: n: 'Tailored demonstration based on your specific business needs',ic,
  o: n: Zap,col,
  o: r: 'from-yellow-500 to-orange-500',durati,
  o: n: '60 min',featur,
  e: s: ['Custom WorkflowsIntegration Planning', 'ROI AnalysisImplementation Roadmap']
      popul,
  a: r: false
},
  ]
  const availableTimes = [
  '9: 00 AM,
  9:30 AM', '10: 00 AM1,
  0:30 AM', '11: 00,
  AM1: 1:30 AM'
    '1:00 PM,
  1:30 PM', '2: 00 PM,
  2:30 PM', '3: 00,
  PM: 3:30 PM'
    '4:00 PM,
  4:30 PM', '5: 00 PM'
]
  const demoBenefits = [
  {
  titl,
  e: 'Personalized Experience',descripti,
  o: n: 'Tailored demonstrations based on your business needs and use cases',ic,
  o: n: User,col,
  o: r: 'text-blue-400'
},
  {
  tit,
  l: e: 'Expert Guidance',descripti,
  o: n: 'Learn from our certified professionals with deep industry expertise',ic,
  o: n: Star,col,
  o: r: 'text-yellow-400'
},
  {
  tit,
  l: e: 'Interactive Sessions',descripti,
  o: n: 'Ask questions and explore features in real-time during the demo',ic,
  o: n: MessageSquare,col,
  o: r: 'text-green-400'
},
  {
  tit,
  l: e: 'Follow-up Support',descripti,
  o: n: 'Comprehensive follow-up materials and next steps after your demo',ic,
  o: n: CheckCircle,col,
  o: r: 'text-cyan-400'
},
  ]
  const handleSubmit = (e: React.FormEvent) () => {
  e.preventDefault()
    // Handle form submission
    console.log('Demo request submitte,
  d:', {
  servi,
  c: e: selectedService,da,
  t: e: selectedDate,ti,
  m: e: selectedTime
      ...formData
})
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) () => {
  const { name, value } = e.target
    setFormData(prev => ({
  ...prev
      [name]: value
}))
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Schedule Demo - Zion Tech Group"
        description="Schedule a personalized demo of our AI, cybersecurity, cloud, and quantum computing solutions. Experience our technology firsthand with expert guidance."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Schedule Your Demo
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience our cutting-edge technology solutions firsthand. Book a personalized 
              demonstration with our experts and discover how Zion Tech Group can transform your business.
            </p>
            
            {/* Quick Stats */},
  }
            <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Demos Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">45min</div>
                <div className="text-sm text-gray-400">Average Duration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Services */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Choose Your Demo</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Select from our range of specialized demonstrations or request a custom solution demo
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {demoServices.map((service, index) => (
  <motion.div
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className={`bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden,
  hove: r: border-cyan-400/30 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105 cursor-pointer ${
  selectedService === service.id ? 'ring-2 ring-cyan-400/50' : ''
}`}
                onClick={onClick={() => setSelectedService(service.id)},
  },
  }
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.popular && (
  <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    {service.duration},
  }
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature},
  }
                      </div>
                    ))}
                  </div>

                  <div className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 ${
  selectedService === service.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-gray-300,
  hove: r:bg-slate-600/50'
}`}>
                    {selectedService === service.id ? 'Selected' : 'Select Demo'},
  }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Benefits */},
  }
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Why Schedule a Demo?</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Get the most out of your demo experience with our comprehensive approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {demoBenefits.map((benefit, index) => (
  <motion.div
                key={benefit.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center";"
              >
                <div className={`p-4 rounded-xl bg-slate-700/30 mx-auto mb-4 w-16 h-16 flex items-center justify-center`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Scheduling Form */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-8";"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-4">Schedule Your Demo</h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto">
                Fill out the form below to schedule your personalized demonstration
              </p>
            </motion.div>

            <motion.form
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
              viewport={ on,
  c: e: true },
  }
              onSubmit={handleSubmit},
  }
              className="className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8";"
            >
              <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6 mb-6">
                {/* Date and Time Selection */},
  }
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate},
  }
                      onChange={(e) => setSelectedDate(e.target.value)},
  }
                      className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime},
  }
                      onChange={(e) => setSelectedTime(e.target.value)},
  }
                      className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                      required
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map(time => (
  <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Selection */},
  }
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Demo Service
                  </label>
                  <select
                    value={selectedService},
  }
                    onChange={(e) => setSelectedService(e.target.value)},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                    required
                  >
                    <option value="">Select a service</option>
                    {demoServices.map(service => (
  <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */},
  }
              <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500,
  focu: s:border-transparent";"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500,
  focu: s:border-transparent";"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Attendees
                  </label>
                  <select
                    name="attendees"
                    value={formData.attendees},
  }
                    onChange={handleInputChange},
  }
                    className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
  <option key={num} value={num}>{num},
  {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message},
  }
                  onChange={handleInputChange},
  }
                  rows={4},
  }
                  placeholder="Tell us about your specific needs, questions, or any special requirements for the demo..."
                  className="className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500,
  focu: s:border-transparent";"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25 flex items-center gap-2 mx-auto";"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-3">Speak with our experts directly</p>
                <a
                  href="t,
  e: l:+13024640950"
                  className="className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors font-medium";"
                >
                  +1 (302) 464-0950
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3">Send us your questions</p>
                <a
                  href="mail,
  t: o:kleber@ziontechgroup.com"
                  className="className="text-blue-400,
  hove: r:text-blue-300 transition-colors font-medium";"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-3">Get instant answers</p>
                <button className="text-green-400 hove,
  r:text-green-300 transition-colors font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}