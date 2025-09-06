import React from 'react',
import { motion } from 'framer-motion',
import { ArrowRight, Brain, Rocket, TestTube, Globe, Microscope, Lock, Star, TrendingUp, Zap, Sparkles, Atom } from 'lucide-react',
import Link from 'next/link',
const Revolutionary2027Hero = () => {
  const floatingIcons = [
    { icon: Brain, delay: 0, position: 'top-20 left-20' },
    { icon: Rocket, delay: 0.5, position: 'top-40 right-32' },
    { icon: TestTube, delay: 1, position: 'bottom-40 left-32' },
    { icon: Globe, delay: 1.5, position: 'bottom-20 right-20' },
    { icon: Microscope, delay: 2, position: 'top-1/2 left-10' },
    { icon: Lock, delay: 2.5, position: 'top-1/2 right-10' },
    { icon: Atom, delay: 3, position: 'bottom-1/3 left-1/2' },
    { icon: Sparkles, delay: 3.5, position: 'top-1/3 right-1/2' }
  ],
  const containerVariants = {hidden: { opacity: 0},
    visible: {opacity: 1, transition: {
        staggerChildren: 0.1}
    }
  },

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: &quot;easeOut&quot; as const
      }    }
  },

  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900&quot;>
      {/* Enhanced Background Effects */}
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_30%20%,rgba(139,92,246,0.15),transparent50%)]&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_70%80%,rgba(0,255,255,0.1),transparent50%)]&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_50%50%,rgba(236,72,153,0.08),transparent50%)]&quot;></div>
      
      {/* Animated Grid Pattern */}
      <div className=&quot;absolute inset-0 opacity-20&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)1px,transparent1px),linear-gradient(90deg,rgba(139,92,246,0.1)1px,transparent1px)] bg-[size:50px50px]&quot;></div>      </div>

      {_/* Floating Icons */}
      {floatingIcons.map(_(item, index) => (
        <motion.div,
key={index}
          className={`absolute ${item.position} text-purple-400/30`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]}}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}        >
          <item.icon className=&quot;w-8 h-8&quot; />
        </motion.div>
      ))}
;
      {/* Main Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        <motion.div,
variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          className=&quot;space-y-8&quot;
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className=&quot;space-y-6&quot;>
            <h1 className=&quot;text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>                Future
              </span>
              <br />
              <span className=&quot;text-white&quot;>is Now</span>
            </h1>
            <div className=&quot;flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300&quot;>
              <span>2027</span>
              <div className=&quot;w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full&quot;></div>
              <span>Revolutionary</span>
              <div className=&quot;w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full&quot;></div>
              <span>Technology</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className=&quot;max-w-4xl mx-auto&quot;>
            <p className=&quot;text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed&quot;>              Experience the next generation of AI, quantum computing, and emerging technologies. 
              Transform your business with solutions that were once science fiction.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto&quot;>
            <div className=&quot;bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6&quot;>
              <div className=&quot;w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <Brain className=&quot;w-6 h-6 text-white&quot; />              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Quantum AI</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Consciousness simulation and neural computing</p>
            </div>
            
            <div className=&quot;bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6&quot;>
              <div className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <Rocket className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Space Tech</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>Autonomous mining and debris management</p>
            </div>
            
            <div className=&quot;bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6&quot;>
              <div className=&quot;w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>
                <TestTube className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Biotech</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>DNA computing and molecular biology</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>            <Link,
href=&quot;https://ziontechgroup.com/services&quot;
              className=&quot;group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25&quot;
            >
              <span>Explore Services</span>
              <ArrowRight className=&quot;w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1&quot; />
            </a>
            
            <a,
href=&quot;tel:+13024640950&quot;
              className=&quot;group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl border border-gray-600/50&quot;
            >
              <span>Call +1 302 464 0950</span>
              <Zap className=&quot;w-5 h-5 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40&quot; />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>500+</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Revolutionary Services</div>            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>$50T+</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Total Market Value</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>1000+</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Global Customers</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-white mb-2&quot;>99.9%</div>
              <div className=&quot;text-gray-400 text-sm&quot;>Uptime Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {_/* Scroll Indicator */}
      <motion.div,
className=&quot;absolute bottom-8 left-1/2 transform -translate-x-1/2&quot;
        animate={{
          y: [0, 10, 0]}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: &quot;easeInOut&quot
        }}      >
        <div className=&quot;w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center&quot;>
          <motion.div,
className=&quot;w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2&quot;
            animate={{
              y: [0, 12, 0]}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: &quot;easeInOut&quot
            }}          />
        </div>
      </motion.div>

      {/* Particle Effects */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {[...Array(20)].map((_, i) => (
          <motion.div,
key={i}
            className=&quot;absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full&quot;
            style={{              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={_{
              y: [0, _-100], opacity: [0, 1, 0]}}
            transition={_{
              duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2}}
          />
        ))}
      </div>
    </section>
  )
},

export default Revolutionary2027Hero,