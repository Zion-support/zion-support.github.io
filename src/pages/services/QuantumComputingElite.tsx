import React from "react"
import { motion } from "framer-motion"
import { ;
  Atom,;
  Cpu, ;
  Zap, ;
  Brain, ;
  Users, ;
  Globe, ;
  Database,;
  Network,;
  Lock,;
  Eye,;
  Target,;
  Award,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Rocket,;
  Microscope,;
  TestTube;
} from "lucide-react"
const QuantumComputingElite: React.FC = () => {
  const features = [;
    {;
      icon: Atom,title: "Quantum Processing Units",description: "Access to 1000+ qubit quantum computers with error correction and quantum advantage algorithms"
    };
    {;
      icon: Brain,title: "AI-Quantum Hybrid Systems",description: "Combines quantum computing with AI for unprecedented computational power and problem-solving"
    };
    {;
      icon: Zap,title: "Quantum-Classical Integration",description: "Seamless integration between quantum and classical computing resources for optimal performance"
    };
    {;
      icon: Lock,title: "Quantum-Safe Cryptography",description: "Post-quantum cryptography solutions that protect against future quantum attacks"
    };
    {;
      icon: Users,title: "Multi-User Quantum Access",description: "Collaborative quantum computing with real-time sharing and resource optimization"
    };
    {;
      icon: Globe,title: "Global Quantum Network",description: "Access to quantum computers across multiple locations and cloud providers"
    };
  ];
  const pricing = [;
    {;
      name: "Quantum Starter",price: "$8,500",;
      period: "/month",description: "Perfect for research institutions and startups",features: [;
        "Up to 100 qubit access"
        "Basic quantum algorithms",;
        "Standard quantum simulators",;
        "Email support",;
        "5 user licenses",;
        "Basic quantum education"
      ];
    },;
    {;
      name: "Quantum Professional",price: "$18,000",;
      period: "/month",description: "Ideal for growing businesses and research teams",features: [;
        "Up to 500 qubit access"
        "Advanced quantum algorithms",;
        "Custom quantum circuits",;
        "Priority support",;
        "25 user licenses",;
        "API access",;
        "Quantum consulting"
      ],;
      popular: true;
    };
    {;
      name: "Quantum Enterprise",price: "$45,000",;
      period: "/month",description: "For large organizations with complex quantum needs",features: [;
        "Unlimited qubit access"
        "Full quantum suite",;
        "Custom quantum development",;
        "24/7 dedicated support",;
        "Unlimited users",;
        "White-label options",;
        "On-premise quantum computers"
      ];
    };
  ],;

  const quantumApplications = [;
    {;
      title: "Drug Discovery & Pharmaceuticals",description: "Quantum molecular modeling for faster drug discovery, protein folding, and chemical simulations"
    },;
    {;
      title: "Financial Modeling & Optimization",description: "Portfolio optimization, risk assessment, and algorithmic trading using quantum algorithms"
    },;
    {;
      title: "Machine Learning & AI",description: "Quantum machine learning algorithms for pattern recognition and data analysis"
    };
    {;
      title: "Cryptography & Security",description: "Quantum-resistant encryption and quantum key distribution for ultra-secure communications"
    };
    {;
      title: "Supply Chain Optimization",description: "Complex logistics optimization and route planning using quantum algorithms"
    };
    {;
      title: "Climate Modeling",description: "Advanced climate simulations and weather forecasting with quantum computing power"
    };
  ];
  const quantumTechnologies = [;
    "Superconducting Qubits",;
    "Trapped Ion Qubits",;
    "Topological Qubits",;
    "Photonic Qubits",;
    "Silicon Spin Qubits",;
    "Quantum Annealing",;
    "Quantum Error Correction",;
    "Quantum Memory Systems"
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Quantum Computing Elite;
            </[^>]*>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Access the future of computing with our cutting-edge quantum computing platform. ;
              Solve previously impossible problems with quantum advantage and AI-quantum hybrid systems.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Access Quantum Computing;
                <[^>]*/>
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Quantum Team;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Revolutionary Quantum Capabilities;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our quantum computing platform provides access to the most advanced quantum technologies;
              enabling breakthroughs in science, technology, and business.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</[^>]*>
                <p className="text-zion-slate-light">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Applications Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Quantum Computing Applications;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Discover how quantum computing is revolutionizing industries and solving previously ;
              impossible problems across various domains.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {quantumApplications.map((app, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{app.title}</[^>]*>
                <p className="text-zion-slate-light">{app.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Technologies Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced Quantum Technologies;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our platform supports multiple quantum computing approaches, ensuring optimal performance ;
              for different types of computational problems.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">;
            {quantumTechnologies.map((tech, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white">{tech}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Quantum Computing Plans;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose the quantum computing plan that fits your research and business needs. All plans include ;
              access to our quantum infrastructure and expert support.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`relative bg-zion-slate-dark p-8 rounded-xl border-2 ${;
                  plan.popular ;
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/25' ;
                    : 'border-zion-slate-light'
                }`};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                    <span className="text-zion-slate-light ml-1">{plan.period}</[^>]*>
                  </[^>]*>
                  <p className="text-zion-slate-light mt-2">{plan.description}</[^>]*>
                </[^>]*>

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <[^>]*/>
                      <span className="text-white">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>

                <a;
                  href="https://ziontechgroup.com/contact"
                  className="[^"]*"
                >;
                  Get Quantum Access;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready to Access Quantum Computing?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Get in touch with our quantum computing experts to discuss how quantum computing can ;
              accelerate your research and business objectives.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Call Quantum Team</[^>]*>
              <a ;
                href="tel:+13024640950" ;
                className="[^"]*"
              >;
                +1 (302) 464-0950;
              </[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Email Quantum Team</[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com" ;
                className="[^"]*"
              >;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-fit mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Quantum Center</[^>]*>
              <p className="text-zion-slate-light">;
                364 E Main St STE 1008<[^>]*/>
                Middletown, DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="text-center">;
            <a;
              href="https: //ziontechgroup.com/contact"
              className="[^"]*"
            >;
              Schedule Quantum Demo;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Footer */};
      <footer className="py-12 px-4 sm: px-6 lg:px-8 border-t border-zion-slate-light">;
        <div className="max-w-7xl mx-auto text-center">;
          <p className="text-zion-slate-light mb-4">;
            © 2024 Zion Tech Group. All rights reserved.;
          </[^>]*>
          <div className="flex justify-center space-x-6">;
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Visit Website;
              <[^>]*/>
            </[^>]*>
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Privacy Policy;
            </[^>]*>
            <a ;
              href="https://[^;]*
              className="[^"]*"
            >;
              Terms of Service;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default QuantumComputingElite;