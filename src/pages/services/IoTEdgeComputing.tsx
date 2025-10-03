// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Network } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Network } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IoTEdgeComputing: React.FC = () => {
  const features: [,
    {
      icon: Cpu,,
      title: "Edge AI Processing",,
      description: "Real-time AI inference at the edge with optimized models for low-latency decision making.",,
      title: "Edge AI Processing",,
      description: "Real-time AI inference at the edge with optimized models for low-latency decision making.",,
      benefit: "95% latency reduction",
    },
    {
      icon: Network,,
      title: "5G Integration",,
      description: "Seamless 5G connectivity with edge computing for ultra-low latency applications.",,
      title: "5G Integration",,
      description: "Seamless 5G connectivity with edge computing for ultra-low latency applications.",,
      benefit: "Sub-millisecond response times",
    },
    {
      icon: Shield,,
      title: "Edge Security",,
      description: "Advanced security protocols for edge devices with encrypted communication and threat detection.",,
      title: "Edge Security",,
      description: "Advanced security protocols for edge devices with encrypted communication and threat detection.",,
      benefit: "Zero-trust architecture",
    },
    {
      icon: Database,,
      title: "Data Synchronization",,
      description: "Intelligent data synchronization between edge devices and cloud with conflict resolution.",,
      title: "Data Synchronization",,
      description: "Intelligent data synchronization between edge devices and cloud with conflict resolution.",,
      benefit: "99.9% data consistency",
    },
    {
      icon: Zap,,
      title: "Real-time Analytics",,
      description: "Stream processing and analytics at the edge for immediate insights and actions.",,
      title: "Real-time Analytics",,
      description: "Stream processing and analytics at the edge for immediate insights and actions.",,
      benefit: "Real-time decision making",
    },
    {
      icon: Globe,,
      title: "Global Connectivity",,
      description: "Worldwide IoT device management with regional compliance and data sovereignty.",,
      title: "Global Connectivity",,
      description: "Worldwide IoT device management with regional compliance and data sovereignty.",,
      benefit: "Global deployment ready",
    }],
;

  const pricing: [,
    {
      name="Development",
      price: "$5,000",
      period: "/month",
      description: "Perfect for IoT projects in development and testing phases",
      features: [,,
      name="Development
      price: ", $5,000
      period: "/month
      description: ", Perfect for IoT projects in development and testing phases
      features: [,,",
        "Up to 1,000 connected devices",;
        "Basic edge computing capabilities",;
        "Standard data analytics",;
        "Email support",;
        "Monthly device health reports",;
        "Basic security monitoring",;
        "Cloud data storage (100GB)",;
        "Standard integrations (10)"],

      popular: false,
    },
    {
      name="Production",
      price: "$15,000",
      period: "/month",
      description: "Ideal for production IoT deployments with high device counts",
      features: [,,
      name="Production
      price: ", $15,000
      period: "/month
      description: ", Ideal for production IoT deployments with high device counts
      features: [,,",
        "Up to 10,000 connected devices",;
        "Advanced edge AI processing",;
        "Real-time analytics & insights",;
        "Priority support",;
        "Weekly performance reports",;
        "Advanced security & threat detection",;
        "Cloud data storage (1TB)",;
        "Advanced integrations (50)",;
        "Custom device protocols",;
        "Edge-to-cloud synchronization",;
        "5G connectivity support"],

      popular: true,
    },
    {
      name="Enterprise",
      price: "$45,000",
      period: "/month",
      description: "Complete solution for large-scale enterprise IoT deployments",
      features: [,,
      name="Enterprise
      price: ", $45,000
      period: "/month
      description: ", Complete solution for large-scale enterprise IoT deployments
      features: [,,",
        "Unlimited connected devices",;
        "Premium edge AI with custom models",;
        "Enterprise-grade analytics platform",;
        "Dedicated IoT engineer",;
        "Daily monitoring & optimization",;
        "Full security suite with compliance",;
        "Unlimited cloud data storage",;
        "Unlimited integrations",;
        "Custom protocol development",;
        "Multi-region deployment",;
        "Private 5G network setup",;
        "SLA guarantee",;
        "On-premise edge infrastructure"],

      popular: false,,
      name="Development",,
      price: "$5,000",,
      period: "/month",,
      description: "Perfect for IoT projects in development and testing phases",,
      features: [,,
        "Up to 1,000 connected devices",
        "Basic edge computing capabilities",
        "Standard data analytics",
        "Email support",
        "Monthly device health reports",
        "Basic security monitoring",
        "Cloud data storage (100GB)",
        "Standard integrations (10)"],

      popular: false,
    },
    {
      name="Production",,
      price: "$15,000",,
      period: "/month",,
      description: "Ideal for production IoT deployments with high device counts",,
      features: [,,
        "Up to 10,000 connected devices",
        "Advanced edge AI processing",
        "Real-time analytics & insights",
        "Priority support",
        "Weekly performance reports",
        "Advanced security & threat detection",
        "Cloud data storage (1TB)",
        "Advanced integrations (50)",
        "Custom device protocols",
        "Edge-to-cloud synchronization",
        "5G connectivity support"],

      popular: true,
    },
    {
      name="Enterprise",,
      price: "$45,000",,
      period: "/month",,
      description: "Complete solution for large-scale enterprise IoT deployments",,
      features: [,,
        "Unlimited connected devices",
        "Premium edge AI with custom models",
        "Enterprise-grade analytics platform",
        "Dedicated IoT engineer",
        "Daily monitoring & optimization",
        "Full security suite with compliance",
        "Unlimited cloud data storage",
        "Unlimited integrations",
        "Custom protocol development",
        "Multi-region deployment",
        "Private 5G network setup",
        "SLA guarantee",
        "On-premise edge infrastructure"],

      popular: false,
    }
  ];

  const testimonials: [,
    {
      name="Robert Kim",,
      role: "CTO, Smart Manufacturing Corp",,
      content: "Zion's IoT edge computing solution reduced our production line latency by 98%. Real-time quality control now catches defects instantly, saving us $2M annually.",,
      name="Robert Kim",,
      role: "CTO, Smart Manufacturing Corp",,
      content: "Zion's IoT edge computing solution reduced our production line latency by 98%. Real-time quality control now catches defects instantly, saving us $2M annually.",,
      rating: 5,,
      company: "Smart Manufacturing Corp",
    },
    {
      name="Sarah Williams",,
      role: "VP Technology, Smart City Initiative",,
      content: "The edge AI processing for traffic management reduced congestion by 35% and emergency response times by 50%. The system pays for itself every quarter.",,
      name="Sarah Williams",,
      role: "VP Technology, Smart City Initiative",,
      content: "The edge AI processing for traffic management reduced congestion by 35% and emergency response times by 50%. The system pays for itself every quarter.",,
      rating: 5,,
      company: "Smart City Initiative",
    },
    {
      name="Dr. Michael Chen",,
      role: "Head of R&D, Healthcare IoT",,
      content: "Patient monitoring with edge computing ensures real-time alerts reach medical staff instantly. We've prevented 15 critical incidents this year alone.",,
      name="Dr. Michael Chen",,
      role: "Head of R&D, Healthcare IoT",,
      content: "Patient monitoring with edge computing ensures real-time alerts reach medical staff instantly. We've prevented 15 critical incidents this year alone.",,
      rating: 5,,
      company: "Healthcare IoT",
    }
  ];

  const useCases: [,
    {
      title: "Smart Manufacturing",,
      icon: Cpu,,
      description: "Real-time quality control, predictive maintenance, and automated optimization on production lines.",,
      metrics: "98% defect detection accuracy",,
      benefits: ["Predictive maintenance", "Quality control automation", "Energy optimization"]",
    },
    {
      title: "Smart Cities",,
      icon: Globe,,
      description: "Traffic management, environmental monitoring, and public safety systems with real-time response.",,
      metrics: "35% traffic reduction",,
      benefits: ["Traffic optimization", "Environmental monitoring", "Public safety alerts"]",
    },
    {
      title: "Healthcare IoT",,
      icon: Monitor,,
      description: "Patient monitoring, medical device integration, and emergency response systems.",,
      metrics: "50% faster emergency response",,
      benefits: ["Real-time patient monitoring", "Medical device integration", "Emergency automation"]",
    },
    {
      title: "Retail Analytics",,
      icon: BarChart3,,
      description: "Customer behavior analysis, inventory management, and personalized experiences.",,
      metrics: "60% inventory efficiency gain",,
      benefits: ["Customer analytics", "Inventory optimization", "Personalized experiences"]",
      title: "Smart Manufacturing",,
      icon: Cpu,,
      description: "Real-time quality control, predictive maintenance, and automated optimization on production lines.",,
      metrics: "98% defect detection accuracy",,
      benefits: ["Predictive maintenance", "Quality control automation", "Energy optimization"]",
    },
    {
      title: "Smart Cities",,
      icon: Globe,,
      description: "Traffic management, environmental monitoring, and public safety systems with real-time response.",,
      metrics: "35% traffic reduction",,
      benefits: ["Traffic optimization", "Environmental monitoring", "Public safety alerts"]",
    },
    {
      title: "Healthcare IoT",,
      icon: Monitor,,
      description: "Patient monitoring, medical device integration, and emergency response systems.",,
      metrics: "50% faster emergency response",,
      benefits: ["Real-time patient monitoring", "Medical device integration", "Emergency automation"]",
    },
    {
      title: "Retail Analytics",,
      icon: BarChart3,,
      description: "Customer behavior analysis, inventory management, and personalized experiences.",,
      metrics: "60% inventory efficiency gain",,
      benefits: ["Customer analytics", "Inventory optimization", "Personalized experiences"]",
    }
  ];

  const industries: [,
    { name="Manufacturing", devices: "Industrial sensors, PLCs, robotics" }";
    { name="Healthcare", devices: "Patient monitors, medical devices, wearables" }";
    { name="Retail", devices: "POS systems, inventory sensors, customer analytics" }";
    { name="Transportation", devices: "Fleet tracking, traffic sensors, autonomous vehicles" }";
    { name="Energy", devices: "Smart meters, grid sensors, renewable energy" }";
    { name="Agriculture", devices: "Soil sensors, weather stations, irrigation systems" }";
    { name="Manufacturing", devices: "Industrial sensors, PLCs, robotics" },
    { name="Healthcare", devices: "Patient monitors, medical devices, wearables" },
    { name="Retail", devices: "POS systems, inventory sensors, customer analytics" },
    { name="Transportation", devices: "Fleet tracking, traffic sensors, autonomous vehicles" },
    { name="Energy", devices: "Smart meters, grid sensors, renewable energy" },
    { name="Agriculture", devices: "Soil sensors, weather stations, irrigation systems" }
  ];

  return (
    <>
      <Helmet >
        <title >IoT & Edge Computing - Zion Tech Group | Smart Connected Solutions</title>
        <meta name="description",
  content: "Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity. 95% latency reduction, enterprise security.", /><meta name="keywords", content ="IoT solutions, edge computing, smart devices, connected systems, real-time analytics, 5G IoT, industrial IoT" /><link rel="canonical", href="https://ziontechgroup.com/services/iot-edge-computing/>",
        <meta name="description
  content: ", Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity. 95% latency reduction, enterprise security." /><meta name="keywords", content="IoT solutions, edge computing, smart devices, connected systems, real-time analytics, 5G IoT, industrial IoT" /><link rel="canonical", href="https://ziontechgroup.com/services/iot-edge-computing/>
  content: "Advanced IoT and edge computing solutions with real-time AI processing, 5G integration, and global connectivity. 95% latency reduction, enterprise security.",
        />
        <meta name="keywords", content="IoT solutions, edge computing, smart devices, connected systems, real-time analytics, 5G IoT, industrial IoT" />",
        <link rel="canonical", href ="https: //ziontechgroup.com/services/iot-edge-computing" />",
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Edge Computing</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Advanced IoT and edge computing solutions with real-time AI processing
                5G integration, and global connectivity for smart connected systems.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Edge Computing</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Demo
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  IoT & <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Edge Computing</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">,
  Advanced IoT and edge computing solutions with real-time AI processing
                5G integration, and global connectivity for smart connected systems.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  IoT & <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Edge Computing</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Advanced IoT and edge computing solutions with real-time AI processing
                5G integration, and global connectivity for smart connected systems.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Demo
                </a>
                <a href="#pricing",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Pricing
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Why Choose Our IoT & Edge Computing Solutions?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transform your operations with intelligent edge computing and seamless IoT connectivity.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">95% Latency Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Real-time edge processing</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Network className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Network className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">5G Integration</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ultra-low latency connectivity</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Zero-Trust Security</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise-grade protection</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Global Scale</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Worldwide deployment ready</p>",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">95% Latency Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Real-time edge processing</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Network className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">5G Integration</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ultra-low latency connectivity</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Zero-Trust Security</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise-grade protection</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Globe className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Global Scale</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Worldwide deployment ready</p>",
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Industry-Leading Use Cases
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  See how our IoT and edge computing solutions transform different industries.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.metrics}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <li key: {benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {useCases.map((useCase, index) => {
                const Icon: useCase.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{useCase.metrics}</h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</span>";
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{benefit}</h3>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Advanced Edge Computing Capabilities
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Powerful features that make your IoT infrastructure truly intelligent and responsive.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>";
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</p>";
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {features.map((feature, index) => {
                const Icon: feature.icon;,,
  return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <Icon className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    </div>
                    <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.title}</h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature.description}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Industries We Serve
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Comprehensive IoT solutions across diverse industries with specialized device support.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.name}</h3>";
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Supported Devices: </p>",
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.devices}</p>";
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.name}</h3>
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Supported Devices: </p>",
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.devices}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.name}</h3>";
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Supported Devices: </p>",
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.devices}</p>";
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.name}</h3>
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Supported Devices: </p>",
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.devices}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section id="pricing" className ="py-20 bg-gray-50>
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Scalable Pricing for Every Deployment
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose the plan that fits your IoT deployment size and complexity.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-orange-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <li key: {featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className={,
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.price}</h3>
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.period}</h3>
                    </div>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{plan.description}</h3>
                  </div>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>";
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",
  className= {,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-orange-600 text-white hover: bg-orange-700',';,
? 'bg-orange-600 text-white hover: bg-orange-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom IoT solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our IoT Specialists
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom IoT solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our IoT Specialists
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  What Our Clients Say
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join hundreds of satisfied customers who have transformed their operations with our IoT and edge computing solutions.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                      <Star key: {i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                    ))}
                  </div>
                  <blockquote className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div >
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.role}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{testimonial.company}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Schedule Free Consultation
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Success Stories
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Ready to Build Your Smart Connected Future?
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Join hundreds of companies already using our IoT and edge computing solutions to create intelligent, connected systems.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Free Consultation
              </a>
              <a href="/case-studies",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Success Stories
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Component;