import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Shield, Users, Zap, ArrowRight, CheckCircle, Star, Target, Lightbulb, Database, Cpu, Globe, Rocket, Activity, Stethoscope, Microscope, Pill } from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis"
    },
    {
      icon: Heart,
      title: "Patient Care Optimization",
      description: "Personalized treatment plans and predictive healthcare outcomes"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full healthcare compliance and data protection"
    },
    {
      icon: Users,
      title: "Clinical Decision Support",
      description: "AI-assisted clinical decision making for healthcare professionals"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alert systems"
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Forecast health trends and prevent adverse events proactively"
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 85%",
    "Reduce patient wait times by 60%",
    "Lower healthcare costs by 35%",
    "Enhance patient outcomes by 70%",
    "Streamline clinical workflows by 50%",
    "Increase patient satisfaction by 80%"
  ];

  const useCases = [
    {
      specialty: "Radiology",
      applications: ["Image Analysis", "Tumor Detection", "Fracture Identification", "Disease Classification"]
    },
    {
      specialty: "Cardiology",
      applications: ["ECG Analysis", "Heart Disease Prediction", "Risk Assessment", "Treatment Planning"]
    },
    {
      specialty: "Oncology",
      applications: ["Cancer Detection", "Treatment Response", "Prognosis Analysis", "Drug Discovery"]
    },
    {
      specialty: "Emergency Medicine",
      applications: ["Triage Optimization", "Critical Care", "Resource Allocation", "Outcome Prediction"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with our AI-powered platform. Enhance diagnostic accuracy, 
              optimize patient care, and improve clinical outcomes through intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-red-500/30 text-red-300 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with medical expertise to deliver unprecedented healthcare intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Healthcare Delivery with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI Healthcare Platform delivers measurable improvements across all aspects of patient care, 
                from diagnosis to treatment and follow-up care.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-8 border border-red-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">85%</div>
                    <div className="text-sm text-gray-300">Diagnostic Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                    <div className="text-sm text-gray-300">Faster Care</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">70%</div>
                    <div className="text-sm text-gray-300">Better Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI transforms healthcare across various medical specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/80">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg w-fit mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.specialty}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge medical AI technologies for maximum accuracy and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Deep Learning", description: "Neural networks for medical imaging" },
              { icon: Microscope, name: "Computer Vision", description: "Advanced image recognition" },
              { icon: Database, name: "Medical Data", description: "Secure patient data processing" },
              { icon: Cpu, name: "Edge Computing", description: "Real-time local processing" },
              { icon: Shield, name: "HIPAA Security", description: "Full compliance protection" },
              { icon: Zap, name: "Performance", description: "High-speed medical analysis" },
              { icon: Users, name: "Collaboration", description: "Multi-disciplinary teams" },
              { icon: Rocket, name: "Innovation", description: "Continuous medical AI advancement" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl border border-red-500/30 mb-4 group-hover:border-red-500/50 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-red-400 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/50 via-pink-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the AI healthcare revolution and transform patient care with our intelligent medical platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-red-500/30 text-red-300 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}