import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Legacy system struggling with 500% traffic growth and poor user experience",
      solution: "Complete digital transformation with AI-powered recommendations and cloud migration",
      results: [
        "300% increase in revenue",
        "85% improvement in page load speed",
        "60% reduction in cart abandonment",
        "99.9% uptime achieved"
      ],
      technologies: ["React", "Node.js", "AWS", "Machine Learning", "Redis"],
      duration: "6 months",
      teamSize: "12 developers",
      image: "🛒",
      featured: true
    },
    {
      id: 2,
      title: "Manufacturing IoT Platform",
      client: "GlobalManufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate and production delays",
      solution: "AI-powered quality control system with real-time monitoring and predictive maintenance",
      results: [
        "90% reduction in defects",
        "45% cost savings in quality control",
        "60% improvement in production efficiency",
        "Real-time quality monitoring"
      ],
      technologies: ["IoT Sensors", "Machine Learning", "Azure IoT", "Power BI", "Python"],
      duration: "8 months",
      teamSize: "8 developers",
      image: "🏭",
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Unified data platform with AI-powered insights and predictive analytics",
      results: [
        "40% improvement in patient outcomes",
        "50% reduction in data processing time",
        "Real-time patient monitoring",
        "HIPAA compliant data management"
      ],
      technologies: ["Python", "TensorFlow", "PostgreSQL", "Docker", "Kubernetes"],
      duration: "10 months",
      teamSize: "15 developers",
      image: "🏥",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Mobile App",
      client: "SecureBank Ltd",
      industry: "FinTech",
      challenge: "Outdated mobile banking app with poor user experience and security concerns",
      solution: "Modern mobile banking app with biometric authentication and AI fraud detection",
      results: [
        "200% increase in mobile transactions",
        "95% user satisfaction rating",
        "99.99% fraud detection accuracy",
        "50% reduction in support tickets"
      ],
      technologies: ["React Native", "Node.js", "Blockchain", "Biometric Auth", "AWS"],
      duration: "7 months",
      teamSize: "10 developers",
      image: "🏦",
      featured: false
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      client: "LogisticsPro",
      industry: "Logistics",
      challenge: "Inefficient supply chain causing 25% delivery delays and high operational costs",
      solution: "AI-powered supply chain optimization with real-time tracking and predictive analytics",
      results: [
        "35% reduction in delivery time",
        "30% cost savings in logistics",
        "Real-time shipment tracking",
        "Predictive demand forecasting"
      ],
      technologies: ["Machine Learning", "IoT", "Cloud Computing", "APIs", "Data Analytics"],
      duration: "9 months",
      teamSize: "14 developers",
      image: "🚚",
      featured: false
    },
    {
      id: 6,
      title: "EdTech Learning Platform",
      client: "EduTech Solutions",
      industry: "Education",
      challenge: "Traditional learning methods not engaging students and poor learning outcomes",
      solution: "AI-powered personalized learning platform with adaptive content and progress tracking",
      results: [
        "80% improvement in student engagement",
        "65% increase in learning outcomes",
        "Personalized learning paths",
        "Real-time progress analytics"
      ],
      technologies: ["React", "Python", "Machine Learning", "MongoDB", "AWS"],
      duration: "12 months",
      teamSize: "18 developers",
      image: "🎓",
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <Layout 
      title="Case Studies - Zion Tech Solutions"
      description="Explore our successful projects and client transformations. See how we've helped companies across industries achieve digital transformation and business growth."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover how we've helped companies across industries transform their digital presence, 
              optimize operations, and achieve remarkable business growth through innovative technology solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-sm text-gray-300">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-sm text-gray-300">Industries Served</div>
            </div>
          </div>

          {/* Featured Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Success Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{study.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span className="bg-blue-600 px-3 py-1 rounded-full">{study.industry}</span>
                        <span>{study.duration}</span>
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                      <p className="text-gray-200 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                      <p className="text-gray-200 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      View Full Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Case Studies Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{study.image}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{study.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="bg-blue-600 px-2 py-1 rounded-full">{study.industry}</span>
                        <span>{study.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{study.challenge}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Focus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "E-commerce", icon: "🛒", projects: 45, description: "Online retail platforms and marketplaces" },
                { name: "Healthcare", icon: "🏥", projects: 32, description: "Medical systems and health tech solutions" },
                { name: "FinTech", icon: "🏦", projects: 28, description: "Financial services and payment systems" },
                { name: "Manufacturing", icon: "🏭", projects: 38, description: "Industrial automation and IoT solutions" },
                { name: "Education", icon: "🎓", projects: 25, description: "EdTech platforms and learning systems" },
                { name: "Logistics", icon: "🚚", projects: 22, description: "Supply chain and transportation solutions" },
                { name: "Real Estate", icon: "🏠", projects: 18, description: "Property management and real estate tech" },
                { name: "Entertainment", icon: "🎬", projects: 15, description: "Media and entertainment platforms" }
              ].map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{industry.projects}+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                  <p className="text-xs text-gray-400 mt-2">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Zion Tech Solutions transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and helped us scale from startup to enterprise level.",
                  author: "Sarah Johnson",
                  position: "CEO, TechRetail Inc.",
                  rating: 5
                },
                {
                  quote: "The team's expertise in cloud architecture and machine learning is unmatched. They delivered exactly what we needed, on time and on budget.",
                  author: "Michael Chen",
                  position: "CTO, GlobalManufacturing Corp",
                  rating: 5
                },
                {
                  quote: "Professional, reliable, and innovative. Zion Tech helped us modernize our healthcare platform and improve patient outcomes significantly.",
                  author: "Dr. Emily Rodriguez",
                  position: "VP Technology, MediCare Systems",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-yellow-400 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join the companies that have already transformed their business with our innovative technology solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Start Your Project Today
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default CaseStudies;