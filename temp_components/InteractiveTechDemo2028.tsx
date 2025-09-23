'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Code
  Database
  Cloud
  Brain,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Server,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const InteractiveTechDemo2028 = () => {
  const [isPlayingsetIsPlaying] = useState(false);
  const [currentDemosetCurrentDemo] = useState('ai-automation');
  const [progressetProgress] = useState(0);
  const [selectedFeaturesetSelectedFeature] = useState(0);

  const demos = {
    'ai-automation': {
      title: 'AI-Powered Automation',
      description: 'Watch how our AI systems automatically optimize business processes',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      steps: [
        { title: 'Data Collection'description: 'AI gathers data from multiple sources'duration: 2000 },
        { title: 'Pattern Analysis'description: 'Machine learning identifies optimization opportunities'duration: 3000 },
        { title: 'Process Optimization'description: 'AI automatically adjusts workflows for maximum efficiency'duration: 2500 },
        { title: 'Results Monitoring'description: 'Real-time tracking of performance improvements'duration: 2000 }
      ],
      metrics: [
        { label: 'Efficiency Gain'value: '500%'change: '+25%' },
        { label: 'Cost Reduction'value: '$2.5M'change: '+$500K' },
        { label: 'Time Saved'value: '40hrs'change: '+8hrs' },
        { label: 'Error Rate'value: '0.1%'change: '-0.5%' }
      ]
    },
    'quantum-computing': {
      title: 'Quantum Computing',
      description: 'Experience the power of quantum-enhanced processing',
      icon: Zap,
      color: 'from-cyan-600 to-blue-600',
      steps: [
        { title: 'Quantum Initialization'description: 'Setting up quantum states for computation'duration: 1500 },
        { title: 'Quantum Processing'description: 'Performing calculations using quantum algorithms'duration: 4000 },
        { title: 'Result Extraction'description: 'Measuring and extracting quantum results'duration: 2000 },
        { title: 'Classical Integration'description: 'Converting quantum results to classical data'duration: 1500 }
      ],
      metrics: [
        { label: 'Processing Speed'value: '1000x'change: '+200x' },
        { label: 'Problem Size'value: '10^15'change: '+10^3' },
        { label: 'Accuracy'value: '99.99%'change: '+0.5%' },
        { label: 'Energy Efficiency'value: '90%'change: '+15%' }
      ]
    },
    'neural-interfaces': {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interaction for enhanced productivity',
      icon: Globe,
      color: 'from-green-600 to-teal-600',
      steps: [
        { title: 'Neural Signal Capture'description: 'Reading brain activity patterns'duration: 2000 },
        { title: 'Signal Processing'description: 'AI interprets neural signals in real-time'duration: 3000 },
        { title: 'Command Execution'description: 'Converting thoughts into computer actions'duration: 2000 },
        { title: 'Feedback Loop'description: 'Providing sensory feedback to the user'duration: 2500 }
      ],
      metrics: [
        { label: 'Response Time'value: '50ms'change: '-10ms' },
        { label: 'Accuracy'value: '98.5%'change: '+2.5%' },
        { label: 'Bandwidth'value: '1GB/s'change: '+200MB/s' },
        { label: 'User Satisfaction'value: '95%'change: '+5%' }
      ]
    },
    'cloud-optimization': {
      title: 'Cloud Optimization',
      description: 'Intelligent cloud resource management and scaling',
      icon: Cloud,
      color: 'from-orange-600 to-red-600',
      steps: [
        { title: 'Resource Monitoring'description: 'Continuous monitoring of cloud resources'duration: 2000 },
        { title: 'Demand Prediction'description: 'AI predicts future resource needs'duration: 3000 },
        { title: 'Auto-Scaling'description: 'Automatically adjusting resources based on demand'duration: 2500 },
        { title: 'Cost Optimization'description: 'Minimizing costs while maintaining performance'duration: 2000 }
      ],
      metrics: [
        { label: 'Uptime'value: '99.99%'change: '+0.1%' },
        { label: 'Cost Savings'value: '60%'change: '+10%' },
        { label: 'Response Time'value: '100ms'change: '-20ms' },
        { label: 'Scalability'value: '1000x'change: '+200x' }
      ]
    }
  };

  const features = [
    { name: 'Real-time Processing'icon: Zap },
    { name: 'Predictive Analytics'icon: BarChart3 },
    { name: 'Automated Scaling'icon: TrendingUp },
    { name: 'Security Monitoring'icon: Shield },
    { name: 'Performance Optimization'icon: Target },
    { name: 'Cost Management'icon: DollarSign }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }100);
    }
    return () => clearInterval(interval);
  }[isPlaying]);

  const currentDemoData = demos[currentDemo];
  const currentStep = Math.floor((progress / 100) * currentDemoData.steps.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0y: 20 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Tech Demo 2028
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience cutting-edge technologies in action. See how our AIquantum computing
              and neural interface solutions work in real-time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Selection */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300">Select a technology to see it in action</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(demos).map(([keydemo]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentDemo(key);
                  setProgress(0);
                  setIsPlaying(false);
                }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  currentDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70'
                }`}
              >
                <demo.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-80">{demo.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Area */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Controls */}
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentDemoData.color} rounded-2xl flex items-center justify-center`}>
                      <currentDemoData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentDemoData.title}</h3>
                      <p className="text-gray-400">{currentDemoData.description}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${currentDemoData.color} rounded-full`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Current Step */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0y: 20 }}
                      animate={{ opacity: 1y: 0 }}
                      exit={{ opacity: 0y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gray-700/50 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {currentStep + 1}
                        </div>
                        <h4 className="text-lg font-semibold">
                          {currentDemoData.steps[currentStep]?.title || 'Demo Complete'}
                        </h4>
                      </div>
                      <p className="text-gray-300">
                        {currentDemoData.steps[currentStep]?.description || 'The demo has finished successfully!'}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex gap-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Play'} Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setProgress(0);
                      setIsPlaying(false);
                    }}
                    className="px-6 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </motion.button>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((featureindex) => (
                      <motion.div
                        key={feature.name}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedFeature === index
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                        }`}
                        onClick={() => setSelectedFeature(index)}
                      >
                        <div className="flex items-center gap-2">
                          <feature.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{feature.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Demo */}
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 h-full">
                <h4 className="text-xl font-bold mb-6">Live Demo Visualization</h4>
                
                {/* Demo Visualization */}
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                  {/* Animated Elements */}
                  <motion.div
                    animate={{
                      scale: isPlaying ? [1.21] : 1,
                      opacity: isPlaying ? [0.510.5] : 0.7
                    }}
                    transition={{
                      duration: 2,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className={`w-32 h-32 bg-gradient-to-r ${currentDemoData.color} rounded-full flex items-center justify-center`}>
                      <currentDemoData.icon className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>

                  {/* Floating Data Points */}
                  {isPlaying && (
                    <>
                      {[...Array(6)].map((_i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0scale: 0 }}
                          animate={{ 
                            opacity: [010],
                            scale: [010],
                            x: [0Math.random() * 200 - 100],
                            y: [0Math.random() * 200 - 100]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeOut"
                          }}
                          className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full"
                        />
                      ))}
                    </>
                  )}

                  {/* Progress Indicators */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Processing</span>
                      <span>{isPlaying ? 'Active' : 'Idle'}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${currentDemoData.color} rounded-full`}
                        animate={{ width: isPlaying ? '100%' : '0%' }}
                        transition={{ duration: 10ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Real-time Metrics */}
                <div className="mt-6">
                  <h5 className="text-lg font-semibold mb-4">Real-time Metrics</h5>
                  <div className="grid grid-cols-2 gap-4">
                    {currentDemoData.metrics.map((metricindex) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0y: 20 }}
                        animate={{ opacity: 1y: 0 }}
                        transition={{ duration: 0.6delay: index * 0.1 }}
                        className="bg-gray-700/50 rounded-lg p-3"
                      >
                        <div className="text-sm text-gray-400">{metric.label}</div>
                        <div className="text-xl font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-green-400">{metric.change}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo to see how these technologies can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Learn More
              <ArrowRight className="inline-block ml-2" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2028;