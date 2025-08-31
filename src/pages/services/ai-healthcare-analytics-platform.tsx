import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Globe, 
  Eye,
  Clock,
  Star,
  Lock,
  Cpu,
  Workflow,
  Bot,
  Sparkles,
  Database,
  Network,
  Settings,
  Users,
  Target,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  MessageSquare,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Cloud,
  Key,
  Fingerprint,
  ShieldCheck,
  Zap as Lightning,
  Target as Bullseye,
  TrendingDown,
  PieChart as ChartPie,
  BarChart2,
  Activity as Pulse,
  Stethoscope,
  Pill,
  Microscope,
  Syringe,
  Thermometer,
  Bandage,
  HeartPulse,
  BrainCircuit,
  Dna,
  TestTube
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcareAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis Support",
      description: "Advanced machine learning algorithms analyze patient data, medical images, and clinical notes to assist healthcare providers with accurate diagnoses.",
      benefits: ["Image recognition", "Natural language processing", "Pattern analysis", "Clinical decision support"]
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Predict patient outcomes, disease progression, and readmission risks using comprehensive health data analysis and machine learning models.",
      benefits: ["Risk stratification", "Outcome prediction", "Early intervention", "Resource optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Health Monitoring",
      description: "Continuous monitoring of patient vital signs, medication adherence, and health trends with instant alerts for critical changes.",
      benefits: ["Real-time alerts", "Vital sign monitoring", "Medication tracking", "Trend analysis"]
    },
    {
      icon: Shield,
      title: "HIPAA & FDA Compliant",
      description: "Enterprise-grade security with full HIPAA compliance, FDA approval pathways, and advanced data protection for sensitive health information.",
      benefits: ["HIPAA compliance", "FDA approval", "Data encryption", "Audit trails"]
    },
    {
      icon: Zap,
      title: "Automated Clinical Workflows",
      description: "Streamline clinical processes with intelligent automation, reducing administrative burden and improving patient care efficiency.",
      benefits: ["Workflow automation", "Documentation assistance", "Scheduling optimization", "Billing automation"]
    },
    {
      icon: Globe,
      title: "Interoperability & Integration",
      description: "Seamless integration with existing EHR systems, medical devices, and healthcare applications for unified data access.",
      benefits: ["EHR integration", "Device connectivity", "API access", "Standard compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Up to 50 providers",
        "Basic AI diagnostics",
        "Standard analytics",
        "Email support",
        "Basic integrations",
        "HIPAA compliance",
        "Monthly reports",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,999",
      period: "/month",
      description: "Ideal for hospitals",
      features: [
        "Up to 500 providers",
        "Advanced AI algorithms",
        "Real-time monitoring",
        "Priority support",
        "Full integrations",
        "Custom dashboards",
        "Predictive analytics",
        "API access",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large health systems",
      features: [
        "Unlimited providers",
        "Custom AI models",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Custom integrations",
        "Advanced compliance",
        "SLA guarantees",
        "Dedicated manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const healthcareSolutions = [
    {
      title: "Diagnostic Imaging",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and other medical images for faster, more accurate diagnoses.",
      applications: ["Radiology", "Cardiology", "Oncology", "Neurology", "Orthopedics", "Emergency Medicine"]
    },
    {
      title: "Clinical Decision Support",
      description: "Intelligent systems that provide evidence-based recommendations to healthcare providers for better patient outcomes.",
      applications: ["Treatment planning", "Medication management", "Risk assessment", "Clinical guidelines", "Evidence synthesis", "Quality improvement"]
    },
    {
      title: "Population Health Management",
      description: "Comprehensive analytics for managing population health, identifying at-risk patients, and improving community health outcomes.",
      applications: ["Chronic disease management", "Preventive care", "Social determinants", "Health equity", "Outcome tracking", "Resource allocation"]
    }
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full compliance with Health Insurance Portability and Accountability Act requirements for patient data protection.",
      features: ["Data encryption", "Access controls", "Audit logging", "Business associate agreements"]
    },
    {
      icon: CheckSquare,
      title: "FDA Approval Pathways",
      description: "Support for FDA approval processes including 510(k), De Novo, and PMA pathways for medical software.",
      features: ["Regulatory guidance", "Documentation support", "Clinical validation", "Quality management"]
    },
    {
      icon: Lock,
      title: "SOC 2 Type II",
      description: "Service Organization Control 2 Type II certification ensuring security, availability, and confidentiality.",
      features: ["Security controls", "Availability monitoring", "Confidentiality protection", "Regular audits"]
    },
    {
      icon: Globe,
      title: "International Standards",
      description: "Compliance with international healthcare standards including GDPR, ISO 27001, and regional regulations.",
      features: ["GDPR compliance", "ISO standards", "Regional regulations", "Data residency"]
    }
  ];

  const useCases = [
    {
      title: "Hospitals & Health Systems",
      description: "Improve patient outcomes and operational efficiency with AI-powered clinical decision support and predictive analytics.",
      metrics: ["25% reduction in readmissions", "30% faster diagnosis", "40% improvement in care coordination", "20% cost reduction"]
    },
    {
      title: "Specialty Clinics",
      description: "Enhance diagnostic accuracy and treatment planning with specialized AI tools for specific medical specialties.",
      metrics: ["95% diagnostic accuracy", "50% faster reporting", "60% reduction in errors", "Improved patient satisfaction"]
    },
    {
      title: "Research Institutions",
      description: "Accelerate medical research with AI-powered data analysis, pattern recognition, and clinical trial optimization.",
      metrics: ["3x faster research cycles", "90% data accuracy", "Improved trial outcomes", "Enhanced collaboration"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered analytics, diagnostic support, and predictive insights. Improve patient outcomes, reduce costs, and enhance clinical decision-making with HIPAA-compliant solutions." />
        <meta name="keywords" content="AI healthcare, healthcare analytics, medical AI, clinical decision support, diagnostic imaging, population health, HIPAA compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Healthcare
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare Analytics
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Platform</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare with AI-powered analytics, diagnostic support, and predictive insights. 
                Improve patient outcomes, reduce costs, and enhance clinical decision-making with HIPAA-compliant solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  HIPAA compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  FDA approval ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                AI-powered tools designed specifically for healthcare providers, researchers, and administrators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {healthcareSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-slate-400 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Features That Drive Results
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with proven healthcare methodologies 
                to deliver measurable clinical and operational outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Compliance & Security
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built for healthcare with the highest standards of security, privacy, and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFeatures.map((compliance, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <compliance.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{compliance.title}</h3>
                  <p className="text-slate-400 mb-4">{compliance.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {compliance.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results Across Healthcare
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how our AI Healthcare Analytics Platform delivers measurable outcomes for organizations like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-400 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your healthcare organization. All plans include our core AI features and 30-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of healthcare organizations that have already improved patient outcomes with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-emerald-400 hover:text-emerald-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}