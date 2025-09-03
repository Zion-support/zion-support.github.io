<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import { motion  } from 'framer-motion'; import { ; Cloud,; Server,; Database,; Shield,; Zap,; Globe,; ArrowRight,; CheckCircle,; Star,; MonitorSpeaker,;  } from 'lucide-react'; ; const CloudServices = () => {; const cloudServices = [; {; title: 'Cloud DevOps Automation',; description:; 'Streamlined CI/CD pipelines and infrastructure automation for faster deployments',; path: '/services/cloud-devops',; icon: Zap,; featured: true,; tags: ['DevOps', 'Automation', 'CI/CD'],; },; {; title: 'Digital Transformation',; description:; 'End-to-end digital transformation services for modern enterprises',; path: '/services/digital-transformation',; icon: Globe,; tags: ['Transformation', 'Modernization', 'Enterprise'],; },; {; title: 'FinOps Optimization',; description:; 'Cloud financial operations and cost optimization strategies',; path: '/services/cloud-finops-optimizer',; icon: Database,; tags: ['FinOps', 'Cost Optimization', 'Financial Management'],; },; {; title: 'IoT Edge Computing',; description:; 'Edge computing solutions for IoT devices and real-time processing',; path: '/services/iot-edge-computing',; icon: MonitorSpeaker,; tags: ['IoT', 'Edge Computing', 'Real-time'],; },; {; title: 'Green IT Solutions',; description:; 'Sustainable cloud infrastructure and energy-efficient computing',; path: '/services/green-it',; icon: Shield,; tags: ['Sustainability', 'Green Tech', 'Energy Efficiency'],; },; {; title: 'Micro SaaS Platform',; description: 'Scalable micro-service architecture for SaaS applications',; path: '/services/micro-saas-solutions',; icon: Server,; tags: ['SaaS', 'Microservices', 'Scalability'],; },; ]; ; const benefits = [; { metric: '99.9%', label: 'Uptime SLA' },; { metric: '60%', label: 'Cost Reduction' },; { metric: '10x', label: 'Faster Deployment' },; { metric: '24/7', label: 'Monitoring' },; ]; ; const features = [; {; icon: Cloud,; title: 'Multi-Cloud Strategy',; description: 'Deploy across AWS, Azure, GCP with unified management',; },; {; icon: Shield,; title: 'Security First',; description: 'Enterprise-grade security with compliance certifications',; },; {; icon: Zap,; title: 'Auto-Scaling',; description:; 'Intelligent scaling based on demand and performance metrics',; },; {; icon: Database,; title: 'Data Management',; description:; 'Comprehensive data backup, recovery, and migration services',; },; ]; ; return(; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">;" {}";" <section className="py-20 px-4">";" <div className="container mx-auto max-w-6xl">; <motion.div; initial={{ opacity: 0, y: 30 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >";" <div className="flex items-center justify-center gap-4 mb-6">";" <Cloud className="w-12 h-12 text-cyan-400" />";" <h1 className="text-5xl md:text-6xl font-bold">;" Cloud & DevOps";" <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">; {' '}; Services; </span>; </h1>;" </div>";" <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">; Accelerate your digital transformation with our comprehensive; cloud solutions, DevOps automation, and modern infrastructure; management services.; </p>; </motion.div>; </div>; </section>;" {}";" <section className="py-16 px-4 bg-black/20">";" <div className="container mx-auto max-w-6xl">";" <div className="grid grid-cols-2 md:grid-cols-4 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.5, delay: index * 0.1 }};" viewport={{ once: true   }}";" className="text-center";" >";" <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">; {benefit.metric};" </div>";" <div className="text-gray-300">{benefit.label}</div>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4">";" <div className="container mx-auto max-w-6xl">; <motion.div; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8   }};" viewport={{ once: true   }}";" className="text-center mb-16";" >";" <h2 className="text-4xl font-bold mb-6">; Cloud Infrastructure Features;" </h2>";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Enterprise-grade cloud solutions designed for scalability,; security, and performance; </p>; </motion.div>;" ";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">; {features.map((feature, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.5, delay: index * 0.1 }};" viewport={{ once: true   }}";" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300";" >";" <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />";" <h3 className="text-xl font-bold mb-3">{feature.title}</h3>";" <p className="text-gray-300">{feature.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4 bg-black/20">";" <div className="container mx-auto max-w-6xl">; <motion.div; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8   }};" viewport={{ once: true   }}";" className="text-center mb-16";" >";" <h2 className="text-4xl font-bold mb-6">Our Cloud Solutions</h2>";" <p className="text-xl text-gray-300 max-w-3xl mx-auto">; Comprehensive cloud services to modernize your infrastructure and; accelerate growth; </p>; </motion.div>;" ";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {cloudServices.map((service, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.5, delay: index * 0.1 }}; viewport={{ once: true   }}; className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 relative ${; service.featured ? 'ring-2 ring-cyan-400/30' : ''; }`}; >;" {service.featured && (";" <div className="absolute -top-3 left-6">";" <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">";" <Star className="w-3 h-3" />; Featured; </span>; </div>; )};" ";" <service.icon className="w-12 h-12 text-cyan-400 mb-6" />";" <h3 className="text-2xl font-bold mb-4">{service.title}</h3>";" <p className="text-gray-300 mb-6">{service.description}</p>;" ";" <div className="flex flex-wrap gap-2 mb-6">; {service.tags.map((tag, tagIndex) => (; <span;" key={tagIndex}";" className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"; >; {tag}; </span>; ))}; </div>; <Link;" to={service.path}";" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"; >;" Learn More";" <ArrowRight className="w-4 h-4" />; </Link>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-20 px-4">";" <div className="container mx-auto max-w-4xl text-center">; <motion.div; initial={{ opacity: 0, y: 30 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8   }}; viewport={{ once: true   }};" >";" <h2 className="text-4xl font-bold mb-6">; Ready to Move to the Cloud?;" </h2>";" <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">; Let our cloud experts design and implement a scalable, secure, and; cost-effective cloud strategy for your organization.;" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">; <motion.button; whileHover={{ scale: 1.05   }};" whileTap={{ scale: 0.95   }}";" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"; >; Get Cloud Assessment;" </motion.button>";" <Link to="/contact">; <motion.button; whileHover={{ scale: 1.05   }};" whileTap={{ scale: 0.95   }}";" className="w-full px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"; >; Contact Us; </motion.button>; </Link>; </div>; </motion.div>; </div>; </section>; </div>; ); }; ; export default CloudServices;" ";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Cloudservices() {
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
            AI-Powered Cloudservices Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cloudservices Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your cloudservices operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Cloudservices Features</h2>
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
                <p className="text-gray-600">Comprehensive cloudservices solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Cloudservices?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered cloudservices platform today.
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
