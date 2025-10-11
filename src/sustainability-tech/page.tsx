import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Leaf, Target, Zap, Settings, CheckCircle, Star,  Leaf,  Target,  Settings } from 'lucide-react'
const SustainabilityTechPage: React.FC = () => {
    const features = [],
  return (
    {// TODO: Add content
  }
}
  ico,
  n: Leaf,
      titl,
  e: 'Green Technology',
      descriptio,
  n: 'Sustainable technology solutions for environmental impact',
      benefit,
  s: ['Carbon reduction', 'Energy efficiency', 'Waste reduction']
    },
      ico,
  n: Target,
      titl,
  e: 'Sustainability Analytics',
      descriptio,
  n: 'Data-driven sustainability insights and reporting',
      benefit,
  s: ['Environmental metrics', 'Sustainability reporting', 'Impact analysis']
      ico,
  n: Settings,
      titl,
  e: 'Circular Economy',
      descriptio,
  n: 'Circular economy solutions and waste management',
      benefit,
  s: ['Waste reduction', 'Resource optimization', 'Recycling systems']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
// Sustainability Tech
          </h1>"
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
// Green Technology Solutions,
          </p>"
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
// Build a sustainable future with our green technology solutions. From renewable energy to circular economy,
            we help you reduce environmental impact while driving business growth.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <$2 />
              href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
// >
//               Get Started
          </a>
              href="tel:+13024640950" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
<Leaf className="w-5 h-5" />
              +1 302 464 0950,
          </div>
        </section>"
        <section className="mb-16"></section>"
          < className="text-3xl,"$2 />
  md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
// Sustainability Solutions,
          </h2>"
          < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8"></div>)
            {features.map((feature, index) => ()}"
          < key={index} className="cyber-card p-6,"$2 />
  hover:scale-105 transition-all duration-300"></div>"
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>"
                  <feature.icon className="w-8 h-8 text-white" /></feature>"
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>"
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}"
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>"
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                  ))}
                </ul>
      </main>
      <Footer /></Footer>
    </div>
  )
}
export default SustainabilityTechPage