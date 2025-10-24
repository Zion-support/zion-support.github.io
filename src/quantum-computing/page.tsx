import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const Page: React.FC = () => {;
import React from 'react';
import { Atom, Lock, CheckCircle, Star, Brain, Shield, Check } from 'lucide-react';
'use client'
import { Bra, i, n } from 'lucide-react'
import React from 'react'
import { Atom, Lock } from 'lucide-react'
import { CheckCircle, Star, Brain, Shield } from 'lucide-react'

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
import {Atom, Lock, CheckCircle, Star, Brain, Shield} from 'lucide-react';
import { Atom, Lock  } from "lucide-react";
import { CheckCircle, Star, Brain, Shield  } from "lucide-react";
const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
    {
      id: 'quantum-algorithms,&apos;,
      title: 'Quantum Algorithm Development,',
      description: 'Custom quantum algorithms designed to solve your specific computational challenges.',
      features: ['Custom algorithm design,', 'Quantum circuit optimization', 'Performance benchmarking', 'Implementation support'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Competitive advantage', 'Future-proof technology'],
      marketPrice: '$,5,00 0-1 5,00 0/month',
      category: 'Algorithm Development,',
      technologies: ['Qiskit,', 'Cirq', 'Q#', 'PennyLane', 'Quantum Hardware']
}
    {id: 'quantum-cryptography,',
      title: 'Quantum Cryptography Solutions,',
      description: 'Ultra-secure communication systems using quantum key distribution and quantum encryption.',
      features: ['Quantum key distribution,', 'Quantum encryption', 'Security protocols', 'Implementation support'],
      benefits: ['Unbreakable security', 'Future-proof encryption', 'Regulatory compliance', 'Peace of mind'],
      marketPrice: '$,8,00 0-2 0,00 0/month',
      category: 'Security Solutions,',
      technologies: ['BB84Protocol,', 'Quantum Networks', 'Hardware Integration', 'Security Auditing']
   },
    {id: 'quantum-optimization,',
      title: 'Quantum Optimization Services,',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
      features: ['Problem modeling,', 'Quantum annealing', 'Variational algorithms', 'Performance analysis'],
      benefits: ['Optimal solutions', 'Faster convergence', 'Cost reduction', 'Improved efficiency'],
      marketPrice: '$,3,00 0-1 0,00 0/month',
      category: 'Optimization,',
      technologies: ['D-Wave,', 'IBM Qiskit', 'Rigetti', 'IonQ', 'Custom Algorithms']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50"></div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white"></section>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Computing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8" /  />"
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" / />"
              <p className="text-gray-300" /  />
import { React from "react";
import { Navigation  } from "../components/Navigation";
import { Footer  } from "../components/Footer";
import { SEOOptimizer  } from "../components/SEOOptimizer";
const Page: React.FC = () => {
return (<SEOOptimizer title="Page",description="Professional page services and solutions for your business needs.", keywords={ ["page","AI solutions","business automation","technology services"] }; </div>
canonicalUrl = "https: //ziontechgroup.com/page"
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <Navigation/ /> <main className="container mx-auto px-4 py-16 pt-24" /> <div className="text-center" /> <h1 className="text-4, xl, m,d: text-5 xl font-bold text-white mb-8 neon-text" />
Page</h1>
            </h1> <p className="text-xl text-gray-300 mb-8" />
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" /> <p className="text-gray-300" />
This page is under development. Please check back soon for more information about our page services.</p>
              </p>
              </div>
            </div>
        </main>
        <Footer//>
        </div>
      </section>
      {/* Services */}
      <section className="py-16 bg-gray-50"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quantum Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge quantum computing services designed to solve your most challenging problems
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
            {quantumServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4"></div>
                  <div className="flex justify-between items-center"></div>
                    <span className="text-2xl font-bold text-purple-600">{service.marketPrice}</span>
                    <span className="text-sm text-gray-500">{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Quantum?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our quantum experts help you harness the power of quantum computing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </button>
          </div>
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
        </div>
      </div>
    </div>
  ),
}
export default QuantumComputingPage

export default QuantumComputingPage;
export default QuantumComputingPage;
