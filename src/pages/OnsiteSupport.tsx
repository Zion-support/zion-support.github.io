import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Wrench, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Server,
  Network,
  Database,
  Monitor,
  HardDrive,
  Router
} from 'lucide-react';

export default function OnsiteSupport() {
  const services = [
    {
      icon: Server,
      title: 'Server Maintenance',
      description: 'Proactive server monitoring, updates, and optimization',
      features: ['Hardware diagnostics', 'Performance tuning', 'Security patches', 'Backup verification']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Complete network setup, troubleshooting, and optimization',
      features: ['WiFi optimization', 'Cable management', 'Switch configuration', 'Network security']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database optimization, backup, and recovery services',
      features: ['Performance tuning', 'Backup strategies', 'Recovery procedures', 'Security hardening']
    },
    {
      icon: Monitor,
      title: 'Workstation Support',
      description: 'Desktop and laptop setup, maintenance, and troubleshooting',
      features: ['OS installation', 'Software deployment', 'Hardware upgrades', 'Virus removal']
    },
    {
      icon: HardDrive,
      title: 'Storage Solutions',
      description: 'Storage system design, implementation, and maintenance',
      features: ['RAID configuration', 'Backup systems', 'Cloud integration', 'Data recovery']
    },
    {
      icon: Router,
      title: 'Security Implementation',
      description: 'Comprehensive security setup and monitoring',
      features: ['Firewall configuration', 'VPN setup', 'Access control', 'Security audits']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Response',
      description: 'Emergency support available around the clock'
    },
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Microsoft, Cisco, and CompTIA certified experts'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Assigned technicians familiar with your infrastructure'
    },
    {
      icon: CheckCircle,
      title: 'Preventive Maintenance',
      description: 'Regular checkups to prevent issues before they occur'
    }
  ];

  const responseTimes = [
    { priority: 'Critical', time: '2-4 hours', description: 'System down, business impact' },
    { priority: 'High', time: '4-8 hours', description: 'Major functionality affected' },
    { priority: 'Medium', time: '24 hours', description: 'Minor issues, some impact' },
    { priority: 'Low', time: '48 hours', description: 'General maintenance, no impact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Onsite IT Support Services - Zion Tech Group"
        description="Professional onsite IT support services with certified technicians. 24/7 emergency response, preventive maintenance, and comprehensive infrastructure support."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Onsite Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From emergency repairs to preventive maintenance, our certified technicians 
              handle all aspects of your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Onsite Support?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the difference of having certified technicians at your location 
              with our comprehensive onsite support services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
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

      {/* Response Times */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Guaranteed Response Times
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We understand the critical nature of IT issues and provide 
              guaranteed response times based on priority levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((item, index) => (
              <motion.div
                key={item.priority}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Professional Onsite Support?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Don't let IT issues slow down your business. Our certified technicians 
              are ready to provide immediate onsite support and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}