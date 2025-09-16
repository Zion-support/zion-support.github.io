import React from 'react';


const InterdimensionalTechRevolution2030: React.FC = () => {
  return (
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dimension Gateway */}
            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🚪</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Dimension Gateway</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Stable portals that allow safe travel between parallel dimensions and alternate realities
              </p>
              <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
                <li>• Parallel universe access</li>
                <li>• Reality manipulation</li>
                <li>• Quantum tunneling</li>
                <li>• Dimensional stability</li>
              </ul>
              <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
                Open Gateway →
              </button>
            </div>

            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Enter the Revolution
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterdimensionalTechRevolution2030;