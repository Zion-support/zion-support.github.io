import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Database, 
  Zap, 
  Target, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Lock,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Network,
  Cloud,
  Server,
  Code,
  TrendingUp,
  Lightbulb,
  Rocket,
  ShoppingCart
} from 'lucide-react';

export default function AIMachineLearning() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description: "State-of-the-art deep learning models for complex pattern recognition and decision-making."
    },
    {
      icon: Cpu,
      title: "High-Performance Computing",
      description: "Optimized algorithms and GPU acceleration for lightning-fast model training and inference."
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Scalable data pipelines that handle massive datasets for comprehensive model training."
    },
    {
      icon: Zap,
      title: "Real-Time Learning",
      description: "Continuous model improvement through online learning and adaptive algorithms."
    },
    {
      icon: Target,
      title: "Precision Optimization",
      description: "Hyperparameter tuning and model optimization for maximum accuracy and performance."
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Intuitive interfaces that enable seamless collaboration between humans and AI systems."
    }
  ];

  const mlServices = [
    {
      title: "Supervised Learning",
      description: "Classification, regression, and prediction models trained on labeled data for accurate forecasting.",
      icon: Target
    },
    {
      title: "Unsupervised Learning",
      description: "Pattern discovery and clustering algorithms that find hidden structures in unlabeled data.",
      icon: Lightbulb
    },
    {
      title: "Reinforcement Learning",
      description: "AI agents that learn optimal strategies through trial and error and reward systems.",
      icon: Rocket
    },
    {
      title: "Deep Learning",
      description: "Multi-layered neural networks for complex tasks like image recognition and natural language processing.",
      icon: Network
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Medical diagnosis, drug discovery, and patient outcome prediction using AI models.",
      icon: Users
    },
    {
      title: "Finance",
      description: "Fraud detection, risk assessment, and algorithmic trading with machine learning.",
      icon: BarChart
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization.",
      icon: Cpu
    },
    {
      title: "Retail",
      description: "Customer segmentation, demand forecasting, and personalized recommendations.",
      icon: ShoppingCart
    }
  ];

  const benefits = [
    "Automate complex decision-making processes",
    "Extract insights from unstructured data",
    "Improve accuracy and reduce human error",
    "Scale operations without proportional cost increase",
    "Enable predictive capabilities for better planning",
    "Create competitive advantages through AI innovation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Brain className="w-8 h-8 text-cyan-500" />
            <span className="text-cyan-500 font-semibold">AI & Machine Learning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unleash the Power of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              {" "}Machine Learning
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI and machine learning solutions that automate processes, predict outcomes, and unlock unprecedented insights from your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced ML Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our machine learning platform provides enterprise-grade AI capabilities designed for real-world applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Machine Learning Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive machine learning solutions tailored to your specific business needs and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mlServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how machine learning transforms various industries and business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                </div>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI & Machine Learning?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative benefits of implementing AI and machine learning in your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge machine learning frameworks and tools for maximum performance and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">TensorFlow</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">PyTorch</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">AWS SageMaker</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">Kubernetes</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement Machine Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with the power of AI and machine learning. Get started today and unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200"
              >
                View Pricing
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}