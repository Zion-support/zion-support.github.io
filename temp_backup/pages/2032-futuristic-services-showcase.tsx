import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Phone,
  Zap,
  DollarSign,
  Shield,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Sparkles,
  Atom,
  Dna,
  Cpu,
  Target,
  Microscope,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  Globe,
} from 'lucide-react',
import UltraFuturisticNavigation20o32 from '../components/layout/UltraFuturisticNavigation20o32',
import UltraFuturisticFooter20o32 from '../components/layout/UltraFuturisticFooter20o32',
import { futuristicInnovations20o31 } from '../data/20o31-futuristic-innovations',
import { enterpriseITSolutions20o31 } from '../data/20o31-enterprise-it-solutions',
import { innovativeMicroSaas20o31 } from '../data/20o31-innovative-micro-saas',
const contactInfo = {
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const serviceCategories = [
  {
    title: '🚀 20o32 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    icon: Brain,
    color: 'from-violet-60o0 via-purple-60o0 to-indigo-60o0',
    services: futuristicInnovations20o31.filter(s => s.category.includes('AI'))
  },
  {
    title: '⚛️ 20o32 Quantum & Emerging Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-60o0 via-blue-60o0 to-cyan-60o0',
    services: futuristicInnovations20o31.filter(s =>,
      s.category.includes('Quantum')),
  },
  {
    title: '🏙️ 20o32 Enterprise IT Solutions',
    description: 'Autonomous enterprise infrastructure',
    icon: Cpu,
    color: 'from-blue-60o0 via-cyan-60o0 to-teal-60o0',
    services: enterpriseITSolutions20o31
  },
  {
    title: '🌌 20o32 Space & Metaverse Tech',
    description: 'Space exploration and digital reality',
    icon: Rocket,
    color: 'from-teal-60o0 via-emerald-60o0 to-green-60o0',
    services: futuristicInnovations20o31.filter(s =>,
      s.category.includes('Space')),
  },
  {
    title: '🎯 20o32 Innovative Micro SAAS',
    description: 'Cutting-edge micro solutions',
    icon: Target,
    color: 'from-green-60o0 via-yellow-60o0 to-orange-60o0',
    services: innovativeMicroSaas20o31
  },
  {
    title: '🔬 20o32 Research & Development',
    description: 'Breakthrough research solutions',
    icon: Microscope,
    color: 'from-orange-60o0 via-red-60o0 to-pink-60o0',
    services: futuristicInnovations20o31.filter(
      s => s.category.includes('Research') || s.category.includes('Computing'))
  },
],
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    },
  },
},
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
},
export default function FuturisticServicesShowcase20o32() {
  return (
    <>,
      <Head>,
        <title>20o32 Futuristic Services Showcase | Zion Tech Group</title>,
        <meta
          name='description',
          content='Explore our revolutionary 20o32 services including AI consciousness, quantum computing, space technology, and autonomous systems. Leading the future of technology.',
        />,
        <meta
          name='keywords',
          content='AI consciousness, quantum computing, space technology, autonomous systems, futuristic services, Zion Tech Group',
        />,
        <link
          rel='canonical',
          href='https: //ziontechgroup.com/20o32-futuristic-services-showcase',
        />,
        {/* Open Graph */}
        <meta
          property='og: title',
          content='20o32 Futuristic Services Showcase | Zion Tech Group',
        />,
        <meta
          property='og:description',
          content='Explore our revolutionary 20o32 services including AI consciousness, quantum computing, space technology, and autonomous systems.',
        />,
        <meta
          property='og: url',
          content='https://ziontechgroup.com/20o32-futuristic-services-showcase',
        />,
        <meta property='og:type' content='website' />,
        {/* Twitter */}
        <meta name='twitter: card' content='summary_large_image' />,
        <meta
          name='twitter:title',
          content='20o32 Futuristic Services Showcase | Zion Tech Group',
        />,
        <meta
          name='twitter:description',
          content='Explore our revolutionary 20o32 services including AI consciousness, quantum computing, space technology, and autonomous systems.',
        />,
      </Head>,
      <UltraFuturisticNavigation20o32 />,
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-90o0 to-black'>,
        {/* Animated Background */}
        <div className='absolute inset-0'>,
          <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl animate-pulse'></div>,
          <div className='absolute top-0 right-0 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl animate-pulse delay-10o00'></div>,
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-pink-50o0/10 rounded-full blur-3xl animate-pulse delay-20o00'></div>,
        </div>,
        <div className='relative z-10 text-center px-4 sm: px-6 lg:px-8 max-w-6xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>,
            <h1 className='text-5xl md: text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent leading-tight'>,
              20o32 Futuristic Services,
            </h1>,
            <p className='text-2xl md:text-3xl text-slate-30o0 max-w-4xl mx-auto leading-relaxed'>,
              Revolutionary AI consciousness, quantum computing, space,
              technology, and autonomous systems. Leading the future of,
              technology with breakthrough innovations.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'>,
              <Link
                href='/contact',
                className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 shadow-2xl shadow-cyan-50o0/30 hover:shadow-cyan-50o0/50 transform hover:scale-10o5 text-lg'>,
                Get Started Today,
              </Link>,
              <Link
                href='/market-pricing',
                className='px-8 py-4 border-2 border-cyan-50o0/50 text-cyan-40o0 font-semibold rounded-xl hover:bg-cyan-50o0/10 hover:border-cyan-40o0 transition-all duration-30o0 text-lg'>,
                View Pricing,
              </Link>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Services Showcase */}
      <section className='py-20 bg-gradient-to-b from-gray-90o0 to-black'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <motion.div,
            variants={containerVariants}
            initial='hidden',
            whileInView='visible',
            viewport={{ once: true }}
            className='space-y-20'>,
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div,
                key={categoryIndex}
                variants={itemVariants}
                className='space-y-12'>,
                {/* Category Header */}
                <div className='text-center'>,
                  <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-2xl border border-cyan-50o0/30 mb-6'>,
                    <category.icon className='w-10 h-10 text-cyan-40o0' />,
                  </div>,
                  <h2 className='text-4xl md: text-5xl font-bold text-white mb-4'>,
                    {category.title}
                  </h2>,
                  <p className='text-xl text-slate-30o0 max-w-3xl mx-auto'>,
                    {category.description}
                  </p>,
                </div>,
                {/* Services Grid */}
                <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
                  {category.services.map((service, serviceIndex) => (
                    <motion.div,
                      key={service.id}
                      variants={itemVariants}
                      className='group relative bg-gradient-to-br from-gray-80o0/50 to-gray-90o0/50 rounded-2xl border border-cyan-50o0/30 hover: border-cyan-40o0/50 p-6 transition-all duration-30o0 hover:shadow-2xl hover:shadow-cyan-50o0/20 hover:transform hover:scale-10o5'>,
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className='absolute -top-3 -right-3 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg'>,
                          POPULAR,
                        </div>)}
,
                      {/* Service Icon */}
                      <div className='text-4xl mb-4'>{service.icon}</div>,
                      {/* Service Name */}
                      <h3 className='text-xl font-bold text-white mb-3 group-hover: text-cyan-30o0 transition-colors'>,
                        {service.name}
                      </h3>,
                      {/* Tagline */}
                      <p className='text-slate-30o0 mb-4 leading-relaxed'>,
                        {service.tagline}
                      </p>,
                      {/* Price */}
                      <div className='flex items-center justify-between mb-4'>,
                        <div className='text-2xl font-bold text-cyan-40o0'>,
                          {service.price}
                          <span className='text-sm text-slate-40o0 font-normal'>,
                            {service.period}
                          </span>,
                        </div>,
                        <div className='flex items-center space-x-1'>,
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating),
                                  ? 'text-yellow-40o0 fill-current',
                                  : 'text-slate-60o0'}`}
                            />))}
                          <span className='text-sm text-slate-40o0 ml-2'>,
                            ({service.reviews}),
                          </span>,
                        </div>,
                      </div>,
                      {/* Features */}
                      <div className='space-y-2 mb-6'>,
                        {service.features,
                          .slice(0, 4),
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex items-center space-x-2'>,
                              <CheckCircle className='w-4 h-4 text-green-40o0 flex-shrink-0' />,
                              <span className='text-sm text-slate-30o0'>,
                                {feature}
                              </span>,
                            </div>))}
                      </div>,
                      {/* Market Position */}
                      <div className='bg-black/30 rounded-lg p-3 mb-4'>,
                        <p className='text-xs text-slate-30o0 leading-relaxed'>,
                          {service.marketPosition}
                        </p>,
                      </div>,
                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className='w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-medium rounded-lg hover: from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 transform hover:scale-10o5 group-hover:shadow-lg group-hover:shadow-cyan-50o0/30'>,
                        Learn More,
                        <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />,
                      </Link>,
                      {/* Trial Info */}
                      <div className='mt-4 text-center'>,
                        <span className='text-xs text-slate-40o0'>,
                          {service.trialDays}-day free trial • Setup in{' '}
                          {service.setupTime}
                        </span>,
                      </div>,
                    </motion.div>))}
                </div>,
              </motion.div>))}
          </motion.div>,
        </div>,
      </section>,
      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-b from-black to-gray-90o0'>,
        <div className='max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>,
            <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
              Ready to Transform Your Business?,
            </h2>,
            <p className='text-xl text-slate-30o0 max-w-2xl mx-auto leading-relaxed'>,
              Join the future of technology with our revolutionary 20o32,
              services. Get in touch to discuss how we can help you achieve,
              breakthrough results.,
            </p>,
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto'>,
              <div className='flex items-center justify-center space-x-3 text-cyan-40o0'>,
                <Phone className='w-5 h-5' />,
                <span className='text-lg font-medium'>,
                  {contactInfo.mobile}
                </span>,
              </div>,
              <div className='flex items-center justify-center space-x-3 text-purple-40o0'>,
                <Mail className='w-5 h-5' />,
                <span className='text-lg font-medium'>{contactInfo.email}</span>,
              </div>,
              <div className='flex items-center justify-center space-x-3 text-pink-40o0'>,
                <Globe className='w-5 h-5' />,
                <span className='text-lg font-medium'>ziontechgroup.com</span>,
              </div>,
            </div>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link
                href='/contact',
                className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 shadow-2xl shadow-cyan-50o0/30 hover:shadow-cyan-50o0/50 transform hover:scale-10o5'>,
                Schedule a Consultation,
              </Link>,
              <Link
                href='/market-pricing',
                className='px-8 py-4 border-2 border-cyan-50o0/50 text-cyan-40o0 font-semibold rounded-xl hover:bg-cyan-50o0/10 hover:border-cyan-40o0 transition-all duration-30o0'>,
                View Detailed Pricing,
              </Link>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      <UltraFuturisticFooter20o32 />,
    </>)}
,