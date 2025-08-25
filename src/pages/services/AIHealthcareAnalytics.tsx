import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  BarChart3, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Search,
  UserCheck,
  Calendar,
  Award,
  Briefcase,
  Globe,
  Lock,
  Database,
  Activity,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
  CheckSquare,
  FileCheck,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Eye,
  Monitor
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data for predictive insights."
    },
    {
      icon: Activity,
      title: "Real-Time Health Monitoring",
      description: "Continuous monitoring and analysis of patient vital signs and health metrics."
    },
    {
      icon: BarChart3,
      title: "Predictive Health Analytics",
      description: "Data-driven predictions for disease progression and treatment outcomes."
    },
    {
      icon: Zap,
      title: "Automated Diagnosis Support",
      description: "AI-assisted diagnostic tools that help healthcare professionals make informed decisions."
    },
    {
      icon: Users,
      title: "Population Health Management",
      description: "Comprehensive analytics for managing health outcomes across patient populations."
    },
    {
      icon: Clock,
      title: "Treatment Optimization",
      description: "AI-powered recommendations for personalized treatment plans and medication management."
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 85%",
    "Reduce treatment costs by 30-40%",
    "Enhance patient outcomes by 60%",
    "Streamline clinical workflows by 70%",
    "Automate 75% of routine analytics tasks",
    "Enable proactive healthcare interventions"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Basic AI patient analytics",
        "Health monitoring tools",
        "Basic reporting dashboard",
        "Up to 1,000 patients",
        "Email support",
        "Standard integrations"
      ]
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing practices",
      features: [
        "Advanced AI analytics",
        "Predictive health insights",
        "Population health management",
        "Up to 10,000 patients",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Full AI healthcare suite",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated account manager",
        "Unlimited patients",
        "24/7 phone support",
        "Custom development"
      ]
    }
  ];

  const useCases = [
    {
      title: "Clinical Decision Support",
      description: "AI-powered diagnostic assistance and treatment recommendations for healthcare providers.",
      icon: Stethoscope
    },
    {
      title: "Patient Risk Assessment",
      description: "Predictive analytics for identifying high-risk patients and preventive interventions.",
      icon: AlertTriangle
    },
    {
      title: "Treatment Optimization",
      description: "Personalized treatment plans based on patient data and AI analysis.",
      icon: Pill
    },
    {
      title: "Population Health",
      description: "Comprehensive analytics for managing health outcomes across patient populations.",
      icon: Users
    }
  ];

  const healthcareProcesses = [
    {
      step: "01",
      title: "Data Collection",
      description: "Secure collection of patient data from multiple sources"
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced AI algorithms analyze health patterns and trends"
    },
    {
      step: "03",
      title: "Risk Assessment",
      description: "Predictive modeling for patient risk identification"
    },
    {
      step: "04",
      title: "Treatment Planning",
      description: "AI-powered treatment recommendations and optimization"
    },
    {
      step: "05",
      title: "Monitoring & Tracking",
      description: "Continuous health monitoring and outcome tracking"
    },
    {
      step: "06",
      title: "Performance Analytics",
      description: "Comprehensive reporting and performance insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered analytics that predict health outcomes, 
              optimize treatments, and enable proactive healthcare interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features for Modern Healthcare
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence 
              with proven medical expertise to deliver exceptional patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Healthcare Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From data collection to treatment optimization, our AI streamlines every aspect of healthcare delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareProcesses.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented improvements in patient care and healthcare efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Healthcare Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform adapts to your specific medical practice and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/50 transform scale-105'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of healthcare providers who have already revolutionized patient care with AI analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-red-500 hover:text-red-400 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}