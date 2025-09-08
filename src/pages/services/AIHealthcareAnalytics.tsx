  CheckSquare,
  FileCheck,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Eye,
  Monitor
      icon: Heart,
      title: "Patient Outcome Prediction",
      description: "AI models that predict patient outcomes and treatment effectiveness based on medical data."
      icon: Brain,
      title: "Predictive Diagnostics",
      description: "AI-powered early disease detection and risk assessment using advanced machine learning algorithms"
      icon: Brain,
      description: "Comprehensive analysis of population health trends and disease patterns"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and full HIPAA compliance for patient data protection"
      icon: Users,
      title: "Care Coordination",
      description: "AI-powered care coordination that optimizes patient care pathways and resource allocation."
    }
  ];

  const benefits = [
    "Improve patient outcomes by 25-40% with predictive analytics",
    "Reduce hospital readmissions by 30-50% through risk prediction",
    "Cut healthcare costs by 20-35% with optimized care pathways",
    "Enhance diagnostic accuracy by 15-30% with AI assistance",
    "Increase operational efficiency by 40-60% through automation",
    "Achieve 95%+ accuracy in patient risk assessment"
  ];

  const useCases = [
    {
      industry: "Hospitals",
      description: "Patient monitoring, readmission prediction, and resource optimization",
      metrics: ["Patient Outcomes", "Readmission Rate", "Resource Utilization"]
    },
    {
      industry: "Primary Care",
      description: "Preventive care, chronic disease management, and early intervention",
      metrics: ["Prevention Rate", "Disease Progression", "Patient Engagement"]
    },
    {
      industry: "Specialty Clinics",
      description: "Treatment optimization, outcome prediction, and patient stratification",
      metrics: ["Treatment Success", "Patient Satisfaction", "Clinical Efficiency"]
    },
    {
      industry: "Health Systems",
      description: "Population health management, care coordination, and quality improvement",
      metrics: ["Population Health", "Care Coordination", "Quality Metrics"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,000",
      period: "/month",
      description: "Perfect for small healthcare practices starting with AI analytics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Patient monitoring",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Ideal for growing healthcare organizations with advanced analytics needs",
      features: [
        "Up to 10,000 patients",
        "Advanced AI models",
        "Real-time monitoring",
        "Population analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large health systems with complex analytics requirements",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "API access"
      ]
    }
  ];

  return (
      description: "AI-powered clinical recommendations and treatment optimization suggestions"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$799",
      period: "/month",
      description: "For individual healthcare providers and small clinics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Standard monitoring tools",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$2,499",
      period: "/month",
      description: "Ideal for hospitals and large healthcare facilities",
      features: [
        "Up to 10,000 patients",
        "Advanced AI diagnostics",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "API integration",
        "Multi-department access",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For healthcare systems and large organizations",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Custom integrations",
        "On-premise deployment",
        "Advanced security",
        "Compliance automation"
      ],
      cta: "Contact Sales",
      popular: false
    {
      icon: Heart,
      title: "Improved Patient Outcomes",
      description: "Early detection and intervention lead to better treatment results and patient recovery"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce healthcare costs by preventing complications and optimizing resource allocation"
    },
    {
      icon: Clock,
      title: "Faster Diagnosis",
      description: "AI-powered analysis reduces diagnosis time from days to minutes"
    },
    {
      icon: Users,
      title: "Enhanced Care Coordination",
      description: "Better communication and coordination between healthcare teams and departments"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential health risks before they become critical issues"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions based on comprehensive healthcare analytics and trends"
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            AI-Powered Healthcare Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Analytics</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize healthcare delivery with AI-powered analytics. Predict, prevent, and optimize patient care with unprecedented accuracy and insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              to="/request-demo"
              className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-400">Diagnostic Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-gray-400">Faster Diagnosis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Healthcare Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice.
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Healthcare Analytics?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers who are already leveraging AI to improve patient outcomes and operational efficiency.
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Schedule Demo
    </div>
  );
}
        </div>
      </section>
        </div>
      </section>
    </div>
  );
}
