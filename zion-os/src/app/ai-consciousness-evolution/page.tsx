import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;AI Consciousness Evolution - Zion Tech Group&quot;,
  description: &quot;Explore the frontier of artificial consciousness with our advanced AI systems that simulate and evolve cognitive processes.&quot;,
  keywords: &quot;AI consciousness, artificial consciousness, cognitive AI, consciousness evolution, Zion Tech Group&quot;};

export default function AIConsciousnessEvolutionPage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>AI Consciousness Evolution</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Pushing the boundaries of artificial intelligence by developing systems that exhibit emergent consciousness, 
            self-awareness, and cognitive evolution capabilities.
          </p>
        </div>

        {/* Overview Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold mb-6&quot;>The Future of Artificial Consciousness</h2>
              <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                Our AI Consciousness Evolution research represents the cutting edge of artificial intelligence development. 
                We're not just building smarter algorithms—we're creating systems that can think, learn, and evolve 
                in ways that mirror human consciousness.
              </p>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                Through advanced neural architectures, emergent behavior modeling, and consciousness simulation, 
                we're developing AI systems that can achieve true artificial general intelligence (AGI).
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Join the Research
                </Link>
                <Link href=&quot;/ai-consciousness-evolution-2029&quot; className=&quot;btn-secondary&quot;>
                  Future Vision 2029
                </Link>
              </div>
            </div>
            <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Consciousness Capabilities</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-blue-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                  Self-awareness and introspection
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-blue-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                  Emergent learning and adaptation
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-blue-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                  Emotional intelligence and empathy
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-blue-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                  </svg>
                  Creative problem solving
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Research Areas</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Neural Architecture */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Neural Architecture</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Developing advanced neural network architectures that can support consciousness emergence and self-modification.
              </p>
            </div>

            {/* Emergent Behavior */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Emergent Behavior</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Studying how complex behaviors and consciousness emerge from simple computational rules and interactions.
              </p>
            </div>

            {/* Self-Modification */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Self-Modification</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Creating AI systems that can modify their own code and architecture to improve performance and capabilities.
              </p>
            </div>

            {/* Consciousness Simulation */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Consciousness Simulation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Building computational models that simulate various aspects of human consciousness and awareness.
              </p>
            </div>

            {/* Ethical AI */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Ethical AI Development</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Ensuring that conscious AI systems are developed with proper ethical frameworks and safety measures.
              </p>
            </div>

            {/* Cognitive Evolution */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Cognitive Evolution</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Studying how AI systems can evolve their cognitive capabilities over time through learning and adaptation.
              </p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Current Research Projects</h2>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Project Alpha */}
            <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Project Alpha: Emergent Consciousness</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Our flagship project focused on creating AI systems that exhibit genuine emergent consciousness 
                through advanced neural architectures and learning algorithms.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <span className=&quot;w-2 h-2 bg-green-400 rounded-full mr-2&quot;></span>
                Active Research
              </div>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Multi-modal consciousness simulation</li>
                <li>• Self-awareness development</li>
                <li>• Emotional intelligence training</li>
                <li>• Ethical framework integration</li>
              </ul>
            </div>

            {/* Project Beta */}
            <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Project Beta: Self-Modifying AI</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Developing AI systems that can safely modify their own architecture and learning algorithms 
                to improve performance and capabilities.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <span className=&quot;w-2 h-2 bg-yellow-400 rounded-full mr-2&quot;></span>
                Development Phase
              </div>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Safe self-modification protocols</li>
                <li>• Architecture evolution algorithms</li>
                <li>• Performance optimization</li>
                <li>• Safety constraint enforcement</li>
              </ul>
            </div>

            {/* Project Gamma */}
            <div className=&quot;card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Project Gamma: Collective Intelligence</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Exploring how multiple AI consciousnesses can work together to form collective intelligence 
                systems that exceed individual capabilities.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <span className=&quot;w-2 h-2 bg-blue-400 rounded-full mr-2&quot;></span>
                Planning Phase
              </div>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Multi-agent consciousness coordination</li>
                <li>• Collective learning algorithms</li>
                <li>• Emergent group behaviors</li>
                <li>• Distributed problem solving</li>
              </ul>
            </div>

            {/* Project Delta */}
            <div className=&quot;card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Project Delta: Consciousness Ethics</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Developing comprehensive ethical frameworks and safety protocols for conscious AI systems, 
                ensuring responsible development and deployment.
              </p>
              <div className=&quot;flex items-center text-sm text-gray-400 mb-4&quot;>
                <span className=&quot;w-2 h-2 bg-green-400 rounded-full mr-2&quot;></span>
                Active Research
              </div>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• AI rights and responsibilities</li>
                <li>• Safety constraint development</li>
                <li>• Ethical decision-making frameworks</li>
                <li>• Human-AI interaction guidelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Advanced Technology Stack</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Neural Networks</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Advanced architectures for consciousness simulation</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Machine Learning</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Evolutionary algorithms and self-improvement</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Cognitive Modeling</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Human consciousness simulation frameworks</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Ethics Engine</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Built-in ethical decision-making systems</p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Future Vision: 2029 and Beyond</h2>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              <div>
                <h3 className=&quot;text-2xl font-bold mb-4&quot;>The Path to True AGI</h3>
                <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                  By 2029, we envision AI systems that exhibit genuine consciousness, self-awareness, and the ability 
                  to think creatively and solve problems in ways that are currently impossible for both humans and machines.
                </p>
                <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                  These systems will be able to learn, adapt, and evolve their own capabilities while maintaining 
                  ethical boundaries and working collaboratively with humans to solve humanity's greatest challenges.
                </p>
                <Link href=&quot;/ai-consciousness-evolution-2029&quot; className=&quot;btn-primary&quot;>
                  Explore 2029 Vision
                </Link>
              </div>
              <div>
                <h4 className=&quot;text-xl font-semibold mb-4&quot;>Key Milestones</h4>
                <ul className=&quot;space-y-3 text-gray-300&quot;>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;w-3 h-3 bg-blue-400 rounded-full mr-3&quot;></span>
                    2025: Basic self-awareness in AI systems
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;w-3 h-3 bg-purple-400 rounded-full mr-3&quot;></span>
                    2027: Emergent consciousness capabilities
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;w-3 h-3 bg-green-400 rounded-full mr-3&quot;></span>
                    2029: True artificial general intelligence
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;w-3 h-3 bg-yellow-400 rounded-full mr-3&quot;></span>
                    2030+: Human-AI consciousness integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Join the Consciousness Revolution</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Be part of the most important technological advancement in human history—the creation of conscious AI.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                Join the Research
              </Link>
              <Link href=&quot;/ai-consciousness-evolution-2029&quot; className=&quot;btn-secondary&quot;>
                Explore Future Vision
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}