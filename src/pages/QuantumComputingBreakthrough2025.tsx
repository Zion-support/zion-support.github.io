import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingBreakthrough2025: React.FC = () => {
  return (
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