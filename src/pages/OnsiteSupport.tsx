import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from "../components/SEO";
import { Wrench, 
  Clock, 
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
  ArrowRight,
  Globe
} from 'lucide-react';
import { SEO } from "../components/SEO";

export default function OnsiteSupport(...args[]):  {
  const services = [
    {
      icon: Server,
      title: 'Server Maintenance',
      description: 'Proactive server monitoring, updates, and optimization',
      features['Hardware diagnostics', 'Performance tuning', 'Security patches', 'Backup verification']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Complete network setup, troubleshooting, and optimization',
      features['WiFi optimization', 'Cable management', 'Switch configuration', 'Network security']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database optimization, backup, and recovery services',
      features['Performance tuning', 'Backup strategies', 'Recovery procedures', 'Security hardening']
    },
    {
      title: 'Training & Consultation',
      description: 'Staff training and strategic consultation',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      services: [;
        'User training programs',;
        'Best practices guidance',;
        'Technology consulting',;
        'Process optimization';
      ];
    };
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Response',
      description: 'Emergency support available around the clock'
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
        'Major metropolitan areas',;
        'Enterprise client locations',;
        'Strategic partnerships',;
        'Emergency response';
      ],;
      responseTime: '8-24 hours';
    };
  ];

  const supportTiers = [
    {
      title: 'Basic Support',
      description: 'Essential onsite support for small businesses',
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Microsoft, Cisco, and CompTIA certified experts'
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
        '24/7 availability',;
        'Dedicated support team',;
        'Custom maintenance plans',;
        'Strategic consultation';
      ],;
      pricing: 'Custom pricing';
    };
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
      title: 'Dedicated Team',
      description: 'Assigned technicians familiar with your infrastructure'
    },
    {
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500'
    },
    {;
      step: '5',;
      title: 'Follow-up',;
      description: 'Post-resolution support and documentation',;
      icon: Mail,;
      color: 'from-yellow-500 to-orange-500';
    };
  ];

  const contactInfo = [
    {
      title: 'Onsite Support Team',
      description: 'For immediate onsite support requests',
      email: 'onsite@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    {;
      title: 'Emergency Support',;
      description: '24/7 emergency response hotline',;
      email: 'emergency@ziontechgroup.com',;
      phone: '+1 302 464 0950',;
      address: 'Available 24/7 for critical issues';
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Onsite IT Support Services - Zion Tech Group"
        description="Professional onsite IT support services with certified technicians. 24/7 emergency response, preventive maintenance, and comprehensive infrastructure support."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Wrench className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Onsite IT Support
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Professional onsite technical support with certified engineers. 
              We bring expertise directly to your location for immediate problem resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Onsite Visit
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Onsite Support */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.2 






}}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"

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
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.3 






}}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Onsite Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From emergency repairs to preventive maintenance, our certified technicians 
              handle all aspects of your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index)  => (
              <motion.div
                key={service.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.4 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.5 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Service Coverage Areas
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coverageAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

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
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 0.7 






}}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Onsite Support?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the difference of having certified technicians at your location 
              with our comprehensive onsite support services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={tier.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.6,
  delay: 0.8 + index * 0.1 






}}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Process */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.9 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Our Response Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {responseProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 1.0 + index * 0.1 






}}
              className="text-center"

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
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.6,
  delay: 1.1 






}}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Guaranteed Response Times
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We understand the critical nature of IT issues and provide 
              guaranteed response times based on priority levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((item, index)  => (
              <motion.div
                key={item.priority}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  item.priority === 'Critical' ? 'bg-red-500' :
                  item.priority === 'High' ? 'bg-orange-500' :
                  item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}>
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.priority}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{item.time}</div>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 1.2 






}}
          className="text-3xl font-bold text-white text-center mb-12"

          Get Onsite Support
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -20 : 20 






}}
              animate = {
  { opacity: 1,
  x: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 1.3 + index * 0.1 






}}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"

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
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 1.4 






}}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center"

          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for Onsite Support?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Don't let technical issues slow down your business. Contact us today to schedule
            onsite support or discuss your technical needs.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto">;
            <span>Schedule Onsite Support</span>;
            <ArrowRight className="w-4 h-4" />;
          </button>;
        </motion.div>;
      </div>;
    </div>;
  );
}
