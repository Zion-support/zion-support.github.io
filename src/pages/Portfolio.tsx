import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      description: "A comprehensive BI platform that leverages machine learning to provide real-time insights and predictive analytics for enterprise clients.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
      image: "/images/project-1.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Zero Trust Security Architecture",
      description: "Implemented a complete zero trust security framework for a Fortune 500 company, reducing security incidents by 95%.",
      technologies: ["AWS", "Kubernetes", "Istio", "Vault", "Terraform"],
      image: "/images/project-2.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Cybersecurity"
    },
    {
      id: 3,
      title: "Quantum Computing Research Platform",
      description: "Developed a quantum computing simulation platform for research institutions to test quantum algorithms and protocols.",
      technologies: ["Qiskit", "Python", "Docker", "React", "WebGL"],
      image: "/images/project-3.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Quantum Computing"
    },
    {
      id: 4,
      title: "Edge AI IoT Solution",
      description: "Created an edge AI solution for industrial IoT devices that processes data locally, reducing latency by 80%.",
      technologies: ["TensorFlow Lite", "C++", "MQTT", "Docker", "Kubernetes"],
      image: "/images/project-4.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Edge Computing"
    },
    {
      id: 5,
      title: "Micro-SaaS Platform Suite",
      description: "Built a suite of micro-SaaS applications for small businesses, including CRM, project management, and analytics tools.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
      image: "/images/project-5.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "SaaS"
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Solution",
      description: "Developed a blockchain-based supply chain tracking system that ensures transparency and authenticity of products.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "React", "IPFS"],
      image: "/images/project-6.jpg",
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain"
    }
  ];

  const categories = ["All", "AI/ML", "Cybersecurity", "Quantum Computing", "Edge Computing", "SaaS", "Blockchain"];

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group | Our Projects & Case Studies</title>
        <meta name="description" content="Explore our portfolio of successful AI and IT projects. See how we've helped businesses transform with cutting-edge technology solutions." />
        <meta name="keywords" content="portfolio, projects, case studies, AI solutions, IT consulting, technology implementation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover our successful projects and see how we've helped businesses transform with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{project.id}</div>
                      <div className="text-sm opacity-90">{project.category}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our expertise.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;