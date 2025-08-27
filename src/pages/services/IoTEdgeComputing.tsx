import React from 'react';
import { SEO } from "../components/SEOHead";
import Link from 'next/link';
import { Check, Wifi, Cpu, Database, Shield, Zap, Globe, Target } from 'lucide-react';
export default function IoTEdgeComputingServices() {
<<<<<<< HEAD
  const iotServices = [
    {
      icon: Wifi,
      title: 'IoT Device Management Platform',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices at scale.',
      price: 'From $4,200/month',
      marketPrice: '$3,500 - $9,000/month',
      features: [
        'Device provisioning and onboarding',
        'Remote monitoring and diagnostics',
        'Firmware over-the-air updates',
        'Device lifecycle management',
        'Real-time status monitoring',
        'Bulk device operations'
      ],
      benefits: [
        'Reduced device downtime by 60%',
        'Lower maintenance costs',
        'Improved device reliability',
        'Scalable device management'
      ]
    },
    {
      icon: Cpu,
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage edge computing nodes for real-time data processing and analytics.',
      price: 'From $5,500/month',
      marketPrice: '$4,500 - $12,000/month',
      features: [
        'Edge node deployment and management',
        'Real-time data processing',
        'Local analytics and ML inference',
        'Edge-to-cloud synchronization',
        'Load balancing and failover',
        'Resource optimization'
      ],
      benefits: [
        'Reduced latency for real-time applications',
        'Lower bandwidth costs',
        'Improved data privacy',
        'Enhanced reliability and performance'
      ]
    },
    {
      icon: Database,
      title: 'IoT Data Analytics & Insights',
      description: 'Advanced analytics platform for IoT data streams with real-time processing and visualization.',
      price: 'From $4,800/month',
      marketPrice: '$4,000 - $10,000/month',
      features: [
        'Real-time data streaming analytics',
        'Predictive maintenance algorithms',
        'Anomaly detection and alerting',
        'Custom dashboard creation',
        'Data visualization and reporting',
        'Machine learning model deployment'
      ],
      benefits: [
        'Proactive maintenance and reduced downtime',
        'Data-driven operational decisions',
        'Improved efficiency and cost savings',
        'Competitive advantage through insights'
      ]
    },
    {
      icon: Shield,
      title: 'IoT Security & Compliance',
      description: 'End-to-end security solutions for IoT ecosystems with threat detection and compliance management.',
      price: 'From $4,500/month',
      marketPrice: '$3,800 - $9,500/month',
      features: [
        'Device authentication and authorization',
        'Encrypted data transmission',
        'Threat detection and response',
        'Compliance monitoring (GDPR, HIPAA)',
        'Security audit and reporting',
        'Vulnerability assessment'
      ],
      benefits: [
        'Enhanced data protection and privacy',
        'Reduced security risks',
        'Regulatory compliance',
        'Customer trust and confidence'
      ]
    },
    {
      icon: Zap,
      title: 'Smart City & Industrial IoT',
      description: 'Comprehensive IoT solutions for smart cities, manufacturing, and industrial automation.',
      price: 'From $6,500/month',
      marketPrice: '$5,500 - $15,000/month',
      features: [
        'Smart city infrastructure monitoring',
        'Industrial automation and control',
        'Environmental monitoring systems',
        'Energy management and optimization',
        'Traffic and transportation solutions',
        'Waste management optimization'
      ],
      benefits: [
        'Improved operational efficiency',
        'Reduced environmental impact',
        'Enhanced public services',
        'Cost savings and sustainability'
      ]
    },
    {
      icon: Globe,
      title: 'IoT Connectivity & Network Management',
      description: 'Manage IoT connectivity across multiple networks and protocols with unified monitoring.',
      price: 'From $3,800/month',
      marketPrice: '$3,200 - $8,500/month',
      features: [
        'Multi-protocol support (LoRaWAN, NB-IoT, 5G)',
        'Network performance monitoring',
        'Connectivity optimization',
        'Global roaming management',
        'Bandwidth allocation and QoS',
        'Network security and encryption'
      ],
      benefits: [
        'Optimized network performance',
        'Reduced connectivity costs',
        'Global IoT deployment capability',
        'Improved reliability and coverage'
      ]
    }
  ];

  const industries = [
    'Smart Cities & Municipalities',
    'Manufacturing & Industry 4.0',
    'Healthcare & Medical Devices',
    'Agriculture & Precision Farming',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Retail & Smart Stores',
    'Building Management & Smart Homes'
  ];

  const technologies = [
    'LoRaWAN & NB-IoT',
    '5G & Edge Computing',
    'MQTT & CoAP Protocols',
    'Kubernetes & Docker',
    'Apache Kafka & Spark',
    'TensorFlow Lite & ONNX',
    'AWS IoT & Azure IoT',
    'Google Cloud IoT & IBM Watson'
  ];

  const benefits = [
    'Real-time data processing and insights',
    'Reduced latency and improved performance',
    'Lower bandwidth and cloud costs',
    'Enhanced security and privacy',
    'Scalable IoT deployments',
    'Predictive maintenance and optimization'
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring of production lines, predictive maintenance, and quality control automation.',
      roi: '25-40% cost reduction',
      implementation: '8-12 weeks'
    },
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, public safety, and utility optimization.',
      roi: '30-50% efficiency improvement',
      implementation: '12-20 weeks'
    },
    {
      title: 'Healthcare IoT',
      description: 'Patient monitoring, medical device management, and healthcare facility optimization.',
      roi: '20-35% operational improvement',
      implementation: '10-16 weeks'
    },
    {
      title: 'Agricultural IoT',
      description: 'Precision farming, crop monitoring, irrigation control, and livestock management.',
      roi: '15-30% yield improvement',
      implementation: '6-10 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="IoT & Edge Computing Services - Zion Tech Group" 
        description="Comprehensive IoT solutions, edge computing infrastructure, and smart device management platforms for connected ecosystems."
        keywords="IoT services, edge computing, smart devices, IoT platform, device management, IoT analytics, smart cities"
        canonical="https://ziontechgroup.com/services/iot-edge-computing"
      />
=======
    const iotServices = [
        {
            icon: Wifi,
            title: 'IoT Device Management Platform',
            description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices at scale.',
            price: 'From $4,200/month',
            marketPrice: '$3,500 - $9,000/month',
            features: [
                'Device provisioning and onboarding',
                'Remote monitoring and diagnostics',
                'Firmware over-the-air updates',
                'Device lifecycle management',
                'Real-time status monitoring',
                'Bulk device operations'
            ],
            benefits: [
                'Reduced device downtime by 60%',
                'Lower maintenance costs',
                'Improved device reliability',
                'Scalable device management'
            ]
        },
        {
            icon: Cpu,
            title: 'Edge Computing Infrastructure',
            description: 'Deploy and manage edge computing nodes for real-time data processing and analytics.',
            price: 'From $5,500/month',
            marketPrice: '$4,500 - $12,000/month',
            features: [
                'Edge node deployment and management',
                'Real-time data processing',
                'Local analytics and ML inference',
                'Edge-to-cloud synchronization',
                'Load balancing and failover',
                'Resource optimization'
            ],
            benefits: [
                'Reduced latency for real-time applications',
                'Lower bandwidth costs',
                'Improved data privacy',
                'Enhanced reliability and performance'
            ]
        },
        {
            icon: Database,
            title: 'IoT Data Analytics & Insights',
            description: 'Advanced analytics platform for IoT data streams with real-time processing and visualization.',
            price: 'From $4,800/month',
            marketPrice: '$4,000 - $10,000/month',
            features: [
                'Real-time data streaming analytics',
                'Predictive maintenance algorithms',
                'Anomaly detection and alerting',
                'Custom dashboard creation',
                'Data visualization and reporting',
                'Machine learning model deployment'
            ],
            benefits: [
                'Proactive maintenance and reduced downtime',
                'Data-driven operational decisions',
                'Improved efficiency and cost savings',
                'Competitive advantage through insights'
            ]
        },
        {
            icon: Shield,
            title: 'IoT Security & Compliance',
            description: 'End-to-end security solutions for IoT ecosystems with threat detection and compliance management.',
            price: 'From $4,500/month',
            marketPrice: '$3,800 - $9,500/month',
            features: [
                'Device authentication and authorization',
                'Encrypted data transmission',
                'Threat detection and response',
                'Compliance monitoring (GDPR, HIPAA)',
                'Security audit and reporting',
                'Vulnerability assessment'
            ],
            benefits: [
                'Enhanced data protection and privacy',
                'Reduced security risks',
                'Regulatory compliance',
                'Customer trust and confidence'
            ]
        },
        {
            icon: Zap,
            title: 'Smart City & Industrial IoT',
            description: 'Comprehensive IoT solutions for smart cities, manufacturing, and industrial automation.',
            price: 'From $6,500/month',
            marketPrice: '$5,500 - $15,000/month',
            features: [
                'Smart city infrastructure monitoring',
                'Industrial automation and control',
                'Environmental monitoring systems',
                'Energy management and optimization',
                'Traffic and transportation solutions',
                'Waste management optimization'
            ],
            benefits: [
                'Improved operational efficiency',
                'Reduced environmental impact',
                'Enhanced public services',
                'Cost savings and sustainability'
            ]
        },
        {
            icon: Globe,
            title: 'IoT Connectivity & Network Management',
            description: 'Manage IoT connectivity across multiple networks and protocols with unified monitoring.',
            price: 'From $3,800/month',
            marketPrice: '$3,200 - $8,500/month',
            features: [
                'Multi-protocol support (LoRaWAN, NB-IoT, 5G)',
                'Network performance monitoring',
                'Connectivity optimization',
                'Global roaming management',
                'Bandwidth allocation and QoS',
                'Network security and encryption'
            ],
            benefits: [
                'Optimized network performance',
                'Reduced connectivity costs',
                'Global IoT deployment capability',
                'Improved reliability and coverage'
            ]
        }
    ];
    const industries = [
        'Smart Cities & Municipalities',
        'Manufacturing & Industry 4.0',
        'Healthcare & Medical Devices',
        'Agriculture & Precision Farming',
        'Energy & Utilities',
        'Transportation & Logistics',
        'Retail & Smart Stores',
        'Building Management & Smart Homes'
    ];
    const technologies = [
        'LoRaWAN & NB-IoT',
        '5G & Edge Computing',
        'MQTT & CoAP Protocols',
        'Kubernetes & Docker',
        'Apache Kafka & Spark',
        'TensorFlow Lite & ONNX',
        'AWS IoT & Azure IoT',
        'Google Cloud IoT & IBM Watson'
    ];
    const benefits = [
        'Real-time data processing and insights',
        'Reduced latency and improved performance',
        'Lower bandwidth and cloud costs',
        'Enhanced security and privacy',
        'Scalable IoT deployments',
        'Predictive maintenance and optimization'
    ];
    const useCases = [
        {
            title: 'Smart Manufacturing',
            description: 'Real-time monitoring of production lines, predictive maintenance, and quality control automation.',
            roi: '25-40% cost reduction',
            implementation: '8-12 weeks'
        },
        {
            title: 'Smart Cities',
            description: 'Traffic management, environmental monitoring, public safety, and utility optimization.',
            roi: '30-50% efficiency improvement',
            implementation: '12-20 weeks'
        },
        {
            title: 'Healthcare IoT',
            description: 'Patient monitoring, medical device management, and healthcare facility optimization.',
            roi: '20-35% operational improvement',
            implementation: '10-16 weeks'
        },
        {
            title: 'Agricultural IoT',
            description: 'Precision farming, crop monitoring, irrigation control, and livestock management.',
            roi: '15-30% yield improvement',
            implementation: '6-10 weeks'
        }
    ];
    return (<div className="min-h-screen bg-background">
      <SEO title="IoT & Edge Computing Services - Zion Tech Group" description="Comprehensive IoT solutions, edge computing infrastructure, and smart device management platforms for connected ecosystems." keywords="IoT services, edge computing, smart devices, IoT platform, device management, IoT analytics, smart cities" canonical="https://ziontechgroup.com/services/iot-edge-computing"/>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            IoT & Edge Computing Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge IoT solutions and edge computing infrastructure. 
            Connect, monitor, and optimize your operations with intelligent device management.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IoT & Edge Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IoT solutions that help businesses build, deploy, and manage connected ecosystems 
              with real-time insights and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (<div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-600"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-green-600">{service.price}</p>
                  <p className="text-sm text-gray-500">Market: {service.marketPrice}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                      {feature}
                    </li>))}
                </ul>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (<div key={benefitIndex} className="text-sm text-gray-600">
                      <span className="font-medium">✓</span> {benefit}
                    </div>))}
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World IoT Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven IoT solutions that deliver measurable business value across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (<div key={useCase.title} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Expected ROI</div>
                    <div className="text-lg font-semibold text-green-600">{useCase.roi}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Implementation</div>
                    <div className="text-lg font-semibold text-blue-600">{useCase.implementation}</div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IoT Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our IoT expertise combined with cutting-edge edge computing technologies enables us to deliver 
                solutions that provide real business value and competitive advantage.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (<div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"/>
                    <span className="text-gray-700">{benefit}</span>
                  </div>))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free IoT Assessment</h3>
              <p className="text-gray-600 mb-6">
                Discover how IoT can transform your business with our comprehensive 
                IoT readiness assessment and strategy session.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment Value:</span>
                  <span className="font-semibold text-gray-900">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Cost:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
              <Link to="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block w-full text-center">
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our IoT solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (<div key={industry} className="bg-white rounded-xl p-6 text-center hover:bg-green-50 transition-colors border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600"/>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IoT Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge IoT and edge computing technologies to build robust, scalable, 
              and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (<div key={tech} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IoT Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful IoT solutions that drive business value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Understand business needs and IoT opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Design IoT architecture and edge strategy
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600 text-sm">
                  Build IoT platform and edge infrastructure
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">
                  Validate IoT solution and edge performance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Launch IoT solution and edge nodes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Monitor, maintain, and scale IoT solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Your World?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our IoT experts help you build connected ecosystems that drive efficiency, 
            innovation, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your IoT Journey
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>);
}
