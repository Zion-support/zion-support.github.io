import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Sparkles
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap
  Phone
  Mail
  MapPin
  Globe
  DollarSign
  Clock
  Users
  Target
  Rocket
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { NEW_INNOVATIVE_SERVICES_2025 } from "../data/newInnovativeServices2025"
export default function NewInnovativeServicesShowcase() {
  const serviceCategories = [
  {
  tit,
  l: e: "AI & Legal Tech",descripti,
  o: n: "Revolutionary legal document automation and compliance solutions",ic,
  o: n: Shield,col,
  o: r: "from-blue-500 to-purple-600"
},
  {
  tit,
  l: e: "AI & Healthcare",descripti,
  o: n: "Transformative healthcare analytics and clinical decision support",ic,
  o: n: TrendingUp,col,
  o: r: "from-green-500 to-blue-600"
},
  {
  tit,
  l: e: "AI & FinTech",descripti,
  o: n: "Advanced trading platforms with intelligent risk management",ic,
  o: n: DollarSign,col,
  o: r: "from-green-500 to-emerald-600"
},
  ]
  const keyBenefits = [
  {
  tit,
  l: e: "Cutting-Edge AI Technology",descripti,
  o: n: "Leverage the latest advances in machine learning, natural language processing, and predictive analytics"
      ic,
  o: n: Sparkles
},
  {
  tit,
  l: e: "Industry-Specific Solutions",descripti,
  o: n: "Tailored solutions designed for specific industry challenges and regulatory requirements",ic,
  o: n: Target
},
  {
  tit,
  l: e: "Proven ROI & Results",descripti,
  o: n: "Measurable improvements in efficiency, accuracy, and cost savings across all services"
      ic,
  o: n: TrendingUp
},
  {
  tit,
  l: e: "Enterprise-Grade Security",descripti,
  o: n: "SOC 2, ISO 27001, and industry-specific compliance certifications for maximum security"
      ic,
  o: n: Shield
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="New Innovative Services 2025 - Zion Tech Group"
        description="Discover our latest AI-powered,
  innovative: services: Legal document automation, healthcare analytics, and financial trading platforms. Transform your business with cutting-edge technology."
      />

      {/* Hero Section */},
  }
      <section className="relative py-20,
  s: m: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-2xl">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl,
  s: m: text-6xl font-bold tracking-tight mb-6">
              New Innovative
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Services 2025</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Discover our latest AI-powered innovative services designed to transform industries 
              and revolutionize business operations. Experience the future of technology today.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <a 
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg,
  hove: r:from-purple-400,
  hove: r:to-blue-500 transition-all duration-300 font-semibold";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-6 py-3 border border-purple-400/30 text-purple-400 rounded-lg hove,
  r:bg-purple-400/10 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Overview */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m:text-4xl font-bold mb-4">
              Service Categories
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our three main categories of innovative services, each designed to address 
              specific industry challenges with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid gap-8,
  m: d:grid-cols-3">
            {serviceCategories.map((category, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8,
  hove: r:border-purple-500/50 transition-all duration-300";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-slate-300 mb-6">{category.description}</p>
                <div className="text-sm text-slate-400">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    AI-Powered Solutions
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Industry Expertise
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Proven Results
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m:text-4xl font-bold mb-4">
              Why Choose Our Innovative Services?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our services deliver exceptional value through cutting-edge technology
              industry expertise, and proven results.
            </p>
          </div>

          <div className="grid gap-8,
  m: d:grid-cols-2">
            {keyBenefits.map((benefit, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                animate={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/30 backdrop-blur border border-slate-700/30 rounded-xl p-8";"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m:text-4xl font-bold mb-4">
              Service Details
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore each service in detail with comprehensive information about features
              pricing, and implementation.
            </p>
          </div>

          <div className="space-y-12">
            {NEW_INNOVATIVE_SERVICES_2025.map((service, index) => (
  <motion.div
                key={service.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8";"
              >
                <div className="grid gap-8,
  l: g:grid-cols-2">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-slate-400 text-sm">{service.category} • {service.subcategory}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    
                    <div className="grid gap-4,
  s: m:grid-cols-2 mb-6">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="text-sm text-slate-400 mb-1">Starting Price</div>
                        <div className="text-2xl font-bold text-green-400">
                          {service.currency},
  {service.price.toLocaleString()},
  }
                          <span className="text-sm text-slate-400">/month</span>
                        </div>
                      </div>
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="text-sm text-slate-400 mb-1">Expected ROI</div>
                        <div className="text-2xl font-bold text-blue-400">{service.roi}</div>
                      </div>
                    </div>

                    <div className="flex flex-col,
  s: m:flex-row gap-3">
                      <Link
                        to={`/services/${service.id.replace(/-/g, '-')}`}
                        className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg,
  hove: r: from-purple-400,
  hove: r:to-blue-500 transition-all duration-300 font-semibold";"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <a
                        href="t,
  e: l:+13024640950"
                        className="className="inline-flex items-center px-6 py-3 border border-purple-400/30 text-purple-400 rounded-lg hove,
  r:bg-purple-400/10 transition-all duration-300";"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-purple-400">Key Features</h4>
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 6).map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-semibold text-lg mb-4 text-purple-400">Target Audience</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.targetAudience.slice(0, 4).map((audience, audienceIndex) => (
  <span
                          key={audienceIndex},
  }
                          className="className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full";"
                        >
                          {audience},
  }
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Delivery,
  Tim: e:</span>
                        <span className="text-slate-300">{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Market,
  Siz: e:</span>
                        <span className="text-slate-300">{service.marketSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Support,
  Leve: l:</span>
                        <span className="text-slate-300 capitalize">{service.supportLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join forward-thinking organizations that have already revolutionized their operations 
              with our innovative AI-powered services.
            </p>
            
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center mb-8">
              <a 
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg,
  hove: r:from-purple-400,
  hove: r:to-blue-500 transition-all duration-300 font-semibold text-lg";"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 rounded-lg,
  hove: r:bg-purple-400/10 transition-all duration-300 font-semibold text-lg";"
              >
                <Mail className="w-6 h-6 mr-2" />
                Schedule Consultation
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2 text-purple-400" />
                  <a href="t,
  e: l:+13024640950" className="hov,
  e: r:text-purple-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2 text-purple-400" />
                  <a href="mail,
  t: o:kleber@ziontechgroup.com" className="hove,
  r:text-purple-300">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="h-4 w-4 mr-2 text-purple-400" />
                  <a href="htt,
  p: s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hove,
  r:text-purple-300">ziontechgroup.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}