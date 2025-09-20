import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { ;
  Cpu,;
  Brain, ;
  Zap, ;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Globe,;
  Lock,;
  Database,;
  Network,;
  BarChart3,;
  FileText,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Video,;
  Eye,;
  Target,;
  Users,;
  ArrowRight,;
  Key,;
  Fingerprint,;
  EyeOff,;
  Server,;
  Globe2,;
  ShieldCheck,;
  Wifi,;
  Smartphone,;
  Cloud,;
  Activity,;
  Clock,;
  BarChart,;
  PieChart;
} from "lucide-react"
export default function IoTEdgeComputing() {;
  const features = [;
    {;
      icon: Cpu,title: 'Edge Processing',description: 'Real-time data processing at the edge for instant decision making',color: 'from-blue-500 to-cyan-500'
    };
    {;
      icon: Wifi,title: 'IoT Connectivity',description: 'Seamless connection of devices across multiple protocols and networks',color: 'from-green-500 to-emerald-500'
    };
    {;
      icon: Brain,title: 'AI at the Edge',description: 'Machine learning models running locally for privacy and speed',color: 'from-purple-500 to-pink-500'
    };
    {;
      icon: Zap,title: 'Real-Time Analytics',description: 'Instant insights and monitoring with minimal latency',color: 'from-yellow-500 to-orange-500'
    };
    {;
      icon: ShieldCheck,title: 'Edge Security',description: 'Advanced security protocols for distributed IoT networks',color: 'from-red-500 to-pink-500'
    };
    {;
      icon: Cloud,title: 'Hybrid Cloud',description: 'Seamless integration between edge devices and cloud infrastructure',color: 'from-indigo-500 to-blue-500'
    };
  ];
  const benefits = [;
    'Reduce latency by 90% with edge processingLower bandwidth costs by 70%',;
    'Improve data privacy and securityEnable real-time decision making',;
    'Scale IoT deployments efficientlyReduce cloud dependency and costs'
  ],;

  const useCases = [;
    {;
      title: 'Smart Cities',description: 'Intelligent urban infrastructure with real-time monitoring',icon: Building;
    };
    {;
      title: 'Industrial IoT',description: 'Predictive maintenance and process optimization',icon: Factory;
    };
    {;
      title: 'Connected Vehicles',description: 'Autonomous driving and traffic management',icon: Car;
    };
    {;
      title: 'Healthcare IoT',description: 'Remote patient monitoring and medical device management',icon: Heart;
    };
  ];
  const edgeCapabilities = [;
    {;
      name: 'Real-Time Processing',description: 'Instant data analysis and decision making at the edge',examples: ['Stream processingEvent detection', 'Instant alerts']
    },;
    {;
      name: 'Local AI Models',description: 'Machine learning algorithms running on edge devices',examples: ['Image recognitionPredictive analytics', 'Anomaly detection']
    },;
    {;
      name: 'Data Filtering',description: 'Intelligent data selection and preprocessing',examples: ['Noise reductionData compression', 'Quality filtering']
    },;
    {;
      name: 'Edge Analytics',description: 'Advanced analytics and insights generation',examples: ['Trend analysisPattern recognition', 'Performance metrics']
    };
  ],;

  return (
    <>;
      <SEO ;
        title="IoT Edge Computing - Zion Tech Group"
        description="Revolutionary IoT edge computing platform with real-time processing, AI at the edge, and seamless device connectivity. Transform your IoT infrastructure with cutting-edge edge technology."
        keywords="IoT edge computing, edge processing, IoT connectivity, edge AI, real-time analytics, smart devices, edge security"
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */};
        <section className="relative overflow-hidden py-20 lg:py-32">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">;
                <[^>]*/>
                Edge Innovation;
              </[^>]*>
              ;
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
                IoT;
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">;
                  Edge Computing;
                </[^>]*>
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Transform your IoT infrastructure with our revolutionary edge computing platform. ;
                Real-time processing, AI at the edge, and seamless connectivity that brings ;
                intelligence closer to your data sources.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Get Started;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  View Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          {/* Background Elements */};
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></[^>]*>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Features Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Revolutionary Edge Computing Features;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our IoT edge platform combines cutting-edge technology with practical ;
                applications to deliver unprecedented performance and efficiency.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features.map((feature, index) => (;
                <motion.div
                  key={feature.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                    <[^>]*/>
                  </[^>]*>
                  ;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                    {feature.title};
                  </[^>]*>
                  ;
                  <p className="text-gray-400 leading-relaxed">;
                    {feature.description};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <section className="py-20 bg-slate-800/30">;
          <div className="container-responsive">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <motion.div
                initial={{ opacity: 0, x: -30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
              >;
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                  Transform Your IoT Infrastructure;
                </[^>]*>
                ;
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">;
                  Our IoT edge computing platform delivers measurable improvements in ;
                  performance, efficiency, and cost while enabling real-time decision ;
                  making and advanced analytics.;
                </[^>]*>
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  {benefits.map((benefit, index) => (;
                    <motion.div
                      key={benefit};
                      initial={{ opacity: 0, x: -20 }};
                      whileInView={{ opacity: 1, x: 0 }};
                      transition={{ duration: 0.5, delay: index * 0.1 }};
                      viewport={{ once: true }};
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      <span className="text-gray-300">{benefit}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
              ;
              <motion.div
                initial={{ opacity: 0, x: 30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Edge Performance;
                    </[^>]*>
                    ;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-blue-400 mb-2">90%</[^>]*>
                        <div className="text-sm text-gray-400">Latency Reduction</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">70%</[^>]*>
                        <div className="text-sm text-gray-400">Bandwidth Savings</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</[^>]*>
                        <div className="text-sm text-gray-400">Real-Time Processing</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-400 mb-2">100%</[^>]*>
                        <div className="text-sm text-gray-400">Edge Security</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Edge Capabilities Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Edge Computing Capabilities;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our platform provides comprehensive edge computing capabilities that ;
                bring intelligence and processing power closer to your data sources.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {edgeCapabilities.map((capability, index) => (;
                <motion.div
                  key={capability.name};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                    {capability.name};
                  </[^>]*>
                  ;
                  <p className="text-gray-400 mb-4 leading-relaxed">;
                    {capability.description};
                  </[^>]*>
                  ;
                  <div className="space-y-2">;
                    {capability.examples.map((example, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">;
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></[^>]*>
                        {example};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Use Cases Section */};
        <section className="py-20 bg-slate-800/30">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                IoT Edge Computing Use Cases;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our edge platform adapts to various industries and applications;
                providing tailored solutions for different IoT environments.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {useCases.map((useCase, index) => (;
                <motion.div
                  key={useCase.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">;
                        {useCase.title};
                      </[^>]*>
                      <p className="text-gray-400 leading-relaxed">;
                        {useCase.description};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                Ready to Transform Your IoT Infrastructure?;
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Join leading organizations that are already using our IoT edge computing ;
                platform to revolutionize their connected device infrastructure.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Start Today;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Schedule Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};