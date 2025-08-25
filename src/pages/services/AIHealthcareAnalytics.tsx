import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Activity, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
  LineChart,
  Building
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
      title: "Real-time Monitoring",
      description: "Continuous monitoring of patient vital signs and health metrics with instant alerts for critical changes.",
      benefits: ["24/7 monitoring", "Early warning systems", "Real-time alerts"]
    },
    {
      icon: BarChart3,
      title: "Population Health Insights",
      description: "Comprehensive analytics that identify health trends, risk factors, and opportunities for preventive care.",
      benefits: ["Trend analysis", "Risk stratification", "Preventive strategies"]
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
      description: "Intelligent systems that provide evidence-based recommendations to healthcare providers for better patient care.",
      benefits: ["Evidence-based guidance", "Clinical pathways", "Best practice recommendations"]
    }
  ];

  const services = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis for personalized care and improved outcomes.",
      icon: Users,
      features: ["Individual risk assessment", "Treatment response prediction", "Personalized care plans", "Outcome tracking"]
    },
    {
      title: "Clinical Analytics",
      description: "Advanced analytics for clinical operations, quality improvement, and evidence-based medicine.",
      icon: Stethoscope,
      features: ["Clinical performance metrics", "Quality indicators", "Evidence synthesis", "Best practice identification"]
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization through data-driven insights and predictive modeling.",
      icon: Activity,
      features: ["Resource optimization", "Capacity planning", "Efficiency metrics", "Cost analysis"]
    },
    {
      title: "Research Analytics",
      description: "Research support tools that accelerate medical discoveries and clinical trial optimization.",
      icon: Microscope,
      features: ["Clinical trial analytics", "Research data mining", "Biomarker discovery", "Drug development support"]
    }
  ];

  const benefits = [
    {
      title: "Improve Patient Outcomes",
      value: "35%",
      description: "Better treatment effectiveness and patient recovery rates"
    },
    {
      title: "Reduce Readmissions",
      value: "25%",
      description: "Lower hospital readmission rates through predictive care"
    },
    {
      title: "Lower Healthcare Costs",
      value: "40%",
      description: "Reduced costs through preventive care and optimized treatments"
    },
    {
      title: "Increase Efficiency",
      value: "50%",
      description: "Improved operational efficiency and resource utilization"
    }
  ];

  const useCases = [
    {
      title: "Hospitals",
      description: "Comprehensive healthcare analytics for large medical centers and hospital systems.",
      icon: Building,
      features: ["Patient flow optimization", "Resource management", "Quality improvement", "Cost reduction"]
    },
    {
      title: "Clinics",
      description: "Analytics solutions for outpatient clinics and medical practices.",
      icon: Stethoscope,
      features: ["Patient management", "Appointment optimization", "Care coordination", "Outcome tracking"]
    },
    {
      title: "Research Institutions",
      description: "Advanced analytics for medical research and clinical trials.",
      icon: Microscope,
      features: ["Data analysis", "Trial optimization", "Biomarker discovery", "Publication support"]
    },
    {
      title: "Health Insurance",
      description: "Risk assessment and cost prediction for insurance companies.",
      icon: Shield,
      features: ["Risk modeling", "Cost prediction", "Fraud detection", "Claims optimization"]
    }
  ];

  const pricing = [
    {
      name: "Clinical",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Basic patient analytics",
        "Clinical performance metrics",
        "Standard reporting",
        "Email support",
        "Up to 1,000 patients"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,299",
      period: "/month",
      description: "Ideal for hospitals and larger healthcare organizations",
      features: [
        "Advanced patient analytics",
        "Population health insights",
        "Real-time monitoring",
        "Clinical decision support",
        "Priority support",
        "Unlimited patients"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,599",
      period: "/month",
      description: "Comprehensive solution for large healthcare systems",
      features: [
        "Custom AI models",
        "Full platform integration",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom training & onboarding",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered healthcare analytics that predict outcomes, optimize treatments, 
              and improve population health. Make data-driven decisions that save lives and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">35%</div>
              <div className="text-gray-400">Better Outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-400">Fewer Readmissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Transform Healthcare
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence with deep medical expertise 
              to deliver exceptional results for healthcare providers and patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-red-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From patient analytics to clinical research, our AI platform covers every aspect of modern healthcare analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Healthcare Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics solutions are tailored to meet the unique needs of different types of healthcare organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of AI-powered healthcare analytics on patient outcomes and organizational performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your healthcare organization's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking healthcare organizations that have already revolutionized patient care with AI. 
            Start improving outcomes today with intelligent healthcare analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
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