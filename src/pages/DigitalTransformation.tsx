import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Cloud, 
  Database,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  TrendingUp,
  Globe,
  Cpu
} from 'lucide-react';

export default function DigitalTransformation() {
  const transformationAreas = [
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: [
        "Workflow automation and optimization",
        "Document processing and management",
        "Customer service automation",
        "Supply chain optimization"
      ],
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Transform data into actionable business insights",
      features: [
        "Real-time data analytics",
        "Predictive modeling and forecasting",
        "Business intelligence dashboards",
        "Data visualization and reporting"
      ],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Modernize your IT infrastructure for scalability and efficiency",
      features: [
        "Legacy system modernization",
        "Cloud-native application development",
        "Microservices architecture",
        "Container orchestration"
      ],
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless, personalized customer journeys",
      features: [
        "Omnichannel customer engagement",
        "Personalization and recommendation engines",
        "Customer journey mapping",
        "Feedback and sentiment analysis"
      ],
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      metric: "40-60%",
      description: "Cost reduction through process optimization",
      icon: TrendingUp
    },
    {
      metric: "3-5x",
      description: "Faster time to market for new products",
      icon: Rocket
    },
    {
      metric: "80%",
      description: "Improvement in operational efficiency",
      icon: Zap
    },
    {
      metric: "99.9%",
      description: "System uptime and reliability",
      icon: Shield
    }
  ];

  const industries = [
    "Healthcare", "Financial Services", "Manufacturing", "Retail", 
    "Education", "Government", "Transportation", "Energy"
  ];

  const technologies = [
    "AI & Machine Learning", "Cloud Computing", "IoT", "Blockchain",
    "Big Data Analytics", "Robotic Process Automation", "Edge Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your business evolution with cutting-edge digital technologies, 
            intelligent automation, and data-driven insights that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our digital transformation solutions deliver quantifiable results 
              that directly impact your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Transformation Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We cover every aspect of digital transformation to ensure 
              complete business modernization and competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-3">
                  {area.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We have deep experience across multiple industries, understanding 
              unique challenges and regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies to create innovative solutions 
              that drive digital transformation success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful digital transformation 
              with minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Evaluate current state and identify transformation opportunities" },
              { step: "02", title: "Strategy", description: "Develop comprehensive digital transformation roadmap" },
              { step: "03", title: "Implementation", description: "Execute transformation with agile methodology" },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our digital transformation solutions can accelerate 
            your business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}