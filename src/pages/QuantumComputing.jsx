import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Monitor,
  Code,
  FileText,
  Truck,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server
} from 'lucide-react';

const quantumSolutions = [
  {
    id: 1,
    title: "Quantum Algorithm Development",
    description: "Custom quantum algorithms for specific computational problems and optimization challenges.",
    icon: Brain,
    features: [
      "Custom algorithm design",
      "Quantum circuit optimization",
      "Performance benchmarking",
      "Algorithm validation"
    ],
    price: "From $150,000",
    timeline: "24-48 weeks",
    category: "Algorithm Development",
    technologies: ["Qiskit", "Cirq", "PennyLane", "Q#"]
  },
  {
    id: 2,
    title: "Quantum Cryptography",
    description: "Quantum-safe encryption solutions using quantum key distribution and post-quantum cryptography.",
    icon: Shield,
    features: [
      "Quantum key distribution",
      "Post-quantum algorithms",
      "Security auditing",
      "Implementation support"
    ],
    price: "From $200,000",
    timeline: "32-56 weeks",
    category: "Cryptography",
    technologies: ["BB84", "E91", "Lattice-based", "Hash-based"]
  },
  {
    id: 3,
    title: "Quantum Machine Learning",
    description: "Quantum-enhanced machine learning algorithms for pattern recognition and optimization.",
    icon: Brain,
    features: [
      "Quantum neural networks",
      "Quantum feature maps",
      "Hybrid classical-quantum",
      "Model training"
    ],
    price: "From $180,000",
    timeline: "28-44 weeks",
    category: "Machine Learning",
    technologies: ["TensorFlow Quantum", "PennyLane", "Qiskit ML", "Variational circuits"]
  },
  {
    id: 4,
    title: "Quantum Simulation",
    description: "Quantum simulation platforms for modeling complex quantum systems and materials.",
    icon: Atom,
    features: [
      "Molecular modeling",
      "Material properties",
      "Chemical reactions",
      "Physical systems"
    ],
    price: "From $120,000",
    timeline: "20-36 weeks",
    category: "Simulation",
    technologies: ["VQE", "QAOA", "QPE", "Quantum chemistry"]
  },
  {
    id: 5,
    title: "Quantum Optimization",
    description: "Quantum optimization solutions for complex combinatorial and constraint satisfaction problems.",
    icon: Target,
    features: [
      "Combinatorial optimization",
      "Constraint satisfaction",
      "Resource allocation",
      "Scheduling problems"
    ],
    price: "From $100,000",
    timeline: "16-32 weeks",
    category: "Optimization",
    technologies: ["QAOA", "VQE", "Quantum annealing", "Hybrid algorithms"]
  },
  {
    id: 6,
    title: "Quantum Computing Infrastructure",
    description: "Quantum computing infrastructure and cloud access solutions for research and development.",
    icon: Server,
    features: [
      "Cloud quantum access",
      "Quantum hardware integration",
      "Development environment",
      "Performance monitoring"
    ],
    price: "From $80,000",
    timeline: "12-24 weeks",
    category: "Infrastructure",
    technologies: ["IBM Quantum", "Google Quantum", "Amazon Braket", "Azure Quantum"]
  }
];

const quantumTechnologies = [
  {
    name: "Superconducting Qubits",
    description: "Josephson junction-based qubits for scalable quantum computing",
    icon: Atom,
    useCase: "Gate-based Computing",
    reliability: "High"
  },
  {
    name: "Trapped Ions",
    description: "Ion-based qubits with long coherence times and high fidelity",
    icon: Atom,
    useCase: "Precision Computing",
    reliability: "Critical"
  },
  {
    name: "Topological Qubits",
    description: "Fault-tolerant qubits based on topological properties",
    icon: Network,
    useCase: "Error Correction",
    reliability: "Experimental"
  },
  {
    name: "Photonic Qubits",
    description: "Light-based qubits for quantum communication and networking",
    icon: Lightbulb,
    useCase: "Quantum Networks",
    reliability: "Medium"
  }
];

const successStories = [
  {
    id: 1,
    company: "Pharmaceutical Research Lab",
    industry: "Healthcare",
    challenge: "Needed to simulate complex molecular interactions for drug discovery",
    solution: "Built quantum simulation platform using VQE algorithms",
    results: "10x faster molecular modeling, discovered 3 new drug candidates, 40% cost reduction",
    logo: "PRL"
  },
  {
    id: 2,
    company: "Financial Services Corp",
    industry: "Finance",
    challenge: "Required quantum-safe encryption for secure communications",
    solution: "Implemented quantum key distribution and post-quantum cryptography",
    results: "100% quantum-safe communications, enhanced security compliance, future-proof encryption",
    logo: "FSC"
  },
  {
    id: 3,
    company: "Logistics Optimization",
    industry: "Transportation",
    challenge: "Complex route optimization for 1000+ delivery vehicles",
    solution: "Built quantum optimization system using QAOA algorithms",
    results: "25% reduction in delivery costs, 30% improvement in route efficiency, real-time optimization",
    logo: "LO"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Quantum Assessment",
    description: "Evaluate quantum computing requirements and feasibility",
    icon: FileText,
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "Algorithm Design",
    description: "Design quantum algorithms and quantum circuits",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Implement quantum solutions and integrate with classical systems",
    icon: Wrench,
    duration: "16-56 weeks"
  },
  {
    step: 4,
    title: "Testing & Validation",
    description: "Test quantum solutions and validate performance",
    icon: CheckCircle,
    duration: "4-8 weeks"
  }
];

const quantumAdvantages = [
  {
    title: "Exponential Speedup",
    description: "Certain problems can be solved exponentially faster than classical computers",
    icon: Zap,
    examples: ["Factoring large numbers", "Database search", "Quantum simulation"]
  },
  {
    title: "Quantum Entanglement",
    description: "Quantum correlations enable new computational paradigms",
    icon: Network,
    examples: ["Quantum teleportation", "Superdense coding", "Quantum key distribution"]
  },
  {
    title: "Quantum Parallelism",
    description: "Quantum superposition allows parallel computation of multiple states",
    icon: Brain,
    examples: ["Quantum Fourier transform", "Grover's algorithm", "Quantum walks"]
  },
  {
    title: "Quantum Tunneling",
    description: "Quantum effects enable optimization through energy landscape exploration",
    icon: Rocket,
    examples: ["Quantum annealing", "Adiabatic quantum computing", "Quantum optimization"]
  }
];

export default function QuantumComputing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Algorithm Development', 'Cryptography', 'Machine Learning', 'Simulation', 'Optimization', 'Infrastructure'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? quantumSolutions 
    : quantumSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Atom className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-gradient block">Computing</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Harness the power of quantum mechanics to solve previously intractable problems. 
              From cryptography to optimization, quantum computing opens new frontiers in computational science.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Atom className="w-4 h-4" />
                <span>Quantum Algorithms</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Shield className="w-4 h-4" />
                <span>Quantum Security</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Zap className="w-4 h-4" />
                <span>Exponential Speedup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Advantages</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the fundamental advantages that make quantum computing revolutionary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{advantage.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed text-center">{advantage.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-zion-cyan font-semibold mb-3">Examples:</h4>
                  {advantage.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Technologies We Support</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive support for leading quantum computing platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumTechnologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{technology.description}</p>
                <p className="text-zion-cyan font-semibold mb-2">{technology.useCase}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  technology.reliability === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Quantum Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful quantum computing implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Computing Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for the quantum era
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their operations with quantum computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how quantum computing can transform your business, 
              solve complex problems, and create new opportunities in the quantum era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Quantum Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}