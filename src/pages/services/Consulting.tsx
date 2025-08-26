import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { 
  Lightbulb, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Consulting: React.FC = () => {
  const services = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape and capabilities",
      icon: "🔍",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"]
=======
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape and capabilities",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],
      icon: "🔍"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    },
    {
      title: "Strategic Planning",
      description: "Develop long-term technology strategy aligned with business objectives",
<<<<<<< HEAD
      icon: "📋",
      features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"]
=======
      features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],
      icon: "📋"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in selecting the right technology partners and solutions",
<<<<<<< HEAD
      icon: "🤝",
      features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"]
    },
    {
      title: "Project Management",
      description: "Professional project management for technology implementations",
      icon: "📊",
      features: ["Project Planning", "Resource Management", "Timeline Control", "Risk Mitigation"]
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Technology",
    "Energy"
  ];

  const benefits = [
    "Reduce technology costs by 20-40%",
    "Accelerate digital transformation initiatives",
    "Improve operational efficiency",
    "Enhance competitive advantage",
    "Mitigate technology risks",
    "Optimize resource allocation"
  ];

  const process = [
    { step: 1, title: "Discovery", description: "Understand your business needs and current state" },
    { step: 2, title: "Analysis", description: "Evaluate options and identify opportunities" },
    { step: 3, title: "Strategy", description: "Develop comprehensive technology roadmap" },
    { step: 4, title: "Implementation", description: "Execute strategy with ongoing support" }
  ];

  return (
    <>
      <Head>
        <title>Technology Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert technology consulting services to optimize your IT strategy, reduce costs, and accelerate digital transformation. Get strategic guidance from Zion Tech Group." />
        <meta name="keywords" content="technology consulting, IT strategy, digital transformation, technology assessment, vendor selection" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-12 h-12 text-yellow-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Technology Consulting
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Strategic technology guidance to optimize your IT investments, reduce costs, 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
=======
      features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],
      icon: "🤝"
    },
    {
      icon: Target,
      title: "Project Management",
=======
      description: "Professional project management for successful technology implementations",
      features: ["Project Planning", "Team Coordination", "Timeline Management", "Quality Assurance"],
      icon: "📊"
    }
  ];

  const consultingApproach = [
    { step: "Discovery", icon: "🔍", description: "Understand your business needs and challenges" },
    { step: "Analysis", icon: "📊", description: "Analyze current state and identify opportunities" },
    { step: "Strategy", icon: "🎯", description: "Develop comprehensive recommendations" },
    { step: "Implementation", icon: "🚀", description: "Execute strategy with ongoing support" }
  ];

  const consultingAreas = [
    { area: "Enterprise Architecture", solutions: ["Technology strategy", "System design", "Integration planning", "Scalability assessment"] },
    { area: "Digital Strategy", solutions: ["Digital transformation", "Technology roadmap", "Innovation strategy", "Change management"] },
    { area: "Security & Compliance", solutions: ["Security assessment", "Compliance audit", "Risk management", "Security strategy"] },
    { area: "Cloud Strategy", solutions: ["Cloud assessment", "Migration planning", "Cost optimization", "Multi-cloud strategy"] }
  ];
=======
import Link from 'next/link';

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technology Consulting - Zion Tech Group"
        description="Get expert technology consulting services to align your business strategy with cutting-edge solutions."
        keywords="technology consulting, strategic consulting, team training, project management, performance optimization"
        canonical="https://ziontechgroup.com/services/consulting"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make informed technology decisions with expert guidance. Our consulting services 
              help you navigate complex technology choices and maximize your technology investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology consulting to address your most critical IT challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
=======
        {/* Consulting Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful technology consulting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingApproach.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology consulting to drive your business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consulting Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized expertise across key technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {solution}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep expertise across diverse industry sectors
=======
        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from our consulting projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services Firm</h3>
                <p className="text-gray-300 mb-4">
                  Technology assessment and strategic planning led to 40% reduction in IT costs and improved system reliability through cloud migration and infrastructure optimization.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> 40% cost reduction, improved reliability
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare Provider</h3>
                <p className="text-gray-300 mb-4">
                  Security and compliance consulting resulted in successful SOC 2 certification and enhanced data protection measures, ensuring patient data security and regulatory compliance.
                </p>
                <div className="text-blue-400 text-sm">
                  <strong>Results:</strong> SOC 2 certification, enhanced security
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deep knowledge across leading technology platforms and solutions
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<<<<<<< HEAD
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Consulting?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results and strategic insights to transform your technology landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Consulting Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to delivering strategic technology guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
=======
              {[
                "Cloud Platforms", "Security Solutions", "Data Analytics", "AI/ML",
                "DevOps Tools", "Enterprise Software", "Integration Platforms", "Mobile Technologies",
                "IoT Platforms", "Blockchain", "Edge Computing", "Quantum Computing"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how strategic technology consulting can optimize your IT investments 
              and accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
=======
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Expert Technology Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our consulting services can help optimize your technology strategy
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </div>
        </section>
      </div>
    </>
  );
};

export default Consulting;