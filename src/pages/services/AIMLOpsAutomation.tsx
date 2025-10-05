import React from 'react';

import { CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';





;

const AIMLOpsAutomation = () => {
  return (
    <>
      <Helmet>
        <title>AI MLOps Automation Services | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Enterprise MLOps automation with 99.9% reliability. Deploy, monitor, and scale ML models with automated pipelines, real-time monitoring, and intelligent optimization."
        />
        <meta name="keywords" content="MLOps, AI automation, ML deployment, model monitoring, CI/CD for ML, automated ML pipelines" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI MLOps Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Deploy, monitor, and scale ML models with enterprise-grade automation achieving 99.9% reliability
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Uptime SLA</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 dark:text-gray-300">Faster Deployments</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$2.4M</div>
                <div className="text-gray-600 dark:text-gray-300">Avg Annual Savings</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">72%</div>
                <div className="text-gray-600 dark:text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive MLOps Platform</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end automation for the entire ML lifecycle - from development to production
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Automated Pipelines */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Automated CI/CD Pipelines</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Fully automated build, test, and deployment pipelines with integrated quality gates and rollback capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Automated testing and validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Blue-green deployments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Instant rollback on failure</span>
                  </li>
                </ul>
              </div>

              {/* Real-time Monitoring */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Real-time Model Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Continuous monitoring of model performance, data drift, and prediction quality with automated alerting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Performance metrics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Data drift detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Automated retraining triggers</span>
                  </li>
                </ul>
              </div>

              {/* Model Registry */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Centralized Model Registry</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Version-controlled model registry with lineage tracking, approval workflows, and compliance auditing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Version control and lineage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Compliance audit trails</span>
                  </li>
                </ul>
              </div>

              {/* Feature Store */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Enterprise Feature Store</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Centralized feature management with versioning, sharing, and real-time serving capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Feature reusability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Low-latency serving</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Training-serving consistency</span>
                  </li>
                </ul>
              </div>

              {/* Auto-scaling */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Intelligent Auto-scaling</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Predictive auto-scaling based on traffic patterns, ensuring optimal performance and cost efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Predictive scaling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Zero downtime scaling</span>
                  </li>
                </ul>
              </div>

              {/* Experiment Tracking */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Experiment Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive experiment tracking with parameter logging, metric visualization, and model comparison.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Parameter logging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Visual comparison</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">Reproducibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Use Cases</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real-world results from enterprise deployments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  Leading bank deployed 450+ ML models with automated monitoring and compliance
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>99.97% uptime across all models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>85% reduction in deployment time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Full regulatory compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">E-Commerce</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  Global retailer scaled recommendation systems to 50M+ daily predictions
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>32% increase in conversion rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>$4.2M annual cost savings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Sub-100ms prediction latency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your ML Operations?
            </h2>
            <p className="text-xl mb-8">
              Join leading enterprises achieving 99.9% reliability and 72% cost reduction
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMLOpsAutomation;
