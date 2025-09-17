import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingBreakthrough2025: React.FC = () => {
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Live Quantum Calculations</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-600/30 rounded-lg p-3">
                    <div className="font-semibold">Prime Factorization:</div>
                    <div>2^127 - 1 = 170,141,183,460,469,231,731,687,303,715,884,105,727</div>
                    <div className="text-cyan-200">Completed in 0.001 seconds</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <div className="font-semibold">Optimization Problem:</div>
                    <div>Traveling Salesman (1000 cities)</div>
                    <div className="text-blue-200">Optimal solution found in 0.05 seconds</div>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <div className="font-semibold">Machine Learning:</div>
                    <div>Neural Network Training (1M parameters)</div>
                    <div className="text-purple-200">Converged in 0.1 seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join the quantum revolution and unlock computational capabilities that were once thought impossible. 
                The future of computing is quantum, and it starts now.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                  Start Quantum Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;
