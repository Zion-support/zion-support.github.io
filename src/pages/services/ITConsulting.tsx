<<<<<<< HEAD
; return(); <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";" {}";" <section className="relative overflow-hidden py-20">";" <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>";" <div className="container mx-auto px-4 relative z-10">";" <motion.div";" className="text-center max-w-4xl mx-auto"; initial={{ opacity: 0, y: 30 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center";" >"";" <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">";" <Briefcase className="w-4 h-4 mr-2" /> IT Consulting Services; </div>;" <=";" ";" > <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";" IT";" <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> Consulting</span>";" </h1>";" <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 leading-relaxed">; Strategic IT consulting services that align technology with your business objectives.; Our expert consultants help you make informed technology decisions that drive growth and innovation.; </p>;" <=";" ";" > <div className="flex flex-col sm:flex-row gap-4 justify-center">";" <Link";" to="/contact";" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"; Get Expert Advice;" </Link>";" <Link";" to="/services";" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"; View All Services; </Link>; </div>; </motion.div>; </div>; </section>;" ";" {}";" <section className="py-20">;";" <div className="container mx-auto px-4">";" <motion.div";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-4xl font-bold text-white mb-4">;" Comprehensive IT Consulting Features";" </h2>";" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">; Comprehensive IT consulting services designed to help you make the right technology decisions; and implement solutions that drive business success.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">; {services.map((service, index; <motion.div; key={index}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {; { duration: 0.5,; delay: index * 0.1;" ";" }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200";" >"";" <div className="flex items-start gap-4 mb-6">";" <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center flex-shrink-0">";" <service.icon className="w-8 h-8 text-white" />;" </div>";" <div>";" <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>";" <p className="text-zion-slate-light leading-relaxed">{service.description}</p>; </div>;" </div>";" ";" <div className="mb-6">'";" <h4 className="text-zion-cyan font-semibold mb-3">What's Included:</h4>";" <ul className="space-y-2">";" {service.features.map((feature, featureIndex) => (";" <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">";" <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" /> {feature}; </li>; ))};" </ul>";" </div>";" <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>";" <p className="text-gray-300">{feature.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-20 bg-zion-slate-dark/30">;";" <div className="container mx-auto px-4">";" <motion.div";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-4xl font-bold text-white mb-4">;" Core IT Consulting Services";" </h2>";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">; From strategy to implementation, we provide; comprehensive IT consulting solutions.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {expertise.map(area: unknown, index: unknown (; <motion.div; key={index}; initial = {; { opacity: 0,; x: index % 2 === 0 ? -20 : 20; }}; whileInView = {; { opacity: 1,; x: 0; }}; transition = {; { duration: 0.5,; delay: index * 0.1;" ";" }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200";" >"";" <div className="flex items-start space-x-4">";" <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">";" <service.icon className="w-6 h-6 text-white" />;" </div>";" <div>";" <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>";" <p className="text-gray-300">{service.description}</p>; </div>;" </div>";" ";" <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>";" <p className="text-zion-slate-light leading-relaxed">{area.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-20">;";" <div className="container mx-auto px-4">";" <motion.div";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-4xl font-bold text-white mb-4">;" IT Consulting Benefits";" </h2>";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">; Experience measurable improvements in IT efficiency, security, and business alignment.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">; {benefits.map(benefit: unknown, index: unknown (;" <motion.div";" key={index}";" className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"; initial={{ opacity: 0, y: 30 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.6, delay: index * 0.1 }}";" ";" <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">";" <benefit.icon className="w-8 h-8 text-white" />";" </div>";" <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>";" <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-20 bg-zion-slate-dark/30">;";" <div className="container mx-auto px-4">";" <motion.div";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-4xl font-bold text-white mb-4">;" Industry Applications";" </h2>";" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">; Our IT consulting expertise spans across multiple industries,; each with unique technology challenges and requirements.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-2 md:grid-cols-4 gap-6">; {industries.map(industry: unknown, index: unknown (; <motion.div; key={index}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {; { duration: 0.5,; delay: index * 0.1;" ";" }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-200";" >"";" <div className="text-zion-cyan font-semibold">{industry}</div>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-20">;";" <div className="container mx-auto px-4">";" <motion.div";" className="text-center mb-16"; initial={{ opacity: 0, y: 30 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" ";" <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;" Our Consulting Process";" </h2>";" <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">; A proven methodology that ensures successful consulting outcomes and lasting value.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 md:grid-cols-4 gap-8">; {['; { step: '01', title: 'Discovery', description: 'Understand your business needs and technology challenges' },; { step: '02', title: 'Analysis', description: 'Analyze current state and identify opportunities' },; { step: '03', title: 'Recommendations', description: 'Provide strategic recommendations and action plans' },; { step: '04', title: 'Implementation', description: 'Support implementation and measure results' }; ].map(phase: unknown, index: unknown (;" <motion.div";" key={index}";" className="text-center"; initial={{ opacity: 0, y: 30 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.6, delay: index * 0.1 }}";" ";" <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;" {phase.step}";" </div>";" <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>";" <p className="text-gray-300 text-sm">{useCase.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-20 bg-zion-slate-dark/30">;";" <div className="container mx-auto px-4">";" <motion.div";" className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 text-center"; initial={{ opacity: 0, y: 30 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" >";" <h2 className="text-4xl font-bold text-white mb-4">;" Start Your IT Consultation Today";" </h2>";" <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">; Let our IT consulting experts help you make the right technology decisions.;" Get started with a free consultation today.";" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";" <Link";" to="/contact";" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 font-semibold"; Schedule Consultation;" </Link>";" <Link";" to="/services";" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"; Explore Services; </Link>; </div>; </motion.div>; </div>; </section>; </div>; )};" ;export default ITConsulting;";" '";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Itconsulting() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Itconsulting Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Itconsulting Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your itconsulting operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Itconsulting Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive itconsulting solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Itconsulting?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered itconsulting platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
