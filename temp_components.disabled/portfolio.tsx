import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Portfolio: NextPage = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "AI Development",
      description: "Built a comprehensive e-commerce platform with AI-powered product recommendations, chatbot support, and predictive analytics.",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
      image: "🛒",
      results: "300% increase in conversion rate, 50% reduction in customer service queries",
      client: "TechRetail Inc.",
      caseStudy: "/case-studies/ai-ecommerce-platform"
    },
    {
      id: 2,
      title: "Cloud Migration for Enterprise",
      category: "Cloud Architecture",
      description: "Migrated legacy on-premise systems to AWS cloud infrastructure, improving scalability and reducing costs.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      image: "☁️",
      results: "60% cost reduction, 99.9% uptime, 5x faster deployment",
      client: "GlobalCorp"
    },
    {
      id: 3,
      title: "IoT Fleet Management System",
      category: "IoT Development",
      description: "Developed a real-time fleet tracking and management system with predictive maintenance capabilities.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "MQTT"],
      image: "🚛",
      results: "25% fuel savings, 40% reduction in maintenance costs",
      client: "LogisticsPro"
    },
    {
      id: 4,
      title: "Blockchain Supply Chain Solution",
      category: "Blockchain",
      description: "Created a transparent supply chain tracking system using blockchain technology for food safety compliance.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "React", "IPFS"],
      image: "🔗",
      results: "100% traceability, 90% reduction in compliance time",
      client: "FreshFood Co."
    },
    {
      id: 5,
      title: "Machine Learning Fraud Detection",
      category: "AI Development",
      description: "Implemented ML models to detect fraudulent transactions in real-time for a financial services company.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Kafka", "PostgreSQL"],
      image: "🛡️",
      results: "95% fraud detection accuracy, 80% reduction in false positives",
      client: "SecureBank"
    },
    {
      id: 6,
      title: "Mobile App for Healthcare",
      category: "Mobile Development",
      description: "Developed a HIPAA-compliant mobile app for patient management and telemedicine capabilities.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
      image: "🏥",
      results: "50% increase in patient engagement, 30% reduction in appointment no-shows",
      client: "HealthFirst Clinic"
    }
  ];

  const categories = ["All", "AI Development", "Cloud Architecture", "IoT Development", "Blockchain", "Mobile Development"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Portfolio - Zion Tech Solutions | Our Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful technology projects. See how we've helped businesses transform with AI, cloud, IoT, and blockchain solutions." />
        <meta name="keywords" content="portfolio, case studies, AI projects, cloud migration, IoT solutions, blockchain development" />
        <meta property="og:title" content="Portfolio - Zion Tech Solutions" />
        <meta property="og:description" content="Discover our successful technology projects and see the impact we've made for our clients." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover the innovative solutions we've delivered for businesses across various industries
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">{project.image}</div>
              <div className="mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-white">Results:</h4>
                <p className="text-green-400 font-semibold">{project.results}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-white">Client:</h4>
                <p className="text-gray-300">{project.client}</p>
              </div>

              <Link 
                href={project.caseStudy || "#"}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all text-center block ${!project.caseStudy ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {project.caseStudy ? 'View Case Study' : 'Case Study Coming Soon'}
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-white">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-white">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-yellow-400 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-200 mb-6 text-lg">
                "Zion Tech Solutions delivered an exceptional AI-powered platform that transformed our business operations. 
                The results exceeded our expectations."
              </p>
              <div className="font-semibold text-white">Sarah Johnson</div>
              <div className="text-sm text-gray-400">CEO, TechRetail Inc.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-yellow-400 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-200 mb-6 text-lg">
                "The cloud migration project was executed flawlessly. We achieved significant cost savings and improved 
                performance across all our systems."
              </p>
              <div className="font-semibold text-white">Michael Chen</div>
              <div className="text-sm text-gray-400">CTO, GlobalCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-yellow-400 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-200 mb-6 text-lg">
                "Outstanding work on our IoT fleet management system. The predictive maintenance features have saved us 
                millions in operational costs."
              </p>
              <div className="font-semibold text-white">Emily Rodriguez</div>
              <div className="text-sm text-gray-400">VP Operations, LogisticsPro</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Our Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;