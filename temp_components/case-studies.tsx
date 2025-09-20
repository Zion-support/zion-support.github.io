import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  DollarSign, ChartBar, Target as TargetIcon, Lightbulb
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      client: "Fortune 500 Financial Services",
      industry: "Financial Services",
      challenge: "The client struggled with siloed data systems, manual reporting processes, and limited real-time insights, resulting in delayed decision-making and missed opportunities.",
      solution: "Implemented our AI-powered Business Intelligence platform that unified data sources, automated reporting, and provided real-time predictive analytics.",
      results: [
        "300% increase in data processing speed",
        "40% reduction in decision-making time",
        "99.9% accuracy in predictive analytics",
        "$2.5M annual cost savings",
        "Real-time dashboard access for 500+ users"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "React", "D3.js"],
      duration: "6 months",
      team: "8 engineers",
      image: "/api/placeholder/600/400",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Quantum Cybersecurity Implementation",
      client: "Government Defense Agency",
      industry: "Government & Defense",
      challenge: "Critical infrastructure faced increasing cyber threats from quantum computing attacks, requiring future-proof security solutions that could withstand next-generation attacks.",
      solution: "Deployed our Quantum Cybersecurity Framework with quantum-resistant encryption, AI-powered threat detection, and zero-trust architecture.",
      results: [
        "Zero security breaches in 2 years",
        "Quantum-resistant encryption implemented",
        "Real-time threat detection and response",
        "99.99% uptime guarantee met",
        "Compliance with all security standards"
      ],
      technologies: ["Quantum Algorithms", "Rust", "WebAssembly", "Docker", "Kubernetes"],
      duration: "8 months",
      team: "12 engineers",
      image: "/api/placeholder/600/400",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Edge Computing Orchestration Platform",
      client: "Global IoT Network Provider",
      industry: "IoT & Telecommunications",
      challenge: "Managing 10,000+ edge nodes across multiple continents with varying network conditions and resource constraints, leading to inconsistent performance and high operational costs.",
      solution: "Built intelligent edge computing orchestration platform that optimized application deployment, resource allocation, and real-time monitoring across distributed infrastructure.",
      results: [
        "50% reduction in latency",
        "80% improvement in resource utilization",
        "Scalable to 10,000+ edge nodes",
        "30% reduction in operational costs",
        "99.9% uptime across all nodes"
      ],
      technologies: ["Go", "Kubernetes", "Edge Computing", "IoT", "Machine Learning"],
      duration: "10 months",
      team: "15 engineers",
      image: "/api/placeholder/600/400",
      category: "Edge Computing"
    },
    {
      id: 4,
      title: "Space Technology Innovation Hub",
      client: "Space Exploration Corporation",
      industry: "Space & Aerospace",
      challenge: "Complex space missions required autonomous decision-making, real-time satellite optimization, and advanced resource discovery capabilities that traditional systems couldn't provide.",
      solution: "Developed comprehensive space technology platform combining AI, quantum computing, and advanced robotics for autonomous space exploration and resource management.",
      results: [
        "Autonomous mission planning implemented",
        "Real-time satellite optimization",
        "Advanced resource discovery algorithms",
        "Mission success rate increased to 95%",
        "Reduced mission planning time by 60%"
      ],
      technologies: ["AI/ML", "Quantum Computing", "Robotics", "Satellite Systems", "Python"],
      duration: "12 months",
      team: "20 engineers",
      image: "/api/placeholder/600/400",
      category: "Space Technology"
    },
    {
      id: 5,
      title: "Neural Interface Development Kit",
      client: "Medical Research Institute",
      industry: "Healthcare & Research",
      challenge: "Researchers needed advanced tools to develop brain-computer interfaces for medical applications, requiring sophisticated signal processing and pattern recognition capabilities.",
      solution: "Created comprehensive neural interface development kit with advanced signal processing, machine learning algorithms, and real-time neural feedback systems.",
      results: [
        "10x faster signal processing",
        "99.5% accuracy in pattern recognition",
        "Real-time neural feedback",
        "Enabled 15+ research projects",
        "Published 8 peer-reviewed papers"
      ],
      technologies: ["Neural Networks", "Signal Processing", "Machine Learning", "C++", "Python"],
      duration: "9 months",
      team: "10 engineers",
      image: "/api/placeholder/600/400",
      category: "Neural Interfaces"
    },
    {
      id: 6,
      title: "Autonomous DevOps Platform",
      client: "Tech Startup Accelerator",
      industry: "Technology & Startups",
      challenge: "Multiple startups struggled with manual deployment processes, inconsistent environments, and lack of automated testing, leading to deployment failures and development delays.",
      solution: "Built AI-powered DevOps platform that automated the entire software development lifecycle, from code review to deployment and monitoring.",
      results: [
        "90% reduction in deployment time",
        "Zero-downtime deployments",
        "Automated incident response",
        "99.9% deployment success rate",
        "50% reduction in development cycle time"
      ],
      technologies: ["AI/ML", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      duration: "7 months",
      team: "12 engineers",
      image: "/api/placeholder/600/400",
      category: "DevOps"
    }
  ],

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "Edge Computing", "Space Technology", "Neural Interfaces", "DevOps"],
  const industries = ["All", "Financial Services", "Government & Defense", "IoT & Telecommunications", "Space & Aerospace", "Healthcare & Research", "Technology & Startups"],
  
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const [selectedIndustry, setSelectedIndustry] = React.useState("All"),

  const filteredCaseStudies = caseStudies.filter(study => {
    const categoryMatch = selectedCategory === "All" || study.category === selectedCategory,
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry,
    return categoryMatch && industryMatch,
  }),

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Success Rate", icon: Star },
    { number: "$100M+", label: "Value Delivered", icon: DollarSign }
  ],

const case-studies: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">case-studies</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default case-studies,
