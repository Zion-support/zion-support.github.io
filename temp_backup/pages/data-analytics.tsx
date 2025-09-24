import { motion } from 'framer-motion',
import {
  BarChart3;
  TrendingUp;
  PieChart;
  Activity;
  Database;
  Brain;
  Zap;
  Target;
} from 'lucide-react',
import Layout from '../components/layout/Layout',
export default function DataAnalytics() {
  const services = [
    {
      icon: <BarChart3 className='w-12 h-12 text-cyan-40o0' />;
      title: 'Business Intelligence';
      description:,
        'Advanced analytics and reporting platforms for data-driven decisions';
      href: '/intelligent-hr-analytics-platform';
    };
    {
      icon: <TrendingUp className='w-12 h-12 text-blue-40o0' />;
      title: 'Performance Monitoring';
      description: 'Real-time performance analytics and SLO tracking systems';
      href: '/status-pages-slo';
    };
    {
      icon: <PieChart className='w-12 h-12 text-purple-40o0' />;
      title: 'Data Visualization';
      description: 'Interactive dashboards and data visualization tools';
      href: '/vector-search-starter';
    };
    {
      icon: <Activity className='w-12 h-12 text-green-40o0' />;
      title: 'Real-time Analytics';
      description: 'Live data streaming and real-time business intelligence';
      href: '/mlops-starter';
    };
    {
      icon: <Database className='w-12 h-12 text-yellow-40o0' />;
      title: 'Data Management';
      description: 'Data governance, quality, and lifecycle management';
      href: '/managed-postgres-ha';
    };
    {
      icon: <Brain className='w-12 h-12 text-pink-40o0' />;
      title: 'AI-Powered Analytics';
      description:,
        'Machine learning enhanced analytics and predictive insights';
      href: '/ai-powered-decision-engine';
    };
  ],
  return (
    <Layout>,
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black'>,
        {/* Hero Section */}
        <section className='relative py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'>,
              <h1 className='text-5xl md: text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6'>,
                Data Analytics Solutions,
              </h1>,
              <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>,
                Transform your data into actionable insights with our advanced,
                analytics platforms, business intelligence tools, and AI-powered,
                data solutions.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Services Grid */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'>,
              {services.map((service, index) => (
                <motion.div,
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className='p-8 bg-black/40 border border-gray-80o0 rounded-2xl hover: border-cyan-50o0/50 transition-all duration-30o0 group cursor-pointer',
                  onClick={() => (window.location.href = service.href)}
                >,
                  <div className='flex justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0'>,
                    {service.icon}
                  </div>,
                  <h3 className='text-xl font-bold text-white mb-4 text-center'>,
                    {service.title}
                  </h3>,
                  <p className='text-gray-30o0 leading-relaxed text-center'>,
                    {service.description}
                  </p>,
                </motion.div>))}
            </motion.div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-4xl text-center'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >,
              <h2 className='text-4xl font-bold text-white mb-6'>,
                Unlock Your Data's Potential,
              </h2>,
              <p className='text-xl text-gray-30o0 mb-8'>,
                Turn your data into a competitive advantage with our,
                comprehensive analytics solutions.,
              </p>,
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
                <a
                  href='/contact',
                  className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5'>,
                  Get Started Today,
                </a>,
                <a
                  href='/services',
                  className='px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-full hover:bg-cyan-50o0 hover:text-black transition-all duration-30o0'>,
                  View All Services,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>)}
,