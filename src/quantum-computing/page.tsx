'use client'
import { Brain } from 'lucide-react'
import React from 'react'
import { Atom, Lock } from 'lucide-react'
import { CheckCircle, Star, Brain, Shield } from 'lucide-react'

const QuantumComputingPage: React.FC = () => {
  const quantumServices = [
import {Atom, Lock, CheckCircle, Star, Brain, Shield} from 'lucide-react';
const QuantumComputingPage: React.FC = () => {constquantumServices= [
    {
      id: 'quantum-algorithms',
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed to solve your specific computational challenges.',
      features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance benchmarking', 'Implementation support'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Competitive advantage', 'Future-proof technology'],
      marketPrice: '$5,00 0-1 5,00 0/month',
      category: 'Algorithm Development',
      technologies: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Quantum Hardware']
   },
    {id: 'quantum-cryptography',
      title: 'Quantum Cryptography Solutions',
      description: 'Ultra-secure communication systems using quantum key distribution and quantum encryption.',
      features: ['Quantum key distribution', 'Quantum encryption', 'Security protocols', 'Implementation support'],
      benefits: ['Unbreakable security', 'Future-proof encryption', 'Regulatory compliance', 'Peace of mind'],
      marketPrice: '$8,00 0-2 0,00 0/month',
      category: 'Security Solutions',
      technologies: ['BB84Protocol', 'Quantum Networks', 'Hardware Integration', 'Security Auditing']
   },
    {id: 'quantum-optimization',
      title: 'Quantum Optimization Services',
      description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
      features: ['Problem modeling', 'Quantum annealing', 'Variational algorithms', 'Performance analysis'],
      benefits: ['Optimal solutions', 'Faster convergence', 'Cost reduction', 'Improved efficiency'],
      marketPrice: '$3,00 0-1 0,00 0/month',
      category: 'Optimization',
      technologies: ['D-Wave', 'IBM Qiskit', 'Rigetti', 'IonQ', 'Custom Algorithms']
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-purple-50&quot;></div>
      {/* Hero Section */}
      <section className=&quot;relative py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white&quot;></section>
        <div className=&quot;absolute inset-0 bg-black opacity-20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              Quantum Computing Services
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto&quot;>
              Harness the power of quantum mechanics to solve the world's most complex computational problems
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors&quot;>
                Explore Quantum Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Key Benefits */}
      <section className=&quot;py-16 bg-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Why Choose Quantum Computing?
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Quantum computing offers unprecedented computational power for solving complex problems
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Atom className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Exponential Speedup</h3>
              <p className=&quot;text-gray-600&quot;>Solve problems that would take classical computers thousands of years in minutes</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Shield className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Ultimate Security</h3>
              <p className=&quot;text-gray-600&quot;>Quantum cryptography provides unbreakable security for your most sensitive data</p>
            </div>
            <div className=&quot;text-center p-6&quot;></div>
              <div className=&quot;w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                <Brain className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>Complex Problem Solving</h3>
              <p className=&quot;text-gray-600&quot;>Tackle optimization, simulation, and machine learning challenges at scale</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className=&quot;py-16 bg-gray-50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center mb-12&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
              Our Quantum Solutions
            </h2>
            <p className=&quot;text-xl text-gray-600 max-w-3xl mx-auto&quot;>
              Cutting-edge quantum computing services designed to solve your most challenging problems
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;></div>
            {quantumServices.map((service) => (
              <div key={service.id} className=&quot;bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow&quot;></div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Key Features:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.features.map((feature, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-2&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;mb-6&quot;></div>
                  <h4 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Benefits:</h4>
                  <ul className=&quot;space-y-2&quot;>
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className=&quot;flex items-center text-gray-600&quot;>
                        <Star className=&quot;w-5 h-5 text-yellow-500 mr-2&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=&quot;border-t pt-4&quot;></div>
                  <div className=&quot;flex justify-between items-center&quot;></div>
                    <span className=&quot;text-2xl font-bold text-purple-600&quot;>{service.marketPrice}</span>
                    <span className=&quot;text-sm text-gray-500&quot;>{service.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 bg-purple-600 text-white&quot;></section>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
            Ready to Go Quantum?
          </h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Let our quantum experts help you harness the power of quantum computing
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors&quot;>
              Get Started Today
            </button>
            <button className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors&quot;>
              Learn More
            </button>
          </div>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
        </div>
      </div>
    </div>
  )
}
export default QuantumComputingPage;
   }
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-purple-50">{/* HeroSection */}
    <sectionclassName="relative py-20bg-gradient-to-rfrom-purple-600to-indigo-700text-white"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Quantum Computing Services</h><spanclassName="text-xlmd:text-2 xl mb-8 text-purple-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-purple-100max-w-3xlmx-auto">Harness the power of quantum mechanics to solve the world's most complex computational problems</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors"></className="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors">Explore Quantum Solutions</butto></di></di></di></sectio>{/* KeyBenefits */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Quantum Computing?
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Quantum computing offers unprecedented computational power for solving complex problems</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-centerp-6"><divclassName="w-16h-16bg-purple-100rounded-full flex items-center justify-centermx-automb-4"><AtomclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ExponentialSpeedup</h><pclassName="text-gray-600">Solve problems that would take class ical computers thousands of yearsinminutes</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-purple-100rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">UltimateSecurity</h><pclassName="text-gray-600">Quantum cryptography provides unbreakable security for your mostsensitivedata</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-purple-100rounded-full flex items-center justify-centermx-automb-4"><BrainclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ComplexProblemSolving</h><pclassName="text-gray-600">Tackle optimization, simulation, and machine learning challengesatscale</p></di></di></di></sectio>{/* Services */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Quantum Solutions</h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Cutting-edge quantum computing services designed to solve your most challenging problems</p></di><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{quantumServices.map((service) => (
           <divkey={service.id}className="bg-white rounded-lg shado w-lg p-8 hover:shado w-xltransition-shadow"><h3className="text-2 xl font-bold text-gray-900mb-4">{service.title}</h><pclassName="text-gray-600mb-6">{service.description}</p><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">KeyFeatures:</h><ulclassName="space-y-2">{service.features.map((featureindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><CheckCircleclassName="w-5 h-5 text-green-500mr-2" />{feature}
                    </l>))}
                </u></di><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">Benefits:</h><ulclassName="space-y-2">{service.benefits.map((benefitindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><StarclassName="w-5 h-5 text-yellow-500mr-2" />{benefit}
                    </l>))}
                </u></di><divclassName="border-tpt-4"><divclassName="flexjustify-betweenitems-center"><spanclassName="text-2 xl font-boldtext-purple-600">{service.marketPrice}</spa><spanclassName="text-smtext-gray-500">{service.category}</spa></di></di></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-purple-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Go Quantum?
        </h><spanclassName="text-xl mb-8 max-w-3xlmx-auto"></spa></className="text-xl mb-8 max-w-3xlmx-auto">Let our quantum experts help you harness the power of quantum computing</p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors"></spa></className="bg-white text-purple-600px-8 py-3 rounded-lg font-semiboldhover:bg-purple-50transition-colors">Get Started Today</butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-purple-600transition-colors"></spa></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-purple-600transition-colors">Learn More</butto></di></di></sectio></di>
  );
};
export default QuantumComputingPage;
