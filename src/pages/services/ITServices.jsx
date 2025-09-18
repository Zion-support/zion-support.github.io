import React from 'react';
import { Link } from 'react-router-dom';
import { ComputerDesktopIcon, ServerIcon, ShieldCheckIcon, CogIcon, WrenchScrewdriverIcon, CloudIcon } from '@heroicons/react/24/outline';
const ITServices = () => {
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <ComputerDesktopIcon className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions that keep your business running smoothly. From infrastructure 
              management to cybersecurity, we provide end-to-end IT support for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
                Get IT Support
              </Link>
              <Link to="/case-studies" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete IT Infrastructure Solutions
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Zion Tech Group delivers enterprise-grade IT services designed to optimize your technology 
                infrastructure, enhance security, and drive operational efficiency. Our team of certified 
                professionals ensures your IT systems are always up-to-date, secure, and performing at peak levels.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Whether you need ongoing IT support, infrastructure upgrades, or strategic technology 
                consulting, we provide scalable solutions that grow with your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Proactive Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Cloud Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Cybersecurity</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <ServerIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Infrastructure Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <ShieldCheckIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Security & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <CloudIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Cloud Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <WrenchScrewdriverIcon className="h-5 w-5 text-white"/>
                    </div>
                    <span className="text-lg font-semibold">Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Core IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <ServerIcon className="h-8 w-8 text-blue-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive management of your IT infrastructure including servers, networks, storage, 
                and data centers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Server administration & maintenance</li>
                <li>• Network design & optimization</li>
                <li>• Storage management & backup</li>
                <li>• Data center operations</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect your business from cyber threats and ensure 
                compliance with industry standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Threat detection & prevention</li>
                <li>• Security audits & assessments</li>
                <li>• Compliance management</li>
                <li>• Incident response</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <CloudIcon className="h-8 w-8 text-purple-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Strategic cloud solutions to modernize your infrastructure and improve scalability 
                and cost efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cloud migration & strategy</li>
                <li>• Multi-cloud management</li>
                <li>• Cloud security & compliance</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <WrenchScrewdriverIcon className="h-8 w-8 text-orange-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-300 mb-4">
                Round-the-clock technical support to resolve issues quickly and keep your systems 
                running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 24/7 help desk support</li>
                <li>• Remote & on-site assistance</li>
                <li>• System troubleshooting</li>
                <li>• User training & support</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <CogIcon className="h-8 w-8 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">System Administration</h3>
              <p className="text-gray-300 mb-4">
                Expert administration of your critical systems including user management, updates, 
                and performance optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• User & access management</li>
                <li>• System updates & patches</li>
                <li>• Performance monitoring</li>
                <li>• Backup & recovery</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                <ComputerDesktopIcon className="h-8 w-8 text-pink-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Desktop Support</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive desktop and end-user support to ensure productivity across your organization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Hardware & software support</li>
                <li>• Device management</li>
                <li>• Software deployment</li>
                <li>• End-user training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Specialized IT Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Enterprise IT</h3>
              <p className="text-gray-300 mb-6">
                Scalable IT solutions designed for large enterprises with complex infrastructure needs. 
                Our enterprise-grade solutions ensure reliability, security, and performance at scale.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>High-availability infrastructure design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Enterprise security frameworks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Disaster recovery planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Compliance & governance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Green IT</h3>
              <p className="text-gray-300 mb-6">
                Sustainable IT solutions that reduce environmental impact while improving efficiency 
                and reducing costs. Our green IT initiatives help businesses meet sustainability goals.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Energy-efficient infrastructure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Virtualization & consolidation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Renewable energy integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Sustainability reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">IoT Services</h3>
              <p className="text-gray-300 mb-6">
                Internet of Things solutions that connect devices and systems to create intelligent, 
                automated environments. Our IoT expertise drives innovation and operational efficiency.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>IoT device management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Data collection & analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Automation & control systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Security & privacy</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">Mobile Services</h3>
              <p className="text-gray-300 mb-6">
                Mobile-first IT solutions that enable your workforce to be productive anywhere, anytime. 
                Our mobile services ensure secure, seamless access to business resources.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Mobile device management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Mobile application development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Secure mobile access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Mobile security policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Service Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assessment</h3>
              <p className="text-gray-300">
                Comprehensive evaluation of your current IT infrastructure, identifying areas for 
                improvement and optimization opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-300">
                Development of a customized IT strategy aligned with your business objectives, 
                including technology roadmap and implementation plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-300">
                Expert execution of your IT strategy with minimal disruption, ensuring smooth 
                transitions and optimal system performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-300">
                Ongoing support and maintenance to ensure your IT systems continue to perform 
                optimally and adapt to changing business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Zion Tech Group for IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified Expertise</h3>
                  <p className="text-gray-300">
                    Our team holds industry-leading certifications and stays current with the latest 
                    technology trends and best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proactive Approach</h3>
                  <p className="text-gray-300">
                    We don't just fix problems - we prevent them through proactive monitoring, 
                    maintenance, and strategic planning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                  <p className="text-gray-300">
                    Our IT services grow with your business, providing flexible solutions that 
                    adapt to changing needs and requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-300">
                    Round-the-clock support ensures your IT systems are always running smoothly, 
                    with rapid response times for critical issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
                  <p className="text-gray-300">
                    Strategic IT planning and implementation that reduces costs while improving 
                    efficiency and system reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Alignment</h3>
                  <p className="text-gray-300">
                    IT solutions that are directly aligned with your business objectives, driving 
                    growth and competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let Zion Tech Group transform your IT operations with comprehensive, reliable, and 
            cost-effective solutions that drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">
              Get IT Support Today
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>);
};
export default ITServices;
