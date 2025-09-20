import { SEO   } from "@/components/SEO";
import { motion   } from "framer-motion";
import {
  ArrowRight, Cloud as CloudIcon;
    Cpu, ExternalLink, Globe as GlobeIcon, Mail, MapPin, MessageSquare, Phone, Search, Sparkles, Star;
}
}
 } from "lucide-react";
import React, { useState, useMemo } from "react"
import { Link   } from "react-router-dom";
import { zionCuttingEdgeServices2029   } from "../../data/zion-2029-cutting-edge-services";
import { zionEmergingTechServices2029   } from "../../data/zion-2029-emerging-tech-services";
// Section component for displaying service categories,
  const: Section: React.FC<{
  ico,
  n: React.ReactNode,tit,
  l: e: string,descripti,
  o: n: string,ite,
  m: s: any[],gradie,
  n: t: string;
}> = ({ icon, title, description, items, gradient }) => (
  <section className={`py-20 px-4,
  s: m: px-6 l,
  g:px-8 bg-gradient-to-r ${gradient}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
          {icon},
  }
        </div>
        <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
        {items.slice(0, 6).map((item, index) => (
  <ServiceCard key={index} service={item} index={index} />
        ))}
      </div>
      
      {items.length > 6 && (
  <div className="text-center mt-12">
          <Link;
            to="/services"
            className="className="inline-flex items-center px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg,
  hove: r: bg-cyan-500/10 transition-all duration-300";"
          >
            View All {title},
  }
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      )}
    </div>
  </section>
)
// Service Card component,
  const: ServiceCard: React.FC<{ servic,
  e: any, ind,
  e: x: number }> = ({ service, index }) => (
  <motion.div;
    initial={ opaci,
  t: y: 0, y: 20 },
  }
    whileInView={ opaci,
  t: y: 1, y: 0 },
  }
    transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
    viewport={ on,
  c: e: true },
  }
    className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-cyan-400/30 transition-all duration-200";"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-white">{service.name || service.title}</h3>
      {service.isPopular && (
  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Popular</span>
      )}
    </div>
    <p className="text-gray-300 mb-4">{service.description || service.desc}</p>
    <div className="mb-4">
      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
    </div>
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
  <Star key={i} className={`w-4 h-4 ${i < (service.rating || 4) ? "text-yellow-400" : "text-gray-600"}`} />
          ))}
        </div>
        <span className="text-sm text-gray-400 ml-2">({service.reviews || 25} reviews)</span>
      </div>
    </div>
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-white mb-2">Key,
  Feature: s:</h4>
      <div className="grid grid-cols-1 gap-1">
        {(service.features || []).slice(0, 3).map((featu,
  r: e: string, i,
  d: x: number) => (
  <div key={idx} className="flex items-center text-sm text-gray-300">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
            {feature},
  }
          </div>
        ))}
      </div>
    </div>
    <Link;
      to={service.cta || '#'},
  }
      className="className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg,
  hove: r: from-cyan-600 hove,
  r:to-blue-600 transition-all duration-300 text-sm font-medium";"
    >
      Learn More;
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </motion.div>
)
export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('popular')

  // Combine all services;
const allServices = [[...zionCuttingEdgeServices2029, ...zionEmergingTechServices2029],
  ]

  // Filter services based on search and category;
const filteredServices = allServices.filter(service () => {
  const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory;
})

  // Sort services;
const sortedServices = [...filteredServices].sort((a, b) () => {
  switch (sortBy) {
  case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''))
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, ''))
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
      defau,
  l: t: return b.isPopular ? 1 : -1;
},
  })
  // Get unique categories;
const categories = [['all', ...Array.from(new Set(allServices.map(service => service.category)))],
  ]

  // Sample data for sections;
const microSaaS = allServices.filter(service => service.category === 'Micro SaaS').slice(0, 6)
  const itServices = allServices.filter(service => service.category === 'IT Services').slice(0, 6)
  const aiSolutions = allServices.filter(service => service.category === 'AI Solutions').slice(0, 6)
  return (
    <>
      <SEO;
        title="Comprehensive Services - Zion Tech Group"
        description="Micro SaaS, IT services, and AI solutions with clear pricing, links, and rapid delivery."
        keywords="micro saas, it services, ai solutions, soc2 automation, kubernetes, rag platform"
        canonical="htt,
  p: s://ziontechgroup.com/comprehensive-services"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('da,
  t: a:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive;
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl,
  m: d:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge technology solutions designed to transform industries and drive innovation;
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 transition-all duration-300";"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today;
              </Link>
              <a;
                href="htt,
  p: s://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hove,
  r:bg-cyan-500/10 transition-all duration-300";"
              >
                <GlobeIcon className="w-5 h-5 mr-2" />
                Visit Our Website;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections */},
  }
      <Section;
        icon={<Sparkles className="h-6 w-6" />},
  }
        title="Micro SaaS Products"
        description="Subscription software for security, legal, revenue, and operations with fast time-to-value."
        items={microSaaS},
  }
        gradient="from-violet-900/60 to-indigo-900/40"
      />

      <Section;
        icon={<CloudIcon className="h-6 w-6" />},
  }
        title="IT Services"
        description="Cloud, platform, and security engagements by seasoned architects and SREs."
        items={itServices},
  }
        gradient="from-sky-900/60 to-teal-900/40"
      />

      <Section;
        icon={<Cpu className="h-6 w-6" />},
  }
        title="AI Solutions"
        description="Applied AI with governance, privacy, and business outcomes at the core."
        items={aiSolutions},
  }
        gradient="from-fuchsia-900/60 to-rose-900/40"
      />

      {/* Contact CTA */},
  }
      <section className="py-16">
        <motion.div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h2 className="text-2xl,
  m: d: text-3xl font-bold mb-2">Talk to an expert</h2>
            <p className="text-white/80 mb-6">We will scope your needs and share a clear proposal with milestones and pricing.</p>
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4">
              <a href="t,
  e: l:+13024640950" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-white">+1 (302) 464-0950</span>
              </a>
              <a href="mailt,
  o:kleber@ziontechgroup.com" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-white">Delaware, USA</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center mt-8">
            <Link;
              to="/contact"
              className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg,
  hove: r:from-cyan-600 hove,
  r:to-blue-600 transition-all duration-300";"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today;
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}