import React from 'react';
import {
  FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Scale,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle as CheckCircle2,
  AlertTriangle as AlertTriangle2,
  Lock as Lock2,
  Eye as Eye2,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const termsSections = [
    {
      icon: FileText,
      title: "Service Agreement",
      description: "Terms governing the use of our technology services and solutions."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "How we protect and handle your personal information."
    },
    {
      icon: Users,
      title: "User Responsibilities",
      description: "Your obligations when using our services."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "International laws and regulations that apply."
    }
  ];

  const userObligations = [
    {
      obligation: "Account Security",
      description: "Maintain the confidentiality of your account credentials and notify us of any unauthorized access."
    },
    {
      obligation: "Acceptable Use",
      description: "Use our services only for lawful purposes and in accordance with these terms."
    },
    {
      obligation: "Compliance",
      description: "Comply with all applicable laws and regulations when using our services."
    }
  ];

  const prohibitedActivities = [
    "Transmitting harmful code or malware",
    "Violating intellectual property rights",
    "Engaging in illegal activities",
    "Attempting to gain unauthorized access",
    "Interfering with service operations"
  ];

  const serviceLevels = [
    {
      level: "Basic Support",
      description: "Email support during business hours",
      response: "24-48 hours",
      included: true
    },
    {
      level: "Premium Support",
      description: "Priority email and phone support",
      response: "4-8 hours",
      included: false
    },
    {
      level: "Enterprise Support",
      description: "24/7 dedicated support with SLA",
      response: "1-2 hours",
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our technology services and solutions."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully
              before using our technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these fundamental terms helps ensure a smooth
              relationship between you and Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities
              that help ensure a secure and productive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-gray-300">{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Last Updated</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To maintain a secure and professional environment, certain activities
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle2 className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <AlertTriangle2 className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">First Offense</span>
                    <span className="text-yellow-400">Warning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Second Offense</span>
                    <span className="text-orange-400">Suspension</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Third Offense</span>
                    <span className="text-red-400">Termination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Levels & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide different levels of support to meet your business needs
              and ensure optimal service delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceLevels.map((level, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{level.level}</h3>
                    {level.included && (
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-center mb-4">{level.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-400">Response Time:</span>
                    <div className="text-lg font-semibold text-white">{level.response}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about these terms or need clarification,
              please contact our legal team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">legal@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms.
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;