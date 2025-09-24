import { motion } from 'framer-motion',
import {,
  Rocket,;
  Zap,;
  Brain,;
  Target,;
  Users,;
  Globe,;
  Shield,;
  TrendingUp,;
} from 'lucide-react',
import Layout from '../components/layout/Layout',
,
export default function StartupSolutions() {,
  const solutions = [,
    {,
      icon: <Rocket className='w-12 h-12 text-cyan-40o0' />,;
      title: 'Micro-SaaS Platform',;
      description:,
        'Rapid development and deployment of micro-SaaS applications',;
      href: '/micro-saas',;
    },;
    {,
      icon: <Zap className='w-12 h-12 text-blue-40o0' />,;
      title: 'AI-Powered MVP',;
      description: 'Fast-track your MVP with AI and automation solutions',;
      href: '/ai-powered-decision-engine',;
    },;
    {,
      icon: <Brain className='w-12 h-12 text-purple-40o0' />,;
      title: 'MLOps Starter',;
      description:,
        'Production-ready machine learning infrastructure for startups',;
      href: '/mlops-starter',;
    },;
    {,
      icon: <Target className='w-12 h-12 text-green-40o0' />,;
      title: 'Growth Automation',;
      description: 'Automate customer acquisition and growth processes',;
      href: '/ai-autonomous-business-operations',;
    },;
    {,
      icon: <Users className='w-12 h-12 text-yellow-40o0' />,;
      title: 'Customer Analytics',;
      description: 'Understand your users with advanced analytics and insights',;
      href: '/intelligent-hr-analytics-platform',;
    },;
    {,
      icon: <Globe className='w-12 h-12 text-pink-40o0' />,;
      title: 'Cloud Infrastructure',;
      description: 'Scalable cloud infrastructure that grows with your startup',;
      href: '/multi-cloud-disaster-recovery',;
    },;
  ],
,
  return (,
    <Layout>,
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black'>,
        {/* Hero Section */}
        <section className='relative py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className='text-center',
            >,
              <h1 className='text-5xl md: text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6'>,
                Startup Solutions,
              </h1>,
              <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>,
                Accelerate your startup's growth with cutting-edge technology,
                solutions designed for rapid development, scalability, and,
                market success.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Solutions Grid */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-6xl'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.2 ,}}
              className='grid md: grid-cols-2 lg:grid-cols-3 gap-8',
            >,
              {solutions.map((solution, index) => (,
                <motion.div,
                  key={index}
                  initial={{ opacity: 0, y: 20 ,}}
                  animate={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 ,}}
                  className='p-8 bg-black/40 border border-gray-80o0 rounded-2xl hover: border-cyan-50o0/50 transition-all duration-30o0 group cursor-pointer',
                  onClick={() => (window.location.href = solution.href),}
                >,
                  <div className='flex justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0'>,
                    {solution.icon,}
                  </div>,
                  <h3 className='text-xl font-bold text-white mb-4 text-center'>,
                    {solution.title}
                  </h3>,
                  <p className='text-gray-30o0 leading-relaxed text-center'>,
                    {solution.description}
                  </p>,
                </motion.div>,
              ))}
            </motion.div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className='py-20 px-4'>,
          <div className='container mx-auto max-w-4xl text-center'>,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.8 ,}}
            >,
              <h2 className='text-4xl font-bold text-white mb-6'>,
                Ready to Scale Your Startup?,
              </h2>,
              <p className='text-xl text-gray-30o0 mb-8'>,
                Let our startup experts help you build the technology foundation,
                for rapid growth.,
              </p>,
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
                <a,
                  href='/contact',
                  className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5',
                >,
                  Get Started Today,
                </a>,
                <a,
                  href='/solutions',
                  className='px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-full hover:bg-cyan-50o0 hover:text-black transition-all duration-30o0',
                >,
                  View All Solutions,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,}
,