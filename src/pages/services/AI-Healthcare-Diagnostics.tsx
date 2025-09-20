import React from "react";
import { SEO } from "@/components/SEO";
import { 
  Heart,
  Brain, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  TrendingUp,
  BarChart3,
  Activity,
  Stethoscope,
  Microscope,
  X,
  Scan,
  FileText,
  Users,
  Zap
} from "lucide-react";
export default function AIHealthcareDiagnostics() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,title: "AI-Powered Diagnosis",description: "Advanced ML models analyze medical images with 96% accuracy, detecting diseases earlier than traditional methods."
    },
    {
      icon: <Eye className="w-6 h-6" />,title: "Multi-Modal Imaging",description: "Support for X-rays, CT scans, MRIs, and ultrasounds with unified AI analysis platform."
    },
    {
      icon: <Shield className="w-6 h-6" />,title: "HIPAA Compliant",description: "Enterprise-grade security with full HIPAA compliance and data encryption at rest and in transit."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,title: "Clinical Analytics",description: "Comprehensive reporting and analytics for clinical decision support and outcome tracking."
    }
  ];
  const pricingPlans = [
    {
      name: "Clinical",price: "$1,299",
      period: "/month",features: ["Up to 1,000 scans/month", "Basic AI diagnosis", "Email support", "Standard reporting"]
    },
    {
      name: "Enterprise",price: "$2,999",
      period: "/month",features: ["Unlimited scans", "Advanced AI models", "Priority support", "Custom integrations", "API access"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Healthcare Diagnostics Platform | Zion Tech Group"
        description="Transform healthcare with AI-powered medical imaging analysis, early disease detection, and clinical decision support. 96% accuracy, HIPAA compliant, and FDA ready."
        keywords="AI healthcare, medical imaging, diagnostics, radiology, clinical AI, medical AI"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              AI-Powered Healthcare
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Diagnostics Platform
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Revolutionize medical diagnostics with our advanced AI platform. 
            Detect diseases earlier, improve accuracy, and enhance clinical decision-making.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Diagnostics Demo Request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Features for <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">Modern Healthcare</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Healthcare <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Healthcare Diagnostics Pricing Inquiry"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 w-full justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">Healthcare</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join leading healthcare institutions using AI to improve patient outcomes and diagnostic accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Diagnostics Demo Request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}