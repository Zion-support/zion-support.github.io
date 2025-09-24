import Head from 'next/head',
import Layout from '../../components/layout/Layout',
import { motion } from 'framer-motion',
import {
  MessageCircle,
  CheckCircle,
  Shield,
  Zap,
  Target,
  BarChart3,
  Users,
  Clock,
  ArrowRight,
  Star,
  Headphones,
  Globe,
  Bot,
  Smartphone,
  Mail,
  Phone,
} from 'lucide-react',
export default function AISupportTriageRouter() {
  const features = [
    {
      icon: <Bot className='w-6 h-6' />,
      title: 'Intelligent Ticket Routing',
      description:,
        'AI-powered classification and routing of support tickets to the most qualified agents',
    },
    {
      icon: <Clock className='w-6 h-6' />,
      title: 'Priority Assessment',
      description:,
        'Automatic prioritization based on urgency, customer value, and issue complexity',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Agent Matching',
      description:,
        'Smart matching of tickets to agents based on expertise and availability',
    },
    {
      icon: <BarChart3 className='w-6 h-6' />,
      title: 'Performance Analytics',
      description:,
        'Real-time insights into support team performance and ticket resolution metrics',
    },
  ],
  const capabilities = [
    'Natural Language ProcessingSentiment Analysis',
    'Urgency DetectionCategory Classification',
    'Customer Priority ScoringAgent Skill Matching',
    'Workload BalancingEscalation Management',
    'Multi-language SupportIntegration APIs',
  ],
  const channels = [
    'Email SupportLive Chat',
    'Phone SupportSocial Media',
    'Help Desk TicketsMobile App Support',
    'Self-Service PortalKnowledge Base',
  ],
  const benefits = [
    'Reduced Response TimesImproved Customer Satisfaction',
    'Better Agent UtilizationLower Support Costs',
    'Increased First-Call ResolutionProactive Issue Prevention',
    'Scalable Support Operations24/7 Automated Routing',
  ],
  return (
    <Layout>,
      <Head>,
        <title>AI Support Triage Router | Zion Tech Group</title>,
        <meta
          name='description',
          content='AI-powered customer support ticket routing and triage system. Automatically classify, prioritize, and route support requests to the right agents.',
        />,
        <link
          rel='canonical',
          href='https: //ziontechgroup.com/services/ai-support-triage-router',
        />,
      </Head>,
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black'>,
        {/* Hero Section */}
        <section className='relative py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'>,
              <div className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-green-50o0 to-blue-60o0 mb-6'>,
                <MessageCircle className='w-10 h-10 text-white' />,
              </div>,
              <h1 className='text-5xl md: text-7xl font-bold bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6'>,
                AI Support Triage Router,
              </h1>,
              <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed mb-8'>,
                Intelligent customer support ticket routing and triage system.,
                Automatically classify, prioritize, and route support requests,
                to the right agents.,
              </p>,
              <div className='flex flex-col sm: flex-row items-center justify-center gap-4'>,
                <a
                  href='/contact',
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-green-60o0 hover:to-blue-70o0 transition-all duration-30o0'>,
                  Get Started,
                  <ArrowRight className='w-5 h-5 ml-2' />,
                </a>,
                <a
                  href='/pricing',
                  className='inline-flex items-center px-8 py-4 border-2 border-green-50o0 text-green-40o0 font-semibold rounded-full hover:bg-green-50o0 hover:text-white transition-all duration-30o0'>,
                  View Pricing,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Features Section */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center mb-16'>,
              <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                Smart Support Routing,
              </h2>,
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                Our AI Support Triage Router intelligently processes and routes,
                customer support requests for optimal resolution.,
              </p>,
            </motion.div>,
            <div className='grid md:grid-cols-2 gap-8'>,
              {features.map((feature, index) => (
                <motion.div,
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className='p-8 rounded-2xl bg-black/40 border border-gray-70o0/60 hover: border-green-50o0/40 transition-all duration-30o0'>,
                  <div className='flex items-center gap-4 mb-4'>,
                    <div className='p-3 rounded-xl bg-green-50o0/20 text-green-40o0'>,
                      {feature.icon}
                    </div>,
                    <h3 className='text-2xl font-bold text-white'>,
                      {feature.title}
                    </h3>,
                  </div>,
                  <p className='text-gray-30o0 leading-relaxed'>,
                    {feature.description}
                  </p>,
                </motion.div>))}
            </div>,
          </div>,
        </section>,
        {/* Capabilities Section */}
        <section className='py-20 px-4 bg-black/30'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-center mb-16'>,
              <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                Advanced Capabilities,
              </h2>,
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                Powered by cutting-edge AI and machine learning for intelligent,
                support operations.,
              </p>,
            </motion.div>,
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'>,
              {capabilities.map((capability, index) => (
                <motion.div,
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className='p-6 rounded-xl bg-black/40 border border-gray-70o0/60 hover: border-green-50o0/40 transition-all duration-30o0 text-center'>,
                  <div className='flex items-center justify-center gap-3 mb-3'>,
                    <CheckCircle className='w-5 h-5 text-green-40o0' />,
                    <span className='text-white font-semibold text-sm'>,
                      {capability}
                    </span>,
                  </div>,
                </motion.div>))}
            </div>,
          </div>,
        </section>,
        {/* Support Channels Section */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-center mb-16'>,
              <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                Multi-Channel Support,
              </h2>,
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                Seamlessly handle support requests across all customer,
                touchpoints.,
              </p>,
            </motion.div>,
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>,
              {channels.map((channel, index) => (
                <motion.div,
                  key={channel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className='p-6 rounded-xl bg-black/40 border border-gray-70o0/60 hover: border-green-50o0/40 transition-all duration-30o0 text-center'>,
                  <div className='text-white font-semibold'>{channel}</div>,
                </motion.div>))}
            </div>,
          </div>,
        </section>,
        {/* Benefits Section */}
        <section className='py-20 px-4 bg-black/30'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='text-center mb-16'>,
              <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                Business Benefits,
              </h2>,
              <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
                Transform your customer support operations with AI-powered,
                efficiency.,
              </p>,
            </motion.div>,
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>,
              {benefits.map((benefit, index) => (
                <motion.div,
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className='p-6 rounded-xl bg-black/40 border border-gray-70o0/60 hover: border-green-50o0/40 transition-all duration-30o0 text-center'>,
                  <div className='flex items-center justify-center gap-3 mb-3'>,
                    <Star className='w-5 h-5 text-green-40o0' />,
                    <span className='text-white font-semibold text-sm'>,
                      {benefit}
                    </span>,
                  </div>,
                </motion.div>))}
            </div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-4xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className='text-center p-12 rounded-3xl bg-gradient-to-r from-green-50o0/20 to-blue-60o0/20 border border-green-50o0/30'>,
              <h2 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
                Ready to Transform Your Support?,
              </h2>,
              <p className='text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto'>,
                Streamline your customer support operations with intelligent AI,
                routing. Get started with our AI Support Triage Router today.,
              </p>,
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>,
                <a
                  href='/contact',
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-green-60o0 hover:to-blue-70o0 transition-all duration-30o0'>,
                  Contact Our Experts,
                  <ArrowRight className='w-5 h-5 ml-2' />,
                </a>,
                <a
                  href='/market-pricing',
                  className='inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-30o0'>,
                  View Pricing,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>)}
,