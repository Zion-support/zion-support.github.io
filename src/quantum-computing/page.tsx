import { Brain } from 'lucide-react';
import React from 'react';
import { Atom, Lock } from 'lucide-react';
import { CheckCircle, Star, Brain, Shield } from 'lucide-react';
'use client'

const Page: React.FC = () => {
  const quantumService,
      s = [
    {,
    'id: 'quantum-algorithms'',
    'title: 'Quantum Algorithm Development'',
    'description: 'Custom quantum algorithms designed to solve your specific computational challenges.'',
    'features: ['Custom algorithm design', 'Quantum circuit optimization', 'Performance benchmarking', 'Implementation support''
  ]
      benefits: ['Exponential speedup', 'Complex problem solving', 'Competitive advantage', 'Future-proof technology']
      marketPrice: '$5,00 0-1 5,00 0/month'
      category: 'Algorithm Development'
      technologie,
      s: ['Qiskit', 'Cirq', 'Q#', 'PennyLane', 'Quantum Hardware']
   }
    {id: 'quantum-cryptography'
      title: 'Quantum Cryptography Solutions'
      descriptio,
      n: 'Ultra-secure communication systems using quantum key distribution and quantum encryption.'
      feature,
      s: ['Quantum key distribution', 'Quantum encryption', 'Security protocols', 'Implementation support']
      benefits: ['Unbreakable security', 'Future-proof encryption', 'Regulatory compliance', 'Peace of mind']
      marketPrice: '$8,00 0-2 0,00 0/month'
      category: 'Security Solutions'
      technologie,
      s: ['BB84Protocol', 'Quantum Networks', 'Hardware Integration', 'Security Auditing']
   }
    {id: 'quantum-optimization'
      title: 'Quantum Optimization Services'
      descriptio,
      n: 'Solve complex optimization problems using quantum annealing and variational algorithms.'
      feature,
      s: ['Problem modeling', 'Quantum annealing', 'Variational algorithms', 'Performance analysis']
      benefits: ['Optimal solutions', 'Faster convergence', 'Cost reduction', 'Improved efficiency']
      marketPrice: '$3,00 0-1 0,00 0/month'
      category: 'Optimization'
      technologie,
      s: ['D-Wave', 'IBM Qiskit', 'Rigetti', 'IonQ', 'Custom Algorithms']
    }
  ]
  return (</div>
      {
    /* Hero Section  */
    return (</section>
        <div className="abs oluteinset-0 bg-black opacity-20"></div>
        <div className="rel ativemax-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-center"></div>
            <h1 className="tex t-4xlmd:text-6xl font-bold mb-6">
        </div>
              Quantum Computing Services
            </h1>
            <p className="tex t-xlmd:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
        </div>
              Harness the power of quantum mechanics to solve the world's most complex computational problems
            </p>
            <div className="fle xflex-col s,
      m:flex-row gap-4 justify-center"></div>
              <button className="bg-wh itetext-purple-600 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-purple-50 transition-colors">
        </div>
                Explore Quantum Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      {
    /* Key Benefits  */
    return (</section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-centermb-12"></div>
            <h2 className="tex t-3xlmd:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Why Choose Quantum Computing?
            </h2>
            <p className="tex t-xltext-gray-600 max-w-3xl mx-auto">
        </div>
              Quantum computing offers unprecedented computational power for solving complex problems
            </p>
          </div>
          <div className="gri dgrid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-p u rple-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Atom className="w-8h-8te x t-purple-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Exponential Speedup</h3>
              <p className="tex t-gray-600">Solve problems that would take classical computers thousands of years in minutes</p>
            </div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-p u rple-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Shield className="w-8h-8te x t-purple-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Ultimate Security</h3>
              <p className="tex t-gray-600">Quantum cryptography provides unbreakable security for your most sensitive data</p>
            </div>
            <div className="tex t-centerp-6"></div>
              <div className="w-16h-16bg-p u rple-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <Brain className="w-8h-8te x t-purple-600" />
              </div>
              <h3 className="tex t-xlfont-semibold text-gray-900 mb-2">Complex Problem Solving</h3>
              <p className="tex t-gray-600">Tackle optimization, simulation, and machine learning challenges at scale</p>
            </div>
          </div>
        </div>
      </section>
      {
    /* Services  */
    return (</section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="tex t-centermb-12"></div>
            <h2 className="tex t-3xlm,
      d:text-4xl font-bold text-gray-900 mb-4">
        </div>
              Our Quantum Solutions
            </h2>
            <p className="tex t-xltext-gray-600 max-w-3xl mx-auto">
        </div>
              Cutting-edge quantum computing services designed to solve your most challenging problems
            </p>
          </div>
          <div className="gri dgrid-cols-1 l,
      g:grid-cols-2 gap-8"></div>
            {quantumServices.map((service) => ()
              <div key={service.id} className="bg-wh iterounded-lg shadow-lg p-8 hover: shadow-xl transition-shadow"></div>
                <h3 className="tex t-2xlfont-bold text-gray-900 mb-4">{service.title};

  return (
                <p className="tex t-gray-600mb-6">{service.description};

  return (
                <div className="mb-6"></div>
                  <h4 className="tex t-lgfont-semibold text-gray-900 mb-3">Key Features: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.features.map((feature, index) => ()
                      <li key={index} className="fle xitems-center text-gray-600">
        </div>
                        <CheckCircle className="w-5h-5te x t-green-500 mr-2" />
                        {feature};

  return (
                    ))};

  return (
                </div>
                <div className="mb-6"></div>
                  <h4 className="tex t-lgfont-semibold text-gray-900 mb-3">Benefits: </h4>
                  <ul className="spa ce-y-2">
        </div>
                    {service.benefits.map((benefit, index) => ()
                      <li key={index} className="fle xitems-center text-gray-600">
        </div>
                        <Star className="w-5h-5te x t-yellow-500 mr-2" />
                        {benefit};

  return (
                    ))};

  return (
                </div>
                <div className="bor der-tpt-4"></div>
                  <div className="fle xjustify-between items-center"></div>
                    <span className="tex t-2xlfont-bold text-purple-600">{service.marketPrice};

  return (
                    <span className="tex t-smtext-gray-500">{service.category};

  return (
                  </div>
                </div>
              </div>
            ))};

  return (
        </div>
      </section>
      {
    /* CTA Section  */
    return (</section>
        <div className="max-w-7x lmx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
          <h2 className="tex t-3xlmd:text-4xl font-bold mb-4">
        </div>
            Ready to Go Quantum?
          </h2>
          <p className="tex t-xlmb-8 max-w-3xl mx-auto">
        </div>
            Let our quantum experts help you harness the power of quantum computing
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-wh itetext-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
        </div>
              Get Started Today
            </button>
            <button className="bor der-2border-white text-white px-8 py-3 rounded-lg font-semibold hove,
      r:bg-white hove,
      r:text-purple-600 transition-colors">
        </div>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )

export default Page;
}
}}}}