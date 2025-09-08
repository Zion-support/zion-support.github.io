import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Heart, Stethoscope, Users, Target, Database, Globe, Rocket, Eye, Clock, Cloud, Network, Lightbulb, Layers, Shield, Zap, Cpu, Monitor, PieChart, BarChart, LineChart, Activity, Pill, Microscope, Hospital, UserCheck, AlertTriangle } from 'lucide-react';

const AIAutonomousHealthcare: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Healthcare - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with our AI Autonomous Healthcare platform. Intelligent diagnosis, treatment planning, and patient care automation." />
        <meta name="keywords" content="AI autonomous healthcare, medical AI, healthcare automation, intelligent diagnosis, autonomous patient care" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-healthcare" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with intelligent medical systems that provide accurate diagnosis, personalized treatment plans, and autonomous patient care management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Healthcare Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Healthcare Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Intelligent Healthcare Ecosystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered healthcare platform creates a comprehensive ecosystem that enhances medical decision-making, improves patient outcomes, and optimizes healthcare delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Autonomous Medical Intelligence
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  AI systems that understand medical data, provide diagnostic insights, and create personalized treatment plans with continuous learning and improvement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Intelligent diagnosis and treatment recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Personalized patient care and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Predictive analytics for preventive care</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg text-center">
                    <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">AI Core</h4>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg text-center">
                    <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Data Mgmt</h4>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg text-center">
                    <Stethoscope className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Diagnosis</h4>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-lg text-center">
                    <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Patient Care</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Healthcare Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI-powered tools that transform every aspect of healthcare delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Diagnosis</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered diagnostic systems that analyze medical data and provide accurate diagnosis recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical imaging analysis</li>
                  <li>• Symptom assessment</li>
                  <li>• Differential diagnosis</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Pill className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Planning</h3>
                <p className="text-gray-600 mb-4">
                  Personalized treatment plans based on patient data, medical history, and evidence-based medicine.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized protocols</li>
                  <li>• Drug interaction checking</li>
                  <li>• Treatment optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Continuous patient monitoring with real-time alerts and predictive analytics for early intervention.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vital signs monitoring</li>
                  <li>• Early warning systems</li>
                  <li>• Remote patient care</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Microscope className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Research</h3>
                <p className="text-gray-600 mb-4">
                  AI-enhanced medical research with data analysis, pattern recognition, and hypothesis generation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data analysis</li>
                  <li>• Pattern recognition</li>
                  <li>• Clinical trial support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Hospital className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital Management</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent hospital operations with resource optimization and workflow automation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resource allocation</li>
                  <li>• Workflow optimization</li>
                  <li>• Capacity planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced health analytics with population health insights and predictive modeling.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Population health</li>
                  <li>• Predictive modeling</li>
                  <li>• Outcome analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Specialties */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Medical Specialties & Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform supports a wide range of medical specialties and healthcare applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cardiology</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered cardiac diagnostics with ECG analysis and heart disease prediction.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ECG analysis</li>
                  <li>• Heart disease prediction</li>
                  <li>• Cardiac monitoring</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neurology</h3>
                <p className="text-gray-600 mb-4">
                  Neurological disorder diagnosis and treatment planning with AI-enhanced analysis.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Brain imaging analysis</li>
                  <li>• Neurological assessment</li>
                  <li>• Treatment planning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Radiology</h3>
                <p className="text-gray-600 mb-4">
                  Advanced medical imaging analysis with AI-powered detection and diagnosis.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical imaging</li>
                  <li>• Disease detection</li>
                  <li>• Diagnostic support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Care</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive primary care with preventive medicine and chronic disease management.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preventive care</li>
                  <li>• Chronic disease management</li>
                  <li>• Health screening</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Medicine</h3>
                <p className="text-gray-600 mb-4">
                  Rapid emergency response with AI-powered triage and critical care support.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency triage</li>
                  <li>• Critical care support</li>
                  <li>• Rapid diagnosis</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Oncology</h3>
                <p className="text-gray-600 mb-4">
                  Cancer diagnosis and treatment with AI-enhanced precision medicine approaches.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cancer detection</li>
                  <li>• Treatment planning</li>
                  <li>• Precision medicine</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Autonomous Healthcare Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI systems guide healthcare professionals through intelligent diagnosis and treatment processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assess</h3>
                <p className="text-gray-600">
                  AI evaluates patient symptoms and medical history
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diagnose</h3>
                <p className="text-gray-600">
                  Intelligent diagnosis with differential analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Treat</h3>
                <p className="text-gray-600">
                  Personalized treatment planning and execution
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitor</h3>
                <p className="text-gray-600">
                  Continuous patient monitoring and outcome tracking
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the future of healthcare with AI-powered diagnosis, treatment, and patient care automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Start Healthcare Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousHealthcare;