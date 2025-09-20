import React from "react"
import { Link } from "react-router-dom"
import {
  Users
  Globe,
  Award
  TrendingUp
  Building
  CheckCircle
  ArrowRight
} from "lucide-react"
export default function Partners() {
  const partnershipTypes = [
  {
  tit,
  l: e: 'Technology Partners',descripti,
  o: n: 'Collaborate with leading tech companies to deliver cutting-edge solutions',ic,
  o: n: '🔧',benefi,
  t: s: [['Access to latest technologiesJoint product development', 'Shared marketing opportunities'],
  ],
  },
  {
  tit,
  l: e: 'Channel Partners',descripti,
  o: n: 'Expand your reach through our global network of resellers and distributors',ic,
  o: n: '🌐',benefi,
  t: s: [['Increased market presenceRevenue sharing programs', 'Training and certification'],
  ],
  },
  {
  tit,
  l: e: 'Strategic Partners',descripti,
  o: n: 'Form long-term alliances for mutual growth and market expansion',ic,
  o: n: '🤝',benefi,
  t: s: [['Joint venturesMarket expansion support', 'Shared R&D initiatives'],
  ],
  },
  {
  tit,
  l: e: 'Academic Partners',descripti,
  o: n: 'Partner with universities and research institutions for innovation',ic,
  o: n: '🎓',benefi,
  t: s: [['Research collaborationTalent pipeline', 'Innovation programs'],
  ],
  },
  ]
  const existingPartners = [
  {
  na,
  m: e: 'Microsoft',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1634942537034-2531766767d9?w=200&h=200&fit=crop',catego,
  r: y: 'Technology Partner',descripti,
  o: n: 'Leading cloud and AI solutions provider',ye,
  a: r: '2020'
},
  {
  na,
  m: e: 'Amazon Web Services',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',catego,
  r: y: 'Cloud Partner',descripti,
  o: n: 'World\'s most comprehensive cloud platform',ye,
  a: r: '2021'
},
  {
  na,
  m: e: 'Google Cloud',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1611162617213-2d3e1baee311?w=200&h=200&fit=crop',catego,
  r: y: 'AI Partner',descripti,
  o: n: 'Advanced AI and machine learning solutions',ye,
  a: r: '2022'
},
  {
  na,
  m: e: 'IBM',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop',catego,
  r: y: 'Enterprise Partner',descripti,
  o: n: 'Enterprise AI and quantum computing',ye,
  a: r: '2021'
},
  {
  na,
  m: e: 'Stanford University',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop',catego,
  r: y: 'Academic Partner',descripti,
  o: n: 'Research collaboration in AI and technology',ye,
  a: r: '2023'
},
  {
  na,
  m: e: 'MIT',lo,
  g: o: 'http,
  s://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop',catego,
  r: y: 'Research Partner',descripti,
  o: n: 'Innovation in emerging technologies',ye,
  a: r: '2022'
},
  ]
  const benefits = [
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: 'Revenue Growth',descripti,
  o: n: 'Access new markets and customer segments through our global network'
},
  {
  ic,
  o: n: Users,tit,
  l: e: 'Network Expansion',descripti,
  o: n: 'Connect with industry leaders and potential customers worldwide'
},
  {
  ic,
  o: n: Award,tit,
  l: e: 'Brand Recognition',descripti,
  o: n: 'Leverage our established reputation in the tech industry'
},
  {
  ic,
  o: n: Globe,tit,
  l: e: 'Global Reach',descripti,
  o: n: 'Expand your business presence across multiple countries and regions'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */},
  }
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
            Partner with Zion Tech Group
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of innovative partners and together we'll shape the future of technology
          </p>
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold,
  hove: r:scale-105 transition-transform">
                Become a Partner
              </button>
            </Link>
            <Link to="#partnership-types">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-zion-blue transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Partnership Types */},
  }
      <section id="partnership-types" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
  <div key={index} className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20,
  hove: r: border-zion-cyan/50 transition-all duration-300 hove,
  r:scale-105">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits */},
  }
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Existing Partners */},
  }
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
  <div key={index} className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20,
  hove: r:border-zion-cyan/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name},
  }
                    className="className="w-16 h-16 rounded-lg object-cover";"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                    <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {partner.category},
  }
                    </span>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zion-slate-light">Partner since {partner.year}</span>
                  <button className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Process */},
  }
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How to Become a Partner
          </h2>
          <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Initial Contact</h3>
              <p className="text-zion-slate-light text-sm">Reach out to discuss partnership opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Evaluation</h3>
              <p className="text-zion-slate-light text-sm">We assess mutual benefits and alignment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agreement</h3>
              <p className="text-zion-slate-light text-sm">Finalize partnership terms and conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              <p className="text-zion-slate-light text-sm">Begin collaboration and joint initiatives</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */},
  }
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Partner Network?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's explore how we can work together to create innovative solutions and drive mutual success in the technology industry.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold,
  hove: r:scale-105 transition-transform flex items-center space-x-2">
                <span>Start Partnership Discussion</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/about">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-zion-blue transition-colors">
                Learn About Zion Tech
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
