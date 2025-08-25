import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  TestTube, 
  BookOpen, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart,
  Rocket,
  Layers,
  Workflow,
  Monitor,
  Settings,
  Cloud,
  Server,
  Microscope,
  Atom,
  Dna
} from 'lucide-react';

const AIAutonomousResearch = () => {
  const researchCapabilities = [
    {
      icon: Search,
      title: "Intelligent Literature Review",
      description: "AI-powered analysis of scientific papers, patents, and research documents across multiple databases"
    },
    {
      icon: TestTube,
      title: "Hypothesis Generation",
      description: "Machine learning algorithms that generate novel research hypotheses based on existing data and trends"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Advanced statistical analysis and interactive visualizations for complex research data"
    },
    {
      icon: Network,
      title: "Cross-Domain Research",
      description: "AI that identifies connections between different research fields and disciplines"
    },
    {
      icon: TrendingUp,
      title: "Trend Prediction",
      description: "Predictive analytics to forecast research trends and emerging technologies"
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "AI-facilitated collaboration between researchers and institutions worldwide"
    }
  ];

  const researchAreas = [
    {
      title: "Biomedical Research",
      description: "Drug discovery, genomics, and medical technology innovation",
      icon: Dna,
      applications: ["Drug discovery", "Genetic research", "Clinical trials", "Medical imaging"]
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms, quantum materials, and quantum information science",
      icon: Atom,
      applications: ["Quantum algorithms", "Quantum materials", "Quantum cryptography", "Quantum simulation"]
    },
    {
      title: "Climate Science",
      description: "Climate modeling, renewable energy, and environmental sustainability",
      icon: Globe,
      applications: ["Climate modeling", "Renewable energy", "Carbon capture", "Environmental monitoring"]
    },
    {
      title: "Artificial Intelligence",
      description: "Machine learning, neural networks, and AI ethics research",
      icon: Brain,
      applications: ["Neural networks", "AI ethics", "Robotics", "Natural language processing"]
    }
  ];

  const benefits = [
    "Accelerate research timelines by 10x",
    "Reduce research costs by 60%",
    "Discover hidden research connections",
    "24/7 autonomous research operation",
    "Real-time collaboration capabilities",
    "Predictive research insights",
    "Automated data validation",
    "Cross-disciplinary innovation"
  ];

  const features = [
    {
      title: "Multi-Database Access",
      description: "Access to PubMed, arXiv, IEEE, ACM, and other major research databases"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP for understanding research papers and generating insights"
    },
    {
      title: "Machine Learning Models",
      description: "Custom ML models trained on domain-specific research data"
    },
    {
      title: "Real-Time Updates",
      description: "Continuous monitoring of new research publications and breakthroughs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Microscope className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Autonomous Research
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your research capabilities with AI-powered autonomous research systems that work 24/7 
              to discover breakthroughs and accelerate innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Research Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Research Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Research system combines cutting-edge artificial intelligence with deep scientific 
              knowledge to accelerate research across all domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Domains
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research system covers a wide range of scientific disciplines, from biomedical research 
              to quantum computing and climate science
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {area.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {application}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented research efficiency and discovery with our AI Autonomous Research system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Research Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and capabilities designed to accelerate your research and discovery process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of scientific research with our AI Autonomous Research system. Start your research 
            project today and discover breakthroughs faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Research Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Research Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousResearch;