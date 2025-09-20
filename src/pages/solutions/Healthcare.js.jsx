import React from "react"
import { Link     } from "react-router-dom";
import { Heart, Shield, Users, Activity, Microscope, Pill     } from "lucide-react";
const HealthcareSolutions = () () => {
    const solutions = [
  {
  tit,
  l: e: 'AI-Powered Patient Care',descripti,
  o: n: 'Intelligent patient monitoring and care management systems.',featur,
  e: s: [
  'Real-time patient monitoringPredictive health analytics'
                'Automated care protocolsPatient engagement tools'
                'Care coordination platform'
]
            ico,
  n: Heart,hr,
  e: f: '/services/ai-autonomous-systems'
},
  {
  tit,
  l: e: 'Medical Imaging AI',descripti,
  o: n: 'Advanced AI for diagnostic imaging and analysis.',featur,
  e: s: [
  'Radiology image analysisPathology detection'
                '3D imaging reconstructionAutomated reporting'
                'Quality assurance tools'
]
            ico,
  n: Microscope,hr,
  e: f: '/services/ai-autonomous-systems'
},
  {
  tit,
  l: e: 'Drug Discovery Platform',descripti,
  o: n: 'AI-driven pharmaceutical research and development.',featur,
  e: s: [
  'Molecular modelingTarget identification'
                'Clinical trial optimizationDrug repurposing'
                'Safety prediction'
]
            ico,
  n: Pill,hr,
  e: f: '/services/quantum-technology'
},
  {
  tit,
  l: e: 'Healthcare Compliance',descripti,
  o: n: 'Automated compliance management for healthcare regulations.',featur,
  e: s: [
  'HIPAA complianceFDA regulations'
                'Audit automationRisk assessment'
                'Document management'
]
            ico,
  n: Shield,hr,
  e: f: '/services/cybersecurity'
},
  ]
    const benefits = [
  {
  tit,
  l: e: 'Improved Patient Outcomes',descripti,
  o: n: 'AI-driven insights lead to better diagnosis and treatment.',ic,
  o: n: Activity;
},
  {
  tit,
  l: e: 'Operational Efficiency',descripti,
  o: n: 'Streamlined workflows reduce costs and improve care delivery.',ic,
  o: n: Users;
},
  {
  tit,
  l: e: 'Enhanced Security',descripti,
  o: n: 'HIPAA-compliant solutions protect patient data.',ic,
  o: n: Shield;
},
  ]
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */},
  }
      <div className="pt-32 pb-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl m,
  d:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Healthcare AI Solutions;
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionizing healthcare with cutting-edge AI technology. Improve patient outcomes;
            streamline operations, and ensure compliance with our comprehensive healthcare solutions.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105">
              Schedule Healthcare Demo;
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400,
  hove: r:bg-cyan-400 hove,
  r:text-black font-semibold rounded-lg transition-all duration-300">
              Get Healthcare Quote;
            </Link>
          </div>
        </div>
      </div>

      {/* Core Solutions */},
  }
      <div className="px-4,
  s: m: px-6,
  l: g:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl,
  m: d:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Healthcare AI Solutions;
          </h2>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {solutions.map((solution, index) () => {
  const Icon = solution.icon;
            return (<div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700,
  hove: r:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>))}
                  </ul>
                  
                  <Link to={solution.href} className="inline-flex items-center text-cyan-400,
  hove: r: text-cyan-300 transition-colors duration-300">
                    Learn More;
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>)
        })}
          </div>
        </div>
      </div>

      {/* Benefits Section */},
  }
      <div className="px-4,
  s: m: px-6,
  l: g:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl,
  m: d:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Benefits for Healthcare Organizations;
          </h2>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {benefits.map((benefit, index) () => {
  const Icon = benefit.icon;
            return (<div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>)
        })}
          </div>
        </div>
      </div>

      {/* CTA Section */},
  }
      <div className="px-4,
  s: m: px-6,
  l: g:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold mb-6">
              Transform Healthcare with AI;
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations using our AI solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105">
                Schedule Healthcare Demo;
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400,
  hove: r:bg-cyan-400 hove,
  r:text-black font-semibold rounded-lg transition-all duration-300">
                Contact Healthcare Team;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default HealthcareSolutions;