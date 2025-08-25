import React from 'react';
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
    }
  ];

  return (
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
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              </div>
            ))}
          </div>
        </div>
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
                </div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}