// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EdgeComputingAI: React.FC = () => {
  const features: [,
    {
      icon: Cpu,,
      title: "Edge AI Processing",,
      description: "Deploy AI models directly on edge devices for real-time inference without cloud dependency.",,
      title: "Edge AI Processing",,
      description: "Deploy AI models directly on edge devices for real-time inference without cloud dependency.",,
      benefit: "Sub-10ms response times",
    },
    {
      icon: Zap,,
      title: "Real-Time Analytics",,
      description: "Process and analyze data at the edge for instant insights and immediate action triggers.",,
      title: "Real-Time Analytics",,
      description: "Process and analyze data at the edge for instant insights and immediate action triggers.",,
      benefit: "99.9% uptime with offline capability",
    },
    {
      icon: Wifi,,
      title: "Low-Latency Communication",,
      description: "Optimized protocols for minimal latency between edge devices and central systems.",,
      title: "Low-Latency Communication",,
      description: "Optimized protocols for minimal latency between edge devices and central systems.",,
      benefit: "90% reduction in network latency",
    },
    {
      icon: Shield,,
      title: "Enhanced Security",,
      description: "Data processing at the edge reduces exposure and provides local security controls.",,
      title: "Enhanced Security",,
      description: "Data processing at the edge reduces exposure and provides local security controls.",,
      benefit: "Zero data transmission vulnerabilities",
    },
    {
      icon: Clock,,
      title: "Continuous Operation",,
      description: "Edge devices operate independently, ensuring functionality even during network outages.",,
      title: "Continuous Operation",,
      description: "Edge devices operate independently, ensuring functionality even during network outages.",,
      benefit: "100% local processing capability",
    },
    {
      icon: Users,,
      title: "Scalable Deployment",,
      description: "Easily scale from single devices to thousands of edge nodes across multiple locations.",,
      title: "Scalable Deployment",,
      description: "Easily scale from single devices to thousands of edge nodes across multiple locations.",,
      benefit: "Unlimited edge node deployment",
    }],
;

  const pricing: [,
    {
      name="Edge Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small-scale edge deployments and proof of concepts",
      features: [,,
      name="Edge Starter
      price: ", $1,999
      period: "/month
      description: ", Perfect for small-scale edge deployments and proof of concepts
      features: [,,",
        "Up to 10 edge devices",;
        "Basic AI model deployment",;
        "Standard monitoring",;
        "Email support",;
        "Monthly analytics reports",;
        "Basic security features",;
        "Standard protocols",;
        "Cloud backup integration"],

      popular: false,
    },
    {
      name="Edge Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for medium-scale deployments with advanced requirements",
      features: [,,
      name="Edge Professional
      price: ", $5,999
      period: "/month
      description: ", Ideal for medium-scale deployments with advanced requirements
      features: [,,",
        "Up to 100 edge devices",;
        "Advanced AI model deployment",;
        "Real-time monitoring & alerting",;
        "Priority support",;
        "Custom analytics dashboards",;
        "Advanced security & encryption",;
        "Optimized protocols",;
        "Hybrid cloud integration",;
        "Custom model training",;
        "API access"],

      popular: true,
    },
    {
      name="Edge Enterprise",
      price: "$15,999",
      period: "/month",
      description: "Complete solution for large-scale enterprise edge deployments",
      features: [,,
      name="Edge Enterprise
      price: ", $15,999
      period: "/month
      description: ", Complete solution for large-scale enterprise edge deployments
      features: [,,",
        "Unlimited edge devices",;
        "Custom AI model development",;
        "Enterprise monitoring suite",;
        "Dedicated edge specialist",;
        "Custom analytics & reporting",;
        "Enterprise security suite",;
        "Custom protocol development",;
        "Multi-cloud integration",;
        "On-premise deployment",;
        "24/7 monitoring & support",;
        "SLA guarantee",;
        "Training & consultation"],

      popular: false,,
      name="Edge Starter",,
      price: "$1,999",,
      period: "/month",,
      description: "Perfect for small-scale edge deployments and proof of concepts",,
      features: [,,
        "Up to 10 edge devices",
        "Basic AI model deployment",
        "Standard monitoring",
        "Email support",
        "Monthly analytics reports",
        "Basic security features",
        "Standard protocols",
        "Cloud backup integration"],

      popular: false,
    },
    {
      name="Edge Professional",,
      price: "$5,999",,
      period: "/month",,
      description: "Ideal for medium-scale deployments with advanced requirements",,
      features: [,,
        "Up to 100 edge devices",
        "Advanced AI model deployment",
        "Real-time monitoring & alerting",
        "Priority support",
        "Custom analytics dashboards",
        "Advanced security & encryption",
        "Optimized protocols",
        "Hybrid cloud integration",
        "Custom model training",
        "API access"],

      popular: true,
    },
    {
      name="Edge Enterprise",,
      price: "$15,999",,
      period: "/month",,
      description: "Complete solution for large-scale enterprise edge deployments",,
      features: [,,
        "Unlimited edge devices",
        "Custom AI model development",
        "Enterprise monitoring suite",
        "Dedicated edge specialist",
        "Custom analytics & reporting",
        "Enterprise security suite",
        "Custom protocol development",
        "Multi-cloud integration",
        "On-premise deployment",
        "24/7 monitoring & support",
        "SLA guarantee",
        "Training & consultation"],

      popular: false,
    }
  ];

  const testimonials: [,
    {
      name="Robert Kim",,
      role: "CTO, Manufacturing Solutions",,
      content: "Edge AI processing reduced our production line response times from 500ms to 8ms. This enabled real-time quality control that increased our product quality by 40%.",,
      name="Robert Kim",,
      role: "CTO, Manufacturing Solutions",,
      content: "Edge AI processing reduced our production line response times from 500ms to 8ms. This enabled real-time quality control that increased our product quality by 40%.",,
      rating: 5,,
      company: "Manufacturing Solutions",
    },
    {
      name="Lisa Chen",,
      role: "VP Engineering, Smart City Initiative",,
      content: "The edge computing platform enabled us to process traffic data locally, reducing network costs by 60% while improving traffic management response times by 10x.",,
      name="Lisa Chen",,
      role: "VP Engineering, Smart City Initiative",,
      content: "The edge computing platform enabled us to process traffic data locally, reducing network costs by 60% while improving traffic management response times by 10x.",,
      rating: 5,,
      company: "Smart City Initiative",
    },
    {
      name="Dr. Michael Rodriguez",,
      role: "Head of Innovation, Healthcare Systems",,
      content: "Edge AI deployment in our medical devices enabled real-time patient monitoring with zero network dependency. Patient safety improved significantly with instant alerts.",,
      name="Dr. Michael Rodriguez",,
      role: "Head of Innovation, Healthcare Systems",,
      content: "Edge AI deployment in our medical devices enabled real-time patient monitoring with zero network dependency. Patient safety improved significantly with instant alerts.",,
      rating: 5,,
      company: "Healthcare Systems",
    }
  ];

  const useCases: [,
    {
      title: "Industrial IoT",,
      icon: Monitor,,
      description: "Real-time monitoring and control of industrial equipment with predictive maintenance capabilities.",,
      benefits: ["50% reduction in downtime", "30% improvement in efficiency", "40% cost savings in maintenance"]",
    },
    {
      title: "Smart Cities",,
      icon: Globe,,
      description: "Intelligent traffic management, environmental monitoring, and public safety systems.",,
      benefits: ["60% reduction in traffic congestion", "25% improvement in air quality", "35% faster emergency response"]",
    },
    {
      title: "Healthcare",,
      icon: Smartphone,,
      description: "Real-time patient monitoring, medical device control, and emergency response systems.",,
      benefits: ["45% improvement in patient outcomes", "70% faster emergency detection", "50% reduction in hospital readmissions"]",
    },
    {
      title: "Retail & Commerce",,
      icon: Database,,
      description: "Intelligent inventory management, customer behavior analysis, and automated checkout systems.",,
      benefits: ["35% improvement in inventory accuracy", "25% increase in sales", "40% reduction in checkout time"]",
      title: "Industrial IoT",,
      icon: Monitor,,
      description: "Real-time monitoring and control of industrial equipment with predictive maintenance capabilities.",,
      benefits: ["50% reduction in downtime", "30% improvement in efficiency", "40% cost savings in maintenance"]",
    },
    {
      title: "Smart Cities",,
      icon: Globe,,
      description: "Intelligent traffic management, environmental monitoring, and public safety systems.",,
      benefits: ["60% reduction in traffic congestion", "25% improvement in air quality", "35% faster emergency response"]",
    },
    {
      title: "Healthcare",,
      icon: Smartphone,,
      description: "Real-time patient monitoring, medical device control, and emergency response systems.",,
      benefits: ["45% improvement in patient outcomes", "70% faster emergency detection", "50% reduction in hospital readmissions"]",
    },
    {
      title: "Retail & Commerce",,
      icon: Database,,
      description: "Intelligent inventory management, customer behavior analysis, and automated checkout systems.",,
      benefits: ["35% improvement in inventory accuracy", "25% increase in sales", "40% reduction in checkout time"]",
    }
  ];

  const technologies: [,
    {
      name="TensorFlow Lite",,
      description: "Optimized AI model deployment for edge devices with minimal resource requirements.",
    },
    {
      name="OpenVINO",,
      description: "Intel's toolkit for optimizing AI inference across various edge hardware platforms.",
    },
    {
      name="NVIDIA Jetson",,
      description: "Powerful edge AI computing platform for autonomous machines and robotics.",
    },
    {
      name="AWS IoT Greengrass",,
      description: "Edge runtime and cloud service for building, deploying, and managing IoT applications.",
    },
    {
      name="Azure IoT Edge",,
      description: "Cloud intelligence extended to edge devices for offline and low-latency scenarios.",
    },
    {
      name="Custom Protocols",,
      name="TensorFlow Lite",,
      description: "Optimized AI model deployment for edge devices with minimal resource requirements.",
    },
    {
      name="OpenVINO",,
      description: "Intel's toolkit for optimizing AI inference across various edge hardware platforms.",
    },
    {
      name="NVIDIA Jetson",,
      description: "Powerful edge AI computing platform for autonomous machines and robotics.",
    },
    {
      name="AWS IoT Greengrass",,
      description: "Edge runtime and cloud service for building, deploying, and managing IoT applications.",
    },
    {
      name="Azure IoT Edge",,
      description: "Cloud intelligence extended to edge devices for offline and low-latency scenarios.",
    },
    {
      name="Custom Protocols",,
      description: "Tailored communication protocols optimized for specific edge computing requirements.",
    }
  ];

  return (
    <>
      <Helmet >
        <title >Edge Computing AI - Zion Tech Group | Real-Time Edge Intelligence</title>
        <meta name="description",
  content: "Deploy AI at the edge for real-time processing with sub-10ms response times. Edge computing solutions for IoT, industrial automation, smart cities, and healthcare applications.", /><meta name="keywords", content ="edge computing, edge AI, IoT, real-time processing, edge analytics, distributed computing, edge deployment, low latency AI" /><link rel="canonical", href="https://ziontechgroup.com/services/edge-computing-ai/>",
        <meta name="description
  content: ", Deploy AI at the edge for real-time processing with sub-10ms response times. Edge computing solutions for IoT, industrial automation, smart cities, and healthcare applications." /><meta name="keywords", content="edge computing, edge AI, IoT, real-time processing, edge analytics, distributed computing, edge deployment, low latency AI" /><link rel="canonical", href="https://ziontechgroup.com/services/edge-computing-ai/>
  content: "Deploy AI at the edge for real-time processing with sub-10ms response times. Edge computing solutions for IoT, industrial automation, smart cities, and healthcare applications.",
        />
        <meta name="keywords", content="edge computing, edge AI, IoT, real-time processing, edge analytics, distributed computing, edge deployment, low latency AI" />",
        <link rel="canonical", href ="https: //ziontechgroup.com/services/edge-computing-ai" />",
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</span>",
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
  Edge Computing <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</h3>
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Deploy AI at the edge for real-time processing with sub-10ms response times. 
                Transform your IoT, industrial, and smart city applications with distributed intelligence.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Edge Computing <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">AI</span>",
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Deploy AI at the edge for real-time processing with sub-10ms response times. 
                Transform your IoT, industrial, and smart city applications with distributed intelligence.
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
  Why Choose Edge Computing AI?
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Bring intelligence closer to your data sources for unprecedented speed and reliability.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Sub-10ms Response</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ultra-low latency processing</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Offline Capability</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Works without network connection</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">90% Latency Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Massive network performance gains</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Users className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Users className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Unlimited Scale</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Deploy thousands of edge nodes</p>",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Zap className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Sub-10ms Response</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ultra-low latency processing</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Shield className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Offline Capability</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Works without network connection</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Clock className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">90% Latency Reduction</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Massive network performance gains</p>",
              </div>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <Users className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
                </div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Unlimited Scale</h3>",
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Deploy thousands of edge nodes</p>",
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
  Industry Applications
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Edge AI solutions transforming operations across multiple industries.
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

        {/* Technologies */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Supported Technologies
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Leverage cutting-edge edge computing platforms and frameworks.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tech.name}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tech.description}</h3>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {technologies.map((tech, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tech.name}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{tech.description}</h3>
                </div>
              ))}
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
  Advanced Edge Computing Features
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Powerful capabilities that make edge AI deployment seamless and efficient.
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
  Transparent Pricing for Every Scale
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Choose the plan that fits your edge computing needs and deployment scale.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"> (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-teal-500 relative' : ''}`}>`
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
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
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
                      <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">/{plan.period}</h3>
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
? 'bg-teal-600 text-white hover: bg-teal-700',';,
? 'bg-teal-600 text-white hover: bg-teal-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom edge solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our Edge Computing Team
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Need a custom edge solution?</p>",
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Contact our Edge Computing Team
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
  Join leading companies already using our edge computing AI solutions.
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
  Schedule Demo
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
  Ready to Deploy AI at the Edge?
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
  Transform your applications with real-time edge AI processing and achieve unprecedented performance.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <a href="/contact",
  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Phone className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">",
  Schedule Demo
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