import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Users,
  Mail,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Phone,
  Mail as MailIcon,
  MapPin,
} from 'lucide-react';
import UltraFuturisticBackground20o30 from '../components/ui/UltraFuturisticBackground20o30';
import UltraFuturisticNavigation20o30 from '../components/layout/UltraFuturisticNavigation20o30';
import UltraFuturisticFooter20o30 from '../components/layout/UltraFuturisticFooter20o30';

// Service data
const serviceData = {
  name: 'AI Marketing Automation Suite 20o30',
  description: 'Intelligent marketing automation powered by AI',
  price: '$179/month',
  features: [
    {
      title: 'AI-Powered Audience Segmentation',
      description:
        'Intelligent customer segmentation using machine learning to identify high-value prospects and personalize marketing campaigns.',
      icon: Users,
    },
    {
      title: 'Predictive Campaign Optimization',
      description:
        'AI-driven campaign performance prediction and real-time optimization for maximum ROI and engagement.',
      icon: TrendingUp,
    },
    {
      title: 'Intelligent Content Generation',
      description:
        'AI-powered content creation that adapts to audience preferences and generates personalized marketing materials.',
      icon: Target,
    },
    {
      title: 'Multi-Channel Marketing Orchestration',
      description:
        'Seamless coordination across email, social media, web, and mobile channels with AI-powered timing optimization.',
      icon: Globe,
    },
    {
      title: 'Real-Time Performance Analytics',
      description:
        'Advanced analytics dashboard with AI insights, predictive modeling, and automated reporting.',
      icon: BarChart3,
    },
    {
      title: 'Smart Lead Scoring & Nurturing',
      description:
        'AI-powered lead qualification and automated nurturing sequences that adapt to prospect behavior.',
      icon: Zap,
    },
  ],
  marketPosition:
    'Leading AI-powered marketing automation platform for businesses seeking to revolutionize customer acquisition and engagement through intelligent automation and predictive analytics.',
  useCases: [
    'E-commerce marketing automation',
    'B2B lead generation and nurturing',
    'SaaS customer acquisition',
    'Real estate marketing campaigns',
    'Healthcare patient engagement',
    'Financial services marketing',
  ],
  roi: 'Average customer sees 320% ROI within 7 months through improved lead quality, conversion rates, and marketing efficiency.',
  contactInfo: {
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
  },
};

export default function AIMarketingAutomation20o30() {
  const { features, marketPosition, useCases, roi, contactInfo } = serviceData;

  return (
    <>
      <Head>
        <title>{serviceData.name} - Zion Tech Group</title>
        <meta name='description' content={serviceData.description} />
        <meta
          name='keywords'
          content='AI marketing automation, marketing automation, AI marketing, lead generation, Zion Tech Group'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content={`${serviceData.name} - Zion Tech Group`}
        />
        <meta property='og:description' content={serviceData.description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ai-marketing-automation-20o30'
        />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
        <meta property='og:site_name' content='Zion Tech Group' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={`${serviceData.name} - Zion Tech Group`}
        />
        <meta name='twitter:description' content={serviceData.description} />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
      </Head>

      <UltraFuturisticBackground20o30>
        <UltraFuturisticNavigation20o30 />

        <main className='relative z-10'>
          {/* Hero Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8'
              >
                <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-50o0 to-emerald-60o0 rounded-2xl mb-6'>
                  <Target className='w-10 h-10 text-white' />
                </div>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-green-40o0 via-emerald-40o0 to-green-60o0 bg-clip-text text-transparent'>
                    AI Marketing Automation Suite 20o30
                  </span>
                </h1>
                <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>
                  Transform your marketing with AI-powered automation,
                  predictive analytics, and intelligent campaign optimization.
                  Generate more leads, increase conversions, and maximize ROI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
              >
                <div className='text-center'>
                  <div className='text-4xl font-bold text-white mb-2'>$179</div>
                  <div className='text-gray-40o0'>/month</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-40o0 mb-2'>
                    30 Days
                  </div>
                  <div className='text-gray-40o0'>Free Trial</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-emerald-40o0 mb-2'>
                    15 Minutes
                  </div>
                  <div className='text-gray-40o0'>Setup Time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-col sm:flex-row gap-4 justify-center items-center'
              >
                <button className='px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-60o0 text-white rounded-xl font-semibold text-lg hover:from-green-60o0 hover:to-emerald-70o0 transition-all duration-20o0 shadow-lg hover:shadow-xl'>
                  Start Free Trial
                </button>
                <button className='px-8 py-4 border-2 border-green-40o0 text-green-40o0 rounded-xl font-semibold text-lg hover:bg-green-40o0 hover:text-black transition-all duration-20o0'>
                  Schedule Demo
                </button>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-green-90o0/10 to-transparent'></div>
            <div className='max-w-7xl mx-auto relative z-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center mb-16'
              >
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent'>
                    Revolutionary Features
                  </span>
                </h2>
                <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
                  Experience the future of marketing automation with AI-powered
                  insights, predictive analytics, and intelligent campaign
                  management.
                </p>
              </motion.div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group cursor-pointer'
                  >
                    <div className='bg-gradient-to-br from-green-90o0/50 to-emerald-90o0/50 backdrop-blur-xl border border-green-50o0/30 rounded-2xl p-8 h-full hover:from-green-80o0/60 hover:to-emerald-80o0/60 transition-all duration-30o0 hover:scale-10o5'>
                      <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-50o0 to-emerald-60o0 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-30o0'>
                        <feature.icon className='w-8 h-8 text-white' />
                      </div>
                      <h3 className='text-xl font-bold text-white mb-4'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-30o0 leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Position Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent'>
                    Market Position
                  </span>
                </h2>
                <p className='text-xl text-gray-30o0 leading-relaxed'>
                  {marketPosition}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-green-90o0/10 to-transparent'></div>
            <div className='max-w-6xl mx-auto relative z-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center mb-16'
              >
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent'>
                    Use Cases & Applications
                  </span>
                </h2>
                <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>
                  Our AI Marketing Automation Suite is designed for diverse
                  industries and marketing needs.
                </p>
              </motion.div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-gradient-to-br from-green-90o0/30 to-emerald-90o0/30 backdrop-blur-xl border border-green-50o0/20 rounded-xl p-6 hover:from-green-80o0/40 hover:to-emerald-80o0/40 transition-all duration-30o0'
                  >
                    <h3 className='text-lg font-semibold text-white mb-3'>
                      {useCase}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                  <span className='bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent'>
                    Proven ROI & Results
                  </span>
                </h2>
                <p className='text-xl text-gray-30o0 mb-8'>{roi}</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-green-40o0 mb-2'>
                      320%
                    </div>
                    <div className='text-gray-40o0'>Average ROI</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-emerald-40o0 mb-2'>
                      7 Months
                    </div>
                    <div className='text-gray-40o0'>Time to ROI</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-green-40o0 mb-2'>
                      180o0+
                    </div>
                    <div className='text-gray-40o0'>Happy Customers</div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                  <button className='px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-60o0 text-white rounded-xl font-semibold text-lg hover:from-green-60o0 hover:to-emerald-70o0 transition-all duration-20o0'>
                    Get Started Today
                  </button>
                  <button className='px-8 py-4 border-2 border-green-40o0 text-green-40o0 rounded-xl font-semibold text-lg hover:bg-green-40o0 hover:text-black transition-all duration-20o0'>
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-green-90o0/10 to-transparent'></div>
            <div className='max-w-4xl mx-auto text-center relative z-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
                  Ready to Transform Your Marketing with
                  <span className='bg-gradient-to-r from-green-40o0 via-emerald-40o0 to-green-60o0 bg-clip-text text-transparent'>
                    {' '}
                    AI-Powered Automation?
                  </span>
                </h2>
                <p className='text-xl text-gray-30o0 mb-8'>
                  Contact our team of AI experts to discuss how our
                  revolutionary 20o30 Marketing Automation Suite can transform
                  your business and maximize your marketing ROI.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                  <button className='px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white rounded-xl font-semibold text-lg hover:from-green-60o0 hover:to-emerald-60o0 transition-all duration-20o0'>
                    Schedule Consultation
                  </button>
                  <button className='px-8 py-4 border-2 border-green-40o0 text-green-40o0 rounded-xl font-semibold text-lg hover:bg-green-40o0 hover:text-black transition-all duration-20o0'>
                    View Pricing
                  </button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-30o0'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Phone className='w-5 h-5 text-green-40o0' />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center justify-center space-x-2'>
                    <MailIcon className='w-5 h-5 text-emerald-40o0' />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center justify-center space-x-2'>
                    <MapPin className='w-5 h-5 text-green-40o0' />
                    <span className='text-sm'>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <UltraFuturisticFooter20o30 />
      </UltraFuturisticBackground20o30>
    </>
  );
}
