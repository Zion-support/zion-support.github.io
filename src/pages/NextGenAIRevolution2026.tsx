import React from 'react';
import { motion } from 'framer-motion';

const NextGenAIRevolution2026: React.FC = () => {
  return (
            <p className="text-purple-100 mb-6 text-center">
              Self-learning AI agents that can independently execute complex tasks, make decisions, and adapt to new challenges in real-time
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Self-optimizing algorithms</li>
              <li>• Real-time decision making</li>
              <li>• Continuous learning capabilities</li>
              <li>• Multi-domain expertise</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Edge AI Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Ultra-fast AI processing at the edge with minimal latency, enabling real-time intelligence in any environment
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Sub-millisecond response times</li>
              <li>• Offline processing capabilities</li>
              <li>• Reduced bandwidth requirements</li>
              <li>• Enhanced privacy and security</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🎨</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Generative AI 2.0</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Next-generation creative AI that can generate hyper-realistic content, code, and solutions with human-level creativity
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Multi-modal content generation</li>
              <li>• Context-aware creativity</li>
              <li>• Style transfer and adaptation</li>
              <li>• Collaborative AI-human creation</li>
            </ul>
          </motion.div>
        </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🏭 Industry Transformations</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our AI revolution is transforming industries across the globe
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenAIRevolution2026;