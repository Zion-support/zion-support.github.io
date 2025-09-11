import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {;
  FlaskConical,
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Microscope,
  TestTube,
  Satellite,
  Telescope;
} from 'lucide-react';
export default function ResearchDevelopment() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const researchAreas = [;
    'all',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'IoT & Edge Computing',
    'Blockchain',
    'AR/VR',
    'Robotics',
    'Data Science',
    'Biotechnology';
  ];
  const projects = [;
    {;
      id: 1,
      title: "Quantum Machine Learning Algorithms",
      description: "Developing quantum algorithms for machine learning applications that can process complex data exponentially faster than classical computers.",
      area: "AI & Machine Learning",
      status: "In Progress",
      funding: "$2.5M",
      duration: "24 months",
      team: 12,
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      features: [ "Quantum Neural Networks",
        "Quantum Optimization",
        "Quantum Data Processing",
        "Hybrid Classical-Quantum Systems" ],
      outcomes: [ "50% faster training times",
        "Improved accuracy on complex datasets",
        "Novel quantum algorithms",
        "Published research papers" ];
},
    {;
      id: 2,
      title: "Advanced Cybersecurity Framework",
      description: "Creating next-generation cybersecurity solutions using AI and machine learning to detect and prevent sophisticated cyber threats.",
      area: "Cybersecurity",
      status: "Completed",
      funding: "$1.8M",
      duration: "18 months",
      team: 8,
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      features: [ "AI Threat Detection",
        "Behavioral Analysis",
        "Real-time Response",
        "Zero Trust Architecture" ],
      outcomes: [ "99.9% threat detection rate",
        "Reduced false positives by 60%",
        "Patented security algorithms",
        "Industry recognition" ];
},
    {;
      id: 3,
      title: "Edge Computing Infrastructure",
      description: "Building distributed computing infrastructure that brings processing power closer to data sources for real-time applications.",
      area: "IoT & Edge Computing",
      status: "In Progress",
      funding: "$3.2M",
      duration: "30 months",
      team: 15,
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      features: [ "Distributed Processing",
        "Low Latency Networks",
        "Edge AI Models",
        "Autonomous Systems" ],
      outcomes: [ "Sub-millisecond response times",
        "Reduced bandwidth usage",
        "Improved reliability",
        "Scalable architecture" ];
},
    {;
      id: 4,
      title: "Biomedical AI Platform",
      description: "Developing AI-powered platform for medical diagnosis, drug discovery, and personalized treatment recommendations.",
      area: "Biotechnology",
      status: "Planning",
      funding: "$4.1M",
      duration: "36 months",
      team: 20,
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      features: [ "Medical Image Analysis",
        "Drug Discovery AI",
        "Personalized Medicine",
        "Clinical Decision Support" ],
      outcomes: [ "Improved diagnostic accuracy",
        "Faster drug development",
        "Better patient outcomes",
        "Regulatory approval" ];
},
    {;
      id: 5,
      title: "Autonomous Systems Research",
      description: "Researching and developing autonomous systems for various applications including drones, vehicles, and industrial robots.",
      area: "Robotics",
      status: "In Progress",
      funding: "$2.8M",
      duration: "28 months",
      team: 14,
      icon: Rocket,
      color: "from-indigo-500 to-blue-500",
      features: [ "Computer Vision",
        "Path Planning",
        "Collision Avoidance",
        "Human-Robot Interaction" ],
      outcomes: [ "Enhanced autonomy",
        "Improved safety",
        "Better efficiency",
        "Commercial applications" ];
},
    {;
      id: 6,
      title: "Blockchain Scalability Solutions",
      description: "Developing next-generation blockchain technologies that can handle high transaction volumes while maintaining security and decentralization.",
      area: "Blockchain",
      status: "Completed",
      funding: "$1.5M",
      duration: "20 months",
      team: 10,
      icon: Network,
      color: "from-yellow-500 to-orange-500",
      features: [ "Layer 2 Solutions",
        "Consensus Algorithms",
        "Smart Contracts",
        "Cross-chain Interoperability" ],
      outcomes: [ "10x transaction throughput",
        "Reduced energy consumption",
        "Enhanced security",
        "Industry partnerships" ];
}
  ];
  const filteredProjects = projects.filter(project => {;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'all' || project.area === selectedArea;
    return matchesSearch && matchesArea;
});
  const stats = [;
    { number: "25+", label: "Active Projects", icon: FlaskConical },
    { number: "$15M+", label: "Research Funding", icon: DollarSign },
    { number: "50+", label: "Research Team", icon: Users },
    { number: "100+", label: "Publications", icon: BookOpen }
  ];
  return (;
    <div className="min-h-screen bg-gray-50">;
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              Research & Development;
            </h1>;
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">;
              Pioneering the future of technology through cutting-edge research and innovative development projects.;
            </p>;
          </div>;
        </div>;
      </div>;

      {/* Stats Section */}
      <section className="py-16 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">;
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">;
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />;
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>;
                  <div className="text-sm text-gray-600">{stat.label}</div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            {/* Search */}
            <div className="relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />;
              <input;
                type="text";
                placeholder="Search research projects...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
            </div>;

            {/* Area Filter */}
            <div className="flex items-center gap-2">;
              <Filter className="h-5 w-5 text-gray-400" />;
              <select;
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
                {researchAreas.map(area => (;
                  <option key={area} value={area}>;
                    {area === 'all' ? 'All Research Areas' : area}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
          {filteredProjects.map((project) => (;
            <motion.div;
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">;
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>;
                <project.icon className="w-16 h-16 text-white" />;
              </div>;
              <div className="p-6">;
                <div className="flex items-center gap-2 mb-3">;
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">;
                    {project.area}
                  </span>;
                  <span className={`px-2 py-1 text-xs font-medium rounded ${;
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :;
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :;
                    'bg-gray-100 text-gray-800';
}`}>;
                    {project.status}
                  </span>;
                </div>;
                <h2 className="text-2xl font-bold text-gray-900 mb-3">;
                  {project.title}
                </h2>;
                <p className="text-gray-600 mb-6">;
                  {project.description}
                </p>;
                <div className="grid grid-cols-2 gap-4 mb-6">;
                  <div className="text-center">;
                    <div className="text-lg font-bold text-gray-900">{project.funding}</div>;
                    <div className="text-sm text-gray-500">Funding</div>;
                  </div>;
                  <div className="text-center">;
                    <div className="text-lg font-bold text-gray-900">{project.duration}</div>;
                    <div className="text-sm text-gray-500">Duration</div>;
                  </div>;
                </div>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>;
                    <ul className="space-y-1">;
                      {project.features.map((feature, index) => (;
                        <li key={index} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h4>;
                    <ul className="space-y-1">;
                      {project.outcomes.map((outcome, index) => (;
                        <li key={index} className="flex items-center text-sm text-gray-600">;
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />;
                          {outcome}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center text-sm text-gray-500">;
                    <Users className="h-4 w-4 mr-1" />;
                    {project.team} team members;
                  </div>;
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">;
                    Learn More;
                    <ArrowRight className="ml-2 h-4 w-4" />;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          ))}
        </div>;

        {filteredProjects.length === 0 && (;
          <div className="text-center py-12">;
            <div className="text-gray-500 text-lg">No research projects found matching your criteria.</div>;
            <button;
              onClick={() => {;
                setSearchTerm('');
                setSelectedArea('all');
}}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium">;
              Clear filters;
            </button>;
          </div>;
        )}
      </div>;
    </div>;
  );
}
