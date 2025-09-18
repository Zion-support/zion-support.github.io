'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Cpu
  Brain
  Zap
  Globe
  Shield
  Layers,
  Play,
  Pause,
  RotateCcw,
  Settings,
  BarChart3,
  Network,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const InteractiveTechDemo2029 = () => {
  const [activeDemosetActiveDemo] = useState('quantum-ai');
  const [isRunningsetIsRunning] = useState(false);
  const [progressetProgress] = useState(0);
  const [demoDatasetDemoData] = useState({});

  const demos = {
    'quantum-ai': {
      title: 'Quantum AI Processing',
      description: 'Experience real-time quantum neural network processing',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Quantum Superposition Processing',
        'Neural Network Optimization',
        'Real-time Pattern Recognition',
        'Quantum Error Correction'
      ],
      metrics: {
        'Processing Speed': '99.7% faster',
        'Accuracy': '99.9%',
        'Energy Efficiency': '85% reduction',
        'Scalability': 'Unlimited'
      }
    },
    'neural-interface': {
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer interface simulation',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      features: [
        'Thought-to-Text Conversion',
        'Mental Command Processing',
        'Emotional State Detection',
        'Memory Enhancement'
      ],
      metrics: {
        'Response Time': '< 50ms',
        'Accuracy': '98.5%',
        'Safety Rating': '99.9%',
        'User Satisfaction': '97%'
      }
    },
    'quantum-internet': {
      title: 'Quantum Internet',
      description: 'Ultra-secure quantum communication network',
      icon: Globe,
      color: 'from-orange-600 to-red-600',
      features: [
        'Quantum Key Distribution',
        'Instantaneous Communication',
        'Unbreakable Encryption',
        'Global Quantum Network'
      ],
      metrics: {
        'Security Level': 'Unbreakable',
        'Speed': 'Instantaneous',
        'Coverage': 'Global',
        'Reliability': '99.99%'
      }
    },
    'ai-automation': {
      title: 'AI Business Automation',
      description: 'Autonomous business process automation',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Autonomous Decision Making',
        'Process Optimization',
        'Predictive Analytics',
        'Self-Healing Systems'
      ],
      metrics: {
        'Efficiency Gain': '300%',
        'Cost Reduction': '75%',
        'Error Rate': '0.1%',
        'ROI': '500%'
      }
    }
  };

  const demoComponents = {
    'quantum-ai': {
      nodes: [
        { id: 'input'type: 'input'x: 50y: 200label: 'Data Input' },
        { id: 'quantum'type: 'quantum'x: 200y: 150label: 'Quantum Layer' },
        { id: 'neural'type: 'neural'x: 350y: 200label: 'Neural Network' },
        { id: 'output'type: 'output'x: 500y: 200label: 'AI Output' }
      ],
      connections: [
        { from: 'input'to: 'quantum' },
        { from: 'quantum'to: 'neural' },
        { from: 'neural'to: 'output' }
      ]
    },
    'neural-interface': {
      nodes: [
        { id: 'brain'type: 'brain'x: 50y: 200label: 'Brain Signals' },
        { id: 'processor'type: 'processor'x: 200y: 200label: 'Neural Processor' },
        { id: 'interface'type: 'interface'x: 350y: 200label: 'Interface Layer' },
        { id: 'device'type: 'device'x: 500y: 200label: 'Device Control' }
      ],
      connections: [
        { from: 'brain'to: 'processor' },
        { from: 'processor'to: 'interface' },
        { from: 'interface'to: 'device' }
      ]
    },
    'quantum-internet': {
      nodes: [
        { id: 'sender'type: 'sender'x: 50y: 200label: 'Sender' },
        { id: 'quantum'type: 'quantum'x: 200y: 150label: 'Quantum Channel' },
        { id: 'encryption'type: 'encryption'x: 350y: 200label: 'Encryption' },
        { id: 'receiver'type: 'receiver'x: 500y: 200label: 'Receiver' }
      ],
      connections: [
        { from: 'sender'to: 'quantum' },
        { from: 'quantum'to: 'encryption' },
        { from: 'encryption'to: 'receiver' }
      ]
    },
    'ai-automation': {
      nodes: [
        { id: 'data'type: 'data'x: 50y: 200label: 'Business Data' },
        { id: 'ai'type: 'ai'x: 200y: 150label: 'AI Engine' },
        { id: 'process'type: 'process'x: 350y: 200label: 'Process Automation' },
        { id: 'result'type: 'result'x: 500y: 200label: 'Optimized Output' }
      ],
      connections: [
        { from: 'data'to: 'ai' },
        { from: 'ai'to: 'process' },
        { from: 'process'to: 'result' }
      ]
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }100);
    }
    return () => clearInterval(interval);
  }[isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const currentDemo = demos[activeDemo];
  const currentComponents = demoComponents[activeDemo];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 30 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Interactive Tech Demo 2029</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Experience the Future
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interact with cutting-edge technologies and see how they work in real-time. 
            Experience the power of quantum computingneural interfacesand AI automation.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {Object.entries(demos).map(([keydemo]) => {
            const Icon = demo.icon;
            const isActive = activeDemo === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg shadow-blue-500/25`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">{demo.title}</h3>
              </button>
            );
          })}
        </motion.div>

        {/* Main Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Visualization */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0scale: 0.9 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentDemo.color} rounded-xl flex items-center justify-center`}>
                  <currentDemo.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentDemo.title}</h3>
                  <p className="text-gray-400 text-sm">{currentDemo.description}</p>
                </div>
              </div>
            </div>

            {/* Interactive Demo Area */}
            <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden mb-6">
              {/* Demo Nodes */}
              {currentComponents.nodes.map((nodeindex) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0scale: 0 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  className={`absolute w-16 h-16 rounded-xl flex items-center justify-center text-xs font-medium ${
                    isRunning ? 'animate-pulse' : ''
                  }`}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    background: isRunning 
                      ? `linear-gradient(135deg${currentDemo.color.split(' ')[1]}${currentDemo.color.split(' ')[3]})`
                      : 'rgba(2552550.1)'
                  }}
                >
                  {node.label}
                </motion.div>
              ))}

              {/* Demo Connections */}
              <svg className="absolute inset-0 w-full h-full">
                {currentComponents.connections.map((connindex) => {
                  const fromNode = currentComponents.nodes.find(n => n.id === conn.from);
                  const toNode = currentComponents.nodes.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;
                  
                  return (
                    <motion.line
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isRunning ? 1 : 0 }}
                      transition={{ duration: 1delay: index * 0.2 }}
                      x1={fromNode.x + 32}
                      y1={fromNode.y + 32}
                      x2={toNode.x + 32}
                      y2={toNode.y + 32}
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                })}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Progress Bar */}
              {isRunning && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Demo Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={isRunning ? stopDemo : startDemo}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isRunning
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 text-white'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Stop' : 'Start'} Demo</span>
              </button>
              
              <button
                onClick={resetDemo}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>
          </motion.div>

          {/* Demo Information */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Key Features
              </h4>
              <div className="space-y-3">
                {currentDemo.features.map((featureindex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    transition={{ duration: 0.3delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Performance Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentDemo.metrics).map(([keyvalue]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm text-gray-400">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-3">
                Ready to Experience This Technology?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                This is just a preview of what's possible. The full implementation offers even more advanced capabilities.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2029;