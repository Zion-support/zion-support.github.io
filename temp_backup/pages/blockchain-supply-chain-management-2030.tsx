import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Link;
  Shield;
  BarChart3;
  Zap;
  Globe;
  Phone;
  Mail;
  MapPin;
  TrendingUp;
  Database;
  Lock;
} from 'lucide-react',
import UltraFuturisticBackground20o30 from '../components/ui/UltraFuturisticBackground20o30',
import UltraFuturisticNavigation20o30 from '../components/layout/UltraFuturisticNavigation20o30',
import UltraFuturisticFooter20o30 from '../components/layout/UltraFuturisticFooter20o30',
// Service data,
const serviceData = {
  name: 'Blockchain Supply Chain Management 20o30';
  description:,
    'Revolutionary blockchain-powered supply chain transparency and traceability';
  price: '$399/month';
  features: [
    {
      title: 'End-to-End Traceability';
      description:,
        'Complete visibility into every step of your supply chain with immutable blockchain records and real-time tracking.';
      icon: Link;
    };
    {
      title: 'Smart Contract Automation';
      description:,
        'Automated execution of supply chain agreements, payments, and compliance checks using intelligent smart contracts.';
      icon: Zap;
    };
    {
      title: 'Real-Time Supply Chain Analytics';
      description:,
        'Advanced analytics dashboard with predictive insights, risk assessment, and performance optimization.';
      icon: BarChart3;
    };
    {
      title: 'Global Supply Chain Network';
      description:,
        'Connect with suppliers, manufacturers, and distributors worldwide through our decentralized network.';
      icon: Globe;
    };
    {
      title: 'Enhanced Security & Compliance';
      description:,
        'Military-grade security with regulatory compliance automation for food safety, pharmaceuticals, and more.';
      icon: Shield;
    };
    {
      title: 'AI-Powered Risk Management';
      description:,
        'Predictive risk assessment and mitigation using machine learning and blockchain data analysis.';
      icon: Lock;
    };
  ];
  marketPosition:,
    'Leading blockchain-powered supply chain management platform for enterprises seeking complete transparency, traceability, and automation across global supply networks.';
  useCases: [
    'Food safety and traceability';
    'Pharmaceutical supply chains';
    'Luxury goods authentication';
    'Automotive parts tracking';
    'Agricultural supply chains';
    'Retail inventory management';
  ];
  roi: 'Average customer sees 450% ROI within 12 months through improved efficiency, reduced fraud, and enhanced compliance.';
  contactInfo: {
    mobile: '+1 30o2 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 10o08 Middletown DE 19709';
  };
};
export default function BlockchainSupplyChainManagement20o30() {
  const { features, marketPosition, useCases, roi, contactInfo } = serviceData,
  return (
    <>,
      <Head>,
        <title>{serviceData.name} - Zion Tech Group</title>,
        <meta name='description' content={serviceData.description} />,
        <meta
          name='keywords',
          content='blockchain supply chain, supply chain management, blockchain technology, traceability, Zion Tech Group',
        />,
        <meta name='author' content='Zion Tech Group' />,
        <meta name='robots' content='index, follow' />,
        {/* Open Graph */}
        <meta
          property='og: title',
          content={`${serviceData.name} - Zion Tech Group`}
        />,
        <meta property='og: description' content={serviceData.description} />,
        <meta property='og: type' content='website' />,
        <meta
          property='og:url',
          content='https://ziontechgroup.com/blockchain-supply-chain-management-20o30',
        />,
        <meta
          property='og:image',
          content='https://ziontechgroup.com/og-image.jpg',
        />,
        <meta property='og:site_name' content='Zion Tech Group' />,
        {/* Twitter */}
        <meta name='twitter: card' content='summary_large_image' />,
        <meta
          name='twitter:title',
          content={`${serviceData.name} - Zion Tech Group`}
        />,
        <meta name='twitter: description' content={serviceData.description} />,
        <meta
          name='twitter: image',
          content='https://ziontechgroup.com/og-image.jpg',
        />,
      </Head>,
      <UltraFuturisticBackground20o30>,
        <UltraFuturisticNavigation20o30 />,
        <main className='relative z-10'>,
          {/* Hero Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='max-w-7xl mx-auto text-center'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-8'>,
                <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-2xl mb-6'>,
                  <Link className='w-10 h-10 text-white' />,
                </div>,
                <h1 className='text-4xl md: text-6xl font-bold text-white mb-6'>,
                  <span className='bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-cyan-60o0 bg-clip-text text-transparent'>,
                    Blockchain Supply Chain Management 20o30,
                  </span>,
                </h1>,
                <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>,
                  Transform your supply chain with blockchain-powered,
                  transparency, traceability, and automation. Build trust;
                  reduce costs, and ensure compliance across your global,
                  network.,
                </p>,
              </motion.div>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-12'>,
                <div className='text-center'>,
                  <div className='text-4xl font-bold text-white mb-2'>$399</div>,
                  <div className='text-gray-40o0'>/month</div>,
                </div>,
                <div className='text-center'>,
                  <div className='text-2xl font-bold text-green-40o0 mb-2'>,
                    30 Days,
                  </div>,
                  <div className='text-gray-40o0'>Free Trial</div>,
                </div>,
                <div className='text-center'>,
                  <div className='text-2xl font-bold text-cyan-40o0 mb-2'>,
                    25 Minutes,
                  </div>,
                  <div className='text-gray-40o0'>Setup Time</div>,
                </div>,
              </motion.div>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex flex-col sm: flex-row gap-4 justify-center items-center'>,
                <button className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold text-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-20o0 shadow-lg hover:shadow-xl'>,
                  Start Free Trial,
                </button>,
                <button className='px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 rounded-xl font-semibold text-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-20o0'>,
                  Schedule Demo,
                </button>,
              </motion.div>,
            </div>,
          </section>,
          {/* Features Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-90o0/10 to-transparent'></div>,
            <div className='max-w-7xl mx-auto relative z-10'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center mb-16'>,
                <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                  <span className='bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                    Revolutionary Features,
                  </span>,
                </h2>,
                <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                  Experience the future of supply chain management with,
                  blockchain-powered transparency, smart contracts, and,
                  intelligent automation.,
                </p>,
              </motion.div>,
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
                {features.map((feature, index) => (
                  <motion.div,
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group cursor-pointer'>,
                    <div className='bg-gradient-to-br from-cyan-90o0/50 to-blue-90o0/50 backdrop-blur-xl border border-cyan-50o0/30 rounded-2xl p-8 h-full hover: from-cyan-80o0/60 hover:to-blue-80o0/60 transition-all duration-30o0 hover:scale-10o5'>,
                      <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-30o0'>,
                        <feature.icon className='w-8 h-8 text-white' />,
                      </div>,
                      <h3 className='text-xl font-bold text-white mb-4'>,
                        {feature.title}
                      </h3>,
                      <p className='text-gray-30o0 leading-relaxed'>,
                        {feature.description}
                      </p>,
                    </div>,
                  </motion.div>))}
              </div>,
            </div>,
          </section>,
          {/* Market Position Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='max-w-4xl mx-auto text-center'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >,
                <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                  <span className='bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                    Market Position,
                  </span>,
                </h2>,
                <p className='text-xl text-gray-30o0 leading-relaxed'>,
                  {marketPosition}
                </p>,
              </motion.div>,
            </div>,
          </section>,
          {/* Use Cases Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-90o0/10 to-transparent'></div>,
            <div className='max-w-6xl mx-auto relative z-10'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center mb-16'>,
                <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                  <span className='bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                    Use Cases & Applications,
                  </span>,
                </h2>,
                <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                  Our Blockchain Supply Chain Management platform is designed,
                  for diverse industries and supply chain needs.,
                </p>,
              </motion.div>,
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>,
                {useCases.map((useCase, index) => (
                  <motion.div,
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-gradient-to-br from-cyan-90o0/30 to-blue-90o0/30 backdrop-blur-xl border border-cyan-50o0/20 rounded-xl p-6 hover: from-cyan-80o0/40 hover:to-blue-80o0/40 transition-all duration-30o0'>,
                    <h3 className='text-lg font-semibold text-white mb-3'>,
                      {useCase}
                    </h3>,
                  </motion.div>))}
              </div>,
            </div>,
          </section>,
          {/* ROI Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='max-w-4xl mx-auto text-center'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >,
                <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                  <span className='bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent'>,
                    Proven ROI & Results,
                  </span>,
                </h2>,
                <p className='text-xl text-gray-30o0 mb-8'>{roi}</p>,
                <div className='grid grid-cols-1 md: grid-cols-3 gap-8 mb-12'>,
                  <div className='text-center'>,
                    <div className='text-4xl font-bold text-green-40o0 mb-2'>,
                      450%,
                    </div>,
                    <div className='text-gray-40o0'>Average ROI</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='text-4xl font-bold text-cyan-40o0 mb-2'>,
                      12 Months,
                    </div>,
                    <div className='text-gray-40o0'>Time to ROI</div>,
                  </div>,
                  <div className='text-center'>,
                    <div className='text-4xl font-bold text-blue-40o0 mb-2'>,
                      120o0+,
                    </div>,
                    <div className='text-gray-40o0'>Happy Customers</div>,
                  </div>,
                </div>,
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>,
                  <button className='px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-60o0 text-white rounded-xl font-semibold text-lg hover:from-green-60o0 hover:to-emerald-70o0 transition-all duration-20o0'>,
                    Get Started Today,
                  </button>,
                  <button className='px-8 py-4 border-2 border-green-40o0 text-green-40o0 rounded-xl font-semibold text-lg hover:bg-green-40o0 hover:text-black transition-all duration-20o0'>,
                    View Case Studies,
                  </button>,
                </div>,
              </motion.div>,
            </div>,
          </section>,
          {/* Contact Section */}
          <section className='py-20 px-4 sm: px-6 lg:px-8 relative overflow-hidden'>,
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-90o0/10 to-transparent'></div>,
            <div className='max-w-4xl mx-auto text-center relative z-10'>,
              <motion.div,
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >,
                <h2 className='text-3xl sm: text-4xl lg:text-5xl font-bold text-white mb-6'>,
                  Ready to Transform Your Supply Chain with,
                  <span className='bg-gradient-to-r from-cyan-40o0 via-blue-40o0 to-cyan-60o0 bg-clip-text text-transparent'>,
                    {' '}
                    Blockchain Technology?,
                  </span>,
                </h2>,
                <p className='text-xl text-gray-30o0 mb-8'>,
                  Contact our team of blockchain experts to discuss how our,
                  revolutionary 20o30 Supply Chain Management platform can,
                  transform your business and create transparent, efficient,
                  supply networks.,
                </p>,
                <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-8'>,
                  <button className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white rounded-xl font-semibold text-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-20o0'>,
                    Schedule Consultation,
                  </button>,
                  <button className='px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 rounded-xl font-semibold text-lg hover:bg-cyan-40o0 hover:text-black transition-all duration-20o0'>,
                    View Pricing,
                  </button>,
                </div>,
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-30o0'>,
                  <div className='flex items-center justify-center space-x-2'>,
                    <Phone className='w-5 h-5 text-cyan-40o0' />,
                    <span>{contactInfo.mobile}</span>,
                  </div>,
                  <div className='flex items-center justify-center space-x-2'>,
                    <Mail className='w-5 h-5 text-blue-40o0' />,
                    <span>{contactInfo.email}</span>,
                  </div>,
                  <div className='flex items-center justify-center space-x-2'>,
                    <MapPin className='w-5 h-5 text-cyan-40o0' />,
                    <span className='text-sm'>{contactInfo.address}</span>,
                  </div>,
                </div>,
              </motion.div>,
            </div>,
          </section>,
        </main>,
        <UltraFuturisticFooter20o30 />,
      </UltraFuturisticBackground20o30>,
    </>)}
,