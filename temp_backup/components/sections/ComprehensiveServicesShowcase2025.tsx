import { motion } from 'framer-motion',
import {
  CheckCircle;
  ArrowRight;
  Star;
  TrendingUp;
  Zap;
  Shield;
  Globe;
  Brain;
  Database;
  Cloud;
  Lock;
  Rocket;
  Users;
  DollarSign;
  Target;
  Award;
  Phone;
} from 'lucide-react',
import { advancedAIAutomation20o25 } from '../../data/advanced-ai-automation-20o25',
import { advancedCybersecurity20o25 } from '../../data/advanced-cybersecurity-20o25',
import { blockchainWeb320o25 } from '../../data/blockchain-web3-20o25',
import { iotEdgeComputing20o25 } from '../../data/iot-edge-computing-20o25',
import { healthcareBiotech20o25 } from '../../data/healthcare-biotech-20o25',
import { fintechFinancial20o25 } from '../../data/fintech-financial-20o25',
import { educationElearning20o25 } from '../../data/education-elearning-20o25',
const ComprehensiveServicesShowcase20o25 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services';
      icon: Brain;
      services: advancedAIAutomation20o25;
      gradient: 'from-purple-60o0 via-pink-60o0 to-blue-60o0';
      description:,
        'Cutting-edge AI solutions that transform business operations';
    };
    {
      title: 'Cybersecurity & Security';
      icon: Shield;
      services: advancedCybersecurity20o25;
      gradient: 'from-red-60o0 via-orange-60o0 to-yellow-60o0';
      description: 'Advanced security solutions for the digital age';
    };
    {
      title: 'Blockchain & Web3';
      icon: Globe;
      services: blockchainWeb320o25;
      gradient: 'from-green-60o0 via-teal-60o0 to-cyan-60o0';
      description: 'Next-generation blockchain and decentralized solutions';
    };
    {
      title: 'IoT & Edge Computing';
      icon: Cloud;
      services: iotEdgeComputing20o25;
      gradient: 'from-blue-60o0 via-indigo-60o0 to-purple-60o0';
      description: 'Smart connected solutions for the Internet of Things';
    };
    {
      title: 'Healthcare & Biotechnology';
      icon: Target;
      services: healthcareBiotech20o25;
      gradient: 'from-pink-60o0 via-rose-60o0 to-red-60o0';
      description: 'Innovative healthcare and biotech solutions';
    };
    {
      title: 'Fintech & Financial';
      icon: DollarSign;
      services: fintechFinancial20o25;
      gradient: 'from-emerald-60o0 via-green-60o0 to-teal-60o0';
      description: 'Revolutionary financial technology solutions';
    };
    {
      title: 'Education & E-Learning';
      icon: Award;
      services: educationElearning20o25;
      gradient: 'from-amber-60o0 via-yellow-60o0 to-orange-60o0';
      description: 'Advanced learning and educational technology';
    };
  ],
  const containerVariants = {
    hidden: { opacity: 0 };
    visible: {
      opacity: 1;
      transition: {
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 };
    visible: {
      y: 0;
      opacity: 1;
      transition: {
        duration: 0.5;
      };
    };
  };
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 overflow-hidden'>,
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>,
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>,
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-20o00'></div>,
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-40o00'></div>,
      </div>,
      <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header */}
        <motion.div,
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'>,
          <h2 className='text-4xl md: text-6xl font-bold bg-gradient-to-r from-white via-purple-20o0 to-pink-20o0 bg-clip-text text-transparent mb-6'>,
            Revolutionary 20o25 Services,
          </h2>,
          <p className='text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed'>,
            Discover our comprehensive suite of cutting-edge micro SAAS,
            services, IT solutions, and AI innovations designed to transform,
            your business and drive success in the digital age.,
          </p>,
        </motion.div>,
        {/* Service Categories */}
        <motion.div,
          variants={containerVariants}
          initial='hidden',
          whileInView='visible',
          viewport={{ once: true }}
          className='space-y-16'>,
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div,
              key={category.title}
              variants={itemVariants}
              className='relative'>,
              {/* Category Header */}
              <div className='flex items-center mb-8'>,
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}
                >,
                  <category.icon className='w-8 h-8 text-white' />,
                </div>,
                <div>,
                  <h3 className='text-3xl font-bold text-white mb-2'>,
                    {category.title}
                  </h3>,
                  <p className='text-gray-40o0 text-lg'>,
                    {category.description}
                  </p>,
                </div>,
              </div>,
              {/* Services Grid */}
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6'>,
                {category.services.map((service, serviceIndex) => (
                  <motion.div,
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    className='group relative bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-70o0/50 hover: border-purple-50o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5'>,
                    {/* Service Header */}
                    <div className='mb-4'>,
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover: text-purple-30o0 transition-colors'>,
                        {service.name}
                      </h4>,
                      <p className='text-gray-40o0 text-sm leading-relaxed'>,
                        {service.description}
                      </p>,
                    </div>,
                    {/* Features */}
                    <div className='mb-4'>,
                      <h5 className='text-sm font-medium text-purple-30o0 mb-2'>,
                        Key Features: ,
                      </h5>,
                      <ul className='space-y-1'>,
                        {service.features,
                          ?.slice(0, 3),
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className='flex items-center text-xs text-gray-40o0'>,
                              <CheckCircle className='w-3 h-3 text-green-40o0 mr-2 flex-shrink-0' />,
                              {feature}
                            </li>))}
                        {service.features && service.features.length > 3 && (
                          <li className='text-xs text-gray-50o0 italic'>,
                            +{service.features.length - 3} more features,
                          </li>)}
                      </ul>,
                    </div>,
                    {/* Pricing */}
                    <div className='mb-4'>,
                      <div className='flex items-center justify-between'>,
                        <span className='text-sm text-gray-40o0'>,
                          Starting from: ,
                        </span>,
                        <span className='text-lg font-bold text-green-40o0'>,
                          {service.price}
                          {service.period}
                        </span>,
                      </div>,
                      <div className='text-xs text-gray-50o0 mt-1'>,
                        Market position: {service.marketPosition}
                      </div>,
                    </div>,
                    {/* ROI */}
                    <div className='mb-4'>,
                      <h5 className='text-sm font-medium text-purple-30o0 mb-2'>,
                        ROI & Benefits: ,
                      </h5>,
                      <div className='text-xs text-gray-40o0'>,
                        <div className='flex items-center mb-1'>,
                          <TrendingUp className='w-3 h-3 text-blue-40o0 mr-2 flex-shrink-0' />,
                          {service.roi}
                        </div>,
                        <div className='text-xs text-gray-50o0'>,
                          Setup time: {service.setupTime}
                        </div>,
                      </div>,
                    </div>,
                    {/* Use Cases */}
                    <div className='mb-4'>,
                      <h5 className='text-sm font-medium text-purple-30o0 mb-2'>,
                        Perfect for: ,
                      </h5>,
                      <div className='flex flex-wrap gap-1'>,
                        {service.useCases,
                          ?.slice(0, 3),
                          .map((useCase, useCaseIndex) => (
                            <span
                              key={useCaseIndex}
                              className='px-2 py-1 bg-slate-70o0/50 text-xs text-gray-30o0 rounded-full'>,
                              {useCase}
                            </span>))}
                      </div>,
                    </div>,
                    {/* CTA Button */}
                    <div className='mt-6'>,
                      <a
                        href={service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white text-sm font-medium rounded-lg hover: from-purple-70o0 hover:to-pink-70o0 transition-all duration-20o0 transform hover:scale-10o5'>,
                        Learn More,
                        <ArrowRight className='w-4 h-4 ml-2' />,
                      </a>,
                    </div>,
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-60o0/10 to-pink-60o0/10 rounded-2xl opacity-0 group-hover: opacity-10o0 transition-opacity duration-30o0 pointer-events-none' />,
                  </motion.div>))}
              </div>,
            </motion.div>))}
        </motion.div>,
        {/* Call to Action */}
        <motion.div,
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-center mt-20'>,
          <div className='bg-gradient-to-r from-purple-60o0/20 to-pink-60o0/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-50o0/30'>,
            <h3 className='text-3xl font-bold text-white mb-4'>,
              Ready to Transform Your Business?,
            </h3>,
            <p className='text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto'>,
              Join thousands of businesses already leveraging our cutting-edge,
              solutions to drive innovation, efficiency, and growth.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <a
                href='https://ziontechgroup.com/contact',
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white font-semibold rounded-xl hover:from-purple-70o0 hover:to-pink-70o0 transition-all duration-20o0 transform hover:scale-10o5'>,
                Get Started Today,
                <Rocket className='w-5 h-5 ml-2' />,
              </a>,
              <a
                href='tel:+130o24640950',
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-70o0/50 text-white font-semibold rounded-xl hover:bg-slate-60o0/50 transition-all duration-20o0 border border-slate-60o0'>,
                Call +1 30o2 464 0950,
                <Phone className='w-5 h-5 ml-2' />,
              </a>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
    </section>)};
export default ComprehensiveServicesShowcase20o25;