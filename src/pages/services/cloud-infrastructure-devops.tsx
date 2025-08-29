import React from 'react';
import { SEO } from '../../components/SEO';
import { Cloud, Zap, Brain, Target, TrendingUp, Users, Server, Code } from 'lucide-react';

export default function CloudInfrastructureDevOps() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Cloud Infrastructure & DevOps - Zion Tech Group"
        description="Transform your infrastructure with cloud-native solutions and DevOps practices. Scale efficiently, deploy faster, and maintain high availability."
        keywords="cloud infrastructure, DevOps, cloud migration, infrastructure automation, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
              <Cloud className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure & DevOps
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Modernize your infrastructure with cloud-native solutions and DevOps practices. 
            Deploy faster, scale efficiently, and maintain high availability with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <Cloud className="h-5 w-5 mr-2" />
              Get Started
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive infrastructure and automation solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
              <p className="text-gray-300">
                Seamless migration to AWS, Azure, or Google Cloud with minimal downtime and risk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
              <p className="text-gray-300">
                Manage infrastructure using code with Terraform, CloudFormation, and Ansible.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Auto Scaling</h3>
              <p className="text-gray-300">
                Automatically scale your infrastructure based on demand and performance metrics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
              <p className="text-gray-300">
                Automated build, test, and deployment pipelines for faster and more reliable releases.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Alerting</h3>
              <p className="text-gray-300">
                Comprehensive monitoring and alerting systems for proactive issue detection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">
                Optimize cloud resources for cost efficiency and maximum performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud Services We Support
            </h2>
            <p className="text-xl text-gray-300">
              Multi-cloud expertise across all major cloud providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-fit mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AWS Services</h3>
              <p className="text-gray-300">
                EC2, S3, Lambda, RDS, ECS, and more AWS services for scalable cloud solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-fit mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Azure Services</h3>
              <p className="text-gray-300">
                Virtual Machines, Blob Storage, Functions, SQL Database, and Azure DevOps integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Google Cloud</h3>
              <p className="text-gray-300">
                Compute Engine, Cloud Storage, Cloud Functions, and BigQuery for data analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Practices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              DevOps Best Practices
            </h2>
            <p className="text-xl text-gray-300">
              Implement proven DevOps methodologies to accelerate delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Development Practices</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Version control with Git and branching strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Code review and quality gates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Automated testing and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Continuous integration and deployment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Operations Practices</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Infrastructure automation and orchestration</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Monitoring and observability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Incident response and disaster recovery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Security and compliance automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Modernize your infrastructure with cloud-native solutions and DevOps practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <Cloud className="h-5 w-5 mr-2" />
              Start Migration
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Contact Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}