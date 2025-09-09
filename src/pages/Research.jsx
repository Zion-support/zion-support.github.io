import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { FlaskConical, Users, TrendingUp, Lightbulb, Target, Award, BookOpen, Globe } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancing the frontiers of AI with focus on responsible development, explainable AI, and human-AI collaboration.",
      projects: 12,
      researchers: 8,
      publications: 24,
      funding: "$2.4M",
      status: "Active",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Quantum Computing & Cryptography",
      description: "Exploring quantum algorithms, quantum-resistant cryptography, and the future of secure communications.",
      projects: 6,
      researchers: 5,
      publications: 18,
      funding: "$1.8M",
      status: "Active",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "Cybersecurity & Threat Intelligence",
      description: "Developing next-generation security solutions, threat detection systems, and cyber resilience frameworks.",
      projects: 15,
      researchers: 12,
      publications: 31,
      funding: "$3.2M",
      status: "Active",
      icon: "🔒"
    },
    {
      id: 4,
      title: "Green Technology & Sustainability",
      description: "Innovating sustainable computing solutions, energy-efficient algorithms, and environmental impact reduction.",
      projects: 9,
      researchers: 7,
      publications: 22,
      funding: "$1.6M",
      status: "Active",
      icon: "🌱"
    },
    {
      id: 5,
      title: "Edge Computing & IoT",
      description: "Advancing distributed computing paradigms, IoT security, and real-time data processing systems.",
      projects: 8,
      researchers: 6,
      publications: 19,
      funding: "$1.4M",
      status: "Active",
      icon: "🌐"
    },
    {
      id: 6,
      title: "Blockchain & Distributed Systems",
      description: "Researching blockchain scalability, consensus mechanisms, and decentralized applications.",
      projects: 7,
      researchers: 4,
      publications: 16,
      funding: "$1.2M",
      status: "Active",
      icon: "⛓️"
    }
  ];

  const recentPublications = [
    {
      id: 1,
      title: "Quantum-Resistant Cryptography for Post-Quantum Era",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      journal: "Journal of Cryptography",
      year: 2024,
      citations: 45,
      doi: "10.1000/quantum-crypto-2024"
    },
    {
      id: 2,
      title: "AI-Powered Threat Detection in Industrial IoT Networks",
      authors: ["Alex Thompson", "Dr. James Wilson"],
      journal: "IEEE Internet of Things",
      year: 2024,
      citations: 32,
      doi: "10.1000/ai-iot-2024"
    },
    {
      id: 3,
      title: "Sustainable Computing: Energy-Efficient AI Algorithms",
      authors: ["Lisa Park", "Dr. Emily Watson"],
      journal: "Nature Sustainability",
      year: 2024,
      citations: 67,
      doi: "10.1000/green-ai-2024"
    }
  ];

  const partnerships = [
    {
      name: "MIT Computer Science & AI Laboratory",
      type: "Academic Partnership",
      focus: "AI Research & Development"
    },
    {
      name: "Stanford University",
      type: "Research Collaboration",
      focus: "Quantum Computing"
    },
    {
      name: "Google Research",
      type: "Industry Partnership",
      focus: "Machine Learning & Security"
    },
    {
      name: "Microsoft Research",
      type: "Strategic Alliance",
      focus: "Cloud Security & AI Ethics"
    }
  ];

  return (
    <>
      <SEO 
        title="Research & Development - Zion Tech Group Innovation Hub" 
        description="Explore our cutting-edge research initiatives in AI, quantum computing, cybersecurity, and emerging technologies. Join our innovation ecosystem." 
        canonical="/research" 
        url="https://ziontechgroup.com/research"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research & Development
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research, 
              collaborative partnerships, and breakthrough discoveries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">57</div>
              <div className="text-zion-slate-light text-sm">Active Projects</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">42</div>
              <div className="text-zion-slate-light text-sm">Researchers</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">130+</div>
              <div className="text-zion-slate-light text-sm">Publications</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">$12.6M</div>
              <div className="text-zion-slate-light text-sm">Research Funding</div>
            </div>
          </div>

          {/* Research Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Research Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area) => (
                <div key={area.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-6">
                    {area.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">{area.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">{area.researchers}</div>
                      <div className="text-zion-slate-light text-xs">Researchers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">{area.publications}</div>
                      <div className="text-zion-slate-light text-xs">Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-cyan font-semibold">{area.funding}</div>
                      <div className="text-zion-slate-light text-xs">Funding</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {area.status}
                    </span>
                    <Link to={`/research/${area.id}`} className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Publications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Recent Publications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recentPublications.map((pub) => (
                <div key={pub.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {pub.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Authors:</span> {pub.authors.join(", ")}
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Journal:</span> {pub.journal}
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Year:</span> {pub.year}
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Citations:</span> {pub.citations}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-mono">{pub.doi}</span>
                    <button className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                      View Paper →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research Partnerships */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Research Partnerships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerships.map((partner, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {partner.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Type:</span> {partner.type}
                    </div>
                    <div className="text-zion-slate-light text-sm">
                      <span className="font-medium">Focus:</span> {partner.focus}
                    </div>
                  </div>
                  <button className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Join Our Research Community
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Collaborate with leading researchers, access cutting-edge facilities, 
                and contribute to breakthrough discoveries in technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/careers" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Join Our Team
                </Link>
                <Link to="/contact" className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Research Collaboration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}