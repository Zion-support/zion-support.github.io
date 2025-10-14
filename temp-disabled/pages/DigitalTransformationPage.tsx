import React from 'react'''''
import { Helmet} from 'react-helmet-async'''''
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle} from 'lucide-react''''
const DigitalTransformationPage: React.FC = () => {}
  const services = [{}
      icon: "RefreshCw",""
      title: 'Process Automation','''''
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.','''''
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']''''},'
    {}
      icon: "Users",""
      title: 'Change Management','''''
      description: 'Guide your team through digital transformation with effective change management strategies.','''''
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']''''},'
    {}
      icon: "Target",""
      title: 'Digital Strategy','''''
      description: 'Develop comprehensive digital strategies aligned with your business objectives.','''''
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis']''''},'
    {}
      icon: "TrendingUp",""
      title: 'Data Analytics','''''
      description: 'Transform data into actionable insights to drive better business decisions.','''''
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Development', 'Insight Generation']''''},'
    {}
      icon: "Lightbulb",""
      title: 'Innovation Consulting','''''
      description: 'Identify and implement innovative technologies to stay competitive in the digital age.','''''
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']''''},'
    {}
      icon: "CheckCircle",""
      title: 'Digital Maturity','''''
      description: 'Assess and improve your organization\'s digital maturity across all business functions.','''''
      features: ['Maturity Assessment', 'Gap Analysis', 'Improvement Plans', 'Progress Tracking']''''}]'
const DigitalTransformationPage: React.FC = () => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">"""
      <Helmet></Helmet></</Helmet>
        <title>Digital Transformation | Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and technology infrastructure." />"""
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, innovation" />"""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"""
        {/* Hero Section */}
        <div className="text-center mb-16">"""
          <h1 className="text-5xl font-bold text-white mb-6">"""
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transformation</span>"""
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"""
            Transform your business for the digital age with comprehensive strategies,
            modern technologies, and innovative solutions.
          </p></div><//div></<//div>
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"""
          {services.map((service, _index) => {}
            const Icon = service.icon
            return (
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">"""
                <div className="flex items-center mb-4">"""
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mr-4">"""
                    <Icon className="w-6 h-6 text-white" />"""
                  </div><//div></<//div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>"""
                </div><//div></<//div>
                <p className="text-gray-300 mb-4">{service.description}</p>"""
                <ul className="space-y-2">"""
                  {service.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">"""
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>"""
                      {feature}
                    </li><//li></<//li>
                  ))}
                </ul></div><//div></<//div>
            )})}
        </div><//div></<//div>
        {/* CTA Section */}
        <div className="text-center">"""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">"""
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>"""
            <p className="text-gray-300 mb-6">"""
              Our digital transformation experts can help you modernize your operations and stay competitive.
            </p><//p></<//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"""
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300">"""
                Start Transformation
              </button><//button></<//button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">"""
                Get Assessment
              </button></div><//div></div></div><//div></<//div>
      </div></div>;  )}
export default DigitalTransformationPage
</Icon><//Icon></<//Icon>