import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Hand, Heart, Cpu, ArrowRight, Star, CheckCircle, Users } from 'lucide-react';

const NeuralInterfaceBreakthrough2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <Helmet>
        <title>Neural Interface Breakthrough 2025 - Direct Brain-Computer Connection</title>
        <meta name="description" content="Experience the future of human-computer interaction with our revolutionary neural interface technology. Direct brain-to-computer communication is now reality." />
        <meta name="keywords" content="neural interface, brain-computer interface, BCI, 2025, breakthrough, technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black text-sm font-semibold mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Neural Interface Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Neural Interface
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Breakthrough 2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of human-computer interaction with our revolutionary neural interface technology. 
              Direct brain-to-computer communication is no longer science fiction—it's here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Experience Neural Interface
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Neural Interface Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">99.7%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">0.1ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-gray-300">Neural Channels</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural Interface Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neural Interface Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced neural interface technology enables seamless communication between the human brain and digital systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Direct Thought Control",
                description: "Control devices and applications directly with your thoughts, no physical interaction required.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Visual Neural Processing",
                description: "Process visual information at neural speed with enhanced clarity and detail recognition.",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: <Hand className="w-8 h-8" />,
                title: "Tactile Feedback",
                description: "Experience realistic tactile sensations through direct neural stimulation.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Emotional Intelligence",
                description: "AI systems that understand and respond to emotional states in real-time.",
                color: "from-red-400 to-orange-500"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Cognitive Enhancement",
                description: "Boost memory, focus, and processing speed through neural augmentation.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Communication",
                description: "Communicate with others through direct neural-to-neural transmission.",
                color: "from-green-400 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how neural interface technology is transforming healthcare, education, and human potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Medical Rehabilitation",
                description: "Restore movement and sensation for patients with spinal cord injuries and neurological disorders through direct neural stimulation and control.",
                features: [
                  "Paralysis recovery through neural bypass",
                  "Prosthetic limb control with natural movement",
                  "Pain management without medication",
                  "Cognitive rehabilitation for brain injuries"
                ],
                color: "from-emerald-400 to-teal-500"
              },
              {
                title: "Education & Learning",
                description: "Accelerate learning and knowledge acquisition through direct neural information transfer and enhanced cognitive processing.",
                features: [
                  "Instant knowledge transfer",
                  "Enhanced memory retention",
                  "Language learning in hours",
                  "Skill acquisition through neural simulation"
                ],
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Creative Expression",
                description: "Unlock new forms of artistic expression by translating thoughts directly into digital creations and virtual environments.",
                features: [
                  "Thought-to-music composition",
                  "Mental painting and sculpture",
                  "Virtual reality creation through imagination",
                  "Collaborative creative experiences"
                ],
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Communication Revolution",
                description: "Enable direct mind-to-mind communication, breaking down language barriers and creating deeper human connections.",
                features: [
                  "Telepathic communication",
                  "Emotion sharing across distances",
                  "Universal language understanding",
                  "Enhanced empathy and connection"
                ],
                color: "from-yellow-400 to-orange-500"
              }
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${application.color} text-white mb-6`}>
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-3">
                  {application.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real people, real results. See how neural interface technology is changing lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Neurosurgeon",
                story: "After a car accident left me paralyzed, I thought my career was over. The neural interface not only restored my movement but enhanced my surgical precision beyond what I thought possible.",
                result: "100% mobility restored"
              },
              {
                name: "Marcus Johnson",
                role: "Artist",
                story: "I can now paint with my mind. The neural interface translates my thoughts directly into digital art, creating pieces that were impossible with traditional methods.",
                result: "Revolutionary art creation"
              },
              {
                name: "Dr. Elena Rodriguez",
                role: "Research Scientist",
                story: "The neural interface has accelerated my research exponentially. I can process complex data sets and visualize molecular structures in ways that were previously impossible.",
                result: "10x research acceleration"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              >
                <div className="text-emerald-400 font-bold text-lg mb-2">{story.result}</div>
                <p className="text-gray-300 mb-6 italic">"{story.story}"</p>
                <div className="text-white font-semibold">{story.name}</div>
                <div className="text-gray-400 text-sm">{story.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-400/20 to-teal-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Expand Your Mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the neural interface revolution and unlock the full potential of human-computer interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule Neural Assessment
                <ArrowRight className="inline-block ml-2 w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeuralInterfaceBreakthrough2025;