import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  CheckCircle;
  ArrowRight;
  Star;
  TrendingUp;
  Phone;
  Zap;
  DollarSign;
  Shield;
  Mail;
  MapPin;
  Rocket;
  Brain;
  Sparkles;
  Globe;
  Atom;
  Heart;
  Leaf;
  Car;
  GraduationCap;
  Scale;
  Building;
  Factory;
  Camera;
  Video;
  Music;
  Gamepad2;
} from 'lucide-react',
import UltraFuturisticNavigation20o28 from '../components/layout/UltraFuturisticNavigation20o28',
import UltraFuturisticFooter20o28 from '../components/layout/UltraFuturisticFooter20o28',
import { futuristic20o28Services } from '../data/20o28-futuristic-innovations',
import { emergingTech20o28Services } from '../data/20o28-emerging-tech-services',
const contactInfo = {
  mobile: '+1 30o2 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 10o08 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const serviceCategories = [
  {
    title: '🚀 20o28 Futuristic Innovations';
    description: 'Beyond the future of technology';
    icon: Rocket;
    color: 'from-violet-60o0 to-purple-60o0';
    services: futuristic20o28Services.slice(0, 4);
  };
  {
    title: '🏙️ Smart City & Infrastructure';
    description: 'Intelligent urban solutions';
    icon: Building;
    color: 'from-blue-60o0 to-cyan-60o0';
    services: emergingTech20o28Services,
      .filter(
        s =>,
          s.category.includes('Smart City') ||,
          s.category.includes('Infrastructure')),
      .slice(0, 4);
  };
  {
    title: '⚛️ Quantum & Advanced Tech';
    description: 'Quantum computing and beyond';
    icon: Atom;
    color: 'from-indigo-60o0 to-blue-60o0';
    services: futuristic20o28Services,
      .filter(s => s.category.includes('Quantum')),
      .slice(0, 4);
  };
  {
    title: '🤖 AI & Machine Learning';
    description: 'Next-generation AI solutions';
    icon: Brain;
    color: 'from-emerald-60o0 to-teal-60o0';
    services: emergingTech20o28Services,
      .filter(s => s.category.includes('AI')),
      .slice(0, 4);
  };
  {
    title: '⛓️ Blockchain & Web3';
    description: 'Decentralized solutions';
    icon: Globe;
    color: 'from-orange-60o0 to-red-60o0';
    services: emergingTech20o28Services,
      .filter(s => s.category.includes('Blockchain')),
      .slice(0, 4);
  };
  {
    title: '🚗 Autonomous & Mobility';
    description: 'Self-driving and mobility solutions';
    icon: Car;
    color: 'from-red-60o0 to-pink-60o0';
    services: futuristic20o28Services,
      .filter(s => s.category.includes('Autonomous')),
      .slice(0, 4);
  };
],
export default function ServicesShowcase20o28() {
  return (
    <>,
      <Head>,
        <title>20o28 Futuristic Services Showcase - Zion Tech Group</title>,
        <meta
          name='description',
          content='Explore our cutting-edge 20o28 services including AI, quantum computing, autonomous systems, and futuristic innovations. Transform your business with next-generation technology.',
        />,
        <meta
          name='keywords',
          content='20o28 technology, AI services, quantum computing, autonomous systems, futuristic innovations, Zion Tech Group',
        />,
        <meta
          property='og: title',
          content='20o28 Futuristic Services Showcase - Zion Tech Group',
        />,
        <meta
          property='og:description',
          content='Explore our cutting-edge 20o28 services including AI, quantum computing, autonomous systems, and futuristic innovations.',
        />,
        <meta
          property='og: url',
          content='https://ziontechgroup.com/20o28-services-showcase',
        />,
        <meta property='og:type' content='website' />,
        <link
          rel='canonical',
          href='https://ziontechgroup.com/20o28-services-showcase',
        />,
      </Head>,
      <UltraFuturisticNavigation20o28 />,
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-90o0/20 to-blue-90o0/20 overflow-hidden'>,
        {/* Animated Background */}
        <div className='absolute inset-0'>,
          <div className='absolute top-0 left-0 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl animate-pulse'></div>,
          <div className='absolute top-1/2 right-0 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl animate-pulse delay-10o00'></div>,
          <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-50o0/10 rounded-full blur-3xl animate-pulse delay-20o00'></div>,
        </div>,
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>,
            <div className='inline-flex items-center space-x-2 bg-purple-90o0/30 border border-purple-50o0/30 rounded-full px-6 py-3 text-purple-30o0 text-sm'>,
              <Sparkles className='w-4 h-4' />,
              <span>20o28 Future Technology</span>,
            </div>,
            <h1 className='text-5xl md: text-7xl font-bold text-white leading-tight'>,
              <span className='bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                Futuristic,
              </span>,
              <br />,
              <span className='text-white'>Services</span>,
            </h1>,
            <p className='text-xl md:text-2xl text-purple-20o0 max-w-4xl mx-auto leading-relaxed'>,
              Experience the future of technology with our cutting-edge 20o28,
              services. From AI consciousness to quantum internet, we're,
              building tomorrow's solutions today.,
            </p>,
            <div className='flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>,
              <Link
                href='/contact',
                className='px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-xl hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl hover:shadow-purple-50o0/25 flex items-center space-x-2'>,
                <span>Get Started</span>,
                <ArrowRight className='w-5 h-5' />,
              </Link>,
              <Link
                href='/revolutionary-20o28-pricing',
                className='px-8 py-4 border border-purple-50o0/30 text-purple-30o0 rounded-xl hover:bg-purple-90o0/30 transition-all duration-30o0 flex items-center space-x-2'>,
                <span>View Pricing</span>,
                <DollarSign className='w-5 h-5' />,
              </Link>,
            </div>,
            {/* Stats */}
            <div className='grid grid-cols-1 md: grid-cols-4 gap-8 pt-16'>,
              <div className='text-center'>,
                <div className='text-3xl font-bold text-purple-40o0'>50+</div>,
                <div className='text-purple-30o0'>Innovative Services</div>,
              </div>,
              <div className='text-center'>,
                <div className='text-3xl font-bold text-blue-40o0'>99.9%</div>,
                <div className='text-blue-30o0'>Accuracy Rate</div>,
              </div>,
              <div className='text-center'>,
                <div className='text-3xl font-bold text-pink-40o0'>50o0+</div>,
                <div className='text-pink-30o0'>Happy Clients</div>,
              </div>,
              <div className='text-center'>,
                <div className='text-3xl font-bold text-cyan-40o0'>24/7</div>,
                <div className='text-cyan-30o0'>Support Available</div>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Services Categories */}
      <section className='py-20 bg-black/50'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='text-center mb-16'>,
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>,
              Explore Our{' '}
              <span className='bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                Service Categories,
              </span>,
            </h2>,
            <p className='text-xl text-purple-20o0 max-w-3xl mx-auto'>,
              Discover our comprehensive range of futuristic services designed,
              to transform your business and propel you into the future of,
              technology.,
            </p>,
          </div>,
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
            {serviceCategories.map((category, index) => (
              <motion.div,
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative'>,
                <div className='relative p-8 bg-gradient-to-br from-purple-90o0/20 to-blue-90o0/20 border border-purple-50o0/30 rounded-2xl hover: border-purple-50o0/60 transition-all duration-30o0 hover:transform hover:scale-10o5'>,
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-50o0/5 to-blue-50o0/5 rounded-2xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0'></div>,
                  <div className='relative z-10'>,
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0`}
                    >,
                      <category.icon className='w-8 h-8 text-white' />,
                    </div>,
                    <h3 className='text-2xl font-bold text-white mb-3'>,
                      {category.title}
                    </h3>,
                    <p className='text-purple-30o0 mb-6'>,
                      {category.description}
                    </p>,
                    <div className='space-y-3 mb-6'>,
                      {category.services.slice(0, 3).map(service => (
                        <div
                          key={service.id}
                          className='flex items-center space-x-3'>,
                          <CheckCircle className='w-5 h-5 text-green-40o0 flex-shrink-0' />,
                          <span className='text-purple-20o0 text-sm'>,
                            {service.name}
                          </span>,
                        </div>))}
                    </div>,
                    <Link
                      href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className='inline-flex items-center space-x-2 text-purple-40o0 hover: text-purple-30o0 transition-colors group'>,
                      <span>Explore More</span>,
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0' />,
                    </Link>,
                  </div>,
                </div>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Featured Services */}
      <section className='py-20 bg-gradient-to-br from-purple-90o0/10 to-blue-90o0/10'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='text-center mb-16'>,
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>,
              Featured{' '}
              <span className='bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                Services,
              </span>,
            </h2>,
            <p className='text-xl text-purple-20o0 max-w-3xl mx-auto'>,
              Our most innovative and in-demand services that are,
              revolutionizing industries worldwide.,
            </p>,
          </div>,
          <div className='grid grid-cols-1 lg: grid-cols-2 gap-8'>,
            {futuristic20o28Services.slice(0, 6).map((service, index) => (
              <motion.div,
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative'>,
                <div className='relative p-8 bg-black/40 backdrop-blur-sm border border-purple-50o0/30 rounded-2xl hover: border-purple-50o0/60 transition-all duration-30o0 hover:transform hover:scale-10o5'>,
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-50o0/5 to-blue-50o0/5 rounded-2xl opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0'></div>,
                  <div className='relative z-10'>,
                    <div className='flex items-start justify-between mb-4'>,
                      <div className='text-4xl'>{service.icon}</div>,
                      <div className='text-right'>,
                        <div className='text-2xl font-bold text-purple-40o0'>,
                          {service.price}
                        </div>,
                        <div className='text-sm text-purple-30o0'>,
                          {service.period}
                        </div>,
                      </div>,
                    </div>,
                    <h3 className='text-2xl font-bold text-white mb-3'>,
                      {service.name}
                    </h3>,
                    <p className='text-purple-30o0 mb-4'>,
                      {service.description}
                    </p>,
                    <div className='mb-6'>,
                      <div className='flex items-center space-x-2 mb-2'>,
                        <Star className='w-4 h-4 text-yellow-40o0' />,
                        <span className='text-white font-medium'>,
                          {service.rating}
                        </span>,
                        <span className='text-purple-30o0'>,
                          ({service.reviews} reviews),
                        </span>,
                      </div>,
                      <div className='text-sm text-purple-30o0'>,
                        <span className='font-medium'>Market Size: </span>{' '}
                        {service.marketSize}
                      </div>,
                      <div className='text-sm text-purple-30o0'>,
                        <span className='font-medium'>Growth Rate: </span>{' '}
                        {service.growthRate}
                      </div>,
                    </div>,
                    <div className='flex items-center justify-between'>,
                      <Link
                        href={service.link}
                        className='px-6 py-3 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-lg hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'>,
                        Learn More,
                      </Link>,
                      <div className='text-right'>,
                        <div className='text-sm text-purple-30o0'>,
                          Setup Time,
                        </div>,
                        <div className='text-white font-medium'>,
                          {service.setupTime}
                        </div>,
                      </div>,
                    </div>,
                  </div>,
                </div>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Market Analysis */}
      <section className='py-20 bg-black/50'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='text-center mb-16'>,
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>,
              Market{' '}
              <span className='bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                Insights,
              </span>,
            </h2>,
            <p className='text-xl text-purple-20o0 max-w-3xl mx-auto'>,
              Understand the market dynamics and growth potential of our,
              futuristic services.,
            </p>,
          </div>,
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center p-8 bg-gradient-to-br from-purple-90o0/20 to-blue-90o0/20 border border-purple-50o0/30 rounded-2xl'>,
              <TrendingUp className='w-16 h-16 text-green-40o0 mx-auto mb-6' />,
              <h3 className='text-2xl font-bold text-white mb-4'>,
                Market Growth,
              </h3>,
              <p className='text-purple-30o0 mb-6'>,
                Our services target markets with exponential growth potential;
                with some sectors growing at 30o0-80o0% annually.,
              </p>,
              <div className='text-3xl font-bold text-green-40o0'>50o0%+</div>,
              <div className='text-purple-30o0'>Average Annual Growth</div>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center p-8 bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/30 rounded-2xl'>,
              <DollarSign className='w-16 h-16 text-blue-40o0 mx-auto mb-6' />,
              <h3 className='text-2xl font-bold text-white mb-4'>,
                Market Size,
              </h3>,
              <p className='text-blue-30o0 mb-6'>,
                Combined market size of our service categories exceeds $50o0,
                billion with rapid expansion expected.,
              </p>,
              <div className='text-3xl font-bold text-blue-40o0'>$50o0B+</div>,
              <div className='text-blue-30o0'>Total Addressable Market</div>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-center p-8 bg-gradient-to-br from-pink-90o0/20 to-rose-90o0/20 border border-pink-50o0/30 rounded-2xl'>,
              <Shield className='w-16 h-16 text-pink-40o0 mx-auto mb-6' />,
              <h3 className='text-2xl font-bold text-white mb-4'>,
                Competitive Edge,
              </h3>,
              <p className='text-pink-30o0 mb-6'>,
                First-to-market solutions with proprietary technology and AI,
                algorithms that competitors cannot replicate.,
              </p>,
              <div className='text-3xl font-bold text-pink-40o0'>90%</div>,
              <div className='text-pink-30o0'>Market Share in Niche</div>,
            </motion.div>,
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-90o0/30 to-blue-90o0/30'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>,
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'>,
            <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
              Ready to{' '}
              <span className='bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent'>,
                Transform,
              </span>{' '}
              Your Business?,
            </h2>,
            <p className='text-xl text-purple-20o0 max-w-3xl mx-auto'>,
              Join hundreds of forward-thinking companies already leveraging our,
              futuristic services to gain competitive advantages and drive,
              innovation.,
            </p>,
            <div className='flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>,
              <Link
                href='/contact',
                className='px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-xl hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl hover:shadow-purple-50o0/25 flex items-center space-x-2'>,
                <span>Start Your Journey</span>,
                <ArrowRight className='w-5 h-5' />,
              </Link>,
              <Link
                href='/case-studies',
                className='px-8 py-4 border border-purple-50o0/30 text-purple-30o0 rounded-xl hover:bg-purple-90o0/30 transition-all duration-30o0 flex items-center space-x-2'>,
                <span>View Case Studies</span>,
                <TrendingUp className='w-5 h-5' />,
              </Link>,
            </div>,
            <div className='flex items-center justify-center space-x-8 text-purple-30o0'>,
              <div className='flex items-center space-x-2'>,
                <CheckCircle className='w-5 h-5 text-green-40o0' />,
                <span>30-Day Free Trial</span>,
              </div>,
              <div className='flex items-center space-x-2'>,
                <CheckCircle className='w-5 h-5 text-green-40o0' />,
                <span>24/7 Expert Support</span>,
              </div>,
              <div className='flex items-center space-x-2'>,
                <CheckCircle className='w-5 h-5 text-green-40o0' />,
                <span>Money-Back Guarantee</span>,
              </div>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      <UltraFuturisticFooter20o28 />,
    </>)}
,