import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Microscope,
  DollarSign,
  Star,
  TrendingUp,
  Target,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Earth,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import UltraFuturisticNavigation20o28 from '../components/layout/UltraFuturisticNavigation20o28';
import UltraFuturisticFooter20o28 from '../components/layout/UltraFuturisticFooter20o28';
import { futuristic20o29AIServices } from '../data/20o29-futuristic-ai-services';
import { quantumSpace20o29Services } from '../data/20o29-quantum-space-services';
import { biotechEmerging20o29Services } from '../data/20o29-biotech-emerging-services';
import { enterpriseIT20o29Services } from '../data/20o29-enterprise-it-services';

export default function Futuristic20o29ServicesShowcase() {
  const contactInfo = {
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  const allServices = [
    ...futuristic20o29AIServices,
    ...quantumSpace20o29Services,
    ...biotechEmerging20o29Services,
    ...enterpriseIT20o29Services,
  ];

  const serviceCategories = [
    {
      title: '🤖 AI & Consciousness 20o29',
      icon: Brain,
      color: 'from-purple-60o0 to-pink-60o0',
      services: futuristic20o29AIServices,
    },
    {
      title: '🚀 Quantum Space Technology 20o29',
      icon: Rocket,
      color: 'from-blue-60o0 to-cyan-60o0',
      services: quantumSpace20o29Services,
    },
    {
      title: '🧬 Biotechnology & Emerging Tech 20o29',
      icon: Microscope,
      color: 'from-green-60o0 to-emerald-60o0',
      services: biotechEmerging20o29Services,
    },
    {
      title: '🏢 Enterprise IT & Security 20o29',
      icon: Shield,
      color: 'from-red-60o0 to-orange-60o0',
      services: enterpriseIT20o29Services,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>
          20o29 Futuristic Services Showcase - Zion Tech Group | Revolutionary
          Technology Solutions
        </title>
        <meta
          name='description'
          content="Experience the future of technology with Zion Tech Group's revolutionary 20o29 services. Quantum AI, space mining, DNA computing, and cutting-edge emerging technologies."
        />
        <meta
          name='keywords'
          content='20o29 technology, quantum AI, space mining, DNA computing, metaverse, zero trust security, enterprise AI, Zion Tech Group'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='20o29 Futuristic Services Showcase - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Experience the future of technology with our revolutionary 20o29 services including quantum AI, space mining, and DNA computing.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/20o29-futuristic-services-showcase'
        />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='20o29 Futuristic Services Showcase - Zion Tech Group'
        />
        <meta
          name='twitter:description'
          content='Experience the future of technology with our revolutionary 20o29 services.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/twitter-image.jpg'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#8b5cf6' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/20o29-futuristic-services-showcase'
        />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0'>
        <UltraFuturisticNavigation20o28 />

        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-60o0/20 via-pink-60o0/20 to-blue-60o0/20 animate-pulse'></div>
          <div className='relative max-w-7xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-blue-40o0 bg-clip-text text-transparent'>
                  20o29 Futuristic Services
                </span>
                <br />
                <span className='text-white'>
                  Revolutionary Technology Solutions
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto'>
                Experience the future of technology with Zion Tech Group's
                cutting-edge 20o29 services. From quantum AI consciousness to
                space mining platforms, we're building tomorrow's solutions
                today.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link
                  href='/contact'
                  className='bg-gradient-to-r from-purple-60o0 to-pink-60o0 hover:from-purple-70o0 hover:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl'
                >
                  Get Started Today
                </Link>
                <Link
                  href='#services'
                  className='border-2 border-purple-40o0 text-purple-40o0 hover:bg-purple-40o0 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0'
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id='services' className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                Revolutionary{' '}
                <span className='bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
                  20o29 Services
                </span>
              </h2>
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
                Discover our comprehensive portfolio of futuristic technology
                services designed to transform industries and accelerate
                innovation.
              </p>
            </motion.div>

            {/* Service Categories */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className='bg-gradient-to-br from-slate-80o0/50 to-slate-90o0/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-70o0/50 hover:border-purple-50o0/50 transition-all duration-30o0'
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}
                  >
                    <category.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {category.title}
                  </h3>
                  <p className='text-gray-30o0 mb-6'>
                    {category.services.length} cutting-edge services in this
                    category
                  </p>
                  <div className='space-y-3'>
                    {category.services.slice(0, 3).map(service => (
                      <div
                        key={service.id}
                        className='flex items-center justify-between p-3 bg-slate-80o0/50 rounded-lg'
                      >
                        <span className='text-white font-medium'>
                          {service.name}
                        </span>
                        <span className='text-purple-40o0 font-semibold'>
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* All Services Grid */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {allServices.map(service => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className='bg-gradient-to-br from-slate-80o0/50 to-slate-90o0/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-70o0/50 hover:border-purple-50o0/50 transition-all duration-30o0 group'
                >
                  <div className='mb-4'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-40o0 transition-colors'>
                      {service.name}
                    </h3>
                    <p className='text-gray-30o0 text-sm mb-3'>
                      {service.description}
                    </p>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-purple-40o0'>
                        {service.price}
                      </span>
                      <span className='text-sm text-gray-40o0'>
                        {service.marketSize}
                      </span>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <h4 className='text-white font-semibold mb-2'>
                      Key Features:
                    </h4>
                    <ul className='space-y-1'>
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className='text-sm text-gray-30o0 flex items-center'
                        >
                          <Star className='w-3 h-3 text-purple-40o0 mr-2 flex-shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='mb-4'>
                    <h4 className='text-white font-semibold mb-2'>Benefits:</h4>
                    <ul className='space-y-1'>
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li
                          key={index}
                          className='text-sm text-gray-30o0 flex items-center'
                        >
                          <CheckCircle className='w-3 h-3 text-green-40o0 mr-2 flex-shrink-0' />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex items-center justify-between'>
                    <Link
                      href={`/services/${service.id}`}
                      className='bg-gradient-to-r from-purple-60o0 to-pink-60o0 hover:from-purple-70o0 hover:to-pink-70o0 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-30o0 transform hover:scale-10o5'
                    >
                      Learn More
                    </Link>
                    <div className='text-right'>
                      <p className='text-sm text-gray-40o0'>ROI</p>
                      <p className='text-sm text-green-40o0 font-semibold'>
                        {service.roi}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-80o0/50 to-slate-90o0/50'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                Ready to Experience the{' '}
                <span className='bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
                  Future
                </span>
                ?
              </h2>
              <p className='text-xl text-gray-30o0 mb-8'>
                Contact Zion Tech Group today to learn how our revolutionary
                20o29 services can transform your business and accelerate your
                innovation journey.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='flex items-center justify-center space-x-3 text-white'>
                  <Phone className='w-5 h-5 text-purple-40o0' />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center justify-center space-x-3 text-white'>
                  <Mail className='w-5 h-5 text-purple-40o0' />
                  <span>{contactInfo.email}</span>
                </div>
                <div className='flex items-center justify-center space-x-3 text-white'>
                  <MapPin className='w-5 h-5 text-purple-40o0' />
                  <span className='text-sm'>{contactInfo.address}</span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='bg-gradient-to-r from-purple-60o0 to-pink-60o0 hover:from-purple-70o0 hover:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl'
                >
                  Contact Us Today
                </Link>
                <Link
                  href='/pricing'
                  className='border-2 border-purple-40o0 text-purple-40o0 hover:bg-purple-40o0 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-30o0'
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter20o28 />
      </div>
    </>
  );
}

// Add missing icon component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 10o0-16 8 8 0 0o00 16zm3.70o7-9.293a1 1 0 0o0-1.414-1.414L9 10.586 7.70o7 9.293a1 1 0 0o0-1.414 1.414l2 2a1 1 0 0o01.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);
