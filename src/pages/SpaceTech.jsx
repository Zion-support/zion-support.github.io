import React from "react"
import { Link } from "react-router-dom"
const SpaceTech = () () => {
    const spaceTechnologies = [
        {
            tit,
  l: e: "Satellite Technology",descripti,
  o: n: "Advanced satellite systems for communication, navigation, and Earth observation."
            applicatio,
  n: s: [["Global Communications", "GPS Navigation", "Climate Monitoring", "Remote Sensing"];]
        }, {
            tit,
  l: e: "Space Robotics",descripti,
  o: n: "Autonomous robotic systems for space exploration and satellite maintenance.",applicatio,
  n: s: [["Satellite Repair", "Space Debris Cleanup", "Planetary Exploration", "Space Station Operations"];]
        }, {
            tit,
  l: e: "Space Communications",descripti,
  o: n: "High-speed, secure communication networks for space missions and satellite operations."
            applicatio,
  n: s: [["Deep Space Communication", "Satellite Networks", "Mission Control", "Data Transmission"];]
        }, {
            tit,
  l: e: "Space Analytics",descripti,
  o: n: "AI-powered analysis of space data for scientific research and commercial applications.",applicatio,
  n: s: [["Space Weather Prediction", "Orbital Mechanics", "Resource Mapping", "Scientific Discovery"];]
        }
    ]
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl m,
  d:text-6xl font-bold mb-6">
              Space
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advancing humanity's reach into space with cutting-edge technology solutions 
              for exploration, communication, and scientific discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8 mb-16">
            {spaceTechnologies.map((tech, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20,
  hove: r:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Applications</h4>
                  <ul className="space-y-1">
                    {tech.applications.map((app, idx) => (<li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {app}
                      </li>))}
                  </ul>
                </div>
              </div>))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Reach for the Stars</h3>
              <p className="text-gray-300 mb-6">
                Ready to explore the final frontier? Let's discuss how space technology 
                can advance your mission and expand human capabilities.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700 hove,
  r:to-cyan-700 transition-all duration-300">
                Explore Space Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>)
}
export default SpaceTech