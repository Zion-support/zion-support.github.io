import React from 'react';
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
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Lightbulb,
  Rocket,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const Mission: React.FC = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to solve complex challenges.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships and solutions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Mission & Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are driven by a powerful mission to democratize access to cutting-edge technology, 
            enabling businesses of all sizes to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-16 w-16 text-blue-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, quantum computing, and autonomous systems for unprecedented 
                growth and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every organization deserves access to the tools and expertise needed to thrive 
                in the digital age, regardless of their current technological maturity or budget constraints.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">What This Means:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Making advanced technology accessible to all</li>
                  <li>• Breaking down barriers to digital transformation</li>
                  <li>• Empowering businesses to compete globally</li>
                  <li>• Creating sustainable technological solutions</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
                  <p className="text-gray-300 italic">
                    "To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                    to leverage the power of AI, quantum computing, and autonomous systems for unprecedented 
                    growth and innovation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 rounded-2xl border border-white/10">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Vision Statement</h3>
                    <p className="text-gray-300 italic">
                      "To be the global leader in autonomous technology solutions, creating a future where 
                      businesses operate with unprecedented efficiency, intelligence, and adaptability."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Eye className="h-16 w-16 text-cyan-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To be the global leader in autonomous technology solutions, creating a future where businesses 
                operate with unprecedented efficiency, intelligence, and adaptability.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We envision a world where technology seamlessly integrates with human creativity, enabling 
                new possibilities and solving complex challenges that were once thought impossible.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Our Future Vision:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Fully autonomous business operations</li>
                  <li>• AI-powered decision making</li>
                  <li>• Quantum computing for everyone</li>
                  <li>• Sustainable technology solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental principles that guide every decision we make and every action we take
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Strategic Goals</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our roadmap to achieving our mission and realizing our vision
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {strategicGoals.map((goal, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <goal.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                      <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                        Target: {goal.target}
                      </span>
                    </div>
                    <p className="text-gray-300">{goal.description}</p>
                  </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
              </div>
            );
          })}
        </div>
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {metric.number}
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
                </div>
      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to our mission
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <p className="text-sm text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
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
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Us in Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the technological revolution that's transforming businesses and shaping the future. 
            Together, we can create a world where advanced technology is accessible to all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Journey
            </Link>
            <Link
              to="/about"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;