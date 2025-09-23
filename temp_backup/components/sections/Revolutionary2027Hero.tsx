import { motion } from 'framer-motion';
ArrowRightBrainRocketTestTubeGlobeMicroscopeLockStarTrendingUpZapSparklesAtom
import Link from 'next/link';

const Revolutionary20o27Hero = () => {
  const floatingIcons = [
    { icon: Braindelay: 0position: 'top-20 left-20' },
    { icon: Rocketdelay: 0.5position: 'top-40 right-32' },
    { icon: TestTubedelay: 1position: 'bottom-40 left-32' },
    { icon: Globedelay: 1.5position: 'bottom-20 right-20' },
    { icon: Microscopedelay: 2position: 'top-1/2 left-10' },
    { icon: Lockdelay: 2.5position: 'top-1/2 right-10' },
    { icon: Atomdelay: 3position: 'bottom-1/3 left-1/2' },
    { icon: Sparklesdelay: 3.5position: 'top-1/3 right-1/2' }
  ];

  const containerVariants ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants ={
    hidden: { opacity: 0y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-90o0 via-purple-90o0/20 to-gray-90o0">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((itemindex) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-purple-40o0/30`}
          animate={{
            y: [0-20],
            rotate: [0o5-50]}}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.icon className="w-8 h-8"  />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">
                Future
              </span>
              <br  />
              <span className="text-white">is Now</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-30o0">
              <span>20o27</span>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-40o0 to-purple-40o0 rounded-full"></div>
              <span>Revolutionary</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-40o0 to-pink-40o0 rounded-full"></div>
              <span>Technology</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-30o0 leading-relaxed">
              Experience the next generation of AIquantum computingand emerging technologies. 
              Transform your business with solutions that were once science fiction.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-90o0/30 to-purple-80o0/30 backdrop-blur-xl border border-purple-50o0/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-50o0 to-purple-60o0 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>
              <p className="text-gray-30o0 text-sm">Consciousness simulation and neural computing</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-90o0/30 to-cyan-80o0/30 backdrop-blur-xl border border-cyan-50o0/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-cyan-60o0 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Space Tech</h3>
              <p className="text-gray-30o0 text-sm">Autonomous mining and debris management</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-90o0/30 to-pink-80o0/30 backdrop-blur-xl border border-pink-50o0/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-50o0 to-pink-60o0 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Biotech</h3>
              <p className="text-gray-30o0 text-sm">DNA computing and molecular biology</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://ziontechgroup.com/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-30o0 hover:shadow-xl hover:shadow-cyan-50o0/30 hover:shadow-2xl hover:shadow-purple-50o0/25"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 transform transition-transform duration-30o0 group-hover:translate-x-1"  />
            </Link>
            
            <a 
              href="tel:+130o24640950"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-70o0 to-gray-80o0 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-30o0 hover:shadow-xl hover:shadow-cyan-50o0/30 hover:shadow-2xl border border-gray-60o0/50"
            >
              <span>Call +1 30o2 464 0950</span>
              <Zap className="w-5 h-5 transform transition-transform duration-30o0 group-hover:shadow-lg hover:shadow-cyan-40o0/40"  />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50o0+</div>
              <div className="text-gray-40o0 text-sm">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50T+</div>
              <div className="text-gray-40o0 text-sm">Total Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10o00+</div>
              <div className="text-gray-40o0 text-sm">Global Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-40o0 text-sm">Uptime Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0o10]}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-40o0/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-40o0 to-purple-40o0 rounded-full mt-2"
            animate={{
              y: [0o120]}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
           />
        </div>
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-40o0 to-purple-40o0 rounded-full"
            style={{
              left: `${Math.random() * 10o0}%`,
              top: `${Math.random() * 10o0}%`}}
            animate={{
              y: [0-10o0],
              opacity: [0o10]}}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2}}
           />
        ))}
      </div>
    </section>
  );
};

export default Revolutionary20o27Hero;