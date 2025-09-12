import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "RetailTech Solutions",
      industry: "E-Commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor mobile experience",
      solution: "Complete platform rebuild with React, Node.js, and AWS cloud architecture",
      results: [
        "60% reduction in cart abandonment",
        "3x faster page load times",
        "40% increase in mobile conversions",
        "99.9% uptime achieved"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Redis"],
      image: "🛒",
      duration: "6 months"
    },
    {
      title: "AI-Powered Customer Service Automation",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Custom AI chatbot with natural language processing and sentiment analysis",
      results: [
        "70% reduction in support tickets",
        "24/7 customer support availability",
        "95% customer satisfaction rate",
        "50% cost savings on support operations"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI GPT", "AWS Lambda", "Docker"],
      image: "🤖",
      duration: "4 months"
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Unified data platform with real-time analytics and predictive modeling",
      results: [
        "30% improvement in patient outcomes",
        "50% faster diagnosis times",
        "Real-time health monitoring",
        "HIPAA compliant data security"
      ],
      technologies: ["Python", "Apache Kafka", "PostgreSQL", "React", "Docker"],
      image: "🏥",
      duration: "8 months"
    },
    {
      title: "Blockchain Supply Chain Solution",
      client: "GlobalLogistics Inc",
      industry: "Logistics",
      challenge: "Lack of transparency and traceability in supply chain operations",
      solution: "Blockchain-based tracking system with smart contracts and IoT integration",
      results: [
        "100% supply chain transparency",
        "30% reduction in fraud cases",
        "Real-time shipment tracking",
        "Automated compliance reporting"
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "IoT Sensors", "React"],
      image: "⛓️",
      duration: "10 months"
    },
    {
      title: "Mobile Banking App Redesign",
      client: "CommunityBank",
      industry: "Banking",
      challenge: "Outdated mobile app with poor user experience and security concerns",
      solution: "Complete mobile app redesign with biometric authentication and modern UX",
      results: [
        "4.8/5 app store rating",
        "80% increase in mobile transactions",
        "Zero security breaches",
        "60% reduction in support calls"
      ],
      technologies: ["React Native", "Node.js", "Biometric Auth", "AWS", "MongoDB"],
      image: "🏦",
      duration: "5 months"
    },
    {
      title: "IoT Manufacturing Optimization",
      client: "AutoManufacturing Co",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and equipment downtime",
      solution: "IoT sensor network with predictive maintenance and real-time monitoring",
      results: [
        "25% reduction in equipment downtime",
        "15% increase in production efficiency",
        "Predictive maintenance alerts",
        "Real-time production monitoring"
      ],
      technologies: ["IoT Sensors", "Python", "MQTT", "Time Series DB", "React"],
      image: "🏭",
      duration: "7 months"
    }
  ];

  return (
    <Layout 
      title="Case Studies - Zion Tech Solutions"
      description="Explore our successful technology implementations across various industries. See how we've helped companies transform their operations with cutting-edge solutions."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how we've helped companies across various industries transform their operations 
            with innovative technology solutions. Each case study showcases real results and measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{study.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full">{study.industry}</span>
                    <span>{study.duration}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-1">Challenge:</h5>
                    <p className="text-gray-200 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-1">Solution:</h5>
                    <p className="text-gray-200 text-sm">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-green-400 mb-3">Key Results:</h5>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="text-sm text-gray-200 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-purple-400 mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions. 
            Every great success story starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
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