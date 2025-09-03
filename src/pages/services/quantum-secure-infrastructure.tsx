import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ;
  Shield, Cpu, Lock, Zap, Server, Cloud, Database,
  Network, Brain, CheckCircle, ArrowRight, Star,
  Phone, Mail, MapPin, Settings, Monitor, Activity,
  TrendingUp, Award, Rocket, Lightbulb, AlertTriangle,
  Globe, Smartphone, Users, BarChart3;
} from "lucide-react";

const QuantumSecureInfrastructure = () => {;
  const features = [ "Quantum-Resistant Encryption",
    "Post-Quantum Cryptography Implementation",
    "Quantum Key Distribution (QKD)",
    "Zero-Trust Architecture",
    "Advanced Threat Detection",
    "Quantum-Safe Communication Protocols",
    "Immutable Security Logging",
    "Quantum-Enhanced Authentication" ];

  const benefits = [ "Protect against quantum computing threats",
    "Future-proof your security infrastructure",
    "Reduce security vulnerabilities by 99.9%",
    "Ensure compliance with quantum-safe standards",
    "Implement zero-trust security model",
    "Achieve military-grade security standards" ];

  const useCases = [ "Financial Services Security",
    "Government Infrastructure Protection",
    "Healthcare Data Security",
    "Critical Infrastructure Defense",
    "Military and Defense Systems",
    "Enterprise Data Protection" ];

  const pricing = [;
    {;
      name: "Standard",
      price: "$15,000",
      details: ["Quantum-resistant encryption", "Basic QKD implementation", "Standard monitoring", "Email support", "99.9% uptime SLA"];
},
    {;
      name: "Enterprise",
      price: "$35,000",
      details: ["Full quantum-safe infrastructure", "Advanced QKD network", "Custom monitoring", "Priority support", "99.99% uptime SLA"];
},
    {;
      name: "Government",
      price: "$75,000",
      details: ["Military-grade quantum security", "Custom QKD solutions", "White-label implementation", "24/7 dedicated support", "99.999% uptime SLA"];
}
  ];

  return (;
    <>;
      <Head>;
        <title>Quantum Secure Infrastructure - Zion Tech Group</title>;
        <meta name="description" content="Future-proof quantum-secure infrastructure that protects against quantum computing threats with military-grade security and post-quantum cryptography." />;
        <meta name="keywords" content="quantum security, post-quantum cryptography, quantum key distribution, zero-trust architecture, quantum-safe infrastructure" />;
      </Head>;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 py-20 text-center">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <Shield className="w-4 h-4 mr-2" />;
              Quantum-Safe Security Infrastructure;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">;
              Quantum Secure Infrastructure;
            </h1>;
            <p className="text-indigo-100 text-xl max-w-3xl mx-auto">;
              Future-proof your organization with quantum-secure infrastructure that protects against quantum computing threats using post-quantum cryptography and military-grade security standards.;
            </p>;
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">;
                Get Security Assessment;
              </Link>;
              <Link href="#demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
                Request Demo;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum-Safe Security Features</h2>;
            <p className="text-gray-600 text-lg">Advanced quantum-resistant technologies that protect your infrastructure from future threats</p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {features.map((feature, index) => (;
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">;
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">;
                  <Shield className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>;
                <p className="text-gray-600 text-sm">Military-grade quantum-resistant security that future-proofs your infrastructure</p>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Security Advantages</h2>;
              <p className="text-gray-600 text-lg">Protect your organization from the quantum computing revolution</p>;
            </div>;
            <div className="grid md:grid-cols-2 gap-8">;
              <div>;
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>;
                <ul className="space-y-4">;
                  {benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
              <div className="bg-white rounded-xl p-6 shadow-lg">;
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Use Cases</h3>;
                <ul className="space-y-3">;
                  {useCases.map((useCase, index) => (;
                    <li key={index} className="flex items-center">;
                      <Lock className="w-4 h-4 text-indigo-500 mr-3" />;
                      <span className="text-gray-700">{useCase}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Quantum Technology Overview */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum-Safe Technology Stack</h2>;
            <p className="text-gray-600 text-lg">Built on cutting-edge quantum-resistant technologies</p>;
          </div>;
          <div className="grid md:grid-cols-3 gap-8">;
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">;
                <Cpu className="w-6 h-6 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Quantum Cryptography</h3>;
              <p className="text-gray-600">Implementation of NIST-approved post-quantum cryptographic algorithms that resist quantum computer attacks.</p>;
            </div>;
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">;
                <Network className="w-6 h-6 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Key Distribution</h3>;
              <p className="text-gray-600">Secure key exchange using quantum mechanics principles that detect any eavesdropping attempts.</p>;
            </div>;
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">;
                <Shield className="w-6 h-6 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero-Trust Architecture</h3>;
              <p className="text-gray-600">Comprehensive zero-trust security model that verifies every access request and transaction.</p>;
            </div>;
          </div>;
        </section>;

        {/* Pricing Section */}
        <section className="bg-gray-50 py-16">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Security Investment Plans</h2>;
              <p className="text-gray-600 text-lg">Protect your organization with quantum-safe infrastructure</p>;
            </div>;
            <div className="grid md:grid-cols-3 gap-8">;
              {pricing.map((tier, index) => (;
                <div key={index} className={`rounded-xl p-6 shadow-lg ${tier.name === 'Enterprise' ? 'border-2 border-indigo-500 bg-indigo-50' : 'border border-gray-200 bg-white'}`}>;
                  {tier.name === 'Enterprise' && (;
                    <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">;
                      Most Popular;
                    </div>;
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>;
                  <div className="text-3xl font-bold text-indigo-600 mb-4">{tier.price}</div>;
                  <ul className="space-y-3 mb-6">;
                    {tier.details.map((detail, detailIndex) => (;
                      <li key={detailIndex} className="flex items-center">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />;
                        <span className="text-gray-700">{detail}</span>;
                      </li>;
                    ))}
                  </ul>;
                  <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${;
                    tier.name === 'Enterprise' ;
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' ;
                      : 'bg-gray-900 text-white hover:bg-gray-800';
}`}>;
                    Get Started;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-16">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>;
              <p className="text-gray-300 text-lg">Contact our quantum security experts today</p>;
            </div>;
            <div className="grid md:grid-cols-2 gap-8">;
              <div>;
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>;
                <div className="space-y-4">;
                  <div className="flex items-center">;
                    <Phone className="w-5 h-5 text-indigo-400 mr-3" />;
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>;
                  </div>;
                  <div className="flex items-center">;
                    <Mail className="w-5 h-5 text-indigo-400 mr-3" />;
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>;
                  </div>;
                  <div className="flex items-center">;
                    <MapPin className="w-5 h-5 text-indigo-400 mr-3" />;
                    <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>;
                  </div>;
                </div>;
              </div>;
              <div className="bg-white rounded-xl p-6">;
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Schedule Security Assessment</h3>;
                <p className="text-gray-600 mb-4">Get a comprehensive quantum security assessment for your organization</p>;
                <Link href="https://ziontechgroup.com/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">;
                  Schedule Assessment;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}

export default QuantumSecureInfrastructure