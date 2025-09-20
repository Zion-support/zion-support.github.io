import React from "react"
import { SEO } from "../../components/SEO"
import { motion } from "framer-motion"
import {
  Brain
  Zap,
  CheckCircle
  Star
  TrendingUp
  Award
  Lock
  Database
  Cpu
  Network
  FileText
  MessageCircle
  Phone
  Mail
  MapPin
  Building
  Video
  Eye
  Target
  Users
  ArrowRight
  Key
  Fingerprint
  EyeOff
  Server
  Globe2
  ShieldCheck
  Wifi
  Smartphone
  Activity
  Clock
  BarChart
  PieChart
  GitBranch
  Code
  Package
  Play
  Settings
  Monitor
  Shield
  Rocket
  Globe
  Factory
  Car
  Heart
  LineChart
  Scatter
  Layers
  Target as TargetIcon
  Search
  Filter
  RefreshCw
  Download
  Upload
  Bell
  AlertCircle
  CheckCircle2
  XCircle
  Info
  Lightbulb
  Cpu as CpuIcon
  Database as DatabaseIcon
  Network as NetworkIcon
  FileText as FileTextIcon
  MessageCircle as MessageCircleIcon
  Phone as PhoneIcon
  Mail as MailIcon
  MapPin as MapPinIcon
  Building as BuildingIcon
  Video as VideoIcon
  Eye as EyeIcon
  Target as TargetIcon2
  Users as UsersIcon
  ArrowRight as ArrowRightIcon
  Key as KeyIcon
  Fingerprint as FingerprintIcon
  EyeOff as EyeOffIcon
  Server as ServerIcon
  Globe2 as Globe2Icon
  ShieldCheck as ShieldCheckIcon
  Wifi as WifiIcon
  Smartphone as SmartphoneIcon
  Activity as ActivityIcon
  Clock as ClockIcon
  BarChart as BarChartIcon
  PieChart as PieChartIcon
  GitBranch as GitBranchIcon
  Code as CodeIcon
  Package as PackageIcon
  Play as PlayIcon
  Settings as SettingsIcon
  Monitor as MonitorIcon
  Shield as ShieldIcon
  Rocket as RocketIcon
  Globe as GlobeIcon
  Factory as FactoryIcon
  Car as CarIcon
  Heart as HeartIcon
  LineChart as LineChartIcon
  Scatter as ScatterIcon
  Layers as LayersIcon
} from "lucide-react"
export default function MachineLearning() {
  const features = [
  {
  ic,
  o: n: Brain,tit,
  l: e: 'Deep Learning',descripti,
  o: n: 'Advanced neural networks for complex pattern recognition',col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Predictive Analytics',descripti,
  o: n: 'Forecast future trends and behaviors with high accuracy',col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  ic,
  o: n: Search,tit,
  l: e: 'Natural Language Processing',descripti,
  o: n: 'Understand and process human language intelligently',col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  ic,
  o: n: Eye,tit,
  l: e: 'Computer Vision',descripti,
  o: n: 'Advanced image and video analysis capabilities',col,
  o: r: 'from-yellow-500 to-orange-500'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Real-Time Learning',descripti,
  o: n: 'Continuous model improvement and adaptation',col,
  o: r: 'from-red-500 to-pink-500'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'AI Ethics & Safety',descripti,
  o: n: 'Responsible AI development and deployment',col,
  o: r: 'from-indigo-500 to-blue-500'
},
  ]
  const benefits = [
  'Improve decision accuracy by 85% with predictive insightsAutomate complex tasks and reduce manual work by 70%'
    'Unlock hidden patterns in data for competitive advantageScale operations without proportional cost increases'
    'Provide personalized experiences for customers and usersEnable new business models and revenue opportunities'
]

  const useCases = [
  {
  tit,
  l: e: 'Customer Analytics',descripti,
  o: n: 'Predict customer behavior and preferences',ic,
  o: n: Users
},
  {
  tit,
  l: e: 'Fraud Detection',descripti,
  o: n: 'Identify suspicious activities in real-time',ic,
  o: n: Shield
},
  {
  tit,
  l: e: 'Recommendation Systems',descripti,
  o: n: 'Personalized product and content suggestions',ic,
  o: n: Target
},
  {
  tit,
  l: e: 'Process Optimization',descripti,
  o: n: 'Streamline operations and reduce inefficiencies',ic,
  o: n: Activity
},
  ]
  const mlCapabilities = [
  {
  na,
  m: e: 'Supervised Learning',descripti,
  o: n: 'Training models with labeled data for classification and regression',exampl,
  e: s: [['ClassificationRegression', 'Object detectionSentiment analysis'],
  ],
  },
  {
  na,
  m: e: 'Unsupervised Learning',descripti,
  o: n: 'Discovering hidden patterns in unlabeled data',exampl,
  e: s: [['ClusteringDimensionality reduction', 'Anomaly detection'],
  ],
  },
  {
  na,
  m: e: 'Reinforcement Learning',descripti,
  o: n: 'Training agents to make decisions through trial and error',exampl,
  e: s: [['Game AIRobotics', 'Autonomous systemsResource optimization'],
  ],
  },
  {
  na,
  m: e: 'Neural Networks',descripti,
  o: n: 'Deep learning models for complex pattern recognition',exampl,
  e: s: [['CNNsRNNs', 'TransformersGANs'],
  ],
  },
  ]

  const industries = [
  {
  na,
  m: e: 'Healthcare',ic,
  o: n: Heart,descripti,
  o: n: 'Medical diagnosis, drug discovery, and patient care'
},
  {
  na,
  m: e: 'Finance',ic,
  o: n: BarChart,descripti,
  o: n: 'Risk assessment, fraud detection, and trading algorithms'
},
  {
  na,
  m: e: 'Retail',ic,
  o: n: ShoppingCart,descripti,
  o: n: 'Customer segmentation, inventory optimization, and pricing'
},
  {
  na,
  m: e: 'Manufacturing',ic,
  o: n: Factory,descripti,
  o: n: 'Predictive maintenance, quality control, and supply chain'
},
  {
  na,
  m: e: 'Transportation',ic,
  o: n: Car,descripti,
  o: n: 'Autonomous vehicles, route optimization, and logistics'
},
  {
  na,
  m: e: 'Entertainment',ic,
  o: n: Play,descripti,
  o: n: 'Content recommendation, personalization, and analytics'
},
  ]

  return (
    <>
      <SEO 
        title="Machine Learning - Zion Tech Group"
        description="Revolutionary machine learning solutions including deep learning, predictive analytics, NLP, and computer vision. Transform your business with AI-powered insights."
        keywords="machine learning, deep learning, AI, predictive analytics, natural language processing, computer vision, neural networks"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */},
  }
        <section className="relative overflow-hidden py-20,
  l: g: py-32">
          <div className="container-responsive">
            <motion.div
              initial={ opacit,
  y: 0, y: 30 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI Innovation
              </div>
              
              <h1 className="text-4xl,
  l: g:text-6xl font-bold text-white mb-6">
                Machine
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with revolutionary machine learning technology. 
                Deep learning, predictive analytics, NLP, and computer vision that 
                unlock insights and automate complex processes.
              </p>
              
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg,
  hove: r: from-purple-600,
  hove: r:to-pink-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-purple-500/25";"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: border-gray-500 hove,
  r:bg-gray-800/50 transition-all duration-300";"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */},
  }
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Revolutionary ML Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our machine learning platform combines cutting-edge algorithms with practical 
                applications to deliver unprecedented insights and automation capabilities.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {features.map((feature, index) => (
  <motion.div
                  key={feature.title},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-purple-500/30 transition-all duration-300 hove,
  r:bg-slate-800/70";"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-purple-400 transition-colors">
                    {feature.title},
  }
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description},
  }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1,
  l: g: grid-cols-2 gap-16 items-center">
              <motion.div
                initial={ opacit,
  y: 0, x: -30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.8 },
  }
                viewport={ on,
  c: e: true },
  }
              >
                <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-6">
                  Transform Your Business with ML
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our machine learning solutions deliver measurable improvements in decision 
                  accuracy, operational efficiency, and customer experience while enabling 
                  new business opportunities.
                </p>
                
                <div className="grid grid-cols-1,
  s: m:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
  <motion.div
                      key={benefit},
  }
                      initial={ opaci,
  t: y: 0, x: -20 },
  }
                      whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                      transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                      viewport={ on,
  c: e: true },
  }
                      className="className="flex items-center gap-3";"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={ opaci,
  t: y: 0, x: 30 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.8 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="relative";"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ML Impact
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                        <div className="text-sm text-gray-400">Decision Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400 mb-2">70%</div>
                        <div className="text-sm text-gray-400">Work Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Automation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                        <div className="text-sm text-gray-400">Scalability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ML Capabilities Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Machine Learning Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive machine learning capabilities that 
                transform data into actionable insights and automated processes.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
              {mlCapabilities.map((capability, index) => (
  <motion.div
                  key={capability.name},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-purple-500/30 transition-all duration-300 group";"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hove,
  r:text-purple-400 transition-colors">
                    {capability.name},
  }
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {capability.description},
  }
                  </p>
                  
                  <div className="space-y-2">
                    {capability.examples.map((example, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {example},
  }
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Industries We Transform
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our machine learning solutions are designed to revolutionize 
                various industries with innovative AI applications and use cases.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
  <motion.div
                  key={industry.name},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-purple-500/30 transition-all duration-300 group";"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,
  r:text-purple-400 transition-colors">
                        {industry.name},
  }
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {industry.description},
  }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
                Machine Learning Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our ML platform adapts to various business needs and industries
                providing tailored solutions for different requirements.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
  <motion.div
                  key={useCase.title},
  }
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50,
  hove: r: border-purple-500/30 transition-all duration-300 group";"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hove,
  r:text-purple-400 transition-colors">
                        {useCase.title},
  }
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description},
  }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */},
  }
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container-responsive">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
                Ready to Harness Machine Learning?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our machine learning 
                solutions to unlock insights and automate complex processes.
              </p>
              
              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg,
  hove: r: from-purple-600,
  hove: r:to-pink-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-purple-500/25";"
                >
                  Start Today
                </motion.button>
                <motion.button
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: border-gray-500 hove,
  r:bg-gray-800/50 transition-all duration-300";"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}