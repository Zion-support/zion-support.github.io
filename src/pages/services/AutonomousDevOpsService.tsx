import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap 
} from "lucide-react";

const AutonomousDevOpsService: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous DevOps Services - 80% Faster Releases | Zion Tech Group</title>
        <meta 
          name="description"
          content="Transform your DevOps with autonomous self-optimizing CI/CD pipelines. Achieve 99.99% uptime, 80% faster releases, and eliminate manual intervention with AI-driven automation."
        />
        <meta 
          name="keywords"
          content="autonomous devops, self-healing ci/cd, automated pipelines, devops automation, zero downtime deployment, AI devops, intelligent automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services/autonomous-devops" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">New Service Launch - October 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autonomous DevOps Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Self-Optimizing CI/CD Pipelines with 80% Faster Releases and Zero Downtime
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/blog/autonomous-devops-revolution-2025"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Autonomous DevOps Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered DevOps platform continuously optimizes your entire software delivery pipeline
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-2xl font-bold mb-4">Continuous Optimization</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Self-healing CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Automated performance tuning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Intelligent resource allocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-2xl font-bold mb-4">Zero-Touch Deployment</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Automated rollback on failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Blue-green deployments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Canary release automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Failure prediction and prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Performance bottleneck detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                    <span>Capacity planning automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">90-Day Implementation Roadmap</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-2xl font-bold mb-4">Days 1-30: Foundation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Infrastructure assessment</li>
                  <li>• CI/CD pipeline audit</li>
                  <li>• Security compliance review</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-2xl font-bold mb-4">Days 31-60: Integration</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI model deployment</li>
                  <li>• Pipeline automation setup</li>
                  <li>• Monitoring integration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-2xl font-bold mb-4">Days 61-90: Optimization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Performance tuning</li>
                  <li>• Team training</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-12 rounded-2xl backdrop-blur-sm border border-white/10">
                <h2 className="text-4xl font-bold text-center mb-8">Expected ROI</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Benefits:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <span>Complete autonomous DevOps platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <span>90-day implementation & migration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                        <span>AI model training on your pipelines</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3">Expected ROI:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                        <span>$10M+ annual cost savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-5 h-5 text-blue-400 mt-1" />
                        <span>80% reduction in deployment time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-blue-400 mt-1" />
                        <span>95% reduction in downtime incidents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-blue-400 mt-1" />
                        <span>99.99% uptime guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Start Your Autonomous DevOps Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that have achieved 80% faster releases with autonomous DevOps
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/case-studies"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutonomousDevOpsService;