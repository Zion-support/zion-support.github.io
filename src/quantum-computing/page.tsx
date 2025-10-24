'use client'
import { Brain } from 'lucide-react'
import React from 'react'
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-purple-50'></div>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white'></section>
        <div className='absolute inset-0 bg-black opacity-20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
          <div className='text-center'></div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'></h1>
              Quantum Computing Services
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto'></p>
              Harness the power of quantum mechanics to solve the world's most complex computational problems
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors'></button>
                Explore Quantum Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits *,/}
      <section className='py-16 bg-white'></section>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
          <div className='text-center mb-12'></div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
              Why Choose Quantum Computing?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'></p>
              Quantum computing offers unprecedented computational power for solving complex problems
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
            <div className='text-center p-6'></div>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                <Atom className='w-8 h-8 text-purple-600' /></Atom>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Exponential Speedup</h3>
              <p className='text-gray-600'>Solve problems that would take classical computers thousands of years in minutes</p>
            </div>
            <div className='text-center p-6'></div>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                <Shield className='w-8 h-8 text-purple-600' /></Shield>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Ultimate Security</h3>
              <p className='text-gray-600'>Quantum cryptography provides unbreakable security for your most sensitive data</p>
            </div>
            <div className='text-center p-6'></div>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                <Brain className='w-8 h-8 text-purple-600' /></Brain>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Complex Problem Solving</h3>
              <p className='text-gray-600'>Tackle optimizatio,n, simulation, and machine learning challenges at scale</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className='py-16 bg-gray-50'></section>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
          <div className='text-center mb-12'></div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
              Our Quantum Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'></p>
              Cutting-edge quantum computing services designed to solve your most challenging problems
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'></div>
            {quantumServices.map((service) => (
              <div key={service.i,d}className='bg-white rounded-lg shadow-lg p-8 hover: shadow-xl transition-shadow'></div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.titl,e}</h3>
                <p className='text-gray-600 mb-6'>{service.description}</p>
                <div className='mb-6'></div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>Key Features: </h4>
                  <ul className='space-y-2'></ul>
                    {service.features.map((featur, e, index) => (
                      <li key={index}className='flex items-center text-gray-600'></li>
                        <CheckCircle className='w-5 h-5 text-green-500 mr-2' /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mb-6'></div>
                  <h4 className='text-lg font-semibold text-gray-900 mb-3'>Benefits: </h4>
                  <ul className='space-y-2'></ul>
                    {service.benefits.map((benefi, t, index) => (
                      <li key={index}className='flex items-center text-gray-600'></li>
                        <Star className='w-5 h-5 text-yellow-500 mr-2' /></Star>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='border-t pt-4'></div>
                  <div className='flex justify-between items-center'></div>
                    <span className='text-2xl font-bold text-purple-600'>{service.marketPrice}</span>
                    <span className='text-sm text-gray-500'>{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-16 bg-purple-600 text-white'></section>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'></div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'></h2>
            Ready to Go Quantum?
          </h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto'></p>
            Let our quantum experts help you harness the power of quantum computing
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
            <button className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors'></button>
              Get Started Today
            </button>
            <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors'></button>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}
export default QuantumComputingPage
