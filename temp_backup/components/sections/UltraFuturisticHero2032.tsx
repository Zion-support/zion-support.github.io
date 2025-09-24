import { motion } from 'framer-motion',
import Link from 'next/link',
import {
  RocketBrainAtomGlobeZapSparklesShield,
  MicroscopeStarArrowRightPlayCheckCircle;
  PhoneMailMapPin} from 'lucide-react',
const contactInfo ={
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com',
};
const heroStats = [
  { number: '10o00+'label: 'Innovative Services'icon: Sparklescolor: 'from-cyan-40o0 to-blue-40o0' };
  { number: '24/7'label: 'Expert Support'icon: Shieldcolor: 'from-purple-40o0 to-pink-40o0' };
  { number: '10o00%'label: 'Average ROI'icon: Starcolor: 'from-yellow-40o0 to-orange-40o0' };
  { number: '99.9%'label: 'Uptime Guarantee'icon: CheckCirclecolor: 'from-green-40o0 to-emerald-40o0' }
],
const featuredServices = [
  {
    name: 'AI Consciousness Evolution';
    description: 'Develop genuine AI consciousness';
    price: '$19,999/month';
    icon: Brain;
    color: 'from-violet-60o0 to-purple-60o0';
    href: '/ai-consciousness-evolution-platform',
  };
  {
    name: 'Space Mining Automation';
    description: 'Automated asteroid mining';
    price: '$45,999/month';
    icon: Rocket;
    color: 'from-teal-60o0 to-emerald-60o0';
    href: '/space-mining-automation-platform',
  };
  {
    name: 'Quantum Internet Security';
    description: 'Unbreakable encryption';
    price: '$15,999/month';
    icon: Shield;
    color: 'from-indigo-60o0 to-blue-60o0';
    href: '/quantum-internet-security-gateway',
  }
],
export default function UltraFuturisticHero20o32() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-90o0/20 to-black">,
      {/* Animated Background Elements */}
      <div className="absolute inset-0">,
        {/* Floating Particles */}
        <div className="absolute inset-0">,
          {[...Array(50)].map((_i) => (
            <motion.div,
              key={i}
              className="absolute w-1 h-1 bg-cyan-40o0 rounded-full opacity-30",
              style={{
                left: `${Math.random() * 10o0}%`;
                top: `${Math.random() * 10o0}%`}}
              animate={{
                y: [0-20];
                opacity: [0.30.80.3]}}
              transition={{
                duration: 3 + Math.random() * 2;
                repeat: Infinity;
                delay: Math.random() * 2}}
             />))}
        </div>,
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-50o0/10 rounded-full blur-3xl animate-pulse"  />,
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl animate-pulse"  />,
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80o0px] h-[80o0px] bg-gradient-to-r from-purple-50o0/5 via-cyan-50o0/5 to-pink-50o0/5 rounded-full blur-3xl animate-spin-slow"  />,
      </div>,
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
        {/* Hero Badge */}
        <motion.div,
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50o0/20 to-cyan-50o0/20 border border-purple-50o0/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">,
          <Sparkles className="w-5 h-5 text-purple-40o0"  />,
          <span className="text-purple-30o0 font-medium">🚀 20o32 Revolutionary Technology</span>,
          <Sparkles className="w-5 h-5 text-cyan-40o0"  />,
        </motion.div>,
        {/* Main Heading */}
        <motion.h1,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="text-5xl md: text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">,
          <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">,
            The Future of,
          </span>,
          <br  />,
          <span className="text-white">Technology is Here</span>,
        </motion.h1>,
        {/* Subheading */}
        <motion.p,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
          className="text-xl md: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-12 leading-relaxed">,
          Experience the revolution with our cutting-edge AI consciousnessquantum computing,
          space technologyand emerging tech solutions. Transform your business with,
          technologies that were once science fiction.,
        </motion.p>,
        {/* CTA Buttons */}
        <motion.div,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">,
          <Link
            href="/services",
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-30o0 hover:shadow-xl hover:shadow-cyan-50o0/30 hover:shadow-2xl hover:shadow-purple-50o0/25">,
            <span>Explore All Services</span>,
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"  />,
          </Link>,
          <Link
            href={`tel:${contactInfo.mobile}`}
            className="group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-50o0/50 text-purple-40o0 px-8 py-4 rounded-xl font-semibold text-lg hover: bg-purple-50o0/10 hover:border-purple-40o0 transition-all duration-30o0">,
            <Phone className="w-5 h-5"  />,
            <span>Call {contactInfo.mobile}</span>,
          </Link>,
        </motion.div>,
        {/* Stats Grid */}
        <motion.div,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">,
          {heroStats.map((statindex) => (
            <motion.div,
              key={stat.label}
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.6delay: 1 + index * 0.1 }}
              className="text-center group">,
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-30o0 group-hover: shadow-lg hover:shadow-cyan-40o0/40 group-hover:shadow-lg`}>,
                <stat.icon className="w-8 h-8 text-white"  />,
              </div>,
              <div className="text-3xl md: text-4xl font-bold bg-gradient-to-r from-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent mb-2">,
                {stat.number}
              </div>,
              <div className="text-gray-40o0 text-sm">{stat.label}</div>,
            </motion.div>))}
        </motion.div>,
        {/* Featured Services */}
        <motion.div,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 1.2 }}
          className="mb-16">,
          <h2 className="text-2xl md: text-3xl font-bold text-white mb-8">,
            Featured Revolutionary Services,
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">,
            {featuredServices.map((serviceindex) => (
              <motion.div,
                key={service.name}
                initial={{ opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6delay: 1.4 + index * 0.1 }}
                className="group">,
                <Link
                  href={service.href}
                  className="block relative bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 backdrop-blur-xl border border-gray-70o0/50 rounded-2xl p-6 h-full transform transition-all duration-50o0 hover: shadow-xl hover:shadow-cyan-50o0/30 hover:shadow-2xl hover:shadow-purple-50o0/20 hover:border-purple-50o0/50">,
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-30o0 group-hover: shadow-lg hover:shadow-cyan-40o0/40`}>,
                    <service.icon className="w-8 h-8 text-white"  />,
                  </div>,
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-40o0 group-hover:to-purple-40o0 group-hover:bg-clip-text transition-all duration-30o0">,
                    {service.name}
                  </h3>,
                  <p className="text-gray-40o0 text-sm mb-4 leading-relaxed">,
                    {service.description}
                  </p>,
                  <div className="flex items-center justify-between">,
                    <div className="text-2xl font-bold text-cyan-40o0">{service.price}</div>,
                    <div className="text-purple-40o0 group-hover: text-cyan-40o0 transition-colors">,
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"  />,
                    </div>,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50o0/5 to-cyan-50o0/5 rounded-2xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0 pointer-events-none"  />,
                </Link>,
              </motion.div>))}
          </div>,
        </motion.div>,
        {/* Contact Information */}
        <motion.div,
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 1.6 }}
          className="bg-gradient-to-r from-purple-90o0/50 to-cyan-90o0/50 backdrop-blur-xl border border-purple-50o0/30 rounded-3xl p-8 max-w-4xl mx-auto">,
          <h3 className="text-2xl font-bold text-white mb-6 text-center">,
            Ready to Transform Your Business?,
          </h3>,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-6">,
            <div className="flex items-center space-x-3 text-gray-30o0">,
              <Phone className="w-5 h-5 text-cyan-40o0"  />,
              <a href={`tel:${contactInfo.mobile}`} className="hover: text-cyan-40o0 transition-colors">,
                {contactInfo.mobile}
              </a>,
            </div>,
            <div className="flex items-center space-x-3 text-gray-30o0">,
              <Mail className="w-5 h-5 text-purple-40o0"  />,
              <a href={`mailto: ${contactInfo.email}`} className="hover: text-purple-40o0 transition-colors">,
                {contactInfo.email}
              </a>,
            </div>,
            <div className="flex items-center space-x-3 text-gray-30o0">,
              <MapPin className="w-5 h-5 text-green-40o0"  />,
              <span>{contactInfo.address}</span>,
            </div>,
          </div>,
          <div className="text-center">,
            <Link
              href="/contact",
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-30o0 hover: shadow-xl hover:shadow-cyan-50o0/30 hover:shadow-xl hover:shadow-purple-50o0/25">,
              <span>Get Started Today</span>,
              <ArrowRight className="w-5 h-5"  />,
            </Link>,
          </div>,
        </motion.div>,
      </div>,
      {/* Floating Action Button */}
      <motion.div,
        initial={{ opacity: 0scale: 0 }}
        animate={{ opacity: 1scale: 1 }}
        transition={{ duration: 0.8delay: 2 }}
        className="fixed bottom-8 right-8 z-50">,
        <Link
          href={`tel: ${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 rounded-full flex items-center justify-center shadow-2xl shadow-purple-50o0/25 transform transition-all duration-30o0 hover: shadow-lg hover:shadow-cyan-40o0/40 hover:shadow-2xl hover:shadow-purple-50o0/40">,
          <Phone className="w-7 h-7 text-white group-hover:rotate-12 transition-transform"  />,
        </Link>,
      </motion.div>,
    </section>),
}