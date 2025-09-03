<<<<<<< HEAD
import React from 'react.ts';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion.ts';

const AIIoTEdgeComputingPlatform: React.FC = (): JSX.Element => {
  return (
    <>
      <SEO
        title="AI-Powered IoT Edge Computing Platform | Zion Tech Group"
        description="Advanced AI-driven IoT edge computing platform. Reduce latency by 90%, lower bandwidth costs by 70%, and process data at the edge with sub-millisecond response times."
        keywords="AI IoT, edge computing, real-time processing, distributed computing, hybrid cloud, edge intelligence, IoT analytics, edge AI"
        canonical="https://ziontechgroup.com/services/ai-iot-edge-computing-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IoT Edge Computing Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize IoT with AI-powered edge computing. Process data at the edge with sub-millisecond latency, reduce bandwidth costs by 70%, and enable real-time intelligent decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with distributed edge computing to deliver unprecedented IoT performance and intelligence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Edge Intelligence",
                  description: "Machine learning models deployed at the edge for real-time decision making and intelligent data processing.",
                  icon: "🧠"
                },
                {
                  title: "Real-Time Data Processing",
                  description: "Sub-millisecond response times with local data processing and intelligent filtering at the edge.",
                  icon: "⚡"
                },
                {
                  title: "Distributed Edge Computing",
                  description: "Scalable edge computing infrastructure with intelligent load balancing and resource optimization.",
                  icon: "🌐"
                },
                {
                  title: "Edge-to-Cloud Orchestration",
                  description: "Seamless integration between edge devices and cloud infrastructure with intelligent data routing.",
                  icon: "☁️"
                },
                {
                  title: "Hybrid Cloud Integration",
                  description: "Support for multi-cloud environments with intelligent workload distribution and data synchronization.",
                  icon: "🔗"
                },
                {
                  title: "Edge Security & Privacy",
                  description: "Built-in security features with local data processing and privacy-preserving AI algorithms.",
                  icon: "🔒"
                }
              ].map((feature, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform delivers quantifiable results that directly impact your IoT performance and operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { metric: "90%", description: "Reduction in latency" },
                { metric: "70%", description: "Lower bandwidth costs" },
                { metric: "85%", description: "Faster decision making" },
                { metric: "80%", description: "Reduction in cloud costs" },
                { metric: "95%", description: "Data processing accuracy" },
                { metric: "60%", description: "Improvement in reliability" }
              ].map((benefit, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  scale: 0.9 

}}
                  whileInView = {
  { opacity: 1,
  scale: 1 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-8 border border-orange-500/30"
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                  <p className="text-white text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed to address the unique IoT challenges across various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngrid-cols-2 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Real-time monitoring and predictive maintenance for industrial IoT with edge AI processing.",
                  features: ["Predictive maintenance", "Quality control", "Production optimization"]
                },
                {
                  industry: "Healthcare",
                  description: "Patient monitoring and medical device management with privacy-preserving edge computing.",
                  features: ["Patient monitoring", "Medical device management", "Privacy protection"]
                },
                {
                  industry: "Smart Cities",
                  description: "Intelligent traffic management and environmental monitoring with distributed edge computing.",
                  features: ["Traffic optimization", "Environmental monitoring", "Public safety"]
                },
                {
                  industry: "Agriculture",
                  description: "Precision farming and crop monitoring with AI-powered edge analytics.",
                  features: ["Crop monitoring", "Soil analysis", "Irrigation optimization"]
                }
              ].map((useCase, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Stack & Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on industry-leading technologies and seamlessly integrates with your existing IoT infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md: unknowngrid-cols-4 gap-6">
              {[
                "TensorFlow Lite", "ONNX Runtime", "Apache Kafka", "MQTT", "Kubernetes Edge", "Docker Edge", "AWS IoT", "Azure IoT",
                "Google Cloud IoT", "Node-RED", "Grafana", "Prometheus", "InfluxDB", "Redis", "PostgreSQL", "MongoDB"
              ].map((tech, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  scale: 0.8 

}}
                  whileInView = {
  { opacity: 1,
  scale: 1 

}}
                  transition = {
  { duration: 0.4,
  delay: index * 0.05 

}}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your IoT deployment size and edge computing requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: unknowngrid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  period: "/month",
                  description: "Perfect for small IoT deployments starting with edge computing",
                  features: [
                    "Up to 100 IoT devices",
                    "Basic edge AI processing",
                    "MQTT support",
                    "Email support",
                    "Standard templates",
                    "Monthly reports"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$899",
                  period: "/month",
                  description: "Ideal for growing IoT deployments with advanced edge computing needs",
                  features: [
                    "Up to 1,000 IoT devices",
                    "Advanced edge AI processing",
                    "Multi-protocol support",
                    "Priority support",
                    "Custom integrations",
                    "Real-time monitoring",
                    "Advanced analytics",
                    "Team collaboration tools"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$2,499",
                  period: "/month",
                  description: "Comprehensive solution for large IoT deployments",
                  features: [
                    "Unlimited IoT devices",
                    "Full edge AI suite",
                    "Custom AI models",
                    "24/7 dedicated support",
                    "White-label solutions",
                    "Advanced compliance",
                    "Custom integrations",
                    "Dedicated IoT consultant"
                  ],
                  popular: false
                }
              ].map((plan, index)   => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                  viewport={{ once: true }}
                  className={`relative rounded-xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-600 to-red-600 border-2 border-orange-400' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition = {
  { duration: 0.8,
  delay: 0.4 

}}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-4">
                All plans include a 14-day free trial. Annual plans save 20%.
              </p>
              <p className="text-gray-300">
                Need a custom plan? <span className="text-blue-400 cursor-pointer hover:underline">Contact us</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IoT with Edge AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations who trust our AI-powered platform to revolutionize their IoT deployments.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📱 <span className="text-white">+1 302 464 0950</span></p>
                    <p>✉️ <span className="text-white">kleber@ziontechgroup.com</span></p>
                    <p>📍 <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span></p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Schedule Demo
                    </button>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Start Free Trial
                    </button>
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Download Case Study
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-300">
                <p>Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>;
    </>;
  );
};

export default AIIoTEdgeComputingPlatform;

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };

export { AIIoTEdgeComputingPlatform };
=======
<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { ; Cpu,; Zap,; Brain,; Network,; Server,; Cloud,; CheckCircle,; ArrowRight,; Code,; Database,; Shield,; Clock,; Award,; Star,; MessageCircle,; Phone,; Mail,; MapPin,; Building,; Users,; TrendingUp,; Target,; Rocket,; Sparkles,; Globe,; Lock,; RefreshCw,; Wifi,; Bluetooth,; Radio,; Satellite,; Smartphone,; Tablet,; Monitor,; HardDrive,; MemoryStick,; CircuitBoard,; Microchip,; Sensor,; Camera,; Thermometer,; Gauge,; Activity,; BarChart3,; PieChart,; LineChart,; AreaChart;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function AIIoTEdgeComputingPlatform() {; const features = [; {; icon: Brain,; title: 'AI-Powered Edge Intelligence',; description: 'Machine learning models that run directly on IoT devices for real-time decision making'; },; {; icon: Zap,; title: 'Real-time Data Processing',; description: 'Process sensor data at the edge with sub-millisecond latency for immediate insights'; },; {; icon: Network,; title: 'Distributed Edge Computing',; description: 'Intelligent workload distribution across edge nodes for optimal performance and reliability'; },; {; icon: Server,; title: 'Edge-to-Cloud Orchestration',; description: 'Seamless data flow between edge devices and cloud infrastructure with intelligent routing'; },; {; icon: Cloud,; title: 'Hybrid Cloud Integration',; description: 'Support for multi-cloud environments with intelligent data placement and processing'; },; {; icon: Shield,; title: 'Edge Security & Privacy',; description: 'Advanced security protocols including encryption, authentication, and secure boot'; }; ]; ; const benefits = [; 'Reduce latency by 90%',; 'Lower bandwidth costs by 70%',; 'Improve data privacy and security',; 'Enable real-time decision making',; 'Reduce cloud dependency',; 'Scale IoT deployments efficiently'; ]; ; const useCases = [; {; industry: 'Manufacturing',; applications: ['Predictive maintenance', 'Quality control', 'Supply chain monitoring', 'Energy optimization'],; icon: Cpu; },; {; industry: 'Healthcare',; applications: ['Patient monitoring', 'Medical device management', 'Telemedicine', 'Clinical analytics'],; icon: Shield; },; {; industry: 'Smart Cities',; applications: ['Traffic management', 'Environmental monitoring', 'Public safety', 'Energy management'],; icon: Globe; },; {; industry: 'Agriculture',; applications: ['Precision farming', 'Crop monitoring', 'Livestock tracking', 'Weather prediction'],; icon: Network; }; ]; ; const technologies = [; 'TensorFlow Lite',; 'ONNX Runtime',; 'Apache Kafka',; 'MQTT Protocol',; 'Kubernetes Edge',; 'Docker Edge',; 'Azure IoT Edge',; 'AWS Greengrass',; 'Google Cloud IoT',; 'NVIDIA Jetson',; 'Intel OpenVINO',; 'ARM Cortex-M',; 'RISC-V',; 'LoRaWAN',; '5G Networks'; ]; ; const pricingPlans = [; {; name: 'Starter',; description: 'Perfect for small IoT projects and prototypes',; price: { monthly: 299, annual: 2990 },; features: [; 'Up to 100 edge devices',; 'Basic AI models',; 'Cloud integration',; 'Email support',; 'Standard security',; 'Monthly reports'; ],; icon: Rocket,; color: 'from-orange-500 to-red-500',; popular: false,; cta: 'Start Free Trial',; link: '/contact'; },; {; name: 'Professional',; description: 'Ideal for production IoT deployments',; price: { monthly: 899, annual: 8990 },; features: [; 'Up to 1,000 edge devices',; 'Advanced AI models',; 'Real-time analytics',; 'Priority support',; 'Custom integrations',; 'Advanced security',; 'API access',; 'Training sessions'; ],; icon: Building,; color: 'from-blue-500 to-cyan-500',; popular: true,; cta: 'Get Started',; link: '/contact'; },; {; name: 'Enterprise',; description: 'For large-scale IoT operations',; price: { monthly: 2499, annual: 24990 },; features: [; 'Unlimited edge devices',; 'Custom AI models',; 'Dedicated IoT team',; '24/7 priority support',; 'On-premise deployment',; 'White-label solutions',; 'SLA guarantees',; 'Compliance reporting'; ],; icon: Globe,; color: 'from-purple-500 to-pink-500',; popular: false,; cta: 'Contact Sales',; link: '/contact'; }; ]; ; return (; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">;"";" <SEO ";"";" title="AI-Powered IoT Edge Computing Platform | Zion Tech Group";"";" description="Transform IoT with AI-powered edge computing.Process data at the edge, reduce latency, and enable real-time decision making with intelligent edge devices.";"";" keywords="IoT edge computing, edge AI, real-time processing, IoT platform, edge analytics, distributed computing";"";" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiIotEdgeComputingPlatform() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Iot Edge Computing Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Iot Edge Computing Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai iot edge computing platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Iot Edge Computing Platform Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai iot edge computing platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Iot Edge Computing Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai iot edge computing platform platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
>>>>>>> main
