  Brain;
} from 'lucide-react';
  Brain;
} from 'lucide-react';
  }
;];

const stats = [;
  { number: '500+, label: 'Industry Projects' },',
  { number: '50+, label: 'Fortune 500 Clients' },',
  { number: '99.9%, label: 'Uptime Guarantee' },',
  { number: '24/7, label: 'Industry Support' }',
;];

      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors.""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
import Layout from '../../components/Layout';

const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    href: '/industries/healthcare',
    features: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics']
  },
  {
    title: 'Finance',
    description: 'Secure and scalable financial technology solutions',
    icon: DollarSign,
    href: '/industries/finance',
    features: ['Digital Banking', 'Payment Processing', 'Risk Management']
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0',
    icon: Settings,
    href: '/industries/manufacturing',
    features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with retail technology',
    icon: ShoppingCart,
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics']
  },
  {
    title: 'Education',
    description: 'Modernize education with technology solutions',
    icon: Users,
    href: '/industries/education',
    features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics']
  },
  {
    title: 'Government',
    description: 'Secure government technology solutions',
    icon: Globe,
    href: '/industries/government',
    features: ['Citizen Services', 'Data Security', 'Digital Transformation']
  }
]

export default function Industries() {
  return (
    <Layout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform" />", </Link>,
                  </motion.div>;
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={industry.href}>
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
            </div>,
          </div>;
        </section>;
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              </h2>;
              <p className="text-lg sm: text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">", We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business.,
              </p>;
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Users className="w-8 h-8 text-blue-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>";
                <p className="text-gray-600">";
                  Our team includes specialists with deep experience in each industry we serve, 
                  ensuring solutions that address real-world challenges.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Shield className="w-8 h-8 text-green-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>";
                <p className="text-gray-600">";
                  We ensure all solutions meet industry-specific regulatory requirements and;
                  maintain the highest security standards.;
                </p>;
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">";
                  <Cloud className="w-8 h-8 text-purple-600" />";
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>";
                <p className="text-gray-600">";
                  Our solutions are designed to grow with your business, from startup to enterprise scale, 
                  with flexible deployment options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8">",
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={index}
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
}