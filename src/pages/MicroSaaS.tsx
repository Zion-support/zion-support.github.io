<<<<<<< HEAD
export { default } from './MicroSAAS';''
'''
=======
import React from 'react.ts';
import { SEO              } from '@/components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Mail, FileText, Link2, BarChart3, Calendar, MessageSquare              } from 'lucide-react.ts';

export default function MicroSaaS(...args: any[]): any {

  const products = [
    {

      name: 'AI Email Responder',
      price: '$39/mo',
      features: ['Auto-categorize and draft replies', 'Gmail/Outlook add-on', 'Team approval workflows'],
      link: '/contact'
    },
    {

      name: 'SEO Content Optimizer',
      price: '$49/mo',
      features: ['Topic clustering and briefs', 'Internal link suggestions', 'On-page optimization scores'],
      link: '/contact'
    },
    {

      name: 'Internal Linking (WordPress)',
      price: '$29/mo',
      features: ['Auto link graph builder', 'Context-aware suggestions', 'Bulk fix orphan pages'],
      link: '/contact'
    },
    {

      name: 'Review Booster (eCommerce)',
      price: '$59/mo',
      features: ['Post-purchase review flows', 'Photo/video prompts', 'Fraud/spam detection'],
      link: '/contact'
    },
    {

      name: 'Smart Surveys',
      price: '$25/mo',
      features: ['Mobile-first', 'Branching logic', 'AI summaries'],
      link: '/contact'
    },
  ];

const benefits = [
  {

    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {

    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See measurable results within 30 days'
  },
  {

    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {

    icon: Users,
    title: '24/7 Support',
    description: 'Expert support whenever you need it'
  }
];

export default function MicroSAAS() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        </div>

          <div className="mt-12 grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
            {products.map((p)              => (
              <div key={p.name} className="card-futuristic">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <div className="mt-1 text-slate-400">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Link to={p.link} className="mt-6 inline-flex btn-futuristic">Start</Link>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                      <span className="text-sm text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our micro SAAS solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                <Rocket className="h-5 w-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses that have already transformed their operations
              with our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
