import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Star, Phone } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
interface ServicePageProps {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: string,,
    descriptio,
  n: string,,
    ico,
  n: React.ComponentType,
          <{ className?: string }>
  service,
  s: Array<{/* TODO: Fix JSX expression */}
  s: string[],}
    pric,
  e: string,
  }>
  benefit,
  s: string[],
}
const,
  ServicePage: React.FC<ServicePageProps> = ({ title, description, services, benefits }) => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
            Service Template
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Blog Post
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <$2 />
              to="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
// >
          "
          <Phone className="w-5 h-5 mr-2" /></Phone>
// Get Free Consultation
          </Link>
            <$2 />
              href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              <Phone className="w-4 h-4 mr-2" />
// (302) 464-0950,
          </a>
          </div>
        </section>
        {/* Services Grid */}"
        <section className="container mx-auto px-4 py-16"></section>"
          < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-2 gap-8">
            {services.map((service, index) => ()}"
          < key={index} className="cyber-card p-8,"$2 />
  hover:scale-105 transition-all duration-300"></div>"
                <div className="flex items-center mb-6"></div>"
                  <service.icon className="w-12 h-12 text-cyan-400 mr-4" /></service>"
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>"
                <p className="text-gray-300 mb-6">{service.description}</p>"
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {feature}
                  ))}
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}
                  className="cyber-button w-full text-center inline-block" Get Started
        {/* Benefits Section */}
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our {title}?
          </h2>"
          < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => ()}"
          <div key={index} className="text-center"></div>"
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <Star className="w-8 h-8 text-white" /></Star>"
                <h3 className="text-xl font-bold text-white mb-2">{benefit}
        {/* CTA Section */}"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-4">
Ready to Transform Your Business?"
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our solutions can revolutionize your operations.
      </main>
      <Footer /></Footer>
    </div>
  )
}
export default ServicePage</p>
  </h1>
  </ServicePageProps>
</p></h2></h3></ul>