import { motion } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Rocket, 
  Phone, 
  Mail, 
  Calendar, 
  Star, 
  Award, 
  Building, 
  Wrench, 
  Settings, 
  Database, 
  Server, 
  Network, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Info, 
  ArrowRight} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function OnsiteSupport() {
  const supportServices = [
    {
      title: 'Technical Support',
      description: 'Expert technical assistance at your location',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Hardware troubleshooting and repair',
        'Software installation and configuration',
        'Network infrastructure support',
        'System optimization and maintenance'
      ]
    },
    {
      title: 'Emergency Response',
      description: '24/7 emergency support for critical issues',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      services: [
        'Critical system failures',
        'Security incidents',
        'Data recovery assistance',
        'Business continuity support'
      ]
    },
    {
      title: 'Preventive Maintenance',
      description: 'Regular maintenance to prevent issues',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      services: [
        'System health checks',
        'Performance optimization',
        'Security updates',
        'Capacity planning'
      ]
    },
    {
      title: 'Training & Consultation',
      description: 'Staff training and strategic consultation',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      services: [
        'User training programs',
        'Best practices guidance',
        'Technology consulting',
        'Process optimization'
      ]
    }
  ];

  const coverageAreas = [
    {
      title: 'Primary Service Area',
      description: 'Delaware and surrounding regions',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500',
      areas: [
        'Delaware (All counties)',
        'Eastern Pennsylvania',
        'Southern New Jersey',
        'Northern Maryland'
      ],
      responseTime: '2-4 hours'
    },
    {
      title: 'Extended Coverage',
      description: 'Northeast and Mid-Atlantic regions',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      areas: [
        'New York Metro Area',
        'Washington DC Metro',
        'Philadelphia Metro',
        'Baltimore Metro'
      ],
      responseTime: '4-8 hours'
    },
    {
      title: 'National Coverage',
      description: 'Available nationwide for enterprise clients',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      areas: [
        'Major metropolitan areas',
        'Enterprise client locations',
        'Strategic partnerships',
        'Emergency response'
      ],
      responseTime: '8-24 hours'
    }
  ];

  const supportTiers = [
    {
      title: 'Basic Support',
      description: 'Essential onsite support for small businesses',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '4-hour response time',
        'Business hours support',
        'Basic troubleshooting',
        'Preventive maintenance'
      ],
      pricing: 'Starting at $150/hour'
    },
    {
      title: 'Professional Support',
      description: 'Comprehensive support for growing businesses',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
      features: [
        '2-hour response time',
        'Extended hours support',
        'Advanced troubleshooting',
        'Priority scheduling',
        'Monthly maintenance visits'
      ],
      pricing: 'Starting at $200/hour'
    },
    {
      title: 'Enterprise Support',
      description: 'Premium support for large organizations',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      features: [
        '1-hour response time',
        '24/7 availability',
        'Dedicated support team',
        'Custom maintenance plans',
        'Strategic consultation'
      ],
      pricing: 'Custom pricing'
    }
  ];

  const responseProcess = [
    {
      step: '1',
      title: 'Issue Reporting',
      description: 'Report your issue through our support channels',
      icon: Phone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'Our team assesses the issue and determines response',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '3',
      title: 'Dispatch',
      description: 'Technician is dispatched to your location',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '4',
      title: 'Resolution',
      description: 'Issue is resolved and documented',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '5',
      title: 'Follow-up',
      description: 'Post-resolution support and documentation',
      icon: Mail,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const contactInfo = [
    {
      title: 'Onsite Support Team',
      description: 'For immediate onsite support requests',
      email: 'onsite@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {
      title: 'Emergency Support',
      description: '24/7 emergency response hotline',
      email: 'emergency@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: 'Available 24/7 for critical issues'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Onsite Support - Zion Tech Group"
        description="Get expert onsite technical support from Zion Tech Group. Fast response times, comprehensive coverage, and professional technicians at your location."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Onsite Technical Support
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get expert technical support right at your location. Our certified technicians 
              provide fast, reliable, and professional onsite assistance for all your IT needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why Onsite Support */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Choose Onsite Support?
          </h2>
          <p className="text-slate-300 max-w-4xl mx-auto">
            Sometimes remote support just isn't enough. Our onsite technicians provide hands-on 
            assistance, faster problem resolution, and personalized service that ensures your 
            systems are running at peak performance.
          </p>
        </motion.div>
      </div>

      {/* Support Services */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Onsite Support Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Areas */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Service Coverage Areas
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coverageAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm">{area.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-slate-300 font-medium">Coverage:</h4>
                  {area.areas.map((location, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{location}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-slate-400 text-sm">Response Time:</span>
                  <div className="text-slate-300 font-medium">{area.responseTime}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Tiers */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Support Tiers & Pricing
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.title}</h3>
                  <p className="text-slate-400 text-sm">{tier.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-slate-300 font-medium">Features:</h4>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700 text-center">
                    <div className="text-slate-400 text-sm">Starting at</div>
                    <div className="text-green-400 font-bold text-lg">{tier.pricing}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Process */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Our Response Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {responseProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Benefits of Onsite Support
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Faster Resolution</h3>
                  <p className="text-slate-300 text-sm">Direct access to hardware and systems means faster problem identification and resolution.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Enhanced Security</h3>
                  <p className="text-slate-300 text-sm">Our technicians follow strict security protocols and maintain confidentiality of your systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personalized Service</h3>
                  <p className="text-slate-300 text-sm">Face-to-face interaction allows for better understanding of your specific needs and environment.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Tool className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Hands-on Expertise</h3>
                  <p className="text-slate-300 text-sm">Physical access to equipment enables comprehensive diagnostics and repairs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Reduced Downtime</h3>
                  <p className="text-slate-300 text-sm">Quick onsite response minimizes business disruption and productivity loss.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Knowledge Transfer</h3>
                  <p className="text-slate-300 text-sm">Learn from our experts and gain insights to prevent future issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Get Onsite Support
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
              <p className="text-slate-400 mb-6">{contact.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-sm font-medium">@</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-sm font-medium">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-sm font-medium">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contact.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for Onsite Support?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Don't let technical issues slow down your business. Contact us today to schedule 
            onsite support or discuss your technical needs.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Schedule Onsite Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}