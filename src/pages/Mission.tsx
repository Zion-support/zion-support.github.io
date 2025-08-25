import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Target, 
  Eye, 
  Brain, 
  Rocket, 
  Shield, 
  Users, 
  Globe, 
  Heart,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Lightbulb,
  Cpu
} from 'lucide-react';

export default function Mission() {
<<<<<<< HEAD
  const missionPillars = [
    {
      icon: Brain,
      title: 'AI Democratization',
      description: 'Making cutting-edge AI technology accessible to businesses of all sizes, not just Fortune 500 companies.',
      color: 'from-purple-500 to-pink-500',
      goals: [
        'Develop affordable AI solutions for SMBs',
        'Create intuitive AI interfaces for non-technical users',
        'Provide AI education and training programs'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity for All',
      description: 'Ensuring every organization has access to enterprise-grade security and compliance solutions.',
      color: 'from-red-500 to-pink-500',
      goals: [
        'Automate compliance processes for small businesses',
        'Develop affordable security monitoring tools',
        'Provide cybersecurity awareness training'
      ]
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Breaking down geographical barriers to provide technology solutions worldwide.',
      color: 'from-blue-500 to-cyan-500',
      goals: [
        'Establish local partnerships in emerging markets',
        'Develop region-specific solutions',
        'Provide multilingual support and documentation'
      ]
    },
    {
      icon: Rocket,
      title: 'Innovation Leadership',
      description: 'Pioneering the next generation of technology solutions and business processes.',
      color: 'from-green-500 to-emerald-500',
      goals: [
        'Research and develop quantum computing applications',
        'Create autonomous business systems',
        'Advance AI consciousness and evolution'
      ]
    }
  ];
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Mission() {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Mission - Zion Tech Group" 
<<<<<<< HEAD
=======
<<<<<<< HEAD
        description="Discover Zion Tech Group's mission to revolutionize technology and create positive global impact through innovation."
        tags={["mission", "vision", "values", "innovation", "technology", "global impact"]}
        url="https://ziontechgroup.com/mission"
      />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698

  const strategicGoals = [
    {
      year: '2025',
      title: 'AI Consciousness Evolution',
      description: 'Launch advanced AI systems with enhanced consciousness and autonomous decision-making capabilities.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2026',
      title: 'Quantum Computing Platform',
      description: 'Deploy enterprise-ready quantum computing solutions for complex problem-solving.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2027',
      title: 'Global AI Network',
      description: 'Establish a worldwide network of AI-powered business solutions and services.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2028',
      title: 'Autonomous Business Revolution',
      description: 'Enable businesses to operate autonomously with minimal human intervention.',
      icon: Rocket,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      year: '2029',
      title: 'AI-Human Symbiosis',
      description: 'Create seamless integration between AI systems and human intelligence.',
      icon: Users,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand our clients\' challenges and design solutions with their success in mind.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and technology development.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology and business.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We approach problems with creative thinking and innovative solutions.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const impactMetrics = [
    {
      number: '10,000+',
      label: 'Businesses Empowered',
      description: 'Organizations transformed through our technology solutions'
    },
    {
      number: '50+',
      label: 'Countries Reached',
      description: 'Global presence and impact across diverse markets'
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations and needs'
    },
    {
      number: '100%',
      label: 'Carbon Neutral',
      description: 'Committed to sustainable technology development'
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
import { Link } from 'react-router-dom';
import { 
  Target, 
  Heart, 
  Users, 
  Globe, 
  Rocket, 
  Shield, 
  Award, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Building,
  Star,
  TrendingUp,
  Eye
} from 'lucide-react';

export default function Mission() {
  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology",
      icon: Rocket,
      details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches",
        "Future-focused solutions"
      ]
    },
    {
      title: "Excellence",
      description: "We deliver the highest quality solutions and exceptional service",
      icon: Award,
      details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Attention to detail",
        "Customer satisfaction focus"
      ]
    },
    {
      title: "Collaboration",
      description: "We work together to achieve extraordinary results for our clients",
      icon: Users,
      details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Client partnership approach",
        "Knowledge sharing culture"
      ]
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions",
      icon: Shield,
      details: [
        "Transparent communication",
        "Ethical AI development",
        "Data privacy protection",
        "Trust-based relationships"
      ]
    }
  ];

  const missionPillars = [
    {
      title: "AI-Powered Transformation",
      description: "Leveraging artificial intelligence to revolutionize business operations and decision-making",
      icon: Brain,
      goals: [
        "Democratize AI access for businesses of all sizes",
        "Develop autonomous systems that enhance human capabilities",
        "Create intelligent solutions that learn and adapt",
        "Bridge the gap between AI research and practical applications"
      ],
      metrics: ["500+ AI implementations", "40% average efficiency improvement", "99.9% system reliability"]
    },
    {
      title: "Quantum Computing Innovation",
      description: "Pioneering quantum computing solutions for complex computational challenges",
      icon: Cpu,
      goals: [
        "Advance quantum computing research and development",
        "Create quantum-safe security solutions",
        "Develop quantum algorithms for real-world problems",
        "Establish quantum computing as a mainstream technology"
      ],
      metrics: ["3 quantum research partnerships", "2 quantum patents filed", "10x computational speed improvement"]
    },
    {
      title: "Cybersecurity Excellence",
      description: "Protecting businesses from evolving threats with advanced security solutions",
      icon: Shield,
      goals: [
        "Provide comprehensive security protection",
        "Automate compliance and risk management",
        "Develop proactive threat detection",
        "Ensure business continuity and resilience"
      ],
      metrics: ["Zero security breaches", "100% compliance success", "24/7 threat monitoring"]
    },
    {
      title: "Global Impact",
      description: "Making technology accessible and beneficial to businesses worldwide",
      icon: Globe,
      goals: [
        "Expand our global presence and reach",
        "Localize solutions for regional markets",
        "Support sustainable technology development",
        "Contribute to digital inclusion initiatives"
      ],
      metrics: ["25+ countries served", "10+ regional offices", "Multi-language support"]
    }
  ];

  const impactAreas = [
    {
      title: "Healthcare",
      description: "Improving patient care and medical research through AI-powered solutions",
      icon: Heart,
      impact: [
        "30% improvement in diagnostic accuracy",
        "50% reduction in administrative burden",
        "Enhanced patient engagement and outcomes",
        "Accelerated drug discovery processes"
      ]
    },
    {
      title: "Manufacturing",
      description: "Revolutionizing production processes with intelligent automation and predictive analytics",
      icon: Building,
      impact: [
        "40% increase in production efficiency",
        "60% reduction in downtime",
        "Real-time quality monitoring and control",
        "Sustainable manufacturing practices"
      ]
    },
    {
      title: "Financial Services",
      description: "Enhancing security, compliance, and customer experience in financial operations",
      icon: TrendingUp,
      impact: [
        "99.9% fraud detection accuracy",
        "Real-time risk assessment and management",
        "Automated compliance monitoring",
        "Enhanced customer personalization"
      ]
    },
    {
      title: "Education",
      description: "Transforming learning experiences through personalized and adaptive technology",
      icon: Star,
      impact: [
        "Personalized learning pathways",
        "Adaptive content delivery",
        "Enhanced student engagement",
        "Improved learning outcomes"
      ]
    }
  ];

  const futureVision = [
    {
      year: "2025",
      title: "AI Democratization",
      description: "Making AI accessible to businesses of all sizes through simplified platforms and tools",
      milestones: [
        "Launch of AI marketplace platform",
        "1000+ AI implementations",
        "Partnership with 50+ technology providers"
      ]
    },
    {
      year: "2027",
      title: "Quantum Revolution",
      description: "Commercial quantum computing solutions for enterprise applications",
      milestones: [
        "First commercial quantum platform",
        "Quantum-safe security standards",
        "Industry-specific quantum solutions"
      ]
    },
    {
      year: "2030",
      title: "Autonomous Future",
      description: "Fully autonomous business operations powered by AI and quantum computing",
      milestones: [
        "Autonomous business platform launch",
        "Zero-touch business operations",
        "AI-human collaboration ecosystem"
      ]
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    }
  ];

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Mission & Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are on a mission to democratize technology and empower businesses worldwide 
            through innovative AI solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business, regardless of size or location, deserves 
                access to the same powerful technology tools that drive innovation and 
                growth in the world's most successful companies.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Empowering businesses worldwide</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-32 h-32 text-purple-400" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To be the global leader in autonomous business systems, where AI and human 
                intelligence work together seamlessly to create unprecedented business value 
                and drive innovation across all industries.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We envision a future where technology serves as an extension of human 
                capability, enabling businesses to operate with unprecedented efficiency, 
                intelligence, and creativity.
              </p>
              <div className="flex items-center space-x-4">
                <Eye className="w-8 h-8 text-purple-400" />
                <span className="text-purple-400 font-medium">Shaping the future of business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Mission Pillars
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four core pillars that guide our mission and drive our impact across the technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{pillar.description}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Goals:</h4>
                  <ul className="space-y-2">
                    {pillar.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Strategic Roadmap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our strategic goals and milestones for the next five years, driving innovation 
              and transformation across industries.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {strategicGoals.map((goal, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${goal.color} flex items-center justify-center`}>
                          <goal.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-cyan-400">{goal.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{goal.title}</h3>
                      <p className="text-gray-400">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              To democratize cutting-edge technology and empower businesses worldwide to achieve 
              extraordinary results through AI, quantum computing, and innovative digital solutions. 
              We believe that every organization, regardless of size, should have access to the 
              transformative power of advanced technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                <span>Clear Vision</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>Passionate Purpose</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Impact</span>
              </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental principles that guide our decisions, actions, and relationships 
              with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{value.description}</p>
                
                <ul className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-xs flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              </div>
            );
          })}
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to our mission and vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {metric.number}
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      </div>

      {/* Mission Pillars */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mission Pillars</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{pillar.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Goals</h4>
                    <ul className="space-y-2">
                      {pillar.goals.map((goal, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Success Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {pillar.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">{area.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{area.description}</p>
                
                <ul className="space-y-2">
                  {area.impact.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-xs flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Future Vision */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Future Vision</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {futureVision.map((vision, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{vision.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{vision.title}</h3>
                  <p className="text-gray-300 text-sm">{vision.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Milestones</h4>
                  <ul className="space-y-2">
                    {vision.milestones.map((milestone, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                </div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Whether you're a client, partner, or team member, help us democratize 
            technology and shape the future of business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        description="Discover Zion Tech Group's mission to revolutionize technology through AI, quantum computing, and innovative solutions"
        keywords="mission, vision, technology, AI, quantum computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/mission"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To pioneer the future of technology by creating revolutionary AI systems, 
            quantum computing infrastructure, and autonomous solutions that transform 
            businesses and industries worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 mb-16 border border-cyan-500/20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Mission Statement</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "We are committed to pushing the boundaries of what's possible in technology. 
              Through cutting-edge AI, quantum computing, and autonomous systems, we empower 
              organizations to achieve unprecedented levels of efficiency, innovation, and growth. 
              Our mission is to democratize advanced technology and make it accessible to businesses 
              of all sizes, driving the next industrial revolution."
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in next-generation technology solutions, creating a world 
              where AI and quantum computing seamlessly integrate into every aspect of business 
              and society, driving unprecedented progress and innovation.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Innovation at the forefront</li>
              <li>• Excellence in execution</li>
              <li>• Customer-centric approach</li>
              <li>• Ethical AI development</li>
              <li>• Global collaboration</li>
            </ul>
          </div>
        </div>

        {/* Key Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Advancement</h3>
              <p className="text-gray-300">
                Develop cutting-edge AI systems that operate autonomously and deliver 
                unprecedented business value across all industries.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Innovation</h3>
              <p className="text-gray-300">
                Pioneer quantum computing solutions that solve previously impossible 
                problems and unlock new possibilities in computing.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c-2.485 0-4.5 2.015-4.5 4.5S9.515 9 12 9s4.5 2.015 4.5 4.5S14.485 18 12 18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Transform businesses worldwide by making advanced technology accessible 
                and driving sustainable growth across all sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the technological revolution. Discover how our innovative solutions 
            can transform your business and position you at the forefront of advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a client looking to transform your business, a partner wanting to 
            collaborate, or a team member passionate about making a difference, we invite you 
            to be part of our journey to democratize technology and create positive global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    </div>
  );
}