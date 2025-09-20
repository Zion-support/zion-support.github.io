import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
  Target,
  BarChart3,
  Stethoscope,
  Database,
  Eye,
  Lock,
  AlertTriangle,
  Microscope,
  Pill
} from 'lucide-react';

const AIHealthcareAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data to predict outcomes and optimize treatment plans.",
      benefits: ["Predictive modeling", "Treatment optimization", "Risk assessment"]
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring and alerting for critical health indicators with AI-powered anomaly detection.",
      benefits: ["24/7 monitoring", "Early warning systems", "Automated alerts"]
    },
    {
      icon: Target,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient data, medical history, and clinical guidelines.",
      benefits: ["Evidence-based recommendations", "Patient-specific protocols", "Outcome optimization"]
    },
    {
      icon: BarChart3,
      title: "Clinical Decision Support",
      description: "Intelligent systems that assist healthcare providers in making informed clinical decisions.",
      benefits: ["Evidence synthesis", "Clinical guidelines", "Risk assessment"]
    },
    {
      icon: Shield,
      title: "Healthcare Security & Compliance",
      description: "Advanced security measures and compliance monitoring for healthcare data protection.",
      benefits: ["HIPAA compliance", "Data encryption", "Audit trails"]
    },
    {
      icon: TrendingUp,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and disease patterns for public health planning.",
      benefits: ["Epidemiological insights", "Resource planning", "Prevention strategies"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "Reduce diagnosis time by up to 40% with AI-powered analysis"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower healthcare costs through improved efficiency and early intervention"
    },
    {
      icon: Users,
      title: "Better Patient Outcomes",
      description: "Improve patient outcomes with personalized treatment plans"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect patient data with enterprise-grade security measures"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "per month",
      features: [
        "Up to 1,000 patient records",
        "Basic AI analytics",
        "Standard reporting",
        "Email support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      features: [
        "Up to 10,000 patient records",
        "Advanced AI algorithms",
        "Predictive analytics",
        "Real-time monitoring",
        "Priority support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      features: [
        "Unlimited patient records",
        "Custom AI models",
        "Advanced analytics dashboard",
        "API access",
        "Dedicated support team"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Analytics
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Transform healthcare delivery with AI-powered analytics that improve patient outcomes and operational efficiency
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI-Powered Healthcare Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Healthcare Analytics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  plan.recommended 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our AI experts help you implement intelligent healthcare analytics
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;
