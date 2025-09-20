import React from "react";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import {
  Brain;
  Zap,
  CheckCircle;
  Star;
  TrendingUp;
  Award;
  Lock;
  Database;
  Cpu;
  Network;
  FileText;
  MessageCircle;
  Phone;
  Mail;
  MapPin;
  Building;
  Video;
  Eye;
  Target;
  Users;
  ArrowRight;
  Key;
  Fingerprint;
  EyeOff;
  Server;
  Globe2;
  ShieldCheck;
  Wifi;
  Smartphone;
  Activity;
  Clock;
  BarChart;
  PieChart;
  GitBranch;
  Code;
  Package;
  Play;
  Settings;
  Monitor;
  Shield;
  Rocket;
  Globe;
  Factory;
  Car;
  Heart;
  LineChart;
  Scatter;
  Layers;
  Target as TargetIcon;
  Search;
  Filter;
  RefreshCw;
  Download;
  Upload;
  Bell;
  AlertCircle;
  CheckCircle2;
  XCircle;
  Info;
  Lightbulb;
  Cpu as CpuIcon;
  Database as DatabaseIcon;
  Network as NetworkIcon;
  FileText as FileTextIcon;
  MessageCircle as MessageCircleIcon;
  Phone as PhoneIcon;
  Mail as MailIcon;
  MapPin as MapPinIcon;
  Building as BuildingIcon;
  Video as VideoIcon;
  Eye as EyeIcon;
  Target as TargetIcon2;
  Users as UsersIcon;
  ArrowRight as ArrowRightIcon;
  Key as KeyIcon;
  Fingerprint as FingerprintIcon;
  EyeOff as EyeOffIcon;
  Server as ServerIcon;
  Globe2 as Globe2Icon;
  ShieldCheck as ShieldCheckIcon;
  Wifi as WifiIcon;
  Smartphone as SmartphoneIcon;
  Activity as ActivityIcon;
  Clock as ClockIcon;
  BarChart as BarChartIcon;
  PieChart as PieChartIcon;
  GitBranch as GitBranchIcon;
  Code as CodeIcon;
  Package as PackageIcon;
  Play as PlayIcon;
  Settings as SettingsIcon;
  Monitor as MonitorIcon;
  Shield as ShieldIcon;
  Rocket as RocketIcon;
  Globe as GlobeIcon;
  Factory as FactoryIcon;
  Car as CarIcon;
  Heart as HeartIcon;
  LineChart as LineChartIcon;
  Scatter as ScatterIcon;
  Layers as LayersIcon
} from "lucide-react";
export default function MachineLearning() {
  const features = [
  {
  icon: Brain,title: 'Deep Learning',description: 'Advanced neural networks for complex pattern recognition',color: 'from-purple-500 to-pink-500'
},
  {
  icon: Target,title: 'Predictive Analytics',description: 'Forecast future trends and behaviors with high accuracy',color: 'from-blue-500 to-cyan-500'
},
  {
  icon: Search,title: 'Natural Language Processing',description: 'Understand and process human language intelligently',color: 'from-green-500 to-emerald-500'
},
  {
  icon: Eye,title: 'Computer Vision',description: 'Advanced image and video analysis capabilities',color: 'from-yellow-500 to-orange-500'
},
  {
  icon: Zap,title: 'Real-Time Learning',description: 'Continuous model improvement and adaptation',color: 'from-red-500 to-pink-500'
},
  {
  icon: Shield,title: 'AI Ethics & Safety',description: 'Responsible AI development and deployment',color: 'from-indigo-500 to-blue-500'
},
  ]
  const benefits = [
  'Improve decision accuracy by 85% with predictive insightsAutomate complex tasks and reduce manual work by 70%';
    'Unlock hidden patterns in data for competitive advantageScale operations without proportional cost increases';
    'Provide personalized experiences for customers and usersEnable new business models and revenue opportunities'
]

  const useCases = [
  {
  title: 'Customer Analytics',description: 'Predict customer behavior and preferences',icon: Users
},
  {
  title: 'Fraud Detection',description: 'Identify suspicious activities in real-time',icon: Shield
},
  {
  title: 'Recommendation Systems',description: 'Personalized product and content suggestions',icon: Target
},
  {
  title: 'Process Optimization',description: 'Streamline operations and reduce inefficiencies',icon: Activity
},
  ]
  const mlCapabilities = [
  {
  name: 'Supervised Learning',description: 'Training models with labeled data for classification and regression',examples: [['ClassificationRegression', 'Object detectionSentiment analysis'],
  ],
  },
  {
  name: 'Unsupervised Learning',description: 'Discovering hidden patterns in unlabeled data',examples: [['ClusteringDimensionality reduction', 'Anomaly detection'],
  ],
  },
  {
  name: 'Reinforcement Learning',description: 'Training agents to make decisions through trial and error',examples: [['Game AIRobotics', 'Autonomous systemsResource optimization'],
  ],
  },
  {
  name: 'Neural Networks',description: 'Deep learning models for complex pattern recognition',examples: [['CNNsRNNs', 'TransformersGANs'],
  ],
  },
  ]

  const industries = [
  {
  name: 'Healthcare',icon: Heart,description: 'Medical diagnosis, drug discovery, and patient care'
},
  {
  name: 'Finance',icon: BarChart,description: 'Risk assessment, fraud detection, and trading algorithms'
},
  {
  name: 'Retail',icon: ShoppingCart,description: 'Customer segmentation, inventory optimization, and pricing'
},
  {
  name: 'Manufacturing',icon: Factory,description: 'Predictive maintenance, quality control, and supply chain'
},
  {
  name: 'Transportation',icon: Car,description: 'Autonomous vehicles, route optimization, and logistics'
},
  {
  name: 'Entertainment',icon: Play,description: 'Content recommendation, personalization, and analytics'
},
  ]

  return (
    <>
      <SEO ;
        title="Machine Learning - Zion Tech Group";
        description="Revolutionary machine learning solutions including deep learning, predictive analytics, NLP, and computer vision. Transform your business with AI-powered insights.";
        keywords="machine learning, deep learning, AI, predictive analytics, natural language processing, computer vision, neural networks";
      />
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {{/* Hero Section */},
  }
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              animate={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI Innovation;
              </div>
              ;
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Machine;
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Learning;
                </span>
              </h1>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with revolutionary machine learning technology. ;
                Deep learning, predictive analytics, NLP, and computer vision that ;
                unlock insights and automate complex processes.;
              </p>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button;
                  whileHover={{ scale: 1.05 },
  }
                  whileTap={{ scale: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25";"
                >
                  Get Started;
                </motion.button>
                <motion.button;
                  whileHover={{ scale: 1.05 },
  }
                  whileTap={{ scale: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300";"
                >
                  View Demo;
                </motion.button>
              </div>
            </motion.div>
          </div>
          ;
          {{/* Background Elements */},
  }
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {{/* Features Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              whileInView={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              viewport={{ once: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary ML Features;
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our machine learning platform combines cutting-edge algorithms with practical ;
                applications to deliver unprecedented insights and automation capabilities.;
              </p>
            </motion.div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
  <motion.div;
                  key={{feature.title},
  }
                  initial={{ opacity: 0, y: 30 },
  }
                  whileInView={{ opacity: 1, y: 0 },
  }
                  transition={{ duration: 0.6, delay: index * 0.1 },
  }
                  viewport={{ once: true },
  }
                  className="className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:bg-slate-800/70";"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  ;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {{feature.title},
  }
                  </h3>
                  ;
                  <p className="text-gray-400 leading-relaxed">
                    {{feature.description},
  }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {{/* Benefits Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div;
                initial={{ opacity: 0, x: -30 },
  }
                whileInView={{ opacity: 1, x: 0 },
  }
                transition={{ duration: 0.8 },
  }
                viewport={{ once: true },
  }
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Business with ML;
                </h2>
                ;
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our machine learning solutions deliver measurable improvements in decision ;
                  accuracy, operational efficiency, and customer experience while enabling ;
                  new business opportunities.;
                </p>
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
  <motion.div;
                      key={{benefit},
  }
                      initial={{ opacity: 0, x: -20 },
  }
                      whileInView={{ opacity: 1, x: 0 },
  }
                      transition={{ duration: 0.5, delay: index * 0.1 },
  }
                      viewport={{ once: true },
  }
                      className="className="flex items-center gap-3";"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              ;
              <motion.div;
                initial={{ opacity: 0, x: 30 },
  }
                whileInView={{ opacity: 1, x: 0 },
  }
                transition={{ duration: 0.8 },
  }
                viewport={{ once: true },
  }
                className="className="relative";"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    ;
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ML Impact;
                    </h3>
                    ;
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

        {{/* ML Capabilities Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              whileInView={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              viewport={{ once: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Machine Learning Capabilities;
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform provides comprehensive machine learning capabilities that ;
                transform data into actionable insights and automated processes.;
              </p>
            </motion.div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlCapabilities.map((capability, index) => (
  <motion.div;
                  key={{capability.name},
  }
                  initial={{ opacity: 0, y: 30 },
  }
                  whileInView={{ opacity: 1, y: 0 },
  }
                  transition={{ duration: 0.6, delay: index * 0.1 },
  }
                  viewport={{ once: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group";"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {{capability.name},
  }
                  </h3>
                  ;
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {{capability.description},
  }
                  </p>
                  ;
                  <div className="space-y-2">
                    {capability.examples.map((example, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {{example},
  }
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {{/* Industries Section */},
  }
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              whileInView={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              viewport={{ once: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industries We Transform;
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our machine learning solutions are designed to revolutionize ;
                various industries with innovative AI applications and use cases.;
              </p>
            </motion.div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
  <motion.div;
                  key={{industry.name},
  }
                  initial={{ opacity: 0, y: 30 },
  }
                  whileInView={{ opacity: 1, y: 0 },
  }
                  transition={{ duration: 0.6, delay: index * 0.1 },
  }
                  viewport={{ once: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group";"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    ;
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {{industry.name},
  }
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {{industry.description},
  }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {{/* Use Cases Section */},
  }
        <section className="py-20">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              whileInView={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              viewport={{ once: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Machine Learning Use Cases;
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our ML platform adapts to various business needs and industries;
                providing tailored solutions for different requirements.;
              </p>
            </motion.div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
  <motion.div;
                  key={{useCase.title},
  }
                  initial={{ opacity: 0, y: 30 },
  }
                  whileInView={{ opacity: 1, y: 0 },
  }
                  transition={{ duration: 0.6, delay: index * 0.1 },
  }
                  viewport={{ once: true },
  }
                  className="className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group";"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    ;
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {{useCase.title},
  }
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {{useCase.description},
  }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {{/* CTA Section */},
  }
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container-responsive">
            <motion.div;
              initial={{ opacity: 0, y: 30 },
  }
              whileInView={{ opacity: 1, y: 0 },
  }
              transition={{ duration: 0.8 },
  }
              viewport={{ once: true },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Harness Machine Learning?;
              </h2>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our machine learning ;
                solutions to unlock insights and automate complex processes.;
              </p>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button;
                  whileHover={{ scale: 1.05 },
  }
                  whileTap={{ scale: 0.95 },
  }
                  className="className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25";"
                >
                  Start Today;
                </motion.button>
                <motion.button;
                  whileHover={{ scale: 1.05 },
  }
                  whileTap={{ scale: 0.95 },
  }
                  className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover: border-gray-500 hover:bg-gray-800/50 transition-all duration-300";"
                >
                  Schedule Demo;
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}