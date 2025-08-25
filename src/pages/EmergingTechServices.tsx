import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Cpu, Shield, Zap, Cloud, Rocket, Target, Users, Award, Globe, Database, Atom } from 'lucide-react';

const EmergingTechServices = () => {
  const emergingTechs = [
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities.',
      applications: [
        'Cryptography and security',
        'Drug discovery and materials science',
        'Financial modeling and optimization',
        'Machine learning acceleration'
      ],
      icon: Atom,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, deep learning, and neural networks.',
      applications: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Autonomous systems'
      ],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized technologies for secure, transparent, and trustless systems.',
      applications: [
        'Smart contracts and DeFi',
        'Supply chain transparency',
        'Digital identity management',
        'NFT and metaverse solutions'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Internet of Things (IoT)',
      description: 'Connected devices and sensors for smart environments and data collection.',
      applications: [
        'Smart cities and infrastructure',
        'Industrial automation',
        'Healthcare monitoring',
        'Environmental sensing'
      ],
      icon: Cpu,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innovation Leadership',
      description: 'Establish your organization as a technology leader and innovator.',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Future-Proofing',
      description: 'Prepare your business for the technological challenges of tomorrow.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Operational Efficiency',
      description: 'Improve processes and productivity with advanced technology solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      technologies: ['AI diagnostics', 'Quantum drug discovery', 'IoT patient monitoring', 'Blockchain health records'],
      icon: Shield
    },
    {
      name: 'Finance',
      technologies: ['Quantum trading algorithms', 'AI risk assessment', 'Blockchain payments', 'IoT fraud detection'],
      icon: Target
    },
    {
      name: 'Manufacturing',
      technologies: ['IoT smart factories', 'AI quality control', 'Quantum optimization', 'Blockchain supply chain'],
      icon: Cpu
    },
    {
      name: 'Energy',
      technologies: ['Smart grid IoT', 'AI energy optimization', 'Quantum materials', 'Blockchain energy trading'],
      icon: Zap
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Technology Assessment',
      description: 'Evaluate emerging technologies and their relevance to your business.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a roadmap for emerging technology adoption and integration.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Pilot Implementation',
      description: 'Test and validate emerging technology solutions in controlled environments.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Scale & Optimize',
      description: 'Expand successful pilots and continuously optimize performance.',
      icon: Award
    }
  ];
=======
import { Link } from 'react-router-dom';
import { Zap, Brain, Cpu, Shield, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket, Database, Server } from 'lucide-react';
import { SEO } from '@/components/SEO';

const emergingTechServices = [
  {
    title: "Quantum Computing Solutions",
    description: "Explore the future of computing with quantum algorithms and quantum-safe cryptography.",
    icon: Cpu,
    features: ["Quantum Algorithm Development", "Quantum-Safe Cryptography", "Quantum Simulation", "Performance Optimization"],
    price: "From $25,000/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Edge AI & IoT",
    description: "Deploy intelligent AI systems at the edge for real-time processing and decision making.",
    icon: Brain,
    features: ["Edge AI Deployment", "IoT Integration", "Real-time Processing", "Local Intelligence"],
    price: "From $18,000/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Blockchain & Web3",
    description: "Build decentralized applications and blockchain solutions for the next generation of the web.",
    icon: Shield,
    features: ["Smart Contract Development", "DeFi Solutions", "NFT Platforms", "Blockchain Infrastructure"],
    price: "From $22,000/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Augmented & Virtual Reality",
    description: "Create immersive experiences with AR/VR solutions for enterprise and consumer applications.",
    icon: Globe,
    features: ["AR/VR Development", "3D Modeling", "Interactive Experiences", "Enterprise Solutions"],
    price: "From $20,000/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Future-Proof Technology",
    description: "Stay ahead with cutting-edge technologies that define the future",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Competitive Advantage",
    description: "Gain first-mover advantage in emerging technology markets",
    icon: Brain,
    color: "text-zion-purple"
  },
  {
    title: "Innovation Leadership",
    description: "Position your company as a technology innovation leader",
    icon: Rocket,
    color: "text-green-400"
  },
  {
    title: "Scalable Solutions",
    description: "Build solutions that scale with emerging technology adoption",
    icon: Server,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's quantum computing solutions helped us solve complex optimization problems that were previously impossible to tackle.",
    name: "Dr. Sarah Johnson",
    role: "Research Director, Quantum Labs",
    rating: 5
  },
  {
    content: "Their edge AI implementation reduced our response time by 90% and enabled real-time decision making in critical applications.",
    name: "Michael Chen",
    role: "CTO, Smart Manufacturing Inc",
    rating: 5
  },
  {
    content: "The blockchain platform they built for us has revolutionized our supply chain transparency and trust mechanisms.",
    name: "Jennifer Kim",
    role: "VP of Technology, Global Logistics Corp",
    rating: 5
  }
];
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0

export default function EmergingTechServices() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Emerging{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Tech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Explore the future of technology with our cutting-edge emerging tech solutions. 
              From quantum computing to AI, we bring tomorrow's technology to today's business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Explore Technologies
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Emerging Technology Services - Zion Tech Group" 
        description="Explore the future with our emerging technology services including quantum computing, edge AI, blockchain, and AR/VR solutions."
        keywords="emerging technology, quantum computing, edge AI, blockchain, Web3, AR/VR, future tech"
        canonical="https://ziontechgroup.com/emerging-tech"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Emerging
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore the future with our cutting-edge emerging technology services. 
              From quantum computing to edge AI, we help you stay ahead of the technology curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Emerging Technology Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Cutting-edge technology solutions that define the future of business and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emergingTechServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Our Emerging Technology Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge research with practical implementation to deliver future-ready solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what technology leaders have to say about our emerging tech services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join pioneering companies that are already leveraging emerging technologies to transform their industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Journey
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Emerging Tech
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Stay ahead of the curve with cutting-edge technology solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Emerging{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Cutting-edge technologies that are shaping the future of business and society.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTechs.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                  <p className="text-zion-slate-light mb-6">{tech.description}</p>
                  <h4 className="text-lg font-semibold mb-4 text-zion-cyan">Applications:</h4>
                  <ul className="space-y-3">
                    {tech.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              How emerging technologies are transforming various industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.technologies.map((technology, techIndex) => (
                      <li key={techIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {technology}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A systematic approach to emerging technology adoption and implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you navigate the world of emerging technologies and 
              discover new opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Exploring
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
=======
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
      </section>
    </div>
  );
}