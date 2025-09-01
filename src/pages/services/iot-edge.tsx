import React from 'react.ts';
import { Helmet               } from 'react-helmet-async.ts';
import { Link               } from 'react-router-dom.ts';

export default function IoTEdge(...args: []):  {

  return (
    <>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name = "description" content="Connect, monitor, and optimize your IoT devices with edge computing solutions. Real-time data processing and intelligent device management." />
        <meta name="keywords" content="IoT, edge computing, smart devices, sensor networks, real-time processing, device management, industrial IoT" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
                <Cpu className="w-4 h-4 mr-2" />
                IoT & Edge Computing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IoT & Edge
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> Computing</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Connect and manage your IoT ecosystem with intelligent edge computing. Process data locally,
                reduce latency, and enable real-time decision-making across your connected devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent IoT Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our IoT and edge computing platform provides comprehensive device management,
                real-time analytics, and intelligent automation capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {

                  icon: Cpu,
                  title: "Edge Processing",
                  description: "Process data locally on IoT devices for reduced latency and improved performance."
                },
                {

                  icon: Wifi,
                  title: "Device Connectivity",
                  description: "Seamless connectivity across multiple protocols and network types."
                },
                {

                  icon: Zap,
                  title: "Real-time Analytics",
                  description: "Instant insights and decision-making with edge-based analytics."
                },
                {

                  icon: Settings,
                  title: "Device Management",
                  description: "Centralized management and monitoring of all IoT devices and sensors."
                },
                {

                  icon: Users,
                  title: "Smart Automation",
                  description: "Intelligent automation based on sensor data and predefined rules."
                },
                {

                  icon: Shield,
                  title: "Security & Privacy",
                  description: "Enterprise-grade security with encryption and access controls."
                }
              ].map((feature, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* IoT Applications Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IoT Applications & Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how IoT and edge computing can transform different industries and operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {

                  title: "Smart Manufacturing",
                  description: "Monitor production equipment, predict maintenance, and optimize manufacturing processes.",
                  icon: Settings,
                  benefits: ["Predictive maintenance", "Quality control", "Production optimization"]
                },
                {

                  title: "Smart Cities",
                  description: "Manage urban infrastructure, traffic systems, and public services efficiently.",
                  icon: Globe,
                  benefits: ["Traffic management", "Infrastructure monitoring", "Public safety"]
                },
                {

                  title: "Healthcare IoT",
                  description: "Patient monitoring, medical device management, and remote healthcare delivery.",
                  icon: Users,
                  benefits: ["Patient monitoring", "Device management", "Remote care"]
                },
                {

                  title: "Energy Management",
                  description: "Smart grid monitoring, renewable energy optimization, and energy efficiency.",
                  icon: Zap,
                  benefits: ["Grid monitoring", "Energy optimization", "Efficiency management"]
                },
                {

                  title: "Agriculture",
                  description: "Precision farming, crop monitoring, and automated irrigation systems.",
                  icon: Target,
                  benefits: ["Crop monitoring", "Precision farming", "Automated irrigation"]
                },
                {

                  title: "Retail & Logistics",
                  description: "Inventory management, supply chain optimization, and customer experience.",
                  icon: Activity,
                  benefits: ["Inventory tracking", "Supply chain", "Customer insights"]
                }
              ].map((application, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                  <p className="text-slate-300 mb-4">{application.description}</p>
                  <ul className="space-y-1">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-indigo-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Edge Computing Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Advantages
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Process data closer to the source for improved performance, reduced latency, and enhanced security.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Reduce latency by processing data locally on edge devices",
                    "Lower bandwidth costs by filtering and processing data at the edge",
                    "Improve reliability with offline capabilities and local processing",
                    "Enhance security by keeping sensitive data closer to the source",
                    "Enable real-time decision making without cloud dependency",
                    "Scale efficiently with distributed edge computing architecture"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: anyanyanyanyanyanyanyanyanyanyanyanyany"90%", label: "Reduced Latency" },
                    { metric: "60%", label: "Bandwidth Savings" },
                    { metric: "99.9%", label: "Uptime Reliability" },
                    { metric: "24/7", label: "Local Processing" }
                  ].map((item, index)               => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-2xl font-bold text-indigo-400">{item.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technology Stack Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built on cutting-edge IoT and edge computing technologies for maximum performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {

                  title: "IoT Protocols",
                  description: "Support for MQTT, CoAP, HTTP, and custom protocols"
                },
                {

                  title: "Edge Computing",
                  description: "Docker containers, Kubernetes, and edge-native applications"
                },
                {

                  title: "Data Processing",
                  description: "Stream processing, real-time analytics, and machine learning"
                },
                {

                  title: "Security",
                  description: "TLS encryption, device authentication, and secure communication"
                }
              ].map((technology, index)  => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{technology.title}</h3>
                  <p className="text-slate-300">{technology.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful IoT and edge computing implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {

                  step: "01",
                  title: "Assessment",
                  description: "Evaluate current infrastructure and identify IoT opportunities."
                },
                {

                  step: "02",
                  title: "Design",
                  description: "Architect IoT solution with edge computing capabilities."
                },
                {

                  step: "03",
                  title: "Implementation",
                  description: "Deploy IoT devices and edge computing infrastructure."
                },
                {

                  step: "04",
                  title: "Optimization",
                  description: "Monitor performance and continuously optimize the system."
                }
              ].map((step, index)  => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect Your IoT Ecosystem?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your operations with intelligent IoT and edge computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                Explore All Services;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}}}}}}