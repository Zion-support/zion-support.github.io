import React from "react"
import { Link } from "react-router-dom"
import {;
  Brain,;
  Cpu,;
  Zap,;
  Target,;
  Users,;
  Shield,;
  TrendingUp,;
  CheckCircle,;
  ArrowRight,;
  Play,;
  Code,;
  Database,;
  Cloud,;
  Lock,;
  BarChart3,;
  Eye,;
  MessageSquare,;
  Heart,;
  DollarSign,;
  Factory,;
  ShoppingCart;
} from "lucide-react"
export default function AIServices() {;
  const aiServices = [;
    {;
      name: "AI Strategy & Consulting",description: "Strategic guidance on implementing AI solutions across your organization",icon: Target,features: [;
        "AI readiness assessment"
        "Technology roadmap planning",;
        "ROI analysis and business case development",;
        "Change management strategies"
      ],;
      price: "From $2,500",;
      duration: "2-4 weeks"
    };
    {;
      name: "Machine Learning Development",description: "Custom ML models and algorithms tailored to your specific business needs",icon: Brain,features: [;
        "Custom model development"
        "Data preprocessing and feature engineering",;
        "Model training and optimization",;
        "Performance monitoring and maintenance"
      ],;
      price: "From $5,000",;
      duration: "4-8 weeks"
    };
    {;
      name: "AI-Powered Applications",description: "Intelligent automation and insights through custom AI applications",icon: Zap,features: [;
        "Chatbot and virtual assistant development"
        "Predictive analytics applications",;
        "Computer vision solutions",;
        "Natural language processing systems"
      ],;
      price: "From $8,500",;
      duration: "6-12 weeks"
    };
    {;
      name: "AI Infrastructure & MLOps",description: "Scalable AI infrastructure and machine learning operations",icon: Cloud,features: [;
        "ML pipeline automation"
        "Model versioning and deployment",;
        "Scalable training infrastructure",;
        "Monitoring and alerting systems"
      ],;
      price: "From $6,000",;
      duration: "4-10 weeks"
    };
  ];
  const aiTechnologies = [;
    { name: "TensorFlow", description: "Open-source ML framework", icon: Code };
    { name: "PyTorch", description: "Deep learning research platform", icon: Brain };
    { name: "OpenAI GPT", description: "Advanced language models", icon: Cpu };
    { name: "Computer Vision", description: "Image and video analysis", icon: Eye };
    { name: "NLP", description: "Natural language processing", icon: MessageSquare };
    { name: "AutoML", description: "Automated machine learning", icon: Zap };
  ];
  const useCases = [;
    {;
      industry: "Healthcare",applications: ["Medical image analysis", "Drug discovery", "Patient risk prediction"],;
      icon: Heart;
    };
    {;
      industry: "Finance",applications: ["Fraud detection", "Credit scoring", "Algorithmic trading"],;
      icon: DollarSign;
    };
    {;
      industry: "Manufacturing",applications: ["Predictive maintenance", "Quality control", "Supply chain optimization"],;
      icon: Factory;
    };
    {;
      industry: "Retail",applications: ["Customer segmentation", "Demand forecasting", "Personalized recommendations"],;
      icon: ShoppingCart;
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              AI & Machine Learning;
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Solutions;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">;
              Transform your business with cutting-edge artificial intelligence. From strategy to implementation;
              we deliver AI solutions that drive real results.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started;
                <[^>]*/>
              </[^>]*>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">;
                <[^>]*/>
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Background Elements */};
        <div className="absolute inset-0 -z-10">;
          <[^>]*/>
          <[^>]*/>
          <[^>]*/>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our AI Services;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              Comprehensive AI solutions designed to accelerate your digital transformation journey;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">;
            {aiServices.map((service, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">;
                    <[^>]*/>
                  </[^>]*>
                  <div className="ml-4">;
                    <h3 className="text-xl font-semibold text-white">{service.name}</[^>]*>
                    <p className="text-slate-400">{service.description}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <ul className="space-y-3 mb-6">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-slate-300">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>

                <div className="flex items-center justify-between">;
                  <div>;
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</[^>]*>
                    <div className="text-slate-400 text-sm">{service.duration}</[^>]*>
                  </[^>]*>
                  <Link;
                    to="/contact"
                    className="[^"]*"
                  >;
                    Get Quote;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technologies Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Cutting-Edge AI Technologies;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              We leverage the latest AI frameworks and tools to deliver exceptional results;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">;
            {aiTechnologies.map((tech, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</[^>]*>
                <p className="text-slate-400 text-sm">{tech.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              AI Across Industries;
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">;
              Discover how AI is transforming various sectors and creating new opportunities;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {useCases.map((useCase, index) => (;
              <div;
                key={index};
                className="[^"]*"
              >;
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</[^>]*>
                <ul className="space-y-2">;
                  {useCase.applications.map((app, appIndex) => (;
                    <li key={appIndex} className="text-slate-300 text-sm flex items-center">;
                      <[^>]*/>
                      {app};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Harness the Power of AI?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8">;
              Let's discuss how AI can transform your business operations and drive growth;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Schedule Consultation;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                Explore All Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};