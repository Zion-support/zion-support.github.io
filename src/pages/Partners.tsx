import {

  Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Zap, 
  Shield, 
  Rocket,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export const Partners: React.FC = () => {
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"""
      <SEO title="Partners - Zion Tech Group""""
        description="Strategic partnerships and collaboration opportunities with leading technology companies. Join our partner ecosystem and grow together."
       />"
      ""
      {/* Hero Section */}"""
      <section className="relative py-20 px-4">"""
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.6 }}""
          >"""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">""
              Strategic"""
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Partnerships"
              </span>""
            </h1>"""
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">"
              Join our ecosystem of technology partners and grow your business with cutting-edge AI solutions and global market access.""
            </p>"""
            <div className="flex flex-wrap justify-center gap-4">""
              <Link"""
                to="/contact""""
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner"
              </Link>""
              <Link"""
                to="/partnership-opportunities""""
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Opportunities
              </Link>
            </div>
          </motion.div>
        </div>

const Partners = () => {
"
""
  return()"""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">""""
      <div className="container mx-auto px-4 py-16">""""
        <div className="text-center mb-16">""""
          <h1 className="text-4xl md:text-6xl font-bold mb-6">""'"
            Our""'"'"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">'''
              {' '}"
              Partners""
            </span>"""
          </h1>""""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic partnerships that drive innovation and deliver exceptional
            value to our clients"
          </p>""
        </div>"""
""""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""""
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">""""
            <h3 className="text-xl font-bold text-white mb-4">""
              Technology Partners"""
            </h3>""""
            <p className="text-gray-300">
              Leading technology companies that provide cutting-edge solutions
              and infrastructure.
            </p>"
          </motion.div>""
          """
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"""
              >"""
                <div className="flex items-center space-x-4 mb-6">""
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>"""
                    <type.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <div>"""
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>"""
                    <p className="text-slate-400 text-sm">{type.description}</p>
                  </div>"
                </div>""
                """
                <div className="space-y-3">""
                  {type.benefits.map((benefit, benefitIndex) => ("""
                    <div key={benefitIndex} className="flex items-center space-x-3">"""
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"  />"""
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>"
            ))}""
          </div>"""
""""
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">""""
            <h3 className="text-xl font-bold text-white mb-4">""
              Consulting Partners"""
            </h3>""""
            <p className="text-gray-300">
              Expert consulting firms that help us deliver comprehensive
              business solutions.
            </p>"
          </motion.div>""
          """
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="text-center"""
              >"""
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">"""
                  <benefit.icon className="w-8 h-8 text-white" />""
                </div>"""
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>"""
                <p className="text-slate-300 text-sm mb-3">{benefit.description}</p>"""
                <div className="text-cyan-400 font-semibold text-sm">{benefit.metrics}</div>
              </motion.div>"
            ))}""
          </div>"""
""""
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">""""
            <h3 className="text-xl font-bold text-white mb-4">""
              Industry Partners"""
            </h3>""""
            <p className="text-gray-300">
              Industry leaders across various sectors who share our vision for
              digital transformation.
            </p>"
          </motion.div>""
          """
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}'`
                whileInView={{ opacity: 1, y: 0 }}'`'`
                transition={{ duration: 0.6, delay: index * 0.1 }}'`'`'`
                className={`bg-slate-800/50 rounded-xl p-6 border ${index === 1 ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-slate-700'}`}"
              >""
                {index === 1 && ("""
                  <div className="text-center mb-4">"""
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>"
                )}""
                """
                <div className="text-center mb-6">"""
                  <h3 className="text-xl font-semibold text-white mb-2">{program.name}</h3>"""
                  <div className="text-cyan-400 font-semibold mb-2">{program.revenue}</div>"""
                  <p className="text-slate-400 text-sm">{program.requirements}</p>"
                </div>""
                """
                <ul className="space-y-3 mb-6">""
                  {program.benefits.map((benefit, benefitIndex) => ("""
                    <li key={benefitIndex} className="flex items-center space-x-3">"""
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"  />"""
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>"
                ""`
                <Link""`"`
                  to="/contact"```
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
'
''
                    index === 1'''`
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'''`'`
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'```
                  }`}"
                >""
                  Get Started"""
                  <ArrowRight className="w-4 h-4"  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Partnership Process */}"""
      <section className="py-16 px-4">"""
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.6 }}"""
            className="text-center mb-12"""
          >"""
            <h2 className="text-3xl font-bold text-white mb-4">How to Become a Partner</h2>"""
            <p className="text-slate-300 max-w-2xl mx-auto">
              Simple steps to start your partnership journey with Zion Tech Group.
            </p>"
          </motion.div>""
          ""'"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">''
            {['''
              { step: '1', title: 'Initial Contact', description: 'Reach out to discuss partnership opportunities' },'''
              { step: '2', title: 'Assessment', description: 'We evaluate mutual fit and potential' },'''
              { step: '3', title: 'Agreement', description: 'Sign partnership agreement and begin onboarding' },'''
              { step: '4', title: 'Launch', description: 'Start collaborating and growing together' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="text-center"""
              >"""
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">"""
                  <span className="text-white font-bold text-xl">{step.step}</span>""
                </div>"""
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>"""
                <p className="text-slate-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* CTA Section */}"""
      <section className="py-16 px-4">"""
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.6 }}"""
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"""
          >""'"
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>"'"'"
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">'''
              Let's discuss how we can grow together and create mutual value for our businesses."
            </p>""
            """
            <div className="flex flex-wrap justify-center gap-4">""
              <Link"""
                to="/contact""""
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion"
              </Link>""
              <a"""
                href="tel:+13024640950""""
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"""
              >"""
                <Phone className="w-4 h-4"  />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>"
""
      {/* Contact Information */}"""
      <section className="py-16 px-4">"""
        <div className="container mx-auto">"""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"""
            <div className="text-center">"""
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                <Phone className="w-6 h-6 text-white"  />""
              </div>"""
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>"""
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>"
            </div>""
            """
            <div className="text-center">"""
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                <Mail className="w-6 h-6 text-white"  />""
              </div>"""
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>"""
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>"
            </div>""
            """
            <div className="text-center">"""
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                <MapPin className="w-6 h-6 text-white"  />""
              </div>"""
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>"""
              <div className="text-slate-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};'"
'"'"`
export default Partners;'"'"`'"`
'"'"`'"`
'"`'"`