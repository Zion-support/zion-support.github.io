import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Clock, Cpu, Zap, Target, Award, Users } from 'lucide-react';

const QuantumAIHybridComputing = () => {
  return (
    <>
      <Helmet>
        <title>Quantum-AI Hybrid Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Leverage the power of quantum-AI hybrid computing to solve complex optimization problems, accelerate machine learning, and gain competitive advantages in your industry." />
        <meta name="keywords" content="quantum computing, AI hybrid, quantum machine learning, optimization algorithms, quantum advantage, enterprise quantum" />
        <meta property="og:title" content="Quantum-AI Hybrid Computing Solutions - Zion Tech Group" />
        <meta property="og:description" content="Unlock the potential of quantum-AI hybrid computing for practical business applications." />
        <meta property="og:type" content="service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantum-AI Hybrid Computing Solutions - Zion Tech Group" />
        <meta name="twitter:description" content="Unlock the potential of quantum-AI hybrid computing for practical business applications." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Next-Generation Computing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Quantum-AI Hybrid Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Unlock the power of quantum computing combined with artificial intelligence to solve 
                complex optimization problems and accelerate machine learning with measurable business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
                >
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quantum Advantage for Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Quantum-AI Hybrid Computing solutions deliver practical business value through 
                advanced optimization, machine learning acceleration, and specialized algorithms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">40-80% Performance Boost</h3>
                <p className="text-gray-600">
                  Quantum-AI hybrid algorithms deliver significant performance improvements in optimization 
                  and machine learning tasks, with measurable results in 12-18 months.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3-5x Faster Problem Solving</h3>
                <p className="text-gray-600">
                  Complex optimization problems that would take hours or days with classical computing 
                  can be solved in minutes using quantum-AI hybrid approaches.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Applications</h3>
                <p className="text-gray-600">
                  Real-world implementations in supply chain optimization, financial portfolio management, 
                  drug discovery, and machine learning acceleration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Practical Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Quantum-AI Hybrid Computing solutions address real-world challenges across multiple industries 
                with proven results and measurable business impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain Optimization</h3>
                    <p className="text-gray-600">
                      Quantum-AI algorithms optimize complex supply chain networks with thousands of variables, 
                      reducing costs by 35% and improving delivery times by 50%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Portfolio Optimization</h3>
                    <p className="text-gray-600">
                      Advanced portfolio optimization using quantum algorithms to balance risk and return 
                      across multiple objectives, delivering superior investment performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Drug Discovery Acceleration</h3>
                    <p className="text-gray-600">
                      Quantum simulation accelerates molecular modeling and drug discovery processes, 
                      reducing development time by 60% and improving success rates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Machine Learning Enhancement</h3>
                    <p className="text-gray-600">
                      Quantum machine learning algorithms provide advantages in specific domains, 
                      particularly where quantum feature maps offer computational benefits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Results</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Performance Improvement</span>
                    <span className="text-2xl font-bold text-purple-600">40-80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time to ROI</span>
                    <span className="text-2xl font-bold text-blue-600">12-18 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Problem Solving Speed</span>
                    <span className="text-2xl font-bold text-green-600">3-5x faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="text-2xl font-bold text-orange-600">25-40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions leverage cutting-edge quantum computing hardware and sophisticated AI algorithms 
                to deliver practical business value today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">NISQ Devices</h3>
                <p className="text-gray-600 text-sm">
                  Noisy Intermediate-Scale Quantum devices enabling practical applications with current technology.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hybrid Algorithms</h3>
                <p className="text-gray-600 text-sm">
                  Quantum-classical hybrid algorithms that deliver quantum advantage while leveraging classical robustness.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamless integration with cloud-based quantum computing services for scalable deployment.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-gray-600 text-sm">
                  Real-time quantum processing capabilities for time-sensitive applications and decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading organizations are leveraging Quantum-AI Hybrid Computing to gain competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Logistics Giant</h4>
                    <p className="text-sm text-gray-600">Fortune 500 Company</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Quantum-AI optimization reduced transportation costs by 35% and improved delivery times by 50% 
                  across our global network."
                </p>
                <div className="text-2xl font-bold text-purple-600">35% Cost Reduction</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Investment Firm</h4>
                    <p className="text-sm text-gray-600">Financial Services</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Quantum portfolio optimization delivered 40% better risk-adjusted returns while maintaining 
                  our risk management standards."
                </p>
                <div className="text-2xl font-bold text-blue-600">40% Better Returns</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pharmaceutical Company</h4>
                    <p className="text-sm text-gray-600">Healthcare & Life Sciences</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Quantum simulation accelerated our drug discovery process by 60%, enabling faster 
                  time-to-market for critical treatments."
                </p>
                <div className="text-2xl font-bold text-green-600">60% Faster Discovery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our structured approach ensures successful deployment of Quantum-AI Hybrid Computing solutions 
                with minimal risk and maximum business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
                <p className="text-gray-600">
                  Evaluate your current systems and identify quantum advantage opportunities 
                  for optimization and machine learning tasks.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proof of Concept</h3>
                <p className="text-gray-600">
                  Develop small-scale proofs of concept using cloud-based quantum computing 
                  to validate approaches and measure improvements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integration</h3>
                <p className="text-gray-600">
                  Integrate quantum algorithms with existing AI and classical systems, 
                  ensuring seamless operation and fallback capabilities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization</h3>
                <p className="text-gray-600">
                  Scale successful implementations and continuously optimize algorithms 
                  as quantum hardware capabilities improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Quantum Advantage?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Discover how Quantum-AI Hybrid Computing can transform your business operations and 
              deliver measurable competitive advantages. Start your quantum journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                Start Your Quantum Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumAIHybridComputing;