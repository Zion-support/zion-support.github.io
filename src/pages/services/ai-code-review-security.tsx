import React from 'react.ts';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion.ts';

const AICodeReviewSecurity: React.FC = (): JSX.Element => {
  return (
    <>
      <SEO
        title="AI-Powered Code Review & Security Analysis | Zion Tech Group"
        description="Advanced AI-powered code review and security analysis platform. Detect vulnerabilities, bugs, and security issues with 85% accuracy improvement. Support for 50+ programming languages."
        keywords="AI code review, security analysis, vulnerability detection, SAST, DAST, SCA, IAST, code quality, security testing"
        canonical="https://ziontechgroup.com/services/ai-code-review-security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Code Review & Security Analysis
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced AI-driven code analysis platform that detects vulnerabilities, bugs, and security issues with unprecedented accuracy and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with industry-leading security practices to deliver comprehensive code analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Analysis",
                  description: "Machine learning algorithms that continuously improve detection accuracy based on code patterns and security trends.",
                  icon: "🤖"
                },
                {
                  title: "Vulnerability Detection",
                  description: "Advanced SAST, DAST, SCA, and IAST analysis to identify security weaknesses before they reach production.",
                  icon: "🔒"
                },
                {
                  title: "Bug Detection",
                  description: "Intelligent code review that catches logic errors, performance issues, and maintainability problems.",
                  icon: "🐛"
                },
                {
                  title: "Multi-Language Support",
                  description: "Support for 50+ programming languages including Python, JavaScript, Java, C++, Go, Rust, and more.",
                  icon: "🌐"
                },
                {
                  title: "Git Integration",
                  description: "Seamless integration with Git workflows, providing real-time feedback on pull requests and commits.",
                  icon: "📚"
                },
                {
                  title: "Real-Time Analysis",
                  description: "Instant feedback and continuous monitoring with configurable security policies and compliance checks.",
                  icon: "⚡"
                }
              ].map((feature, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Testing Approaches */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Testing Approaches
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple layers of security analysis to ensure your code is protected from all angles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
              {[
                {
                  title: "Static Application Security Testing (SAST)",
                  description: "Analyzes source code to identify security vulnerabilities, coding errors, and compliance issues without executing the application.",
                  benefits: ["Early vulnerability detection", "No runtime overhead", "Comprehensive code coverage"]
                },
                {
                  title: "Dynamic Application Security Testing (DAST)",
                  description: "Tests running applications to identify security vulnerabilities from an external attacker's perspective.",
                  benefits: ["Real-world attack simulation", "Runtime vulnerability detection", "External threat perspective"]
                },
                {
                  title: "Software Composition Analysis (SCA)",
                  description: "Identifies vulnerabilities in third-party dependencies, open-source components, and libraries.",
                  benefits: ["Dependency vulnerability tracking", "License compliance", "Supply chain security"]
                },
                {
                  title: "Interactive Application Security Testing (IAST)",
                  description: "Combines SAST and DAST approaches to provide real-time security analysis during application execution.",
                  benefits: ["Real-time analysis", "Accurate vulnerability detection", "Minimal false positives"]
                }
              ].map((approach, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{approach.title}</h3>
                  <p className="text-gray-300 mb-4">{approach.description}</p>
                  <ul className="space-y-2">
                    {approach.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-blue-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI-Powered Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented improvements in code quality, security, and development efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { metric: "85%", description: "Reduction in security vulnerabilities" },
                { metric: "70%", description: "Faster code review process" },
                { metric: "90%", description: "Fewer false positives" },
                { metric: "60%", description: "Reduction in security incidents" },
                { metric: "95%", description: "Code coverage accuracy" },
                { metric: "50%", description: "Faster time to market" }
              ].map((benefit, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <p className="text-white text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is trusted by leading organizations across various industries for their security needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
              {[
                {
                  industry: "Financial Services",
                  description: "Secure banking applications, payment systems, and trading platforms with compliance-focused security analysis.",
                  features: ["PCI DSS compliance", "SOX compliance", "Real-time fraud detection"]
                },
                {
                  industry: "Healthcare",
                  description: "Protect patient data and ensure HIPAA compliance in medical software and telemedicine platforms.",
                  features: ["HIPAA compliance", "Patient data protection", "Medical device security"]
                },
                {
                  industry: "E-commerce",
                  description: "Secure online shopping platforms, payment gateways, and customer data management systems.",
                  features: ["Payment security", "Customer data protection", "Fraud prevention"]
                },
                {
                  industry: "Government",
                  description: "Secure government applications, citizen portals, and critical infrastructure systems.",
                  features: ["FedRAMP compliance", "FISMA compliance", "National security standards"]
                }
              ].map((useCase, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-blue-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Stack & Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on industry-leading technologies and seamlessly integrates with your existing development workflow.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md: anygrid-cols-4 gap-6">
              {[
                "SonarQube", "Snyk", "CodeQL", "Veracode", "Checkmarx", "Fortify", "Coverity", "Bandit",
                "ESLint", "SonarLint", "GitHub Security", "GitLab Security", "Bitbucket Security", "Jenkins", "GitLab CI/CD", "GitHub Actions"
              ].map((tech, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your development team size and security requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
              {[
                {
                  name: "Developer",
                  price: "$49",
                  period: "/month",
                  description: "Perfect for individual developers and small projects",
                  features: [
                    "Up to 5 repositories",
                    "Basic vulnerability scanning",
                    "SAST analysis",
                    "Email support",
                    "GitHub integration",
                    "Weekly security reports"
                  ],
                  popular: false
                },
                {
                  name: "Team",
                  price: "$199",
                  period: "/month",
                  description: "Ideal for development teams and growing companies",
                  features: [
                    "Up to 25 repositories",
                    "Advanced vulnerability scanning",
                    "SAST, DAST, SCA analysis",
                    "Priority support",
                    "All Git platform integrations",
                    "Real-time security alerts",
                    "Custom security policies",
                    "Team collaboration tools"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$799",
                  period: "/month",
                  description: "Comprehensive solution for large organizations",
                  features: [
                    "Unlimited repositories",
                    "Full security testing suite",
                    "SAST, DAST, SCA, IAST",
                    "24/7 dedicated support",
                    "Custom integrations",
                    "Advanced compliance reporting",
                    "Security training modules",
                    "Dedicated security consultant"
                  ],
                  popular: false
                }
              ].map((plan, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-blue-400' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-4">
                All plans include a 14-day free trial. Annual plans save 20%.
              </p>
              <p className="text-gray-300">
                Need a custom plan? <span className="text-blue-400 cursor-pointer hover:underline">Contact us</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who trust our AI-powered platform to protect their applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📱 <span className="text-white">+1 302 464 0950</span></p>
                    <p>✉️ <span className="text-white">kleber@ziontechgroup.com</span></p>
                    <p>📍 <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span></p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Schedule Demo
                    </button>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Start Free Trial
                    </button>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Download Whitepaper
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-300">
                <p>Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeReviewSecurity;