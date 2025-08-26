import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms for predictive analytics, pattern recognition, and data-driven insights.",
      icon: Brain,
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Recommendation Systems",
        "Anomaly Detection"
      ]
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent process automation using AI to streamline operations and reduce manual tasks.",
      icon: Zap,
      features: [
        "Workflow Automation",
        "Document Processing",
        "Customer Service Bots",
        "Quality Assurance",
        "Supply Chain Optimization"
      ]
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Advanced analytics platforms that transform raw data into actionable business intelligence.",
      icon: TrendingUp,
      features: [
        "Real-time Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Performance Metrics",
        "Trend Analysis"
      ]
    },
    {
      title: "AI Infrastructure & Platforms",
      description: "Scalable AI infrastructure and platforms for enterprise AI deployment and management.",
      icon: Cpu,
      features: [
        "AI Model Deployment",
        "Scalable Computing",
        "Model Monitoring",
        "API Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "AI Security & Compliance",
      description: "AI-powered security solutions with built-in compliance and ethical AI practices.",
      icon: Shield,
      features: [
        "Threat Detection",
        "Fraud Prevention",
        "Privacy Protection",
        "Compliance Monitoring",
        "Ethical AI Guidelines"
      ]
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic AI consulting to help organizations plan and implement AI initiatives.",
      icon: Database,
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Roadmap",
        "Team Training",
        "ROI Analysis"
      ]
    }
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Enhanced decision-making with data-driven insights",
    "Improved customer experience and personalization",
    "Cost reduction through automation",
    "Competitive advantage in the market",
    "Scalable solutions that grow with your business"
  ];

  const technologies = [
    "TensorFlow & PyTorch",
    "OpenAI & GPT Models",
    "Computer Vision APIs",
    "Natural Language Processing",
    "Cloud AI Services",
    "Edge AI Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI services cover every aspect of artificial intelligence implementation, 
              from strategy to deployment and ongoing optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the transformative power of AI with our proven approach and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <p className="text-slate-700 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;