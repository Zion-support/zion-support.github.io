import React from 'react'''''
import { Helmet} from 'react-helmet-async'''''
import { Cloud, Server, Database, Shield, Zap, Globe} from 'lucide-react''''
const CloudInfrastructurePage: React.FC = () => {}
  const services = [{}
      icon: "Cloud",""
      title: 'Cloud Migration','''''
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.','''''
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']''''},'
    {}
      icon: "Server",""
      title: 'Infrastructure as Code','''''
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.','''''
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']''''},'
    {}
      icon: "Database",""
      title: 'Database Solutions','''''
      description: 'Optimize your database performance and scalability in the cloud environment.','''''
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']''''},'
    {}
      icon: "Shield",""
      title: 'Security & Compliance','''''
      description: 'Implement robust security measures and ensure compliance with industry standards.','''''
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']''''},'
    {}
      icon: "Zap",""
      title: 'Auto-scaling','''''
      description: 'Automatically scale your resources based on demand to optimize costs and performance.','''''
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']''''},'
    {}
      icon: "Globe",""
      title: 'Multi-cloud Strategy','''''
      description: 'Leverage multiple cloud providers for better resilience and vendor independence.','''''
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization']''''}]'
const CloudInfrastructurePage: React.FC = () => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">"""
      <Helmet></Helmet></</Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, automation, security, and optimization." />"""
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security" />"""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"""
        {/* Hero Section */}
        <div className="text-center mb-16">"""
          <h1 className="text-5xl font-bold text-white mb-6">"""
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Infrastructure</span>"""
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"""
            Build, migrate, and optimize your cloud infrastructure for maximum performance,
            security, and cost-effectiveness.
          </p></div><//div></<//div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"""
          {services.map((service, _index) => {}
            const Icon = service.icon
            return (
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">"""
                <div className="flex items-center mb-4">"""
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mr-4">"""
                    <Icon className="w-6 h-6 text-white" />"""
                  </div><//div></<//div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>"""
                </div><//div></<//div>
                <p className="text-gray-300 mb-4">{service.description}</p>"""
                <ul className="space-y-2">"""
                  {service.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">"""
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>"""
                      {feature}
                    </li><//li></<//li>
                  ))}
                </ul></div><//div></<//div>
            )})}
        </div><//div></<//div>
        {/* CTA Section */}
        <div className="text-center">"""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">"""
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>"""
            <p className="text-gray-300 mb-6">"""
              Our cloud experts can help you design, implement, and optimize your cloud infrastructure for success.
            </p><//p></<//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"""
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">"""
                Start Migration
              </button><//button></<//button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">"""
                Get Assessment
              </button></div><//div></div></div><//div></<//div>
      </div></div>;  )}
export default CloudInfrastructurePage
</Icon><//Icon></<//Icon>